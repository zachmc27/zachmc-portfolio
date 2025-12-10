import { Button, CloseButton, Dialog, Portal, Image } from "@chakra-ui/react"
import React from 'react'
import "../styles/Component-Styles/CardModal.css"

export default function CardModal({ title, description, onClose }) {
  return (
    <Dialog.Root open={true} onOpenChange={(open) => !open && onClose()}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                {description}
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button 
                  bgColor="var(--theme-color)" 
                  fontSize="12px"
                  onClick={onClose}
                >
                  Close
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
           
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
