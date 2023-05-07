import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light  bg-dark text-light ">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className=""></i>Lara Hogar Plastic
                </h6>
                <p>Carrera 23 entre calle 37 y 38, Barquisimeto 3001</p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Cocina
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Limpieza
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Aluminio
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contenedores
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div> */}
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Carrera 23 entre calle 37
                  y 38, Barquisimeto 3001
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  larahogarplastic@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +58 412 6022 881
                </p>
                {/* <p>
                  <i class="fas fa-print me-3"></i> +58 412 6022 881
                </p> */}
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4"
          // style="background-color: rgba(0, 0, 0, 0.05);"
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#">
            larahogarplastic.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};

export default Footer;
