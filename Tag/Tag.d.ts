import type SvgIcon from '../SvgIcon/SvgIcon';
import type { AllColors } from '../utilities/colors';
export interface TagProps {
    /**
     * The color scheme of the tag
     * @default 'default'
     */
    color?: TagColor;
    /**
     * The text content displayed in the tag
     */
    label: string;
    /**
     * The size of the tag
     * @default 'medium'
     */
    size?: TagSize;
    /**
     * Icon to display at the start of the tag
     */
    startAdornment?: typeof SvgIcon;
}
type TagSize = 'large' | 'medium' | 'small';
type TagColor = AllColors;
type TagColorStyles = {
    root: string;
    text: string;
    icon: string;
};
type TagColors = {
    [key in TagColor]: TagColorStyles;
};
export declare const colors: TagColors;
declare function Tag({ color, label, size, startAdornment: StartAdornment, }: TagProps): JSX.Element;
export default Tag;
