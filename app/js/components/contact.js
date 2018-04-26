import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendEmail } from '../actions/index.js';

import styles from '../../css/contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      contactCity: '',
      contactState: '',
      sent: false,
      error: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Change state of input field so text is updated while typing
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendEmail(
      this.state.contactName,
      this.state.contactEmail,
      this.state.contactPhone,
      this.state.contactCity,
      this.state.contactState);
    this.setState({
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      contactCity: '',
      contactState: '',
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.instructions}>
          <h1 className={styles.header}>Sign up or ask us for more information.</h1>
          <p className={styles.description}>Consectetur adipiscing elit.
              Nunc leo arcu, condimentum quis rutrum ut,
              facilisis a eros.
          </p>
          </div>
          <div>
            <form
            className={styles.form}
            onSubmit={this.handleSubmit}
            id="formContact"
            >
                     <input
                     type="text"
                     className={styles.textInput}
                     id="formName"
                     name="contactName"
                     placeholder="Full Name"
                     value={this.state.contactName}
                     onChange={this.handleChange}
                     required
                     />
                     <input
                     type="email"
                     className={styles.textInput}
                     id="formEmail"
                     name="contactEmail"
                     placeholder="Email"
                     rows="8"
                     cols="40"
                     value={this.state.contactEmail}
                     onChange={this.handleChange}
                     required
                     />
                     <input
                     type="tel"
                     className={styles.textInput}
                     id="formPhone"
                     name="contactPhone"
                     placeholder="Phone"
                     rows="8"
                     cols="40"
                     value={this.state.contactPhone}
                     onChange={this.handleChange}
                     required
                     />
                     <input
                     type="text"
                     className={styles.cityInput}
                     id="formCity"
                     name="contactCity"
                     placeholder="City"
                     rows="8"
                     cols="40"
                     value={this.state.contactCity}
                     onChange={this.handleChange}
                     required
                     />
                      <select
                      name='contactState'
                      className={styles.stateInput}
                      placeholder="State"
                      onChange={this.handleChange}
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>

                     <input
                     type="submit"
                     value="SIGN UP"
                     className={styles.submitButton}
                     id="btn-submit"
                     />
           </form>
        </div>
      </div>
    );
    }
  }

  function mapStateToProps(state) {
    console.log(state);
    return {
      sent: state.reducers.Email.success,
      error: state.reducers.Email.error
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ sendEmail }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Contact);
