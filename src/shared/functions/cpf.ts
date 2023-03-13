export const insertMaskInCpf = (cpf: string) => {
  if (cpf.length !== 11) {
    return cpf;
  }
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};
