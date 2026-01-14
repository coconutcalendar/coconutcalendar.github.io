import type { ChangeEventHandler, PropsWithChildren, Ref } from 'react';
interface SwitchProps {
    /**
     * Accessible label for the switch input element
     */
    'aria-label'?: string;
    /**
     * The color scheme of the switch
     * @default 'primary'
     */
    color?: SwitchColor;
    /**
     * Initial checked state of the switch
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * If true, the switch is be disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Additional descriptive text to display below the switch label
     */
    helperText?: string;
    /**
     * Reference to the underlying input element
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * The name attribute for the input element
     */
    name?: string;
    /**
     * Callback fired when the state is changed
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * The size of the switch
     * @default 'small'
     */
    size?: SwitchSize;
}
type SwitchColor = 'primary' | 'secondary';
type SwitchSize = 'medium' | 'small';
declare function Switch({ 'aria-label': label, children, color, defaultChecked, disabled, helperText, inputRef, name, onChange, size, }: PropsWithChildren<SwitchProps>): JSX.Element;
export default Switch;
