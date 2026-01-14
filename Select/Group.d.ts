import type { PropsWithChildren, ReactNode } from 'react';
interface GroupProps {
    /**
     * The label for the group of options
     * @default null
     */
    label?: ReactNode;
}
declare function Group({ children, label, }: PropsWithChildren<GroupProps>): JSX.Element;
declare namespace Group {
    var uiName: string;
}
export default Group;
