import React, { StrictMode } from "react";
import styled from "styled-components";
import "./App.css";
// Компонент не может изменяться

export const EmpItem = styled.div`
  padding: 20px;
  border-radius: 5px;
  a {
    color: black;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid yellow;
`;

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
      <EmpItem>
        <Header>
          My name is {name}, surname is {surname}, age - {years}, position -{" "}
          {position}
        </Header>
        <Button onClick={this.nextYear}>+++</Button>
        <a href={link}>my vk</a>
        <form>
          <span>Введите должность:</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
      </EmpItem>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 80px;
`;

function App() {
  return (
    <Wrapper>
      <WhoAmI name="Paul" surname="Grin" link="vk.com" />
      <WhoAmI name="John" surname="Grin" link="vk.com" />
    </Wrapper>
  );
}

export default App;
