"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You Clicked this.";
    }

    return e(
      "button", //  the element we want to render
      { onClick: () => this.setState({ liked: true }) }, // the function or event
      "Hello World" // the inner text
    );
  }
}

const domContainer = document.querySelector("#button");
ReactDOM.render(e(LikeButton), domContainer);
