import React from 'react';
import { shallow } from 'enzyme';
import { SearchUserProfile } from './search-user-profile';

describe('<SearcgUserProfile />', () => {

  it('Smoke test', () => {
    shallow(<SearchUserProfile />)
  })

})