import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { sayac: 0, baslik: "merhaba" };
  }

  arttir() {
    this.setState({ sayac: this.state.sayac + 1 });
  }

  azalt = () => {
    this.setState({ sayac: this.state.sayac - 1 });
  };

  render() {
    return (
      <div className="container text-center mt-4">
        <h1>{this.state.sayac}</h1>
        <h1>{this.state.baslik}</h1>
        <button onClick={this.arttir.bind(this)} className="">
          ARTTIR
        </button>

        <button onClick={this.azalt}>AZALT</button>
      </div>
    );
  }
}

export default Counter;
