import { Tabs } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
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
                        <Link to="/" >About</Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Portfolio"> 
                        <Link to="/Portfolio" >Portfolio</Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Resume"> 
                        <Link to="/Resume">Resume</Link>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="Contact"> 
                        <Link to="/Contact">Contact</Link>
                    </Tabs.Trigger>
                    <Tabs.Indicator rounded="12"></Tabs.Indicator>
                </Tabs.List>
            </Tabs.Root>
        </>
    )
}