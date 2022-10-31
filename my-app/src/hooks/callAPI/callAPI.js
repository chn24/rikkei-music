import axios from "axios";

export const getList = async () => {
  return await axios
    .get("https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1")
    .then((response) => {
      return response.data.list;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const newSong = async (data) => {
  return await axios
    .put("https://6316fc9e82797be77fefdcfc.mockapi.io/musicList/1", data)
    .catch((error) => {
      console.log(error);
    });
};
