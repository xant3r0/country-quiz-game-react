import NavBar from "./NavBar"
import Footer from "./Footer"
import style from "./styles/quizresults.module.css";
import congratsSvg from "../assets/congratsSvg.svg";
import Button from "./UI/button/Button";

const QuizResults = ({correctAnswers,totalQuestions,playAgain}) => {
    return (
        <div>
            <NavBar/>
            <section className={style.quizResultsSec}>
                <img src={congratsSvg} alt="Congratulations" className={style.quizCongrats}/>
                <h1>Congrats! You completed the quiz.</h1>
                <p>You answered {correctAnswers + '/' + totalQuestions} correctly!</p>
                <Button onClick={playAgain}>Play Again</Button>
            </section>
            <Footer/>
        </div>
    );
};

export default QuizResults;