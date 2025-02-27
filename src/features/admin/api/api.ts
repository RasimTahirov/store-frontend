import axios from "axios";

export const getAlUser = async ({ page, limit }: { page: number; limit: number }) => {
  try {
    const res = await axios.get(
      "http://localhost:1200/api/admin/users",
      {
        params: {
          page,
          limit,
        },
      }
    );
    console.log('api', res.data)
    return res.data;
  } catch (error) {
    console.log("Ошибка в получении пользователей", error);
  }
};
