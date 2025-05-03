import React from "react";
import { Outlet } from "react-router";


const favourites=()=>{
    return(
        <div>
            <h1>favouriote page</h1>

        <Outlet></Outlet>
        </div>
    )
}

export default favourites