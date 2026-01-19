import NavBar from "./NavBar";
import Footer from "./Footer";
import style from "./styles/review.module.css";
import Button from "./UI/button/Button";
import checked from "../assets/checked.svg"
import goTo from "../assets/goTo.svg"
import flagged from "../assets/review.svg";
import Modal from "./UI/modal/Modal";

const Review = ({quiz,userAnswers,userFlags,goBack,setActiveModal,activeModal,result}) => {
    return(
        <div>
            {activeModal ? <Modal setActiveModal={setActiveModal} activeModal={activeModal} result={result}></Modal> : null}
            <NavBar/>
                <section className={style.review}>
                    <div className={style.reviewBar}>
                        <div className={style.upper}>
                            <h1 className={style.h}>Review Page</h1>
                            <Button style={{width:"fit-content",justifySelf:"end",marginRight:"3vw"}} onClick={() => setActiveModal(!activeModal)}>Next</Button>
                        </div>
                        <div className={style.hrStyle}>
                            <hr style={{marginTop:"3vh",width:"64vw"}}/>
                        </div>
                        <div className={style.legendParent}>
                            <div className={style.legend}>
                                <div className={style.nAnswer}></div>
                                <p> Not answered</p>
                            </div>
                            <div className={style.legend}>
                                <img src={flagged} alt="" className={style.flagged}/>
                                <p> Marked for review</p>
                            </div>
                            <div className={style.legend}>
                                <img src={checked} alt="" className={style.checked}/>
                                <p> Answered</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.questionContainer}>
                        {quiz.map((el,index) => (
                            <div className={style.question} key={index} style={index % 2 !== 0 ? {backgroundColor:"#FFFFFF"} : {backgroundColor:"#E5E5E5"}}>
                                <p className={style.p}>{index + 1}</p>
                                { userFlags[index] === "f" ? <img src={flagged} className={style.flagged} alt="" style={{justifySelf:"center",alignSelf:"center"}}/> : userAnswers[index] === "" ? <div className={style.nAnswer} style={{justifySelf:"center",alignSelf:"center"}}></div> : userAnswers[index].length > 0 ? <img src={checked} className={style.checked} alt="" style={{justifySelf:"center",alignSelf:"center"}}/> : null}
                                <button className={style.btnGoTo} onClick={() => goBack(index)} style={{justifySelf:"center",alignSelf:"center"}}>
                                    <img src={goTo} alt=""/>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            <Footer/>
        </div>
    );
}

export default Review;