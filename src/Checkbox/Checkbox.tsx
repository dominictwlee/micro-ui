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
  label,
  labelPosition = 'right',
  id,
  ...props
}: CheckboxProps) {
  if (!label) {
    return <IconInput />;
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
      <IconInput {...props} size={size} id={id} />
      {(labelPosition === 'right' || labelPosition === 'bottom') && (
        <span>{label}</span>
      )}
    </Label>
  );
}
