const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=55cc39f2b2d548c5870221027240609";

export const getWheatherData = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=no`);
  return await response.json();
};

export const getUserCurrentLocationData = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=no`);
  return await response.json();
};
