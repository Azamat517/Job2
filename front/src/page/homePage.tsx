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
            <div className="homePage__box-info">
                <div className="homePage__box-info__info">Остановки</div>
                <div className="homePage__box-info__label">Количество остановок по городу Алматы</div>
                <div className="homePage__box-info__label">Количество остановок по Области</div>
                <div className="homePage__box-info__label">Общие количество</div>
            </div>
            <div className="homePage__box__content">
                {test ? <City /> : <Region />}
            </div>
        </div>
    )
}

export default HomePage;
