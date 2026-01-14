import type { Dispatch, SetStateAction } from 'react';
type ProgressState = string | undefined;
type UseProgressValues = [
    ProgressState,
    Dispatch<SetStateAction<ProgressState>>
];
export declare const ProgressContext: import("react").Context<UseProgressValues | null>;
export declare const useProgress: () => UseProgressValues;
export {};
