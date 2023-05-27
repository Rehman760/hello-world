import React from 'react'

const PollDisplay = () => {
    const {question,choices,selectedOption,handleOptionChange,handleVote} = this.props
  return (
    <div>
      <h2>Poll Display</h2>
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
  )
}

export default PollDisplay