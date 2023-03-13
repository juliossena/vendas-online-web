import { insertMaskInCEP } from '../address';

describe('Test Address', () => {
  it('should return mask cep (send 7)', () => {
    const returnCep = insertMaskInCEP('1234567');

    expect(returnCep).toEqual('12345-67');
  });

  it('should return mask cep (send 6)', () => {
    const returnCep = insertMaskInCEP('123456');

    expect(returnCep).toEqual('12345-6');
  });

  it('should return mask cep (send 5)', () => {
    const returnCep = insertMaskInCEP('12345');

    expect(returnCep).toEqual('12345');
  });
});
