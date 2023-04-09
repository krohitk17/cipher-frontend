import axios from "axios";

const baseurl = process.env.REACT_APP_BACKEND_URL;

export const checkApi = async () => {
  try {
    const response = await axios.get(baseurl!);
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    return false;
  }
};
