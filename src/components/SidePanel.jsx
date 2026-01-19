import style from "./styles/sidepanel.module.css";
import checked from "../assets/checked.svg";
import flagged from "../assets/review.svg";
import goTo from "../assets/goTo.svg";
import Button from "./UI/button/Button";
import cancel from "../assets/cancel.svg"

const SidePanel = ({quiz,userAnswers,userFlags,goBack,activeModal,setActiveModal,sideBar,setSideBar}) => {
    return (
        <div className={style.sidePanel}>
            <button style={{border:"none",background:"transparent",width:"calc(100% - 20px)",display:"flex",justifyContent:"flex-end",}} onClick={() => setSideBar(!sideBar)}>
                <img src={cancel} alt="" />
            </button>
            <h3 style={{textAlign:"center"}}>Quiz</h3>
            <div className={style.desTot}>
                <div className={style.descCon}>
                    <div className={style.nAnswer}></div>
                    <p>Not Answered</p>
                </div>
                <div className={style.descCon}>
                    <img src={flagged} alt="" />
                    <p>Mark For Review</p>
                </div>
                <div className={style.descCon}>
                    <img src={checked} alt="" />
                    <p>Answered</p>
                </div>
            </div>
            <div className={style.questionsCon}>
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
            <Button style={{height:"5vh",width:"5vw",position:"absolute",bottom:"20px",right:"20px"}} onClick={() => setActiveModal(!activeModal)}>Finish</Button>
        </div>
    );
}

export default SidePanel;