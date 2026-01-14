import type { ReactNode } from 'react';
export type MultiSelectValue = Record<string, {
    checked: boolean;
    label?: ReactNode;
    textLabel?: string;
    disabled?: boolean;
    handleClear?: () => void;
}>;
export type Actions = {
    type: ActionTypes.SetActions;
    actions: ReactNode;
} | {
    type: ActionTypes.SelectOption;
    value: MultiSelectValue;
} | {
    type: ActionTypes.UnselectOptions;
    keys: string[];
};
export declare enum ActionTypes {
    SetActions = 0,
    SelectOption = 1,
    UnselectOptions = 2
}
