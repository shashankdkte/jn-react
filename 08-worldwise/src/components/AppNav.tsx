import {NavLink} from "react-router-dom"
const AppNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/product" >Products</NavLink>
        </li>
          <li>
          <NavLink to="/pricing" >Pricing</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AppNav