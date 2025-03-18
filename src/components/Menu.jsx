import { Button, Menu, Portal } from "@chakra-ui/react"
import React from 'react'
import Navbar from "./Navbar.jsx"
import "../styles/Component-Styles/Menu.css"
import bars from "../../assets/images/bars-solid.svg"

export default function Dropdown() {
  return (
     <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline" size="sm" className="menu-btn">
              <img src={`${bars}`} alt="menu-bars" className="menu-bars"/>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="navbar-a">
                  <Navbar />
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
  )
}
