import React from "react";
import Bank1 from "../Images/Bank1.png"
import Bank2 from "../Images/Bank2.png"
import Bank3 from "../Images/Bank3.png"
import "../Components/BankSelection.css"

export const BankSelection = () => {
    let bank1 = {
        img: Bank1,
        difficulty: Math.floor(Math.random(1) * 10 + 1)
    }
    let bank2 = {
        img: Bank2,
        difficulty: Math.floor(Math.random(1) * 10 + 1)
    }
    let bank3 = {
        img: Bank3,
        difficulty: Math.floor(Math.random() * 10 + 1)
    }

    let banks = [bank1, bank2, bank3]

    const handleBankSelection = (bank) => {
        console.log(bank)
        sessionStorage.setItem("bankDifficulty", bank.difficulty)
        sessionStorage.setItem("bankImg", bank.img)
        
    }
    return (
        <>
        <div>
            <h3>PICK YOUR BANK</h3>
        </div>
        <div className="imageContainer">
            {banks.map((bank) => {
                return (
                    <div >
                        <img onClick={() => handleBankSelection(bank)} className="bankImg" src={bank.img}/>
                        <h6>Bank Difficulty: {bank.difficulty}</h6>
                    </div>
                )
            })}
        </div>
            </>
    )
}