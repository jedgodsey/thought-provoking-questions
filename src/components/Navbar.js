import React, { Component, useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserChecker from '../models/userChecker';
import  Logout  from './auth/Logout';
import  LoginModal from './auth/LoginModal';


const Navbar = () => {
    const [auth, setAuth] = useState(useSelector(state=> state));
    const [isAthenticated, setIsAthenticated] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        // console.log("Use effect on auth");
        
    },[auth])
    

    useEffect(()=>{

        // let userIdentification = UserChecker.getUserId(auth);
        const isUserLoggedIn = UserChecker.isUserLoggedIn(auth);
        console.log(isUserLoggedIn);
        setIsAthenticated(isUserLoggedIn);
        // console.log(userIdentification);
        
    },[])

    return (
        <nav className="navbar navbar-expand-md navbar-dark" id = "siteNav">
                <a className="navbar-brand logo" href="/">tpq</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link font-weight-bolder">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/questions" className="nav-link font-weight-bolder">Questions</NavLink>
                        </li>
                        
                        {isAthenticated ? 
                        <li>
                            <div>
                                <Logout/>
                            </div>
                        </li>
                        :
                        <li>
                            <div>
                                <LoginModal/>
                            </div>
                        </li>
                        }
                        {isAthenticated && 
                        <li className="nav-item">
                            <NavLink exact to="/profile" className="nav-link font-weight-bolder">Profile</NavLink>
                        </li>}
                        
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;
