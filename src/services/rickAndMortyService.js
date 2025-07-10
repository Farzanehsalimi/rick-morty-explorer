import api from "../api/api";

export const getAllCharacters = async () => {
  try {
    const response = await api.get("/character");
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error("error fetching characters:", error);
    throw error;
  }
};
