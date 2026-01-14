import type { PropsWithChildren } from 'react';
export interface SvgIconProps {
    /**
     * The color of the icon
     * @default 'inherit'
     */
    color?: SvgIconColor;
    /**
     * The viewBox attribute for the SVG element
     * @default '0 0 24 24'
     */
    viewBox?: string;
}
export type SvgIconColor = 'default' | 'inherit' | 'primary' | 'secondary';
declare function SvgIcon({ children, color, viewBox, }: PropsWithChildren<SvgIconProps>): JSX.Element;
export default SvgIcon;
