import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <Button variant="text" component={Link} to="/about">
      Go to About
    </Button>
  )
}
