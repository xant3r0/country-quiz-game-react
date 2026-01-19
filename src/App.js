import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import "./components/styles/style.css";
import { useState } from "react"
import QuizResults from "./components/QuizResults";
import axios from "axios";
import Review from "./components/Review";

function App() {

  class Question {

    constructor(question,correctAnswer,incorrectAnswers) {
      this.question = question;
      this.correctAnswer = correctAnswer;
      this.answers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5);
    };
    
  };

  const [inputValue,setInputValue] = useState("");
  const [appState,setAppState] = useState("home");                 //home | quiz | result | review
  const [quiz,setQuiz] = useState([]);
  const [currentQuestion,setCurrentQuestion] = useState(1);
  const [totalQuestions,setTotalQuestions] = useState(0);
  const [correctAnswers,setCorrectAnswers] = useState(0);
  const [userAnswers,setUserAnswers] = useState([]);
  const [selectedStyle,setSelectedStyle] = useState([]);
  const [userFlags,setUserFlags] = useState([]);
  const [activeModal,setActiveModal] = useState(false);
  const [sideBar,setSideBar] = useState(false);

  const resetData = () => {
    alert("You reseted the answers, be careful before submition!!!");
      setSelectedStyle(new Array(totalQuestions).fill(null));
      setUserAnswers(new Array(totalQuestions).fill(""));
      setUserFlags(new Array(totalQuestions).fill(""));
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
    setUserFlags(new Array(parseInt(inputValue)).fill(""));
    setCorrectAnswers(0);
    setCurrentQuestion(1);
    setActiveModal(false);
    setSideBar(false);
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
          setUserFlags(new Array(parseInt(inputValue)).fill(""));
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
    setAppState("result");
  };

  const validateForm = () => {
    if(parseInt(inputValue )< 5) {
      alert("The minimum number of question you can generate is 5!!!");
      return false;
    } else if(parseInt(inputValue) > 10) {
      alert("The maximum number of question you can generate is 10!!!");
      return false;
    } else {
      return true;
    };
  }

  const goBack = (index) => {
    setAppState("quiz");
    setCurrentQuestion(index + 1);
  }

  if(appState === "home") {
    return (
      <HomePage inputValue={inputValue} setInputValue={setInputValue} startQuiz={startQuiz}></HomePage> 
    );
  } else if(appState === "quiz") {
    return (
      <QuizPage quiz={quiz} currentQuestion={currentQuestion} totalQuestions={totalQuestions} setCurrentQuestion={setCurrentQuestion} setAppState={setAppState} setUserAnswer={setUserAnswers} userAnswers={userAnswers} result={result} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} resetData={resetData} setUserFlags={setUserFlags} userFlags={userFlags} sideBar={sideBar} setSideBar={setSideBar} goBack={goBack} activeModal={activeModal} setActiveModal={setActiveModal}></QuizPage>
    )
  } else if(appState === "review") {
    return (
      <Review quiz={quiz} userAnswers={userAnswers} userFlags={userFlags} result={result} goBack={goBack} setActiveModal={setActiveModal} activeModal={activeModal}/>  
    )
  } else if(appState === "result") {
    return (
      <QuizResults correctAnswers={correctAnswers} totalQuestions={totalQuestions} playAgain={playAgain}/>
    )
  };

}

export default App;

//<Modal></Modal>
