import axios from "axios";

const baseurl = process.env.REACT_APP_BACKEND_URL + "/auth";

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

export const changePassword = async (
  token: string,
  oldPassword: string,
  newPassword: string
) => {
  try {
    const response = await axios.patch(
      baseurl + "/password",
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
