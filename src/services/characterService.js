import http from "./httpService";

export const getCharacters = async ({
  page = 1,
  name = "",
  status = "",
  species = "",
  gender = "",
}) => {
  try {
    const params = new URLSearchParams();

    params.set("page", page);

    if (name) params.set("name", name);
    if (status) params.set("status", status);
    if (species) params.set("species", species);
    if (gender) params.set("gender", gender);

    const res = await http.get(`/character?${params.toString()}`);
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return {
        info: { pages: 0, count: 0 },
        results: [],
      };
    }

    throw error;
  }
};

// get one character
export const getCharacter = async (id) => {
  try {
    const res = await http.get(`/character/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCharactersByIds = async (ids) => {
  if (!ids || ids.length === 0) return [];
  const res = await http.get(`/character/${ids.join(",")}`);
  return Array.isArray(res.data) ? res.data : [res.data];
};
