import type { PropsWithChildren } from 'react';
interface BaseProps {
    /**
     * If true, the divider is positioned absolutely at the bottom-left of its container
     * @default false
     */
    absolute?: boolean;
    /**
     * The component used for the root node
     * @default 'hr'
     */
    component?: DividerComponent;
}
type OrientationProps = {
    /**
     * The orientation of the divider
     * @default 'horizontal'
     */
    orientation?: 'horizontal';
    /**
     * If true and orientation is vertical, the divider will stretch to fill the height of its container
     * @default false
     */
    flex?: never;
} | {
    /**
     * The orientation of the divider
     * @default 'horizontal'
     */
    orientation: 'vertical';
    /**
     * If true and orientation is vertical, the divider will stretch to fill the height of its container
     * @default false
     */
    flex?: boolean;
};
type VariantProps = {
    /**
     * The size of the inset when variant is 'inset'
     * @default 'small'
     */
    insetSize?: DividerInsetSize;
    /**
     * Visual style variant of the divider
     * @default 'fullWidth'
     */
    variant: 'inset';
} | {
    /**
     * The size of the inset when variant is 'inset'
     * @default 'small'
     */
    insetSize?: never;
    /**
     * Visual style variant of the divider
     * @default 'fullWidth'
     */
    variant?: DividerVariant;
};
export type DividerProps = BaseProps & VariantProps & OrientationProps;
type DividerComponent = 'hr' | 'li';
type DividerInsetSize = 'small' | 'medium' | 'large';
type DividerVariant = 'fullWidth' | 'inset' | 'middle';
declare function Divider({ absolute, component: Component, flex, insetSize, orientation, variant, }: PropsWithChildren<DividerProps>): JSX.Element;
export default Divider;
