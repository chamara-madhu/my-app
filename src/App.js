import React, { Component } from "react";
import "./App.css";
import axios from "axios"; //  for performing HTTP requests

import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import ActionButtons from "./components/ActionButtons";
import NoOfResultsDisplay from "./components/NoOfResultsDisplay";
import Table from "./components/Table";
import Cards from "./components/Cards";

export default class App extends Component {
  state = {
    // initail stage
    topImages: [],

    // toggle
    toogleEnable: false,

    // card view
    cardView: true
  };

  componentDidMount = () => {
    //get images which are under top, week and time from imgur
    axios
      .get(`https://api.imgur.com/3/gallery/top/time/week`, {
        headers: { Authorization: "Client-ID 18eef0ce23381ff" }
      })
      .then(imageList => {
        this.setState({
          topImages: imageList.data.data
        });
      })
      .catch(err => console.log(err));
  };

  // submit search
  handleSubmit = searchValue => {
    // get search images
    axios
      .get(
        `https://api.imgur.com/3/gallery/search/top/week/?q_exactly=${searchValue}`,
        {
          headers: { Authorization: "Client-ID 18eef0ce23381ff" }
        }
      )
      .then(imageList => {
        this.setState({
          topImages: imageList.data.data
        });
      })
      .catch(err => console.log(err));
  };

  // handle toggle state
  handleToggle = () => {
    this.setState({ toogleEnable: !this.state.toogleEnable });
  };

  // handle card view state
  handleCardView = () => {
    this.setState({ cardView: true });
  };

  // handle table view state
  handleTableView = () => {
    this.setState({ cardView: false });
  };

  render() {
    // get only images from the topImages array
    let filterOnlyImages = this.state.topImages.filter(images => {
      return images.images && images.images[0].type === "image/jpeg";
    });

    // sort results by latest images first.
    let sortByTime = filterOnlyImages.sort((a, b) => {
      return b.datetime - a.datetime;
    });

    // filter results by sum of “points”, “score” and “topic_id” adds up to an even number
    let filterToggleTopImages = sortByTime;

    if (this.state.toogleEnable === true) {
      filterToggleTopImages = filterToggleTopImages.filter(images => {
        return (images.score + images.points + images.topic_id) % 2 === 0;
      });
    }

    return (
      <div className="container-fluid p-0">
        <HeaderSection handleSubmit={this.handleSubmit} />

        <div className="customize-container p-0">
          <ActionButtons
            toogleEnable={this.state.toogleEnable}
            handleToggle={this.handleToggle}
            cardView={this.state.cardView}
            handleTableView={this.handleTableView}
            handleCardView={this.handleCardView}
          />

          <NoOfResultsDisplay noOfResults={filterToggleTopImages.length} />

          <div className="row m-0">
            <div className="col p-0">
              {!this.state.cardView ? (
                <Table images={filterToggleTopImages} />
              ) : (
                <Cards images={filterToggleTopImages} />
              )}
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    );
  }
}
