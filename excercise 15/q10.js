import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef();

  const handleClick = () => inputRef.current.focus();

  return (
    <>
      <input type="text" ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
};

export default FocusInput;
