import type { FieldValues, UseFormMethods, UseFormOptions } from 'react-hook-form';
export declare function useForm<TFieldValues extends FieldValues = FieldValues, TContext extends Record<string, unknown> = Record<string, unknown>>(options?: UseFormOptions<TFieldValues, TContext>): UseFormMethods<TFieldValues>;
