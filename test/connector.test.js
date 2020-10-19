import getData from '../src/helpers/connector';
import MOCK_DATA from '../src/containers/mock';

describe('getData', () => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => MOCK_DATA }));

  it('asynchronous fetch data with api call', async () => {
    await expect(
      getData(),
    ).resolves.toEqual(MOCK_DATA);
  });
});
