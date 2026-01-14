export declare enum AriaLiveRole {
    /**
     * The alert role is used to communicate an important and usually time-sensitive message to the user.
     * Setting role="alert" is equivalent to setting aria-live="assertive" and aria-atomic="true".
     * It should only be used for information that requires the user's immediate attention, as it would interrupt the announcement of a user's current activity.
     * For more information see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
     */
    Alert = "alert",
    /**
     * The status role defines a live region containing advisory information for the user that is not important enough to be an alert.
     * Setting role="status" is equivalent to setting aria-live="polite" and aria-atomic="true".
     * For more information see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role
     */
    Status = "status",
    /**
     * The presentation role removes an element's implicit ARIA semantics from being exposed to the accessibility tree.
     * The content of the element will still be available to assistive technologies; it is only the semantics of the container,
     * and in some instance, required associated descendants, which will no longer expose their mappings to the accessibility API
     * The element with role="presentation" should not have an accessible name.
     * For more information see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role
     */
    Presentation = "presentation"
}
export type AriaRole = 'alert' | 'alertdialog' | 'application' | 'article' | 'banner' | 'button' | 'cell' | 'checkbox' | 'columnheader' | 'combobox' | 'complementary' | 'contentinfo' | 'definition' | 'dialog' | 'directory' | 'document' | 'feed' | 'figure' | 'form' | 'grid' | 'gridcell' | 'group' | 'heading' | 'img' | 'link' | 'list' | 'listbox' | 'listitem' | 'log' | 'main' | 'marquee' | 'math' | 'menu' | 'menubar' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progressbar' | 'radio' | 'radiogroup' | 'region' | 'row' | 'rowgroup' | 'rowheader' | 'scrollbar' | 'search' | 'searchbox' | 'separator' | 'slider' | 'spinbutton' | 'status' | 'switch' | 'tab' | 'table' | 'tablist' | 'tabpanel' | 'term' | 'textbox' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'treegrid' | 'treeitem';
export declare const ROLE: Record<string, AriaRole>;
