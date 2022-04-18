import React from "react";
import { equipment } from "./EquipmentDetails";
import "../Components/EquipmentSelection.css"

export const EquipmentSelection = () => {

    return (
        <>
        <div>
            <h3>PICK YOUR EQUIPMENT</h3>
        </div>
        <div className="equipmentContainer">
            {equipment.map((e) => {
                return (
                    <>
                    <div>
                        <img className="equipmentImg" src={e.img}/>
                    <div className="equipmentDetails">
                        {e.type}
                        <div>
                        {e.cost}
                        </div>
                        <div>
                    <input className="equipmentQuantity" type="number" placeholder="Quantity"/>
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