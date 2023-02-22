import { useEffect, useState } from 'react';

import Input, { InputProps } from '../input/Input';

interface InputMoneyProps extends InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addonBefore?: string;
}

const DECIMAL_SIZE = 2;

const InputMoney = ({ value, onChange, addonBefore = 'R$', ...props }: InputMoneyProps) => {
  const [currentValue, setCurrentValue] = useState<string>(`${value}`);

  useEffect(() => {
    const valueString = `${value}`;

    if (!/\D/.test(valueString.replace('.', ''))) {
      setCurrentValue(value.toFixed(DECIMAL_SIZE).toString().replace('.', ','));
    }
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueRemoved = event.target.value.replace(',', '');

    const sizeSlice = valueRemoved.length - DECIMAL_SIZE;
    const newValue = [valueRemoved.slice(0, sizeSlice), '.', valueRemoved.slice(sizeSlice)].join(
      '',
    );

    onChange({
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    });
  };

  return (
    <Input addonBefore={addonBefore} value={currentValue} onChange={handleOnChange} {...props} />
  );
};

export default InputMoney;
