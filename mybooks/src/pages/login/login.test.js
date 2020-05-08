import React from 'react';
import { shallow } from 'enzyme';
import login from './login';

describe('<login />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<login />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
