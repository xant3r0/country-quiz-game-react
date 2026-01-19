import style from "./modal.module.css";
import Button from "../button/Button";

const Modal = ({setActiveModal,activeModal,result}) => {
    return (
        <div className={style.modalBack}>
            <div className={style.modalWindow}>
                <div className={style.hDiv}>
                    <h3 className={style.h}>Finish Quiz</h3>
                </div>
                <p className={style.caution}>Are you sure you want to Finish and submit quiz for grading?</p>
                <div className={style.btnContainer}>
                    <Button onClick={() => setActiveModal(!activeModal)}>Cancel</Button>
                    <Button onClick={result}>Finish</Button>
                </div>
            </div>
        </div>
    )
};

export default Modal;