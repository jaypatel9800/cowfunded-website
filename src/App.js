import Navbar from "./components/navbar"
import Back from "./components/back"
import Main from "./components/mainPage"
import "./style.css"
const App = () => {
    return(
        <div>
            <Back/>
            <Navbar/>
            <Main/>
        </div>
    )
}

export default App