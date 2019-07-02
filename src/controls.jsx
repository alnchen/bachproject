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
          <span onClick={() => this.toggleTab('endgame')}>
            <img className="click-animation" id="trips" src="https://res.cloudinary.com/ac31624/image/upload/v1562047899/jon_bache/trip_details.png" />
          </span>
          <span onClick={() => this.toggleTab('null')}>
            <img className="click-animation" id="locations" src="https://res.cloudinary.com/ac31624/image/upload/v1562049886/jon_bache/locations.png" />
          </span>

          <div id='midsection'>
            <span onClick={() => this.toggleTab('schedule')}>
              <img className="click-animation" id="photos" src="https://res.cloudinary.com/ac31624/image/upload/v1562048081/jon_bache/schedule.png" />
            </span>
            <span id="equals">
              =
            </span>
            <span onClick={() => this.toggleTab('photos')}>
              <img className="click-animation" id="photos" src="https://res.cloudinary.com/ac31624/image/upload/v1562048222/jon_bache/photos.png" />
            </span>
          </div>

          <div id='midsection'>
            <span onClick={() => this.toggleTab('video')}>
              <img className="click-animation" id="photos" src="https://res.cloudinary.com/ac31624/image/upload/v1562048544/jon_bache/play.png" />
            </span>
            <span id="equals-hidden">
              =
            </span>
            <span onClick={() => this.toggleTab('')}>
              <img id="photos-hidden" src="https://res.cloudinary.com/ac31624/image/upload/v1561969188/jon_bache/test.png" />
            </span>
          </div>
        </div>
      );
    }
  }