import { createContext, useContext, useState } from "react";
import { getUserCurrentLocationData, getWheatherData } from "../api";

export const WheatherContext = createContext(null);

export const useWheather = () => {
  return useContext(WheatherContext);
};

export const WheatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [seacrchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWheatherData(seacrchCity);
    return setData(response);
  };

  const getCurrentLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getUserCurrentLocationData(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };
  return (
    <WheatherContext.Provider
      value={{
        data,
        seacrchCity,
        setSearchCity,
        fetchData,
        getCurrentLocationData,
      }}
    >
      {props.children}
    </WheatherContext.Provider>
  );
};
