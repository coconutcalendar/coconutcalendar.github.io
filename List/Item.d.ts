import React from 'react';
import type { Dispatch, EventHandler, ReactElement, FocusEventHandler, KeyboardEvent, MouseEvent, MouseEventHandler, ReactNode } from 'react';
import type { NestedListActions } from './Actions';
import { NestedListActionTypes } from './Actions';
export type ItemState = {
    itemState: ListItemStateType;
    nestedListId: string | undefined;
    open: boolean;
};
export declare const ItemContext: React.Context<UseItemValues | null>;
export type ListItemEndAdornmentType = 'element' | 'icon' | 'icon-button';
export type ListItemStartAdornmentType = 'avatar' | 'checkbox' | 'icon';
export type ListItemStateType = 'default' | 'disabled' | 'selected' | 'inverse';
export interface ItemProps {
    /**
     * Nested list component to be rendered when the item is expandable
     */
    children?: ReactElement;
    /**
     * If true, the nested list will be open by default.
     * Only applies if the item has a nested list
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * If true, the item is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Content to be displayed at the end of the list item
     */
    endAdornment?: ReactNode;
    /**
     * The type of end adornment element
     * @default 'icon'
     */
    endAdornmentType?: ListItemEndAdornmentType;
    /**
     * Adds left padding to align with other items that have a start adornment
     */
    inset?: ListItemStartAdornmentType;
    /**
     * If true, applies inverse color scheme for dark backgrounds
     * @default false
     */
    inverse?: boolean;
    /**
     * Callback fired when the item loses focus
     */
    onBlur?: FocusEventHandler<HTMLElement>;
    /**
     * Callback fired when the item is activated
     */
    onClick?: EventHandler<KeyboardEvent | MouseEvent>;
    /**
     * Callback fired when the item receives focus
     */
    onFocus?: FocusEventHandler<HTMLElement>;
    /**
     * Callback fired when the mouse enters the item
     */
    onMouseEnter?: MouseEventHandler<HTMLElement>;
    /**
     * Callback fired when the mouse leaves the item
     */
    onMouseLeave?: MouseEventHandler<HTMLElement>;
    /**
     * The primary text content of the list item
     */
    primary?: ReactNode;
    /**
     * The secondary text content displayed below the primary text
     */
    secondary?: ReactNode;
    /**
     * If true, the item will be visually marked as selected
     * @default false
     */
    selected?: boolean;
    /**
     * Content to be displayed at the start of the list item
     */
    startAdornment?: ReactNode;
    /**
     * The type of start adornment element
     * @default 'icon'
     */
    startAdornmentType?: ListItemStartAdornmentType;
}
export type ItemReducers = {
    [ActionType in NestedListActionTypes]: (state: ItemState, action: NestedListActions) => ItemState;
};
export declare const reducers: ItemReducers;
type UseItemValues = [ItemState, Dispatch<NestedListActions> | null];
export declare const useItem: () => UseItemValues;
declare function Item({ children, defaultOpen, disabled, endAdornment, endAdornmentType, inset, inverse, onBlur, onClick, onFocus, onMouseEnter, onMouseLeave, primary, secondary, selected, startAdornment, startAdornmentType, }: ItemProps): JSX.Element;
export default Item;
