import type { KeyboardEventHandler, MouseEventHandler, MutableRefObject } from 'react';
interface ForwardClickActions<ElementType> {
    handleClick: MouseEventHandler<ElementType>;
    handleKeyDown: KeyboardEventHandler<ElementType>;
}
export declare function useForwardClick<ElementType extends HTMLElement>(ref: MutableRefObject<ElementType | null>, selector: string): ForwardClickActions<ElementType>;
export {};
