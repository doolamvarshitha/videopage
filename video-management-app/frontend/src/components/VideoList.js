import React, { useEffect, useState } from "react";
import { getVideos } from "../api";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const token = localStorage.getItem("token");
      try {
        const { data } = await getVideos(token);
        setVideos(data);
      } catch (err) {
        alert("Error fetching videos");
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Your Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <p>Tags: {video.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
