import CreateSentence from "./CreateSentence";
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
};

export default Api;
