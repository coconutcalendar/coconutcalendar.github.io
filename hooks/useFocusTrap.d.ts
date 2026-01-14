import type { RefObject } from 'react';
/**
 * Focus trap hook for modal dialogs and overlay components
 * Ensures focus stays within the specified container
 */
export declare function useFocusTrap(containerRef: RefObject<HTMLElement>, isActive?: boolean, options?: {
    initialFocus?: 'first' | 'last' | HTMLElement | null;
    returnFocus?: boolean;
}): {
    /**
     * Manually move focus to the first focusable element
     */
    focusFirst: () => void;
    /**
     * Manually move focus to the last focusable element
     */
    focusLast: () => void;
};
/**
 * Roving tabindex hook for components with arrow key navigation
 * Used in menus, tabs, toolbars, and other composite widgets
 */
export declare function useRovingTabindex(containerRef: RefObject<HTMLElement>, isActive?: boolean, options?: {
    direction?: 'horizontal' | 'vertical' | 'both';
    wrap?: boolean;
    defaultIndex?: number;
}): {
    /**
     * Programmatically set the active index
     */
    setActiveIndex: (index: number) => void;
    /**
     * Get the current active index
     */
    getActiveIndex: () => number;
};
/**
 * Focus restoration hook
 * Automatically returns focus to the triggering element when a component unmounts
 */
export declare function useFocusRestore(shouldRestore?: boolean): import("react").MutableRefObject<HTMLElement | null>;
/**
 * Auto-focus hook
 * Automatically focuses an element when the component mounts
 */
export declare function useAutoFocus(elementRef: RefObject<HTMLElement>, shouldFocus?: boolean, delay?: number): void;
