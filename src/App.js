import ChallengePage from "./components/challengesPage/challengePage";
import Challenge from "./components/challenge/challenge";
import SignInSide from "./components/signInSide/signInSide";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/code-in-one/" element={<ChallengePage />} />
          <Route path="/code-in-one/challenge/:id" element={<Challenge />} />
          <Route path="/code-in-one/login" element={<SignInSide />} />
        </Routes>
    </Router>
  );
}

export default App;