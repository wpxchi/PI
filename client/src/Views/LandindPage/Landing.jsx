import { Link } from "react-router-dom"
import style from './Landing.module.css'
const LandingPage=()=>{
    return (
        <div className={style.fondoLanding}>
          <Link to={'/HomePage'}>
          <button className={style.botonInicio}>ENTER</button>
          </Link>
          <h1 className={style.h1Inicio}>WITH MORE THAN 200 TO EXPLORE </h1>
        </div>
    )
}

export default LandingPage