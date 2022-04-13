import React, { useState } from "react";
import { robberName } from "./CrewDetails"
import { robberAvatar } from "./CrewDetails"
import "./CrewSelection.css"
export const CrewSelection = () => {


    return (
        <>
            <h3>PICK YOUR CREW</h3>
            <div className="crewContainer">
                {robberName.map((robber) => {
                    return (
                        <>
                            <div className="crewCards">
                                <div className="crewImages">
                                    {robberAvatar}
                                </div>
                                <div className="crewDetails">
                                    {robber}
                                    <div>
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