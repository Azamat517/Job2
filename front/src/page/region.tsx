import { useEffect, useState } from "react";
import { getRegion, region } from "../features/regionSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";

const Region = () => {
  const dispatch = useDispatch<AppDispatch>();
  const obl = useSelector(region);

  const [searchId, setSearchId] = useState("");
  const [searcName, setSearchName] = useState("");
  const [searcStreet, setSearchStreet] = useState("");
  const [searcDistrict, setSearcDistrict] = useState("");
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getRegion());
  }, [dispatch]);


  const filteredCities = obl.regionInfo?.cities.filter((citys: any,) =>
    citys.id_stops.toString().includes(searchId) && citys.name_ru.toString().includes(searcName)
    && citys.street.toString().includes(searcStreet) && citys.district.toString().includes(searcDistrict)

  );

  // const dialogRef = useRef<any>(null);
  // const openDialog = (image: string, id_stops: string) => {
  //   setSelectedImage(image);
  //   setId(id_stops);
  //   if (dialogRef.current) {
  //     dialogRef.current.showModal();
  //   }
  // };

  return (
    <div>
      <div className="region">
        <div className="region__search">
          <div className="region__search__box">
            <div className="region__search__box__id">Поиск по ID</div>
            <input
              placeholder="Поиск по id"
              className="region__search__box__inp"
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />

          </div>
          <div className="region__search__box-name">
            <div className="region__search__box-name__nameRU">Поиск по наименованию</div>
            <input
              placeholder="Поиск по имени(RU)"
              className="region__search__box__inp__nameRU"
              type="text"
              value={searcName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="region__search__box-name">
            <div className="region__search__box-name__nameRU">Поиск по улицы</div>
            <input
              placeholder="Поиск улице"
              className="region__search__box__inp__nameRU"
              type="text"
              value={searcStreet}
              onChange={(e) => setSearchStreet(e.target.value)}
            />
          </div>
          <div className="region__search__box-name">
            <div className="region__search__box-name__nameRU">Поиск по району</div>
            <input
              placeholder="Поиск по району"
              className="region__search__box__inp__nameRU"
              type="text"
              value={searcDistrict}
              onChange={(e) => setSearcDistrict(e.target.value)}
            />
          </div>

        </div>
        <table className="region__table">
          <thead>
            <tr>
              <th className="regionn__tb">ID</th>
              <th className="region__tb5">ID ОП</th>
              <th className="region__tb1">Название остановок на русском языке</th>
              <th className="region__tb1">Название остановок на казахском языке</th>
              <th className="region__tb2">y_lat</th>
              <th className="region__tb2">x_long</th>
              <th className="region__tb3">Улица</th>
              <th className="region__tb3">Район</th>
              {/* <th className="region__tb3">Фото остановки</th> */}
              <th className="region__tb4">Дата загрузки остановки в ЦДУ ГПТ</th>
            </tr>
          </thead>
          <tbody>
            {filteredCities?.map((city: any, index: number) => (
              <tr key={index}>
                <td className="region__tb6">{city.id}</td>
                <td className="region__tb6">{city.id_stops}</td>
                <td className="region__tb7">{city.name_ru}</td>
                <td className="region__tb7">{city.name_kz}</td>
                <td className="region__tb8">{city.y_lat}</td>
                <td className="region__tb8">{city.x_long}</td>
                <td className="region__tb8">{city.street}</td>
                <td className="region__tb8">{city.district}</td>
                {/* <td className="region__tb8">
                  <button type="button" onClick={() => openDialog(city.image, city.id_stops)}>Фото</button>
                </td> */}
                <td className="region__tb8">{city.datetime || "нету"}</td>
                {/* <dialog className="dialog" ref={dialogRef}>
                  <form method="dialog">
                    <button type="submit">Закрыть окно</button>
                    <div>
                      {selectedImage && (
                        <img
                          className="dialog__img"
                          src={`http://localhost:4500/uploads/${selectedImage}`}
                          alt="Остановка"
                        />
                      )}
                      <div>ID {id}</div>
                    </div>
                  </form>
                </dialog> */}
              </tr>

            ))}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Region;
