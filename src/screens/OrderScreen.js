import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../Redux/Actions/OrderActions";
import Loading from "./../components/LoadingError/Loading";
import Message from "./../components/LoadingError/Error";
import moment from "moment";
import axios from "axios";
import { ORDER_PAY_RESET } from "../Redux/Constants/OrderConstants";
import { URL } from "./../Redux/Url";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OrderScreen = ({ match }) => {
  // window.scrollTo(0, 0);
  const [sdkReady, setSdkReady] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [image, setImage] = useState([]);
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const cart = useSelector((state) => state.cart);

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo, email } = userLogin;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(`${URL}/api/config/paypal`);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order]);

  const successPaymentHandler = () => {};

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(payOrder(orderId, order, email, image));
    setCargando(true);
  };

  const whatsappHandler = () => {
    if (order.comprobantePago) {
      const productos = order?.orderItems
        .map(
          (item) =>
            ` \n ✅ *${item.name}*   \n *Cantidad*: ${item.qty} \n *Precio*:${item.price}$ \n`
        )
        .join("");
      // para enviar  orden a whatsapp
      const name = userInfo.name;
      const link = order.comprobantePago;
      const mensaje = `👋 Hola, mi nombre es ${name}.\n he comprar estos artículos: 💭 \n ${productos} \n Para pagar un total de 🔜 *${order.itemsPrice}$* \n \n   Adjunto link de  comprobante de pago por mis productos  \n \n  ${link}`;
      const telefono = "+584245116397"; // Reemplaza con el número de teléfono al que quieres enviar el mensaje
      // const mensaje = "Hola, quiero hacer un pago"; // Reemplaza con el mensaje que quieres enviar

      // para enviar  orden a whatsapp

      const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(
        mensaje
      )}`;
      console.log(order);
      // window.open(url, "_blank");
      window.open(url);
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="container my-md-5">
        {loading ? (
          <div className="my-5">
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row  order-detail">
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Cliente</strong>
                    </h5>
                    <p>{order.user.name}</p>
                    <p>
                      <a href={`mailto:${order.user.email}`}>
                        {order.user.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              {/* <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-truck-moving"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Order info</strong>
                    </h5>
                    <p>Shipping: {order.shippingAddress.country}</p>
                    <p>Pay method: {order.paymentMethod}</p>
                    {order.isPaid && order.ConfirmandoPago ? (
                      <div className="bg-success p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Pago Exitoso {moment(order.paidAt).calendar()}
                        </p>
                      </div>
                    ) : order.isPaid ? (
                      <div className="bg-warning p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Pago por Validar {moment(order.paidAt).calendar()}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          No Pagado
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
              {/* 3 */}
              {/* <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Deliver to</strong>
                    </h5>
                    <p>
                      Address: {order.shippingAddress.city},{" "}
                      {order.shippingAddress.address},{" "}
                      {order.shippingAddress.postalCode}
                    </p>
                    {order.isDelivered ? (
                      <div className="bg-info p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Delivered on {moment(order.deliveredAt).calendar()}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Not Delivered
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div> */}
            </div>

            <div className="row order-products justify-content-between">
              <div className="col-lg-8">
                {order.orderItems.length === 0 ? (
                  <Message variant="alert-info mt-5">
                    Tu pedido está vacío
                  </Message>
                ) : (
                  <>
                    {order.orderItems.map((item, index) => (
                      <div className="order-product row" key={index}>
                        <div className="col-md-3 col-6">
                          <img src={item.photo} alt={item.name} />
                        </div>
                        <div className="col-md-5 col-6 d-flex align-items-center">
                          <Link to={`/products/${item.product}`}>
                            <h6>{item.name}</h6>
                          </Link>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                          <h4>QUANTITY</h4>
                          <h6>{item.qty}</h6>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                          <h4>SUBTOTAL</h4>
                          <h6>${item.qty * item.price}</h6>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {/* total */}
              <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Productos</strong>
                      </td>
                      <td>${order.itemsPrice}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Delivery</strong>
                      </td>
                      <td>${order.shippingPrice}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Impuesto</strong>
                      </td>
                      <td>${order.taxPrice}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>${order.totalPrice}</td>
                    </tr>
                  </tbody>
                </table>

                {order.comprobantePago ? (
                  <>
                    <div className="my-1">
                      <p>
                        Tu comprobante ha sido cargado con exito, gracias por tu
                        compra
                      </p>

                      <button onClick={whatsappHandler}>ir a Whatsapp</button>
                    </div>
                  </>
                ) : (
                  <div className="">
                    <form
                      action=""
                      style={{ maxWidth: "250px" }}
                      onSubmit={submitHandler}
                    >
                      <input
                        className="form-control mt-3"
                        type="file"
                        name="image"
                        multiple
                        required
                        onChange={(e) =>
                          setImage(
                            e.target.files[0]
                            // console.log(e.target.files[0])
                          )
                        }
                      />
                      <button>Subir Comprobante</button>
                    </form>
                    {cargando == true ? (
                      <div className="mb-5">
                        <Loading className="mt-5" />
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OrderScreen;
