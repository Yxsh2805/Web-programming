class YearLeap extends Component {
    constructor() {
      super();
      this.state = { year: "", outcome: "" };
    }
    handleYearChange = (e) => {
      const year = e.target.value;
      const leap = year && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
      this.setState({ year, outcome: leap ? "is a Leap Year" : "is not a Leap Year" });
    };
    render() {
      return (
        <div>
          <h2>Leap Year Checker</h2>
          <input type="number" value={this.state.year} onChange={this.handleYearChange} placeholder="Enter year" />
          {this.state.year && <p>{this.state.year} {this.state.outcome}</p>}
        </div>
      );
    }
  }
  export { YearLeap };
  