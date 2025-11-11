import http from "./httpService";

export const getLocations = async ({
  page = 1,
  type = "",
  dimension = "",
  name = "",
}) => {
  try {
    const params = new URLSearchParams();

    params.set("page", page);

    if (type) params.set("type", type);
    if (dimension) params.set("dimension", dimension);
    if (name) params.set("name", name);

    const res = await http.get(`/location?${params.toString()}`);
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

export const getLocationById = async (id) => {
  const res = await http.get(`/location/${id}`);
  return res.data;
};
