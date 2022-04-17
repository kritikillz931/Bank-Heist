import React, { useState } from "react";
import { robberDetails } from "./CrewDetails"
import { robberAvatar } from "./CrewDetails"
import "./CrewSelection.css"

export const CrewSelection = ({}) => {


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
                                        <input value={robber} type="checkbox"/>
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