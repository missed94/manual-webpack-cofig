import { useState } from 'react';
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import ImagesPng from "@/assets/images.png";
import ImagesJpg from "@/assets/cover.jpg";
import ImagesSvg from "@/assets/SocialMedia.svg";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((prev) => prev + 1);
  }

  return (
    <div>
      <div>
        <img width={100} height={100} src={ImagesPng} alt="lol1"/>
        <img width={100} height={100} src={ImagesJpg} alt="lol2"/>
        <img width={100} height={100} src={ImagesSvg} alt="lol3"/>
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