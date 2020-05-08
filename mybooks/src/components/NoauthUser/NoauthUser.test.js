import React from 'react';
import { shallow } from 'enzyme';
import NoauthUser from './NoauthUser';

describe('<NoauthUser />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NoauthUser />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
