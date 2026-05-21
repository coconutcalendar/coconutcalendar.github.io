/// <reference types="react" />
export interface DrawerContextValue {
    dismissable: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const DrawerContext: import("react").Context<DrawerContextValue | null>;
export declare const useDrawer: () => DrawerContextValue;
