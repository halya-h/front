import Auth from './components/Auth.js'
import Calculation from './components/Calculation.js'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

const App = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const authToken = cookies.AuthToken
    const userEmail = cookies.Email

    return (
        <div>
            {!authToken && <Auth/>}
            {authToken && <Calculation/>}

        </div>
    )
}

export default App

