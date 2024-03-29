import React from "react";
import useLocalStorage from "./useLocalStorage";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  //check for loacl Storage before opening the Coupon pages
  const userPhone = localStorage.getItem("userPhone");
  //Conditional rending else redirect
  return userPhone ? children : <Navigate to="/" />;
};
export default PrivateRoutes;
