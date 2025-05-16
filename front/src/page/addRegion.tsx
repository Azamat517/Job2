import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRegion = () => {

  const [id_stops, setId_stops] = useState('')
  const [name_ru, setName_ru] = useState('')
  const [name_kz, setName_kz] = useState('')
  const [y_lat, setY_lat] = useState('')
  const [x_long, setX_long] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [image, setImage] = useState('')
  const navigate = useNavigate();

  const postData = async () => {
    if (
      !image
      || !id_stops
      || !name_ru
      || !name_kz 
      || !y_lat 
      || !x_long
      || !street 
      || !district
    ) {
      alert('Введите данные');
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('id_stops', id_stops);
    formData.append('name_ru', name_ru);
    formData.append('name_kz', name_kz);
    formData.append('y_lat', y_lat);
    formData.append('x_long', x_long);
    formData.append('street', street);
    formData.append('district', district);
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

  function addNewOp() {
    if (!id_stops
      || !name_ru || !name_kz || !y_lat || !x_long || !street || !district || !image
    ) {
      postData()
    } else {
      postData()
      navigate(-1)
    }
  }

  return (
    <div>
      <div className="addRegion">
        <div className="addRegion__box">
          <div className="addRegion__box__label">Добавление остановок для области</div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              ID Остановки
            </div>
            <input value={id_stops} onChange={(e) => setId_stops(e.target.value)} placeholder=" ID Остановки" className="addRegion__box__id__inp" type="text" />
          </div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              Русский язык
            </div>
            <input value={name_ru} onChange={(e) => setName_ru(e.target.value)} placeholder=" Русский язык" className="addRegion__box__id__inp" type="text" />
          </div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              Казахский язык
            </div>
            <input value={name_kz} onChange={(e) => setName_kz(e.target.value)} placeholder="Казахский язык" className="addRegion__box__id__inp" type="text" />
          </div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              y_lat
            </div>
            <input value={x_long} onChange={(e) => setX_long(e.target.value)} placeholder="43...." className="addRegion__box__id__inp" type="text" />
          </div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              x_lat
            </div>
            <input value={y_lat} onChange={(e) => setY_lat(e.target.value)} placeholder="76...." className="addRegion__box__id__inp" type="text" />
          </div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              Улица
            </div>
            <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Улица" className="addRegion__box__id__inp" type="text" />
          </div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              Фото
            </div>
            <input name="image" onChange={fileChangeHandler} type="file" />
          </div>
          <div className="addRegion__box__id">
            <div className="addRegion__box__id__box">
              Район
            </div>
            <select className="addRegion__select" value={district} onChange={(e) => setDistrict(e.target.value)}>
              <option>Районы</option>
              <option>Бостандыкский</option>
              <option>Медеуский</option>
              <option>Ауэзовский</option>
              <option>Турксибский</option>
              <option>Алатауский</option>
              <option>Жетысуский</option>
              <option>Область</option>
            </select>
          </div>
          <div className="addRegion__btn">
            <button className="addRegion__btn__box" onClick={addNewOp}>Add</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddRegion