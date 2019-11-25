import React from "react";
import styled from "styled-components";

function CharCard(props) {
    
    return (

        <div className = "card">
            <h1 className = "card-title"> Name: {props.name} </h1>
            <p className = "card-text"> gender: {props.gender} </p>
            <p className = "card-text"> height: {props.height} </p>
            
        </div>
    )
}

export default CharCard;