import React from 'react'
import NavBar from 'components/NavBar'
import {IndexLink, Link} from 'react-router'
import {shallow} from 'enzyme'

describe('(Component) NavBar', () => {
    let _wrapper

    beforeEach(() => {
        _wrapper = shallow(<NavBar/>)
    })

    it('Should render a Link to Home route', () => {
        expect(_wrapper.contains(
            <IndexLink activeClassName='route--active' to='/'>
                Home
            </IndexLink>
        )).to.be.true
    })

    it('Should render a Link to Counter route', () => {
        expect(_wrapper.contains(
            <Link activeClassName='route--active' to='/counter'>
                Counter
            </Link>
        )).to.be.true
    })
})
