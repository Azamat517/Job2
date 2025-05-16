import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCity, gorod } from "../features/citySlice";
import { AppDispatch } from "../redux/store";
import { getRegion, region } from "../features/regionSlice";
import City from "./city";
import Region from "./region";

const HomePage = () => {
    const [isRegion, setIsRegion] = useState(true);

    const togglePage = () => {
        if (!isRegion) {
            setIsRegion(true)
        } else {
            setIsRegion(false)
        }
    };

    const dispatch = useDispatch<AppDispatch>();
    const city = useSelector(gorod);
    const obl = useSelector(region);

    useEffect(() => {
        dispatch(getCity());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getRegion())
    }, [dispatch]);




    return (
        <div>
            <div className="homePage">
                <div className="homePage__box">
                    <button className="homePage__box__btn" onClick={togglePage}>
                        {isRegion ? "Город" : "Область"}
                    </button>

                </div>
                <div className="homePage__box-info">
                    <div className="homePage__box-info__info">Информация по остановкам по городу Алматы и алматинской области</div>
                    <ul>
                        <li className="homePage__box-info__label">Количество по городу Алматы {city.cityInfo?.cityOP} штук</li>
                        <li className="homePage__box-info__label">Количество по области {obl.regionInfo?.regOP} штук</li>
                        <li className="homePage__box-info__label">Общие количество {city.cityInfo?.cityOP + obl.regionInfo?.regOP} штук</li>

                    </ul>

                </div>
                <div>{isRegion ? <City /> : <Region />}</div>
            </div>
        </div>
    );
};

export default HomePage;
