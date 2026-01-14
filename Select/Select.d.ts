import type { ChangeEvent, Dispatch, MutableRefObject, PropsWithChildren, ReactNode, Ref } from 'react';
import React from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
import type { TextInputColor, TextInputSize, TextInputVariant } from '../TextInput/styles';
import type { Actions } from './Actions';
import type { OptionProps } from './Option';
type EventActions = 'revert';
interface SelectState {
    value: string;
}
type SelectContextState = SelectState & {
    displayInputRef: MutableRefObject<HTMLInputElement | null>;
    inputRef: MutableRefObject<HTMLInputElement | null>;
};
type UseSelectValues = [SelectContextState, Dispatch<Actions>];
export declare const useSelect: () => UseSelectValues;
export interface SelectProps {
    /**
     * The color scheme of the select input
     * @default 'default'
     */
    color?: TextInputColor;
    /**
     * The initial selected value
     * @default ''
     */
    defaultValue?: string;
    /**
     * Custom data attributes to be added to the input element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * If true, the select is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the select is in an error state
     * @default false
     */
    error?: boolean;
    /**
     * Additional descriptive text or error text to display below the select
     */
    helperText?: string;
    /**
     * Reference to the hidden input element containing the value of the selection
     */
    inputRef?: Ref<HTMLInputElement>;
    /**
     * The label for the select
     */
    label: string;
    /**
     * The name attribute for the input element
     */
    name?: string;
    /** Callback fired when the selected value changes.
     * @param event - The change event
     * @param actions - An object containing action functions like `revert`
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, actions: Record<EventActions, () => void>) => void;
    /**
     * The size of the select input
     * @default 'medium'
     */
    size?: TextInputSize;
    /**
     * Icon or another element to display at the start of the input
     */
    startAdornment?: typeof SvgIcon | ReactNode;
    /**
     * The visual style variant of the select
     * @default 'outlined'
     */
    variant?: TextInputVariant;
}
declare function Select({ children, color, dataSet, defaultValue, disabled, error, helperText, inputRef, label, name, onChange, size, startAdornment, variant, }: PropsWithChildren<SelectProps>): JSX.Element;
declare namespace Select {
    var Option: React.ForwardRefExoticComponent<OptionProps & {
        children?: ReactNode;
    } & React.RefAttributes<HTMLButtonElement>>;
    var Group: typeof import("./Group").default;
}
export default Select;
