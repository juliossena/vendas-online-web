import { insertMaskInPhone } from '../phone';

describe('Test Phone', () => {
  it('should return mask phone (send 9)', () => {
    const returnCPF = insertMaskInPhone('12345678901');

    expect(returnCPF).toEqual('(12) 34567-8901');
  });

  it('should return mask phone (send 8)', () => {
    const returnCPF = insertMaskInPhone('1234567890');

    expect(returnCPF).toEqual('(12) 3456-7890');
  });
});
