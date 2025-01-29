import React, { useState, useEffect } from "react";

const FAQs = () => {
  // Prebuilt FAQs
  const prebuiltFAQs = [
    {
      question: "How does CareVerse work?",
      answers: [
        "CareVerse connects patients with licensed doctors through a simple and secure platform. You can browse available doctors, book appointments, and attend sessions online."
      ]
    },
    {
      question: "Is my data secure on CareVerse?",
      answers: [
        "Yes, we take data security seriously. All communication is encrypted, and we comply with healthcare regulations to ensure your information remains confidential."
      ]
    },
    {
      question: "What devices can I use to access CareVerse?",
      answers: [
        "CareVerse is accessible via desktop, tablet, and mobile devices through a web browser. No special software is required."
      ]
    },
    {
      question: "How do I contact customer support?",
      answers: [
        "You can reach our support team through the contact form on our website, email, or live chat for any assistance."
      ]
    },
    {
      question: "Is there a mobile app available?",
      answers: [
        "Currently, CareVerse is accessible via a web browser, but we are working on a mobile app for iOS and Android."
      ]
    },
    {
      question: "What payment methods are accepted?",
      answers: [
        "We accept credit/debit cards, PayPal, and some insurance providers, depending on the doctor’s payment options."
      ]
    }
  ];

  // Load user-submitted questions from localStorage
  const [userQuestions, setUserQuestions] = useState(
    JSON.parse(localStorage.getItem("userQuestions")) || []
  );
  const [newQuestion, setNewQuestion] = useState("");

  // Update localStorage whenever userQuestions change
  useEffect(() => {
    localStorage.setItem("userQuestions", JSON.stringify(userQuestions));
  }, [userQuestions]);

  // Handle adding a new question
  const addUserQuestion = () => {
    if (newQuestion.trim() === "") return;

    setUserQuestions([...userQuestions, { question: newQuestion, answers: [] }]);
    setNewQuestion(""); // Clear input field
  };

  // Handle adding an answer to a user-submitted question
  const addUserAnswer = (index, answer) => {
    if (answer.trim() === "") return;

    const updatedQuestions = [...userQuestions];
    updatedQuestions[index].answers.push(answer);
    setUserQuestions(updatedQuestions);
  };

  return (
    <div className="bg-[#315242] text-white font-sans min-h-screen p-6">
      {/* Navbar */}
      <header className="navbar-bg fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center bg-[#2a4b3b]">
        <div className="flex items-center space-x-10">
          <h1 className="text-xl font-semibold text-white">CareVerse</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-white font-medium hover:underline">About</a>
            <a href="#" className="text-white font-medium hover:underline">Advice</a>
            <a href="#" className="text-yellow-400 font-medium underline">FAQ</a>
            <a href="#" className="text-white font-medium hover:underline">Reviews</a>
            <a href="#" className="text-white font-medium hover:underline">Contact</a>
          </nav>
        </div>
        <div className="space-x-4">
          <a href="#" className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600">Login</a>
          <a href="#" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600">Get Started</a>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-16">
        <h1 className="text-center text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        {/* Prebuilt FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {prebuiltFAQs.map((faq, index) => (
            <div key={index} className="bg-[#2a4b3b] p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {faq.answers.map((answer, i) => (
                <p key={i} className="bg-[#1f3a2e] text-white p-2 rounded mt-2">{answer}</p>
              ))}
            </div>
          ))}
        </div>

        {/* User-Submitted Questions */}
        <div className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Community Questions</h2>
          <p className="text-center mb-4">Have a question that hasn't been answered? Ask the community below!</p>
        </div>

        {/* User Questions List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {userQuestions.map((question, index) => (
            <div key={index} className="bg-[#2a4b3b] p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{question.question}</h3>
              {question.answers.map((answer, i) => (
                <p key={i} className="bg-[#1f3a2e] text-white p-2 rounded mt-2">{answer}</p>
              ))}
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Write an answer..."
                  className="w-full p-2 rounded bg-[#1f3a2e] text-white placeholder-gray-400"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addUserAnswer(index, e.target.value);
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Ask a Question */}
        <div className="max-w-3xl mx-auto mt-8">
          <h2 className="text-lg font-semibold text-center mb-2">
            Have a question of your own? Feel free to ask below, and our community will help you out.
          </h2>
        </div>

        {/* Ask a Question Form */}
        <div className="max-w-3xl mx-auto mt-4 p-4 bg-[#2a4b3b] rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Ask a Question</h2>
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Enter your question"
            className="w-full p-2 rounded bg-[#1f3a2e] text-white placeholder-gray-400"
          />
          <button
            onClick={addUserQuestion}
            className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold"
          >
            Submit Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
