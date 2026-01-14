/**
 * TypeScript interfaces for accessibility contracts and WCAG compliance
 * Provides type safety for accessibility-related props and configurations
 */
/// <reference types="react" />
/**
 * WCAG compliance levels
 */
export type WCAGLevel = 'A' | 'AA' | 'AAA';
/**
 * ARIA roles (comprehensive list of valid ARIA roles)
 */
export type AriaRole = 'button' | 'checkbox' | 'gridcell' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'progressbar' | 'radio' | 'scrollbar' | 'searchbox' | 'slider' | 'spinbutton' | 'switch' | 'tab' | 'tabpanel' | 'textbox' | 'treeitem' | 'combobox' | 'grid' | 'listbox' | 'menu' | 'menubar' | 'radiogroup' | 'tablist' | 'tree' | 'treegrid' | 'application' | 'article' | 'cell' | 'columnheader' | 'definition' | 'directory' | 'document' | 'group' | 'heading' | 'img' | 'list' | 'listitem' | 'math' | 'none' | 'note' | 'presentation' | 'row' | 'rowgroup' | 'rowheader' | 'separator' | 'toolbar' | 'banner' | 'complementary' | 'contentinfo' | 'form' | 'main' | 'navigation' | 'region' | 'search' | 'alert' | 'log' | 'marquee' | 'status' | 'timer' | 'alertdialog' | 'dialog' | 'tooltip';
/**
 * ARIA properties (most commonly used)
 */
export interface AriaAttributes {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-expanded'?: boolean | 'true' | 'false';
    'aria-hidden'?: boolean | 'true' | 'false';
    'aria-disabled'?: boolean | 'true' | 'false';
    'aria-readonly'?: boolean | 'true' | 'false';
    'aria-required'?: boolean | 'true' | 'false';
    'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling';
    'aria-checked'?: boolean | 'true' | 'false' | 'mixed';
    'aria-pressed'?: boolean | 'true' | 'false' | 'mixed';
    'aria-selected'?: boolean | 'true' | 'false';
    'aria-current'?: boolean | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time';
    'aria-live'?: 'off' | 'polite' | 'assertive';
    'aria-atomic'?: boolean | 'true' | 'false';
    'aria-busy'?: boolean | 'true' | 'false';
    'aria-controls'?: string;
    'aria-owns'?: string;
    'aria-activedescendant'?: string;
    'aria-haspopup'?: boolean | 'true' | 'false' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    'aria-orientation'?: 'horizontal' | 'vertical';
    'aria-valuemin'?: number;
    'aria-valuemax'?: number;
    'aria-valuenow'?: number;
    'aria-valuetext'?: string;
    'aria-level'?: number;
    'aria-setsize'?: number;
    'aria-posinset'?: number;
    'aria-multiline'?: boolean | 'true' | 'false';
    'aria-multiselectable'?: boolean | 'true' | 'false';
    'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
    'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
    'aria-modal'?: boolean | 'true' | 'false';
}
/**
 * Base accessibility props that all components should support
 */
export interface BaseAccessibilityProps extends AriaAttributes {
    /** Component role for assistive technologies */
    role?: AriaRole;
    /** Unique identifier for the element */
    id?: string;
    /** Tab index for keyboard navigation control */
    tabIndex?: number;
    /** CSS class name for styling */
    className?: string;
    /** Test identifier for automated testing */
    'data-testid'?: string;
}
/**
 * Focus management options
 */
export interface FocusManagementOptions {
    /** Whether the element should receive focus automatically */
    autoFocus?: boolean;
    /** Whether focus should be trapped within the element */
    trapFocus?: boolean;
    /** Whether focus should be restored when the element unmounts */
    restoreFocus?: boolean;
    /** Initial focus target within the element */
    initialFocus?: 'first' | 'last' | HTMLElement | null;
}
/**
 * Keyboard navigation configuration
 */
export interface KeyboardNavigationConfig {
    /** Whether keyboard navigation is enabled */
    enableKeyboardNavigation?: boolean;
    /** Navigation direction (for arrow keys) */
    navigationDirection?: 'horizontal' | 'vertical' | 'both';
    /** Whether navigation should wrap around */
    wrapNavigation?: boolean;
    /** Custom key handlers */
    onKeyDown?: (event: KeyboardEvent) => void;
    /** Keys that should activate the element */
    activationKeys?: string[];
    /** Keys that should close/dismiss the element */
    escapeKeys?: string[];
}
/**
 * Screen reader specific options
 */
export interface ScreenReaderOptions {
    /** Whether announcements are enabled */
    enableAnnouncements?: boolean;
    /** Live region politeness level */
    liveRegionPoliteness?: 'off' | 'polite' | 'assertive';
    /** Whether to announce state changes */
    announceStateChanges?: boolean;
    /** Custom announcement messages */
    announcements?: {
        onOpen?: string;
        onClose?: string;
        onSelect?: string;
        onError?: string;
        onSuccess?: string;
    };
}
/**
 * Form field accessibility props
 */
export interface FormFieldAccessibilityProps extends BaseAccessibilityProps {
    /** Field name for form submission */
    name?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Whether the field is read-only */
    readOnly?: boolean;
    /** Error message for the field */
    error?: string;
    /** Help text for the field */
    helpText?: string;
    /** Field validation state */
    validationState?: 'valid' | 'invalid' | 'pending';
    /** Autocomplete attribute */
    autoComplete?: string;
}
/**
 * Interactive element accessibility props
 */
