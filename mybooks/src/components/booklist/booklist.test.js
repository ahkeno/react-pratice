import React from 'react';
import { shallow } from 'enzyme';
import booklist from './booklist';

describe('<booklist />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<booklist />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
