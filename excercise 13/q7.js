export function CheckPrime({ num }) {
    const isPrime = (val) => {
      if (val < 2) return false;
      for (let i = 2; i <= Math.sqrt(val); i++) {
        if (val % i === 0) return false;
      }
      return true;
    };
    return <h1>{num} is {isPrime(num) ? "a Prime" : "not a Prime"} number.</h1>;
}
  