import type { TextInputSize, TextInputStatus, TextInputVariant } from './styles';
export interface FieldStyles {
    button: string;
    error: string;
    group: string;
    help: string;
    icon: string;
    label: string;
    segment: (renderProps: {
        isDisabled: boolean;
        isPlaceholder: boolean;
        type: string;
    }) => string;
}
/**
 * Maps React Aria's field parts (Group, Label, Text, FieldError, DateSegment)
 * onto TextInput's tokens, so a segmented field reads as one of the family
 * rather than a lookalike. Shared by BetterDatePicker and TimeInput.
 *
 * `appearFocused` keeps the field looking focused while DOM focus sits
 * elsewhere — a picker's popover, say — mirroring TextInput's prop of the same
 * name. Fields without a popover can leave it off.
 */
export declare function useFieldStyles(size: TextInputSize, status: TextInputStatus, variant: TextInputVariant, appearFocused?: boolean): FieldStyles;
