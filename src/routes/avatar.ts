import axios from "axios";

const baseurl = process.env.REACT_APP_BACKEND_URL + "/avatar";

export const setUserAvatar = async (token: string, avatar: FormData) => {
  try {
    console.log(avatar);
    const response = await axios.post(baseurl, avatar, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
