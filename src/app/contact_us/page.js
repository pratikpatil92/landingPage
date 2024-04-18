import { Button, TextField } from '@mui/material'
import React from 'react'
import "./../../style/main.css"


export default function Page() {

    return (
        <div className="mycontainer mb-3">
            <div className="text-center mt-5">
                <h1 >Contact Us</h1>
            </div>
            <div className="contact-form">
                <div className="input-name">
                    <TextField fullWidth label="Name" />
                    <TextField fullWidth label="Email" />
                </div>

                <TextField multiline maxRows={4} label="Message" />
                <Button size="medium" variant="contained">Send</Button>
            </div>
        </div>
    )
}
