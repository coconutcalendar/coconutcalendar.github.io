export type TextInputColor = 'default' | 'inverse';
export type TextInputSize = 'medium' | 'small';
export type TextInputStatus = 'default' | 'disabled' | 'error';
export type TextInputVariant = 'filled' | 'outlined';
export type TextInputSizes = {
    [key in TextInputSize]: string;
};
export type TextInputVariantsWithSizes = {
    [key in TextInputVariant]: TextInputSizes;
};
type TextInputStatuses = {
    [key in TextInputStatus]: string;
};
type TextInputStatuseColors = {
    [key in TextInputStatus]: {
        [key in TextInputColor]: string;
    };
};
type Adornments = {
    icon: string;
    multilineSize: TextInputVariantsWithSizes;
    size: TextInputVariantsWithSizes;
    text: TextInputStatuseColors;
};
type Labels = {
    focused: {
        [key in TextInputVariant]: string;
    };
    inactive: {
        [key in TextInputVariant]: string;
    };
    value: {
        [key in TextInputVariant]: string;
    };
};
type LabelColors = {
    focused: {
        [key in TextInputVariant]: TextInputStatuseColors;
    };
    inactive: {
        [key in TextInputVariant]: TextInputStatuseColors;
    };
    value: {
        [key in TextInputVariant]: TextInputStatuseColors;
    };
};
type Sizes = {
    [key in TextInputVariant]: TextInputSizes;
};
export type TextInputVariantsWithStatuses = {
    [key in TextInputVariant]: TextInputStatuses;
};
export type TextInputVariantsWithStatuseColors = {
    [key in TextInputVariant]: TextInputStatuseColors;
};
export declare const labels: Labels;
export declare const labelColors: LabelColors;
export declare const labelSpacing: {
    focused: {
        filled: {
            medium: string;
            small: string;
        };
        outlined: {
            medium: string;
            small: string;
        };
    };
    inactive: {
        filled: {
            medium: string;
            small: string;
        };
        outlined: {
            medium: string;
            small: string;
        };
    };
};
export declare const sizes: Sizes;
export declare const parentSizes: Sizes;
export declare const multilineSizes: Sizes;
export declare const inputVariants: TextInputStatuseColors;
export declare const focusedStyles: TextInputVariantsWithStatuseColors;
export declare const appearFocusedStyles: TextInputVariantsWithStatuseColors;
export declare const variants: TextInputVariantsWithStatuseColors;
export declare const adornments: Adornments;
export declare const baseClasses: {
    container: string;
    end: string;
    help: string;
    inputWrapper: string;
    input: string;
    label: string;
    start: string;
};
export {};
