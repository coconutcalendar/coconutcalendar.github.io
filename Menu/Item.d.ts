import type { ChangeEventHandler, Dispatch, JSXElementConstructor, MouseEventHandler, MutableRefObject, PropsWithChildren, ReactElement, Ref, RefObject } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
export type SubmenuActions = {
    type: SubmenuActionTypes.CloseAll;
} | {
    type: SubmenuActionTypes.CloseMenu;
} | {
    type: SubmenuActionTypes.OpenMenu;
} | {
    type: SubmenuActionTypes.RegisterMenu;
    id: string;
} | {
    type: SubmenuActionTypes.UnregisterMenu;
};
export declare enum SubmenuActionTypes {
    CloseAll = 0,
    OpenMenu = 1,
    CloseMenu = 2,
    RegisterMenu = 3,
    UnregisterMenu = 4
}
type SubmenuState = {
    id: string;
    ref: Ref<HTMLButtonElement>;
    show: boolean | undefined;
};
type UseSubmenuValues = [SubmenuState, Dispatch<SubmenuActions>];
export declare const useSubmenu: () => UseSubmenuValues;
type StartAdornmentProps = {
    /**
     * Whether to render the item as a checkbox
     */
    checkbox?: never;
    /**
     * The color of the checkbox
     */
    color?: never;
    /**
     * Element to display at the start of the input.
     * Ignored when the item is rendered as a checkbox
     */
    startAdornment?: JSXElementConstructor<unknown> | ReactElement;
} | {
    /**
     * Whether to render the item as a checkbox
     */
    checkbox?: true;
    /**
     * The color of the checkbox
     */
    color?: ItemColor;
    /**
     * Element to display at the start of the input.
     * Ignored when the item is rendered as a checkbox
     */
    startAdornment?: never;
};
export type ItemProps = {
    /**
     * Whether activating the item will perform an action as opposed to selecting that item
     * @default false
     */
    action?: boolean;
    /**
     * Reference to an element that should receive focus when the item becomes active
     */
    applyFocusRef?: RefObject<HTMLElement>;
    /**
     * Accessible label for the menu item
     */
    'aria-label'?: string;
    /**
     * Used for column filters in Table component
     */
    'data-key'?: string;
    /**
     * Custom data attributes to be added to the item element
     */
    dataSet?: Record<string, string | undefined>;
    /**
     * Initial checked state when the item is rendered as a checkbox
     * @default false
     */
    defaultChecked?: boolean;
    /**
     * If true, the item is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Icon to display at the end of the item
     */
    endAdornment?: typeof SvgIcon;
    /**
     * Whether to indent the item content (typically for alignment with checkboxes)
     * @default false
     */
    inset?: boolean;
    /**
     * Callback function invoked when the checkbox state changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Callback fired when the item is activated
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Whether activating the item should trigger selection and close the menu
     * @default true
     */
    selectable?: boolean;
    /**
     * Whether the item is currently selected
     */
    selected?: boolean;
    /**
     * Value associated with the item
     */
    value?: string;
} & StartAdornmentProps;
type ItemColor = 'error' | 'primary' | 'secondary';
export type MenuItemDataRef = MutableRefObject<{
    checkbox?: boolean;
    disabled: boolean;
    hasSubmenu: boolean;
    textValue?: string;
}>;
declare function Item({ action, applyFocusRef, 'aria-label': label, checkbox, children, color, 'data-key': key, dataSet, defaultChecked, disabled, endAdornment, inset, onChange, onClick, selectable, selected, startAdornment: StartAdornment, value, }: PropsWithChildren<ItemProps>, ref: Ref<HTMLButtonElement>): JSX.Element;
export default Item;
