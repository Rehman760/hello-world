import React, { useState } from 'react';

function UserParticipation() {
  const obj = {
    question: "What is your favorite programming language?",
    choices: [
      { id: 1, label: "JavaScript", votes: 0 },
      { id: 2, label: "Python", votes: 0 },
      { id: 3, label: "Java", votes: 0 },
      { id: 4, label: "C#", votes: 0 }
    ]
  };

  const { question, choices } = obj;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleVote = () => {
    if (selectedOption !== null) {
      const updatedChoices = choices.map(choice => {
        if (choice.id === selectedOption) {
          return { ...choice, votes: choice.votes + 1 };
        }
        return choice;
      });
      console.log('Updated choices :', updatedChoices);
    } else {
      console.log('nothing selected rehman');
    }
  };

  return (
    <div>
      <label>{question}</label>
      <div>
        {choices.map((choice) => (
          <div key={choice.id}>
            <label>
              <input
                type="radio"
                name="option"
                value={choice.id}
                checked={selectedOption === choice.id}
                onChange={() => handleOptionChange(choice.id)}
              />
              {choice.label}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleVote} disabled={selectedOption === null}>
        Vote
      </button>
    </div>
  );
}

export default UserParticipation;
