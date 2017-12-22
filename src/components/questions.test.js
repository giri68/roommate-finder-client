import React from 'react';
import { shallow } from 'enzyme';
import { Questions } from './questions';

describe('<Questions />', () => {

  it('Smoke test', () => {
    shallow(<Questions />)
  })

})