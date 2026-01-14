import type { MouseEventHandler, ReactNode } from 'react';
export interface SidebarProps {
    children?: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    primaryNavAriaLabel?: string;
    secondaryNavAriaLabel?: string;
}
export interface SidebarImageProps {
    alt: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLImageElement>;
    src: string;
}
export interface SidebarNavProps {
    'aria-label'?: string;
    children?: ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary';
}
export interface SidebarNavItemProps {
    children?: ReactNode;
    className?: string;
    href?: string;
    isActive?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}
declare function SidebarImage({ alt, className, onClick, src, }: SidebarImageProps): JSX.Element;
declare function SidebarNav({ 'aria-label': ariaLabel, children, className, variant, }: SidebarNavProps): JSX.Element;
declare function SidebarNavItem({ children, className, href, isActive, onClick, }: SidebarNavItemProps): JSX.Element;
declare function Sidebar({ children, className, onClick, primaryNavAriaLabel, secondaryNavAriaLabel, }: SidebarProps): JSX.Element;
declare namespace Sidebar {
    var Image: typeof SidebarImage;
    var Nav: typeof SidebarNav;
    var NavItem: typeof SidebarNavItem;
}
export default Sidebar;
