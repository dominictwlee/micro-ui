import React from 'react';

import { InputElementProps } from '../types';

interface RadioProps {
  inputProps?: Omit<InputElementProps, 'onChange' | 'checked' | 'id'>;
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: InputElementProps['checked'];
  id?: InputElementProps['id'];
  label?: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
}

export default function Radio() {
  return <div></div>;
}
