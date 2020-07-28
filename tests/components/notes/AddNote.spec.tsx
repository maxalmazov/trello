import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddNote from '../../../src/components/notes/AddNote';

describe('<AddNote>', function () {
  it('should have title \'+ Add new card\'', function () {
    const wrapper = shallow(<AddNote notesSectionId={0}/>);
    expect(wrapper.contains('+ Add new card')).to.have.equal(true);
  });
});
