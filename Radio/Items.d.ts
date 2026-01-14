import type { PropsWithChildren } from 'react';
import type { RadioInputColor, RadioInputSize } from './RadioContext';
interface RadioItemsProps {
    /**
     * The color scheme of the radio inputs
     */
    color?: RadioInputColor;
    /**
     * The initial selected value
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
declare function Items({ children, color, disabled, defaultValue, error, helperText, name, onChange, size, }: PropsWithChildren<RadioItemsProps>): JSX.Element;
export default Items;
