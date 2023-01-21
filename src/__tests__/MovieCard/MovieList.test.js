import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import storeConfig from '../../redux/store';
import MovieList from '../../components/MovieList.js/MovieList';

describe('snapshot testing', () => {
  test('snapshot for Mission component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={storeConfig}>
          <MovieList />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
