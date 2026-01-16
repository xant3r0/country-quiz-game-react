import NavBar from "./NavBar";
import Footer from "./Footer";
import Button from "./UI/button/Button"
import classes from "./styles/quizpage.module.css"
import { useEffect } from "react";

const QuizPage = ({ quiz, currentQuestion, totalQuestions, setCurrentQuestion, setAppState, setUserAnswer, userAnswers, result, selectedStyle, setSelectedStyle,resetData}) => {

    useEffect(() => {
        if (currentQuestion > totalQuestions) {
            setAppState("result");
            result();
            return;
        } else if (currentQuestion === 0) {
            alert("This is the first question!!!");
            setCurrentQuestion(currentQuestion + 1);
        };
    }, [currentQuestion, totalQuestions,setAppState,result,setCurrentQuestion]);

    if (currentQuestion > totalQuestions || currentQuestion === 0) {
        return null;
    }

    return (
        <div>
            <NavBar />
            <section className={classes.quizSec}>
                <div className={classes.quizBar}>
                    <div className={classes.gap}>
                        <Button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</Button>
                        <Button onClick={resetData}>Reset</Button>
                        <p className={classes.quizStage}>{`${currentQuestion}/${totalQuestions}`}</p>
                    </div>
                    <div className={classes.gap}>
                        <Button>Mark question</Button>
                        <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Skip</Button>
                        <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</Button>
                    </div>
                </div>
                <h1 className={classes.question}>{quiz[currentQuestion - 1].question}</h1>
                <div className={classes.flexCenter}>
                    <div className={classes.answersGrid}>
                        <Button
                            style={{
                                gridRowStart: 1,
                                gridRowEnd: 2,
                                gridColumnStart: 1,
                                gridColumnEnd: 2
                            }}
                            onClick={() => {
                                setUserAnswer(() => {
                                    let arr = [...userAnswers];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[0];
                                    return arr;
                                })
                                setSelectedStyle(() => {
                                    let selected = [...selectedStyle];
                                    selected[currentQuestion - 1] = 0;
                                    return selected;
                                });
                            }}
                            className={selectedStyle[currentQuestion - 1] === 0 ? classes.selected : classes.btn}
                        >
                            {quiz[currentQuestion - 1].answers[0]}
                        </Button>
                        <Button
                            style={{
                                gridRowStart: 1,
                                gridRowEnd: 2,
                                gridColumnStart: 3,
                                gridColumnEnd: 4
                            }}
                            onClick={() => {
                                setUserAnswer(() => {
                                    let arr = [...userAnswers];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[1];
                                    return arr;
                                })
                                setSelectedStyle(() => {
                                    let selected = [...selectedStyle];
                                    selected[currentQuestion - 1] = 1;
                                    return selected;
                                });
                            }}
                            className={selectedStyle[currentQuestion - 1] === 1 ? classes.selected : classes.btn}
                        >
                            {quiz[currentQuestion - 1].answers[1]}
                        </Button>
                        <Button
                            style={{
                                gridRowStart: 3,
                                gridRowEnd: 4,
                                gridColumnStart: 1,
                                gridColumnEnd: 2
                            }}
                            onClick={() => {
                                setUserAnswer(() => {
                                    let arr = [...userAnswers];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[2];
                                    return arr;
                                })
                                setSelectedStyle(() => {
                                    let selected = [...selectedStyle];
                                    selected[currentQuestion - 1] = 2;
                                    return selected;
                                });
                            }}
                            className={selectedStyle[currentQuestion - 1] === 2 ? classes.selected : classes.btn}
                        >
                            {quiz[currentQuestion - 1].answers[2]}
                        </Button>
                        <Button
                            style={{
                                gridRowStart: 3,
                                gridRowEnd: 4,
                                gridColumnStart: 3,
                                gridColumnEnd: 4
                            }}
                            onClick={() => {
                                setUserAnswer(() => {
                                    let arr = [...userAnswers];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[3];
                                    return arr;
                                })
                                setSelectedStyle(() => {
                                    let selected = [...selectedStyle];
                                    selected[currentQuestion - 1] = 3;
                                    return selected;
                                });
                            }}
                            className={selectedStyle[currentQuestion - 1] === 3 ? classes.selected : classes.btn}
                        >
                            {quiz[currentQuestion - 1].answers[3]}
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default QuizPage;
/*import NavBar from "./NavBar";
import Footer from "./Footer";
import Button from "./UI/button/Button";
import classes from "./styles/quizpage.module.css";
import { useState } from "react";

const QuizPage = ({ quiz, currentQuestion, totalQuestions, setCurrentQuestion, setAppState, setUserAnswer, userAnswers, result }) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    if (currentQuestion > totalQuestions) {
        setAppState("result");
        result();
        return null;
    }

    if (currentQuestion === 0) {
        alert("This is the first question!!!");
        setCurrentQuestion(1);
        return null;
    }

    return (
        <div>
            <NavBar />
            <section className={classes.quizSec}>
                <div className={classes.quizBar}>
                    <div className={classes.gap}>
                        <Button onClick={() => setCurrentQuestion(currentQuestion - 1)}>Previous</Button>
                        <Button>Reset</Button>
                        <p className={classes.quizStage}>{`${currentQuestion}/${totalQuestions}`}</p>
                    </div>
                    <div className={classes.gap}>
                        <Button>Mark question</Button>
                        <Button>Skip</Button>
                        <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</Button>
                    </div>
                </div>
                <h1 className={classes.question}>{quiz[currentQuestion - 1].question}</h1>
                <div className={classes.flexCenter}>
                    <div className={classes.answersGrid}>
                        <Button
                            className={selectedAnswerIndex === 0 ? classes.selected : classes.btn}
                            style={{ gridRowStart: 1, gridRowEnd: 2, gridColumnStart: 1, gridColumnEnd: 2 }}
                            onClick={() => {
                                setSelectedAnswerIndex(0);
                                setUserAnswer(prev => {
                                    const arr = [...prev];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[0];
                                    return arr;
                                });
                            }}
                        >
                            {quiz[currentQuestion - 1].answers[0]}
                        </Button>

                        <Button
                            className={selectedAnswerIndex === 1 ? classes.selected : classes.btn}
                            style={{ gridRowStart: 1, gridRowEnd: 2, gridColumnStart: 3, gridColumnEnd: 4 }}
                            onClick={() => {
                                setSelectedAnswerIndex(1);
                                setUserAnswer(prev => {
                                    const arr = [...prev];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[1];
                                    return arr;
                                });
                            }}
                        >
                            {quiz[currentQuestion - 1].answers[1]}
                        </Button>

                        <Button
                            className={selectedAnswerIndex === 2 ? classes.selected : classes.btn}
                            style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 1, gridColumnEnd: 2 }}
                            onClick={() => {
                                setSelectedAnswerIndex(2);
                                setUserAnswer(prev => {
                                    const arr = [...prev];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[2];
                                    return arr;
                                });
                            }}
                        >
                            {quiz[currentQuestion - 1].answers[2]}
                        </Button>

                        <Button
                            className={selectedAnswerIndex === 3 ? classes.selected : classes.btn}
                            style={{ gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 3, gridColumnEnd: 4 }}
                            onClick={() => {
                                setSelectedAnswerIndex(3);
                                setUserAnswer(prev => {
                                    const arr = [...prev];
                                    arr[currentQuestion - 1] = quiz[currentQuestion - 1].answers[3];
                                    return arr;
                                });
                            }}
                        >
                            {quiz[currentQuestion - 1].answers[3]}
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default QuizPage;*/