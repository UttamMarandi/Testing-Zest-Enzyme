import React, { Component } from "react";

import Header from "./component/header";
import Headline from "./component/headline";
import SharedButton from "./component/button/button";
import ListItem from "./component/listItem/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./App.css";

const tempArr = [
  {
    fName: "Joe",
    lName: "Biden",
    enail: "joebiden@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    props: state.posts,
  };
};
//sort of asycnchronous call like in next js

export default connect(mapStateToProps, { fetchPosts })(App);
