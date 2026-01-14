import type { MutableRefObject } from 'react';
export default function makeRef<T>(initialValue: T | null): MutableRefObject<T | null>;
