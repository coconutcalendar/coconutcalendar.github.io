import type { MutableRefObject } from 'react';
interface WindowSizeState {
    height?: number;
    width?: number;
}
export declare function useWindowSize(ref: MutableRefObject<HTMLElement | null>): WindowSizeState;
export {};
