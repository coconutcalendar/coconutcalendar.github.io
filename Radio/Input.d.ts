import type { ChangeEventHandler, PropsWithChildren, Ref } from 'react';
import type { RadioInputColor, RadioInputSize } from './RadioContext';
interface RadioInputProps {
    /**
     * Accessible label for the radio input
     */
    'aria-label'?: string;
    /**
     * The color scheme of the radio input
     * @default 'primary'
     */
    color?: RadioInputColor;
    /**
     * If true, the radio input is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Reference to the underlying input element
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * The name attribute for the radio input
     */
    name?: string;
    /**
     * Callback fired when the input value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * The size of the radio input
     * @default 'small'
     */
    size?: RadioInputSize;
    /**
     * The value of the radio input
     */
    value: string | number;
}
declare function Input({ 'aria-label': label, children, color: passedColor, disabled: passedDisabled, inputRef, name: passedName, onChange, size: passedSize, value, }: PropsWithChildren<RadioInputProps>): JSX.Element;
export default Input;
