import React from 'react';
import type { AriaAttributes, KeyboardEventHandler, HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
export interface ButtonProps {
    /**
     * Identifies the element whose contents or presence are controlled by the button
     */
    'aria-controls'?: AriaAttributes['aria-controls'];
    /**
     * Indicates whether the element controlled by the button is expanded or collapsed
     */
    'aria-expanded'?: AriaAttributes['aria-expanded'];
    /**
     * Indicates the availability and type of interactive popup element that can be triggered by the button
     */
    'aria-haspopup'?: AriaAttributes['aria-haspopup'];
    /**
     * The content to display inside the button
     */
    children?: ReactNode & {
        type?: {
            uiName?: string;
        };
    };
    /**
     * The color scheme of the button
     * @default 'default'
     */
    color?: ButtonColor;
    /**
     * Custom data attributes to be added to the button element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * If true, the button is be disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon to display at the end of the button
     */
    endAdornment?: typeof SvgIcon;
    /**
     * The id of the form element that the button is associated with
     */
    form?: string;
    /**
     * If provided, the button will render as an anchor tag with this URL.
     * Otherwise, the component will render as a <button> element.
     */
    href?: string;
    /**
     * The id attribute of the button element
     */
    id?: string;
    /**
     * Callback fired when the button is activated
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * Callback fired when a key is pressed while the button is focused
     */
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    /**
     * Position of the button within a button group. Used to adjust border radius and borders.
     * Only applicable when the button is used within a `ButtonGroup` component
     */
    position?: ButtonPosition | null;
    /**
     * The size of the button
     * @default 'medium'
     */
    size?: ButtonSize;
    /**
     * Icon to display at the start of the button
     */
    startAdornment?: typeof SvgIcon;
    /**
     * Tab order index for keyboard navigation
     * @default 0
     */
    tabIndex?: number;
    /**
     * Specifies where to open the linked document.
     * Only applicable when `href` is provided
     */
    target?: HTMLAttributeAnchorTarget;
    /**
     * The type attribute of the button element.
     * Not applicable when `href` is provided
     * @default 'button'
     */
    type?: ButtonType;
    /**
     * The visual style variant of the button
     * @default 'contained'
     */
    variant?: ButtonVariant;
}
export type ButtonColor = 'error' | 'default' | 'inverse' | 'primary' | 'secondary';
type ButtonPosition = 'left' | 'middle' | 'right';
export type ButtonSize = 'large' | 'medium' | 'small';
type ButtonType = 'button' | 'reset' | 'submit';
export type ButtonVariant = 'contained' | 'outlined' | 'text';
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export default Button;
