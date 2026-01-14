interface UseCloseOnEscapeKeypress {
    onClose: (e: KeyboardEvent) => void;
}
/**
 * Sets up a listener on the document object to capture
 * 'escape' keypress events and calls the callback
 * provided
 */
export declare function useCloseOnEscapeKeypress({ onClose, }: UseCloseOnEscapeKeypress): void;
export {};
