import React from "react";
import Text from "./comps/text";
import Icons from "./comps/icons";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img
          src={
            "https://avatars0.githubusercontent.com/u/49167576?s=400&u=7c43210fc4ee97cbd409de471fabb37e8c8f203d&v=4"
          }
          className="profilePicture"
          alt="logo"
        />
        <Text
          text={[
            "Hi, i'm Gabriel Antelo,",
            "I’m an experienced react developer",
            "based in Buenos Aires",
          ]}
        />
        <Text
          text={[
            "I love experimenting with code and I have",
            "a strong passion for creating",
            "high-end applications,",
            "both web and mobile.",
          ]}
        />
        <Text
          text={[
            "I’m always looking for an interesting",
            "project, so feel free to contact me!",
          ]}
        />
        <div className="text">
          email:{" "}
          <a href="mailto:gabriel1536@gmail.com">gabriel1536@gmail.com</a>
        </div>
        <div className="text">
          tel: <a href="tel:+543412293380">+54 (341) 2293380</a>
        </div>
        <Icons />
      </header>
    </div>
  );
}

export default App;
