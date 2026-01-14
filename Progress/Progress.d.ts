import type { PropsWithChildren } from 'react';
import type { AriaLiveRole } from '../utilities/aria';
type DescriptionProps = {
    /**
     * If true, applies inverse color scheme for dark backgrounds
     * @default false
     */
    inverse?: boolean;
    /**
     * [ARIA live region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) role for accessibility.
     * Use `alert` for important, time-sensitive information, `status` for advisory information or `presentation` when it should be hidden from the accessibility tree.
     */
    role?: AriaLiveRole;
};
type BaseProgressProps = {
    /**
     * Accessible label for the progress indicator.
     * This should describe the purpose of the progress, such as "Loading data" or "Uploading file".
     * This label must be provided if either `aria-labelledby` or the visible description is not used.
     */
    'aria-label'?: string;
    /**
     * The id attribute of the element that labels the progress indicator.
     * The element with this id should describe the purpose of the progress, such as "Loading data" or "Uploading file".
     * This label must be provided if either `aria-label` or the visible description is not used.
     */
    'aria-labelledby'?: string;
    /**
     * Human-readable text alternative for the current value
     */
    'aria-valuetext'?: string;
    /**
     * The color scheme of the progress indicator
     * @default 'primary'
     */
    color?: ProgressColor;
    /**
     * The id attribute of the progress element
     */
    id?: string;
    /**
     * The size of the progress indicator
     * @default 'large'
     */
    size?: ProgressSize;
    /**
     * The visual style variant of the progress indicator
     * @default 'linear'
     */
    variant?: ProgressVariant;
};
type DeterminateProgressProps = BaseProgressProps & {
    /**
     * Current progress value (0-100)
     */
    value: number;
};
type IndeterminateProgressProps = BaseProgressProps & {
    /**
     * Current progress value (0-100)
     */
    value?: never;
};
type ProgressColor = 'info' | 'inverse' | 'primary' | 'secondary';
type ProgressColors = {
    [key in ProgressColor]: {
        bar: {
            circular: string;
            linear: string;
        };
        track: {
            linear: string;
        };
    };
};
type ProgressProps = DeterminateProgressProps | IndeterminateProgressProps;
type ProgressVariant = 'circular' | 'linear';
export type ProgressSize = 'large' | 'medium' | 'small';
export type ProgressVariantProps = {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-valuetext'?: string;
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    color: ProgressColor;
    id?: string;
    size?: ProgressSize;
    value?: number;
};
export declare const colors: ProgressColors;
declare function Progress({ 'aria-label': label, 'aria-labelledby': labelledBy, 'aria-valuetext': valueText, children, color, id, size, value, variant, }: PropsWithChildren<ProgressProps>): JSX.Element;
declare namespace Progress {
    var Description: ({ children, inverse, role, }: PropsWithChildren<DescriptionProps>) => JSX.Element;
}
export default Progress;
