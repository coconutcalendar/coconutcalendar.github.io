import type { Dispatch, SetStateAction } from 'react';
export type StateDefinition = {
    error: boolean;
    describedBy?: string;
    labelledBy?: string;
    groupId: string;
};
type ContextDefinition = [
    StateDefinition,
    Dispatch<SetStateAction<string | undefined>>
];
declare const CheckboxContext: import("react").Context<ContextDefinition>;
declare const useCheckbox: () => ContextDefinition;
export { CheckboxContext, useCheckbox };
