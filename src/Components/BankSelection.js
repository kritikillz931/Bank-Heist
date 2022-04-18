import React, {useEffect, useState } from "react";

import "../Components/BankSelection.css"
import { banks } from "./BankDetails";

export const BankSelection = () => {
    const [bankChecked, setBankChecked] = useState({})
    const [heistBudget, setHeistBudget] = useState({})

    useEffect(() => {
        
    }, [heistBudget])



    const handleInputChange = (event) => {

        const selection = { ...bankChecked }
        selection[event.target.name] = event.target.value
        setBankChecked(selection)

        if (selection.bankSelection >= 1 && selection.bankSelection <= 4) {
            selection["heistBudget"] = Math.round(Math.random() * (50000 - 30000) + 30000)
            localStorage.setItem("heistBudget", selection["heistBudget"])
        }
        else if (selection.bankSelection >= 5 && selection.bankSelection <= 7) {
            selection["heistBudget"] = Math.round(Math.random() * (100000 - 70000) + 70000)
            localStorage.setItem("heistBudget", selection["heistBudget"])
        }
        else {

            selection["heistBudget"] = Math.round(Math.random() * (150000 - 80000) + 80000)
            localStorage.setItem("heistBudget", selection["heistBudget"])
        }
        setHeistBudget(localStorage.getItem("heistBudget"))
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
                                        <h6>Guards On Duty: {bank.numOfGuards}</h6>
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