import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.jsx";
import Category from "../../routes/category/category.component.jsx";

import { fetchCategoriesStart } from "../../store/categories/category.action.jsx";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
