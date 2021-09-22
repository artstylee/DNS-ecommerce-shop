import React, { useState, useEffect } from "react";
import { db } from "./custom-hooks/firebase";
import { collection, getDocs } from "firebase/firestore";
import css from "./css/productlist.module.css";
import ProductGalleryLarge from "./singleproduct/productgallerylarge";
import ThumbImage from "./thumbimage";

export default function Productlist() {
  const [items, setItems] = useState([]);

  async function getCities(db) {
    // get all documents from the collection "smartphones"
    const operation1 = collection(db, "smartphones");
    const operation2 = await getDocs(operation1);
    const operation3 = operation2.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return operation3;
  }

  useEffect(() => {
    getCities(db).then((documents) => setItems(documents));
  }, []);

  return (
    <>
    <div className={css.productList}>
      {items.map((el) => {
        return (
          <>
            
              <div className={css.product}>
                <div className={css.productImage}>
                  <ThumbImage image={el.id} />
                </div>
              </div>
          </>
        );
      })}
      </div>
    </>
  );
}
