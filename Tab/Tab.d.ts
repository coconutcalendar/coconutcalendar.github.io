import type { AriaAttributes, MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import type SvgIcon from '../SvgIcon/SvgIcon';
interface TabProps {
    /**
     * Identifies the element whose controlled by the tab.
     * The id should match the corresponding `tabpanel` (elelment that has a tabpanel role)
     * */
    'aria-controls'?: AriaAttributes['aria-controls'];
    /**
     * The content to display inside the tab.
     * It should have a `tabpanel` role and an id attribute that matches the `aria-controls` prop
     */
    children?: ReactNode & {
        type?: {
            uiName?: string;
        };
    };
    /** The color scheme of the tab */
    color?: TabColor;
    /** Whether the tab is disabled */
    disabled?: boolean;
    /**
     * The id attribute of the tab element
     */
    id?: string;
    /**
     * Callback fired when the tab is activated
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * The size of the tab
     */
    size?: TabSize;
    /** Icon or text to display at the start of the tab label */
    startAdornment?: typeof SvgIcon;
    /**
     * Value associated with the tab
     */
    value: string;
}
export type TabColor = 'default' | 'primary' | 'secondary';
export type TabSize = 'large' | 'medium' | 'small';
declare function Tab({ 'aria-controls': controls, children, color, disabled, id, onClick, size, startAdornment: StartAdornment, value, }: PropsWithChildren<TabProps>): JSX.Element;
declare namespace Tab {
    var Group: typeof import("./Group").default;
}
export default Tab;
