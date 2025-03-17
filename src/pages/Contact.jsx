import { Field, Input, Textarea, Stack, Button } from "@chakra-ui/react"
import "../styles/Contact.css"
import { useState } from "react"
import validateEmail from "@/utils/emailValidation";
import { motion } from "framer-motion";


export default function() {

  
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const [nameInvalid, setNameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [messageInvalid, setMessageInvalid] = useState(false)

    function handleNameState(e) {
        setName(e.target.value)
       
    }

    function handleEmailState(e) {
        setEmail(e.target.value)
      
    }

    function handleMessageState(e) {
        setMessage(e.target.value)
       
    }

 
    function handleSubmit(e) {
        e.preventDefault();

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();
        
        if (trimmedName === "") {
            setNameInvalid(true)
            return
        } else if (trimmedEmail === "" || !validateEmail(trimmedEmail)) {
            setEmailInvalid(true)
            return
        } else if (trimmedMessage === "") {
            setMessageInvalid(true)
            return
        } else {
           setNameInvalid(false) 
           setEmailInvalid(false)
           setMessageInvalid(false)

            console.log('Name:', name)
            console.log('Email:', email)
            console.log('Message:', message)
        }
    }
    return (
        <>
        <div className="background-img"></div>
        <motion.div 
        className="section"
        initial={{
            opacity: "0%",
            filter: "blur(3px)",
            y: 50
        }}
        animate={{
            opacity: '100%',
            filter: 'blur(0px)',
            y: 0
        }}
        transition={{
            duration: 1,
            y: { type: 'spring', bounce: 0.5},
            filter: { ease: 'easeOut'}
     
     
        }}
        >
            <h1 className="section-title">Get in Touch</h1>
            <p className="info-text-box faded">For inquires, you can reach out to me directly at <span className="i b">zmcgregor344@gmail.com</span>  or fill out the form below.</p>
            <form onSubmit={handleSubmit}>
                <Stack marginBottom="100px" gap="4">
                <Field.Root invalid={nameInvalid}>
                    <Field.Label>Name: </Field.Label>
                    <Input 
                        placeholder="Enter a name..." 
                        onChange={handleNameState}
                        width="500px"/>
                    <Field.ErrorText>Name is required</Field.ErrorText>
                </Field.Root>
                    <Field.Root invalid={emailInvalid}>
                    <Field.Label>Email:</Field.Label>
                    <Input 
                        placeholder="name@email.com" 
                        onChange={handleEmailState}
                        width="500px"/>
                    <Field.ErrorText>Please enter a valid email.</Field.ErrorText>

                </Field.Root>
                <Field.Root invalid={messageInvalid}>
                    <Field.Label>Message:</Field.Label>
                    <Textarea 
                        width="550px" 
                        height="400px" 
                        placeholder="Write something..." 
                        resize="none" 
                        onChange={handleMessageState}/>
                    <Field.ErrorText>A message is required.</Field.ErrorText>
                </Field.Root>

                <Button type="submit" width="100px" mt="10px" bgColor="var(--theme-color)">Submit</Button>
                </Stack>
            </form>
    
        </motion.div>
       
        </>
    )
}