import React, { Component } from 'react';

export default class Controls extends React.Component {
    constructor(props) {
      super(props);

      this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(section) {
      const { toggleDisplay } = this.props;
      toggleDisplay(section);
    }

    render() {
      return (
        <div id="controls">
          <div onClick={() => this.toggleTab('schedule')}>
            <img id="trips" src="https://res.cloudinary.com/ac31624/image/upload/v1561969187/jon_bache/trips.png" />
          </div>
          <div id='midsection'>
            <span onClick={() => this.toggleTab('photos')}>
              <img id="photos" src="https://res.cloudinary.com/ac31624/image/upload/v1561969188/jon_bache/test.png" />
            </span>
            <span id="equals">
              =
            </span>
            <span onClick={() => this.toggleTab('other')}>
              <img id="photos" src="https://res.cloudinary.com/ac31624/image/upload/v1561969188/jon_bache/test.png" />
            </span>
          </div>
          <span onClick={() => this.toggleTab('video')}>
            <img id="photos" src="https://res.cloudinary.com/ac31624/image/upload/v1561969188/jon_bache/test.png" />
          </span>
        </div>
      );
    }
  }