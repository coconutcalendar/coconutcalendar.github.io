interface UseScrollLoadingOptions {
    /**
     * Whether scroll loading is enabled
     * @default true
     */
    enabled?: boolean;
    /**
     * Callback function to trigger when scrolling near the bottom
     */
    onLoadMore: () => void;
    /**
     * Distance from bottom (in pixels) at which to trigger loading
     * @default 50
     */
    threshold?: number;
    /**
     * Whether data is currently being loaded
     * @default false
     */
    loading?: boolean;
}
/**
 * Hook to detect when a scrollable element is near the bottom
 * and trigger a callback to load more items
 */
export declare function useScrollLoading({ enabled, onLoadMore, threshold, loading, }: UseScrollLoadingOptions): {
    handleScroll: (element: HTMLElement) => void;
};
export {};
