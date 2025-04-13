class TempConverter extends Component {
    constructor() {
      super();
      this.state = { celsius: "", fahrenheit: "" };
    }
  
    updateCelsius = (e) => {
      const celsius = e.target.value;
      this.setState({ celsius, fahrenheit: celsius ? (celsius * 9) / 5 + 32 : "" });
    };
  
    updateFahrenheit = (e) => {
      const fahrenheit = e.target.value;
      this.setState({ celsius: fahrenheit ? ((fahrenheit - 32) * 5) / 9 : "", fahrenheit });
    };
  
    render() {
      return (
        <div>
          <h2>Temperature Converter</h2>
          <input type="number" value={this.state.celsius} onChange={this.updateCelsius} placeholder="Celsius" />
          <input type="number" value={this.state.fahrenheit} onChange={this.updateFahrenheit} placeholder="Fahrenheit" />
        </div>
      );
    }
  }
  export { TempConverter };
  