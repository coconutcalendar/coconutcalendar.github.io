import type { ComputedPlacement } from '@popperjs/core';
import type { PropsWithChildren } from 'react';
export interface TooltipProps {
    /**
     * Whether to display an arrow pointing to the target element
     * @default false
     */
    arrow?: boolean;
    /**
     * The preferred placement of the tooltip relative to the target element
     * @default 'bottom'
     */
    placement?: ComputedPlacement;
    /**
     * The text content to display in the tooltip
     */
    title: string;
}
export interface InteractiveChildNode extends ChildNode {
    disabled?: boolean;
}
declare function Tooltip({ title, children, arrow, placement, }: PropsWithChildren<TooltipProps>): JSX.Element;
export default Tooltip;
