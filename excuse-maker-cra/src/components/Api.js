import SentenceAddForm from "./SentenceAddForm";
import axios from "axios";
const Api = {
  get: async (url) => {
    const response = await axios(url);
    const responseJson = await response.json();

    console.log(url);
    console.log(responseJson);
    return responseJson;
  },
  post: async (url, data) => {
    const response = await axios(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        body: data.body,
      },
    });
    const responseJson = await response.json();

    console.log(url);
    console.log(responseJson);
    return responseJson;
  },
  put: async (url, data) => {
    const response = await fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: data.body,
      }),
    });
    const responseJson = await response.json();

    console.log(url);
    console.log(responseJson);
    return responseJson;
  },
  delete: async (url) => {
    const response = await fetch(url, {
      method: "delete",
    }).then((res) => {
      console.log(res);
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res;
    });
    const responseJson = await response.json();
    return responseJson;
  },
};

export default Api;
