import './App.css';
import AnotherUserParticipation from './components/AnotherUserParticipation';
import PollDisplay from './components/PollDisplay';
import UserParticipation from './components/UserParticipation';
function App() {
  return (
    <div className="App">
      <h1>Poll App</h1>
      {/* <UserParticipation render={(question,choices,selectedOption,handleOptionChange,handleVote)=>
      <PollDisplay question={question} choices={choices} selectedOption={selectedOption}
      handleOptionChange={handleOptionChange} handleVote={handleVote}/>}/> */}
     
     <AnotherUserParticipation/>
    </div>
  );
}

export default App;
