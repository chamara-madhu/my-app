import React from "react";
import moment from "moment"; // for formatting dates

export default function Cards(props) {
  return props.images.map((images, i) => (
    <div key={i} className="card">
      <div className="card-image-div">
        <img
          src={images.images && images.images[0].link}
          className="card-images"
          alt={images.title}
        />
      </div>

      <p className="image-count">
        {images.images_count - 1 !== 0 ? images.images_count - 1 : "No"}{" "}
        additional images
      </p>
      <p className="title">{images.title}</p>
      <p className="time">
        {moment.unix(images.datetime).format("DD/MM/YYYY HH:mm a")}
      </p>
    </div>
  ));
}
