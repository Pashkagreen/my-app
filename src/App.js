import React, { StrictMode, Component } from "react";
import { Children } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import "./App.css";
// Компонент не может изменяться

// export const EmpItem = styled.div`
//   padding: 20px;
//   border-radius: 5px;
//   a {
//     color: black;
//   }
// `;

// const Header = styled.h2`
//   font-size: 22px;
// `;

// export const Button = styled.button`
//   display: block;
//   padding: 5px 15px;
//   background-color: gold;
//   border: 1px solid yellow;
// `;

// class WhoAmI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //задание состояния объектом state
//       years: 25,
//       position: "",
//     };
//   }

//   nextYear = () => {
//     this.setState((state) => ({
//       years: state.years + 1,
//     }));
//   };

//   commitInputChanges = (e, color) => {
//     console.log(color);
//     this.setState({
//       position: e.target.value,
//     });
//   };

//   render() {
//     const { name, surname, link } = this.props;
//     const { position, years } = this.state;

//     return (
//       <EmpItem>
//         <Header>
//           My name is {name}, surname is {surname}, age - {years}, position -{" "}
//           {position}
//         </Header>
//         <Button onClick={this.nextYear}>+++</Button>
//         <a href={link}>my vk</a>
//         <form>
//           <span>Введите должность:</span>
//           <input
//             type="text"
//             onChange={(e) => this.commitInputChanges(e, "some color")}
//           />
//         </form>
//       </EmpItem>
//     );
//   }
// }

// const Wrapper = styled.div`
//   width: 600px;
//   margin: 80px auto 0 80px;
// `;

// const DynamicGreeting = (props) => {
//   return (
//     <div className={"mb-3 p-3 border border-" + props.color}>
//       {React.Children.map(props.children, (child) => {
//         return React.cloneElement(child, {
//           className: "shadow p-4 m-3 border rounded",
//         });
//       })}
//     </div>
//   );
// };

// const HelloGreeting = () => {
//   return (
//     <div style={{ width: "600px", margin: "0 auto" }}>
//       <DynamicGreeting color={"primary"}>
//         <h2>It was hard</h2>
//       </DynamicGreeting>
//     </div>
//   );
// };

// const Message = (props) => {
//   return <h2>The counter is {props.counter}</h2>;
// };

// class Counter extends Component {
//   state = {
//     counter: 0,
//   };

//   changeCounter = () => {
//     this.setState(({ counter }) => ({
//       counter: counter + 1,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <button className={"btn btn-primary"} onClick={this.changeCounter}>
//           Click me
//         </button>
//         {this.props.render(this.state.counter)}
//       </>
//     );
//   }
// }

class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.mySecondRef = React.createRef();
  }

  // componentDidMount() {
  //   this.myRef.current.focus();
  // }

  focusFirst = () => {
    this.myRef.current.focus();
  };

  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              ref={this.myRef}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              onClick={this.focusFirst}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </Container>
    );
  }
}

function App() {
  return (
    <Form />
    // <Wrapper>
    //   <Counter render={(counter) => <Message counter={counter} />} />
    //   <HelloGreeting />
    //   <DynamicGreeting color={"primary"}>
    //     <h2>It was hard</h2>
    //     <h3>Really</h3>
    //   </DynamicGreeting>
    //   <WhoAmI name="Paul" surname="Grin" link="vk.com" />
    //   <WhoAmI name="John" surname="Grin" link="vk.com" />
    // </Wrapper>
  );
}

export default App;
