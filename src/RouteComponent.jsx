import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Main from "./pages/MainPage"
import Colabore from "./pages/Colabore/colabore";


const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/teste" Component={Main}></Route>
                <Route path="/colabore" Component={Colabore}/>
            </Routes>
        </Router>
       
    )
}



export default AppRoute;