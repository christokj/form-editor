import React, { useState } from "react";

const McqQuestionCreator = () => {
  const [paragraph, setParagraph] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", answers: [""], correctAnswerIndex: 0 },
  ]);

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (qIndex, aIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers[aIndex] = value;
    setQuestions(updatedQuestions);
  };

  const addAnswer = (qIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.push("");
    setQuestions(updatedQuestions);
  };

  const deleteAnswer = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.splice(aIndex, 1);
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", answers: [""], correctAnswerIndex: 0 }]);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">MCQ Question Creator</h1>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Paragraph:</label>
        <textarea
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={paragraph}
          onChange={handleParagraphChange}
          placeholder="Type your paragraph here"
        ></textarea>
      </div>

      {questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-6 border border-gray-300 rounded p-4">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Question {qIndex + 1}:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              placeholder="Type your question here"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Options:</label>
            {q.answers.map((answer, aIndex) => (
              <div key={aIndex} className="flex items-center mb-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={answer}
                  onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                  placeholder={`Option `}
                />
                <button
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => deleteAnswer(qIndex, aIndex)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => addAnswer(qIndex)}
            >
              Add Answer
            </button>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => deleteQuestion(qIndex)}
          >
            Delete Question
          </button>
        </div>
      ))}

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={addQuestion}
      >
        Add Question
      </button>
    </div>
  );
};

export default McqQuestionCreator;
