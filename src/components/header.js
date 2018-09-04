import React from "react"

const Header = (props) => {
    return (
        <header>
            <h3 onClick={props.something}>Something</h3>
            <img src = "./assets/g-dino.png"/>
        </header>
    )
}

export default Header