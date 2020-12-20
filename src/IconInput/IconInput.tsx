import { css } from '@emotion/react';
import { ChangeEvent, ComponentType, HTMLProps } from 'react';
import { IconBaseProps } from 'react-icons';

import { themeVars } from '../theming';
import { Color, Size } from '../types';
import Label from '../Label';

type InputElementProps = HTMLProps<HTMLInputElement>;

interface IconInputProps {
  checked?: InputElementProps['checked'];
  color: Color;
  id?: InputElementProps['id'];
  inputProps?: InputElementProps;
  label?: string;
  labelPosition: 'left' | 'right' | 'top' | 'bottom';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size: Size;
  type: 'checkbox' | 'radio';
  checkedIcon: ComponentType<IconBaseProps>;
  uncheckedIcon: ComponentType<IconBaseProps>;
  name?: string;
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

const uncheckedDisplay = css`
  display: block;
  input:checked ~ & {
    display: none;
  }
`;

const checkedDisplay = css`
  display: none;
  input:checked ~ & {
    display: block;
  }
`;

const iconColor = (color: Color) => css`
  color: ${themeVars.colors[color].main};
`;

const labelPositionVertical = css`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export default function IconInput({
  size,
  checked,
  onChange,
  id,
  inputProps,
  color,
  type,
  checkedIcon: CheckedIcon,
  uncheckedIcon: UncheckedIcon,
  label,
  labelPosition,
  name,
  ...props
}: IconInputProps) {
  const iconInput = (
    <span css={[wrapper, sizes[size]]} {...props}>
      <input
        css={checkboxInputHidden}
        {...inputProps}
        id={id}
        checked={checked}
        onChange={onChange}
        type={type}
        name={name}
      />
      <CheckedIcon size="100%" css={[iconColor(color), checkedDisplay]} />
      <UncheckedIcon size="100%" css={[iconColor(color), uncheckedDisplay]} />
    </span>
  );

  if (!label) {
    return iconInput;
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
      {iconInput}
      {(labelPosition === 'right' || labelPosition === 'bottom') && (
        <span>{label}</span>
      )}
    </Label>
  );
}
