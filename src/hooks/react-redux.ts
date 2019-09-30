import { useSelector as originalUseSelector, useDispatch as originalUseDispatch } from "react-redux";

export const useSelector = (state: any) => originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();

