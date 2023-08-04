import React, { useState } from "react"
// import { Link } from "gatsby"
// import { FiAlignJustify } from "react-icons/fi"
import Logo from "../assets/svg/brand-logo.svg"
const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="brand__logo">
                        <a href="/">
                            <Logo />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar