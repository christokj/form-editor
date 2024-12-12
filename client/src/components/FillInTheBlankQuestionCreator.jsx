import React, { useState } from "react";

const FillInTheBlankQuestionCreator = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleUnderline = (word) => {
    if (answers.includes(word)) {
      setAnswers(answers.filter((answer) => answer !== word));
    } else {
      setAnswers([...answers, word]);
    }
  };

  const handleQuestionChange = (e) => {
    const input = e.target.value;
    setQuestion(input);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Fill in the Blank Form Creator</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Question:</label>
        <textarea
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type your question here"
        ></textarea>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-2">Click words to toggle underlining:</p>
        <div className="border border-gray-300 rounded p-2">
          {question.split(" ").map((word, index) => (
            <span
              key={index}
              className={`inline-block cursor-pointer px-1 mx-1 ${
                answers.includes(word) ? "underline" : ""
              }`}
              onClick={() => handleUnderline(word)}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Answers:</h2>
        <ul className="list-disc list-inside">
          {answers.length > 0 ? (
            answers.map((answer, index) => <li key={index}>{answer}</li>)
          ) : (
            <li>No answers selected</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FillInTheBlankQuestionCreator;
