import type { PropsWithChildren } from 'react';
type PortalProps = {
    /**
     * If true, the portal will be accessible to screen readers
     * @default false
     */
    discoverable?: boolean;
    /**
     * If true, the portal is rendered as a menu attached to a parent node
     */
    isMenu?: never;
    /**
     * If true, the portal is displayed
     */
    open: boolean;
    /**
     * The parent DOM node to attach the menu portal to. Required when isMenu is true
     */
    parent?: never;
} | {
    /**
     * If true, the portal will be accessible to screen readers
     * @default false
     */
    discoverable?: boolean;
    /**
     * If true, the portal is rendered as a menu attached to a parent node
     */
    isMenu?: true;
    /**
     * If true, the portal is displayed
     */
    open: boolean;
    /**
     * The parent DOM node to attach the menu portal to. Required when isMenu is true
     */
    parent?: Node | null;
};
declare function Portal({ children, discoverable, // some portals should never be hidden from SRs
isMenu, open, parent, }: PropsWithChildren<PortalProps>): JSX.Element | null;
export default Portal;
