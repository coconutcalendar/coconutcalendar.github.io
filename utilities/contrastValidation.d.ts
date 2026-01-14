/**
 * Color contrast validation utilities for WCAG compliance
 * Provides functions to check color contrast ratios against WCAG standards
 */
/**
 * WCAG contrast ratio requirements
 */
export declare const WCAG_CONTRAST_RATIOS: {
    /** Normal text AA: 4.5:1 */
    readonly NORMAL_AA: 4.5;
    /** Large text AA: 3:1 */
    readonly LARGE_AA: 3;
    /** Normal text AAA: 7:1 */
    readonly NORMAL_AAA: 7;
    /** Large text AAA: 4.5:1 */
    readonly LARGE_AAA: 4.5;
    /** Non-text elements: 3:1 */
    readonly NON_TEXT: 3;
};
/**
 * Text size thresholds for WCAG large text definition
 */
export declare const LARGE_TEXT_THRESHOLDS: {
    /** 18pt or larger */
    readonly PT_THRESHOLD: 18;
    /** 14pt bold or larger */
    readonly PT_BOLD_THRESHOLD: 14;
    /** 24px or larger (approximately 18pt) */
    readonly PX_THRESHOLD: 24;
    /** 18.66px bold or larger (approximately 14pt) */
    readonly PX_BOLD_THRESHOLD: 18.66;
};
/**
 * RGB color representation
 */
export interface RGBColor {
    r: number;
    g: number;
    b: number;
}
/**
 * HSL color representation
 */
export interface HSLColor {
    h: number;
    s: number;
    l: number;
}
/**
 * Contrast validation result
 */
export interface ContrastResult {
    ratio: number;
    passesAA: boolean;
    passesAAA: boolean;
    level: 'fail' | 'aa' | 'aaa';
    recommendation?: string;
}
/**
 * Parse CSS color string to RGB
 * Supports hex, rgb(), rgba(), hsl(), hsla() formats
 */
export declare function parseColor(color: string): RGBColor | null;
/**
 * Calculate relative luminance of an RGB color
 * Based on WCAG formula
 */
export declare function getRelativeLuminance({ r, g, b }: RGBColor): number;
/**
 * Calculate contrast ratio between two colors
 * Returns ratio from 1:1 (no contrast) to 21:1 (maximum contrast)
 */
export declare function calculateContrastRatio(color1: RGBColor, color2: RGBColor): number;
/**
 * Check if text size qualifies as "large text" under WCAG
 */
export declare function isLargeText(fontSize: number, fontWeight?: string | number, unit?: 'px' | 'pt'): boolean;
/**
 * Validate contrast ratio against WCAG standards
 */
export declare function validateContrast(foregroundColor: string | RGBColor, backgroundColor: string | RGBColor, options?: {
    fontSize?: number;
    fontWeight?: string | number;
    fontUnit?: 'px' | 'pt';
    level?: 'AA' | 'AAA';
    isNonText?: boolean;
}): ContrastResult;
/**
 * Get computed contrast ratio for an element
 * Extracts colors from computed styles and validates contrast
 */
export declare function validateElementContrast(element: HTMLElement, options?: {
    level?: 'AA' | 'AAA';
    isNonText?: boolean;
}): ContrastResult | null;
/**
 * Suggest color adjustments to meet contrast requirements
 */
export declare function suggestContrastFix(foregroundColor: string | RGBColor, backgroundColor: string | RGBColor, targetRatio?: number): {
    adjustedForeground?: string;
    adjustedBackground?: string;
    ratio: number;
} | null;
