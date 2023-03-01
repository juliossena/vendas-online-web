/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from 'react-router-dom';

import { LoginRoutesEnum } from '../../../../modules/login/routes';
import { AUTHORIZATION_KEY } from '../../../constants/authorizationConstants';
import {
  getAuthorizationToken,
  logout,
  setAuthorizationToken,
  unsetAuthorizationToken,
  verifyLoggedIn,
} from '../auth';
import { connectionAPIGet } from '../connectionAPI';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

jest.mock('../storageProxy');
jest.mock('../connectionAPI');
jest.mock('react-router-dom');

const MOCK_TOKEN = 'MOCK_TOKEN';

const mockGetItemStorage = getItemStorage as jest.Mock<any>;
const mockConnectionAPIGet = connectionAPIGet as jest.Mock<any>;

describe('Auth functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('unsetAuthorizationToken', () => {
    it('should call removeItemStorage in unsetAuthorizationToken', () => {
      unsetAuthorizationToken();
      expect(removeItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });
  });

  describe('setAuthorizationToken', () => {
    it('should not call setItemStorage', () => {
      setAuthorizationToken();
      expect(setItemStorage).not.toHaveBeenCalledWith();
    });

    it('should call setItemStorage', () => {
      setAuthorizationToken(MOCK_TOKEN);
      expect(setItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY, MOCK_TOKEN);
    });
  });

  describe('getAuthorizationToken', () => {
    it('should call setItemStorage', () => {
      getAuthorizationToken();
      expect(getItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });
  });

  describe('logout', () => {
    it('should call navigate and unsetAuthorizationToken', () => {
      const navigateMock = jest.fn();
      logout(navigateMock);

      expect(navigateMock).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
      expect(removeItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });
  });

  describe('verifyLoggedIn', () => {
    beforeEach(() => {
      mockGetItemStorage.mockReturnValue(MOCK_TOKEN);
      mockConnectionAPIGet.mockResolvedValue({ name: 'name' });
    });

    it('should call redirect in token empty', () => {
      mockGetItemStorage.mockReturnValue(undefined);

      verifyLoggedIn();

      expect(redirect).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
    });

    it('should unsetAuthorizationToken in error request', async () => {
      mockConnectionAPIGet.mockRejectedValueOnce(new Error());
      await verifyLoggedIn();

      expect(removeItemStorage).toHaveBeenCalledWith(AUTHORIZATION_KEY);
    });

    it('should call redirect in return user', async () => {
      mockConnectionAPIGet.mockResolvedValue(undefined);
      await verifyLoggedIn();

      expect(redirect).toHaveBeenCalledWith(LoginRoutesEnum.LOGIN);
    });

    it('should return null if exist user', async () => {
      const returnVerify = await verifyLoggedIn();

      expect(returnVerify).toBeNull();
    });
  });
});
