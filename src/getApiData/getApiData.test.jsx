import React from 'react';
import { shallow } from 'enzyme';
import dataLoadedAction from './dataLoadedAction';
import callApiService from './callApiService';
import { PresentationComponent } from './presentationComponent';
import getDataHOC from './getDataHOC';

describe('Loading component with data from an api provided via HOC', () => {
  describe('action creator', () => {
    it('should return object with type DATA_LOADED and paylod of the data', () => {
      const input = { someData: 'blah' };
      const expected = { type: 'DATA_LOADED', payload: input };
      const actual = dataLoadedAction(input);
      expect(actual).toEqual(expected);
    });
  });
  describe('service function', () => {
    it('should call dispatch with DATA_LOADED action', () => {
      const expectedType = 'DATA_LOADED';
      const mockDispatch = jest.fn();
      return callApiService(mockDispatch).then(() => {
        expect(mockDispatch.mock.calls.length).toBe(1);
        expect(mockDispatch.mock.calls[0][0].type).toEqual(expectedType);
      });
    });
  });
  describe('PresentationComponent', () => {
    it('given no data, should render empty code block', () => {
      const actual = shallow(<PresentationComponent data={undefined} />).find('code');
      expect(actual.length).toBe(1);
      expect(actual.text()).toEqual('');
    });
    it('given data, should render data in code block', () => {
      const data = {
        name: 'my data',
        value: 12345
      };
      const actual = shallow(<PresentationComponent data={data} />).find('code');
      expect(actual.length).toBe(1);
      expect(actual.text()).toEqual(JSON.stringify(data));
    });
  });
  describe('getDataHOC', () => {
    it('should return component with empty state, when state is empty', () => {
      const mockState = {};
      const mockDispatch = jest.fn();
      React.useReducer = jest.fn(() => {
        return [mockState, mockDispatch];
      });
      const Comp = getDataHOC(PresentationComponent);
      const wrapper = shallow(<Comp />);
      expect(wrapper.props().data).toBe(mockState);
    });
    it('should return component with state data, when state is not empty', () => {
      const mockState = {
        name: 'my data',
        value: 12345
      };
      const mockDispatch = jest.fn();
      React.useReducer = jest.fn(() => {
        return [mockState, mockDispatch];
      });
      const Comp = getDataHOC(PresentationComponent);
      const wrapper = shallow(<Comp />);
      expect(wrapper.props().data).toBe(mockState);
    });
  });
});
