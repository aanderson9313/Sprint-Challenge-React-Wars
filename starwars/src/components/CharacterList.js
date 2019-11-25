import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CharCard from "./CharCard";
import axios from "axios";

function CharacterList() {
    const [char, setChar] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data.results);
            setChar(response.data.results);
  
        })
        .catch(error => {
            console.log("The force is not strong with this one", error);
        });
  
    }, []);

    return (
        <div className = "names">
            {char.map((Char, index) => {
                
                return (
                    <CharCard 
                    key = {index}
                    name = {Char.name}
                    gender = {Char.gender}
                    height = {Char.height}
                    hair_color = {Char.hair_color}
                    />
                )
            })}

        </div>
    );
};

export default CharacterList;
