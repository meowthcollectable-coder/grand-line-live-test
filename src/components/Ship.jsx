import React from "react";
import { ASSETS } from "../assets";

export default function Ship({ name, pirate, progress, isWinner }) {
  const translateX = `${Math.min(100, progress * 92)}%`;
  return (
    <div className="ship-row">
      <div className="ship-label">
        <div className="ship-name">{name}</div>
        <div className="ship-pirate">{pirate}</div>
      </div>
      <div className="ship-track">
        <div className={`ship ${isWinner ? "winner" : ""}`} style={{ transform: `translateX(${translateX})` }}>
          {ASSETS.SHIP ? <img src={ASSETS.SHIP} alt="ship" /> : <div style={{width:44,height:12,background:'#6b3',borderRadius:4}}/>}
        </div>
      </div>
    </div>
  );
}
