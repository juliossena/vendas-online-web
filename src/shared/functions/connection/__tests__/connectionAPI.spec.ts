import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../../constants/errosStatus';
import { URL_AUTH } from '../../../constants/urls';
import { MethodsEnum } from '../../../enums/methods.enum';
import ConnectionAPI, {
  connectionAPIDelete,
  connectionAPIGet,
  connectionAPIPatch,
  connectionAPIPost,
  connectionAPIPut,
} from '../connectionAPI';

const mockAxios = new MockAdapter(axios);

const RETURN_VALUE = 'RETURN_VALUE';
const mockToken = 'TOKEN_MOCK';
const BODY_MOCK = { name: 'BODY_MOCK' };

jest.mock('../auth', () => ({
  getAuthorizationToken: () => mockToken,
}));

describe('connectionAPI function', () => {
  describe('connectionAPIGet', () => {
    it('should success get', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(URL_AUTH).reply(200, RETURN_VALUE);

      const returnGet = await connectionAPIGet(URL_AUTH);

      expect(returnGet).toEqual(RETURN_VALUE);

      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
    });
  });

  describe('connectionAPIDelete', () => {
    it('should success delete', async () => {
      const spyAxios = jest.spyOn(axios, 'delete');
      mockAxios.onDelete(URL_AUTH).reply(200, RETURN_VALUE);

      const returnGet = await connectionAPIDelete(URL_AUTH);

      expect(returnGet).toEqual(RETURN_VALUE);

      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
    });
  });

  describe('connectionAPIPost', () => {
    it('should success post', async () => {
      const spyAxios = jest.spyOn(axios, 'post');
      mockAxios.onPost(URL_AUTH).reply(200, RETURN_VALUE);

      const returnGet = await connectionAPIPost(URL_AUTH, BODY_MOCK);

      expect(returnGet).toEqual(RETURN_VALUE);

      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPut', () => {
    it('should success put', async () => {
      const spyAxios = jest.spyOn(axios, 'put');
      mockAxios.onPut(URL_AUTH).reply(200, RETURN_VALUE);

      const returnGet = await connectionAPIPut(URL_AUTH, BODY_MOCK);

      expect(returnGet).toEqual(RETURN_VALUE);

      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('connectionAPIPatch', () => {
    it('should success put', async () => {
      const spyAxios = jest.spyOn(axios, 'patch');
      mockAxios.onPatch(URL_AUTH).reply(200, RETURN_VALUE);

      const returnGet = await connectionAPIPatch(URL_AUTH, BODY_MOCK);

      expect(returnGet).toEqual(RETURN_VALUE);

      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('test connect', () => {
    it('should return success', async () => {
      mockAxios.onGet(URL_AUTH).reply(200, RETURN_VALUE);

      const returnGet = await ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET);

      expect(returnGet).toEqual(RETURN_VALUE);
    });

    it('should return error 401', async () => {
      mockAxios.onGet(URL_AUTH).reply(401);

      expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrowError(
        Error(ERROR_ACCESS_DANIED),
      );
    });

    it('should return error 403', async () => {
      mockAxios.onGet(URL_AUTH).reply(403);

      expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrowError(
        Error(ERROR_ACCESS_DANIED),
      );
    });

    it('should return error 400', async () => {
      mockAxios.onGet(URL_AUTH).reply(400);

      expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrowError(
        Error(ERROR_CONNECTION),
      );
    });
  });

  describe('test call', () => {
    it('should header send authorization', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(URL_AUTH).reply(200, RETURN_VALUE);

      await ConnectionAPI.call(URL_AUTH, MethodsEnum.GET);

      expect(spyAxios.mock.calls[0][1]?.headers).toEqual({
        Authorization: mockToken,
        'Content-Type': 'application/json',
      });
    });
  });
});
