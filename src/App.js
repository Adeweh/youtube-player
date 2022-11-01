import React, { useEffect, useState } from 'react'
import { youtube } from './api/youtube'
import SearchBar from './components/SearchBar/SearchBar'
import VideoList from './components/Video/VideoList'

const App = () => {
  const [data, setData]= useState([])
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      const res =await youtube.get("search/",{
        params: {
          part: "snippet",
          q: searchTerm,
        }
      });
      setData(res.data.items);
    };
    fetchData();

  }, [searchTerm] )
  return (
    <div>
      {/* <Counter/> */}
      <SearchBar setSearchTerm={setSearchTerm}/>
      <VideoList items={data}/>
    </div>
  )
}

export default App
