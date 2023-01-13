import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
    return (
        <div className={'bg-[#0d1117]'}>
            <NavBar/>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path={'/explore'} element={<Explore/>}/>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                </Route>
                {/*<ProtectedRoutes path='/explore' component={<Explore/>} auth={true}/>*/}

            </Routes>
        </div>
    );
}

export default App;
