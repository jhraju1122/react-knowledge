import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const handleAddToBookmarks = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
 }


  return (
    <>
    <div className='ml-[120px] mr-[120px]'>
    <Header className='md:flex max-w-7xl mx-auto items-center p-4 border-b-2'></Header>
    <div className='md:flex'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </div>
    </>
  )
}

export default App
