import axios from "axios";

const baseurl = process.env.REACT_APP_BACKEND_URL;

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(baseurl + "/profile", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const loginUser = async (email: string, password: string) => {
  console.log(baseurl);
  try {
    const response = await axios.get(baseurl + "/login", {
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
