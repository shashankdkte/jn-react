/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState,useEffect,useContext,useCallback} from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: ""
};


 export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({});


  useEffect(() => {
    async function fetchCities() {
      setIsLoading(true);
      try
      {
        
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data)
      } catch (error)
      {
        console.log(error);
      }
      finally
      {
        setIsLoading(false);
        
      }
    }
    fetchCities();
  }, [])
  
  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      setIsLoading(true);

      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        console.log('data',data)
        setIsLoading(false);
        setCurrentCity(data);
      } catch(err) {
        console.log(err)
      }
    },
    [currentCity.id]
  );


  async function createCity(newCity) {
    setIsLoading(true);
    try
    {
    
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      setCities((prevCities) => [...prevCities, data]);
      setCurrentCity(data);
    } catch (error)
    {
      console.log(error);
    }
    finally
    {
      setIsLoading(false);
    }
  }

   async function deleteCity(id) {
    setIsLoading(true);
    try
    {
    
       await fetch(`${BASE_URL}/cities/${IdleDeadline}`, {
        method: "DELETE",
       
      });
      setCities((prevCities) => prevCities.filter(city => city.id !== id));
      setCurrentCity({});
    } catch (error)
    {
      console.log(error);
    }
    finally
    {
      setIsLoading(false);
    }
  }

  return (<CitiesContext.Provider value={{
    cities,
    isLoading,
    currentCity,
    getCity,
    createCity,
    deleteCity
  }}>
{children}
  </CitiesContext.Provider>
  )
}


export function useCities() {
  
  const context = useContext(CitiesContext);
  // console.log(context);
  if (context === undefined) return null;
  return context;
}


