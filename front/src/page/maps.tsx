import { GoogleMap, LoadScript  } from "@react-google-maps/api"


const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 43.238949,
  lng: 76.889709
};

const Maps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAcdz_BO9YOiz2_4MtBXSJ-ziqKgteiwLI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12} >
      </GoogleMap>
    </LoadScript>
  )
}

export default Maps