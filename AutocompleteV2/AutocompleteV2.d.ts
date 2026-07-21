/**
 * AutocompleteV2 — react-aria-components-backed replacement for the original
 * Autocomplete.
 *
 * Phase 0 scaffold: this re-exports the existing Autocomplete implementation
 * unchanged so the new public export surface (`AutocompleteV2`,
 * `AutocompleteV2.Suggestion`, `AutocompleteV2.Group`, `DisplayModes`) can be
 * wired up with no behaviour change. Phase 3 replaces the internals with
 * react-aria-components behind an identical public interface (drop-in, no
 * breaking changes). See scratchpad/plan_body.md.
 *
 * The `DisplayModes` enum is preserved byte-identical (member names AND string
 * values are public contract).
 */
export { default, DisplayModes } from '../Autocomplete/Autocomplete';
export type { AutocompleteProps } from '../Autocomplete/Autocomplete';
