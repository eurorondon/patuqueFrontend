import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductReview,
  listProductDetails,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";
import Modal from "../components/Modal";
import Carousel from "./../components/Carousel";
import { Undo } from "@material-ui/icons";

const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [modal, setModal] = useState(false);
  const [galeria, setGaleria] = useState("");

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };

  const modalHandle = (img) => {
    setGaleria(img);
    setModal(true);
  };

  const { photo, image } = product;

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Header />
      <Modal modal={modal} setModal={setModal} galeria={galeria}></Modal>
      <div className=" container-md px-0 my-5">
        {loading ? (
          <div className="" style={{ marginTop: "200px" }}>
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <button className="btn btn-primary mx-3" onClick={handleGoBack}>
              <div>
                <Undo className="me-1" />
                Atrás
              </div>
            </button>
            <div className="row">
              {/* <div
                className={
                  photo && photo.length === 1
                    ? "col-md-6 p-0 single-product-grid-1 px-0   "
                    : photo && photo.length === 2
                    ? "col-md-6 single-product-grid-2 px-0  "
                    : photo && photo.length === 3
                    ? "col-md-6 single-product-grid-3 px-0 "
                    : photo && photo.length === 4
                    ? "col-md-6 single-product-grid-4 px-0 "
                    : photo && photo.length === 5
                    ? "col col-md-6 single-product-grid-5 px-0 "
                    : "single-product-grid-5"
                }
                // ojoooooo oaqui le cambie para verion telefono
                style={{ minHeight: "250px" }}
              >
                {product.photo ? (
                  product.photo.map((img, index) => (
                    <div
                      className={
                        product.image.length != 1
                          ? "  single-card border "
                          : "single-card-1 border rounded bg-light "
                      }
                      // className="single-card"
                      key={index}
                      style={{
                        // backgroundImage: ` url(${img})`,
                        backgroundImage: ` url(${img.url})`,
                      }}
                      onClick={() => modalHandle(img)}
                    ></div>
                  ))
                ) : (
                  <p>no carga</p>
                )}
              </div> */}
              <div className=" col-md-6">
                {photo ? <Carousel images={photo} className="col-6" /> : null}
              </div>
              <div className="col-md-6 mt-3">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Precio</h6>
                      <span>${product.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Estado</h6>
                      {product.countInStock > 0 ? (
                        <span>En stock</span>
                      ) : (
                        <span>No disponible</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reseñas</h6>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reseñas`}
                      />
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Cantidad</h6>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button
                          onClick={AddToCartHandle}
                          className="round-black-btn"
                        >
                          Añadir al Carrito
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">RESEÑAS</h6>
                {product.reviews.length === 0 && (
                  <Message variant={"alert-info mt-3"}>Sin Reseñas</Message>
                )}
                {product.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <span>{moment(review.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review.comment}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>ESCRIBE UNA OPINIÓN DE CLIENTE </h6>
                <div className="my-4">
                  {loadingCreateReview && <Loading />}
                  {errorCreateReview && (
                    <Message variant="alert-danger">
                      {errorCreateReview}
                    </Message>
                  )}
                </div>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <div className="my-4">
                      <strong>Califica</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">Selecciona...</option>
                        <option value="1">1 - Pobre</option>
                        <option value="2">2 - Justo</option>
                        <option value="3">3 - Bueno</option>
                        <option value="4">4 - Muy Bueno</option>
                        <option value="5">5 - Excelente</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Comentario</strong>
                      <textarea
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        disabled={loadingCreateReview}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Por favor
                      <Link to="/login">
                        " <strong>Login</strong> "
                      </Link>
                      para escribir un comentario
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
