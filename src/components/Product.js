export default function Product(props) {
  const MAX_TITLE_LENGTH = 15; // El número máximo de caracteres permitidos en el título
  let MAX_DESCRIPTION_LENGTH = 15; // El número máximo de caracteres permitidos en la descripción\

  if (window.innerWidth < 767) {
    MAX_DESCRIPTION_LENGTH = 10;
  }

  return (
    <div className=" carousel-card   mb-5" style={{}}>
      <div
        className=" card    "
        style={
          window.innerWidth > 767
            ? {
                marginBottom: "5px",
                borderRadius: "15px",
                position: "relative",
              }
            : { margin: " 0px 1px  5px 1px", borderRadius: "10px" }
        }
      >
        <img
          className="product--image "
          src={props.url}
          alt="product image"
          style={{ maxWidth: "10rem", margin: "auto" }}
        />
      </div>
      <div className="p-2" style={{ backgroundColor: "" }}>
        <h5
          className="name text-center"
          style={{ fontWeight: "bold", color: "#00789D" }}
        >
          {props.name.length > MAX_TITLE_LENGTH
            ? props.name.substring(0, MAX_TITLE_LENGTH) + "..."
            : props.name}
        </h5>
        <div
          className="my-2"
          style={window.innerWidth > 767 ? { height: "" } : { height: "" }}
        >
          {props.description ? (
            <p className="description text-center">
              {props.description.length > MAX_DESCRIPTION_LENGTH
                ? props.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
                : props.description}
            </p>
          ) : (
            <p className="description"> Sin Descripcion</p>
          )}
        </div>

        <p
          className="price text-center "
          style={{ fontWeight: "bold", paddingTop: "" }}
        >
          {props.price} $
        </p>
      </div>
      <div className=" d-flex justify-content-center">
        <div
          className="btn text-white  "
          style={{ backgroundColor: "#6768A9" }}
        >
          Comprar ahora
        </div>
      </div>
    </div>
  );
}

// EL  CODIGO DE ARRIBA SON LAS TARJETAS COMO LAS QUIERE RAQUELA COMPLETAS, EL DE ABAJO ES COMO ESTA , DEBES ELEJIR UNO DE DOS ,
// AL ELEJIR TAMBIEN SE DEBE CAMBIAR EL CSS DE TOPSELL.CSS

// import React from "react";

// export default function Product(props) {
//   return (
//     <div
//       className="mb-4 "
//       style={window.innerWidth > 767 ? {} : { margin: "0px 5px" }}
//     >
//       <div
//         style={
//           window.innerWidth > 767
//             ? { margin: "auto 1rem" }
//             : { margin: "0px 1px" }
//         }
//       >
//         <div className="">
//           <img className="product--image" src={props.url} alt="product image" />

//           <p className="price bg-dark px-2 rounded text-white m-1 ">
//             {props.price}
//           </p>
//         </div>
//         <h5 className="name mt-2">{props.name}</h5>
//         <p className="">{props.description}</p>
//         <p>
//           {/* <button
//           className="call-action"
//           style={{ fontSize: "clamp(0.8rem, 2vw, 1.5rem)" }}
//         >
//           Add to Cart
//         </button> */}
//         </p>
//       </div>
//     </div>
//   );
// }
