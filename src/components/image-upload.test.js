import React from 'react';
import { shallow } from 'enzyme';
import { ImageUpload } from './image-upload';

describe('<ImageUpload />', () => {

  it('Smoke test', () => {
    shallow(<ImageUpload />)
  })

})