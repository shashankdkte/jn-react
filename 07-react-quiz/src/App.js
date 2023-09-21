import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import Timer from "./Timer";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining:null
}

const SECS_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type)
  {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status:"ready"
      }
    case "dataError":
      return {
        ...state,
        questions: [],
        status:"error"
      }
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION
      }
    
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      }
    
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, status: "finished", highScore: state.points > state.highScore ? state.points : state.highScore }
    
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" }
    
     case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      return state
  }
 
}
function App() {
  const [{questions,status ,index,answer,points,highScore,secondsRemaining}, dispatch] = useReducer(reducer, initialState);
const maxPossiblePoints = questions.reduce((prev, cur) => {
    return prev + cur.points
  },0)
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        dispatch({type:"dataReceived",payload:data})
      })
      .catch((err) => {
        console.log(err);
        dispatch({type:"dataError",payload:err})
        
    })
  },[])
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={questions.length} dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress  numQuestions={questions.length} index={index} answer={answer} points={points} maxPossiblePoints={maxPossiblePoints}/>
            <Question questions={questions} answer={answer} dispatch={dispatch} index={index}/>
            <Footer>
              <Timer  dispatch={dispatch} secondsRemaining={secondsRemaining}/>
              <NextButton  dispatch={dispatch} answer={answer} numQuestions={questions.length} index={index}/>
            </Footer>
          </>
        )}

        {status === "finished" && <FinishScreen  points={points} maxPossiblePoints={maxPossiblePoints} highscore={highScore} dispatch={dispatch}/>}
      </Main>
    </div>
  ); 
}

export default App;
