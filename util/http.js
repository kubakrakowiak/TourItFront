import axios from "axios";
const backendUrl = "http://10.0.2.2:8000/";

export async function registerUser(registerUserData) {
  try {
    const response = await axios.post(
      backendUrl + "api/register/",
      registerUserData
    );
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
}

export async function loginUser(loginUserData) {
  try {
    const response = await axios.post(backendUrl + "api/token/", loginUserData);
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
}
export async function getNearestLocations(
  token,
  xCoord,
  yCoord,
  latitudeDelta,
  longitudeDelta
) {
  try {
    const response = await axios.get(
      `${backendUrl}api/nearest-locations/?x_coord=${xCoord}&y_coord=${yCoord}`,
      {
        params: {
          x_coord: xCoord,
          y_coord: yCoord,
          latitude_delta: latitudeDelta,
          longitude_delta: longitudeDelta,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Fetching nearest locations failed", error);
    throw error;
  }
}
export async function getLocationDetails(locationId, token) {
  try {
    const response = await axios.get(
      `${backendUrl}api/get-location/?id=${locationId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Fetching location details failed", error);
    throw error;
  }
}
export async function getTrendingLocations(token) {
  try {
    const response = await axios.get(`${backendUrl}api/trending/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fetching trending locations failed", error);
    throw error;
  }
}

export async function getViewedLocations(token) {
  try {
    const response = await axios.get(`${backendUrl}api/viewed-locations/`, {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fetching trending locations failed", error);
    throw error;
  }
}
