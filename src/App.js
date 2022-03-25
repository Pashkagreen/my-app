import React, { StrictMode } from "react";
import "./App.css";
// Компонент не может изменяться

class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //задание состояния объектом state
      years: 25,
    };
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <h1>
          My name is {name}, surname is {surname}, age - {this.state.years}
        </h1>
        <button onClick={this.nextYear}>+++</button>
        <a href={link}>my vk</a>
      </div>
    );
  }
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
