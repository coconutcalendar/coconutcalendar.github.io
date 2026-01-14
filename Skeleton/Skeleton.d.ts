import type { PropsWithChildren } from 'react';
type CircularSkeletonProps = {
    /**
     * The animation style for the skeleton
     * @default 'pulse'
     */
    animation?: SkeletonAnimation;
    /**
     * The color scheme of the skeleton
     * @default 'dark'
     */
    color?: SkeletonColor;
    /**
     * The size of the skeleton height.
     * Not applicable for circular variant
     */
    height?: never;
    /**
     * The size of the skeleton width
     * @default 'medium'
     */
    width?: SkeletonWidth;
    /**
     * The shape variant of the skeleton
     * @default 'circle'
     */
    variant?: 'circle';
};
type RectangularSkeletonProps = {
    /**
     * The animation style for the skeleton
     * @default 'pulse'
     */
    animation?: SkeletonAnimation;
    /**
     * The color scheme of the skeleton
     * @default 'dark'
     */
    color?: SkeletonColor;
    /**
     * The size of the skeleton height.
     * Not applicable for circular variant
     */
    height?: SkeletonHeight;
    /**
     * The size of the skeleton width
     * @default 'medium'
     */
    width?: SkeletonWidth;
    /**
     * The shape variant of the skeleton
     * @default 'circle'
     */
    variant?: 'rounded' | 'square';
};
type SkeletonAnimation = 'pulse';
type SkeletonColor = 'light' | 'dark';
type SkeletonHeight = 'short' | 'medium' | 'long';
type SkeletonProps = CircularSkeletonProps | RectangularSkeletonProps;
type SkeletonWidth = 'short' | 'medium' | 'long';
declare function Skeleton({ animation, color, height, width, variant, }: PropsWithChildren<SkeletonProps>): JSX.Element;
export default Skeleton;
