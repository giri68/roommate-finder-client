import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './dashboard';

describe('<Dashboard />', () => {

  it('Smoke test', () => {
    shallow(<Dashboard />)
  })

})