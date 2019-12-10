import React, { Component } from "react";
import classnames from "classnames"; // for conditionally joining class names together.

export default class ActionButtons extends Component {
  render() {
    return (
      <div className="row m-0">
        <div className="col p-0">
          <button
            className={classnames("action-btns mr-md-3", {
              "action-btns-active": this.props.toogleEnable
            })}
            onClick={this.props.handleToggle}
            type="button"
            data-toggle="tooltip"
            data-placement="bottom"
            title="This is a toggle button that filter results where the sum of “points”, “score” and “topic_id” adds up to an even number or not."
          >
            <i className="fas fa-filter"></i>
          </button>
          <button
            className={classnames("action-btns", {
              "action-btns-active": !this.props.cardView
            })}
            onClick={this.props.handleTableView}
            type="button"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Display results in a table."
          >
            <i className="fas fa-list"></i>
          </button>
          <button
            className={classnames("action-btns", {
              "action-btns-active": this.props.cardView
            })}
            onClick={this.props.handleCardView}
            type="button"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Display results by cards."
          >
            <i className="fa fa-th"></i>
          </button>
        </div>
      </div>
    );
  }
}
