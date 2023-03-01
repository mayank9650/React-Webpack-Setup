import "./style.css"
import reactIcon from './React.png'
import ReactLogo from './logo.svg'

export const App = () =>{
    return <>
    <h2>React Code Setup {process.env.NODE_ENV} {process.env.name}</h2>
    <img src={reactIcon} alt="React Icon" width={'100px'}/>
    <img src={ReactLogo} alt="React Logo" width={'100px'}/>

    </>
    
}