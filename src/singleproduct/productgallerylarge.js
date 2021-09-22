import React, { useEffect, useState, useRef } from "react";
import { getImg45, getImg500 } from "../custom-hooks/firebase";
import clsx from "clsx";
import css from "./css/productgallerylarge.module.css";
import { MdExpandLess, MdExpandMore } from "react-icons/md";



export default function ProductGalleryLarge(props) {
  const fullSizeImage = useRef();
  const carouselImages = useRef();
  const [img500, setImg500] = useState([]);
  const [img45, setImg45] = useState([]);
  const [activePreview, setActivePreview] = useState([img45[0], 0]);
  const [activeLarge, setActiveLarge] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [arrowDisplayUp, setArrowDisplayUp] = useState(`none`);
  const [arrowDisplayDown, setArrowDisplayDown] = useState(`none`);


  useEffect(() => {
    (async () => {
      setImg45(await getImg45(props?.id));
      setImg500(await getImg500(props?.id));
    })();
  }, []);

  useEffect(() => {
    if (img45.length > 9) {
      setArrowDisplayDown(`flex`);
    }
    setActivePreview([img45[0], 0]);
  }, [img45]);

  function handleSetActivePreview(el, index) {
    setActivePreview([el, index]);
  }

  useEffect(() => {
    if (activeLarge === activePreview[1]) {
      return;
    }
    setOpacity(true);
    setTimeout(() => {
      setActiveLarge(activePreview[1]);
      fullSizeImage.current.addEventListener(
        "load",
        () => {
          setOpacity(false);
        },
        { once: true }
      );
    }, 300);
  }, [activePreview]);

  function handleGalleryScrollUp() {
    setArrowDisplayDown(`flex`);
    setTranslate((prev) => prev - 1);
  }

  function handleGalleryScrollDown() {
    setArrowDisplayUp(`flex`);
    setTranslate((prev) => prev + 1);
  }

  useEffect(() => {
    if (translate === 0) {
      setArrowDisplayUp(`none`);
    }
    if (img45.length - 9 === translate) {
      setArrowDisplayDown(`none`);
    }
  }, [translate]);

  return (
    <>
      <div className={css.productGallery2}>
        <div className={css.productGallery210}>
          <div
            style={{
              display: arrowDisplayUp,
            }}
            className={css.productGalleryUp}
            onClick={handleGalleryScrollUp}
          >
            <MdExpandLess className={css.iconupdown} />
          </div>
          <div className={css.productPreviewWrapper}>
            <div
              className={css.productGallery211}
              ref={carouselImages}
              style={{
                transform: `translateY(-${
                  translate !== 0 ? translate * 56 : 0
                }px)`,
              }}
            >
              {img45.map((el, index) => {
                return (
                  <div
                    key={el}
                    className={clsx({
                      [css.productGallery212]: true,
                      [css.productGallery213]: activePreview[0] === el,
                    })}
                    onMouseEnter={() => handleSetActivePreview(el, index)}
                  >
                    <img
                      alt=""
                      className={css.productGallery214}
                      src={el}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              display: arrowDisplayDown,
            }}
            className={css.productGalleryDown}
            onClick={handleGalleryScrollDown}
          >
            <MdExpandMore className={css.iconupdown} />
          </div>
        </div>
        <div className={css.productGallery220}>
          <img
            alt=""
            ref={fullSizeImage}
            className={clsx({
              [css.largeImageVisible]: true,
              [css.largeImageInvisible]: opacity,
            })}
            src={img500[activeLarge]}
          ></img>
        </div>
      </div>
    </>
  );
}
