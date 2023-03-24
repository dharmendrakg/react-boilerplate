import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Blogs() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data)
    })
  }, [])

  return (
    <Box sx={{ m: '60px' }}>
      <Typography variant="h4">Blogs</Typography>
      {posts.map((post) => (
        <Box key={post.id} sx={{ border: '2px solid #ccc', p: 2, m: 1 }}>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
          <Button variant="contained" color="primary" component={Link} to={`/${post.id}`}>
            Read More
          </Button>
        </Box>
      ))}
    </Box>
  )
}
