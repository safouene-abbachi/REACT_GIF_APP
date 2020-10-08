import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "cQR5kYS7N1dBMA7NnOoQGU8JKz2thvVg";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
console.log(API_KEY);

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGif = async (tag) => {
    const { data: images } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    console.log(images);

    const imageSrc = images.data.images.downsized_large.url;
    setGif(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};
export default useGif;
