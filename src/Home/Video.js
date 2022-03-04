import React from "react"
import "./Home.css"


function Video() {


    return (

        <div className="Video" id="Video">
            <iframe className="reallyVideo" src="https://www.youtube.com/embed/ob_d2eus4tE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )

}
export default Video;