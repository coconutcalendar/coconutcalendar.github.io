import type { MouseEventHandler, PropsWithChildren } from 'react';
export interface LinkProps {
    /**
     * Custom data attributes to be added to the link element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * Whether the link opens in a new tab with rel="noreferrer"
     * @default false
     */
    external?: boolean;
    /**
     * The URL that the link points to
     */
    href: string;
    /**
     * The id attribute of the link element
     */
    id?: string;
    /**
     * Callback fired when the link is activated
     */
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    /**
     * The size of the link text
     * @default "default"
     */
    size?: LinkSize;
}
type LinkSize = 'default' | 'small';
declare function Link({ children, dataSet, external, href, id, onClick, size, }: PropsWithChildren<LinkProps>): JSX.Element;
export default Link;
