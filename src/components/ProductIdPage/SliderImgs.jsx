import { useState } from "react";
import "./style/SliderImgs.css";

const SliderImgs = ({ product }) => {
  const [imgSelected, setImgSelected] = useState(0);
  const [currentImage, setCurrentImage] = useState(1);

  const movableStyle = {
    transform: `translateX(calc(-${imgSelected}/3 * 100%))`,
  };

  const handlePrev = () => {
    if (imgSelected - 1 >= 0) {
      setImgSelected(imgSelected - 1);
    } else {
      setImgSelected(2);
    }
  };

  const handleNext = () => {
    if (imgSelected + 1 <= 2) {
      setImgSelected(imgSelected + 1);
    } else {
      setImgSelected(0);
    }
  };

  const handleClick = (index) => {
    setImgSelected(index);
  };

  return (
    <>
      <div className="slider">
        <button onClick={handlePrev} className="slider__btn slider__prev">
          &#60;
        </button>
        <div style={movableStyle} className="slider__movable">
          {product?.images.map((imgInfo) => (
            <div className="slider__container__img" key={imgInfo.id}>
              <img className="slider__img" src={imgInfo.url} alt="" />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="slider__btn slider__next">
          &#62;
        </button>
      </div>
      <div className="slider__container-mini">
        {product?.images.map((imgInfo, index) => (
          <div
            onClick={() => handleClick(index)}
            className={`slider__mini ${
              currentImage === index + 1 ? "select-mini" : ""
            }`}
            key={imgInfo.id}
          >
            <img
              onClick={() => setCurrentImage(index + 1)}
              className="slider__img mini__img"
              src={imgInfo.url}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SliderImgs;
