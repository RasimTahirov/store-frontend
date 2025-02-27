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
    return res.data;
  } catch (error) {
    console.log("Ошибка в получении пользователей", error);
  }
};

export const updateRole = async (id: string | undefined, data: string) => {
  try {
    const res = await axios.put(`http://localhost:1200/api/admin/user/update/${id}`, {
      role: data
    })
    return res.data
  } catch (error) {
    console.log('Ошибка при изменении роли', error);
  }
}

export const deleteUser = async (id: string | undefined) => {
  try {
    const res = await axios.delete(`http://localhost:1200/api/admin/user/${id}`)
    return res.data
  } catch (error) {
    console.log('Ошибка при удалении пользователя', error);
  }
}