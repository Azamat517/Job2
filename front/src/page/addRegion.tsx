

const AddRegion = () => {
    return (
        <div className="addRegion">
            <div className="addRegion__box">
                <div className="addRegion__box__label">Остановки по области</div>
                <div className="addRegion__box__id">
                    <div className="addRegion__box__id__box">ID Остановки</div>
                    <input placeholder="id" className="addRegion__box__id__inp" type="text" />
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
                <div className="addRegion__box__id__box">
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
                    <button className="addRegion__btn__box ">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddRegion