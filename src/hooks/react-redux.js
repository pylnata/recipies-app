import { useSelector as originalUseSelector, useDispatch as originalUseDispatch } from "react-redux";

export const useSelector = (state) => originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();

