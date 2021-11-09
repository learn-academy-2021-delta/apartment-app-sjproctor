import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentShow from './ApartmentShow'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays a header", () => {
    const showHeading = shallow(<ApartmentShow />).find("h3")
    expect(showHeading.text()).toEqual("Apartment Features")
  })
  it("displays a card", () => {
    const showCard = shallow(<ApartmentShow />).find("h4")
    expect(showCard.text()).toEqual("Location")
  })
})
