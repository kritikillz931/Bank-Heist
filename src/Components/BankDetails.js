import React from "react";
import Bank1 from "../Images/Bank1.png"
import Bank2 from "../Images/Bank2.png"
import Bank3 from "../Images/Bank3.png"

export let gen = Math.round(Math.random() * (10 - 1) + 1)
export let gen2 = Math.round(Math.random() * (10 - 1) + 1)
export let gen3 = Math.round(Math.random() * (10 - 1) + 1)

export let banks = [
    {
        "name": "bank1",
        "img": Bank1,
        "difficulty": gen
        
    },
    {
        "name": "bank2",
        "img": Bank2,
        "difficulty": gen2
        
    },
    {
        "name": "bank3",
        "img": Bank3,
        "difficulty": gen3
    },
]