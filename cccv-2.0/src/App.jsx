import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Button from "./components/Button";

function App() {
  const [imgUrl, setImageUrl] = useState([]);

  async function getPictures() {
    const url =
      "https://pixabay.com/api/?key=16486915-1cf2b675deb9426dc28e384b8";

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

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <div className="App">
      <Header />
      <Image imgUrl={imgUrl} />
      <Button getPictures={getPictures} />
    </div>
  );
}

export default App;
