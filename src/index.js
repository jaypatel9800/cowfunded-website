import App from "./App"
import { ThemeProvider } from "styled-components"
import * as theme from "./config/theme"
import ReactDOM from "react-dom"


ReactDOM.render(<ThemeProvider theme={theme}><App/></ThemeProvider>, document.getElementById('root'))