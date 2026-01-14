import type { ReactNode } from 'react';
import type { SidebarProps } from './Sidebar';
export interface LayoutProps {
    children?: ReactNode;
    className?: string;
    sidebar?: ReactNode;
    sidebarProps?: Omit<SidebarProps, 'children'>;
}
declare function Layout({ children, className, sidebar, sidebarProps }: LayoutProps): JSX.Element;
export default Layout;
