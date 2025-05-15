import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddRegion = () => {

    const [image, setImage] = useState('')
    const [id_stops, setId_stops] = useState('')


    const postData = async () => {
        if (!image || !id_stops
        ) {
            alert('Введите данные');
            return;
        }
        const formData = new FormData();

        formData.append('image', image,);
        formData.append('id_stops', id_stops,);

        try {
            const response = await fetch(`http://localhost:4500/region`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log('Success:', result);
            return true
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    const fileChangeHandler = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const navigate = useNavigate();
    function save() {
        postData()
        navigate('/');
    }


    return (
        <div className="addRegion">
            <div className="addRegion__box">
                <div className="addRegion__box__label">Остановки по области</div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">ID Остановки</div>
                    <input value={id_stops} onChange={(e) => setId_stops(e.target.value)} placeholder="id" className="addRegion__box__id__inp" type="text" />
                </div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">Наименование на русском</div>
                    <input placeholder="Наименование на русском" className="addRegion__box__id__inp" type="text" />
                </div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">Наименование на казаском</div>
                    <input placeholder="Наименование на казаском" className="addRegion__box__id__inp" type="text" />
                </div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">y_lat</div>
                    <input placeholder="43...." className="addRegion__box__id__inp" type="text" />
                </div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">x_long</div>
                    <input placeholder="76...." className="addRegion__box__id__inp" type="text" />
                </div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">Районы</div>
                    <input placeholder="Районы" className="addRegion__box__id__inp" type="text" />
                </div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">Улицы</div>
                    <input placeholder="Улицы" className="addRegion__box__id__inp" type="text" />
                </div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">Улицы</div>
                    <input name="image" onChange={fileChangeHandler} type="file" />
                </div>

                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">Районы</div>
                    <select className="addRegion__select">
                        <option>Районы</option>
                        <option>Алмалинский</option>
                        <option>Алатауский</option>
                        <option>Наурызбайский</option>
                        <option>Медеуский</option>
                        <option>Жетысуйский</option>
                        <option>Турксибский</option>
                    </select>
                </div>

                <div className="addRegion__btn">
                    <button onClick={save} className="addRegion__btn__box ">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddRegion