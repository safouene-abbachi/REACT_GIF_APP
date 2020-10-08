import React, { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "cQR5kYS7N1dBMA7NnOoQGU8JKz2thvVg";
console.log(API_KEY);
const Random = () => {
  const [gif, setGif] = useState("");
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data: images } = await axios.get(url);
    console.log(images);

    const imageSrc = images.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);
  const handleClick = () => {
    fetchGif();
  };
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" width="500" />
      <button onClick={handleClick}>CLICK FOR NEW</button>
    </div>
  );
};
export default Random;
