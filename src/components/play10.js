import React from "react"
import EndPlayButton from "./endPlayButton"


const Play10 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2  style={{textAlign: `center`}}>PLACEHOLDER 10</h2>
                <p>
                    <a href="https://docs.google.com/presentation/d/e/2PACX-1vSdiSIjgNcJWtKfeMD4xHYNC0kkbmVP1SMhUPX4MuSvciCJUNuFPPNBJEO5WqkicXIelCqiRefGJtMy/pub?start=false&loop=false&delayms=3000" rel="noopener noreferrer" target='_blank'>Here's the poster.</a>
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play10