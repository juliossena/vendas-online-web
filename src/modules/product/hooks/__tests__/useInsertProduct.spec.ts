/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, renderHook } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { URL_PRODUCT } from '../../../../shared/constants/urls';
import { useInsertProduct } from '../useInsertProduct';

const mockAxios = new MockAdapter(axios);

mockAxios.onPost(URL_PRODUCT, {});

const mockNavigate = jest.fn();
const mockSetNotification = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock('../../../../store/reducers/globalReducer/useGlobalReducer', () => ({
  useGlobalReducer: () => ({
    setNotification: mockSetNotification,
  }),
}));

describe.skip('Test useInsertProduct', () => {
  it('should return initial values', () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.loading).toEqual(false);
    expect(result.current.disabledButton).toEqual(true);
    expect(result.current.product).toEqual({
      name: '',
      price: 0,
      image: '',
    });
  });

  it('should change select in handleChangeSelect', () => {
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleChangeSelect('4324');
    });

    expect(result.current.product.categoryId).toEqual(4324);
  });

  it('should change product in onChangeInput send name', () => {
    const TEST_MOCK = 'TEST_MOCK';
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChangeInput({ target: { value: TEST_MOCK } } as any, 'name');
    });

    expect(result.current.product.name).toEqual(TEST_MOCK);
  });

  it('should change product in onChangeInput send price', () => {
    const TEST_MOCK = '3453';
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChangeInput({ target: { value: TEST_MOCK } } as any, 'price', true);
    });

    expect(result.current.product.price).toEqual(Number(TEST_MOCK));
  });

  it('should change disabledButton in insert data', () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.onChangeInput({ target: { value: '4324' } } as any, 'price', true);
    });

    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.onChangeInput({ target: { value: 'dfafa' } } as any, 'name');
    });

    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.onChangeInput({ target: { value: 'http' } } as any, 'image');
    });

    expect(result.current.disabledButton).toEqual(true);

    act(() => {
      result.current.handleChangeSelect('4324');
    });

    expect(result.current.disabledButton).toEqual(false);

    act(() => {
      result.current.onChangeInput({ target: { value: '' } } as any, 'image');
    });

    expect(result.current.disabledButton).toEqual(true);
  });

  it('should call axios.post', () => {
    const spyAxios = jest.spyOn(axios, 'post');

    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.handleInsertProduct();
    });

    expect(spyAxios.mock.calls[0][1]).toEqual(result.current.product);

    expect(spyAxios.mock.calls.length).toEqual(1);
  });
});
