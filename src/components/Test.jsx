import { useRef,useEffect } from "react";

const Test = (test,test2) => {

    const x = useRef();
    //console.log(x.current);

    useEffect(() => { console.log(x.current.textContent)}, []);

    return (
        <div>
                <h1 ref={x}>HHHHHHH</h1>
                <h2>gfdgfd</h2>
        </div>
    );
};

export default Test;