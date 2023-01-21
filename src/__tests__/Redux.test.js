import '@testing-library/jest-dom';

describe('Actions', () => {
  it('should create a  action', () => {
    const continents = [
      {
        id: 1,
        image: './assets/countries-world.png',
        count: 0,
      },
    ];

    const expectedAction = {
      type: 'capstone-project/continents/FETCH_SUCCES_ASIA',
      continents,

    };
  });
});
