import React from "react";
export default function Card ({name, types}){
    return (
        <div>
            <h3>{name}</h3>
            <h5>{types}</h5>
        </div>
    )

}