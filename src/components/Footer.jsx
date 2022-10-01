import React from "react"
import "../assets/font-awesome-4.7.0/css/font-awesome.css"

export default function Footer() { 
    return (
        <div className="footer-section">
            <a href="https://github.com/Judge-Paul" target="_blank"><i className="fa fa-github"></i></a>
            <a href="https://twitter.com/paulogebe" target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="https://linkedin.com/in/judge-paul-ogebe-719370246" target="_blank"><i className="fa fa-linkedin"></i></a>
        </div>
    )
}

console.log(Footer())