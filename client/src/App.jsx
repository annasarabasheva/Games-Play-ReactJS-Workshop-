
import Catalogue from "./components/catalogue/Catalog"
import GameCreate from "./components/game-create/GameCreate"
import GameDetails from "./components/game-details/GameDetails"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import { Route, Routes} from "react-router-dom"
import {AuthProvider} from "./contexts/authContext"
import Logout from "./components/logout/Logout"
import GameEdit from "./components/game-edit/GameEdit"

function App() {
   
    return (
        
        <AuthProvider>
            <div id="box">
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/games" element={<Catalogue/>}/>
                    <Route path="/games/create" element={<GameCreate/>}/>
                    <Route path="/games/details/:gameId" element={<GameDetails/>}/>
                    <Route path="/games/details/:gameId/edit" element={<GameEdit />} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>


            </div>
        </AuthProvider>
       

  )
}

export default App
