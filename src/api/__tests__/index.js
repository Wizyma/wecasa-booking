import { getPrestations } from '../';

jest.mock('../index.js', () => ({
  getPrestations: jest.fn(() => Promise.resolve({ ressources: 'Coiffure' })),
}));

it('fetches data from unsplash', async () => {
  const data = await getPrestations();

  expect(data).toEqual({ ressources: 'Coiffure' });
  expect(data).toMatchSnapshot();
  expect(getPrestations).toHaveBeenCalledTimes(1);
});
