import Catalogue from "./components/catalogue/Catalog"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"

function App() {
 

  return (

    <div id="box">

        <Header/>
        <Home/>

        <Routes>
            <Route path="/"></Route>
            <Route path="/games"><Catalogue/></Route>
            <Route path="/games/create"></Route>
        </Routes>


    </div>

  )
}

export default App
