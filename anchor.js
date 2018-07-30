import React from "react";

export default class Anchor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }
  addBoldProperties(styleObj) {
    styleObj["textDecoration"] = "none";
    styleObj["color"] = "inherit";
    styleObj["fontWeight"] = "bold";
  }
  addUnderlineProps(styleObj) {
    styleObj["textDecoration"] = "underline";
  }

  addNoUnderlineProps(styleObj) {
    styleObj["textDecoration"] = "none";
    styleObj["borderBottom"] = "1px dotted green";
  }

  addUnderlineGreenProps(styleObj) {
    styleObj["textDecoration"] = "none";
    styleObj["borderBottom"] = "1px dotted green";
  }

  addFocusProps(styleObj) {
    styleObj["color"] = "red";
  }

  togglefocus = () => {
    console.log("came in " + this.state.focus);
    this.setState({ focus: !this.state.focus });
  };

  render() {
    let styleObj = {};
    let { isBold, nounderline, underline, ...rest } = { ...this.props };
    if (isBold) {
      this.addBoldProperties(styleObj);
    }
    if (nounderline) {
      this.addNoUnderlineProps(styleObj);
    }
    if (underline) {
      this.addUnderlineProps(styleObj);
    }
    if (this.state.focus) {
      this.addFocusProps(styleObj);
    }
    console.log(styleObj + "--" + underline);
    return (
      <a
        style={styleObj}
        {...rest}
        onMouseEnter={this.togglefocus}
        onMouseLeave={this.togglefocus}
      >
        {" "}
        {this.props.children}{" "}
      </a>
    );
  }
}
