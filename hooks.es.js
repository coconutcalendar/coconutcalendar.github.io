import { useState, useEffect, useRef } from 'react';
import { useForm as useForm$1 } from 'react-hook-form';

function useWindowSize(ref) {
    var _a = useState({
        height: undefined,
        width: undefined,
    }), windowSize = _a[0], setWindowSize = _a[1];
    useEffect(function () {
        var timeoutId;
        var handleResize = function () {
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(function () {
                if (ref.current) {
                    setWindowSize({
                        height: window.innerHeight,
                        width: window.innerWidth,
                    });
                }
            }, 150);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return function () { return window.removeEventListener('resize', handleResize); };
    }, [ref]);
    return windowSize;
}

function useElementOverflow(ref) {
    var dependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dependencies[_i - 1] = arguments[_i];
    }
    var _a = useState(function () { return false; }), overflowing = _a[0], setOverflowing = _a[1];
    var windowSize = useWindowSize(ref);
    useEffect(function () {
        var el = ref.current;
        if (el) {
            setOverflowing(el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight);
        }
    }, [ref, windowSize.height, windowSize.width, dependencies]);
    return overflowing;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function isSelect(element) {
    var _a;
    return !!('dataset' in element && ((_a = element.dataset) === null || _a === void 0 ? void 0 : _a.select));
}
function useForm(options) {
    var defaultValuesRef = useRef(((options === null || options === void 0 ? void 0 : options.defaultValues) || {}));
    var fieldsRef = useRef({});
    var methods = useForm$1(options);
    function register(ref, options) {
        if (ref && typeof ref === 'object' && 'name' in ref && isSelect(ref)) {
            var exists = fieldsRef.current[ref.name];
            fieldsRef.current[ref.name] = { ref: ref };
            var defaultValue = defaultValuesRef.current[ref.name];
            if (!exists && defaultValue) {
                setValue(ref.name, defaultValue);
            }
        }
        methods.register(ref, options);
    }
    function reset(values, omitResetState) {
        fieldsRef.current = {};
        defaultValuesRef.current = __assign({}, (values || defaultValuesRef.current));
        methods.reset(values, omitResetState);
    }
    function setValue(name, value, config) {
        var _a, _b;
        var ref = (_a = fieldsRef.current[name]) === null || _a === void 0 ? void 0 : _a.ref;
        if (ref && isSelect(ref)) {
            var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
            var inputEvent = new Event('input', { bubbles: true });
            (_b = descriptor.set) === null || _b === void 0 ? void 0 : _b.call(ref, value);
            ref.dispatchEvent(inputEvent);
        }
        methods.setValue(name, value, config);
    }
    return __assign(__assign({}, methods), { register: register, reset: reset, setValue: setValue });
}

export { useElementOverflow, useForm };
//# sourceMappingURL=hooks.es.js.map
