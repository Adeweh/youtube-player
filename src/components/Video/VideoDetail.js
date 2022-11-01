import React from 'react'

const VideoDetail = ({item}) => {
  return (
    <div>
      <div>
        <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title}/>
        </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail
