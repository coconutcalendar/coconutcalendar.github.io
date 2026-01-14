import type { Modifier, State } from '@popperjs/core';
export declare const applyMaxSize: Modifier<'applyMaxSize', State>;
export declare const maxSize: {
    options: {
        padding: number;
    };
    name: "maxSize";
    enabled: boolean;
    phase: import("@popperjs/core").ModifierPhases;
    requires?: string[] | undefined;
    requiresIfExists?: string[] | undefined;
    fn: (arg0: import("@popperjs/core").ModifierArguments<{
        placement: import("@popperjs/core").Placement;
        boundary: import("@popperjs/core").Boundary;
        rootBoundary: import("@popperjs/core").RootBoundary;
        elementContext: import("@popperjs/core").Context;
        altBoundary: boolean;
        padding: import("@popperjs/core").Padding;
    }>) => void | State;
    effect?: ((arg0: import("@popperjs/core").ModifierArguments<{
        placement: import("@popperjs/core").Placement;
        boundary: import("@popperjs/core").Boundary;
        rootBoundary: import("@popperjs/core").RootBoundary;
        elementContext: import("@popperjs/core").Context;
        altBoundary: boolean;
        padding: import("@popperjs/core").Padding;
    }>) => void | (() => void)) | undefined;
    data?: import("@popperjs/core").Obj | undefined;
};
