import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../services/Api'
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  //   height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    const newBook = { title, author };
  
    try {
      const response = await addBook(newBook)
      console.log("Res...",response);
      if (response.status === 200) { // Assuming 201 Created for successful addition
        console.log('Book added successfully:', response.data.response);
        alert('Book Added')
        setTitle('');
        setAuthor('');
        navigate('/book-list'); // Redirect to the book list page
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <>
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          {/* <SitemarkIcon /> */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
          ADD BOOK 
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="email" sx={{ textAlign: "left" }}>
                Title
              </FormLabel>
              <TextField
                required
                fullWidth
                id="title"
                name="title"
                autoComplete="email"
                variant="outlined"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ textAlign: "left" }} htmlFor="password">
                Author
              </FormLabel>
              <TextField
                required
                fullWidth
                id="author"
                name="author"
                type="text"
                variant="outlined"
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
            > 
            SUBMIT              
            </Button>

          </Box>
        </Card>
      </SignUpContainer>
    </>
  //   <div>
  //   <h2>Add a Book</h2>
  //   <form onSubmit={handleSubmit}>
  //     <input
  //       type="text"
  //       placeholder="Title"
  //       value={title}
  //       onChange={(e) => setTitle(e.target.value)}
  //       required
  //     />
  //     <input
  //       type="text"
  //       placeholder="Author"
  //       value={author}
  //       onChange={(e) => setAuthor(e.target.value)}
  //       required
  //     />
  //     <button type="submit">Add Book</button>
  //   </form>
  // </div>
  )
}

export default BookForm