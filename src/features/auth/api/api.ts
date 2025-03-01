import { createAsyncThunk } from "@reduxjs/toolkit";

import { FormRegisterData, FromAuthData } from "@/entities/auth/types/type";
import axios from "axios";

axios.defaults.withCredentials = true;

export const fetchRegister = async (registerData: FormRegisterData) => {
  try {
    const res = await axios.post(
      "http://localhost:1200/api/auth/register",
      registerData
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message;
    }
  }
};

// Переменовать на login
export const authThunk = createAsyncThunk(
  "auth",
  async (data: FromAuthData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:1200/api/auth/login",
        data
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || "Неизвестная ошибка"
        );
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

export const logout = async () => {
  try {
    const res = await axios.post("http://localhost:1200/api/auth/logout");
    return res.data;
  } catch (error) {
    console.log("Ошибка при выходе", error);
  }
};

export const userDataThunk = createAsyncThunk("userData", async () => {
  try {
    const res = await axios.get("http://localhost:1200/api/user/data");
    return res.data;
  } catch (error) {
    console.log("Ошибка получении данных", error);
  }
});
