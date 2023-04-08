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

export const getUser = async (token: string, id?: string) => {
  try {
    const response = await axios.get(baseurl, {
      headers: {
        Authorization: "Bearer " + token,
        id,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const updateUser = async (token: string, updatedUser: {}) => {
  try {
    const response = await axios.patch(baseurl, updatedUser, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getUserFollowers = async (
  token: string,
  page: number,
  id?: string
) => {
  try {
    const response = await axios.get(baseurl + `/followers/${page}`, {
      headers: {
        Authorization: "Bearer " + token,
        id,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getUserFollowing = async (
  token: string,
  page: number,
  id?: string
) => {
  try {
    const response = await axios.get(baseurl + `/following/${page}`, {
      headers: {
        Authorization: "Bearer " + token,
        id,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
