import axios from 'axios';

export const getBestPlaces = async (id, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/places/${id}/hotplaces`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const getBestPlaceDetail = async (id, placeId, token) => {
  try {
    const response = await axios.get(
      `https://travellove-cndd.herokuapp.com/places/${id}/hotplaces/${placeId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
