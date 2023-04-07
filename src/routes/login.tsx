import axios from "axios";

const baseurl = process.env.REACT_APP_BACKEND_URL + "/login";

export const loginUser = async (email: string, password: string) => {
  console.log(baseurl);
  try {
    const response = await axios.get(baseurl, {
      headers: {
        email,
        password,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
