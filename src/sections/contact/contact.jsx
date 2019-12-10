import React from 'react';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
// import emailLogo from '../../assets/emailLogo.svg';
import './contact.scss';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      address: ''
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    // const { firstName, lastName, email, comment, address } = this.state;
    console.log(e);
  };
  render() {
    const { firstName, lastName, email, comment } = this.state;
    return (
      <div className="contain">
        <div className="contact-section">
          <h2 className="section-title heading">
            DROP A LINE
            <br />
            <span className="short-description">If You want to collab</span>
          </h2>
          <div className="contact">
            <form onSubmit={this.handleSubmit}>
              <h3>SEND A MESSAGE</h3>
              <FormInput
                type="text"
                name="firstName"
                value={firstName}
                label="First Name"
                onChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="lastName"
                value={lastName}
                label="Last Name"
                onChange={this.handleChange}
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                label="Email"
                onChange={this.handleChange}
              />
              <div className="text-area">
                <textarea
                  name="comment"
                  value={comment}
                  id=""
                  onChange={this.handleChange}
                  className={`${comment.length ? 'expand' : null}`}
                  cols="100"
                  rows="1"
                ></textarea>
                <label
                  className={`${
                    comment.length ? 'shrink' : ''
                  } form-input-label`}
                >
                  Write your message.
                </label>
              </div>
              <CustomButton showImage="showImage">SEND MESSAGE</CustomButton>
            </form>
            <div className="contact-info">
              <h3>Contact Info</h3>
              <div className="">
                <ul className="info">
                  <li className="">
                    <span className="key-title">Address:</span>
                    <br />
                    <br />
                    <span className="val">
                      226 ifedapo st, Owode Academy, Ibadan, Oyo State, Nigeria
                    </span>
                  </li>
                  <li className="">
                    <span className="key-title">Phone:</span>
                    <br />
                    <br />
                    <span className="val">+234 902604074</span>
                  </li>
                  <li className="">
                    <span className="key-title">Email:</span>
                    <br />
                    <br />
                    <span className="val">ozzycdes@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
