import React from "react";
import Text from "./comps/text";
import Icons from "./comps/icons";
import profile from "./assets/pic.jpg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={profile} className="profilePicture" alt="logo" />
        <Text
          text={[
            "Hi, I'm Gabriel Antelo.",
            "I’m an experienced react developer",
            "based in Buenos Aires.",
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
