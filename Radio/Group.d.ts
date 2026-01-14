import type { PropsWithChildren } from 'react';
import type { RadioGroupDirection, RadioInputColor, RadioInputSize } from './RadioContext';
interface RadioGroupProps {
    /**
     * The color scheme of the radio inputs
     */
    color?: RadioInputColor;
    /**
     * The layout direction of the radio group
     * @default 'inherit'
     */
    direction?: RadioGroupDirection;
    /**
     * The initial selected value.
     * Corresponds to the `value` prop of one of the `Radio.Input` components within the group
     * @default ''
     */
    defaultValue?: string | number;
    /**
     * If true, the radio group is disabled
     */
    disabled?: boolean;
    /**
     * Whether the radio group is in an error state
     * @default false
     */
    error?: boolean;
    /**
     * Additional descriptive text or error text to display below the radio group
     * @default ''
     */
    helperText?: string;
    /**
     * The name attribute for the radio group
     */
    name?: string;
    /**
     * Callback fired when the selected value changes
     */
    onChange?: (event: {
        target: {
            name: string;
            value: string | number;
        };
    }) => void;
    /**
     * The size of the radio inputs
     */
    size?: RadioInputSize;
}
declare function Group({ children, color, direction, disabled, defaultValue, error, helperText, name, onChange, size, }: PropsWithChildren<RadioGroupProps>): JSX.Element;
export default Group;
