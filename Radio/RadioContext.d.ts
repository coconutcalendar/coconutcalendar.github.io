import type { Dispatch, SetStateAction } from 'react';
export type RadioGroupDirection = 'col' | 'inherit' | 'row';
export type RadioInputColor = 'primary' | 'secondary';
export type RadioInputSize = 'medium' | 'small';
export type StateDefiniton = {
    color?: RadioInputColor;
    direction?: RadioGroupDirection;
    disabled?: boolean;
    labelledBy?: string;
    name: string;
    size?: RadioInputSize;
    value: string | number;
};
type ContextDefinition = [
    StateDefiniton,
    Dispatch<SetStateAction<string | number>>,
    Dispatch<SetStateAction<string>>
];
declare const RadioContext: import("react").Context<ContextDefinition | null>;
declare const useRadio: () => ContextDefinition;
export { RadioContext, useRadio };
