export default function ProductNew(props) {
  const MAX_TITLE_LENGTH = 15; // El número máximo de caracteres permitidos en el título
  let MAX_DESCRIPTION_LENGTH = 15; // El número máximo de caracteres permitidos en la descripción\

  if (window.innerWidth < 767) {
    MAX_DESCRIPTION_LENGTH = 25;
  }

  return (
    <div className=" carousel-card   " style={{}}>
      <div
        className=""
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
          style={
            window.innerWidth > 767
              ? { maxWidth: "12rem", margin: "auto" }
              : { maxWidth: "18rem", margin: "auto" }
          }
        />
      </div>
      <div className="p-2   " style={{ backgroundColor: "" }}>
        <h5
          className=" name1 text-center  "
          style={{ fontWeight: "bold", color: "#00789D" }}
        >
          {props.name}
        </h5>
        <div className="my-2">
          {props.description ? (
            <p className=" text-center">
              {props.description.length > MAX_DESCRIPTION_LENGTH
                ? props.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
                : props.description}
            </p>
          ) : (
            <p className="description1  text-center"> Sin Descripcion</p>
          )}
        </div>

        <p className=" text-center ">{props.price} $</p>
      </div>
      <div className=" d-flex justify-content-center">
        <div
          className="btn text-white  "
          style={{ backgroundColor: "#6768A9" }}
        >
          Comprar
        </div>
      </div>
    </div>
  );
}
