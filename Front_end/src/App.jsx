import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Connection from "./components/pages/Connection";
import ResultPage from "./components/pages/ResultPage";
import SignIn from "./components/molecules/SignIn";
import SignUp from "./components/molecules/SignUp";

function App() {
  return (
    <>
      <div>
        <Routes>
          {/* URL vers Home */}
          <Route path="/" element={<HomePage />}></Route>

          {/* URL vers page de connexion, */}
          <Route path="/connection" element={<Connection />}>
            <Route path="signIn" element={<SignIn />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>

          {/* URL vers page de résultat */}
          <Route path="/result" element={<ResultPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
