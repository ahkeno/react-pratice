import React from 'react';
import { shallow } from 'enzyme';
import authUser from './authUser';

describe('<authUser />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<authUser />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
