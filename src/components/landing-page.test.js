import React from 'react';
import { shallow } from 'enzyme';
import  LandingPage  from './landing-page';

describe('<LandingPage />', () => {

  it('Smoke test', () => {
    shallow(<LandingPage />)
  })

})