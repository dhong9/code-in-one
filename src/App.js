import ChallengePage from "./components/challengesPage/challengePage";
import Challenge from "./components/challenge/challenge";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ChallengePage />} />
          <Route path="challenge/:id" element={<Challenge />} />
        </Routes>
    </Router>
  );
}

export default App;