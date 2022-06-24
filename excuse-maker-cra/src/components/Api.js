import SentenceAddForm from "./SentenceAddForm";
const Api = {
  get: async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(url);
    console.log(responseJson);
    return responseJson;
  },
  post: async (url, data) => {
    const response = await fetch(url, {
      method: "post",
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
    });
    const responseJson = await response.json();
    return responseJson;
  },
};

export default Api;
