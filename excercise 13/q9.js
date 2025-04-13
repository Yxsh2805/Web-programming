class ReverseString extends Component {
    constructor() {
      super();
      this.state = { input: "" };
      this.refInput = React.createRef();
    }
  
    handleInput = () => {
      this.setState({ input: this.refInput.current.value });
    };
  
    render() {
      const reversed = this.state.input.split("").reverse().join("");
      const palindrome = this.state.input.toLowerCase() === reversed.toLowerCase();
      return (
        <div>
          <h2>String Reverser</h2>
          <input type="text" ref={this.refInput} onChange={this.handleInput} placeholder="Type text" />
          <p>Reversed: {reversed}</p>
          <p>{this.state.input && (palindrome ? "Palindrome!" : "Not a Palindrome.")}</p>
        </div>
      );
    }
  }
  
export { ReverseString };
  