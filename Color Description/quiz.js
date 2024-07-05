"use client"
import React, { useState } from "react";
import Image from "next/image";
import firstImage from "@/public/images/1.jpg"
import secondImage from "@/public/images/2.jpg"
import thirdImage from "@/public/images/3.jpg"
import fourthImage from "@/public/images/starry.jpg"
import "./App.css";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const question = "Which one is the starry night?";
  const options = [
    { label: "A", image: firstImage },
    { label: "B", image: secondImage },
    { label: "C", image: thirdImage },
    { label: "D", image: fourthImage },
  ];

  const handleOptionSelect = (label) => {
    setSelectedOption(label);
  };

  return (
    <div className="App">
      <header className="rectangle">
        <p className="rectangle-text">Image Description!</p>
        <div className="answer-box">
          <p className="answer-box-text">{question}</p>
          <div className="button-container">
            {options.map((option, index) => (
              <button
                key={index}
                className={`button ${selectedOption === option.label ? "selected" : ""}`}
                onClick={() => handleOptionSelect(option.label)}
              >
                <Image src={option.image} alt={option.label} width={500} height={200} />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
          <div className="navigationButtons">
            <button className="skipButton">Skip</button>
            <button className="nextButton">Next</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Quiz;
