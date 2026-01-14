import type { PropsWithChildren, ReactNode } from 'react';
import type { AllColors } from '../utilities/colors';
export interface AvatarProps {
    /**
     * Accessible label for the avatar.
     * If not provided, the `name` prop is be used
     */
    'aria-label'?: string;
    /**
     * The content to display as initials in the avatar. If a string is given, it will extract up to 2 capital letters or first letters of words. Otherwise, the provided content will be rendered as is
     */
    children?: ReactNode;
    /**
     * The color scheme of the avatar background and text
     * @default 'default'
     */
    color?: AvatarColor;
    /**
     * The name to display as initials in the avatar.
     * Will extract up to 2 capital letters or first letters of words
     */
    name?: string;
    /**
     * The shape variant of the avatar
     * @default 'circle'
     */
    variant?: AvatarVariant;
}
export type AvatarColor = AllColors | 'green';
type AvatarColors = {
    [key in AllColors | 'green']: string;
};
type AvatarVariant = 'circle' | 'rounded' | 'square';
export declare const colors: AvatarColors;
declare function Avatar({ 'aria-label': label, children, color, name, variant, }: PropsWithChildren<AvatarProps>): JSX.Element;
export default Avatar;
