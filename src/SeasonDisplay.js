import "./SeasonDisplay.css"
import React from "react"

const seasonConfig = {
    summer: {
        text: "Lets hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Brr Its Chily",
        iconName: "umbrella"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    } else {
        return lat > 0 ? "winter" : "summer"
    }
}



const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    console.log(seasonConfig[season])
    // const text = season === "winter" ? "Brrr Its Chilly" : "Lets hit the beach";
    // const icon = season === "winter" ? "snowflake" : "sun"
    // console.log(icon)
    return <div className={`season-display ${season}`}  >
        < i className={` icon-left massive ${iconName} icon`} />
        <h1>  {text}</h1>
        < i className={`icon-right  massive ${iconName} icon`} />
    </div >
};

export default SeasonDisplay