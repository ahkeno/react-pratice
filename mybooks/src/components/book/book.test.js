import React from 'react';
import { shallow } from 'enzyme';
import book from './book';

describe('<book />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<book />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
