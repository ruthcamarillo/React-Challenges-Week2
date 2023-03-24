import React from "react";

function BasicInfo(props) {
    return (
        <div>
            <h3>{props.person.name}</h3>
            <h3>{props.person.number}</h3>
            <h3>{props.person.dob}</h3>
        </div>

    )





}

export default BasicInfo;