import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const sliderItems = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680658837/1_usiqio.png",
    bg: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680658011/1_dizejm.png",
    title: "MESA PARA NIÑOS",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680658837/2_mk9d7z.png",
    bg: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680658011/2_awtjo3.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  },
  // {
  //   id: 3,
  //   img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680626143/descarga_scssic.webp",
  //   bg: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680623012/D_NQ_699455-MLA54436135729_032023-OO_p5dq8u.webp",
  //   title: "LOUNGEWEAR LOVE",
  //   desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
  // },
];

const promociones = [
  {
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680658861/1_xxrezr.png",
  },
  {
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680658861/2_lfrkmi.png",
  },
  {
    img: "https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680232745/2_brzbfx.png",
  },
];

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1650px) {
    height: auto;
  }
`;

const Arrow = styled.div`
  width: 50px;
  /* height: 50px; */
  /* background-color: #fff7f7; */
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "rigth" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// PARA CAMBIAR EL TAMANO DEBE SER AQUI
const Slide = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  /* background-image: url("https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680622945/D_NQ_699222-MLA54807115324_042023-OO_yfbjlv.webp"); */
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;

  @media screen and (max-width: 1650px) {
    height: auto;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Tittle = styled.h2`
  font-size: clamp(0.8rem, 2.5vw, 4rem);
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: clamp(0.1rem, 1vw, 2rem);
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const initialSlideIndex = 0;
  const [slideIndex, setSlideIndex] = useState(initialSlideIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = slideIndex < 1 ? slideIndex + 1 : 0;
      setSlideIndex(newIndex);
    }, 8000); // 300000ms = 5 minutos
    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container className="mb-4">
      {/* <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined className="text-white" />
      </Arrow> */}
      {window.innerWidth < 1651 && window.innerWidth > 500 ? (
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id} className="">
              <ImageContainer>
                <img
                  src={window.innerWidth < 1008 ? item.img : item.bg}
                  // src={item.img}
                  alt=""
                  className="img-fluid"
                />
              </ImageContainer>
            </Slide>
          ))}
        </Wrapper>
      ) : window.innerWidth <= 500 ? (
        <Wrapper slideIndex={slideIndex}>
          {promociones.map((item) => (
            <Slide key={item.id} className="">
              <ImageContainer>
                <img src={item.img} alt="" className="img-fluid" />
              </ImageContainer>
            </Slide>
          ))}
        </Wrapper>
      ) : (
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              {/* <ImageContainer>
            <img src={item.img} alt="" className="img-fluid" />
          </ImageContainer>
          <InfoContainer>
            <Tittle>{item.title}</Tittle>
            <Desc>{item.desc}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer> */}
            </Slide>
          ))}
        </Wrapper>
      )}
      {/* <Arrow direction="rigth" onClick={() => handleClick("rigth")}>
        <ArrowRightOutlined className="text-white" />
      </Arrow> */}
    </Container>
  );
};

export default Slider;
