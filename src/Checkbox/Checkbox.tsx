import { ChangeEvent } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

import IconInput from '../IconInput';
import { InputElementProps } from '../types';

interface CheckboxProps {
  checked?: InputElementProps['checked'];
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  id?: InputElementProps['id'];
  inputProps?: Omit<InputElementProps, 'onChange' | 'checked' | 'id'>;
  label?: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
}

export default function Checkbox({
  size = 'medium',
  color = 'tertiary',
  labelPosition = 'right',
  id,
  ...props
}: CheckboxProps) {
  const iconInputProps = {
    ...props,
    size,
    id,
    color,
    type: 'checkbox' as const,
    checkedIcon: MdCheckBoxOutlineBlank,
    uncheckedIcon: MdCheckBox,
    labelPosition,
  };

  return <IconInput {...iconInputProps} />;
}
