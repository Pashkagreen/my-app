import React, { StrictMode } from "react";
import "./App.css";
// Компонент не может изменяться

class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //задание состояния объектом state
      years: 25,
      position: "",
    };
  }

  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;

    return (
      <div>
        <h1>
          My name is {name}, surname is {surname}, age - {years}, position -{" "}
          {position}
        </h1>
        <button onClick={this.nextYear}>+++</button>
        <a href={link}>my vk</a>
        <form>
          <span>Введите должность:</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
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
