export interface Disposables {
    add(callback: () => void): void;
    dispose(): void;
    nextFrame(...args: Parameters<typeof requestAnimationFrame>): void;
    requestAnimationFrame(...args: Parameters<typeof requestAnimationFrame>): void;
    setTimeout(...args: Parameters<typeof setTimeout>): void;
}
declare function createDisposables(): Disposables;
export default createDisposables;
