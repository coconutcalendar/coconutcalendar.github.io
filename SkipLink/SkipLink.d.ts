import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
export interface SkipLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    /**
     * The target element ID to skip to
     */
    href: string;
    /**
     * Whether the skip link should be visible by default (for testing purposes)
     */
    visible?: boolean;
}
/**
 * SkipLink component provides keyboard users with the ability to skip
 * repetitive content and jump directly to main content areas.
 *
 * The link is visually hidden by default but becomes visible when focused,
 * meeting WCAG 2.1 Level AA guidelines for keyboard navigation.
 */
declare function SkipLink({ children, className, href, visible, ...rest }: PropsWithChildren<SkipLinkProps>): JSX.Element;
export default SkipLink;
