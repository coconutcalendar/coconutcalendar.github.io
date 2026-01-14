import type { PropsWithChildren, ReactNode } from 'react';
import type { AriaLiveRole } from '../utilities/aria';
interface BaseBadgeProps {
    /**
     * Accessible label for the badge
     */
    'aria-label'?: string;
    /**
     * The color scheme of the badge
     * @default 'default'
     */
    color?: BadgeColor;
    /**
     * If true, the badge will be hidden, both visually and from screen readers
     * @default false
     */
    invisible?: boolean;
    /**
     * Maximum value to display. If the value exceeds this, it will show {number}+ (e.g. 99+)
     * @default 99
     */
    max?: number;
    /**
     * The shape of the anchor element the badge overlaps
     * @default 'rectangle'
     */
    overlap?: BadgeOverlap;
    /**
     * The position of the badge relative to its anchor element
     * @default { x: 'right', y: 'top' }
     */
    position?: {
        x?: BadgeXPosition;
        y?: BadgeYPosition;
    };
    /**
     * [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) role for accessibility.
     * Use `alert` for important, time-sensitive information, or `status` for advisory information.
     */
    role?: AriaLiveRole.Alert | AriaLiveRole.Status;
    /**
     * If true, the badge will be visible when value is zero
     * @default false
     */
    showZero?: boolean;
    /**
     * The content value to display in the badge
     */
    value?: ReactNode;
    /**
     * The shape variant of the badge
     * @default 'default'
     */
    variant?: BadgeVariant;
}
type PresentationBadgeProps = {
    'aria-label'?: never;
    role: AriaLiveRole.Presentation;
} & Omit<BaseBadgeProps, 'aria-label' | 'role'>;
export type BadgeProps = BaseBadgeProps | PresentationBadgeProps;
type BadgeColor = 'default' | 'error' | 'primary' | 'secondary';
type BadgeXPosition = 'left' | 'right';
type BadgeYPosition = 'top' | 'bottom';
type BadgeOverlap = 'circle' | 'rectangle';
type BadgeVariant = 'default' | 'dot';
declare function Badge({ 'aria-label': label, children, color, value, invisible, max, overlap, role, showZero, variant, position, }: PropsWithChildren<BadgeProps>): JSX.Element;
export default Badge;
