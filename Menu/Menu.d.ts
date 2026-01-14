import type { Placement } from '@popperjs/core';
import type { Dispatch, MutableRefObject, PropsWithChildren, RefObject } from 'react';
import React from 'react';
import type { Actions } from './Actions';
import type { ButtonProps } from './Button';
import type { ItemProps, MenuItemDataRef, SubmenuActions } from './Item';
interface MenuProps {
    /**
     * Reference to an element that should receive focus when the menu closes
     */
    focusRef?: MutableRefObject<Pick<HTMLOrSVGElement, 'focus'>>;
    /**
     * Allows to render the menu with a custom component acting as its button trigger.
     * Used for displaying column filters in the Table component.
     * @default false
     */
    headless?: boolean;
    /**
     * Callback function invoked when the menu closes
     */
    onClose?: () => void;
    /**
     * Callback function invoked when the menu opens
     */
    onOpen?: () => void;
    /**
     * The preferred placement of the menu relative to the trigger button
     * @default 'bottom-start'
     */
    placement?: Placement;
}
interface MenuState {
    activeItemIndex: number | null;
    buttonRef: MutableRefObject<HTMLButtonElement | HTMLDivElement | HTMLLabelElement>;
    focusRef?: MutableRefObject<HTMLElement>;
    headless: boolean;
    itemsRef: MutableRefObject<HTMLUListElement>;
    items: {
        id: string;
        dataRef: MenuItemDataRef;
    }[];
    id: string;
    integratedMultiSelect: boolean;
    listbox: boolean;
    minWidth: string;
    onCloseRef: RefObject<() => void | undefined>;
    onOpenRef: RefObject<() => void | undefined>;
    parentItemRef: MutableRefObject<HTMLButtonElement>;
    parentRef: MutableRefObject<HTMLUListElement>;
    placement: Placement;
    search: string;
    searchable: boolean;
    selectedItem: {
        id: string | null;
        index: number | null;
    };
    show: boolean;
    notifyAction?: SubmenuActions;
    openSubmenuItemId: string | null;
}
type UseMenuValues = [MenuState, Dispatch<Actions>];
export declare const useMenu: () => UseMenuValues;
declare function Menu({ children, focusRef, headless, onClose, onOpen, placement, }: PropsWithChildren<MenuProps>): JSX.Element;
declare namespace Menu {
    var Button: React.ForwardRefExoticComponent<PropsWithChildren<ButtonProps> & React.RefAttributes<HTMLButtonElement>>;
    var Group: typeof import("./Group").default;
    var Item: React.ForwardRefExoticComponent<PropsWithChildren<ItemProps> & React.RefAttributes<HTMLButtonElement>>;
    var Items: React.ForwardRefExoticComponent<Omit<PropsWithChildren<Record<string, unknown>>, "ref"> & React.RefAttributes<HTMLUListElement>>;
}
export default Menu;
