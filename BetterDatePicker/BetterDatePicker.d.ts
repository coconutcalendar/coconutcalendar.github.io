import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { TextInputSize, TextInputVariant } from '../TextInput/styles';
import type { FirstDayOfWeek, CalendarMode } from './types';
interface BetterDatePickerBaseProps {
    /**
     * When true, displays a condensed calendar view showing only one week
     * instead of the full month
     * @default false
     */
    condensed?: boolean;
    /**
     * If true, the input is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the input is in an error state
     * @default false
     */
    error?: boolean;
    /**
     * The error message to display below the input while `error` is true. It is
     * announced to assistive technology as the field's error. Accepts any
     * renderable content, e.g. a FormattedMessage element
     */
    errorMessage?: ReactNode;
    /**
     * The day that starts the week in the calendar grid, and that weeks snap
     * to in week mode. Defaults to the locale's first day of the week
     */
    firstDayOfWeek?: FirstDayOfWeek;
    /**
     * Descriptive helper text displayed below the input. For error text, use
     * `errorMessage` together with `error` instead. Accepts any renderable
     * content, e.g. a FormattedMessage element
     */
    helperText?: ReactNode;
    /**
     * Callback that is called for each visible date. Returning true marks the
     * date as unavailable so it cannot be selected
     */
    isDateUnavailable?: (date: Date) => boolean;
    /**
     * The label for the input element. Accepts any renderable content, e.g. a
     * FormattedMessage element
     */
    label: ReactNode;
    /**
     * The latest date that a user may select
     */
    maxDate?: Date;
    /**
     * The earliest date that a user may select
     */
    minDate?: Date;
    /**
     * The name of the input element, used when submitting an HTML form
     */
    name?: string;
    /**
     * Whether user input is required before form submission
     * @default false
     */
    required?: boolean;
    /**
     * The size of the input
     * @default 'medium'
     */
    size?: TextInputSize;
    /**
     * IANA timezone identifier (e.g. 'America/New_York') used to determine
     * today's date and the dates emitted through onChange.
     * Defaults to the user's local timezone if not provided or invalid
     */
    timezone?: string;
    /**
     * How validation is surfaced. 'aria' (the default) exposes validity to
     * assistive technology without blocking native form submission; 'native'
     * uses the browser's built-in form validation
     * @default 'aria'
     */
    validationBehavior?: 'aria' | 'native';
    /**
     * The visual style variant of the input field
     * @default 'outlined'
     */
    variant?: TextInputVariant;
}
/**
 * State passed to a custom trigger so it can render the current value
 */
export interface BetterDatePickerTriggerState {
    /**
     * The localized, human-readable value, e.g. "Jul 12, 2026" for a day or
     * "Jun 19 – 25, 2026" for a week or range. An empty string when nothing is
     * selected
     */
    displayedText: string;
    /**
     * Whether the picker is disabled
     */
    isDisabled: boolean;
    /**
     * Whether the calendar popover is currently open
     */
    isOpen: boolean;
    /**
     * The selected value in this picker's shape: a Date in day mode, or a
     * [start, end] tuple in week and range modes. null when nothing is selected
     */
    value: Date | [Date, Date] | null;
}
/**
 * Props that a custom trigger must spread onto its focusable element so the
 * calendar can open from it, anchor its popover to it, and be announced
 * correctly to assistive technology. `id` and `aria-labelledby` together make
 * the element announce the field label followed by its own text (the value),
 * so render the value as the element's content
 */
export interface BetterDatePickerTriggerProps {
    /**
     * Present only while the picker is in an error state with an errorMessage;
     * points at the rendered error text so it is announced by assistive tech
     */
    'aria-describedby'?: string;
    'aria-expanded': boolean;
    'aria-haspopup': 'dialog';
    'aria-labelledby': string;
    id: string;
    onClick: () => void;
    ref: React.RefCallback<HTMLElement>;
}
/**
 * A custom trigger. Return a single focusable element (e.g. a button) with
 * `triggerProps` spread onto it to anchor the calendar to that element.
 *
 * This is a spread-props contract rather than a react-aria `Pressable` wrapper
 * on purpose. `Pressable` drives presses through pointer events it injects by
 * cloning the child, so the child must forward every DOM prop (including
 * onPointerDown/onPointerUp) to a focusable node. None of this design system's
 * components do that they all forward only a
 * fixed named allow-list — so a Pressable-based slot could not anchor to any
 * component we ship. They do all forward `onClick` and a `ref`, which is
 * exactly what this contract needs, so spreading `triggerProps` works with our
 * own components as well as native elements
 */
