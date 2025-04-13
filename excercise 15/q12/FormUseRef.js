import React, { useRef, useState } from 'react';

const FormUseRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [output, setOutput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setOutput(`Name: ${name}, Email: ${email}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" />
        <input ref={emailRef} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
      <p>{output}</p>
    </>
  );
};

export default FormUseRef;
