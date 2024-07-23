import { useState } from "react"
import Catalogue from "./components/catalogue/Catalog"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Route, Routes, useNavigate } from "react-router-dom"
import AuthContext from "./contexts/authContext"
import * as authService from './services/authService'

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result)
        navigate('/')

    }
    const values = {
        loginSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.email,
    }

    return (
        
        <AuthContext.Provider value={values}>
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
