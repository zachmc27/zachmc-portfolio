import { Tabs } from "@chakra-ui/react"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navbar() {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState("Portfolio")

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
                setActiveTab("Portfolio")
        }
    }, [location.pathname])

    return (
        <>
            <Tabs.Root value={activeTab} variant="enclosed" colorPalette={'orange'}>
                <Tabs.List bg="gray.900">
                    <Tabs.Trigger value="About" > 
                        <NavLink to="/" >About</NavLink>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Portfolio"> 
                        <NavLink to="/Portfolio" >Portfolio</NavLink>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Resume"> 
                        <NavLink to="/Resume">Resume</NavLink>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Contact"> 
                        <NavLink to="/Contact">Contact</NavLink>
                    </Tabs.Trigger>
                    <Tabs.Indicator rounded="12"></Tabs.Indicator>
                </Tabs.List>
            </Tabs.Root>
        </>
    )
}