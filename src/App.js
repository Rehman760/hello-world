import './App.css';
import AnotherUserParticipation from './components/AnotherUserParticipation';
import PollDisplay from './components/PollDisplay';
import ThankYouMessage from './components/ThankYouMessage';
import UserParticipation from './components/UserParticipation';
function App() {
  return (
    <div className="App">
      <h1>Poll App</h1>
      <UserParticipation />
      <PollDisplay/>
      <AnotherUserParticipation/>
      <ThankYouMessage/>
    </div>
  );
}

export default App;
