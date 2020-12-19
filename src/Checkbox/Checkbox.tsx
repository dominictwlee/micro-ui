import { ChangeEvent, HTMLProps } from 'react';
import { css } from '@emotion/react';

import { themeVars } from '../theming';
import CheckboxIcon from './CheckboxIcon';
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

const checkboxInputHidden = css`
  position: absolute;
  cursor: inherit;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

const wrapper = css`
  display: inline-flex;
  cursor: pointer;
  outline: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const sizeSmall = css`
  width: 24px;
  height: 24px;
  padding: 4px;
`;

const sizeMedium = css`
  width: 32px;
  height: 32px;
  padding: 4px;
`;

const sizeLarge = css`
  width: 48;
  height: 48px;
  padding: 4px;
`;

const sizes = {
  small: sizeSmall,
  medium: sizeMedium,
  large: sizeLarge,
};

const iconColor = ({ color = 'tertiary' }: CheckboxProps) => css`
  color: ${themeVars.colors[color].main};
`;

const labelPositionVertical = css`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default function Checkbox({
  inputProps = {},
  size = 'medium',
  checked,
  onChange,
  id,
  label,
  labelPosition = 'right',
  ...props
}: CheckboxProps) {
  const htmlId = id ?? label;
  const checkbox = (
    <span css={[wrapper, sizes[size]]} {...props}>
      <input
        css={checkboxInputHidden}
        {...inputProps}
        id={htmlId}
        checked={checked}
        onChange={onChange}
        type="checkbox"
      />
      <CheckboxIcon size="100%" css={iconColor} />
    </span>
  );

  if (!label) {
    return checkbox;
  }

  const isVerticalPositioned =
    labelPosition === 'top' || labelPosition === 'bottom';

  return (
    <Label
      htmlFor={htmlId}
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
      {checkbox}
      {(labelPosition === 'right' || labelPosition === 'bottom') && (
        <span>{label}</span>
      )}
    </Label>
  );
}
