import type { Dispatch, SetStateAction } from 'react';
export type CheckboxGroupDirection = 'col' | 'row';
export type StateDefinition = {
    direction?: CheckboxGroupDirection;
    labelledBy?: string;
};
type ContextDefinition = [StateDefinition, Dispatch<SetStateAction<string>>];
declare const CheckboxContext: import("react").Context<ContextDefinition | null>;
declare const useCheckbox: () => ContextDefinition | null;
export { CheckboxContext, useCheckbox };
