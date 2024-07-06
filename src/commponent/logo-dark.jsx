import iconLight from "../images/icon-sun.svg"
import iconDark from "../images/icon-moon.svg"
import imgLightDesk from "../images/bg-desktop-light.jpg"
import imgDarkDesk from "../images/bg-desktop-dark.jpg"
import { useState } from "react"

const Logo = ({darkMode}) => {
    const [dark, setDark] = useState(true)
    if (dark) {
        document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
        document.body.style.backgroundImage = `url(${imgDarkDesk})`
    } else {
        document.body.style.backgroundColor = 'hsl(236, 33%, 92%)'
        document.body.style.backgroundImage = `url(${imgLightDesk})`
    }
    const darkLight = () => {
        darkMode()
        setDark(!dark)
    }
    return (
        <>
            <div className="logo-mode">
                <div className="logo">T O D O</div>
                <div className="dark-mode" onClick={darkLight} >
                    <img src={dark ? iconLight : iconDark} />
                </div>
            </div>
        </>
    )
}

export default Logo;