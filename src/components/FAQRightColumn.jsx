import React, { useState } from "react";
import "./FAQRightColumn.css"
import CaretDown from "../assets/CaretDown.png";

export default function FAQRightColumn() {
    const initialQuestions = [
        {
          question: "How does DaarDoor work?",
          answer:
            "DaarDoor is an online platform that connects buyers and sellers of homes. It allows users to search for properties, view detailed listings, contact sellers, and initiate the home buying or selling process. The platform provides a convenient and user-friendly interface to streamline the real estate transaction process.",
          isOpen: false,
        },
        {
          question: "What types of properties are available on DaarDoor?",
          answer:
            "DaarDoor offers a wide range of properties, including houses, apartments, condos, townhouses, and land for sale. You can find properties suitable for various purposes, such as residential homes, investment properties, or commercial real estate.",
          isOpen: false,
        },
        {
          question: "How do I search for homes on DaarDoor?",
          answer:
            "You can search for homes on DaarDoor by utilizing the search bar on the homepage. Simply enter your desired location, property type, price range, and any other specific criteria you have in mind. The platform will provide you with a list of relevant properties that match your preferences.",
          isOpen: false,
        },
      ];
    
      const toggleQuestion = (index) => {
        setQuestions((prevQuestions) =>
          prevQuestions.map((q, i) => {
            if (i === index) {
              return { ...q, isOpen: !q.isOpen };
            } else {
              return { ...q, isOpen: false };
            }
          })
        );
      };
    
      const [questions, setQuestions] = useState(initialQuestions);
  return (
    <div className="right-column">
    <div className="faq-container">
      {questions.map((q, index) => (
        <div key={index} className="faq-question">
          <div
            className="sub-container"
            onClick={() => toggleQuestion(index)}
          >
            <p className="question-text">{q.question}</p>
            <img
              src={CaretDown}
              alt="Caret Down"
              className={`caret-image ${q.isOpen ? "rotate" : ""}`}
            />
          </div>
          {q.isOpen && <p className="answer-text">{q.answer}</p>}
        </div>
      ))}
    </div>
  </div>
  )
}
