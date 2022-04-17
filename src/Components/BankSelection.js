import React, { useDebugValue, useEffect, useState } from "react";

import "../Components/BankSelection.css"
import { banks } from "./BankDetails";

export const BankSelection = () => {
    const [bankChecked, setBankChecked] = useState({})
    const [heistBudget, setHeistBudget] = useState(0)

    useEffect(() => {
        
    }, [])

    console.log(bankChecked)

    const handleInputChange = (event) => {

        const selection = { ...bankChecked }
        selection[event.target.name] = event.target.value
        setBankChecked(selection)
        if (bankChecked.bankSelection >= 1 && bankChecked.bankSelection <= 4) {
            selection["heistBudget"] = Math.round(Math.random() * (50000 - 30000) + 30000)
        }
        else if (bankChecked.bankSelection >= 5 && bankChecked.bankSelection <= 7) {
            selection["heistBudget"] = Math.round(Math.random() * (100000 - 70000) + 70000)
        }
        else if (bankChecked.bankSelection >= 8 && bankChecked.bankSelection <= 10) {
            selection["heistBudget"] = Math.round(Math.random() * (150000 - 80000) + 80000)
        }
        console.log(selection)
    }
    



    return (
        <>
            <div>
                <h3>PICK YOUR BANK</h3>
            </div>
                <div>Heist Budget: ${bankChecked.heistBudget}</div>
            <div className="imageContainer">
                {banks.map((bank) => {

                    return (
                        <>
                        <div>
                            <img className="bankImg" src={bank.img} />
                            <div className="bankDetails">
                                <h6>
                                    Bank Difficulty: {bank.difficulty}</h6>
                            </div>
                            <input name="bankSelection" value={bank.difficulty} onChange={handleInputChange} type="radio" />
                        </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}