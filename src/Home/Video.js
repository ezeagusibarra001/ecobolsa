import React, { useState, useEffect } from "react"
import "./Home.css"


function Video(props) {


    return (

        <div className="Video" id="Video">
            <iframe className="reallyVideo" src="https://www.youtube.com/embed/vs0dJ0XwwJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )

}
export default Video;