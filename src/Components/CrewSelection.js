import React, { useEffect, useState } from "react";
import { robberDetails } from "./CrewDetails"
import { robberAvatar } from "./CrewDetails"
import "./CrewSelection.css"

export const CrewSelection = ({ }) => {
    let crew = []
    useEffect(() => {

    }, [crew])

    const handleInputChange = (event, robber) => {
        
        if(event.target.checked === true) {
            crew.push(robber)
        } 
            if (event.target.checked === false) {
                var i = 0
                while(i < crew.length) {
                    if(crew[i] === robber) {
                        crew.splice(i, 1)
                    } else {
                        ++i
                    }
                } 
            }
        console.log(crew)
    }

    const handleOnClick = () => {
        if(crew) {
            let finalCrew = []
            finalCrew.push(crew)
            console.log(finalCrew)
        }
    }

    return (
        <>
            <h3>PICK YOUR CREW</h3>
            <div className="crewContainer" >
                {robberDetails.map((robber) => {
                    return (
                        <>
                            <div className="crewCards" >
                                <div className="crewImages">
                                    {robberAvatar}
                                    <div className="crewDetails">
                                        {robber.name}
                                        <div>
                                            Health: {robber.health}
                                        </div>
                                        <div>
                                            Skill Level: {robber.skillLevel}
                                        </div>
                                        <div>
                                            Cost To Hire: {robber.costToHire}
                                        </div>
                                        <input onClick={handleOnClick} name="hiredCrew" value={robber.name} onChange={(e) => handleInputChange(e, robber)} type="checkbox"  />
                                    </div>
                                </div>
                            </div>
                        </>

                    )

                })}
            </div>
        </>


    )
}