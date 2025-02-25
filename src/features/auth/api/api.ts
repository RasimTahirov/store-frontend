import { FormRegisterData } from "@/entities/auth/types/type";
import axios from "axios";

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