export interface InteractiveElementProps extends BaseAccessibilityProps {
    /** Whether the element is disabled */
    disabled?: boolean;
    /** Whether the element is pressed/active */
    pressed?: boolean;
    /** Whether the element is expanded (for collapsible elements) */
    expanded?: boolean;
    /** Whether the element is selected */
    selected?: boolean;
    /** Click handler */
    onClick?: (event: React.MouseEvent) => void;
    /** Key down handler */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /** Focus handler */
    onFocus?: (event: React.FocusEvent) => void;
    /** Blur handler */
    onBlur?: (event: React.FocusEvent) => void;
}
/**
 * Modal/Dialog accessibility props
 */
export interface ModalAccessibilityProps extends BaseAccessibilityProps {
    /** Whether the modal is open */
    isOpen?: boolean;
    /** Function to close the modal */
    onClose?: () => void;
    /** Whether clicking outside should close the modal */
    closeOnOverlayClick?: boolean;
    /** Whether pressing Escape should close the modal */
    closeOnEscape?: boolean;
    /** Focus management options */
    focusManagement?: FocusManagementOptions;
    /** Modal title for screen readers */
    modalTitle?: string;
    /** Modal description for screen readers */
    modalDescription?: string;
}
/**
 * Menu/Dropdown accessibility props
 */
export interface MenuAccessibilityProps extends BaseAccessibilityProps {
    /** Whether the menu is open */
    isOpen?: boolean;
    /** Function to close the menu */
    onClose?: () => void;
    /** Currently selected item index */
    selectedIndex?: number;
    /** Function called when selection changes */
    onSelectionChange?: (index: number) => void;
    /** Keyboard navigation configuration */
    keyboardNavigation?: KeyboardNavigationConfig;
    /** Whether to close menu on item selection */
    closeOnSelect?: boolean;
}
/**
 * Data table accessibility props
 */
export interface TableAccessibilityProps extends BaseAccessibilityProps {
    /** Table caption for screen readers */
    caption?: string;
    /** Table summary for complex tables */
    summary?: string;
    /** Whether the table has sortable columns */
    sortable?: boolean;
    /** Whether the table allows row selection */
    selectable?: boolean;
    /** Currently sorted column and direction */
    sortState?: {
        column: string;
        direction: 'ascending' | 'descending' | 'none';
    };
    /** Row selection state */
    selection?: {
        selectedRows: string[];
        onSelectionChange: (selectedRows: string[]) => void;
    };
}
/**
 * Component accessibility compliance information
 */
export interface AccessibilityCompliance {
    /** WCAG compliance level achieved */
    wcagLevel: WCAGLevel;
    /** Specific WCAG success criteria met */
    successCriteria: string[];
    /** Known limitations or exceptions */
    limitations?: string[];
    /** Testing methods used to verify compliance */
    testingMethods?: ('automated' | 'manual' | 'screen-reader' | 'keyboard-only')[];
    /** Last tested date */
    lastTested?: Date;
}
/**
 * Accessibility testing configuration
 */
export interface AccessibilityTestConfig {
    /** Whether automated accessibility tests should run */
    enableAutomatedTests?: boolean;
    /** axe-core rules to include */
    includeRules?: string[];
    /** axe-core rules to exclude */
    excludeRules?: string[];
    /** Custom accessibility test cases */
    customTests?: {
        name: string;
        test: (element: HTMLElement) => Promise<boolean>;
        description: string;
    }[];
    /** Keyboard navigation test scenarios */
    keyboardTests?: {
        name: string;
        keys: string[];
        expectedBehavior: string;
    }[];
    /** Screen reader test scenarios */
    screenReaderTests?: {
        name: string;
        expectedAnnouncement: string;
        trigger: string;
    }[];
}
/**
 * Complete accessibility configuration for a component
 */
export interface ComponentAccessibilityConfig {
    /** Base accessibility props */
    accessibility?: BaseAccessibilityProps;
    /** Focus management configuration */
    focusManagement?: FocusManagementOptions;
    /** Keyboard navigation configuration */
    keyboardNavigation?: KeyboardNavigationConfig;
    /** Screen reader configuration */
    screenReader?: ScreenReaderOptions;
    /** Compliance information */
    compliance?: AccessibilityCompliance;
    /** Testing configuration */
    testing?: AccessibilityTestConfig;
}
/**
 * Utility type for making accessibility props required
 */
export type RequiredAccessibility<T extends BaseAccessibilityProps> = T & Required<Pick<T, 'aria-label' | 'role'>>;
/**
 * Utility type for form components with accessibility
 */
export type AccessibleFormComponent<T = {}> = T & FormFieldAccessibilityProps & {
    /** Label text (required for form fields) */
    label: string;
    /** Label ID for aria-labelledby */
    labelId?: string;
    /** Error ID for aria-describedby */
    errorId?: string;
    /** Help text ID for aria-describedby */
    helpTextId?: string;
};
/**
 * Utility type for interactive components with accessibility
 */
export type AccessibleInteractiveComponent<T = {}> = T & InteractiveElementProps & Required<Pick<InteractiveElementProps, 'aria-label' | 'role'>>;
/**
 * Accessibility hook return type
 */
export interface AccessibilityHookReturn {
    /** Props to spread on the target element */
    accessibilityProps: BaseAccessibilityProps;
    /** Functions for managing accessibility state */
    accessibilityState: {
        announce: (message: string) => void;
        setExpanded: (expanded: boolean) => void;
        setSelected: (selected: boolean) => void;
        setDisabled: (disabled: boolean) => void;
    };
    /** Focus management utilities */
    focusManagement: {
        focus: () => void;
        blur: () => void;
        trapFocus: () => void;
        releaseFocus: () => void;
    };
}
