import { AppDispatch, RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { resetCategoryName, setCategoryName } from "../slice/categorySlice";
import { createCategoryThunk } from "../api/api";

const useCategory = () => {
  const dispatch = useDispatch<AppDispatch>();

  const categoryName = useSelector((state: RootState) => state.category.name);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryName(e.target.value));
  };

  const createCategory = async (e: React.FormEvent) => {
    e.preventDefault();

    await dispatch(createCategoryThunk(categoryName));
    dispatch(resetCategoryName());
  };

  return { createCategory, categoryName, handleInputChange };
};

export default useCategory;
