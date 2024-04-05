import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})

    function login( user, password) {
        if (user === 'user' && password == 123456) {
            setUser({
                name: 'User',
                email: user,
                address: 'Nowhere St, number 0',
                tel: '+55 21 98765-4321',
            })
            return 'ok'
        }else{
            return 'Incorrect user or password'
        }
    }

    return (
    <AuthContext.Provider value={{ user, login }}>
        { children }

    </AuthContext.Provider>
)}