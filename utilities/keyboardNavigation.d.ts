/**
 * Keyboard navigation utilities for WCAG compliance
 * Provides standardized keyboard interaction patterns
 */
/**
 * Standard keyboard keys used in accessibility patterns
 */
export declare const KeyboardKeys: {
    readonly ENTER: "Enter";
    readonly SPACE: " ";
    readonly ESCAPE: "Escape";
    readonly TAB: "Tab";
    readonly ARROW_UP: "ArrowUp";
    readonly ARROW_DOWN: "ArrowDown";
    readonly ARROW_LEFT: "ArrowLeft";
    readonly ARROW_RIGHT: "ArrowRight";
    readonly HOME: "Home";
    readonly END: "End";
    readonly PAGE_UP: "PageUp";
    readonly PAGE_DOWN: "PageDown";
    readonly DELETE: "Delete";
    readonly BACKSPACE: "Backspace";
};
export type KeyboardKey = typeof KeyboardKeys[keyof typeof KeyboardKeys];
/**
 * Keyboard event handler type
 */
export type KeyboardEventHandler = (event: KeyboardEvent) => void;
/**
 * Keyboard navigation configuration
 */
export interface KeyboardNavigationConfig {
    /** Keys that trigger the action */
    keys: KeyboardKey[];
    /** Handler function */
    handler: KeyboardEventHandler;
    /** Whether to prevent default behavior */
    preventDefault?: boolean;
    /** Whether to stop event propagation */
    stopPropagation?: boolean;
    /** Additional condition to check before handling */
    condition?: (event: KeyboardEvent) => boolean;
}
/**
 * Creates a keyboard event handler with multiple key bindings
 */
export declare function createKeyboardHandler(configs: KeyboardNavigationConfig[]): (event: KeyboardEvent) => void;
/**
 * Standard keyboard navigation patterns
 */
export declare const KeyboardPatterns: {
    /**
     * Button activation pattern (Enter and Space)
     */
    readonly BUTTON_ACTIVATION: {
        readonly keys: readonly ["Enter", " "];
        readonly preventDefault: true;
    };
    /**
     * Escape to close pattern
     */
    readonly ESCAPE_TO_CLOSE: {
        readonly keys: readonly ["Escape"];
        readonly preventDefault: true;
    };
    /**
     * Arrow key navigation pattern (all directions)
     */
    readonly ARROW_NAVIGATION: {
        readonly keys: readonly ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        readonly preventDefault: true;
    };
    /**
     * Vertical arrow navigation
     */
    readonly VERTICAL_NAVIGATION: {
        readonly keys: readonly ["ArrowUp", "ArrowDown"];
        readonly preventDefault: true;
    };
    /**
     * Horizontal arrow navigation
     */
    readonly HORIZONTAL_NAVIGATION: {
        readonly keys: readonly ["ArrowLeft", "ArrowRight"];
        readonly preventDefault: true;
    };
    /**
     * Home/End navigation pattern
     */
    readonly HOME_END_NAVIGATION: {
        readonly keys: readonly ["Home", "End"];
        readonly preventDefault: true;
    };
};
/**
 * Check if a key matches a pattern
 */
export declare function isKeyMatch(key: string, pattern: readonly KeyboardKey[]): boolean;
/**
 * Check if event is an activation key (Enter or Space)
 */
export declare function isActivationKey(event: KeyboardEvent): boolean;
/**
 * Check if event is an arrow key
 */
export declare function isArrowKey(event: KeyboardEvent): boolean;
/**
 * Check if event is a vertical navigation key (Up/Down arrows)
 */
export declare function isVerticalNavigationKey(event: KeyboardEvent): boolean;
/**
 * Check if event is a horizontal navigation key (Left/Right arrows)
 */
export declare function isHorizontalNavigationKey(event: KeyboardEvent): boolean;
/**
 * Get navigation direction from arrow key event
 */
export declare function getNavigationDirection(event: KeyboardEvent): 'up' | 'down' | 'left' | 'right' | null;
/**
 * Check if event should close/dismiss (Escape key)
 */
export declare function isCloseKey(event: KeyboardEvent): boolean;
/**
 * Check if event is Tab navigation
 */
export declare function isTabKey(event: KeyboardEvent): boolean;
/**
 * Standard keyboard event utilities
 */
export declare const KeyboardUtils: {
    /**
     * Prevent default and stop propagation
     */
    cancelEvent: (event: KeyboardEvent) => void;
    /**
     * Check if event has modifier keys
     */
    hasModifierKeys: (event: KeyboardEvent) => boolean;
    /**
     * Check if event is only Shift+Tab (for reverse tab navigation)
     */
    isShiftTab: (event: KeyboardEvent) => boolean;
    /**
     * Check if event is only Tab (no modifiers except Shift)
     */
    isPlainTab: (event: KeyboardEvent) => boolean;
};
/**
 * Keyboard navigation hook for handling multiple key patterns
 */
export declare function createNavigationHandler(element: HTMLElement, configs: KeyboardNavigationConfig[]): {
    attach: () => void;
    detach: () => void;
    handler: (event: KeyboardEvent) => void;
};
/**
 * ARIA keyboard navigation helpers
 */
export declare const AriaNavigation: {
    /**
     * Handle standard menu navigation
     * Up/Down arrows move between items, Enter/Space activates
     */
    menuNavigation: (event: KeyboardEvent, items: HTMLElement[], currentIndex: number, callbacks: {
        onNavigate: (newIndex: number) => void;
        onActivate: (index: number) => void;
        onClose?: (() => void) | undefined;
    }) => void;
    /**
     * Handle tab navigation
     * Left/Right arrows move between tabs, Enter/Space activates
     */
    tabNavigation: (event: KeyboardEvent, tabs: HTMLElement[], currentIndex: number, callbacks: {
        onNavigate: (newIndex: number) => void;
        onActivate: (index: number) => void;
    }) => void;
    /**
     * Handle grid navigation (2D navigation with arrow keys)
     */
    gridNavigation: (event: KeyboardEvent, gridSize: {
        rows: number;
        cols: number;
    }, currentPosition: {
        row: number;
        col: number;
    }, callbacks: {
        onNavigate: (newPosition: {
            row: number;
            col: number;
        }) => void;
        onActivate: (position: {
            row: number;
            col: number;
        }) => void;
    }) => void;
};
