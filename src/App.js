import React, { StrictMode } from "react";
import "./App.css";
// Компонент не может изменяться

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name}, surname is {surname}
      </h1>
      <a href={link}>my vk</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="Paul" surname="Grin" link="vk.com" />
      <WhoAmI name="John" surname="Grin" link="vk.com" />
    </div>
  );
}

export default App;
