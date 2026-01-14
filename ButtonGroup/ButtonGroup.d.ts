import type { PropsWithChildren } from 'react';
export interface ButtonGroupProps {
    /**
     * The color scheme of the button group
     * @default 'default'
     */
    color?: ButtonGroupColor;
    /**
     * If `true`, all buttons in the group are disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The size of the buttons in the group
     * @default 'medium'
     */
    size?: ButtonGroupSize;
    /**
     * The visual style variant of the buttons in the group
     * @default 'contained'
     */
    variant?: ButtonGroupVariant;
}
export type ButtonGroupColor = 'default' | 'inverse' | 'primary' | 'secondary';
export type ButtonGroupSize = 'large' | 'medium' | 'small';
export type ButtonGroupVariant = 'contained' | 'outlined';
declare function ButtonGroup({ children, color: groupColor, disabled: groupDisabled, size: groupSize, variant: groupVariant, }: PropsWithChildren<ButtonGroupProps>): JSX.Element;
export default ButtonGroup;
