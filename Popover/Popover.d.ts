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
     * Whether the popover is currently open
     * @default false
     */
    isOpen?: boolean;
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
declare function Popover({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, 'aria-describedby': ariaDescribedby, children, isOpen, offset, onOpenChange, placement, triggerRef, }: PopoverProps): JSX.Element;
export default Popover;
