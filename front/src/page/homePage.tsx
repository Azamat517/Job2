import { useState } from "react"
import City from "./city";
import Region from "./region";

const HomePage = () => {
    const [test, setTest] = useState(false)

    const toggleComponent = () => {
        setTest(prev => !prev);
    }

    return (
        <div className="homePage">
            <div className="homePage__box">
                <button onClick={toggleComponent} className="homePage__box__btn">
                    {test ? "Область" : "Город"}
                </button>

            </div>
            <div className="homePage__box__content">
                {test ? <City /> : <Region />}
            </div>
        </div>
    )
}

export default HomePage;
