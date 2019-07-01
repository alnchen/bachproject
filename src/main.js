import React, { Component } from 'react';
import Controls from './controls';
import MediaQuery from 'react-responsive';

export default class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pageUnlocked: false,
        displayTab: null
      };

      this.askForPassword = this.askForPassword.bind(this);
      this.expandSection = this.expandSection.bind(this);
    }

    componentWillMount() {
      if (window.localStorage.getItem('pageUnlocked') === 'yes') {
        this.setState({
          pageUnlocked: true
        })
      } else {
        this.askForPassword();
      }
    }

    askForPassword() {
      const answer = prompt("What's the passcode?", "idk");

      if (answer === '123') {
        this.setState({
          pageUnlocked: true
        })
        window.localStorage.setItem('pageUnlocked', 'yes');
      } else {
        this.askForPassword();
      }
    }

    expandSection(section) {
      this.setState({
        displayTab: section
      })
    }
  
    render() {
      const { pageUnlocked, displayTab } = this.state;

      return (
        <div>
          <MediaQuery minDeviceWidth={1224}>
            desktop mode
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
            {pageUnlocked && 
              <div id='mainpage'>
                <div id="header"><img id="header-image" src="https://res.cloudinary.com/ac31624/image/upload/v1561971783/jon_bache/vegas_sign.png" /></div>
                <Controls toggleDisplay={this.expandSection} />
                <span>
                  {displayTab && displayTab === 'schedule' && 
                    <span>
                      controls
                    </span>
                  }
                </span>
              </div>
            }
          </MediaQuery>
        </div>
      );
    }
  }