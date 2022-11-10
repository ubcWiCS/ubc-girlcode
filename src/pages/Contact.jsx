import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import env from "react-dotenv";
import Swal from 'sweetalert2';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialSideBar from "../components/SocialSideBar";

const SERVICE_ID = env.SERVICE_ID
const TEMPLATE_ID = env.TEMPLATE_ID
const PUBLIC_KEY = env.PUBLIC_KEY

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    console.log('submitted')
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
    }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
    });

    e.target.reset()
  };

  return (
    <>
      <NavBar />
      <div className="page-starter-container">
        <gradient-large>Contact us</gradient-large>
        <SocialSideBar className="icons" />
      </div>
      <Container component="main" maxWidth="xs" className="contact-container">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="from_name"
              label="Your Name"
              type="text"
              id="from_name"
              className="input-field"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="reply_to"
              label="Email Address"
              name="reply_to"
              type="email"
              autoFocus
              className="input-field"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="inquiry"
              label="Question"
              type="text"
              id="inquiry"
              className="input-field"
              multiline={true}
              minRows="3"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="contact-button"
             
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
