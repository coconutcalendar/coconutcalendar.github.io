import React from 'react';
/**
 * ARIA live region priorities
 */
export type LiveRegionPoliteness = 'polite' | 'assertive' | 'off';
/**
 * Hook for managing ARIA live regions
 * Provides easy screen reader announcements with proper timing and cleanup
 */
export declare function useLiveRegion(politeness?: LiveRegionPoliteness, options?: {
    clearOnUnmount?: boolean;
    debounceMs?: number;
}): {
    announce: (message: string) => void;
    liveRegionRef: React.MutableRefObject<HTMLDivElement | null>;
};
/**
 * Hook for status announcements (polite live region)
 * Use for non-urgent status updates like form validation, loading states
 */
export declare function useStatusAnnouncer(debounceMs?: number): (message: string) => void;
/**
 * Hook for alert announcements (assertive live region)
 * Use for urgent messages like errors, warnings that need immediate attention
 */
export declare function useAlertAnnouncer(debounceMs?: number): (message: string) => void;
/**
 * Hook for progress announcements
 * Provides specialized methods for announcing loading and progress states
 */
export declare function useProgressAnnouncer(): {
    /**
     * Announce loading state
     */
    announceLoading: (message?: string) => void;
    /**
     * Announce progress percentage
     */
    announceProgress: (percentage: number, label?: string) => void;
    /**
     * Announce completion
     */
    announceComplete: (message?: string) => void;
    /**
     * Announce error state
     */
    announceError: (message: string) => void;
};
/**
 * Context announcer hook for dynamic content changes
 * Useful for announcing when content is added, removed, or updated
 */
export declare function useContextAnnouncer(): {
    /**
     * Announce content additions
     */
    announceAdded: (item: string, context?: string) => void;
    /**
     * Announce content removal
     */
    announceRemoved: (item: string, context?: string) => void;
    /**
     * Announce content updates
     */
    announceUpdated: (item: string, context?: string) => void;
    /**
     * Announce selection changes
     */
    announceSelected: (item: string, position?: {
        current: number;
        total: number;
    }) => void;
    /**
     * Announce validation results
     */
    announceValidation: (field: string, isValid: boolean, errorMessage?: string) => void;
    /**
     * Announce search results
     */
    announceSearchResults: (count: number, query?: string) => void;
};
/**
 * Live region component props
 */
interface LiveRegionProps {
    message: string;
    politeness?: LiveRegionPoliteness;
    clearDelay?: number;
    className?: string;
    'data-testid'?: string;
}
/**
 * Live region component for declarative announcements
 * Use when you need to render announcements based on component state
 */
export declare function LiveRegion({ message, politeness, clearDelay, className, 'data-testid': testId, }: LiveRegionProps): React.JSX.Element | null;
export {};
