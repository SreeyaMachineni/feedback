import AvgScore from "./Components/AvgScores/AvgScore.component";
import Feedback from "./Components/FeedbackForm/Feedback.component";
import Feedbacklist from "./Components/FeedbackList/Feedbacklist.component";
import { FeedbackContextProvider } from "./Contexts/Feedback.context";

function App() {
  return (
    <>
    <FeedbackContextProvider>
      <Feedback/>
      <AvgScore/>
      <Feedbacklist/>
      </FeedbackContextProvider>
    </>
  );
}

export default App;
