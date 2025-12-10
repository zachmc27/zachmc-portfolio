import { Tabs } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

// Preload functions for lazy routes
const preloadPortfolio = () => import('../pages/Portfolio.jsx');
const preloadResume = () => import('../pages/Resume.jsx');
const preloadContact = () => import('../pages/Contact.jsx');


export default function Navbar() {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState("/")

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setActiveTab("About")
                break
            case "/Portfolio":
                setActiveTab("Portfolio")
                break
            case "/Resume":
                setActiveTab("Resume")
                break
            case "/Contact":
                setActiveTab("Contact")
                break
            default:
                setActiveTab("/")
        }
    }, [location.pathname])

    return (
        <>
            <Tabs.Root value={activeTab} variant="enclosed"  className="navbar"  >
                <Tabs.List className="tabs-list">
                    <Tabs.Trigger value="About" className="tab-trigger" color={activeTab === "About" ? "var(--theme-color)" : "gray"}> 
                        <Link to="/" >About</Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger 
                        value="Portfolio" 
                        className="tab-trigger" 
                        color={activeTab === "Portfolio" ? "var(--theme-color)" : "gray"}
                        onMouseEnter={() => preloadPortfolio()}
                    > 
                        <Link to="/Portfolio" >Portfolio</Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger 
                        value="Resume" 
                        className="tab-trigger" 
                        color={activeTab === "Resume" ? "var(--theme-color)" : "gray"}
                        onMouseEnter={() => preloadResume()}
                    > 
                        <Link to="/Resume" >Resume</Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger 
                        value="Contact" 
                        className="tab-trigger" 
                        color={activeTab === "Contact" ? "var(--theme-color)" : "gray"}
                        onMouseEnter={() => preloadContact()}
                    > 
                        <Link to="/Contact">Contact</Link>
                    </Tabs.Trigger>
                    <Tabs.Indicator className="tabs-indicator"></Tabs.Indicator>
                </Tabs.List>
            </Tabs.Root>
        </>
    )
}