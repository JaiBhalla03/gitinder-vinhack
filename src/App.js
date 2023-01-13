import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const getUsers = async()=>{
            fetch(`https://gitinder-backend-api.onrender.com/auth/login/success`, {
                method: 'GET',
                credentials:'include',
                headers:{
                    Accept: 'application/json',
                    "Content-type": "application/json",
                    "Access-control-Allow-Credentials": true,
                },
            }).then(res=>{
                if(res.status === 200){
                    return res.json()
                }
                throw new Error("authentication failed")
            }).then(resObject=>{
                setUser(resObject.user);
            }).catch((err)=>{
                console.log(err);
            })
        };
        getUsers();
    },[])
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
