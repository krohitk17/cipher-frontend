import axios from "axios";

const baseurl = process.env.REACT_APP_BACKEND_URL + "/profile";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(baseurl, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getUser = async (token: string) => {
  try {
    const response = await axios.get(baseurl, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
