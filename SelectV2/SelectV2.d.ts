/**
 * SelectV2 — react-aria-components-backed replacement for the original Select.
 *
 * Phase 0 scaffold: this re-exports the existing Select implementation unchanged
 * so the new public export surface (`SelectV2`, `SelectV2.Option`,
 * `SelectV2.Group`) can be wired up with no behaviour change. Phase 2 replaces
 * the internals with react-aria-components behind an identical public interface
 * (drop-in, no breaking changes). See scratchpad/plan_body.md.
 *
 * Statics (`.Option`, `.Group`) are attached to the default export and carry
 * through this re-export automatically.
 */
export { default } from '../Select/Select';
export type { SelectProps } from '../Select/Select';
export type { OptionProps } from '../Select/Option';
