import React, { Component } from "react";
import moment from "moment"; // for formatting dates

export default class Table extends Component {
  render() {
    return (
      <div className="table-responsive px-3">
        <table className="table table-bordered table-hover mt-3">
          <thead>
            <tr className="table-header-row">
              <td className="table-title-col">Title</td>
              <td className="table-date-col">Date</td>
              <td className="table-img-count-col">No. of Additional Images</td>
              <td className="table-image-col">Image</td>
            </tr>
          </thead>
          <tbody>
            {this.props.images.map((images, i) => (
              <tr key={i}>
                <td className="table-title">{images.title}</td>
                <td className="table-date">
                  {moment.unix(images.datetime).format("DD/MM/YYYY HH:mm a")}
                </td>
                <td className="table-count-images">
                  {images.images_count - 1 !== 0
                    ? images.images_count - 1
                    : "-"}
                </td>
                <td>
                  <img
                    src={images.images && images.images[0].link}
                    className="table-images"
                    alt={images.title}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
