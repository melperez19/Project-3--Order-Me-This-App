import React, { Component } from "react";
import "./CreateEvent.css";

class CreateEvent extends Component {
    render() {
        return (
            <form>
  <div className="form-row">
    <div className="host-id col-md-6">

    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEventTitle">Event/Title:</label>
      <input type="text" className="form-control" id="event-title-id" placeholder="title" required/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputInvitations">Invitations</label>
    <input type="text" className="form-control" id="inputInvitationEmail" placeholder="Enter email address to send invitation"/>
    <small id="emailHelp" class="form-text text-muted">Separate emails by a comma.</small>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
        )
    }
}
export default CreateEvent;