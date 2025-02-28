import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAlUser = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const res = await axios.get("http://localhost:1200/api/admin/users", {
      params: {
        page,
        limit,
      },
    });
    return res.data;
  } catch (error) {
    console.log("Ошибка в получении пользователей", error);
  }
};

export const updateRole = async (id: string | undefined, data: string) => {
  try {
    const res = await axios.put(
      `http://localhost:1200/api/admin/user/update/${id}`,
      {
        role: data,
      }
    );
    return res.data;
  } catch (error) {
    console.log("Ошибка при изменении роли", error);
  }
};

export const deleteUser = async (id: string | undefined) => {
  try {
    const res = await axios.delete(
      `http://localhost:1200/api/admin/user/${id}`
    );
    return res.data;
  } catch (error) {
    console.log("Ошибка при удалении пользователя", error);
  }
};

export const createCategoryThunk = createAsyncThunk(
  "createCategory",
  async (name: string) => {
    try {
      const res = await axios.post(
        "http://localhost:1200/api/admin/create/category",
        {
          name,
        }
      );
      return res.data;
    } catch (error) {
      console.log("Ошибка при создании регистрации", error);
    }
  }
);

export const createProductThunk = createAsyncThunk(
  "createProduct",
  async (data: FormData) => {
    try {
      console.log("Sending request to server...");
      const res = await axios.post(
        "http://localhost:1200/api/admin/create/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Указываем правильный тип контента
          },
        }
      );
      console.log("Response from server:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error in creating product:", error); // Логируем ошибку
      throw new Error("Ошибка при создании товара"); // Явно выбрасываем ошибку
    }
  }
);

export const getAllCategories = async () => {
  try {
    const res = await axios.get("http://localhost:1200/api/user/categories");
    return res.data;
  } catch (error) {
    console.log("Ошибка при получении категории", error);
  }
}; // Сделать отдельно получение категорий для админов на бэке (ВОЗМОЖНО :D)
