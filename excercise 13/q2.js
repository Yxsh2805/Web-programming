export function FruitDisplay() {
    const fruitArray = ["Apple", "Banana", "Cherry"];
    return (
      <ul>
        {fruitArray.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }
  