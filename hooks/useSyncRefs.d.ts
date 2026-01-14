import type { MutableRefObject } from 'react';
type SyncableRefs<Type> = MutableRefObject<Type> | ((instance: Type) => void) | null | undefined;
export declare function useSyncRefs<Type>(...refs: SyncableRefs<Type>[]): (value: Type) => void;
export {};
