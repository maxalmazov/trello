import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

import NoteForm from '../../../../src/components/notes/form/NoteForm';

const mockStore = configureStore([]);
const testNote = {
  id: 0,
  sectionId: 0,
  title: 'Test note title',
  description: 'Test note description',
  dueTo: new Date().toISOString().substring(0, 10),
  isCompleted: true,
  color: '#ffffff',
};

const ProviderWrapper = (props) => {
  const { children, mockStore } = props;

  return (
    <Provider store={mockStore}>
        {children}
    </Provider>
  );
};

describe('<NoteForm>', function () {
  it('should have title \'Add new note\'', function () {
    const fakeFn = sinon.fake();
    const wrapper = mount(
      <NoteForm notesSectionId={0} note={testNote} handleClose={fakeFn}/>, {
        wrappingComponent: ProviderWrapper,
        wrappingComponentProps: { mockStore: mockStore({}) },
      }
     );

    expect(wrapper.find('input#title').prop('value')).to.have.equal('Test note title');
  });
});
