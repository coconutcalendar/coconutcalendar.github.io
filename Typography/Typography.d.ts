import type { ElementType, PropsWithChildren } from 'react';
interface TypographyProps {
    /**
     * The color of the text
     * @default 'initial'
     */
    color?: TypographyColor;
    /**
     * The component used for the root node
     * @default 'span'
     */
    component?: ElementType;
    /**
     * If true, the overflow text will be truncated with an ellipsis.
     * Recommended to avoid truncation as it typically causes accessibility issues
     * @default false
     */
    truncate?: boolean;
    /**
     * The visual style variant to apply.
     * This controls the font size, weight, and line height, but not the HTML tag used.
     * @default 'body1'
     */
    variant?: TypographyVariant;
}
type TypographyColor = 'initial' | 'inherit' | 'inverse';
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
declare function Typography({ children, color, component: Component, truncate, variant, }: PropsWithChildren<TypographyProps>): JSX.Element;
export default Typography;
