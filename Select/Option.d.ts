import type { PropsWithChildren, ReactNode, Ref } from 'react';
/**
 * OptionProps does not include a wrapText prop directly.
 * Wrapping is controlled by the parent Select via context.
 */
export interface OptionProps {
    /**
     * If true, the option is disabled
     * @default false
     */
    disabled?: boolean;
    /** Custom display value to show when this option is selected */
    displayValue?: string;
    /**
     * The content to display for the option
     */
    children: ReactNode;
    /**
     * Value associated with the option
     * @default ''
     */
    value?: string;
}
declare function Option({ children, disabled, displayValue, value, }: PropsWithChildren<OptionProps>, ref: Ref<HTMLButtonElement>): JSX.Element;
export default Option;
