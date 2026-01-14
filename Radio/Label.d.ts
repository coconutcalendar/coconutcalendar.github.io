import type { PropsWithChildren } from 'react';
interface RadioLabelProps {
    /**
     * Additional descriptive text to display below the label
     */
    helperText?: string;
}
declare function Label({ children, helperText, }: PropsWithChildren<RadioLabelProps>): JSX.Element;
export default Label;
