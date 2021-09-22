import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { getImg300 } from "../custom-hooks/firebase";
import "react-image-gallery/styles/css/image-gallery.css";

export function ProductGallerySmall(props) {
  const [img300, setImg300] = useState([]);

  useEffect(() => {
    (async () => {
      setImg300(await getImg300(props?.id));
    })();
  }, []);

  return (
    <>
      <ImageGallery
        showPlayButton={false}
        autoPlay={false}
        showFullscreenButton={false}
        items={img300}
      />
    </>
  );
}
