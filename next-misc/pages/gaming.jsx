import React from "react";
import Image from "next/image";
import Styles from "../styles/gaming.module.css";
function Gaming() {
  return (
    <div className={Styles.images}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i}>
          <Image
            placeholder={"blur"}
            blurDataURL="https://i.imgur.com/qQqQqQq.jpg"
            src={`/assets/${i}.jpg`}
            width={420}
            height={420}
            alt="gaming"
          />
        </div>
      ))}
    </div>
  );
}

export default Gaming;
