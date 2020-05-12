import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Button from "./components/Button";

function App() {
  const [imgUrl, setImageUrl] = useState([]);

  //5 slides should go here
  const [slides, setSlides] = useState([]);
  const [keyword, setKeyWord] = useState("");

  //create random slides 5 slides
  // hit button and change the pic
  async function getPictures() {
    const url =
      "https://pixabay.com/api/?key=16486915-1cf2b675deb9426dc28e384b8&per_page=30";

    // create

    const res = await fetch(url);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    const arrOfPicUrl = data.hits.map((picture) => {
      return picture.largeImageURL;
    });
    console.log("AAAAAAA", arrOfPicUrl);
    return setImageUrl(arrOfPicUrl);
  }

  const select5Slides = () => {
    let fiveImgArr = [];

    const getOneSlide = (arr) => {
      if (fiveImgArr.length >= 5) {
        setSlides(fiveImgArr);
        return;
      }

      let max = arr.length;
      let index = Math.floor(Math.random() * Math.floor(max));
      let myimage = imgUrl[index];
      fiveImgArr.push(myimage);
      arr.splice(index, 1);
      getOneSlide(arr);
    };
    getOneSlide(imgUrl);
    return;
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <div className="App">
      <Header />
      <Image imgUrl={imgUrl} slides={slides} />
      <Button select5Slides={select5Slides} />
    </div>
  );
}

export default App;
