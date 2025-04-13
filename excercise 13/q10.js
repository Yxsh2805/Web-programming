class RandomNum extends Component {
    constructor() {
      super();
      this.state = { num: null };
    }
    generateNum = () => {
      this.setState({ num: Math.floor(Math.random() * 100) + 1 });
    };
    render() {
      return (
        <div>
          <h2>Random Number Generator</h2>
          <button onClick={this.generateNum}>Generate</button>
          {this.state.num !== null && <p>Random Number: {this.state.num}</p>}
        </div>
      );
    }
  }
  export { RandomNum };
  