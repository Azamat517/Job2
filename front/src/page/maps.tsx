import { GoogleMap, LoadScript } from "@react-google-maps/api"


const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 43.238949, // широта (пример: Алматы)
  lng: 76.889709  // долгота
};

const Maps = () => {
  return (
    <LoadScript googleMapsApiKey="ТВОЙ_API_КЛЮЧ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* Тут можно размещать маркеры, полигоны и прочее */}
      </GoogleMap>
    </LoadScript>
  )
}

export default Maps