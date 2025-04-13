import React, { useEffect, useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <p>{joke}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
};

export default JokeFetcher;
