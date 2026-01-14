import type { MouseEventHandler, PropsWithChildren } from 'react';
import { AriaLiveRole } from '../utilities/aria';
interface SnackbarProps {
    /**
     * The anchor position of the snackbar on the screen
     */
    anchorOrigin: AnchorOrigin;
    /**
     * The number of milliseconds to wait before automatically hiding the snackbar
     */
    autoHideDuration?: number;
    /**
     * Whether the snackbar is currently open/visible
     * @default true
     */
    open?: boolean;
    /**
     * [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) role for accessibility.
     * Use `alert` for important, time-sensitive information, or `status` for advisory information
     * @default AriaLiveRole.Alert
     */
    role?: AriaLiveRole.Alert | AriaLiveRole.Status;
    /**
     * The severity level that determines the color scheme and default icon
     * @default 'success'
     */
    severity?: Severity;
}
type Severity = 'error' | 'info' | 'success' | 'warning';
type HorizontalAchorOrigin = 'center' | 'left' | 'right';
type VerticalAnchorOrigin = 'bottom' | 'center' | 'top';
type AnchorOrigin = {
    horizontal: HorizontalAchorOrigin;
    vertical: VerticalAnchorOrigin;
};
declare function Snackbar({ anchorOrigin: { horizontal, vertical }, autoHideDuration, children, open, role, severity, }: PropsWithChildren<SnackbarProps>): JSX.Element | null;
declare namespace Snackbar {
    var Actions: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Button: ({ children, dataSet, onClick, }: PropsWithChildren<ButtonProps>) => JSX.Element;
    var Content: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Description: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Title: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
}
interface ButtonProps {
    /**
     * Custom data attributes to be added to the button element
     */
    dataSet?: Record<string, string | undefined>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export default Snackbar;
