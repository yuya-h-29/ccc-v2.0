import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Button from "./components/Button";

function App() {
  const [imgUrl, setImageUrl] = useState([]);
  const [slides, setSlides] = useState([]);
  const [slideIdx, setSlideIdx] = useState(0);
  const [keyword, setKeyWord] = useState("");

  // hit button and change the pic
  async function getPictures() {
    const url =
      "https://pixabay.com/api/?key=16486915-1cf2b675deb9426dc28e384b8&per_page=30";

    const res = await fetch(url);
    const data = await res.json();
    const arrOfPicUrl = data.hits.map((picture) => {
      return picture.largeImageURL;
    });
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

  const nextSlide = () => {
    setSlideIdx(slideIdx + 1);
  };

  const previousSlide = () => {
    setSlideIdx(slideIdx - 1);
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <div className="App">
      <Header />
      <Image imgUrl={imgUrl} slides={slides} slideIdx={slideIdx} />
      <Button
        select5Slides={select5Slides}
        slideIdx={slideIdx}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
      />
    </div>
  );
}

export default App;
