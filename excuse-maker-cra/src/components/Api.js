import axios from "axios";

axios.defaults.baseURL = `http://localhost:4000`;
axios.interceptors.response.use(function (response) {
  console.log(response.data);
  return response;
});

const Api = {
  getList: async (name) => {
    const response = await axios.get(`/${name}`);
    return response.data;
  },
  postItem: async (name, data) => {
    await axios.post(`/${name}`, data);
  },
  putItem: async (name, id, data) => {
    await axios.put(`/${name}/${id}`, data);
  },
  deleteItem: async (name, id) => {
    await axios.delete(`/${name}/${id}`);
  },
};

export default Api;
