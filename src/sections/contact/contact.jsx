import React from 'react';
import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-section">
          <h2 className="section-title heading">
            DROP A LINE
            <br />
            <span className="short-description">If You want to collab</span>
          </h2>
          <ul className="info">
            <li className="">
              <span className="key-title">Phone</span>
              <br />
              <br />
              <span className="val">+234 9026040774</span>
            </li>
            <li className="">
              <span className="key-title">Address</span>
              <br />
              <br />
              <span className="val">
                226 ifedapo st,
                <br /> Owode Academy,
                <br /> Ibadan, Oyo State, <br /> Nigeria
              </span>
            </li>

            <li className="">
              <span className="key-title">Email</span>
              <br />
              <br />
              <a href="mailto:>ozzycdes@gmail.com">
                <span className="val">ozzycdes@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
