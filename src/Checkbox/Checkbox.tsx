import { ChangeEvent, HTMLProps } from 'react';
import { css } from '@emotion/react';

import IconInput from '../IconInput';
import Label from '../Label';

type InputElementProps = HTMLProps<HTMLInputElement>;

interface CheckboxProps {
  inputProps?: Omit<InputElementProps, 'onChange' | 'checked' | 'id'>;
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: InputElementProps['checked'];
  id?: InputElementProps['id'];
  label?: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
}

const labelPositionVertical = css`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default function Checkbox({
  size = 'medium',
  color = 'tertiary',
  labelPosition = 'right',
  label,
  id,
  ...props
}: CheckboxProps) {
  const iconInputProps = {
    ...props,
    size,
    id,
    color,
  };

  if (!label) {
    return <IconInput {...iconInputProps} />;
  }

  const isVerticalPositioned =
    labelPosition === 'top' || labelPosition === 'bottom';

  return (
    <Label
      htmlFor={id}
      css={[
        css`
          cursor: pointer;
        `,
        isVerticalPositioned && labelPositionVertical,
      ]}
    >
      {(labelPosition === 'left' || labelPosition === 'top') && (
        <span>{label}</span>
      )}
      <IconInput {...iconInputProps} />
      {(labelPosition === 'right' || labelPosition === 'bottom') && (
        <span>{label}</span>
      )}
    </Label>
  );
}
