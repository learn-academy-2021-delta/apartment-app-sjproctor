import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ProtectedIndex from './ProtectedIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When protected index renders", () => {
  it("displays a header", () => {
    const indexHeading = shallow(<ProtectedIndex />).find("h3")
    expect(indexHeading.text()).toEqual("My Apartments")
  })
})
