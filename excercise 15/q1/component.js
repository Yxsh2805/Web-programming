import React, { useState } from 'react';

const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call fake spaghetti? An impasta."
];

const Content = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    const random = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[random]);
  };

  return (
    <div>
      <button onClick={getJoke}>Get a Joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Content;
