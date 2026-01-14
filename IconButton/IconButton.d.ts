import type { AriaAttributes, KeyboardEventHandler, MouseEventHandler, PropsWithChildren, Ref } from 'react';
import React from 'react';
export interface IconButtonProps {
    /**
     * Accessible label for the icon button.
     * Required for screen readers
     */
    'aria-label': AriaAttributes['aria-label'];
    /**
     * Identifies the element whose contents or presence are controlled by the icon button
     */
    'aria-controls'?: AriaAttributes['aria-controls'];
    /**
     * Indicates whether the element controlled by the icon button is expanded or collapsed
     */
    'aria-expanded'?: AriaAttributes['aria-expanded'];
    /**
     * Indicates the availability and type of interactive popup element that can be triggered by the button
     */
    'aria-haspopup'?: AriaAttributes['aria-haspopup'];
    /**
     * The color scheme of the icon button
     * @default 'default'
     */
    color?: IconButtonColor;
    /**
     * Custom data attributes to be added to the button element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * If true, the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The id attribute of the button element
     */
    id?: string;
    /**
     * Callback fired when the button is activated
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Callback fired when a key is pressed while the button is focused
     */
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
    /**
     * The size of the icon button
     * @default 'small'
     */
    size?: IconButtonSize;
    /** Tab order index for keyboard navigation.
     * Only adjust this if you want the user’s tab order to be non-standard or removed entirely
     * @default 0
     */
    tabIndex?: number;
    /** The type attribute of the button element
     * @default 'button'
     */
    type?: IconButtonType;
}
type IconButtonColor = 'error' | 'default' | 'inverse' | 'primary' | 'secondary';
type IconButtonSize = 'large' | 'medium' | 'small';
type IconButtonType = 'button' | 'reset' | 'submit';
export declare function Component({ 'aria-label': label, 'aria-controls': controls, 'aria-expanded': expanded, 'aria-haspopup': hasPopup, children, color, dataSet, disabled, id, onClick, onKeyDown, size, tabIndex, type, }: PropsWithChildren<IconButtonProps>, ref?: Ref<HTMLButtonElement>): JSX.Element;
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export default IconButton;
