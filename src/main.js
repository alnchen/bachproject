import React, { Component } from 'react';
import Controls from './controls';
import MediaQuery from 'react-responsive';
import Modal from 'react-awesome-modal';

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
      if (section === 'video') {
        const dateNow = new Date();
        const unlockedDate = new Date(2019, 6, 9);

        if (unlockedDate < dateNow) {
          this.setState({
            displayTab: section
          })
        } else {
          alert('LOCKED until 7/9');
        }
      } else {
        this.setState({
          displayTab: section
        })
      }
    }

    closeModal() {
      this.setState({
        displayTab: null
      })
    }
  
    render() {
      const { pageUnlocked, displayTab } = this.state;

      return (
        <div>
          <div id="header"><img id="header-image" src="https://res.cloudinary.com/ac31624/image/upload/c_limit,h_567,w_1572/v1562033102/jon_bache/vegas_sign.png" /></div>
          <MediaQuery minDeviceWidth={1224}>
            desktop mode
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
            {pageUnlocked && 
              <div id='mainpage'>
                <Controls toggleDisplay={this.expandSection} />

                <Modal 
                  visible={this.state.displayTab && this.state.displayTab === 'schedule'}
                  width="90%"
                  height="70%"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  <div id="schedule-photo-container">
                    <img id="schedule-photo" src="https://res.cloudinary.com/ac31624/image/upload/v1562052080/jon_bache/sched.png" />
                  </div>
                </Modal>

                <Modal 
                  visible={this.state.displayTab && this.state.displayTab === 'photos'}
                  width="90%"
                  height="70%"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  <div id="photos-container">
                    <img id="toronto-photo" src="https://res.cloudinary.com/ac31624/image/upload/v1562050417/jon_bache/toronto.jpg" />
                    <div id="photo-text">Photos will be added after the trip</div>
                  </div>
                </Modal>

                <Modal 
                  visible={this.state.displayTab && this.state.displayTab === 'other'}
                  width="90%"
                  height="70%"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  OTHER HERE
                </Modal>

                <Modal 
                  visible={this.state.displayTab && this.state.displayTab === 'endgame'}
                  width="90%"
                  height="70%"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  {this.state.displayTab && this.state.displayTab === 'endgame' &&
                    <iframe style={{backgroundColor: 'black'}} id="ytplayer" type="text/html" width="100%" height="100%"
                      src="https://www.youtube.com/embed/dfnCAmr569k?autoplay=1&origin=http://example.com"
                      frameBorder="0">
                    </iframe>
                  }
                </Modal>

                <Modal 
                  visible={this.state.displayTab && this.state.displayTab === 'video'}
                  width="90%"
                  height="70%"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  OTHER HERE
                </Modal>
              </div>
            }
          </MediaQuery>
        </div>
      );
    }
  }