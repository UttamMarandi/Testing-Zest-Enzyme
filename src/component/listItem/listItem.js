import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, desc } = this.props;
    if (!title) {
      return null;
    }
    return (
      <div data-test="listItemComponent">
        <h2 className="title" data-test="title">
          {title}
        </h2>
        <div className="desc">
          <p className="desc" data-test="desc">
            {desc}
          </p>
        </div>
      </div>
    );
  }
}
ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default ListItem;
