import React from "react"
import Logo from "../assets/user.jpg"

export default function Info() { 
    return (
        <div className="info-section">
            <img src={Logo} />
            <h2>Judge-Paul Ogebe</h2>
            <p>Front-End Developer</p>
            <div className="email-section">
                <a href="mailto:judgepaulogebe@gmail.com" className="email-btn">
                    Email
                </a>
            </div>
        </div>
    )
}
