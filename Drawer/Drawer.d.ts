import type { ReactNode } from 'react';
import { Backdrops } from '../Dialog/Dialog';
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export interface DrawerProps {
    /**
     * A label that describes the drawer for screen readers.
     */
    ariaLabel?: string;
    /**
     * The id of an element that labels the drawer for screen readers.
     */
    ariaLabelledBy?: string;
    /**
     * The backdrop style for the drawer overlay: Dark=0 (dark overlay), Light=1 (white overlay)
     * @default Backdrops.Dark
     */
    backdrop?: Backdrops;
    /**
     * The content to display inside the drawer panel
     */
    children: ReactNode;
    /**
     * Whether the overlay behind the drawer panel is blurred
     * @default true
     */
    backdropBlurred?: boolean;
    /**
     * Whether the drawer can be dismissed by clicking the overlay or pressing Escape
     * @default true
     */
    dismissable?: boolean;
    /**
     * Whether the drawer is currently open
     */
    open?: boolean;
    /**
     * Callback fired when the drawer open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Offsets the drawer panel from one or more edges of the screen.
     * The overlay always remains full-screen regardless of this value.
     * @example { top: '64px' }
     */
    panelOffset?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    /**
     * The edge of the screen the drawer slides in from
     * @default 'right'
     */
    placement?: DrawerPlacement;
}
declare function Drawer({ ariaLabel, ariaLabelledBy, backdrop, backdropBlurred, children, dismissable, open, onOpenChange, panelOffset, placement, }: DrawerProps): JSX.Element;
declare namespace Drawer {
    var Header: typeof import("./Header").default;
}
export default Drawer;
