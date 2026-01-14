import type { PropsWithChildren } from 'react';
export declare enum Backdrops {
    Dark = 0,
    Light = 1
}
export declare enum Constraints {
    Default = 0,
    Screen = 1,
    Padded = 2
}
export interface DialogProps {
    /**
     * The backdrop style for the dialog overlay: Dark=0 (dark overlay), Light=1 (white overlay)
     * @default Backdrops.Dark
     */
    backdrop?: Backdrops;
    /**
     * The size constraint applied to the dialog: Default=0 (max width 36rem), Screen=1 (full-screen), Padded=2 (full-screen with 16rem margin all around)
     * @default Constraints.Default
     */
    constraint?: Constraints;
    /**
     * Whether the dialog can be dismissed by clicking the close button or the backdrop or pressing Escape.
     * When true, a close button will also be displayed in the dialog header
     * @default true
     */
    dismissable?: boolean;
    /**
     * Callback function invoked when the dialog is dismissed.
     * Only applicable if `dismissable` is true (default value)
     */
    onDismiss?: () => void;
    /**
     * Whether the dialog is currently open/visible
     * @default false
     */
    open?: boolean;
}
declare function Dialog({ backdrop, children, constraint, dismissable, onDismiss, open, }: PropsWithChildren<DialogProps>): JSX.Element | null;
declare namespace Dialog {
    var Actions: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Content: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Header: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
}
export default Dialog;
