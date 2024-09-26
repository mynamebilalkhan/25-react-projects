import { useEffect, useState } from "react";
import "./ImageSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = () => {
  const url = "https://picsum.photos/v2/list?page=1";
  const [images, setImages] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (err) {
        console.log("Error While Fetching Images ", err);
        setLoading(false);
      }
    };

    fetchImages();
  }, [url]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="image-slider-container">
          {loading ? <h1>Loading...</h1> : ""}
          <BsArrowLeftCircleFill
            onClick={() => handlePrev()}
            className="arrow arrow-left"
          />
          {images && images.length
            ? images.map((image, index) => (
                <img
                  src={image.download_url}
                  key={image.id}
                  alt={image.author}
                  className={
                    currentSlide === index
                      ? "current-slide"
                      : "current-slide hide"
                  }
                />
              ))
            : null}
          <BsArrowRightCircleFill
            onClick={() => handleNext()}
            className="arrow arrow-right"
          />
          <div className="circle-indicator">
            {images && images.length
              ? images.map((_, index) => (
                  <button
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator hide"
                    }
                    onClick={() => setCurrentSlide(index)}
                    key={index}
                  ></button>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
