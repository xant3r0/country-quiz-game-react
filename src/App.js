import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage"
import "./components/styles/style.css";
import { useState } from "react"
import QuizResults from "./components/QuizResults";
import axios from "axios";

function App() {

  class Question {

    constructor(question,correctAnswer,incorrectAnswers) {
      this.question = question;
      this.correctAnswer = correctAnswer;
      this.answers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);
    };
    
  };

  let [inputValue,setInputValue] = useState("");
  let [appState,setAppState] = useState("home");                 //home | quiz | result
  let [quiz,setQuiz] = useState([]);
  let [currentQuestion,setCurrentQuestion] = useState(1);
  let [totalQuestions,setTotalQuestions] = useState(0);
  let [correctAnswers,setCorrectAnswers] = useState(0);
  let [userAnswers,setUserAnswers] = useState([]);
  let [selectedStyle,setSelectedStyle] = useState([]);

  const resetData = () => {
    alert("You reseted the answers, be careful before submition!!!");
      setSelectedStyle(new Array(totalQuestions).fill(null));
      setUserAnswers(new Array(totalQuestions).fill(""));
      setCurrentQuestion(1);
  };

  const playAgain = async () => {
    try {
    const res = await axios.get(`https://the-trivia-api.com/v2/questions?categories=geography&limit=${inputValue}`);
        
    const newQuiz = res.data.map(
      obj => new Question(
      obj.question.text,
      obj.correctAnswer,
      obj.incorrectAnswers
      )
    );
    setAppState("quiz");
    setQuiz(newQuiz);
    setTotalQuestions(parseInt(inputValue));
    setUserAnswers(new Array(parseInt(inputValue)).fill(""));
    setSelectedStyle(new Array(parseInt(inputValue)).fill(null));
    setCorrectAnswers(0);
    setCurrentQuestion(1);
  } catch {
    alert("Something went wrong, try again <3");
  };
};

  const startQuiz = async () => {

      if(validateForm()) {
        try {
          const res = await axios.get(`https://the-trivia-api.com/v2/questions?categories=geography&limit=${inputValue}`);
        
          const newQuiz = res.data.map(
            obj => new Question(
            obj.question.text,
            obj.correctAnswer,
            obj.incorrectAnswers
            )
          );
          setAppState("quiz");
          setQuiz(newQuiz);
          setTotalQuestions(parseInt(inputValue));
          setUserAnswers(new Array(parseInt(inputValue)).fill(""));
          setSelectedStyle(new Array(parseInt(inputValue)).fill(null));
        } catch {
          alert("Something went wrong, try again <3");
        };
      } else {
        setInputValue("");
        return;
      };
  };

  const result = () => {
    let result = 0;
    userAnswers.forEach((el,index) => {
      if(el === quiz[index].correctAnswer) {
        result++;
      };
    });

    setCorrectAnswers(result);
  };

  const validateForm = () => {
    if(parseInt(inputValue )< 5) {
      alert("The minimum number of question you can generate is 5!!!");
      return false;
    } else if(parseInt(inputValue )> 25) {
      alert("The maximum number of question you can generate is 5!!!");
      return false;
    } else if(!Number.isInteger(parseInt(inputValue))) {
      alert("Type a whole number!!!");
      return false;
    } else {
      return true;
    };
  }

  if(appState === "home") {
    return (
      <HomePage inputValue={inputValue} setInputValue={setInputValue} startQuiz={startQuiz}></HomePage> 
    );
  } else if(appState === "quiz") {
    return (
      <QuizPage quiz={quiz} currentQuestion={currentQuestion} totalQuestions={totalQuestions} setCurrentQuestion={setCurrentQuestion} setAppState={setAppState} setUserAnswer={setUserAnswers} userAnswers={userAnswers} result={result} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} resetData={resetData}></QuizPage>
    )
  } else {
    return (
      <QuizResults correctAnswers={correctAnswers} totalQuestions={totalQuestions} playAgain={playAgain}/>  
    )
  }
}

export default App;


