import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

const TestComponent = () => (
  <div>
    <h1>
      BDD Tests with 'React && Mocha && Chai && Enzyme && Typescript'
    </h1>
  </div>
);

describe('<TestComponent/>', function () {
  it('should have \'BDD Tests with React && Mocha && Chai && Enzyme && Typescript\' text', function () {
    const wrapper = shallow(<TestComponent/>);
    expect(wrapper.text())
      .to.equal('BDD Tests with \'React && Mocha && Chai && Enzyme && Typescript\'');
  });
});
