import type { PropsWithChildren, ReactNode } from 'react';
import { DisplayModes } from './Autocomplete';
interface GroupProps {
    /**
     * Controls when the group should be displayed based on search state.
     * If set to `always`, the group is always shown, regardless of the search term. When set to `withTerm`, the group is shown only when there is a search term entered. When set to `withoutTerm`, the group is shown only when there is no search term
     * @default DisplayModes.WithTerm
     */
    display?: DisplayModes;
    /**
     * The label for the group
     */
    label?: ReactNode;
}
declare function Group({ children, display, label, }: PropsWithChildren<GroupProps>): JSX.Element | null;
declare namespace Group {
    var uiName: string;
}
export default Group;
