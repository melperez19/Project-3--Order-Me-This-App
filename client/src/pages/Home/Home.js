import React, {Component} from "react";
import Modal from "../../components/Modal";

class Home extends Component {

  state = {
      show: false,
  };

  toggleModal = () => {
      let show = !this.state.show
      this.setState({ show })
  };

  render() {
      return (
          <div className="landingPageBackground">
              <div className="container">
                  <div className="row d-flex align-items-center justify-content-end">
                      <div className="col">
                          <div className="landingPageTitle">
                              <h1>Order Me This</h1>
                              <h3>Organize your office lunch runs</h3>
                          </div>

                      </div>
                      <div className="col d-flex justify-content-center flex-column">
                          <input type="button"
                              onClick={this.toggleModal}
                              id="createEventBtn"
                              value="Create Event"
                              className="btn btn-primary" />

                          <Modal
                              show={this.state.show}
                              onClose={this.toggleModal}>
                              
                          </Modal>
                      </div>

                  </div>


              </div>

          </div>
      )

  }
}

export default Home;