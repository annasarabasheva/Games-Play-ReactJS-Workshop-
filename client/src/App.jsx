import { useState } from "react"
import Catalogue from "./components/catalogue/Catalog"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Route, Routes } from "react-router-dom"
import AuthContext from "./contexts/authContext"

function App() {
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {
        console.log(values)
    }

    return (
        
        <AuthContext.Provider value={{loginSubmitHandler}}>
            <div id="box">

                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/games" element={<Catalogue/>}/>
                    <Route path="/games/create" element={<GameCreate/>}/>
                    <Route path="/games/details/:gameID" element={<GameDetails/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>


            </div>
        </AuthContext.Provider>
       

  )
}

export default App
