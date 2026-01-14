import type { MouseEventHandler, PropsWithChildren } from 'react';
import { AriaLiveRole } from '../utilities/aria';
export interface AlertProps {
    /**
     * Custom icon to display as a start adornment of the alert. If not provided, a default icon based on the severity will be used
     */
    icon?: JSX.Element | null;
    /**
     * [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) role for accessibility.
     * Use `alert` for important, time-sensitive information, or `status` for advisory information
     * @default 'alert'
     */
    role?: AriaLiveRole.Alert | AriaLiveRole.Status;
    /**
     * The severity level that determines the color scheme and default icon
     * @default 'success'
     */
    severity?: AlertSeverity;
    /**
     * The visual style variant of the alert.
     * `filled` uses solid background colors, `minimal` uses lighter background colors
     * @default 'filled'
     */
    variant?: AlertVariant;
}
type AlertVariant = 'filled' | 'minimal';
type AlertSeverity = 'info' | 'error' | 'loading' | 'success' | 'warning';
declare function Alert({ children, icon, role, severity, variant, }: PropsWithChildren<AlertProps>): JSX.Element;
declare namespace Alert {
    var Button: typeof AlertButton;
    var Content: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Description: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Title: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var Actions: ({ children, }: PropsWithChildren<Record<string, unknown>>) => JSX.Element;
    var displayName: string;
}
interface AlertButtonProps {
    /**
     * Custom data attributes to be added to the button element
     */
    dataSet?: Record<string, string | undefined>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function AlertButton({ children, dataSet, onClick, }: PropsWithChildren<AlertButtonProps>): JSX.Element;
export default Alert;
