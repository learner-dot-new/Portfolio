import {Box, Link} from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        background:"purple"
    }}>
        <Link href='https://www.instagram.com/sumann_godara/' rel="noopener noreferrer">Instagram</Link>
        <Link href='https://www.linkedin.com/in/vijay-pooniya/' rel="noopener noreferrer">Linkdn</Link>
        <Link  href='https://github.com/pooniya22' rel="noopener noreferrer">Github</Link>
    </Box>
  )
}

export default Footer