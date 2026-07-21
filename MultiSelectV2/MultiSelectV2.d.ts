/**
 * MultiSelectV2 — react-aria-components-backed replacement for the original
 * MultiSelect.
 *
 * Phase 0 scaffold: this re-exports the existing MultiSelect implementation
 * unchanged so the new public export surface (`MultiSelectV2`,
 * `MultiSelectV2.Suggestion`, `MultiSelectV2.Group`) can be wired up with no
 * behaviour change. Phase 4 replaces the internals with react-aria-components
 * behind an identical public interface (drop-in, no breaking changes). See
 * scratchpad/plan_body.md.
 *
 * `MultiSelectValue` and `DisplayModes` are preserved byte-identical and
 * re-exported from this module path, matching the original.
 */
export { default, DisplayModes } from '../MultiSelect/MultiSelect';
export type { MultiSelectProps } from '../MultiSelect/MultiSelect';
export type { MultiSelectValue } from '../MultiSelect/Actions';
