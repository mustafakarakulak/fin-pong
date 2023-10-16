import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const myContext = createContext({});

export default function Context({children}){

    const [userObject, setUserObject] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5001/api/ali", {withCredentials: true}).then(res => {
            if(res.data){
                setUserObject(res.data);
            }
        }).catch(error => {
            console.log("Error",error);
        })
    },[])
    return ( <myContext.Provider value={userObject}>{children}</myContext.Provider> );
}

