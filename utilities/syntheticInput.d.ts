/**
 * Sets the value of a native `<input>` / `<textarea>` element using the
 * prototype value-setter and dispatches a bubbling `input` event, so that
 * React's synthetic `onChange` fires with a real `ChangeEvent` whose
 * `target.value` reflects the assigned value.
 *
 * This centralises the descriptor-setter + `dispatchEvent` trick that the
 * in-house components currently duplicate (TextInput, Select/Option,
 * Autocomplete, useForm, DatePickerInput, ...). The V2 components rely on it to
 * emulate controlled updates while still emitting the native input events that
 * form libraries (Formik / React Hook Form) and the existing `onChange`
 * contract depend on.
 *
 * Assigning through the prototype setter (rather than `element.value = x`) is
 * required: React tracks the input's value internally, and only the native
 * setter updates that tracker so React recognises the change instead of
 * treating it as a no-op.
 */
export declare function setNativeInputValue(element: HTMLInputElement | HTMLTextAreaElement | null | undefined, value: string): void;
