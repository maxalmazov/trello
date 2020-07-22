import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Typography } from '@material-ui/core';

import ColorInput from '../../../src/components/inputs/ColorInput';
import { ColorLabelWrapper } from '../../../src/components/inputs/ColorInputStyled';

describe('<ColorInput>', () => {
  it('should have title \'Background color:\'', function () {
    const wrapper = shallow(<ColorInput/>);

    expect(wrapper.contains(
      <ColorLabelWrapper>
        <Typography variant={'subtitle1'}>
          Background color:
        </Typography>
      </ColorLabelWrapper>
    )).to.have.equal(true);
  });
});
