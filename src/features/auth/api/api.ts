import { createAsyncThunk } from "@reduxjs/toolkit";

import { FormRegisterData, FromAuthData } from "@/entities/auth/types/type";
import axios from "axios";

axios.defaults.withCredentials = true

export const fetchRegister = (registerData: FormRegisterData) => {
  try {
    const data = axios.post(
      "http://localhost:1200/api/auth/register",
      registerData
    );
    return data;
  } catch (error) {
    console.log("Ошибка регистрации", error);
  }
};


export const authThunk = createAsyncThunk(
  "auth",
  async (data: FromAuthData) => {
    try {
      const res = await axios.post(
        "http://localhost:1200/api/auth/login",
        data
      );
      return res.data;
    } catch (error) {
      console.log("Ошибка авторизации", error);
    }
  }
);
