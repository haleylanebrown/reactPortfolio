import React from "react";
import "./Card.css";
import { isProperty } from "@babel/types";

function FriendCard(props) {
  return (
    <div className="card">
      <div onClick = {() => props.setClicked(props.id)} className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
