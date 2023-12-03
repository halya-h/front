import React from 'react';
import { Link } from 'react-router-dom';
import {useCookies} from "react-cookie";


const History = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        console.log('signout')
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()

    }
    return (
            <div className="button-container">
                <button className="button" onClick={signOut}>SIGN OUT</button>
                <button className="button">HISTORY</button>
            </div>

    );
}

export default History;
