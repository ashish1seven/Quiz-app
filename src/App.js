import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";

function App() {
  return (
    <div className="w-screen bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ quiz: quizId" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
