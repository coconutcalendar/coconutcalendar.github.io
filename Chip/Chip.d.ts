import type { EventHandler, KeyboardEvent, MouseEvent } from 'react';
export interface ChipsProps {
    /**
     * The color scheme of the chip
     * @default 'default'
     */
    color?: ChipColor;
    /**
     * If true, the chip is be disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The text content displayed in the chip
     */
    label: string;
    /**
     * Callback fired when the chip is activated
     */
    onClick?: EventHandler<KeyboardEvent | MouseEvent>;
    /**
     * Callback fired when the delete icon is activated.
     * If provided, a delete icon will be displayed
     */
    onDelete?: EventHandler<KeyboardEvent | MouseEvent>;
    /**
     * The size of the chip
     * @default 'medium'
     */
    size?: ChipSize;
    /**
     * Element or text to display at the start of the chip.
     * Can be an icon or a single letter
     */
    startAdornment?: JSX.Element | string;
    /**
     * The visual style variant of the chip
     * @default 'contained'
     */
    variant?: ChipVariant;
}
type ChipColor = 'default' | 'primary' | 'secondary';
type ChipSize = 'medium' | 'small';
type ChipVariant = 'contained' | 'outlined';
declare function Chip({ color, disabled, label, onClick, onDelete, size, startAdornment, variant, }: ChipsProps): JSX.Element;
export default Chip;
