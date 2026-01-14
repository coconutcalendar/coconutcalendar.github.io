import type { Focus } from '../utilities/calculateActiveIndex';
import type { MenuItemDataRef } from './Item';
export type Actions = {
    type: ActionTypes.CloseAll;
} | {
    type: ActionTypes.CloseMenu;
    external?: boolean;
} | {
    type: ActionTypes.CloseSubmenu;
} | {
    type: ActionTypes.OpenMenu;
} | {
    type: ActionTypes.OpenSubmenu;
    id: string;
} | {
    type: ActionTypes.GoToItem;
    focus: Focus.Specific;
    id: string;
} | {
    type: ActionTypes.GoToItem;
    focus: Exclude<Focus, Focus.Specific>;
} | {
    type: ActionTypes.SelectItem;
    id: string;
    keepShow?: boolean;
} | {
    type: ActionTypes.RefreshSelectedIndex;
} | {
    type: ActionTypes.Search;
    value: string;
} | {
    type: ActionTypes.ClearSearch;
} | {
    type: ActionTypes.RegisterItem;
    id: string;
    dataRef: MenuItemDataRef;
} | {
    type: ActionTypes.UnregisterItem;
    id: string;
} | {
    type: ActionTypes.UnregisterNotifyAction;
} | {
    type: ActionTypes.RegisterMultiSelect;
} | {
    type: ActionTypes.RegisterSelect;
};
export declare enum ActionTypes {
    CloseAll = 0,
    OpenMenu = 1,
    CloseMenu = 2,
    OpenSubmenu = 3,
    CloseSubmenu = 4,
    GoToItem = 5,
    SelectItem = 6,
    RefreshSelectedIndex = 7,
    Search = 8,
    ClearSearch = 9,
    RegisterItem = 10,
    UnregisterItem = 11,
    UnregisterNotifyAction = 12,
    RegisterMultiSelect = 13,
    RegisterSelect = 14
}
