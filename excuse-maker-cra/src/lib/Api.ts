import axios from "axios";

axios.defaults.baseURL = `http://localhost:4000`;
axios.interceptors.response.use(function (response) {
  console.log(response.data);
  return response;
});

export type Item={
  id:number;
  body:string;
}

const Api = {
  getList: async (name:string):Promise<Item[]> => {
    const response = await axios.get(`/${name}`);
    return response.data;
  },
  postItem: async (name:string, data:Omit<Item,"id">) => {
    await axios.post(`/${name}`, data);
  },
  putItem: async (name:string, id:number, data:Omit<Item,"id">) => {
    await axios.put(`/${name}/${id}`, data);
  },
  deleteItem: async (name:string, id:number): Promise<void> => {
    await axios.delete(`/${name}/${id}`);
  },
};

export default Api;
