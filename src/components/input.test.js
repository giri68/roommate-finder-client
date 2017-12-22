import React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';

describe('<App />', () => {

  it('Smoke test', () => {
    shallow(<App />)
  })

})