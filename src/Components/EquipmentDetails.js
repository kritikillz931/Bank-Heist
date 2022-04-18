import React from "react";

import Dynamite from "../Images/Dynamite.png"
import Grenade from "../Images/Grenade.png"
import MachineGun from "../Images/MachineGun.png"
import Pistol from "../Images/Pistol.png"
import Rifle from "../Images/Rifle.png"
import Shotgun from "../Images/Shotgun.png"
import SmokeGrenade from "../Images/SmokeGrenade.png"


export let equipment = [
    {
        "type": "Pistol",
        "cost": 500,
        "effectiveness": 3,
        "img": Pistol
    },
    {
        "type": "Shotgun",
        "cost": 700,
        "effectiveness": 4,
        "img": Shotgun
    },
    {
        "type": "Machine Gun",
        "cost": 1500,
        "effectiveness": 6,
        "img": MachineGun
    },
    {
        "type": "Rifle",
        "cost": 2000,
        "effectiveness": 8,
        "img": Rifle
    },
    {
        "type": "Smoke Grenade",
        "cost": 500,
        "effectiveness": 3,
        "img": SmokeGrenade
    },
    {
        "type": "Grenade",
        "cost": 500,
        "effectiveness": 7,
        "img": Grenade
    },
    {
        "type": "Dynamite",
        "cost": 500,
        "effectiveness": 7,
        "img": Dynamite
    },
]