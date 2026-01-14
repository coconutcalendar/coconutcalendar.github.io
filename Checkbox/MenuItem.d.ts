import type { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
type SvgIconComponent = {
    uiName: 'SvgIcon';
    (props: {
        color: string;
    }): JSX.Element;
};
export interface CheckboxProps {
    active: boolean;
    checked: boolean;
    color?: CheckboxColor;
    disabled?: boolean;
    endAdornment?: SvgIconComponent | ReactNode;
    constrained?: boolean;
    id: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}
type CheckboxColor = 'primary' | 'secondary';
declare function MenuItem({ active, endAdornment, children, color, checked, disabled, id, onClick, }: PropsWithChildren<CheckboxProps>): JSX.Element;
export default MenuItem;
