import { ChangeEvent } from 'react';
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md';

import IconInput from '../IconInput';
import { InputElementProps } from '../types';

interface RadioProps {
  checked?: InputElementProps['checked'];
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  id?: InputElementProps['id'];
  inputProps?: Omit<InputElementProps, 'onChange' | 'checked' | 'id'>;
  label?: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  name?: string;
}

export default function Radio({
  size = 'medium',
  color = 'primary',
  labelPosition = 'right',
  ...props
}: RadioProps) {
  console.log(props);

  const iconInputProps = {
    ...props,
    size,
    color,
    labelPosition,
  };
  return (
    <IconInput
      {...iconInputProps}
      type="radio"
      checkedIcon={MdRadioButtonChecked}
      uncheckedIcon={MdRadioButtonUnchecked}
    />
  );
}
