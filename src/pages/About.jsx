import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <Button variant="text" component={Link} to="/">
      Go to Homepage
    </Button>
  )
}
