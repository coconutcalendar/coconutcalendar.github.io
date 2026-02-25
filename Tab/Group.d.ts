import type { Dispatch, PropsWithChildren, SetStateAction, MouseEventHandler } from 'react';
import React from 'react';
import type { TabColor, TabSize } from './Tab';
interface GroupProps {
    /**
     * The alignment of tabs within the group
     * @default 'stretch'
     */
    align?: TabAlign;
    /**
     * The orientation of the icon adornment relative to the tab content
     * @default 'vertical'
     */
    adornmentPosition?: Orientation;
    /**
     * The color scheme of the tabs
     * @default 'default'
     */
    color?: TabColor;
    /** The value of the tab that should be selected by default */
    defaultTab: string;
    /**
     * If true, all tabs in the group are disabled
     */
    disabled?: boolean;
    /**
     * Callback fired when any tab in the group is activated
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * The orientation of the tab group
     * @default 'horizontal'
     */
    orientation?: Orientation;
    /**
     * The size of the tabs in the group
     * @default 'large'
     */
    size?: TabSize;
}
export declare const TAB_ALIGN_VALUES: readonly ["left", "stretch", "right"];
export type TabAlign = typeof TAB_ALIGN_VALUES[number];
type GroupState = {
    align: TabAlign;
    color: TabColor;
    disabled?: boolean | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    selectedTab: string;
    setSelectedTab: Dispatch<SetStateAction<string>>;
    size: TabSize;
    adornmentPosition: Orientation;
};
export type Orientation = 'vertical' | 'horizontal';
export declare const GroupContext: React.Context<GroupState | null>;
export declare const useGroup: () => GroupState;
declare function Group({ align, children, color, defaultTab, disabled, onClick, orientation, size, adornmentPosition, }: PropsWithChildren<GroupProps>): JSX.Element;
export default Group;
