import React from "react";
import styled from "styled-components";

const Card = styled.div `
    border: 4px dotted black;
    border-radius: 10%;
    width: 280px;
    height: auto;
    margin-left: 43%;
    margin-bottom: 2%;
`
const CardTitle = styled.h1 `
    background-color: #1E90FF;
    padding: 2%;
    border-radius: 15%;
    border: 1px solid #1E90FF;
`
const CardText = styled.p `
    color: #F1E0F1;
    font-weight: 600;
    background-color: #3498DB;
    padding: 7%;
    border: 1px solid  #3498DB;
    border-radius: 15%;

`


function CharCard(props) {
    
    return (

        <Card className = "card">
            <CardTitle className = "card-title"> Name: {props.name} </CardTitle>
            <CardText className = "card-text"> gender: {props.gender} </CardText>
            <CardText className = "card-text"> height: {props.height} </CardText>
            <CardText className = "card-text"> hair color: {props.hair_color} </CardText>
            <CardText className = "card-text"> skin color: {props.skin_color} </CardText>
            
        </Card>
    )
}

export default CharCard;