import type { ReactNode, Ref } from 'react';
import type { ButtonSize, ButtonVariant } from '../Button/Button';
import type SvgIcon from '../SvgIcon/SvgIcon';
export type ButtonProps = {
    /**
     * Content to render inside the button
     */
    children?: ReactNode & {
        type?: {
            uiName?: string;
        };
    };
    /**
     * Color variant of the menu button
     * @default 'default'
     */
    color?: MenuButtonColor;
    /**
     * Custom data attributes to be added to the button element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon component to display at the end of the button.
     * Only applicable when both the `headless` and `icon` props are false
     */
    endAdornment?: typeof SvgIcon;
    /**
     * Whether to render the button as an IconButton
     */
    icon: true;
    /**
     * Accessible label for the button when visual text is not present.
     * Required when icon is true and ignored otherwise
     */
    label: string;
    /**
     * Size of the button
     * @default 'small'
     */
    size?: ButtonSize;
    /**
     * Icon component to display at the start of the button.
     * Only applicable when both the `headless` and `icon` props are false
     */
    startAdornment?: typeof SvgIcon;
    /**
     * Tab order position for keyboard navigation
     * @default 0
     */
    tabIndex?: number;
    /**
     * Visual style variant of the button
     * @default 'text'
     */
    variant?: ButtonVariant;
} | {
    /**
     * Content to render inside the button
     */
    children?: ReactNode & {
        type?: {
            uiName?: string;
        };
    };
    /**
     * Color variant of the menu button
     * @default 'default'
     */
    color?: MenuButtonColor;
    /**
     * Custom data attributes to be added to the button element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * Whether the button is disabled and cannot be interacted with
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon component to display at the end of the button.
     * Only applicable when both the `headless` and `icon` props are false
     */
    endAdornment?: typeof SvgIcon;
    /**
     * Whether to render the button as an IconButton
     * @default false
     */
    icon?: false;
    /**
     * Accessible label for the icon button.
     * Required when icon is true and ignored otherwise
     */
    label?: never;
    /**
     * Size of the button
     * @default 'small'
     */
    size?: ButtonSize;
    /**
     * Icon component to display at the start of the button.
     * Only applicable when both the `headless` and `icon` props are false
     */
    startAdornment?: typeof SvgIcon;
    /**
     * Tab order position for keyboard navigation
     * @default 0
     */
    tabIndex?: number;
    /**
     * Visual style variant of the button
     * @default 'text'
     */
    variant?: ButtonVariant;
};
type MenuButtonColor = 'error' | 'default' | 'inverse' | 'primary' | 'secondary';
declare function Button({ children, color, dataSet, disabled, endAdornment, icon, label, size, startAdornment, tabIndex, variant, }: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element;
export default Button;
