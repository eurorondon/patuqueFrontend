import React from "react";

const CalltoActionSection = () => {
  if (window.innerWidth > 630) {
    return (
      <div className="subscribe-section bg-with-black">
        <div className="container">
          <div className="row">
            <div className=" " style={{ height: "150px" }}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="" style={{ overflow: "hidden" }}>
        <img
          className="img-fluid"
          src="https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680663581/web_Banner_finito_630_200_px_630_315_px_1_ylesno.png"
          alt="Card image cap"
        />
      </div>
    );
  }
};

export default CalltoActionSection;
