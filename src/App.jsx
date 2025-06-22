import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'
import Post from './Pages/Post'

const initialPosts = [
  { id: '1', title: 'Learning React Router', content: 'This is a guide to React Router...' },
  { id: '2', title: 'Hooks in React', content: 'Let’s understand useState, useEffect...' },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [id, setId] = useState(initialPosts.length + 1);


  return (
    <>
      <Routes className="content">
        <Route path='/' element={<Home posts={posts}/>}/>
        <Route path="/create" element={<CreatePost posts={posts} setPosts={setPosts} id={id} setId={setId} />} />
        <Route path='/posts/:postId' element={<Post posts={posts}/>}></Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
