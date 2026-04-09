import {Box, Typography, Button} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

import PopUp from "./PopUp";

const NavBar= ()=>{
      const [open, setOpen] = useState(false);
    return(
        <Box sx={{
            display:'flex',
            width:'90vw',
            background:'blue',
            justifyContent:'space-between',
            padding:'10px'
        }}>
            <Box sx={{
                background:'red',
                marginx:'40px'

            }}><Link to='/'><Typography>Vijay</Typography></Link></Box>

            <Box sx={{
                display:'flex',
                width:'40%',
                gap:'50px',
                background:'red',
                justifyContent:'center'
            }}>
            <Link to="/"><Typography>Profile</Typography></Link>
            <Link to='/Projects'><Typography>Projects</Typography></Link>
               <Button onClick={() => setOpen(true)}>
        Connect
      </Button>
        <PopUp
        open={open}
        handleClose={() => setOpen(false)}
      />
            </Box>
            

        </Box>
    )
}
export default NavBar