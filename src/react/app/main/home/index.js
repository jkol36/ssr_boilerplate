import React, { Component, Fragment } from "react";

import { get } from "./axios";

import { log, isProd } from "../../../../shared";

export default class HomePage extends Component {
  componentDidMount() {
    get();
  }

  state = {
    hello:
      "Babel's plugin-proposal-class-properties plugin allows the use of state/hooks!"
  };

  render() {
    log({ emoji: "🗄️", label: "[APP/STATE]", message: this.state.hello });
    return isProd ? (
      <Fragment>
        <h1>Well, would ya look at this?</h1>
        <h2>The app is in production.</h2>
        <h3>Check the console to see some goodies 🎁</h3>
      </Fragment>
    ) : (
      <Fragment>
        <h1>hey, you got it running - nice!!</h1>
        <h1>👏👏👏👏👏</h1>
        <h2>now, let&apos;s make this thing :)</h2>
        <h3>p.s. im at /src/react/components/main/home.js</h3>
      </Fragment>
    );
  }
}
