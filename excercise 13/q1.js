import React, { useState, useRef, Component } from "react";

export function HelloOne() {
  return React.createElement("h1", null, "Hello, React!");
}

export function HelloTwo() {
  return <h1>Hello, React!</h1>;
}

export function HelloThree() {
  const greeting = "Welcome to React!";
  return <h1>{greeting}</h1>;
}
