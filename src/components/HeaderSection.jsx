import React, { Component } from "react";

export default class HeaderSection extends Component {
  state = {
    // search
    search: ""
  };

  // get search input value
  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div className="row m-0 page-head">
        <div className="col">
          <h1 className="page-title">
            Top Images of The Week From <b className="text-dark">Imgur</b>{" "}
            Gallery
          </h1>
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
            <span
              className="search-btn"
              onClick={() => this.props.handleSubmit(this.state.search)}
            >
              <i className="fab fa-sistrix"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
