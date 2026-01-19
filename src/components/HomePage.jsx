import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"
import Input from "../components/UI/input/Input.jsx"
import Button from "../components/UI/button/Button.jsx"

const HomePage = ({startQuiz,inputValue,setInputValue}) => {
    
    return (
        <div>
            <NavBar></NavBar>
            <section id="homepage-sec">
                <h1 className="center-text">Test your knowledge</h1>
                <p id="homepage-p">Get ready to put your knowledge to the test! Our quiz offers a mix of fun challenges and interesting questions designed to keep you engaged from start to finish. Take a deep breath, hit start, and see how far you can go.</p>
                <form id="start-quiz-form" onSubmit={event => event.preventDefault()}>
                    <label htmlFor="">How many questions you want to answer?</label>
                    <Input value={inputValue} onChange={event => setInputValue(event.target.value)} type="number" min="5" max="10"/>
                    <Button onClick={startQuiz} type="submit">Start!</Button>
                </form>
            </section>
            <Footer></Footer>
        </div>
    )
};

export default HomePage;