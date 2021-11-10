import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faHome, faCity, faUser, faEnvelope, faDollarSign, faBed, faToiletPaper, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return (
      <div className="page-body">
        <h3>Apartment Features</h3>
        <br />
        <article className="cards">
          {apartment &&
            <section className="card">
              <h4>Location</h4>
              <h5>
                <FontAwesomeIcon icon={faHome} className="fa-icon" />{apartment.street}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faCity} className="fa-icon" />{apartment.city}, {apartment.state}
              </h5>
              <br />
              <h4>Manager Info</h4>
              <h5>
                <FontAwesomeIcon icon={faUser} className="fa-icon" />{apartment.manager}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />{apartment.email}
              </h5>
              <br />
              <h4>Details</h4>
              <h5>
                <FontAwesomeIcon icon={faDollarSign} className="fa-icon" />{apartment.price} per month
              </h5>
              <h5>
                <FontAwesomeIcon icon={faBed} className="fa-icon" />Bedrooms: {apartment.bedrooms}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faToiletPaper} className="fa-icon" />Bathrooms: {apartment.bathrooms}
              </h5>
              <h5>
                <FontAwesomeIcon icon={faPaw} className="fa-icon" />Pets Allowed: {apartment.pets}
              </h5>
              <br />
              <NavLink to="/apartmentindex">
                <Button>Back</Button>
              </NavLink>
            </section>
          }
        </article>
      </div>
    )
  }
}
export default ApartmentShow
