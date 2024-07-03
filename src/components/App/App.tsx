import { useState } from 'react';
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import imagesPng from "@/assets/images.png";
import imagesJpg from "@/assets/cover.jpg";
import ImagesSvg from "@/assets/social-icons.svg";

//tree shaking
function TODO() {
  console.log("TODOFUNCTION");
}

export const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  }
  return (
    <div data-testid={"App-data-test-id"}>
      <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={imagesPng} alt="lol1"/>
        <img width={100} height={100} src={imagesJpg} alt="lol2"/>
      </div>
      <div>
        <ImagesSvg color={"blue"} width={50} height={50} />
      </div>
      <Link to={"/about"}>about</Link>
      <br/>
      <Link to={"/shop"}>shop</Link>
      <h1 className={classes.value}>{ counter }</h1>
      <button className={classes.button} onClick={increment}>inc</button>
      <Outlet />
    </div>
  );
};

export default App;