import type { PropsWithChildren, ReactNode } from 'react';
interface GroupProps {
    /**
     * The label for the group of menu items
     */
    label?: ReactNode;
}
declare function Group({ children, label, }: PropsWithChildren<GroupProps>): JSX.Element;
export default Group;
