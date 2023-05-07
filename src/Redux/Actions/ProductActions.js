import axios from "axios";
import {
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_CATEGORIA1_FAIL,
  PRODUCT_LIST_CATEGORIA1_REQUEST,
  PRODUCT_LIST_CATEGORIA1_SUCCESS,
  PRODUCT_LIST_CATEGORIA2_FAIL,
  PRODUCT_LIST_CATEGORIA2_REQUEST,
  PRODUCT_LIST_CATEGORIA2_SUCCESS,
  PRODUCT_LIST_CATEGORIA3_FAIL,
  PRODUCT_LIST_CATEGORIA3_REQUEST,
  PRODUCT_LIST_CATEGORIA3_SUCCESS,
} from "../Constants/ProductConstants";
import { URL } from "../Url";
import { logout } from "./userActions";

// PRODUCT LIST
export const listProduct =
  (keyword = "", pageNumber = "", category = "") =>
  async (dispatch) => {
    console.log(category);
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      if (!category) {
        const { data } = await axios.get(
          `${URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`,
          console.log(
            "SIN CATEGORIAS",
            `${URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
          )
        );

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      } else {
        const { data } = await axios.get(
          `${URL}/api/products?&pageNumber=${pageNumber}&category=${category}`,
          console.log(
            "CON CATEGORIAS",
            `${URL}/api/products?&pageNumber=${pageNumber}&category=${category}`
          )
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// PRODUCT LIST CATEGORIA1 EN ESPECIFICO
export const listProductCategoria1 =
  (keyword = "", pageNumber = "", category = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_CATEGORIA1_REQUEST });

      if (keyword != "") {
        const { data } = await axios.get(
          `${URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        dispatch({ type: PRODUCT_LIST_CATEGORIA1_SUCCESS, payload: data });
      } else {
        const { data } = await axios.get(
          `${URL}/api/products?&pageNumber=${pageNumber}&category=${category}`
        );
        dispatch({ type: PRODUCT_LIST_CATEGORIA1_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_CATEGORIA1_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// PRODUCT LIST CATEGORIA2 EN ESPECIFICO ALUMINIO
export const listProductCategoria2 =
  (keyword = "", pageNumber = "", category = "Oferta") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_CATEGORIA2_REQUEST });

      if (keyword != "") {
        const { data } = await axios.get(
          `${URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        dispatch({ type: PRODUCT_LIST_CATEGORIA2_SUCCESS, payload: data });
      } else {
        const { data } = await axios.get(
          `${URL}/api/products?&pageNumber=${pageNumber}&category=${category}`
        );
        dispatch({ type: PRODUCT_LIST_CATEGORIA2_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_CATEGORIA2_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// PRODUCT LIST CATEGORIA3 EN ESPECIFICO CONSERVADORES
export const listProductCategoria3 =
  (keyword = "", pageNumber = "", category = "Conservadores") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_CATEGORIA3_REQUEST });

      if (keyword != "") {
        const { data } = await axios.get(
          `${URL}/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        dispatch({ type: PRODUCT_LIST_CATEGORIA3_SUCCESS, payload: data });
      } else {
        const { data } = await axios.get(
          `${URL}/api/products?&pageNumber=${pageNumber}&category=${category}`
        );
        dispatch({ type: PRODUCT_LIST_CATEGORIA3_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_CATEGORIA3_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// SINGLE PRODUCT
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${URL}/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// PRODUCT REVIEW CREATE
export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(
        `${URL}/api/products/${productId}/review`,
        review,
        config
      );
      dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };
