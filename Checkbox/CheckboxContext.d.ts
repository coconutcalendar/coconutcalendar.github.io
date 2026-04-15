import type { Dispatch, SetStateAction } from 'react';
export type StateDefinition = {
    labelledBy?: string;
    name: string;
};
type ContextDefinition = [StateDefinition, Dispatch<SetStateAction<string>>];
declare const CheckboxContext: import("react").Context<ContextDefinition | null>;
declare const useCheckbox: () => ContextDefinition | null;
export { CheckboxContext, useCheckbox };