export type BetterDatePickerTrigger = (state: BetterDatePickerTriggerState, triggerProps: BetterDatePickerTriggerProps) => ReactElement;
export interface BetterDatePickerDayProps extends BetterDatePickerBaseProps {
    /**
     * The initially selected date (uncontrolled)
     */
    defaultValue?: Date | null;
    /**
     * How the value reads inside the field trigger. 'segments' renders an
     * editable segmented date input, 'text' renders the localized,
     * human-readable date (e.g. Jul 12, 2026). Only applies when `trigger` is
     * 'field'; the other triggers always render human-readable text
     * @default 'segments'
     */
    displayFormat?: 'segments' | 'text';
    /**
     * Selection mode for the date picker
     * @default 'day'
     */
    mode?: 'day';
    /**
     * Callback invoked with the selected date when it changes, or null when
     * the value is cleared
     */
    onChange?: (date: Date | null) => void;
    /**
     * The element the calendar is anchored to. 'field' renders a full input
     * field, 'text' renders the value as a bare text button, 'icon' renders a
     * calendar icon button showing the selected day of the month (or a plain
     * calendar icon while no date is selected), and a function renders a custom
     * element to anchor the calendar to. For every trigger except 'field' the
     * label is still announced to assistive technology
     * @default 'field'
     */
    trigger?: 'field' | 'icon' | 'text' | BetterDatePickerTrigger;
    /**
     * The selected date (controlled)
     */
    value?: Date | null;
}
export interface BetterDatePickerWeekProps extends BetterDatePickerBaseProps {
    /**
     * The initially selected week (uncontrolled). A single date selects the
     * week containing it
     */
    defaultValue?: Date | [Date, Date] | null;
    mode: 'week';
    /**
     * Callback invoked with the start and end dates of the selected week
     */
    onChange?: (range: [Date, Date]) => void;
    /**
     * The element the calendar is anchored to. Week selection always renders as
     * localized, human-readable text; 'field' renders it inside an input field,
     * 'text' renders it as a bare text button, and a function renders a custom
     * element to anchor the calendar to
     * @default 'field'
     */
    trigger?: 'field' | 'text' | BetterDatePickerTrigger;
    /**
     * The selected week (controlled). A single date selects the week
     * containing it
     */
    value?: Date | [Date, Date] | null;
}
export interface BetterDatePickerRangeProps extends BetterDatePickerBaseProps {
    /**
     * Whether a range may span dates marked unavailable by `isDateUnavailable`.
     * When false (the default) the range is clamped so it cannot cross an
     * unavailable date; when true the range may span them and the unavailable
     * dates within it simply stay unselectable
     * @default false
     */
    allowsNonContiguousRanges?: boolean;
    /**
     * The initially selected date range (uncontrolled)
     */
    defaultValue?: [Date, Date] | null;
    /**
     * How the value reads inside the field trigger. 'segments' renders editable
     * segmented date inputs, 'text' renders the localized, human-readable
     * range. Only applies when `trigger` is 'field'; the other triggers always
     * render human-readable text
     * @default 'segments'
     */
    displayFormat?: 'segments' | 'text';
    mode: 'range';
    /**
     * Callback invoked with the start and end dates of the selected range, or
     * null when the value is cleared
     */
    onChange?: (range: [Date, Date] | null) => void;
    /**
     * The element the calendar is anchored to. 'field' renders a full input
     * field, 'text' renders the value as a bare text button, and a function
     * renders a custom element to anchor the calendar to. For every trigger
     * except 'field' the label is still announced to assistive technology
     * @default 'field'
     */
    trigger?: 'field' | 'text' | BetterDatePickerTrigger;
    /**
     * The selected date range (controlled)
     */
    value?: [Date, Date] | null;
}
export type BetterDatePickerProps = BetterDatePickerDayProps | BetterDatePickerRangeProps | BetterDatePickerWeekProps;
declare function BetterDatePicker(props: BetterDatePickerProps): JSX.Element;
export type { FirstDayOfWeek, CalendarMode };
export default BetterDatePicker;
