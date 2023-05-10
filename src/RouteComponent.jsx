import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Main from "./pages/MainPage"


const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/teste" Component={Main}></Route>
            </Routes>
        </Router>
       
    )
}



export default AppRoute;