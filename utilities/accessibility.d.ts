/**
 * Accessibility utilities for WCAG compliance
 * Provides common functions for screen reader support, focus management, and accessibility validation
 */
/**
 * Announce a message to screen readers
 * Creates a temporary live region to announce important information
 */
export declare function announceToScreenReader(message: string, priority?: 'polite' | 'assertive'): void;
/**
 * Get all focusable elements within a container
 * Used for focus trap implementation and keyboard navigation
 */
export declare function getFocusableElements(container: HTMLElement): HTMLElement[];
/**
 * Check if an element is visible and can receive focus
 */
export declare function isVisible(element: HTMLElement): boolean;
/**
 * Safely focus an element with error handling
 * Returns true if focus was successful
 */
export declare function focusSafely(element: HTMLElement | null): boolean;
/**
 * Get the next focusable element in a given direction
 * Used for roving tabindex navigation
 */
export declare function getNextFocusableElement(currentElement: HTMLElement, direction: 'next' | 'previous', container?: HTMLElement): HTMLElement | null;
export declare function generateAccessibilityId(prefix?: string): string;
/**
 * Check if screen reader is likely active
 * Based on common screen reader behavior patterns
 */
export declare function isScreenReaderActive(): boolean;
/**
 * Debounce function for performance optimization
 * Used to limit frequency of expensive accessibility operations
 */
export declare function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Keyboard event utilities
 */
export declare const KeyCodes: {
    readonly ENTER: "Enter";
    readonly SPACE: " ";
    readonly TAB: "Tab";
    readonly ESCAPE: "Escape";
    readonly ARROW_UP: "ArrowUp";
    readonly ARROW_DOWN: "ArrowDown";
    readonly ARROW_LEFT: "ArrowLeft";
    readonly ARROW_RIGHT: "ArrowRight";
    readonly HOME: "Home";
    readonly END: "End";
    readonly PAGE_UP: "PageUp";
    readonly PAGE_DOWN: "PageDown";
};
/**
 * Check if a keyboard event matches expected key(s)
 */
export declare function isKeyPressed(event: KeyboardEvent, key: string | string[]): boolean;
/**
 * Prevent default behavior for specific keys
 * Useful for implementing custom keyboard navigation
 */
export declare function handleKeyboardNavigation(event: KeyboardEvent, handlers: Record<string, (event: KeyboardEvent) => void>): void;
