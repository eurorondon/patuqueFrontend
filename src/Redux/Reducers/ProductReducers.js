import {
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_RESET,
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

// PRODUCT LIST
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT CATEGORIA1  LIST
export const productListCategoria1Reducer = (
  state = { productsCategoria1: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_CATEGORIA1_REQUEST:
      return { loading: true, productsCategoria1: [] };
    case PRODUCT_LIST_CATEGORIA1_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };

    case PRODUCT_LIST_CATEGORIA1_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT CATEGORIA2  LIST
export const productListCategoria2Reducer = (
  state = { productsCategoria2: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_CATEGORIA2_REQUEST:
      return { loading: true, productsCategoria2: [] };
    case PRODUCT_LIST_CATEGORIA2_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };

    case PRODUCT_LIST_CATEGORIA2_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT CATEGORIA3  LIST
export const productListCategoria3Reducer = (
  state = { productsCategoria3: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_CATEGORIA3_REQUEST:
      return { loading: true, productsCategoria3: [] };
    case PRODUCT_LIST_CATEGORIA3_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
      };

    case PRODUCT_LIST_CATEGORIA3_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// SINGLE PRODUCT
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// PRODUCT REVIEW CREATE
export const productCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
