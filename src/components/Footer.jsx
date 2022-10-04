import React from "react"
import { FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa"


export default function Footer() { 
    return (
        <div className="footer-section">
            <a href="https://github.com/Judge-Paul" target="_blank"><FaGithub /></a>
            <a href="https://twitter.com/paulogebe" target="_blank"><FaTwitter /></a>
            <a href="https://linkedin.com/in/judge-paul-ogebe-719370246" target="_blank"><FaLinkedin /></a>
        </div>
    )
}
