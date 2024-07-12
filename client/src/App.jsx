import Catalogue from "./components/catalogue/Catalog"
import GameCreate from "./components/game-create/GameCreate"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"

function App() {
 

  return (

    <div id="box">

        <Header/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/games" element={<Catalogue/>}/>
            <Route path="/games/create" element={<GameCreate/>}/>
        </Routes>


    </div>

  )
}

export default App
