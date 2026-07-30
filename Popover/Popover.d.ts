import React from 'react';
import type { ReactNode } from 'react';
import type { PopoverProps as AriaPopoverProps } from 'react-aria-components';
export type PopoverPlacement = AriaPopoverProps['placement'] | 'center';
export interface PopoverProps {
    /**
     * Defines a string value that labels the popover
     */
    'aria-label'?: string;
    /**
     * Identifies the element (or elements) that labels the popover
     */
    'aria-labelledby'?: string;
    /**
     * Identifies the element (or elements) that describes the popover
     */
    'aria-describedby'?: string;
    /**
     * The content to display inside the popover
     */
    children: ReactNode;
    /**
     * Whether the popover is non-modal, allowing elements outside of it to be
     * interacted with while it is open
     */
    isNonModal?: boolean;
    /**
     * Whether the popover is open. When omitted it defaults to closed, unless
     * `contextDriven` is set — in which case the open state comes from the
     * surrounding React Aria trigger context
     */
    isOpen?: boolean;
    /**
     * Defer the open state and trigger anchoring to a surrounding React Aria
     * trigger context (e.g. DatePicker or DialogTrigger) rather than managing
     * them here. Leave this off (the default) for a standalone popover so it
     * stays closed until `isOpen` is set and never inherits an unrelated
     * overlay context such as a Drawer's
     */
    contextDriven?: boolean;
    /**
     * The distance in pixels between the trigger element and the popover
     * @default 8
     */
    offset?: number;
    /**
     * Callback fired when the popover open state changes
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * The placement of the popover relative to the trigger element
     * @default 'bottom'
     */
    placement?: PopoverPlacement;
    /**
     * Reference to the trigger element that opens the popover
     */
    triggerRef?: React.RefObject<HTMLElement>;
}
declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export default Popover;
