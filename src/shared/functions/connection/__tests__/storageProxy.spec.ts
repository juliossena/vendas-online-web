import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

const MOCK_KEY = 'MOCK_KEY';
const MOCK_VALUE = 'MOCK_VALUE';

describe('storageProxy', () => {
  it('should save in localStorage', () => {
    setItemStorage(MOCK_KEY, MOCK_VALUE);

    expect(localStorage.getItem(MOCK_KEY)).toEqual(MOCK_VALUE);
  });

  it('should remove of localStorage', () => {
    localStorage.setItem(MOCK_KEY, MOCK_VALUE);

    removeItemStorage(MOCK_KEY);

    expect(localStorage.getItem(MOCK_KEY)).toEqual(null);
  });

  it('should return of localStorage', () => {
    localStorage.setItem(MOCK_KEY, MOCK_VALUE);

    expect(getItemStorage(MOCK_KEY)).toEqual(MOCK_VALUE);
  });
});
