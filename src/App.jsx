import React, { useState } from "react";
import "./App.css"
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [keyPressed, setKeyPressed] = useState("");

  // Mouse event
  const handleClick = (e) => {
    alert("Button clicked!");
    console.log("MouseEvent:", e);
  };

  // Keyboard event
  const handleKeyDown = (e) => {
    setKeyPressed(e.key);
    console.log("Key pressed:", e.key);
  };

  // Form input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted with:", inputValue);
  };

  // Event bubbling
  const outerClick = () => {
    console.log("Outer div clicked");
  };

  const innerClick = (e) => {
    e.stopPropagation();
    console.log("Inner button clicked - stopped propagation");
  };

  // Prevent default
  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log("Default link behavior prevented");
  };

  return (
    <div className="p-4 space-y-6" onClick={outerClick}>
      <h1 className="text-2xl font-bold">React Events Demo</h1>

      {/* Mouse event */}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Click Me
      </button>

      {/* Keyboard event */}
      <input
        type="text"
        placeholder="Type something"
        onKeyDown={handleKeyDown}
        className="border p-2 block"
      />
      {keyPressed && <p>You pressed: {keyPressed}</p>}

      {/* Form event */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter name"
          className="border p-2 block"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Submit
        </button>
      </form>
      {submitted && <p className="text-green-600">Form submitted!</p>}

      {/* stopPropagation example */}
      <div className="p-4 bg-gray-100 border">
        <p>Click outside this button to see outer div logs</p>
        <button
          onClick={innerClick}
          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded"
        >
          Stop Propagation
        </button>
      </div>

      {/* preventDefault example */}
      <a
        href="https://example.com"
        onClick={handleLinkClick}
        className="text-blue-600 underline"
      >
        Click me (but link won’t open)
      </a>
    </div>
  );
}
