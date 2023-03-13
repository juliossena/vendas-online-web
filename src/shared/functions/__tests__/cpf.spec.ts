import { insertMaskInCpf } from '../cpf';

describe('Test CPF', () => {
  it('should return mask cpf (send 11)', () => {
    const returnCPF = insertMaskInCpf('12345678900');

    expect(returnCPF).toEqual('123.456.789-00');
  });

  it('should return mask cpf (send 10)', () => {
    const returnCPF = insertMaskInCpf('1234567890');

    expect(returnCPF).toEqual('1234567890');
  });

  it('should return mask cpf (send 12)', () => {
    const returnCPF = insertMaskInCpf('123456789012');

    expect(returnCPF).toEqual('123456789012');
  });
});
