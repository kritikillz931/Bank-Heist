import React from "react";
import Bank1 from "../Images/Bank1.png"
import Bank2 from "../Images/Bank2.png"
import Bank3 from "../Images/Bank3.png"

export let diffGen = Math.round(Math.random() * (10 - 1) + 1)
export let diffGen2 = Math.round(Math.random() * (10 - 1) + 1)
export let diffGen3 = Math.round(Math.random() * (10 - 1) + 1)

export let guardGen = Math.round(Math.random() * (5 - 1) + 1)
export let guardGen2 = Math.round(Math.random() * (5 - 1) + 1)
export let guardGen3 = Math.round(Math.random() * (5 - 1) + 1)


export let banks = [
    {
        "name": "bank1",
        "img": Bank1,
        "difficulty": diffGen,
        "numOfGuards": guardGen
        
    },
    {
        "name": "bank2",
        "img": Bank2,
        "difficulty": diffGen2,
        "numOfGuards": guardGen2
        
    },
    {
        "name": "bank3",
        "img": Bank3,
        "difficulty": diffGen3,
        "numOfGuards": guardGen3
    },
]