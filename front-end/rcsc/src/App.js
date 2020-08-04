import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import UserDashboard from "./pages/UserDashboard";
import PracticeMath from "./pages/mathPractice";
import PracticeEnglish from "./pages/englishPractice";
import MathLoader from "./pages/mathStatsPage";
import EnglishLoader from "./pages/englishStatsPage";
import ExamPractice from "./pages/examPractice.js";
import SignUpExamResult from "./components/sign_up_exam_result/sign_up_exam_result.js";
import { AuthProvider } from "./components/authentication";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <PrivateRoute exact path='/user' component={UserDashboard} />
          <PrivateRoute exact path='/math_practice' component={PracticeMath} />
          <PrivateRoute exact path='/english_practice' component={PracticeEnglish} />
          <PrivateRoute exact path='/math_stats_page' component={MathLoader} />
          <PrivateRoute exact path='/english_stats_page' component={EnglishLoader} />
          <PrivateRoute exact path='/exam' component={ExamPractice} />
          <PrivateRoute exact path='/sign-up-exam-review' component={SignUpExamResult} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
