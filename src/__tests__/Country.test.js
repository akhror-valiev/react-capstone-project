import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Country from '../components/Continents/Continents';

describe('matches snapshot', () => {
  test('matches to snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Provider store={store}>
          <Country />
        </Provider>
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
