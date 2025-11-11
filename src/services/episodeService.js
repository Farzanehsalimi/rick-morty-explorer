import http from "./httpService";

export const getEpisodes = async ({ page = 1, name = "", episode = "" }) => {
  try {
    const params = new URLSearchParams();
    params.set("page", page);
    if (name) params.set("name", name);
    if (episode) params.set("episode", episode);

    const res = await http.get(`/episode?${params.toString()}`);
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return { info: { pages: 1 }, results: [] };
    }
    throw error;
  }
};
export const getEpisodesByIds = async (ids) => {
  const res = await http.get(`/episode/${ids.join(",")}`);
  return res.data;
};

export const getEpisodeById = async (id) => {
  const res = await http.get(`/episode/${id}`);
  return res.data;
};
