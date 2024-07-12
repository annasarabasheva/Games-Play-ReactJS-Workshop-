import Header from "./components/header/Header"
import { Route, Routes } from "react-router-dom"

function App() {
 

  return (

    <div id="box">

        <Header/>
        <Routes>
            <Route path="/"></Route>
            <Route path="/games"></Route>
            <Route path="/games/create"></Route>
        </Routes>


    </div>

  )
}

export default App
