'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var clsx = require('clsx');
var React = require('react');
var reactIntl = require('react-intl');
var reactDom = require('react-dom');
var dateFns = require('date-fns');
var locale = require('date-fns/locale');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function toDataSet(record) {
    return Object.keys(record || {}).reduce(function (previous, current) {
        var key = "data-".concat(current.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); }));
        if (record) {
            previous[key] = record[current];
        }
        return previous;
    }, {});
}

var sizes = {
    large: {
        root: 'h-12 px-4 py-3',
        icon: 'w-6 h-6',
    },
    medium: {
        root: 'h-10 px-2 py-2',
        icon: 'w-5 h-5',
    },
    small: {
        root: 'h-8 px-1 py-1',
        icon: 'w-4.5 h-4.5',
    },
};
var disabled = {
    contained: {
        default: "disabled:bg-black-15 disabled:text-black-30",
        inverse: "disabled:bg-white-15 disabled:text-white-30",
    },
    outlined: {
        default: "disabled:bg-transparent disabled:border-black-15 disabled:text-black-30",
        inverse: "disabled:bg-transparent disabled:border-white-30 disabled:text-white-30",
    },
    text: {
        default: "disabled:bg-transparent disabled:text-black-30",
        inverse: "disabled:bg-transparent disabled:text-white-30",
    },
};
var positions = {
    contained: {
        default: {
            left: 'rounded-l',
            middle: 'rounded-none border-l border-black-15 disabled:border-black-15',
            right: 'rounded-r border-l border-black-15 disabled:border-black-15',
        },
        inverse: {
            left: 'rounded-l',
            middle: 'rounded-none border-l border-black-15 disabled:border-black-15',
            right: 'rounded-r border-l border-black-15 disabled:border-black-15',
        },
        primary: {
            left: 'rounded-l',
            middle: "rounded-none border-l border-primary-dark disabled:border-black-15",
            right: 'rounded-r border-l border-primary-dark disabled:border-black-15',
        },
        secondary: {
            left: 'rounded-l',
            middle: "rounded-none border-l border-secondary-dark disabled:border-black-15",
            right: "rounded-r border-l border-secondary-dark disabled:border-black-15",
        },
        error: {
            left: 'rounded-l',
            middle: "rounded-none border-l border-error-darker disabled:border-black-15",
            right: 'rounded-r border-l border-error-darker disabled:border-black-15',
        },
    },
    outlined: {
        default: {
            left: 'rounded-l disabled:border-black-20',
            middle: 'rounded-none border-l-0 disabled:border-black-20',
            right: 'rounded-r border-l-0 disabled:border-black-20',
        },
        inverse: {
            left: 'rounded-l disabled:border-white-100',
            middle: 'rounded-none border-l-0 disabled:border-white-100',
            right: 'rounded-r border-l-0 disabled:border-white-100',
        },
        primary: {
            left: 'rounded-l disabled:border-primary-main',
            middle: 'rounded-none border-l-0 disabled:border-primary-main',
            right: 'rounded-r border-l-0 disabled:border-primary-main',
        },
        secondary: {
            left: 'rounded-l disabled:border-secondary-main',
            middle: 'rounded-none border-l-0 disabled:border-secondary-main',
            right: 'rounded-r border-l-0 disabled:border-secondary-main',
        },
        error: {
            left: 'rounded-l disabled:border-error-dark',
            middle: 'rounded-none border-l-0 disabled:border-error-dark',
            right: 'rounded-r border-l-0 disabled:border-error-dark',
        },
    },
    text: {
        default: {
            left: 'rounded-l',
            middle: 'rounded-none border-l border-black-15 disabled:border-black-15',
            right: 'rounded-r border-l border-black-15 disabled:border-black-15',
        },
        inverse: {
            left: 'rounded-l',
            middle: 'rounded-none border-l border-black-15 disabled:border-black-15',
            right: 'rounded-r border-l border-black-15 disabled:border-black-15',
        },
        primary: {
            left: 'rounded-l',
            middle: "rounded-none border-l border-primary-dark disabled:border-black-15",
            right: 'rounded-r border-l border-primary-dark disabled:border-black-15',
        },
        secondary: {
            left: 'rounded-l',
            middle: "rounded-none border-l border-secondary-dark disabled:border-black-15",
            right: "rounded-r border-l border-secondary-dark disabled:border-black-15",
        },
        error: {
            left: 'rounded-l',
            middle: "rounded-none border-l border-error-darker disabled:border-black-15",
            right: 'rounded-r border-l border-error-darker disabled:border-black-15',
        },
    },
};
var variants = {
    contained: {
        default: "bg-black-5 text-black-90 ".concat(disabled.contained.default, " active:bg-black-25 focus:bg-black-15 focus-visible:ring hover:bg-black-15"),
        inverse: "bg-white-25 text-white-100 ".concat(disabled.contained.inverse, " active:bg-white-60 focus:bg-white-45 focus-visible:ring hover:bg-white-45"),
        primary: "bg-primary-main text-white-100 ".concat(disabled.contained.default, " active:bg-primary-darker focus:bg-primary-dark focus-visible:ring hover:bg-primary-dark"),
        secondary: "bg-secondary-main text-white-100 ".concat(disabled.contained.default, " active:bg-secondary-darker focus:bg-secondary-dark focus-visible:ring hover:bg-secondary-dark"),
        error: "bg-error-main text-white-100 ".concat(disabled.contained.default, " active:bg-error-darker focus:bg-error-dark focus-visible:ring hover:bg-error-dark"),
    },
    outlined: {
        default: "border border-solid border-black-20 text-black-90 ".concat(disabled.outlined.default, " active:bg-black-15 focus:bg-black-5 focus-visible:ring hover:bg-black-5"),
        inverse: "border border-solid border-white-100 text-white-100 ".concat(disabled.outlined.inverse, " active:bg-white-45 focus:bg-white-25 focus-visible:ring hover:bg-white-25"),
        primary: "border border-solid border-primary-main text-primary-main ".concat(disabled.outlined.default, " active:bg-primary-20 focus:bg-primary-10 focus-visible:ring hover:bg-primary-10"),
        secondary: "border border-solid border-secondary-main text-secondary-main ".concat(disabled.outlined.default, " active:bg-secondary-20 focus:bg-secondary-10 focus-visible:ring hover:bg-secondary-10"),
        error: "border border-solid border-error-darker text-error-darker ".concat(disabled.outlined.default, " active:bg-error-20 focus:bg-error-10 focus-visible:ring hover:bg-error-10"),
    },
    text: {
        default: "text-black-90 ".concat(disabled.text.default, " active:bg-black-15 focus:bg-black-5 focus-visible:ring hover:bg-black-5"),
        inverse: "text-white-100 ".concat(disabled.text.inverse, " active:bg-white-45 focus:bg-white-25 focus-visible:ring hover:bg-white-25"),
        primary: "text-primary-main ".concat(disabled.text.default, " active:bg-primary-20 focus:bg-primary-10 focus-visible:ring hover:bg-primary-10"),
        secondary: "text-secondary-main ".concat(disabled.text.default, " active:bg-secondary-20 focus:bg-secondary-10 focus-visible:ring hover:bg-secondary-10"),
        error: "text-error-darker ".concat(disabled.text.default, " active:bg-error-20 focus:bg-error-10 focus-visible:ring hover:bg-error-10"),
    },
};
function ButtonComponent(_a, ref) {
    var _b;
    var controls = _a["aria-controls"], expanded = _a["aria-expanded"], hasPopup = _a["aria-haspopup"], children = _a.children, _c = _a.color, color = _c === void 0 ? 'default' : _c, dataSet = _a.dataSet, _d = _a.disabled, disabled = _d === void 0 ? false : _d, EndAdornment = _a.endAdornment, form = _a.form, href = _a.href, id = _a.id, onClick = _a.onClick, onKeyDown = _a.onKeyDown, _e = _a.position, position = _e === void 0 ? null : _e, _f = _a.size, size = _f === void 0 ? 'medium' : _f, StartAdornment = _a.startAdornment, _g = _a.tabIndex, tabIndex = _g === void 0 ? 0 : _g, target = _a.target, _h = _a.type, type = _h === void 0 ? 'button' : _h, _j = _a.variant, variant = _j === void 0 ? 'contained' : _j;
    var Component = href ? 'a' : 'button';
    return (React__default['default'].createElement(Component, __assign({ "aria-controls": controls, "aria-expanded": expanded, "aria-haspopup": hasPopup, className: clsx__default['default']('font-sans text-sm font-medium leading-relaxed tracking-wide disabled:cursor-not-allowed focus:outline-none', variants[variant][color], sizes[size].root, position ? positions[variant][color][position] : 'rounded') }, toDataSet(dataSet), { disabled: disabled, form: form, href: href, id: id, onClick: onClick, onKeyDown: onKeyDown, ref: ref, tabIndex: tabIndex }, (href ? { target: target } : { type: type })),
        React__default['default'].createElement("div", { className: "flex items-center" },
            StartAdornment ? (React__default['default'].createElement("span", { className: clsx__default['default']('flex items-center justify-center', sizes[size].icon) },
                React__default['default'].createElement(StartAdornment, { color: "inherit" }))) : null,
            ((_b = children === null || children === void 0 ? void 0 : children.type) === null || _b === void 0 ? void 0 : _b.uiName) === 'SvgIcon' ? (React__default['default'].createElement("span", { className: sizes[size].icon }, children)) : (React__default['default'].createElement("span", { className: size === 'small' ? 'px-1' : 'px-2' }, children)),
            EndAdornment ? (React__default['default'].createElement("span", { className: clsx__default['default']('flex items-center justify-center', sizes[size].icon) },
                React__default['default'].createElement(EndAdornment, { color: "inherit" }))) : null)));
}
var Button = React.forwardRef(ButtonComponent);

var colors = {
    default: 'text-black-60',
    inherit: 'text-inherit',
    primary: 'text-primary-main',
    secondary: 'text-secondary-main',
};
function SvgIcon(_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'inherit' : _b, viewBox = _a.viewBox;
    return (React__default['default'].createElement("svg", { "aria-hidden": "true", className: clsx__default['default']('select-none w-full h-auto', colors[color]), fill: "currentColor", focusable: "false", viewBox: viewBox || '0 0 24 24', width: "0" }, children));
}

function createSvgIcon(path, name, viewBox) {
    var component = function (props) { return (React__default['default'].createElement(SvgIcon, __assign({}, __assign(__assign({}, props), { viewBox: viewBox })), path)); };
    component.displayName = name;
    component.uiName = 'SvgIcon';
    return component;
}

var CheckCircleOutline = createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" }), 'CheckCircleOutline');

var ErrorOutline = createSvgIcon(React__default['default'].createElement("path", { d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), 'ErrorOutline');

var Info = createSvgIcon(React__default['default'].createElement("path", { d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }), 'Info');

var ReportProblem = createSvgIcon(React__default['default'].createElement("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), 'ReportProblem');

var id = 0;
function generateId() {
    return ++id;
}
function useId() {
    var id = React.useState(generateId)[0];
    return '' + id;
}

var colors$1 = {
    inherit: 'text-inherit',
    initial: 'text-black-90',
    inverse: 'text-white-90',
};
var variants$1 = {
    h1: "text-6xl font-medium tracking-tight leading-tighter",
    h2: "text-5xl font-medium tracking-tight leading-tight",
    h3: "text-4xl font-medium tracking-normal leading-tighter",
    h4: "text-3xl font-medium tracking-normal leading-tight",
    h5: "text-2xl font-medium tracking-normal leading-snug",
    h6: "text-xl font-medium tracking-wide leading-normal",
    subtitle1: "text-base font-medium tracking-normal leading-7",
    subtitle2: "text-sm font-medium tracking-wide leading-6",
    subtitle3: "text-xs font-medium tracking-wider leading-loose",
    body1: "text-base font-normal tracking-normal leading-6",
    body2: "text-sm font-normal tracking-wide leading-5",
    button: "text-sm font-medium tracking-wide leading-6",
    caption: "text-xs font-normal tracking-wider leading-tighter",
    overline: "text-xs font-medium tracking-widest leading-looser uppercase",
};
function Typography(_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'initial' : _b, _c = _a.component, Component = _c === void 0 ? 'span' : _c, _d = _a.truncate, truncate = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? 'body1' : _e;
    return (React__default['default'].createElement(Component, { className: clsx__default['default']('font-sans', colors$1[color], truncate ? 'truncate' : null, variants$1[variant]) }, children));
}

var ProgressContext = React.createContext(null);
var useProgress = function () {
    return React.useContext(ProgressContext);
};

var sizes$1 = {
    large: {
        animateIndeterminate: 'animate-circular-indeterminate-large',
        size: 44,
        strokeDasharray: '80px, 200px',
        thickness: 3.6,
    },
    medium: {
        animateIndeterminate: 'animate-circular-indeterminate-medium',
        size: 24,
        strokeDasharray: '44px, 109px',
        thickness: 2.0,
    },
    small: {
        animateIndeterminate: 'animate-circular-indeterminate-small',
        size: 16,
        strokeDasharray: '29px, 73px',
        thickness: 1.3,
    },
};
function Circular(_a) {
    var label = _a["aria-label"], labelledBy = _a["aria-labelledby"], max = _a["aria-valuemax"], min = _a["aria-valuemin"], now = _a["aria-valuenow"], valueText = _a["aria-valuetext"], children = _a.children, color = _a.color, id = _a.id, _b = _a.size, size = _b === void 0 ? 'large' : _b, value = _a.value;
    var descriptionId = useProgress()[0];
    var iconSize = sizes$1[size].size;
    var iconThickness = sizes$1[size].thickness;
    var style = {};
    if (value === undefined) {
        style.strokeDasharray = sizes$1[size].strokeDasharray;
        style.strokeDashoffset = '0px';
    }
    else {
        var circumference = 2 * Math.PI * ((iconSize - iconThickness) / 2);
        style.strokeDasharray = circumference.toFixed(3);
        style.strokeDashoffset =
            value === 0
                ? circumference.toFixed(3)
                : "".concat((((100 - value) / 100) * circumference).toFixed(3), "px");
    }
    var nameProps = {
        'aria-labelledby': descriptionId,
    };
    if (labelledBy) {
        nameProps = {
            'aria-labelledby': labelledBy,
        };
    }
    else if (label) {
        nameProps = {
            'aria-label': label,
        };
    }
    return (React__default['default'].createElement("div", { className: "inline-flex flex-col items-center justify-center" },
        React__default['default'].createElement("div", __assign({}, nameProps, { "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": now, "aria-valuetext": valueText, className: clsx__default['default'](value === undefined ? 'animate-spin-1.4' : null), id: id, role: "progressbar", style: {
                height: iconSize,
                transform: value === undefined ? undefined : 'rotate(-90deg)',
                width: iconSize,
            } }),
            React__default['default'].createElement("svg", { className: clsx__default['default']('block overflow-hidden', colors$2[color].bar.circular), viewBox: "".concat(iconSize / 2, " ").concat(iconSize / 2, " ").concat(iconSize, " ").concat(iconSize) },
                React__default['default'].createElement("circle", { className: clsx__default['default']('stroke-current', value === undefined
                        ? sizes$1[size].animateIndeterminate
                        : 'duration-200 ease-in transition-stroke-dashoffset'), cx: iconSize, cy: iconSize, fill: "none", r: (iconSize - iconThickness) / 2, strokeWidth: iconThickness, style: style }))),
        children));
}

function Linear(_a) {
    var label = _a["aria-label"], labelledBy = _a["aria-labelledby"], max = _a["aria-valuemax"], min = _a["aria-valuemin"], now = _a["aria-valuenow"], valueText = _a["aria-valuetext"], color = _a.color, id = _a.id, value = _a.value;
    return (React__default['default'].createElement("div", { "aria-label": labelledBy === undefined ? label : undefined, "aria-labelledby": labelledBy, "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": now, "aria-valuetext": valueText, className: clsx__default['default']('flex relative w-full h-1 overflow-hidden', colors$2[color].track.linear), id: id, role: "progressbar" },
        React__default['default'].createElement("div", { className: clsx__default['default']('flex h-full', colors$2[color].bar.linear, value === undefined
                ? 'animate-linear-indeterminate-1 absolute top-0 left-0 bottom-0 w-auto'
                : 'duration-200 ease-in transition-width will-change-width'), style: value === undefined ? {} : { width: "".concat(value, "%") } }),
        value === undefined ? (React__default['default'].createElement("div", { className: "absolute top-0 bottom-0 left-0 transition-transform duration-200 origin-left animate-linear-indeterminate-2" })) : null));
}

function Description(_a) {
    var children = _a.children, _b = _a.inverse, inverse = _b === void 0 ? false : _b, role = _a.role;
    var _c = useProgress(), setDescriptionId = _c[1];
    var id = "coconut-progress-message-".concat(useId());
    React.useEffect(function () {
        setDescriptionId(id);
    }, [id, setDescriptionId]);
    return (React__default['default'].createElement("div", { className: "mt-4", id: id, role: role },
        React__default['default'].createElement(Typography, { color: inverse ? 'inverse' : 'initial', variant: "body2" }, children)));
}
var colors$2 = {
    info: {
        bar: {
            circular: "text-info-main",
            linear: "bg-info-main",
        },
        track: {
            linear: "bg-info-20",
        },
    },
    inverse: {
        bar: {
            circular: "text-white-100",
            linear: "bg-white-100",
        },
        track: {
            linear: "bg-white-20",
        },
    },
    primary: {
        bar: {
            circular: "text-primary-main",
            linear: "bg-primary-main",
        },
        track: {
            linear: "bg-primary-20",
        },
    },
    secondary: {
        bar: {
            circular: "text-secondary-main",
            linear: "bg-secondary-main",
        },
        track: {
            linear: "bg-secondary-20",
        },
    },
};
function Progress(_a) {
    var label = _a["aria-label"], labelledBy = _a["aria-labelledby"], valueText = _a["aria-valuetext"], children = _a.children, _b = _a.color, color = _b === void 0 ? 'primary' : _b, id = _a.id, _c = _a.size, size = _c === void 0 ? 'large' : _c, value = _a.value, _d = _a.variant, variant = _d === void 0 ? 'linear' : _d;
    var _e = React.useState(), descriptionId = _e[0], setDescriptionId = _e[1];
    var props = {
        'aria-valuemax': value === undefined ? undefined : 100,
        'aria-valuemin': value === undefined ? undefined : 0,
        'aria-valuenow': value === undefined ? undefined : Math.round(value),
    };
    if (variant === 'circular') {
        return (React__default['default'].createElement(ProgressContext.Provider, { value: [descriptionId, setDescriptionId] },
            React__default['default'].createElement(Circular, __assign({ "aria-label": label, "aria-labelledby": labelledBy, "aria-valuetext": valueText, color: color, id: id, size: size, value: value }, props), children)));
    }
    return (React__default['default'].createElement(Linear, __assign({ "aria-label": label, "aria-labelledby": labelledBy, "aria-valuetext": valueText, color: color, id: id, value: value }, props)));
}
Progress.Description = Description;

(function (AriaLiveRole) {
    /**
     * The alert role is used to communicate an important and usually time-sensitive message to the user.
     * Setting role="alert" is equivalent to setting aria-live="assertive" and aria-atomic="true".
     * It should only be used for information that requires the user's immediate attention, as it would interrupt the announcement of a user's current activity.
     * For more information see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
     */
    AriaLiveRole["Alert"] = "alert";
    /**
     * The status role defines a live region containing advisory information for the user that is not important enough to be an alert.
     * Setting role="status" is equivalent to setting aria-live="polite" and aria-atomic="true".
     * For more information see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role
     */
    AriaLiveRole["Status"] = "status";
    /**
     * The presentation role removes an element's implicit ARIA semantics from being exposed to the accessibility tree.
     * The content of the element will still be available to assistive technologies; it is only the semantics of the container,
     * and in some instance, required associated descendants, which will no longer expose their mappings to the accessibility API
     * The element with role="presentation" should not have an accessible name.
     * For more information see: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role
     */
    AriaLiveRole["Presentation"] = "presentation";
})(exports.AriaLiveRole || (exports.AriaLiveRole = {}));
var ROLE = {
    Listbox: 'listbox',
    Combobox: 'combobox',
    Dialog: 'dialog',
};

var AlertContext = React.createContext(null);
var useAlert = function () { return React.useContext(AlertContext); };
var colors$3 = {
    filled: {
        background: {
            info: 'bg-info-main text-white-100',
            error: 'bg-error-main text-white-100',
            loading: 'bg-info-main text-white-100',
            success: 'bg-success-main text-white-100',
            warning: 'bg-warning-main text-white-100',
        },
        icon: {
            info: 'text-white-100',
            error: 'text-white-100',
            loading: 'text-white-100',
            success: 'text-white-100',
            warning: 'text-white-100',
        },
    },
    minimal: {
        background: {
            info: 'bg-info-lighter text-black-90',
            error: 'bg-error-lighter text-black-90',
            loading: 'bg-info-lighter text-black-90',
            success: 'bg-success-lighter text-black-90',
            warning: 'bg-warning-lighter text-black-90',
        },
        icon: {
            info: 'text-info-main',
            error: 'text-error-main',
            loading: 'text-info-main',
            success: 'text-success-main',
            warning: 'text-warning-main',
        },
    },
};
var icons = {
    info: React__default['default'].createElement(Info, null),
    loading: React__default['default'].createElement(Progress, { color: "info", size: "medium", variant: "circular" }),
    error: React__default['default'].createElement(ErrorOutline, null),
    success: React__default['default'].createElement(CheckCircleOutline, null),
    warning: React__default['default'].createElement(ReportProblem, null),
};
function Alert(_a) {
    var children = _a.children, _b = _a.icon, icon = _b === void 0 ? null : _b, _c = _a.role, role = _c === void 0 ? exports.AriaLiveRole.Alert : _c, _d = _a.severity, severity = _d === void 0 ? 'success' : _d, _e = _a.variant, variant = _e === void 0 ? 'filled' : _e;
    return (React__default['default'].createElement("div", { className: clsx__default['default']('pl-4.5 pr-4.5 pt-2.5 pb-2.5 inline-flex items-center rounded-md flex-grow flex-wrap', colors$3[variant].background[severity]), role: role },
        React__default['default'].createElement(AlertContext.Provider, { value: [{ icon: icon, severity: severity, variant: variant }] }, children)));
}
function Content(_a) {
    var children = _a.children;
    var _b = useAlert()[0], icon = _b.icon, severity = _b.severity, variant = _b.variant;
    return (React__default['default'].createElement("div", { className: "flex flex-grow text-inherit" },
        React__default['default'].createElement("span", { className: clsx__default['default']('shrink-0 w-6 h-6 mr-2.5', colors$3[variant].icon[severity]) }, severity === 'loading' && variant === 'filled' ? (React__default['default'].createElement(Progress, { color: "inverse", size: "medium", variant: "circular" })) : (icon || icons[severity])),
        React__default['default'].createElement("div", { className: "flex flex-col justify-center flex-grow" }, children)));
}
function Description$1(_a) {
    var children = _a.children;
    return (React__default['default'].createElement(Typography, { color: "inherit", variant: "body2" }, children));
}
function Title(_a) {
    var children = _a.children;
    return (React__default['default'].createElement(Typography, { color: "inherit", component: "div", variant: "button" }, children));
}
function Actions(_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "items-end flex flex-grow flex-col ml-2.5" },
        React__default['default'].createElement("div", { className: "space-x-3" }, children)));
}
function AlertButton(_a) {
    var children = _a.children, dataSet = _a.dataSet, onClick = _a.onClick;
    var variant = useAlert()[0].variant;
    // Children must be wrapped in a span (currently) to satisfy the type requirements of the Button component
    return (React__default['default'].createElement(Button, { color: variant === 'filled' ? 'inverse' : 'default', dataSet: dataSet, onClick: onClick, size: "small", variant: "outlined" },
        React__default['default'].createElement("span", null, children)));
}
Alert.Button = AlertButton;
Alert.Content = Content;
Alert.Description = Description$1;
Alert.Title = Title;
Alert.Actions = Actions;
Alert.displayName = 'Alert';
// Proper display names are necessary to generate correct code snippets in stories
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Alert.Button.displayName = 'Alert.Button';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Alert.Content.displayName = 'Alert.Content';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Alert.Description.displayName = 'Alert.Description';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Alert.Title.displayName = 'Alert.Title';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Alert.Actions.displayName = 'Alert.Actions';

var variants$2 = {
    fullWidth: '',
    inset: {
        small: 'ml-4',
        medium: 'ml-15',
        large: 'ml-18',
    },
    middle: 'mx-4',
};
function Divider(_a) {
    var _b = _a.absolute, absolute = _b === void 0 ? false : _b, _c = _a.component, Component = _c === void 0 ? 'hr' : _c, _d = _a.flex, flex = _d === void 0 ? false : _d, _e = _a.insetSize, insetSize = _e === void 0 ? 'small' : _e, _f = _a.orientation, orientation = _f === void 0 ? 'horizontal' : _f, _g = _a.variant, variant = _g === void 0 ? 'fullWidth' : _g;
    var width = orientation === 'vertical' ? 'w-px' : absolute ? 'w-full' : null;
    var height = orientation === 'vertical'
        ? flex && !absolute
            ? 'self-stretch h-auto'
            : 'h-full'
        : 'h-px';
    return (React__default['default'].createElement(Component, { "aria-hidden": "true", className: clsx__default['default']('shrink-0 m-0 border-none bg-black-10', absolute ? 'absolute bottom-0 left-0' : null, variant === 'inset' ? variants$2.inset[insetSize] : variants$2[variant], width, height), role: "separator" }));
}

function useSyncRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return React.useCallback(function (value) {
        refs.forEach(function (ref) {
            if (ref === null || ref === undefined) {
                return;
            }
            if (typeof ref === 'function') {
                return ref(value);
            }
            ref.current = value;
        });
    }, [refs]);
}

function useWindowSize(ref) {
    var _a = React.useState({
        height: undefined,
        width: undefined,
    }), windowSize = _a[0], setWindowSize = _a[1];
    React.useEffect(function () {
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

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe[incompatible-return]: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets ? roundOffsetsByDPR(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function createDisposables() {
    var disposables = [];
    return {
        add: function (callback) {
            disposables.push(callback);
        },
        dispose: function () {
            for (var _i = 0, _a = disposables.slice(0); _i < _a.length; _i++) {
                var disposable = _a[_i];
                disposable();
            }
        },
        nextFrame: function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.requestAnimationFrame(function () {
                _this.requestAnimationFrame.apply(_this, args);
            });
        },
        requestAnimationFrame: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var raf = requestAnimationFrame.apply(void 0, args);
            this.add(function () { return cancelAnimationFrame(raf); });
        },
        setTimeout: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var timer = setTimeout.apply(void 0, args);
            this.add(function () { return clearTimeout(timer); });
        },
    };
}

function useDisposables() {
    var d = React.useState(createDisposables)[0];
    React.useEffect(function () { return function () { return d.dispose(); }; }, [d]);
    return d;
}

function useInitialRender() {
    var isInitial = React.useRef(true);
    if (isInitial.current) {
        isInitial.current = false;
        return true;
    }
    return isInitial.current;
}

var maxSize = {
  name: 'maxSize',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['offset', 'preventOverflow', 'flip'],
  fn: function fn(_ref) {
    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var overflow = detectOverflow(state, options);

    var _ref2 = state.modifiersData.preventOverflow || {
      x: 0,
      y: 0
    },
        x = _ref2.x,
        y = _ref2.y;

    var _state$rects$popper = state.rects.popper,
        width = _state$rects$popper.width,
        height = _state$rects$popper.height;

    var _state$placement$spli = state.placement.split('-'),
        basePlacement = _state$placement$spli[0];

    var widthProp = basePlacement === 'left' ? 'left' : 'right';
    var heightProp = basePlacement === 'top' ? 'top' : 'bottom';
    state.modifiersData[name] = {
      width: width - overflow[widthProp] - x,
      height: height - overflow[heightProp] - y
    };
  }
};

var applyMaxSize = {
    name: 'applyMaxSize',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['maxSize'],
    fn: function (_a) {
        var state = _a.state;
        var _b = state.modifiersData.maxSize, width = _b.width, height = _b.height;
        state.styles.popper = __assign(__assign({}, state.styles.popper), { maxWidth: "".concat(Math.max(250, width), "px"), maxHeight: "".concat(Math.max(250, height), "px") });
    },
};
var maxSize$1 = __assign(__assign({}, maxSize), { options: {
        padding: 40,
    } });

var Focus;
(function (Focus) {
    Focus[Focus["First"] = 0] = "First";
    Focus[Focus["Previous"] = 1] = "Previous";
    Focus[Focus["Next"] = 2] = "Next";
    Focus[Focus["Last"] = 3] = "Last";
    Focus[Focus["Specific"] = 4] = "Specific";
    Focus[Focus["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));
function calculateActiveIndex(action, resolvers) {
    var items = resolvers.resolveItems();
    if (items.length <= 0) {
        return null;
    }
    var currentActiveIndex = resolvers.resolveActiveIndex();
    var activeIndex = currentActiveIndex !== null && currentActiveIndex !== void 0 ? currentActiveIndex : -1;
    var nextActiveIndex = (function () {
        switch (action.focus) {
            case Focus.First:
                return items.findIndex(function (item) { return !resolvers.resolveDisabled(item); });
            case Focus.Previous: {
                var index = items
                    .slice()
                    .reverse()
                    .findIndex(function (item, index, all) {
                    if (activeIndex !== -1 && all.length - index - 1 >= activeIndex) {
                        return false;
                    }
                    return !resolvers.resolveDisabled(item);
                });
                if (index === -1) {
                    return currentActiveIndex === 0 ? items.length - 2 - index : index;
                }
                return items.length - 1 - index;
            }
            case Focus.Next: {
                if (currentActiveIndex === items.length - 1) {
                    return items.findIndex(function (item) { return !resolvers.resolveDisabled(item); });
                }
                return items.findIndex(function (item, index) {
                    if (index <= activeIndex) {
                        return false;
                    }
                    return !resolvers.resolveDisabled(item);
                });
            }
            case Focus.Last: {
                var index = items
                    .slice()
                    .reverse()
                    .findIndex(function (item) { return !resolvers.resolveDisabled(item); });
                if (index === -1) {
                    return index;
                }
                return items.length - 1 - index;
            }
            case Focus.Specific:
                return items.findIndex(function (item) { return resolvers.resolveId(item) === action.id; });
            case Focus.Nothing:
                return null;
        }
    })();
    return nextActiveIndex === -1 ? currentActiveIndex : nextActiveIndex;
}

var ActionTypes;
(function (ActionTypes) {
    ActionTypes[ActionTypes["CloseAll"] = 0] = "CloseAll";
    ActionTypes[ActionTypes["OpenMenu"] = 1] = "OpenMenu";
    ActionTypes[ActionTypes["CloseMenu"] = 2] = "CloseMenu";
    ActionTypes[ActionTypes["OpenSubmenu"] = 3] = "OpenSubmenu";
    ActionTypes[ActionTypes["CloseSubmenu"] = 4] = "CloseSubmenu";
    ActionTypes[ActionTypes["GoToItem"] = 5] = "GoToItem";
    ActionTypes[ActionTypes["SelectItem"] = 6] = "SelectItem";
    ActionTypes[ActionTypes["RefreshSelectedIndex"] = 7] = "RefreshSelectedIndex";
    ActionTypes[ActionTypes["Search"] = 8] = "Search";
    ActionTypes[ActionTypes["ClearSearch"] = 9] = "ClearSearch";
    ActionTypes[ActionTypes["RegisterItem"] = 10] = "RegisterItem";
    ActionTypes[ActionTypes["UnregisterItem"] = 11] = "UnregisterItem";
    ActionTypes[ActionTypes["UnregisterNotifyAction"] = 12] = "UnregisterNotifyAction";
    ActionTypes[ActionTypes["RegisterMultiSelect"] = 13] = "RegisterMultiSelect";
    ActionTypes[ActionTypes["RegisterSelect"] = 14] = "RegisterSelect";
})(ActionTypes || (ActionTypes = {}));

var colors$4 = {
    error: "text-error-main hover:bg-error-10 focus:bg-error-10 focus-visible:ring active:bg-error-20 disabled:text-black-25",
    default: "text-black-60 hover:bg-black-5 focus:bg-black-5 focus-visible:ring active:bg-black-15 disabled:text-black-25",
    inverse: "text-white-100 hover:bg-white-25 focus:bg-white-25 focus-visible:ring active:bg-white-45 disabled:text-white-30",
    primary: "text-primary-main hover:bg-primary-10 focus:bg-primary-10 focus-visible:ring active:bg-primary-20 disabled:text-black-25",
    secondary: "text-secondary-main hover:bg-secondary-10 focus:bg-secondary-10 focus-visible:ring active:bg-secondary-20 disabled:text-black-25",
};
var sizes$2 = {
    large: 'w-15 h-15 p-3',
    medium: 'w-12 h-12 p-3',
    small: 'w-7 h-7 p-0.5',
};
function Component(_a, ref) {
    var label = _a["aria-label"], controls = _a["aria-controls"], expanded = _a["aria-expanded"], hasPopup = _a["aria-haspopup"], children = _a.children, _b = _a.color, color = _b === void 0 ? 'default' : _b, dataSet = _a.dataSet, _c = _a.disabled, disabled = _c === void 0 ? false : _c, id = _a.id, onClick = _a.onClick, onKeyDown = _a.onKeyDown, _d = _a.size, size = _d === void 0 ? 'small' : _d, _e = _a.tabIndex, tabIndex = _e === void 0 ? 0 : _e, _f = _a.type, type = _f === void 0 ? 'button' : _f;
    return (React__default['default'].createElement("button", __assign({ "aria-controls": controls, "aria-expanded": expanded, "aria-haspopup": hasPopup, "aria-label": label, className: clsx__default['default']('shrink-0 rounded-full disabled:bg-transparent disabled:cursor-not-allowed focus:outline-none', colors$4[color], sizes$2[size]) }, toDataSet(dataSet), { disabled: disabled, id: id, onClick: onClick, onKeyDown: onKeyDown, ref: ref, tabIndex: tabIndex, type: type }), children));
}
var IconButton = React.forwardRef(Component);
IconButton.displayName = 'IconButton';

var Keys;
(function (Keys) {
    Keys["Space"] = " ";
    Keys["Enter"] = "Enter";
    Keys["Escape"] = "Escape";
    Keys["ArrowUp"] = "ArrowUp";
    Keys["ArrowDown"] = "ArrowDown";
    Keys["ArrowLeft"] = "ArrowLeft";
    Keys["ArrowRight"] = "ArrowRight";
    Keys["Tab"] = "Tab";
    Keys["Backspace"] = "Backspace";
    Keys["Delete"] = "Delete";
})(Keys || (Keys = {}));

function Button$1(_a, ref) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'default' : _b, dataSet = _a.dataSet, _c = _a.disabled, disabled = _c === void 0 ? false : _c, endAdornment = _a.endAdornment, _d = _a.icon, icon = _d === void 0 ? false : _d, _e = _a.label, label = _e === void 0 ? '' : _e, _f = _a.size, size = _f === void 0 ? 'small' : _f, startAdornment = _a.startAdornment, _g = _a.tabIndex, tabIndex = _g === void 0 ? 0 : _g, _h = _a.variant, variant = _h === void 0 ? 'text' : _h;
    var d = useDisposables();
    var _j = useMenu(), state = _j[0], dispatch = _j[1];
    var buttonRef = useSyncRefs(state.buttonRef, ref);
    var props = __assign(__assign(__assign(__assign({ 'aria-controls': "coconut-menu-".concat(state.id), 'aria-expanded': state.show ? 'true' : undefined, 'aria-haspopup': 'true', color: color, disabled: disabled }, (icon || state.headless ? {} : { endAdornment: endAdornment })), { id: "coconut-menu-button-".concat(state.id), onClick: function (event) {
            if (state.show) {
                dispatch({ type: ActionTypes.CloseMenu });
                d.nextFrame(function () {
                    var _a, _b, _c, _d, _e, _f;
                    if (state.headless) {
                        (_c = (_b = (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.focus({
                            preventScroll: true,
                        });
                    }
                    else {
                        if ((_d = state.focusRef) === null || _d === void 0 ? void 0 : _d.current) {
                            (_e = state.focusRef.current) === null || _e === void 0 ? void 0 : _e.focus({ preventScroll: true });
                        }
                        else {
                            (_f = state.buttonRef.current) === null || _f === void 0 ? void 0 : _f.focus({ preventScroll: true });
                        }
                    }
                });
            }
            else {
                event.preventDefault();
                dispatch({ type: ActionTypes.OpenMenu });
                d.nextFrame(function () {
                    var _a;
                    (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                });
            }
        }, onKeyDown: function (event) {
            if (event.repeat) {
                return;
            }
            switch (event.key) {
                case Keys.Space:
                case Keys.Enter:
                case Keys.ArrowDown:
                    event.preventDefault();
                    dispatch({ type: ActionTypes.OpenMenu });
                    d.nextFrame(function () {
                        var _a;
                        (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                        dispatch({ type: ActionTypes.GoToItem, focus: Focus.First });
                    });
                    break;
                case Keys.ArrowUp:
                    event.preventDefault();
                    dispatch({ type: ActionTypes.OpenMenu });
                    d.nextFrame(function () {
                        var _a;
                        (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Last });
                    });
            }
        }, ref: buttonRef, size: size }), (icon || state.headless ? {} : { startAdornment: startAdornment })), { tabIndex: tabIndex });
    if (icon) {
        return (React__default['default'].createElement(IconButton, __assign({ "aria-label": label, dataSet: dataSet }, props), children));
    }
    return state.headless ? (React__default['default'].createElement("button", __assign({ className: "w-full h-full text-left focus:outline-none", type: "button" }, toDataSet(dataSet), props),
        React__default['default'].createElement("div", { className: "flex items-center" }, React.Children.map(children, function (child) {
            if (React.isValidElement(child)) {
                // @ts-expect-error The only current use case here is for the
                // Table component where we use the `headless` prop in order
                // to pass the `MenuHeader` component into `Menu.Button`.
                // The types required for Typescript to not complain are
                // completely internal to that file, so we will be
                // ignoring this error.
                //
                // @see file://./../Table/Head.tsx
                return React.cloneElement(child, { show: state.show });
            }
            return child;
        })))) : (React__default['default'].createElement(Button, __assign({ dataSet: dataSet, variant: variant }, props), children));
}

function Group(_a) {
    var children = _a.children, _b = _a.label, label = _b === void 0 ? null : _b;
    var id = "coconut-menu-group-label-".concat(useId());
    return (React__default['default'].createElement("li", { className: clsx__default['default']('border-b border-black-10 last:border-b-0 py-4 last:pb-0 first:pt-0', label ? 'pt-4' : '') },
        label ? (React__default['default'].createElement("span", { className: "px-5 pb-2 whitespace-nowrap text-black-60", id: id },
            React__default['default'].createElement(Typography, { color: "inherit", variant: "subtitle3" }, label))) : null,
        React__default['default'].createElement("ul", { "aria-labelledby": label ? id : undefined, role: "group" }, children)));
}

function Group$1(_a) {
    var children = _a.children, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.helperText, helperText = _c === void 0 ? '' : _c, _d = _a.direction, direction = _d === void 0 ? 'col' : _d;
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("div", { className: clsx__default['default']("flex flex-".concat(direction), direction === 'row' ? 'items-center' : ''), role: "group" }, children),
        helperText ? (React__default['default'].createElement("span", { "aria-live": error ? 'assertive' : 'off', className: clsx__default['default']('text-xs', error ? 'text-error-main' : 'text-black-60') }, helperText)) : null));
}

var CheckBoxChecked = createSvgIcon(React__default['default'].createElement("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }), 'CheckBoxChecked');

var CheckBoxIndeterminate = createSvgIcon(React__default['default'].createElement("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" }), 'CheckBoxIndeterminate');

var CheckBoxUnchecked = createSvgIcon(React__default['default'].createElement("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }), 'CheckBoxUnchecked');

var colors$5 = {
    primary: {
        default: 'text-primary-main hover:bg-primary-10 active:bg-primary-20',
        disabled: 'text-black-30 bg-transparent',
        focused: 'bg-primary-10',
        color: 'text-primary-main',
        unchecked: 'text-black-60',
    },
    secondary: {
        default: 'text-secondary-main hover:bg-secondary-10 active:bg-secondary-20',
        disabled: 'text-black-30 bg-transparent',
        focused: 'bg-secondary-10',
        color: 'text-secondary-main',
        unchecked: 'text-black-60',
    },
    error: {
        default: 'text-error-main hover:bg-error-10 active:bg-error-20',
        disabled: 'text-black-30 bg-transparent',
        focused: 'bg-error-10',
        color: 'text-error-main',
        unchecked: 'text-black-60',
    },
};
var sizes$3 = {
    constrained: {
        medium: 'w-6 h-6',
        small: 'w-5 h-5',
    },
    default: {
        medium: 'w-10 h-10 p-2',
        small: 'w-9 h-9 p-2',
    },
};
function Input(_a) {
    var label = _a["aria-label"], children = _a.children, _b = _a.color, color = _b === void 0 ? 'primary' : _b, constrained = _a.constrained, key = _a["data-key"], _c = _a.defaultChecked, defaultChecked = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, helperText = _a.helperText, _e = _a.indeterminate, indeterminate = _e === void 0 ? false : _e, _f = _a.inputRef, inputRef = _f === void 0 ? null : _f, name = _a.name, onChange = _a.onChange, _g = _a.size, size = _g === void 0 ? 'small' : _g, tabIndex = _a.tabIndex;
    var initialStatus;
    if (indeterminate) {
        initialStatus = 'indeterminate';
    }
    else {
        initialStatus = defaultChecked ? 'checked' : 'unchecked';
    }
    var initialRender = useInitialRender();
    var ref = React.useRef(null);
    var _h = React.useState(false), focused = _h[0], setFocused = _h[1];
    var checkboxRef = useSyncRefs(ref, inputRef);
    var handleChange = function (event) {
        if (onChange) {
            onChange(event);
        }
    };
    var handleBlur = function () { return setFocused(false); };
    var handleFocus = function () { return setFocused(true); };
    React.useEffect(function () {
        if (ref.current && !initialRender) {
            ref.current.checked = defaultChecked;
        }
        // We are not supplying initialRender to the dependency array since its value is part
        // of a reference. When included, it resets the checked property to defaultChecked
        // after the checkbox is clicked programmatically for the first time
        //
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultChecked]);
    React.useEffect(function () {
        if (ref.current) {
            ref.current.indeterminate = indeterminate;
        }
        // We are not supplying initialRender to the dependency array since its value is part
        // of a reference. When included, it resets the checked property to defaultChecked
        // after the checkbox is clicked programmatically for the first time
        //
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indeterminate]);
    return (React__default['default'].createElement("label", { className: clsx__default['default']('checkbox flex flex-col font-sans', disabled ? 'cursor-not-allowed' : 'cursor-pointer') },
        React__default['default'].createElement("div", { className: "flex items-center" },
            React__default['default'].createElement("span", { className: clsx__default['default']('shrink-0 rounded-full focus:outline-none relative', disabled ? colors$5[color].disabled : colors$5[color].default, focused ? colors$5[color].focused : null, constrained ? sizes$3.constrained[size] : sizes$3.default[size]) },
                React__default['default'].createElement("input", { "aria-label": label, className: clsx__default['default']('absolute inset-0 w-full h-full p-0 m-0 opacity-0', disabled ? 'cursor-not-allowed' : 'cursor-pointer'), "data-key": key, defaultChecked: initialStatus === 'checked', disabled: disabled, name: name, onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, ref: checkboxRef, tabIndex: tabIndex, type: "checkbox" }),
                React__default['default'].createElement("span", { className: clsx__default['default']('status-active w-full h-full', disabled ? colors$5[color].disabled : colors$5[color].color) },
                    React__default['default'].createElement(CheckBoxChecked, null)),
                React__default['default'].createElement("span", { className: clsx__default['default']('status-indeterminate w-full h-full', disabled ? colors$5[color].disabled : colors$5[color].color) },
                    React__default['default'].createElement(CheckBoxIndeterminate, null)),
                React__default['default'].createElement("span", { className: clsx__default['default']('status-inactive w-full h-full', disabled ? colors$5[color].disabled : colors$5[color].unchecked) },
                    React__default['default'].createElement(CheckBoxUnchecked, null))),
            children ? (React__default['default'].createElement("div", { className: clsx__default['default']('text-sm font-normal select-none', disabled ? 'text-black-45' : 'text-black-90', constrained ? 'pl-2' : '') }, children)) : null),
        children ? (React__default['default'].createElement("div", { className: clsx__default['default']('text-xs font-normal tracking-wid', disabled ? 'text-black-30' : 'text-black-60') }, helperText ? helperText : null)) : null));
}

function Label(_a) {
    var children = _a.children;
    return React__default['default'].createElement(Typography, { variant: "subtitle2" }, children);
}

var Checkbox = { Group: Group$1, Input: Input, Label: Label };
// Proper display names are necessary to generate correct code snippets in stories
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Checkbox.Group.displayName = 'Checkbox.Group';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Checkbox.Input.displayName = 'Checkbox.Input';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Checkbox.Label.displayName = 'Checkbox.Label';

var ChevronRight = createSvgIcon(React__default['default'].createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), 'ChevronRight');

var Done = createSvgIcon(React__default['default'].createElement("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }), 'Done');

var SubmenuActionTypes;
(function (SubmenuActionTypes) {
    SubmenuActionTypes[SubmenuActionTypes["CloseAll"] = 0] = "CloseAll";
    SubmenuActionTypes[SubmenuActionTypes["OpenMenu"] = 1] = "OpenMenu";
    SubmenuActionTypes[SubmenuActionTypes["CloseMenu"] = 2] = "CloseMenu";
    SubmenuActionTypes[SubmenuActionTypes["RegisterMenu"] = 3] = "RegisterMenu";
    SubmenuActionTypes[SubmenuActionTypes["UnregisterMenu"] = 4] = "UnregisterMenu";
})(SubmenuActionTypes || (SubmenuActionTypes = {}));
var SubmenuContext = React.createContext(null);
var useSubmenu = function () {
    return React.useContext(SubmenuContext);
};
function Item(_a, ref) {
    var _b;
    var _c;
    var _d = _a.action, action = _d === void 0 ? false : _d, applyFocusRef = _a.applyFocusRef, label = _a["aria-label"], checkbox = _a.checkbox, children = _a.children, _e = _a.color, color = _e === void 0 ? 'primary' : _e, key = _a["data-key"], dataSet = _a.dataSet, _f = _a.defaultChecked, defaultChecked = _f === void 0 ? false : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, endAdornment = _a.endAdornment, _h = _a.inset, inset = _h === void 0 ? false : _h, onChange = _a.onChange, onClick = _a.onClick, _j = _a.selectable, selectable = _j === void 0 ? true : _j, selected = _a.selected, StartAdornment = _a.startAdornment, value = _a.value;
    var autocomplete = useAutocomplete();
    var d = useDisposables();
    var _k = useMenu(), state = _k[0], dispatch = _k[1];
    var _l = React.useState(undefined), submenuId = _l[0], setSubmenuId = _l[1];
    var _m = React.useReducer(function (state) {
        return !state;
    }, defaultChecked), checked = _m[0], toggleChecked = _m[1];
    var id = "coconut-menu-item-".concat(useId());
    var checkboxRef = React.useRef(null);
    var itemRef = React.useRef(null);
    ref = ref || itemRef;
    var showSubmenu = id === state.openSubmenuItemId;
    var hasSubmenu = React.useMemo(function () {
        var submenu = false;
        React.Children.forEach(children, function (child) {
            if (child.type === Menu) {
                submenu = true;
            }
        });
        return submenu;
    }, [children]);
    var isCheckbox = checkbox && !hasSubmenu;
    var dataRef = React.useRef({
        checkbox: isCheckbox,
        disabled: disabled,
        hasSubmenu: hasSubmenu,
    });
    var active = state.activeItemIndex === null
        ? false
        : ((_c = state.items[state.activeItemIndex]) === null || _c === void 0 ? void 0 : _c.id) === id;
    var reducers = (_b = {},
        _b[SubmenuActionTypes.CloseAll] = function () {
            return dispatch({ type: ActionTypes.CloseAll });
        },
        _b[SubmenuActionTypes.CloseMenu] = function () {
            return dispatch({ type: ActionTypes.CloseSubmenu });
        },
        _b[SubmenuActionTypes.OpenMenu] = function () {
            return dispatch({ type: ActionTypes.OpenSubmenu, id: id });
        },
        _b[SubmenuActionTypes.RegisterMenu] = function (action) { return setSubmenuId(action.id); },
        _b[SubmenuActionTypes.UnregisterMenu] = function () { return setSubmenuId(undefined); },
        _b);
    var runReducer = function (action) { return reducers[action.type](action); };
    React.useEffect(function () {
        if (!active) {
            return;
        }
        d.nextFrame(function () {
            var _a, _b;
            (_b = (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView) === null || _b === void 0 ? void 0 : _b.call(_a, { block: 'nearest' });
        });
        return d.dispose;
    }, [active, d, id, state.show]);
    React.useEffect(function () {
        dataRef.current.disabled = disabled;
    }, [disabled, dataRef]);
    React.useEffect(function () {
        var _a, _b;
        dataRef.current.textValue = (_b = (_a = document
            .getElementById(id)) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    }, [id, children, dataRef]);
    React.useEffect(function () {
        dispatch({ type: ActionTypes.RegisterItem, id: id, dataRef: dataRef });
        return function () { return dispatch({ type: ActionTypes.UnregisterItem, id: id }); };
    }, [dispatch, id, dataRef]);
    React.useEffect(function () {
        if (state.listbox && selected) {
            dispatch({ type: ActionTypes.SelectItem, id: id, keepShow: true });
        }
    }, [dispatch, id, selected, state.listbox]);
    // Focus on the provided element when opening the menu
    React.useEffect(function () {
        if (state.show && (applyFocusRef === null || applyFocusRef === void 0 ? void 0 : applyFocusRef.current)) {
            applyFocusRef.current.focus();
        }
    }, [applyFocusRef, state.show]);
    // Focus on the provided element when it becomes active
    React.useEffect(function () {
        if (state.show && active && (applyFocusRef === null || applyFocusRef === void 0 ? void 0 : applyFocusRef.current)) {
            applyFocusRef.current.focus();
        }
    }, [active, applyFocusRef, state.show]);
    var handleClick = function (event) {
        var _a, _b;
        // ignore cicks on disabled items of the item's submenu
        var target = event.target;
        if (target.closest &&
            typeof target.closest === 'function' &&
            ((_a = target.closest('button')) === null || _a === void 0 ? void 0 : _a.disabled)) {
            return;
        }
        // ignore clicks when the event source is not physical descendant
        // this handles the case where we click anywhere (an Item or some empty space) in the submenu
        if (!event.currentTarget.contains(target)) {
            event.stopPropagation();
            return;
        }
        // If we already triggered checkbox click, ignore subsequent item click.
        if (isCheckbox) {
            // When clicking outside of checkbox, propagate the click
            if (target instanceof HTMLButtonElement) {
                (_b = checkboxRef.current) === null || _b === void 0 ? void 0 : _b.click();
            }
            return;
        }
        if (hasSubmenu) {
            if (showSubmenu) {
                dispatch({ type: ActionTypes.CloseSubmenu });
            }
            else {
                dispatch({ type: ActionTypes.OpenSubmenu, id: id });
            }
            return;
        }
        if (selectable && !action) {
            dispatch(state.listbox
                ? { type: ActionTypes.SelectItem, id: id }
                : { type: ActionTypes.CloseAll });
            // only focus on menu button if it's the outermost menu
            if (event.isTrusted && !state.parentRef) {
                createDisposables().nextFrame(function () {
                    var _a, _b, _c, _d, _e, _f;
                    if (state.headless) {
                        (_c = (_b = (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.focus({
                            preventScroll: true,
                        });
                    }
                    else {
                        if ((_d = state.focusRef) === null || _d === void 0 ? void 0 : _d.current) {
                            (_e = state.focusRef.current) === null || _e === void 0 ? void 0 : _e.focus({ preventScroll: true });
                        }
                        else {
                            (_f = state.buttonRef.current) === null || _f === void 0 ? void 0 : _f.focus({ preventScroll: true });
                        }
                    }
                });
            }
        }
        if (onClick) {
            return onClick(event);
        }
    };
    var handleCheckboxClick = function (event) {
        toggleChecked();
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    var handleFocus = function () {
        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Specific, id: id });
    };
    var handleLeave = function () {
        if (disabled) {
            return;
        }
        if (!active) {
            return;
        }
        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Nothing });
    };
    var handleMove = function () {
        if (disabled || (applyFocusRef === null || applyFocusRef === void 0 ? void 0 : applyFocusRef.current)) {
            return;
        }
        if (active) {
            return;
        }
        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Specific, id: id });
    };
    var EndAdornment = hasSubmenu && !endAdornment ? ChevronRight : endAdornment;
    // if the item has submenu, it should act as that menu's button
    var menuButtonProps = hasSubmenu
        ? {
            'aria-controls': submenuId,
            'aria-expanded': showSubmenu ? true : undefined,
            'aria-haspopup': true,
        }
        : {};
    return (React__default['default'].createElement(SubmenuContext.Provider, { value: [{ id: id, ref: ref, show: showSubmenu }, runReducer] },
        React__default['default'].createElement("li", { className: autocomplete === null ? 'max-w-xs' : '', 
            // child elements will have the appropriate role so this takes the <li> out of the accessibility tree
            // and solves issues where certain ARIA roles must be contained by particular parents (and other WCAG violations)
            role: "presentation" },
            React__default['default'].createElement("button", __assign({ "aria-checked": isCheckbox ? checked : undefined, "aria-label": label, "aria-selected": state.listbox && selected ? 'true' : undefined, 
                // TODO: It may be worth refactoring this component.
                // We never apply color to the item.
                // The parameter `action` is ruining the whole style and is never used in the core app.
                // The parameter `selectable` and `selected` does not rely on color.
                className: clsx__default['default']('flex items-center justify-between w-full text-left whitespace-nowrap active:bg-black-20 hover:bg-black-10', action ? 'px-2 py-1' : 'px-5 py-2', active && !disabled && selectable && 'ring-inset hover:ring-none', selectable && !disabled
                    ? 'cursor-pointer'
                    : disabled
                        ? 'cursor-not-allowed disabled:text-black-30 disabled:bg-transparent'
                        : 'cursor-default', action && 'rounded', action && !disabled && 'text-primary-main', selected && 'bg-primary-10', color === 'error' && !isCheckbox ? 'text-error-darker' : null) }, toDataSet(dataSet), { "data-key": key, disabled: disabled, id: id, onClick: handleClick, onFocus: handleFocus, onMouseLeave: handleLeave, onMouseMove: handleMove, onPointerLeave: handleLeave, onPointerMove: handleMove, ref: ref, role: state.listbox
                    ? 'option'
                    : isCheckbox
                        ? 'menuitemcheckbox'
                        : 'menuitem', type: "button", value: value }, menuButtonProps),
                React__default['default'].createElement("div", { className: clsx__default['default']('flex items-center w-full', inset ? 'pl-11' : null) },
                    StartAdornment ? (React__default['default'].createElement("span", { className: "flex shrink-0 w-6 h-6 mr-5 justify-items-start" }, typeof StartAdornment === 'function' ? (React__default['default'].createElement(StartAdornment, null)) : (StartAdornment))) : null,
                    isCheckbox ? (React__default['default'].createElement("span", { className: "flex" },
                        React__default['default'].createElement(Checkbox.Input, { color: color, constrained: true, "data-key": key, defaultChecked: defaultChecked, disabled: disabled, inputRef: checkboxRef, name: value, onChange: handleCheckboxClick },
                            React__default['default'].createElement(Typography, { color: "inherit", variant: "body2" }, children)))) : (React__default['default'].createElement(React__default['default'].Fragment, null,
                        React__default['default'].createElement("span", { className: "flex items-center justify-between w-full truncate" },
                            React__default['default'].createElement(Typography, { color: "inherit", variant: "body2" }, children)),
                        selected ? (React__default['default'].createElement("span", { className: "shrink-0 w-6 h-6 ml-2" },
                            React__default['default'].createElement(Done, null))) : null))),
                EndAdornment ? (React__default['default'].createElement("span", { className: "flex shrink-0 w-6 h-6 ml-2" },
                    React__default['default'].createElement(EndAdornment, { color: "inherit" }))) : null))));
}

function usePortalRoot() {
    var id = "coconut-portal-root-".concat(useId());
    return React.useState(function () {
        if (typeof window === 'undefined')
            return null;
        var existingRoot = document.getElementById(id);
        if (existingRoot)
            return existingRoot;
        var root = document.createElement('div');
        root.setAttribute('id', id);
        return document.body.appendChild(root);
    })[0];
}
function Portal(_a) {
    var children = _a.children, discoverable = _a.discoverable, // some portals should never be hidden from SRs
    isMenu = _a.isMenu, open = _a.open, parent = _a.parent;
    var target = usePortalRoot();
    var element = React.useState(function () {
        return typeof window === 'undefined' ? null : document.createElement('div');
    })[0];
    React.useLayoutEffect(function () {
        if (!target || !element || (isMenu && !parent))
            return;
        if (isMenu) {
            parent === null || parent === void 0 ? void 0 : parent.appendChild(element);
        }
        else {
            target.appendChild(element);
        }
        return function () {
            var _a;
            if (!target || !element)
                return;
            if (isMenu) {
                parent === null || parent === void 0 ? void 0 : parent.removeChild(element);
            }
            else {
                target.removeChild(element);
                if (target.childNodes.length <= 0) {
                    (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(target);
                }
            }
        };
    }, [target, element, isMenu, parent]);
    React.useLayoutEffect(function () {
        var _a, _b;
        if (element) {
            element.style.display = open ? 'block' : 'none';
            if (open && discoverable) {
                // react-focus-on adds these to other portals. use discoverable to override.
                (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeAttribute('aria-hidden');
                (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.removeAttribute('data-focus-on-hidden');
            }
        }
    }, [element, open, discoverable]);
    return !target || !element || (isMenu && !parent)
        ? null
        : reactDom.createPortal(children, element);
}

function Items(_a, ref) {
    var _b, _c, _d, _e, _f, _g;
    var children = _a.children;
    var d = useDisposables();
    var buttonId = (((_b = useSubmenu()) === null || _b === void 0 ? void 0 : _b[0]) || {}).id;
    var _h = useMenu(), state = _h[0], dispatch = _h[1];
    var itemsRef = useSyncRefs(state.itemsRef, ref);
    var parent = (_e = (_d = (_c = state.parentRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.parentNode;
    var onKeyDown = function (event) {
        var _a, _b;
        switch (event.key) {
            case Keys.Space:
                if (state.search !== '') {
                    event.preventDefault();
                    event.stopPropagation();
                    return dispatch({ type: ActionTypes.Search, value: event.key });
                }
            // This case purposefully falls through to allow the space key to close the menu when not searching
            case Keys.Enter:
                event.preventDefault();
                event.stopPropagation();
                if (event.repeat) {
                    return;
                }
                if (state.activeItemIndex !== null) {
                    var id = state.items[state.activeItemIndex].id;
                    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.click();
                    return;
                }
                dispatch({ type: ActionTypes.CloseMenu });
                d.nextFrame(function () {
                    var _a, _b, _c, _d, _e, _f;
                    if (state.headless) {
                        (_c = (_b = (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.focus({
                            preventScroll: true,
                        });
                    }
                    else {
                        if ((_d = state.focusRef) === null || _d === void 0 ? void 0 : _d.current) {
                            (_e = state.focusRef.current) === null || _e === void 0 ? void 0 : _e.focus({ preventScroll: true });
                        }
                        else {
                            (_f = state.buttonRef.current) === null || _f === void 0 ? void 0 : _f.focus({ preventScroll: true });
                        }
                    }
                });
                break;
            case Keys.ArrowDown:
                event.preventDefault();
                event.stopPropagation();
                return dispatch({ type: ActionTypes.GoToItem, focus: Focus.Next });
            case Keys.ArrowUp:
                event.preventDefault();
                event.stopPropagation();
                return dispatch({ type: ActionTypes.GoToItem, focus: Focus.Previous });
            case Keys.ArrowRight:
                if (state.activeItemIndex !== null) {
                    var _c = state.items[state.activeItemIndex], id = _c.id, dataRef = _c.dataRef;
                    if (dataRef.current.hasSubmenu && !state.openSubmenuItemId) {
                        event.preventDefault();
                        event.stopPropagation();
                        if (event.repeat) {
                            return;
                        }
                        (_b = document.getElementById(id)) === null || _b === void 0 ? void 0 : _b.click();
                    }
                }
                break;
            case Keys.ArrowLeft:
                if (state.parentRef) {
                    event.preventDefault();
                    event.stopPropagation();
                    dispatch({ type: ActionTypes.CloseMenu });
                    d.nextFrame(function () {
                        var _a;
                        (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                    });
                }
                break;
            case Keys.Escape:
                event.preventDefault();
                event.stopPropagation();
                dispatch({ type: ActionTypes.CloseMenu });
                d.nextFrame(function () {
                    var _a, _b, _c, _d, _e, _f;
                    if (state.headless) {
                        (_c = (_b = (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.focus({
                            preventScroll: true,
                        });
                    }
                    else {
                        if ((_d = state.focusRef) === null || _d === void 0 ? void 0 : _d.current) {
                            (_e = state.focusRef.current) === null || _e === void 0 ? void 0 : _e.focus({ preventScroll: true });
                        }
                        else {
                            (_f = state.buttonRef.current) === null || _f === void 0 ? void 0 : _f.focus({ preventScroll: true });
                        }
                    }
                });
                break;
            case Keys.Tab:
                event.stopPropagation();
                return event.preventDefault();
            default:
                if (state.searchable && event.key.length === 1) {
                    event.stopPropagation();
                    dispatch({ type: ActionTypes.Search, value: event.key });
                    d.setTimeout(function () { return dispatch({ type: ActionTypes.ClearSearch }); }, 350);
                }
                break;
        }
    };
    // When menu items change, selected item can have a different index in the list
    React.useEffect(function () {
        if (state.listbox) {
            dispatch({ type: ActionTypes.RefreshSelectedIndex });
        }
    }, [children, dispatch, state.listbox]);
    var _j = ((_f = useAutocomplete()) === null || _f === void 0 ? void 0 : _f[0]) || {}, multi = _j.multi, minWidth = _j.minWidth;
    var items = (
    // this rule is disabled by design, as listbox is an interactive element
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    React__default['default'].createElement("ul", __assign({}, (multi || state.integratedMultiSelect
        ? { 'aria-multiselectable': true }
        : {}), { "aria-activedescendant": state.activeItemIndex === null
            ? undefined
            : (_g = state.items[state.activeItemIndex]) === null || _g === void 0 ? void 0 : _g.id, "aria-labelledby": buttonId || "coconut-menu-button-".concat(state.id), className: clsx__default['default']('absolute z-9998 flex flex-col py-4 overflow-hidden overflow-y-auto rounded bg-white-100 shadow-5 focus:outline-none', state.listbox ? 'w-auto' : '', state.show ? null : 'hidden'), id: "coconut-menu-".concat(state.id), onKeyDown: onKeyDown, ref: itemsRef, role: state.listbox ? 'listbox' : 'menu', style: { minWidth: minWidth }, tabIndex: 0 }), children));
    return state.parentRef ? (
    // isMenu means it's a subMenu/nested menu
    React__default['default'].createElement(Portal, { discoverable: true, isMenu: true, open: state.show, parent: parent }, items)) : (React__default['default'].createElement(Portal, { discoverable: true, open: state.show },
        React__default['default'].createElement("div", null, items)));
}

var _a;
var MenuContext = React.createContext(null);
var reducers = (_a = {},
    _a[ActionTypes.CloseAll] = function (state) {
        // if it's a submenu, propagate the action to the parent menu, otherwise close the menu
        if (state.parentRef) {
            return __assign(__assign({}, state), { notifyAction: { type: SubmenuActionTypes.CloseAll } });
        }
        return __assign(__assign({}, state), { show: false, openSubmenuItemId: null });
    },
    _a[ActionTypes.CloseMenu] = function (state, action) {
        return __assign(__assign({}, state), { notifyAction: action.external
                ? undefined
                : { type: SubmenuActionTypes.CloseMenu }, show: false, openSubmenuItemId: null });
    },
    _a[ActionTypes.CloseSubmenu] = function (state) {
        return __assign(__assign({}, state), { openSubmenuItemId: null });
    },
    _a[ActionTypes.OpenMenu] = function (state) {
        var _a, _b, _c, _d;
        // vertical offset for submenu so that it's centered at its parent item
        var skidding = ((_a = state.parentRef) === null || _a === void 0 ? void 0 : _a.current) && ((_b = state.parentItemRef) === null || _b === void 0 ? void 0 : _b.current)
            ? state.parentItemRef.current.offsetTop -
                state.parentRef.current.offsetHeight / 2 +
                state.parentItemRef.current.offsetHeight / 2 -
                state.parentRef.current.scrollTop
            : 0;
        var distance = state.parentRef || state.listbox ? 4 : 8;
        createPopper(state.parentRef ? state.parentRef.current : state.buttonRef.current, state.itemsRef.current, {
            modifiers: [
                {
                    name: 'flip',
                    options: {
                        fallbackPlacements: state.parentRef
                            ? ['right', 'left']
                            : ['top', 'bottom'],
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [skidding, distance],
                    },
                },
                maxSize$1,
                applyMaxSize,
            ],
            placement: state.parentRef ? 'right' : state.placement,
        });
        (_d = (_c = state.onOpenRef).current) === null || _d === void 0 ? void 0 : _d.call(_c);
        return __assign(__assign({}, state), { activeItemIndex: state.listbox ? state.selectedItem.index : null, show: true });
    },
    _a[ActionTypes.OpenSubmenu] = function (state, action) {
        return __assign(__assign({}, state), { openSubmenuItemId: action.id });
    },
    _a[ActionTypes.GoToItem] = function (state, action) {
        var activeItemIndex = calculateActiveIndex(action, {
            resolveActiveIndex: function () { return state.activeItemIndex; },
            resolveDisabled: function (item) { return item.dataRef.current.disabled; },
            resolveId: function (item) { return item.id; },
            resolveItems: function () { return state.items; },
        });
        return __assign(__assign({}, state), { activeItemIndex: activeItemIndex });
    },
    _a[ActionTypes.SelectItem] = function (state, action) {
        var index = state.items.findIndex(function (item) { return item.id === action.id; });
        return __assign(__assign({}, state), { selectedItem: index >= 0 ? { id: action.id, index: index } : { id: null, index: null }, show: action.keepShow ? state.show : false });
    },
    _a[ActionTypes.RefreshSelectedIndex] = function (state) {
        if (state.selectedItem.id) {
            var index = state.items.findIndex(function (item) { return item.id === state.selectedItem.id; });
            return __assign(__assign({}, state), { selectedItem: index >= 0
                    ? __assign(__assign({}, state.selectedItem), { index: index }) : { id: null, index: null } });
        }
        return state;
    },
    _a[ActionTypes.Search] = function (state, action) {
        var query = state.search + action.value;
        var match = state.items.findIndex(function (item) {
            var _a;
            return ((_a = item.dataRef.current.textValue) === null || _a === void 0 ? void 0 : _a.startsWith(query)) &&
                !item.dataRef.current.disabled;
        });
        if (match === -1 || match === state.activeItemIndex) {
            return __assign(__assign({}, state), { search: query });
        }
        return __assign(__assign({}, state), { activeItemIndex: match, search: query });
    },
    _a[ActionTypes.ClearSearch] = function (state) { return (__assign(__assign({}, state), { search: '' })); },
    _a[ActionTypes.RegisterItem] = function (state, action) { return (__assign(__assign({}, state), { items: __spreadArray(__spreadArray([], state.items, true), [{ id: action.id, dataRef: action.dataRef }], false) })); },
    _a[ActionTypes.UnregisterItem] = function (state, action) {
        var nextItems = state.items.slice();
        var currentActiveItem = state.activeItemIndex === null ? null : nextItems[state.activeItemIndex];
        var index = nextItems.findIndex(function (nextItem) { return nextItem.id === action.id; });
        if (index !== -1) {
            nextItems.splice(index, 1);
        }
        return __assign(__assign({}, state), { items: nextItems, activeItemIndex: (function () {
                if (index === state.activeItemIndex) {
                    return null;
                }
                if (currentActiveItem === null) {
                    return null;
                }
                return nextItems.indexOf(currentActiveItem);
            })() });
    },
    _a[ActionTypes.UnregisterNotifyAction] = function (state) { return (__assign(__assign({}, state), { notifyAction: undefined })); },
    _a[ActionTypes.RegisterMultiSelect] = function (state) { return (__assign(__assign({}, state), { integratedMultiSelect: true, searchable: false })); },
    _a[ActionTypes.RegisterSelect] = function (state) { return (__assign(__assign({}, state), { listbox: true })); },
    _a);
var runReducer = function (state, action) {
    return reducers[action.type](state, action);
};
var useMenu = function () {
    return React.useContext(MenuContext);
};
function Menu(_a) {
    var _b, _c, _d;
    var children = _a.children, focusRef = _a.focusRef, _e = _a.headless, headless = _e === void 0 ? false : _e, onClose = _a.onClose, onOpen = _a.onOpen, _f = _a.placement, placement = _f === void 0 ? 'bottom-start' : _f;
    var d = useDisposables();
    var parentState = (_b = useMenu()) === null || _b === void 0 ? void 0 : _b[0];
    var _g = ((_c = useSubmenu()) === null || _c === void 0 ? void 0 : _c[0]) || {}, ref = _g.ref, show = _g.show;
    var notifyParent = (_d = useSubmenu()) === null || _d === void 0 ? void 0 : _d[1];
    var initialRender = useInitialRender();
    var onCloseRef = React.useRef(onClose);
    var onOpenRef = React.useRef(onOpen);
    var _h = React.useReducer(runReducer, {
        activeItemIndex: null,
        buttonRef: parentState ? parentState.itemsRef : React.createRef(),
        focusRef: focusRef,
        headless: headless,
        itemsRef: React.createRef(),
        items: [],
        id: useId(),
        integratedMultiSelect: false,
        placement: placement,
        onCloseRef: onCloseRef,
        onOpenRef: onOpenRef,
        search: '',
        searchable: true,
        listbox: false,
        selectedItem: { id: null, index: null },
        show: false,
        notifyAction: undefined,
        openSubmenuItemId: null,
        parentItemRef: ref,
        parentRef: parentState ? parentState.itemsRef : null,
        minWidth: 'auto',
    }), state = _h[0], dispatch = _h[1];
    React.useEffect(function () {
        onCloseRef.current = onClose;
    }, [onClose]);
    React.useEffect(function () {
        onOpenRef.current = onOpen;
    }, [onOpen]);
    React.useEffect(function () {
        function clickAway(event) {
            var _a, _b, _c, _d;
            var target = event.target;
            if (!state.show) {
                return;
            }
            if ((_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.contains(target)) {
                return;
            }
            // check if target in inside the portal that contains the main menu and all submenus
            if ((_d = (_c = (_b = state.itemsRef.current) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.contains(target)) {
                return;
            }
            dispatch({ type: ActionTypes.CloseMenu });
        }
        window.addEventListener('mousedown', clickAway);
        return function () { return window.removeEventListener('mousedown', clickAway); };
    }, [d, dispatch, state]);
    React.useEffect(function () {
        notifyParent === null || notifyParent === void 0 ? void 0 : notifyParent({
            type: SubmenuActionTypes.RegisterMenu,
            id: "coconut-menu-".concat(state.id),
        });
        return function () { return notifyParent === null || notifyParent === void 0 ? void 0 : notifyParent({ type: SubmenuActionTypes.UnregisterMenu }); };
    }, [notifyParent, state.id]);
    React.useEffect(function () {
        // when submenu is opened/closed from parent, act as if this menu's button is clicked
        if (show !== undefined && state.show !== show) {
            if (show) {
                dispatch({ type: ActionTypes.OpenMenu });
                if (!state.integratedMultiSelect) {
                    d.nextFrame(function () {
                        var _a;
                        (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                    });
                }
            }
            else {
                dispatch({ type: ActionTypes.CloseMenu, external: true });
                d.nextFrame(function () {
                    var _a;
                    (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                });
            }
        }
        // we don't want to include stat.show because this hook should only trigger when
        // submenu is opened/closed from its parent
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show, dispatch, state.itemsRef, state.buttonRef, d]);
    React.useEffect(function () {
        // when submenu is closed from within, need to notify parent
        if (state.notifyAction) {
            dispatch({ type: ActionTypes.UnregisterNotifyAction });
            notifyParent === null || notifyParent === void 0 ? void 0 : notifyParent(state.notifyAction);
        }
    }, [notifyParent, state.notifyAction]);
    React.useEffect(function () {
        // when all menus are closed, focus on the outermost menu's focusable element
        if (!state.show && !state.parentRef) {
            d.nextFrame(function () {
                var _a, _b, _c, _d, _e, _f;
                if (!initialRender) {
                    if (state.headless) {
                        (_c = (_b = (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.focus({
                            preventScroll: true,
                        });
                    }
                    else {
                        if ((_d = state.focusRef) === null || _d === void 0 ? void 0 : _d.current) {
                            (_e = state.focusRef.current) === null || _e === void 0 ? void 0 : _e.focus({ preventScroll: true });
                        }
                        else {
                            (_f = state.buttonRef.current) === null || _f === void 0 ? void 0 : _f.focus({ preventScroll: true });
                        }
                    }
                }
            });
        }
    }, [
        d,
        state.buttonRef,
        state.focusRef,
        state.headless,
        state.parentRef,
        state.show,
    ]);
    React.useEffect(function () {
        var _a, _b;
        if (!state.show && !initialRender) {
            (_b = (_a = state.onCloseRef).current) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    }, [state.onCloseRef, state.show]);
    return (React__default['default'].createElement(MenuContext.Provider, { value: [state, dispatch] },
        React__default['default'].createElement("div", { className: "relative flex flex-grow font-sans" }, children)));
}
Menu.Button = React.forwardRef(Button$1);
Menu.Group = Group;
Menu.Item = React.forwardRef(Item);
Menu.Items = React.forwardRef(Items);

var ActionTypes$1;
(function (ActionTypes) {
    ActionTypes[ActionTypes["Clear"] = 0] = "Clear";
    ActionTypes[ActionTypes["ClearSearching"] = 1] = "ClearSearching";
    ActionTypes[ActionTypes["ClearSelecting"] = 2] = "ClearSelecting";
    ActionTypes[ActionTypes["RegisterGroup"] = 3] = "RegisterGroup";
    ActionTypes[ActionTypes["SelectOption"] = 4] = "SelectOption";
    ActionTypes[ActionTypes["SetSearching"] = 5] = "SetSearching";
    ActionTypes[ActionTypes["UnregisterGroup"] = 6] = "UnregisterGroup";
    ActionTypes[ActionTypes["SetMinWidth"] = 7] = "SetMinWidth";
})(ActionTypes$1 || (ActionTypes$1 = {}));

function Group$2(_a) {
    var children = _a.children, _b = _a.display, display = _b === void 0 ? exports.DisplayModes.WithTerm : _b, _c = _a.label, label = _c === void 0 ? null : _c;
    var _d = useAutocomplete(), searching = _d[0].searching, dispatch = _d[1];
    var id = useId();
    var show = display === exports.DisplayModes.Always ||
        (searching
            ? display === exports.DisplayModes.WithTerm
            : display === exports.DisplayModes.WithoutTerm);
    React.useEffect(function () {
        dispatch({
            type: ActionTypes$1.RegisterGroup,
            id: id,
            data: { display: display, hasChildren: React.Children.count(children) > 0 },
        });
    }, [children, dispatch, display, id]);
    React.useEffect(function () {
        return function () {
            dispatch({
                type: ActionTypes$1.UnregisterGroup,
                id: id,
            });
        };
    }, [dispatch, id]);
    return show && React.Children.count(children) > 0 ? (React__default['default'].createElement(Menu.Group, { label: label }, children)) : null;
}
Group$2.uiName = 'Autocomplete.Group';

var Add = createSvgIcon(React__default['default'].createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), 'Add');

createSvgIcon(React__default['default'].createElement("path", { d: "M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19H17V16H14V10H17V7H21.735C21.3908 6.40084 20.7449 6 20 6ZM14 6H10V4H14V6Z M21 9V12H24V14H21V17H19V14H16V12H19V9H21Z" }), 'AddToWorkflow');

createSvgIcon(React__default['default'].createElement("path", { d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }), 'Alarm');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "m21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55c.34-1.07-.47-2.52-1.93-2.52-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55c-1.07-.33-2.51.48-2.51 1.93 0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55c-.34 1.07.47 2.52 1.93 2.52 1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" }),
    React__default['default'].createElement("path", { d: "m15 9 .94-2.07 2.06-.93-2.06-.93-.94-2.07-.92 2.07-2.08.93 2.08.93z" }),
    React__default['default'].createElement("path", { d: "m3.5 11 .5-2 2-.5-2-.5-.5-2-.5 2-2 .5 2 .5z" })), 'Analytics');

var ArrowBack = createSvgIcon(React__default['default'].createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }), 'ArrowBack');

var ArrowDownward = createSvgIcon(React__default['default'].createElement("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }), 'ArrowDownward');

createSvgIcon(React__default['default'].createElement("path", { d: "M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" }), 'ArrowRightAlt');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" }), 'AssignmentIndicator');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M12.1895 20L7.18945 15H3.18945V9H7.18945L12.1895 4V20ZM14.1895 7.96973C15.6695 8.70973 16.6895 10.23 16.6895 12C16.6895 12.3051 16.6564 12.6022 16.5986 12.8896C16.151 13.3001 15.8543 13.8712 15.7979 14.5098L15.791 14.6904C15.3701 15.2496 14.8225 15.7072 14.1895 16.0195V7.96973ZM14.1895 3.23047C18.1994 4.14051 21.1895 7.72004 21.1895 12C21.1895 12.9298 21.0481 13.8264 20.7861 14.6699L20.7715 14.4443C20.6631 13.5013 20.031 12.7208 19.1768 12.3955C19.1841 12.2646 19.1895 12.1328 19.1895 12C19.1895 8.83001 17.0794 6.15004 14.1895 5.29004V3.23047Z" }),
    React__default['default'].createElement("path", { d: "M18.288 14.7328L18.3601 20.2057M14.8345 18.4379L18.37 21.9734M18.3601 21.9634L21.8956 18.4278", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'AudioDownload');

createSvgIcon(React__default['default'].createElement("path", { d: "M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z" }), 'BarChart');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" }), 'Block');

createSvgIcon(React__default['default'].createElement("path", { d: "M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }), 'Blur');

createSvgIcon(React__default['default'].createElement("path", { d: "M8.72727 7.09091C7.74545 7.09091 7.09091 7.74545 7.09091 8.72727C7.09091 9.70909 7.74545 10.3636 8.72727 10.3636C9.70909 10.3636 10.3636 9.70909 10.3636 8.72727C10.3636 7.74545 9.70909 7.09091 8.72727 7.09091ZM8.72727 13.6364C7.74545 13.6364 7.09091 14.2909 7.09091 15.2727C7.09091 16.2545 7.74545 16.9091 8.72727 16.9091C9.70909 16.9091 10.3636 16.2545 10.3636 15.2727C10.3636 14.2909 9.70909 13.6364 8.72727 13.6364ZM3.81818 7.90909C3.32727 7.90909 3 8.23636 3 8.72727C3 9.21818 3.32727 9.54545 3.81818 9.54545C4.30909 9.54545 4.63636 9.21818 4.63636 8.72727C4.63636 8.23636 4.30909 7.90909 3.81818 7.90909ZM8.72727 19.3636C8.23636 19.3636 7.90909 19.6909 7.90909 20.1818C7.90909 20.6727 8.23636 21 8.72727 21C9.21818 21 9.54545 20.6727 9.54545 20.1818C9.54545 19.6909 9.21818 19.3636 8.72727 19.3636ZM3.81818 14.4545C3.32727 14.4545 3 14.7818 3 15.2727C3 15.7636 3.32727 16.0909 3.81818 16.0909C4.30909 16.0909 4.63636 15.7636 4.63636 15.2727C4.63636 14.7818 4.30909 14.4545 3.81818 14.4545ZM8.72727 4.63636C9.21818 4.63636 9.54545 4.30909 9.54545 3.81818C9.54545 3.32727 9.21818 3 8.72727 3C8.23636 3 7.90909 3.32727 7.90909 3.81818C7.90909 4.30909 8.23636 4.63636 8.72727 4.63636ZM15.2727 7.09091C14.2909 7.09091 13.6364 7.74545 13.6364 8.72727C13.6364 9.70909 14.2909 10.3636 15.2727 10.3636C16.2545 10.3636 16.9091 9.70909 16.9091 8.72727C16.9091 7.74545 16.2545 7.09091 15.2727 7.09091ZM15.2727 4.63636C15.7636 4.63636 16.0909 4.30909 16.0909 3.81818C16.0909 3.32727 15.7636 3 15.2727 3C14.7818 3 14.4545 3.32727 14.4545 3.81818C14.4545 4.30909 14.7818 4.63636 15.2727 4.63636ZM20.1818 14.4545C19.6909 14.4545 19.3636 14.7818 19.3636 15.2727C19.3636 15.7636 19.6909 16.0909 20.1818 16.0909C20.6727 16.0909 21 15.7636 21 15.2727C21 14.7818 20.6727 14.4545 20.1818 14.4545ZM20.1818 7.90909C19.6909 7.90909 19.3636 8.23636 19.3636 8.72727C19.3636 9.21818 19.6909 9.54545 20.1818 9.54545C20.6727 9.54545 21 9.21818 21 8.72727C21 8.23636 20.6727 7.90909 20.1818 7.90909ZM15.2727 19.3636C14.7818 19.3636 14.4545 19.6909 14.4545 20.1818C14.4545 20.6727 14.7818 21 15.2727 21C15.7636 21 16.0909 20.6727 16.0909 20.1818C16.0909 19.6909 15.7636 19.3636 15.2727 19.3636ZM15.2727 13.6364C14.2909 13.6364 13.6364 14.2909 13.6364 15.2727C13.6364 16.2545 14.2909 16.9091 15.2727 16.9091C16.2545 16.9091 16.9091 16.2545 16.9091 15.2727C16.9091 14.2909 16.2545 13.6364 15.2727 13.6364Z" }), 'BlurSlightly');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" }), 'Calendar');

createSvgIcon(React__default['default'].createElement("path", { d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" }), 'Call');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" }), 'CallEnd');

var Cancel = createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }), 'Cancel');

createSvgIcon(React__default['default'].createElement("path", { d: "M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }), 'CancelOutline');

createSvgIcon(React__default['default'].createElement("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.41 15.95L12 13.36l2.59 2.59L16 14.54l-2.59-2.59L16 9.36l-1.41-1.41L12 10.54 9.41 7.95 8 9.36l2.59 2.59L8 14.54z" }), 'CancelPresentation');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M12 2l-5.5 9h11z" }),
    React__default['default'].createElement("circle", { cx: "17.5", cy: "17.5", r: "4.5" }),
    React__default['default'].createElement("path", { d: "M3 13.5h8v8H3z" })), 'Category');

createSvgIcon(React__default['default'].createElement("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" }), 'Chat');

createSvgIcon(React__default['default'].createElement("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }), 'ChatBubbleOutline');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M20 2C21.1 2 22 2.9 22 4V15.3125C21.8687 15.351 21.74 15.4005 21.6152 15.4609L21.5957 13.9814L21.5791 13.7266C21.4346 12.4677 20.3577 11.4978 19.0635 11.5146C17.7691 11.5317 16.7168 12.5297 16.6055 13.792L16.5967 14.0479L16.6143 15.416C15.7051 15.0329 14.6157 15.2115 13.875 15.9521C13.3154 16.5117 13.0784 17.2703 13.1602 18H6L2 22L2.00977 4C2.00977 2.9 2.9 2 4 2H20ZM6 12V14H14V12H6ZM6 9V11H18V9H6ZM6 6V8H18V6H6Z" }),
    React__default['default'].createElement("path", { d: "M19.096 14.0145L19.1682 19.4874M15.6425 17.7196L19.1781 21.2551M19.1682 21.2451L22.7037 17.7096", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'ChatDownload');

var ChevronLeft = createSvgIcon(React__default['default'].createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }), 'ChevronLeft');

var Close = createSvgIcon(React__default['default'].createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), 'Close');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z" }), 'ClosedCaption');

createSvgIcon(React__default['default'].createElement("path", { d: "M13 5V4C13 3.71667 13.0958 3.47917 13.2875 3.2875C13.4792 3.09583 13.7167 3 14 3H20C20.2833 3 20.5208 3.09583 20.7125 3.2875C20.9042 3.47917 21 3.71667 21 4V5C21 5.28333 20.9042 5.52083 20.7125 5.7125C20.5208 5.90417 20.2833 6 20 6H14C13.7167 6 13.4792 5.90417 13.2875 5.7125C13.0958 5.52083 13 5.28333 13 5ZM3 5V4C3 3.71667 3.09583 3.47917 3.2875 3.2875C3.47917 3.09583 3.71667 3 4 3H10C10.2833 3 10.5208 3.09583 10.7125 3.2875C10.9042 3.47917 11 3.71667 11 4V5C11 5.28333 10.9042 5.52083 10.7125 5.7125C10.5208 5.90417 10.2833 6 10 6H4C3.71667 6 3.47917 5.90417 3.2875 5.7125C3.09583 5.52083 3 5.28333 3 5ZM13 20V9C13 8.71667 13.0958 8.47917 13.2875 8.2875C13.4792 8.09583 13.7167 8 14 8H20C20.2833 8 20.5208 8.09583 20.7125 8.2875C20.9042 8.47917 21 8.71667 21 9V20C21 20.2833 20.9042 20.5208 20.7125 20.7125C20.5208 20.9042 20.2833 21 20 21H14C13.7167 21 13.4792 20.9042 13.2875 20.7125C13.0958 20.5208 13 20.2833 13 20ZM3 20V9C3 8.71667 3.09583 8.47917 3.2875 8.2875C3.47917 8.09583 3.71667 8 4 8H10C10.2833 8 10.5208 8.09583 10.7125 8.2875C10.9042 8.47917 11 8.71667 11 9V20C11 20.2833 10.9042 20.5208 10.7125 20.7125C10.5208 20.9042 10.2833 21 10 21H4C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20Z" }), 'Columns');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" }), 'Compass');

createSvgIcon(React__default['default'].createElement("path", { d: "M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" }), 'Contacts');

var DateRange = createSvgIcon(React__default['default'].createElement("path", { d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" }), 'DateRange');

createSvgIcon(React__default['default'].createElement("path", { d: "M3 20v-2h18v2ZM3 6V4h18v2Zm2 10q-.825 0-1.413-.588Q3 14.825 3 14v-4q0-.825.587-1.413Q4.175 8 5 8h14q.825 0 1.413.587Q21 9.175 21 10v4q0 .825-.587 1.412Q19.825 16 19 16Z" }), 'DayView');

createSvgIcon(React__default['default'].createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }), 'Delete');

createSvgIcon(React__default['default'].createElement("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }), 'Description');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M21 3C22.1 3 23 3.9 23 5L22.9902 16.5654C22.9222 16.4759 22.8493 16.3883 22.7676 16.3066C22.2792 15.8184 21.6397 15.5761 21 15.5771V5H3V17H11.6885C11.2751 17.8571 11.3769 18.9004 11.999 19.6631L12.1709 19.8525L13.3184 21H8V19H3C1.9 19 1 18.1 1 17V5C1 3.9 1.9 3 3 3H21ZM7 12V14H5V12H7ZM15.0762 12C15.0034 12.2344 14.9639 12.4838 14.9639 12.7422V14H8V12H15.0762ZM7 8V10H5V8H7ZM19 8V10H8V8H19Z" }),
    React__default['default'].createElement("path", { d: "M17.4645 12.7421L17.4645 19.8525M13.9388 18.0847L17.4744 21.6203M17.4645 21.6102L21 18.0747", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'DesktopUIDownload');

createSvgIcon(React__default['default'].createElement("path", { d: "M12,7V3H2v18h20V7H12z M6,19H4v-2h2V19z M6,15H4v-2h2V15z M6,11H4V9h2V11z M6,7H4V5h2V7z M10,19H8v-2h2V19z M10,15H8v-2h2 V15z M10,11H8V9h2V11z M10,7H8V5h2V7z M20,19h-8v-2h2v-2h-2v-2h2v-2h-2V9h8V19z M18,11h-2v2h2V11z M18,15h-2v2h2V15z" }), 'Domain');

createSvgIcon(React__default['default'].createElement("path", { d: "M18.85 10.39L19.91 9.33C20.69 8.55 20.69 7.28 19.91 6.5L18.5 5.09C17.72 4.31 16.45 4.31 15.67 5.09L14.61 6.15L18.85 10.39ZM13.19 7.56L4 16.76V21H8.24L17.43 11.81L13.19 7.56ZM19 17.5C19 19.69 16.46 21 14 21C13.45 21 13 20.55 13 20C13 19.45 13.45 19 14 19C15.54 19 17 18.27 17 17.5C17 17.03 16.52 16.63 15.77 16.3L17.25 14.82C18.32 15.45 19 16.29 19 17.5ZM4.58 13.35C3.61 12.79 3 12.06 3 11C3 9.2 4.89 8.37 6.56 7.64C7.59 7.18 9 6.56 9 6C9 5.59 8.22 5 7 5C5.74 5 5.2 5.61 5.17 5.64C4.82 6.05 4.19 6.1 3.77 5.76C3.36 5.42 3.28 4.81 3.62 4.38C3.73 4.24 4.76 3 7 3C9.24 3 11 4.32 11 6C11 7.87 9.07 8.72 7.36 9.47C6.42 9.88 5 10.5 5 11C5 11.31 5.43 11.6 6.07 11.86L4.58 13.35Z" }), 'Draw');

createSvgIcon(React__default['default'].createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }), 'Edit');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }), 'Error');

var EventIcon = createSvgIcon(React__default['default'].createElement("path", { d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" }), 'Event');

createSvgIcon(React__default['default'].createElement("path", { d: "m9.31 17 2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" }), 'EventBusy');

createSvgIcon(React__default['default'].createElement("path", { d: "M17 10H7V12H17V10ZM19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM14 14H7V16H14V14Z" }), 'EventNote');

createSvgIcon(React__default['default'].createElement("path", { d: "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }), 'ExitToApp');

var ExpandLess = createSvgIcon(React__default['default'].createElement("path", { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" }), 'ExpandLess');

var ExpandMore = createSvgIcon(React__default['default'].createElement("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }), 'ExpandMore');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }), 'Favorite');

createSvgIcon(React__default['default'].createElement("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" }), 'FavoriteOutline');

createSvgIcon(React__default['default'].createElement("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" }), 'FileCopy');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M15 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7L15 2ZM6 20V4H14L16 6L18 8V20H6Z" }),
    React__default['default'].createElement("path", { d: "M11 18H13V16H11V18ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" })), 'FileMissing');

createSvgIcon(React__default['default'].createElement("path", { d: "M4.18945 6H2.18945V20C2.18945 21.1 3.08945 22 4.18945 22H18.1895V20H4.18945V6ZM20.1895 2H8.18945C7.08945 2 6.18945 2.9 6.18945 4V16C6.18945 17.1 7.08945 18 8.18945 18H20.1895C21.2895 18 22.1895 17.1 22.1895 16V4C22.1895 2.9 21.2895 2 20.1895 2ZM19.1895 11H9.18945V9H19.1895V11ZM15.1895 15H9.18945V13H15.1895V15ZM19.1895 7H9.18945V5H19.1895V7Z" }), 'Files');

var FilterList = createSvgIcon(React__default['default'].createElement("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }), 'FilterList');

createSvgIcon(React__default['default'].createElement("path", { d: "M20.3249 22.475L1.5249 3.67498L2.5999 2.59998L21.3999 21.4L20.3249 22.475ZM2.9999 7.49998V5.99998H5.3499V7.49998H2.9999ZM5.9999 12.75V11.25H10.5999V12.75H5.9999ZM9.6249 7.49998L8.1249 5.99998H20.9999V7.49998H9.6249ZM9.9999 18V16.5H13.9999V18H9.9999ZM14.8749 12.75L13.3749 11.25H17.9999V12.75H14.8749Z" }), 'FilterListOff');

var FirstPage = createSvgIcon(React__default['default'].createElement("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), 'FirstPage');

createSvgIcon(React__default['default'].createElement("path", { d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" }), 'Folder');

createSvgIcon(React__default['default'].createElement("path", { d: "M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z" }), 'FormatListBulleted');

createSvgIcon(React__default['default'].createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }), 'Fullscreen');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }), 'Globe');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }), 'GroupWork');

createSvgIcon(React__default['default'].createElement("path", { d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" }), 'HelpOutline');

createSvgIcon(React__default['default'].createElement("path", { d: "M11.4 3.2C11.7556 2.93333 12.2444 2.93333 12.6 3.2L20.6 9.2C20.8518 9.38885 21 9.68524 21 10V21C21 21.5523 20.5523 22 20 22H15C14.4477 22 14 21.5523 14 21V15.75C14 15.4739 13.7761 15.25 13.5 15.25L10.5 15.25C10.2239 15.25 10 15.4739 10 15.75V21C10 21.5523 9.55228 22 9 22H4C3.44772 22 3 21.5523 3 21V10C3 9.68524 3.14819 9.38885 3.4 9.2L11.4 3.2Z" }), 'Home');

createSvgIcon(React__default['default'].createElement("path", { d: "M4 1.33331V5.33331H4.00667L4 5.33998L6.66667 7.99998L4 10.6666L4.00667 10.6733H4V14.6666H12V10.6733H11.9933L12 10.6666L9.33333 7.99998L12 5.33998L11.9933 5.33331H12V1.33331H4ZM10.6667 11V13.3333H5.33333V11L8 8.33331L10.6667 11ZM8 7.66665L5.33333 4.99998V2.66665H10.6667V4.99998L8 7.66665Z" }), 'HourglassEmpty', '0 0 16 16');

createSvgIcon(React__default['default'].createElement("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }), 'Image');

createSvgIcon(React__default['default'].createElement("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }), 'KeyboardArrowDown');

createSvgIcon(React__default['default'].createElement("path", { d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }), 'KeyboardArrowUp');

createSvgIcon(React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" }), 'Language');

var LastPage = createSvgIcon(React__default['default'].createElement("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), 'LastPage');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }), 'Launch');

createSvgIcon(React__default['default'].createElement("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" }), 'Link');

createSvgIcon(React__default['default'].createElement("path", { d: "M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z" }), 'LinkOff');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z" }), 'ListAlt');

createSvgIcon(React__default['default'].createElement("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }), 'Lock');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" }), 'LockOpen');

createSvgIcon(React__default['default'].createElement("path", { d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" }), 'Lunch');

createSvgIcon(React__default['default'].createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }), 'Mail');

createSvgIcon(React__default['default'].createElement("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" }), 'Map');

createSvgIcon(React__default['default'].createElement("path", { d: "M17 20.41L18.41 19L15 15.59L13.59 17L17 20.41ZM7.49997 8H11V13.59L5.58997 19L6.99997 20.41L13 14.41V8H16.5L12 3.5L7.49997 8Z" }), 'Merge');

createSvgIcon(React__default['default'].createElement("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" }), 'Message');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" }), 'Mic');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" }), 'MicOff');

var MoreVert = createSvgIcon(React__default['default'].createElement("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }), 'MoreVert');

createSvgIcon(React__default['default'].createElement("path", { d: "M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z" }), 'NetworkCheck');

createSvgIcon(React__default['default'].createElement("path", { d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" }), 'NewReleases');

createSvgIcon(React__default['default'].createElement("path", { d: "M10.94 8.12L7.48 4.66L9 3h6l1.83 2H20c1.1 0 2 0.9 2 2v12c0 0.05-0.01 0.1-0.02 0.16l-5.1-5.1C16.96 13.71 17 13.36 17 13 c0-2.76-2.24-5-5-5C11.64 8 11.29 8.04 10.94 8.12z M20.49 23.31L18.17 21H4c-1.1 0-2-0.9-2-2V7c0-0.59 0.27-1.12 0.68-1.49l-2-2 L2.1 2.1l19.8 19.8L20.49 23.31z M14.49 17.32l-1.5-1.5C12.67 15.92 12.35 16 12 16c-1.66 0-3-1.34-3-3c0-0.35 0.08-0.67 0.19-0.98 l-1.5-1.5C7.25 11.24 7 12.09 7 13c0 2.76 2.24 5 5 5C12.91 18 13.76 17.75 14.49 17.32z" }), 'NoPhotography');

createSvgIcon(React__default['default'].createElement("path", { d: "M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" }), 'Notes');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M14.3672 16L15 16.6328V18H3V16H14.3672ZM16.6719 11L16.6787 11.501C15.7696 11.1179 14.6801 11.2966 13.9395 12.0371C13.659 12.3176 13.4592 12.6481 13.3398 13H3V11H16.6719ZM21 6V8H20.5146C20.1154 7.74169 19.6391 7.59304 19.1279 7.59961C18.6392 7.60605 18.1848 7.75247 17.8027 8H3V6H21Z" }),
    React__default['default'].createElement("path", { d: "M19.1601 10.0994L19.2322 15.5723M15.7066 13.8044L19.2421 17.34M19.2322 17.33L22.7678 13.7944", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'NotesDownload');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z" }), 'OpenInBrowser');

createSvgIcon(React__default['default'].createElement("path", { d: "M21 19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21L5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19L3 5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3L19 3C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5L21 19ZM16 19L19 19L19 5L16 5L16 19ZM14 19L14 5L5 5L5 19L14 19ZM11 9.8225L8.52766 12.5L11 15.1775L10.23887 16L7 12.5L10.23887 9L11 9.8225Z" }), 'PanelClose');

createSvgIcon(React__default['default'].createElement("path", { d: "M21 19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21L5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19L3 5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3L19 3C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5L21 19ZM16 19L19 19L19 5L16 5L16 19ZM14 19L14 5L5 5L5 19L14 19ZM7 9.8225L9.47234 12.5L7 15.1775L7.76113 16L11 12.5L7.76113 9L7 9.8225Z" }), 'PanelOpen');

createSvgIcon(React__default['default'].createElement("path", { d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" }), 'People');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), 'Person');

createSvgIcon(React__default['default'].createElement("path", { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), 'PersonAdd');

createSvgIcon(React__default['default'].createElement("path", { d: "M8.65,5.82C9.36,4.72,10.6,4,12,4c2.21,0,4,1.79,4,4c0,1.4-0.72,2.64-1.82,3.35L8.65,5.82z M20,17.17 c-0.02-1.1-0.63-2.11-1.61-2.62c-0.54-0.28-1.13-0.54-1.77-0.76L20,17.17z M21.19,21.19L2.81,2.81L1.39,4.22l8.89,8.89 c-1.81,0.23-3.39,0.79-4.67,1.45C4.61,15.07,4,16.1,4,17.22V20h13.17l2.61,2.61L21.19,21.19z" }), 'PersonOff');

createSvgIcon(React__default['default'].createElement("path", { d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" }), 'PhoneLink');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("circle", { cx: "12", cy: "12", r: "3.2" }),
    React__default['default'].createElement("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })), 'PhotoCamera');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }), 'Place');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }), 'Portrait');

createSvgIcon(React__default['default'].createElement("path", { d: "M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z" }), 'PresentToAll');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M21.0001 9.33268H20.3334V7.99935C20.3334 6.15935 18.8401 4.66602 17.0001 4.66602C15.1601 4.66602 13.6667 6.15935 13.6667 7.99935V9.33268H13.0001C12.2667 9.33268 11.6667 9.93268 11.6667 10.666V17.3327C11.6667 18.066 12.2667 18.666 13.0001 18.666H21.0001C21.7334 18.666 22.3334 18.066 22.3334 17.3327V10.666C22.3334 9.93268 21.7334 9.33268 21.0001 9.33268ZM17.0001 15.3327C16.2667 15.3327 15.6667 14.7327 15.6667 13.9993C15.6667 13.266 16.2667 12.666 17.0001 12.666C17.7334 12.666 18.3334 13.266 18.3334 13.9993C18.3334 14.7327 17.7334 15.3327 17.0001 15.3327ZM19.0667 9.33268H14.9334V7.99935C14.9334 6.85935 15.8601 5.93268 17.0001 5.93268C18.1401 5.93268 19.0667 6.85935 19.0667 7.99935V9.33268Z" }),
    React__default['default'].createElement("rect", { height: "2", width: "7", x: "2", y: "11" }),
    React__default['default'].createElement("rect", { height: "2", width: "9", x: "2", y: "6" }),
    React__default['default'].createElement("rect", { height: "2", width: "7", x: "2", y: "16" })), 'PrivateNotes');

createSvgIcon(React__default['default'].createElement("path", { d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z" }), 'QrCode');

createSvgIcon(React__default['default'].createElement("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" }), 'QuestionAnswer');

var RadioActive = createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
    React__default['default'].createElement("path", { d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" })), 'RadioActive');

var RadioInactive = createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), 'RadioInactive');

createSvgIcon(React__default['default'].createElement("path", { d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" }), 'Redo');

createSvgIcon(React__default['default'].createElement("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" }), 'Refresh');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" }), 'RemoveCircle');

createSvgIcon(React__default['default'].createElement("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" }), 'Repeat');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }), 'Room');

createSvgIcon(React__default['default'].createElement("path", { d: "M8.3 20C8.03083 20 7.80521 19.9042 7.62313 19.7125C7.44104 19.5208 7.35 19.2833 7.35 19V14C7.35 13.7167 7.44104 13.4792 7.62313 13.2875C7.80521 13.0958 8.03083 13 8.3 13H19.05C19.3192 13 19.5448 13.0958 19.7269 13.2875C19.909 13.4792 20 13.7167 20 14V19C20 19.2833 19.909 19.5208 19.7269 19.7125C19.5448 19.9042 19.3192 20 19.05 20H8.3ZM8.5 11C8.23083 11 8.00521 10.9042 7.82313 10.7125C7.64104 10.5208 7.55 10.2833 7.55 10V5C7.55 4.71667 7.64104 4.47917 7.82313 4.2875C8.00521 4.09583 8.23083 4 8.5 4H19.05C19.3192 4 19.5448 4.09583 19.7269 4.2875C19.909 4.47917 20 4.71667 20 5V10C20 10.2833 19.909 10.5208 19.7269 10.7125C19.5448 10.9042 19.3192 11 19.05 11H8.5ZM3.95 20C3.68083 20 3.45521 19.9042 3.27312 19.7125C3.09104 19.5208 3 19.2833 3 19V14C3 13.7167 3.09104 13.4792 3.27312 13.2875C3.45521 13.0958 3.68083 13 3.95 13H4.7C4.96917 13 5.19479 13.0958 5.37688 13.2875C5.55896 13.4792 5.65 13.7167 5.65 14V19C5.65 19.2833 5.55896 19.5208 5.37688 19.7125C5.19479 19.9042 4.96917 20 4.7 20H3.95ZM3.95 11C3.68083 11 3.45521 10.9042 3.27312 10.7125C3.09104 10.5208 3 10.2833 3 10V5C3 4.71667 3.09104 4.47917 3.27312 4.2875C3.45521 4.09583 3.68083 4 3.95 4H4.7C4.96917 4 5.19479 4.09583 5.37688 4.2875C5.55896 4.47917 5.65 4.71667 5.65 5V10C5.65 10.2833 5.55896 10.5208 5.37688 10.7125C5.19479 10.9042 4.96917 11 4.7 11H3.95Z" }), 'Rows');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" }), 'SaveAlt');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
    React__default['default'].createElement("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" })), 'Schedule');

createSvgIcon(React__default['default'].createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }), 'Search');

createSvgIcon(React__default['default'].createElement("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }), 'Send');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("rect", { height: "11", width: "4", x: "1", y: "11" }),
    React__default['default'].createElement("path", { d: "M20,17h-7l-2.09-0.73l0.33-0.94L13,16h2.82c0.65,0,1.18-0.53,1.18-1.18v0c0-0.49-0.31-0.93-0.77-1.11L8.97,11H7v9.02 L14,22l8.01-3v0C22,17.9,21.11,17,20,17z" })), 'Serve');

createSvgIcon(React__default['default'].createElement("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" }), 'Settings');

createSvgIcon(React__default['default'].createElement("path", { d: "M18.41 5.8L17.2 4.59C16.42 3.81 15.15 3.81 14.37 4.59L11.69 7.27L3 15.96V20H7.04L15.78 11.26L18.41 8.63C19.2 7.85 19.2 6.58 18.41 5.8ZM6.21 18H5V16.79L13.66 8.13L14.87 9.34L6.21 18ZM11 20L15 16H21V20H11Z" }), 'SignDocument');

createSvgIcon(React__default['default'].createElement("path", { d: "M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }), 'Speaker');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" }), 'Star');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" }), 'StarOutline');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.46 7.12-2.78 1.15a4.982 4.982 0 0 0-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM9.13 4.54l1.17 2.78a5 5 0 0 0-2.98 2.97L4.54 9.13a7.984 7.984 0 0 1 4.59-4.59zM4.54 14.87l2.78-1.15a4.968 4.968 0 0 0 2.97 2.96l-1.17 2.78a7.996 7.996 0 0 1-4.58-4.59zm10.34 4.59-1.15-2.78a4.978 4.978 0 0 0 2.95-2.97l2.78 1.17a8.007 8.007 0 0 1-4.58 4.58z" }), 'Support');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" }),
    React__default['default'].createElement("circle", { cx: "9", cy: "13", r: "1" }),
    React__default['default'].createElement("circle", { cx: "15", cy: "13", r: "1" }),
    React__default['default'].createElement("path", { d: "M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" })), 'SupportAgent');

createSvgIcon(React__default['default'].createElement("path", { d: "M22 8l-4-4v3H3v2h15v3l4-4zM2 16l4 4v-3h15v-2H6v-3l-4 4z" }), 'SyncAlt');

createSvgIcon(React__default['default'].createElement("path", { d: "M10.6 16.05 17.65 9l-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z" }), 'TaskComplete');

createSvgIcon(React__default['default'].createElement("path", { d: "M16.24 7.75c-1.17-1.17-2.7-1.76-4.24-1.76v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 1.99c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), 'Timelapse');

createSvgIcon(React__default['default'].createElement("path", { d: "M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z" }), 'Tune');

createSvgIcon(React__default['default'].createElement("path", { d: "M6.48071 3.69225V11.5768C6.48071 12.0243 6.63813 12.4054 6.95296 12.7202C7.26763 13.0349 7.64871 13.1923 8.09621 13.1923H17.0845L14.9845 15.2923L15.6922 16L19 12.6923L15.6922 9.3845L14.9845 10.0922L17.0845 12.1923H8.09621C7.91671 12.1923 7.76921 12.1346 7.65371 12.0193C7.53838 11.9038 7.48071 11.7563 7.48071 11.5768V3.69225H6.48071Z", fill: "currentColor" }), 'TurnRight');

createSvgIcon(React__default['default'].createElement("path", { d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" }), 'Undo');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 1L3 4.3V10.999C3 16.554 6.83625 21.735 12 23C17.1638 21.735 21 16.554 21 10.999V4.3L12 1ZM13.125 16.4H10.875V14.2H13.125V16.4ZM13.125 12H10.875V6.5H13.125V12Z" }), 'UnverifiedUser');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" }), 'VerifiedUser');

createSvgIcon(React__default['default'].createElement("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" }), 'VideoCam');

createSvgIcon(React__default['default'].createElement("path", { d: "M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z" }), 'VideoCamOff');

createSvgIcon(React__default['default'].createElement("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }), 'Visibility');

var VisibilityOff = createSvgIcon(React__default['default'].createElement("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" }), 'VisibilityOff');

createSvgIcon(React__default['default'].createElement("path", { d: "M16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM3 9V15H7L12 20V4L7 9H3Z" }), 'VolumeDown');

createSvgIcon(React__default['default'].createElement("path", { d: "M3 9V15H7L12 20V4L7 9H3Z" }), 'VolumeMute');

createSvgIcon(React__default['default'].createElement("path", { d: "M3 9.00047V15.0005H7L12 20.0005V4.00047L7 9.00047H3ZM16.5 12.0005C16.5 10.2305 15.48 8.71047 14 7.97047V16.0205C15.48 15.2905 16.5 13.7705 16.5 12.0005ZM14 3.23047V5.29047C16.89 6.15047 19 8.83047 19 12.0005C19 15.1705 16.89 17.8505 14 18.7105V20.7705C18.01 19.8605 21 16.2805 21 12.0005C21 7.72047 18.01 4.14047 14 3.23047Z" }), 'VolumeUp');

createSvgIcon(React__default['default'].createElement("path", { d: "M7 23 9.8 8.9 8 9.6V13H6V8.3l5.05 -2.15c0.2333 -0.1 0.4792 -0.15833 0.7375 -0.175 0.2583 -0.01667 0.5042 0.01667 0.7375 0.1 0.2333 0.08333 0.4542 0.2 0.6625 0.35 0.2083 0.15 0.3792 0.34167 0.5125 0.575l1 1.6c0.4333 0.7 1.0208 1.275 1.7625 1.725 0.7417 0.45 1.5875 0.675 2.5375 0.675v2c-1.1667 0 -2.2083 -0.2417 -3.125 -0.725 -0.9167 -0.4833 -1.7 -1.1 -2.35 -1.85L12.9 13.5l2.1 2V23h-2v-6.5l-2.1 -1.6L9.1 23H7Zm6.5 -17.5c-0.55 0 -1.0208 -0.19583 -1.4125 -0.5875C11.6958 4.52083 11.5 4.05 11.5 3.5s0.1958 -1.02083 0.5875 -1.4125C12.4792 1.69583 12.95 1.5 13.5 1.5s1.0208 0.19583 1.4125 0.5875c0.3917 0.39167 0.5875 0.8625 0.5875 1.4125s-0.1958 1.02083 -0.5875 1.4125C14.5208 5.30417 14.05 5.5 13.5 5.5Z" }), 'Walk');

createSvgIcon(React__default['default'].createElement("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }), 'Warning');

createSvgIcon(React__default['default'].createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" }), 'Web');

createSvgIcon(React__default['default'].createElement("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z" }), 'WebAsset');

createSvgIcon(React__default['default'].createElement("path", { d: "M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h1.325q.825 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413Q6.15 20 5.325 20Zm7.35 0q-.825 0-1.412-.587Q9.35 18.825 9.35 18V6q0-.825.588-1.412Q10.525 4 11.35 4h1.325q.825 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413Q13.5 20 12.675 20Zm7.325 0q-.825 0-1.412-.587-.588-.588-.588-1.413V6q0-.825.588-1.412Q17.85 4 18.675 4H20q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z" }), 'WeekView');

createSvgIcon(React__default['default'].createElement("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }), 'Workflow');

createSvgIcon(React__default['default'].createElement(React__default['default'].Fragment, null,
    React__default['default'].createElement("path", { d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" }),
    React__default['default'].createElement("path", { d: "M12 10H10V12H9V10H7V9H9V7H10V9H12V10Z" })), 'ZoomIn');

createSvgIcon(React__default['default'].createElement("path", { d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14ZM7 9H12V10H7V9Z" }), 'ZoomOut');

var ActionTypes$2;
(function (ActionTypes) {
    ActionTypes[ActionTypes["SetActions"] = 0] = "SetActions";
    ActionTypes[ActionTypes["SelectOption"] = 1] = "SelectOption";
    ActionTypes[ActionTypes["UnselectOptions"] = 2] = "UnselectOptions";
})(ActionTypes$2 || (ActionTypes$2 = {}));

var _a$1;
var MultiSelectContext = React.createContext(null);
var reducers$1 = (_a$1 = {},
    _a$1[ActionTypes$2.SetActions] = function (state, action) { return (__assign(__assign({}, state), { actions: action.actions })); },
    _a$1[ActionTypes$2.SelectOption] = function (state, action) {
        return __assign(__assign({}, state), { selections: __assign(__assign({}, state.selections), action.value) });
    },
    _a$1[ActionTypes$2.UnselectOptions] = function (state, action) {
        var selections = __assign({}, state.selections);
        action.keys.forEach(function (key) {
            delete selections[key];
        });
        return __assign(__assign({}, state), { selections: selections });
    },
    _a$1);
var runReducer$1 = function (state, action) { return reducers$1[action.type](state, action); };
var useMultiSelect = function () {
    return React.useContext(MultiSelectContext);
};
var MAX_SELECTIONS_SHOWN = 5;
function MultiSelect(_a) {
    var _b;
    var children = _a.children, _c = _a.defaultDisplayValue, defaultDisplayValue = _c === void 0 ? '' : _c, _d = _a.defaultValue, defaultValue = _d === void 0 ? {} : _d, _e = _a.dense, dense = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, displayRef = _a.displayRef, endAdornmentProp = _a.endAdornment, _g = _a.error, error = _g === void 0 ? false : _g, helperText = _a.helperText, _h = _a.inputRef, inputRef = _h === void 0 ? null : _h, label = _a.label, _j = _a.loading, loading = _j === void 0 ? false : _j, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onSelect = _a.onSelect, _k = _a.size, size = _k === void 0 ? 'medium' : _k, startAdornment = _a.startAdornment, _l = _a.total, total = _l === void 0 ? -1 : _l, _m = _a.variant, variant = _m === void 0 ? 'outlined' : _m;
    var intl = reactIntl.useIntl();
    var initialRender = useInitialRender();
    var _o = (_b = useMenu()) !== null && _b !== void 0 ? _b : [], menuState = _o[0], menuDispatch = _o[1];
    var inMenu = !!menuDispatch;
    var endAdornment = endAdornmentProp === undefined && !inMenu ? ExpandMore : endAdornmentProp;
    var _p = React.useState({}), displayedSuggestionsValues = _p[0], setDisplayedSuggestionsValues = _p[1];
    var _q = React.useState(false), closing = _q[0], setClosing = _q[1];
    var _r = React.useState(false), showAllSelections = _r[0], setShowAllSelections = _r[1];
    var searchRef = React.useRef(defaultDisplayValue);
    var _s = React.useReducer(runReducer$1, null, function () { return ({
        actions: null,
        selections: defaultValue,
        setDisplayedSuggestionsValues: setDisplayedSuggestionsValues,
        handleClose: function () { return setClosing(true); },
    }); }), state = _s[0], dispatch = _s[1];
    var _t = React.useReducer(function (prevSelections) {
        var newSelections = {};
        var selectionChanged = false;
        Object.keys(state.selections).forEach(function (key) {
            var _a;
            if (state.selections[key].checked) {
                var handleClear = function () {
                    dispatch({
                        type: ActionTypes$2.UnselectOptions,
                        keys: [key],
                    });
                };
                newSelections[key] = {
                    checked: true,
                    handleClear: handleClear,
                    disabled: state.selections[key].disabled,
                };
                if (!((_a = prevSelections[key]) === null || _a === void 0 ? void 0 : _a.checked)) {
                    selectionChanged = true;
                }
            }
        });
        // Since setting selections triggers onSelect
        // we want to do it only when the content of selections changes
        if (selectionChanged ||
            Object.keys(prevSelections).length !== Object.keys(newSelections).length) {
            return newSelections;
        }
        return prevSelections;
    }, null, function () { return defaultValue; }), selections = _t[0], setSelections = _t[1];
    var getSelectionLabel = React.useCallback(function (selections) {
        var filtered = Object.keys(selections).filter(function (key) { return selections[key].checked; });
        switch (filtered.length) {
            case 0:
                return '';
            case 1:
                return selections[filtered[0]].textLabel ||
                    typeof selections[filtered[0]].label === 'string'
                    ? selections[filtered[0]].label
                    : intl.formatMessage({ id: 'Ui.number_selected' }, { number: 1 });
            case total:
                return intl.formatMessage({ id: 'Autocomplete.all_number_selected' }, { number: total });
            default:
                return intl.formatMessage({ id: 'Ui.number_selected' }, { number: filtered.length });
        }
    }, [intl, total]);
    var localDisplayRef = React.useRef(null);
    var syncDisplayRef = useSyncRefs(localDisplayRef, displayRef);
    // this useEffect triggers the onSelect on initial render to pass in the handleClear function to default values
    // this occurs even when the clearing functionality is not intended to be used so should be looked into in the future
    React.useEffect(function () {
        if (defaultValue) {
            dispatch({
                type: ActionTypes$2.SelectOption,
                value: defaultValue,
            });
        }
    }, []);
    React.useEffect(function () {
        if (closing && !initialRender) {
            setClosing(false);
            setSelections();
        }
        // We don't want to trigger on initial render or selections change
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [closing]);
    React.useEffect(function () {
        if (!initialRender) {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(selections);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selections]);
    var setDisplayValue = function (selections) {
        var display = localDisplayRef === null || localDisplayRef === void 0 ? void 0 : localDisplayRef.current;
        if (display) {
            display.value = getSelectionLabel(selections);
        }
    };
    React.useEffect(function () {
        if (inMenu && !initialRender && !(menuState === null || menuState === void 0 ? void 0 : menuState.show)) {
            setClosing(true);
        }
        // don't want to trigger when value changes, only when it is closed, so we don't pass it as a dependency
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inMenu, menuState === null || menuState === void 0 ? void 0 : menuState.show]);
    React.useEffect(function () {
        if (!dense &&
            !inMenu &&
            Object.keys(selections).length < MAX_SELECTIONS_SHOWN) {
            setShowAllSelections(false);
        }
    }, [dense, inMenu, selections]);
    var renderedSelections = React.useMemo(function () {
        if (dense || inMenu) {
            return;
        }
        var tempSelections = Object.keys(selections).filter(function (key) { return selections[key].checked; });
        if (!tempSelections.length) {
            return;
        }
        var unselect = function (key) {
            if (!key) {
                var enabledKeys = Object.keys(selections).filter(function (key) { var _a; return !((_a = state.selections[key]) === null || _a === void 0 ? void 0 : _a.disabled); });
                dispatch({
                    type: ActionTypes$2.UnselectOptions,
                    keys: enabledKeys,
                });
                return;
            }
            var value = __assign({}, selections);
            delete value[key];
            dispatch({
                type: ActionTypes$2.UnselectOptions,
                keys: [key],
            });
        };
        var allText = intl.formatMessage({ id: 'Autocomplete.all_number' }, { number: total });
        var additionalText = intl.formatMessage({ id: 'Ui.show_more' }, { count: tempSelections.length - (MAX_SELECTIONS_SHOWN - 1) });
        return (React__default['default'].createElement("ul", { "aria-label": label, className: "w-full pt-4 pl-4 space-y-2" }, tempSelections.length === total ? (React__default['default'].createElement("li", { "aria-label": allText, className: clsx__default['default']('flex items-center justify-between cursor-default', disabled ? 'text-black-60' : 'text-black-90') },
            React__default['default'].createElement(Typography, { color: "inherit", variant: "body2" }, allText),
            React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'Ui.remove' }), disabled: disabled, onClick: function () { return unselect(); } },
                React__default['default'].createElement(Close, null)))) : (React__default['default'].createElement(React__default['default'].Fragment, null,
            tempSelections
                .slice(0, tempSelections.length > MAX_SELECTIONS_SHOWN &&
                !showAllSelections
                ? MAX_SELECTIONS_SHOWN - 1
                : undefined)
                .map(function (key) {
                var label = state.selections[key].textLabel ||
                    typeof state.selections[key].label === 'string'
                    ? state.selections[key].label
                    : '';
                return (React__default['default'].createElement("li", { "aria-label": label, className: clsx__default['default']('flex items-center justify-between cursor-default', disabled || state.selections[key].disabled
                        ? 'text-black-60'
                        : 'text-black-90'), key: key },
                    React__default['default'].createElement(Typography, { color: "inherit", variant: "body2" }, state.selections[key].label),
                    React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'Ui.remove' }), disabled: disabled || state.selections[key].disabled, onClick: function () { return unselect(key); } },
                        React__default['default'].createElement(Close, null))));
            }),
            tempSelections.length > MAX_SELECTIONS_SHOWN &&
                !showAllSelections ? (React__default['default'].createElement("li", { "aria-label": additionalText, className: "-ml-4" },
                React__default['default'].createElement(Button, { color: "primary", onClick: function () { return setShowAllSelections(true); }, variant: "text" }, additionalText))) : null))));
        // New selections should be rendered only on blur, so we only want to do it when selections change
        // and ignore state.value changes.
        //
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selections, showAllSelections, disabled]);
    React.useEffect(function () {
        var selectAll = function () {
            var newValue = {};
            Object.keys(displayedSuggestionsValues).forEach(function (key) {
                if (!displayedSuggestionsValues[key].disabled) {
                    newValue[key] = __assign(__assign({}, displayedSuggestionsValues[key]), { checked: true });
                }
            });
            dispatch({
                type: ActionTypes$2.SelectOption,
                value: newValue,
            });
        };
        var clearAll = function () {
            var enabledKeys = Object.keys(displayedSuggestionsValues).filter(function (key) { return !displayedSuggestionsValues[key].disabled; });
            dispatch({
                type: ActionTypes$2.UnselectOptions,
                keys: enabledKeys,
            });
        };
        var checkedCount = Object.values(displayedSuggestionsValues).filter(function (value) { return value.checked && !value.disabled; }).length;
        var allChecked = checkedCount ===
            Object.values(displayedSuggestionsValues).filter(function (value) { return !value.disabled; }).length;
        var allUnchecked = checkedCount === 0;
        var actions = (React__default['default'].createElement(React__default['default'].Fragment, null,
            allChecked ? null : (React__default['default'].createElement(Menu.Item, { action: true, onClick: selectAll },
                React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Ui.select_all" }))),
            allUnchecked ? null : (React__default['default'].createElement(Menu.Item, { action: true, onClick: clearAll },
                React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Ui.clear_all" })))));
        dispatch({ type: ActionTypes$2.SetActions, actions: actions });
    }, 
    // We only want to trigger when displayedSuggestionsValues or loading changes
    [displayedSuggestionsValues]);
    React.useEffect(function () {
        // if the state.selections changes and input is not focused, change the actual selections
        if (!initialRender && localDisplayRef.current !== document.activeElement) {
            setSelections();
            if (inMenu || dense) {
                setDisplayValue(state.selections);
            }
        }
    }, [state.selections]);
    React.useEffect(function () {
        // Sync the disabled state of state.selections with displayedSuggestionValues if they're different (displayedSuggestionValues takes presedence)
        if (Object.keys(displayedSuggestionsValues).length &&
            Object.keys(state.selections).length) {
            var updatedValues_1 = {};
            var shouldUpdate_1 = false;
            Object.keys(state.selections).forEach(function (key) {
                var _a;
                if (displayedSuggestionsValues[key]) {
                    var currentSelection = state.selections[key];
                    var suggestionDisabled = (_a = displayedSuggestionsValues[key].disabled) !== null && _a !== void 0 ? _a : false;
                    if (currentSelection.disabled !== suggestionDisabled) {
                        shouldUpdate_1 = true;
                        updatedValues_1[key] = __assign(__assign({}, currentSelection), { disabled: suggestionDisabled });
                    }
                }
            });
            if (shouldUpdate_1) {
                dispatch({
                    type: ActionTypes$2.SelectOption,
                    value: updatedValues_1,
                });
            }
        }
    }, [displayedSuggestionsValues, state.selections, dispatch]);
    var handleFocus = function (event) {
        var display = localDisplayRef === null || localDisplayRef === void 0 ? void 0 : localDisplayRef.current;
        if ((dense || inMenu) && display) {
            display.value = searchRef.current;
        }
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    };
    var handleBlur = function (event) {
        var _a, _b;
        searchRef.current = (_b = (_a = localDisplayRef.current) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        if (inMenu) {
            setSelections();
        }
        if (dense || inMenu) {
            setDisplayValue(state.selections);
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    };
    return (React__default['default'].createElement(MultiSelectContext.Provider, { value: [state, dispatch] },
        React__default['default'].createElement(Autocomplete, { defaultDisplayValue: inMenu || dense
                ? getSelectionLabel(defaultValue)
                : defaultDisplayValue, disabled: disabled, displayRef: syncDisplayRef, endAdornment: endAdornment, error: error, helperText: helperText, inputRef: inputRef, label: label, loading: loading, name: name, onBlur: handleBlur, onChange: onChange, onFocus: handleFocus, select: dense, size: size, startAdornment: startAdornment, variant: variant }, children),
        renderedSelections));
}
function Suggestion(_a) {
    var _b, _c;
    var children = _a.children, _d = _a.disabled, disabled = _d === void 0 ? false : _d, displayValue = _a.displayValue, value = _a.value;
    var _e = useMultiSelect(), state = _e[0], dispatch = _e[1];
    var checked = ((_b = state === null || state === void 0 ? void 0 : state.selections[value]) === null || _b === void 0 ? void 0 : _b.checked) || false;
    var handleChange = function (event) {
        var _a;
        dispatch({
            type: ActionTypes$2.SelectOption,
            value: (_a = {},
                _a[event.currentTarget.name] = {
                    checked: event.currentTarget.checked,
                    label: value ? displayValue || children || '' : '',
                    textLabel: displayValue || '',
                    disabled: disabled,
                },
                _a),
        });
    };
    React.useEffect(function () {
        state.setDisplayedSuggestionsValues(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[value] = {
                checked: checked,
                label: value ? displayValue || children || '' : '',
                disabled: disabled,
            }, _a)));
        });
        return function () {
            state.setDisplayedSuggestionsValues(function (prev) {
                var displayedSuggestions = __assign({}, prev);
                delete displayedSuggestions[value];
                return displayedSuggestions;
            });
        };
        // "state" is not needed to be added to the dependency array.
        // All necessary pieces of state were added
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        checked,
        children,
        displayValue,
        state.setDisplayedSuggestionsValues,
        value,
    ]);
    var multiProps = {
        checkbox: true,
        defaultChecked: (_c = state.selections[value]) === null || _c === void 0 ? void 0 : _c.checked,
        onChange: handleChange,
    };
    return (React__default['default'].createElement(Autocomplete.Suggestion, __assign({ disabled: disabled, displayValue: displayValue, value: value }, multiProps), children));
}
MultiSelect.Group = Group$2;
MultiSelect.Suggestion = Suggestion;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked, or until the next browser frame is drawn. The debounced function
 * comes with a `cancel` method to cancel delayed `func` invocations and a
 * `flush` method to immediately invoke them. Provide `options` to indicate
 * whether `func` should be invoked on the leading and/or trailing edge of the
 * `wait` timeout. The `func` is invoked with the last arguments provided to the
 * debounced function. Subsequent calls to the debounced function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
 * invocation will be deferred until the next frame is drawn (typically about
 * 16ms).
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `debounce` and `throttle`.
 *
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0]
 *  The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 *  used (if available, otherwise it will be setTimeout(...,0)).
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * const resizeHandler = useDebouncedCallback(calculateLayout, 150);
 * window.addEventListener('resize', resizeHandler)
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * const clickHandler = useDebouncedCallback(sendMail, 300, {
 *   leading: true,
 *   trailing: false,
 * })
 * <button onClick={clickHandler}>click me</button>
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * const debounced = useDebouncedCallback(batchLog, 250, { 'maxWait': 1000 })
 * const source = new EventSource('/stream')
 * source.addEventListener('message', debounced)
 *
 * // Cancel the trailing debounced invocation.
 * window.addEventListener('popstate', debounced.cancel)
 *
 * // Check for pending invocations.
 * const status = debounced.pending() ? "Pending..." : "Ready"
 */
function useDebouncedCallback(func, wait, options) {
    var _this = this;
    var lastCallTime = React.useRef(null);
    var lastInvokeTime = React.useRef(0);
    var timerId = React.useRef(null);
    var lastArgs = React.useRef([]);
    var lastThis = React.useRef();
    var result = React.useRef();
    var funcRef = React.useRef(func);
    var mounted = React.useRef(true);
    funcRef.current = func;
    // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
    var useRAF = !wait && wait !== 0 && typeof window !== 'undefined';
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    wait = +wait || 0;
    options = options || {};
    var leading = !!options.leading;
    var trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default
    var maxing = 'maxWait' in options;
    var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
    var invokeFunc = React.useCallback(function (time) {
        var args = lastArgs.current;
        var thisArg = lastThis.current;
        lastArgs.current = lastThis.current = null;
        lastInvokeTime.current = time;
        return (result.current = funcRef.current.apply(thisArg, args));
    }, []);
    var startTimer = React.useCallback(function (pendingFunc, wait) {
        if (useRAF)
            cancelAnimationFrame(timerId.current);
        timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
    }, [useRAF]);
    var shouldInvoke = React.useCallback(function (time) {
        if (!mounted.current)
            return false;
        var timeSinceLastCall = time - lastCallTime.current;
        var timeSinceLastInvoke = time - lastInvokeTime.current;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (!lastCallTime.current ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && timeSinceLastInvoke >= maxWait));
    }, [maxWait, maxing, wait]);
    var trailingEdge = React.useCallback(function (time) {
        timerId.current = null;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs.current) {
            return invokeFunc(time);
        }
        lastArgs.current = lastThis.current = null;
        return result.current;
    }, [invokeFunc, trailing]);
    var timerExpired = React.useCallback(function () {
        var time = Date.now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // https://github.com/xnimorz/use-debounce/issues/97
        if (!mounted.current) {
            return;
        }
        // Remaining wait calculation
        var timeSinceLastCall = time - lastCallTime.current;
        var timeSinceLastInvoke = time - lastInvokeTime.current;
        var timeWaiting = wait - timeSinceLastCall;
        var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        // Restart the timer
        startTimer(timerExpired, remainingWait);
    }, [maxWait, maxing, shouldInvoke, startTimer, trailingEdge, wait]);
    var cancel = React.useCallback(function () {
        if (timerId.current) {
            useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
        }
        lastInvokeTime.current = 0;
        lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
    }, [useRAF]);
    var flush = React.useCallback(function () {
        return !timerId.current ? result.current : trailingEdge(Date.now());
    }, [trailingEdge]);
    React.useEffect(function () {
        mounted.current = true;
        return function () {
            mounted.current = false;
        };
    }, []);
    var debounced = React.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var time = Date.now();
        var isInvoking = shouldInvoke(time);
        lastArgs.current = args;
        lastThis.current = _this;
        lastCallTime.current = time;
        if (isInvoking) {
            if (!timerId.current && mounted.current) {
                // Reset any `maxWait` timer.
                lastInvokeTime.current = lastCallTime.current;
                // Start the timer for the trailing edge.
                startTimer(timerExpired, wait);
                // Invoke the leading edge.
                return leading ? invokeFunc(lastCallTime.current) : result.current;
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                startTimer(timerExpired, wait);
                return invokeFunc(lastCallTime.current);
            }
        }
        if (!timerId.current) {
            startTimer(timerExpired, wait);
        }
        return result.current;
    }, [invokeFunc, leading, maxing, shouldInvoke, startTimer, timerExpired, wait]);
    var pending = React.useCallback(function () {
        return !!timerId.current;
    }, []);
    var debouncedState = React.useMemo(function () { return ({
        callback: debounced,
        cancel: cancel,
        flush: flush,
        pending: pending,
    }); }, [debounced, cancel, flush, pending]);
    return debouncedState;
}

function isFocusWithinSupported() {
    try {
        document.querySelector(':focus-within');
    }
    catch (error) {
        return false;
    }
    return true;
}

var labels = {
    focused: {
        filled: "leading-5 text-xs",
        outlined: "leading-4.5 text-xs",
    },
    inactive: {
        filled: 'leading-5 text-sm',
        outlined: 'leading-5 text-sm',
    },
    value: {
        filled: 'leading-5 text-xs',
        outlined: "leading-4.5 text-xs",
    },
};
var labelColors = {
    focused: {
        filled: {
            default: {
                default: "text-primary-main",
                inverse: "text-primary-lighter",
            },
            disabled: {
                default: "text-primary-main",
                inverse: "text-primary-lighter",
            },
            error: { default: "text-error-main", inverse: "text-error-light" },
        },
        outlined: {
            default: {
                default: "bg-white-100 text-primary-main",
                inverse: "bg-white-100 text-primary-main",
            },
            disabled: {
                default: "bg-white-100 text-primary-main",
                inverse: "bg-white-100 text-primary-main",
            },
            error: {
                default: "bg-white-100 text-error-main",
                inverse: "bg-white-100 text-error-main",
            },
        },
    },
    inactive: {
        filled: {
            default: { default: 'text-black-60', inverse: 'text-white-60' },
            disabled: { default: 'text-black-30', inverse: 'text-white-30' },
            error: { default: 'text-black-60', inverse: 'text-white-60' },
        },
        outlined: {
            default: { default: 'text-black-60', inverse: 'text-black-60' },
            disabled: { default: 'text-black-30', inverse: 'text-black-30' },
            error: { default: 'text-black-60', inverse: 'text-black-60' },
        },
    },
    value: {
        filled: {
            default: { default: 'text-black-60', inverse: 'text-white-60' },
            disabled: { default: 'text-black-30', inverse: 'text-white-30' },
            error: { default: 'text-error-main', inverse: 'text-error-light' },
        },
        outlined: {
            default: {
                default: "bg-white-100 text-black-60",
                inverse: "bg-white-100 text-black-60",
            },
            disabled: {
                default: "bg-white-100 text-black-30",
                inverse: "bg-white-100 text-black-30",
            },
            error: {
                default: "bg-white-100 text-error-main",
                inverse: "bg-white-100 text-error-main",
            },
        },
    },
};
var labelSpacing = {
    focused: {
        filled: {
            medium: "mt-1 ml-3",
            small: "mt-0.5 ml-3",
        },
        outlined: {
            medium: "px-1 -mt-2.25 ml-2",
            small: "px-1 -mt-2.25 ml-2",
        },
    },
    inactive: {
        filled: {
            medium: 'mt-4 ml-3',
            small: 'mt-3.25 ml-3',
        },
        outlined: {
            medium: 'mt-3.25 ml-3',
            small: 'mt-2.25 ml-3',
        },
    },
};
var sizes$4 = {
    outlined: {
        medium: 'py-3 h-12',
        small: 'py-3 h-10',
    },
    filled: {
        medium: 'h-14 pt-3 pb-0',
        small: 'h-12 pt-3 pb-0',
    },
};
var parentSizes = {
    outlined: {
        medium: 'h-12',
        small: 'h-10',
    },
    filled: {
        medium: 'h-14',
        small: 'h-12',
    },
};
var multilineSizes = {
    outlined: {
        medium: 'w-full mt-3 pb-0',
        small: 'w-full mt-2 pb-0',
    },
    filled: {
        medium: 'w-full mt-6 pb-0',
        small: 'w-full mt-5 pb-0',
    },
};
var inputVariants = {
    default: {
        default: 'bg-transparent text-black-90',
        inverse: 'bg-transparent text-white-90',
    },
    disabled: {
        default: 'bg-transparent text-black-30',
        inverse: 'bg-transparent text-white-30',
    },
    error: {
        default: 'bg-transparent text-black-90',
        inverse: 'bg-transparent text-white-90',
    },
};
var focusedStyles = {
    filled: {
        default: {
            default: "focus-within:bg-white-100 focus-within:border-primary-main focus-within:text-primary-main",
            inverse: "focus-within:bg-transparent focus-within:border-primary-lighter focus-within:text-primary-lighter",
        },
        disabled: { default: '', inverse: '' },
        error: {
            default: "focus-within:border-error-main focus-within:text-error-main",
            inverse: "focus-within:bg-transparent focus-within:border-error-light focus-within:text-error-light",
        },
    },
    outlined: {
        default: {
            default: "focus-within:shadow-input-primary-main focus-within:border-primary-main focus-within:text-primary-main",
            inverse: "focus-within:shadow-input-primary-main focus-within:border-primary-main focus-within:text-primary-main",
        },
        disabled: { default: '', inverse: '' },
        error: {
            default: "focus-within:shadow-input-error-main focus-within:border-error-main focus-within:text-error-main",
            inverse: "focus-within:shadow-input-error-main focus-within:border-error-main focus-within:text-error-main",
        },
    },
};
var appearFocusedStyles = {
    filled: {
        default: {
            default: "bg-white-100 border-2 border-primary-main text-primary-main",
            inverse: "bg-transparent border-2 border-primary-lighter text-primary-lighter",
        },
        disabled: {
            default: 'bg-black-5 text-black-30 border-2 border-transparent',
            inverse: 'bg-white-15 text-white-30 border-2 border-transparent',
        },
        error: {
            default: "bg-error-lighter border-2 border-error-main text-error-main",
            inverse: "bg-transparent border-2 border-error-light text-error-light",
        },
    },
    outlined: {
        default: {
            default: "shadow-input-primary-main border border-solid border-primary-main text-primary-main",
            inverse: "shadow-input-primary-main border border-solid border-primary-main text-primary-main",
        },
        disabled: {
            default: 'border border-solid border-black-25 bg-white-100 text-black-30',
            inverse: 'border border-solid border-black-25 bg-white-100 text-black-30',
        },
        error: {
            default: "shadow-input-error-main border border-solid border-error-main text-error-main",
            inverse: "shadow-input-error-main border border-solid border-error-main text-error-main",
        },
    },
};
var variants$3 = {
    filled: {
        default: {
            default: 'bg-black-5 border-2 border-transparent text-black-60',
            inverse: 'bg-white-15 border-2 border-transparent text-white-60',
        },
        disabled: {
            default: 'bg-black-5 text-black-30 border-2 border-transparent',
            inverse: 'bg-white-15 text-white-30 border-2 border-transparent',
        },
        error: {
            default: 'bg-error-lighter text-error-main border-2 border-error-main',
            inverse: 'bg-white-15 text-error-light border-2 border-error-light',
        },
    },
    outlined: {
        default: {
            default: 'border border-solid border-black-25 text-black-60',
            inverse: 'border border-solid border-black-25 text-black-60',
        },
        disabled: {
            default: "border border-solid border-black-25 bg-white-100 text-black-30",
            inverse: "border border-solid border-black-25 bg-white-100 text-black-30",
        },
        error: {
            default: "shadow-input-error-main border border-solid border-error-main text-error-main",
            inverse: "shadow-input-error-main border border-solid border-error-main text-error-main",
        },
    },
};
var adornments = {
    icon: 'w-5',
    multilineSize: {
        outlined: {
            medium: 'mt-3 h-6',
            small: 'mt-2 h-6',
        },
        filled: {
            medium: 'mt-6 h-6',
            small: 'mt-5 h-6',
        },
    },
    size: {
        outlined: {
            medium: 'py-3 h-12',
            small: 'py-3 h-10',
        },
        filled: {
            medium: 'h-14',
            small: 'h-12',
        },
    },
    text: {
        default: {
            default: 'text-sm text-black-60',
            inverse: 'text-sm text-white-60',
        },
        disabled: {
            default: 'text-sm text-black-30',
            inverse: 'text-sm text-white-30',
        },
        error: {
            default: 'text-sm text-black-60',
            inverse: 'text-sm text-white-60',
        },
    },
};
var baseClasses = {
    container: 'flex flex-col w-full font-sans',
    end: 'shrink-0 whitespace-normal flex items-center',
    help: 'text-xs font-normal tracking-wide pt-2',
    inputWrapper: 'flex relative rounded',
    input: "flex-grow min-w-0 px-3 text-sm font-normal tracking-wide rounded disabled:cursor-not-allowed focus:outline-none",
    label: "absolute top-0 left-0 block truncate max-w-(full-6) overflow-y-auto font-normal tracking-wide transition-all duration-200 ease-in-out",
    start: "shrink-0 ml-3 whitespace-normal flex items-center",
};

var modes = {
    email: 'email',
    number: 'numeric',
    password: 'text',
    search: 'search',
    tel: 'tel',
    text: 'text',
    url: 'url',
    color: 'none',
};
var TextInput = React.forwardRef(function (_a, ref) {
    var _b = _a.appearFocused, appearFocused = _b === void 0 ? false : _b, _c = _a.autoFocus, autoFocus = _c === void 0 ? false : _c, _d = _a.color, color = _d === void 0 ? 'default' : _d, containerRef = _a.containerRef, dataSet = _a.dataSet, _e = _a.defaultValue, defaultValue = _e === void 0 ? '' : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, EndAdornment = _a.endAdornment, enterKeyHint = _a.enterKeyHint, _g = _a.error, error = _g === void 0 ? false : _g, helperText = _a.helperText, inputMode = _a.inputMode, inputRef = _a.inputRef, label = _a.label, _h = _a.lines, lines = _h === void 0 ? 0 : _h, max = _a.max, _j = _a.maxLines, maxLines = _j === void 0 ? 0 : _j, min = _a.min, _k = _a.multiline, multiline = _k === void 0 ? false : _k, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onClick = _a.onClick, onClear = _a.onClear, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, _l = _a.readOnly, readOnly = _l === void 0 ? false : _l, _m = _a.required, required = _m === void 0 ? false : _m, _o = _a.selectable, selectable = _o === void 0 ? false : _o, _p = _a.size, size = _p === void 0 ? 'medium' : _p, StartAdornment = _a.startAdornment, tabIndex = _a.tabIndex, _q = _a.type, type = _q === void 0 ? 'text' : _q, _r = _a.variant, variant = _r === void 0 ? 'outlined' : _r, rest = __rest(_a, ["appearFocused", "autoFocus", "color", "containerRef", "dataSet", "defaultValue", "disabled", "endAdornment", "enterKeyHint", "error", "helperText", "inputMode", "inputRef", "label", "lines", "max", "maxLines", "min", "multiline", "name", "onBlur", "onChange", "onClick", "onClear", "onFocus", "onKeyDown", "readOnly", "required", "selectable", "size", "startAdornment", "tabIndex", "type", "variant"]);
    var id = "coconut-text-input-".concat(useId());
    var intl = reactIntl.useIntl();
    var labelRef = React.useRef(null);
    var _s = React.useState(!!defaultValue), hasValue = _s[0], setHasValue = _s[1];
    var _t = React.useState(!!StartAdornment), shrinkLabel = _t[0], setShrinkLabel = _t[1];
    var localRef = React.useRef(null);
    var syncRef = useSyncRefs(localRef, inputRef);
    var handleClear = function (event) {
        var _a;
        event === null || event === void 0 ? void 0 : event.preventDefault();
        setHasValue(false);
        if (localRef.current)
            localRef.current.value = '';
        var input = localRef.current;
        if (input) {
            var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
            var inputEvent = new Event('input', { bubbles: true });
            (_a = descriptor.set) === null || _a === void 0 ? void 0 : _a.call(input, '');
            input.dispatchEvent(inputEvent);
        }
        onClear === null || onClear === void 0 ? void 0 : onClear(event);
    };
    var debounced = useDebouncedCallback(function (event) {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, 300);
    var extraProps = rest; // to avoid some ts errors without exposing these props
    var status = disabled
        ? 'disabled'
        : error
            ? 'error'
            : 'default';
    var rows = lines ? lines : size === 'medium' ? 4 : 3;
    var handleBlur = function (event) {
        // handle focused styles manually in browsers that do not support ':focus-within'
        if (!isFocusWithinSupported() && !(extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-expanded'])) {
            appearFocusedStyles[variant][status][color]
                .split(' ')
                .forEach(function (className) {
                var _a;
                (_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove(className);
            });
        }
        if (!disabled && !readOnly && localRef.current) {
            var trimmedValue = localRef.current.value.trim();
            if (localRef.current.value !== trimmedValue) {
                localRef.current.value = trimmedValue;
                onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, event), { target: __assign(__assign({}, localRef.current), { value: trimmedValue }) }));
            }
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    };
    var autosizeTextarea = function (event) {
        var target = event.target;
        target.rows = rows; // so that we can auto shrink
        var lineHeight = parseInt(window.getComputedStyle(target).lineHeight);
        var newRows = Math.ceil(target.scrollHeight / lineHeight);
        if (newRows > rows) {
            if (maxLines <= 0 || newRows <= maxLines) {
                target.rows = newRows;
            }
            else {
                target.rows = maxLines;
            }
        }
    };
    var handleChange = function (event) {
        var _a;
        event.persist();
        setHasValue(!!((_a = localRef.current) === null || _a === void 0 ? void 0 : _a.value));
        if (selectable) {
            onChange === null || onChange === void 0 ? void 0 : onChange(event);
        }
        else {
            debounced.callback(event);
        }
        if (multiline) {
            autosizeTextarea(event);
        }
    };
    var handleFocus = function (event) {
        // handle focused styles manually in browsers that do not support ':focus-within'
        if (!isFocusWithinSupported()) {
            appearFocusedStyles[variant][status][color]
                .split(' ')
                .forEach(function (className) {
                var _a;
                (_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(className);
            });
        }
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    };
    // If end adornment is long enough to overlap the label, shrink the label to the top
    React.useLayoutEffect(function () {
        var _a, _b, _c, _d;
        if (!shrinkLabel &&
            labelRef.current &&
            localRef.current &&
            ((_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) + ((_b = labelRef.current) === null || _b === void 0 ? void 0 : _b.offsetLeft) >
                ((_c = localRef.current) === null || _c === void 0 ? void 0 : _c.clientWidth) + ((_d = localRef.current) === null || _d === void 0 ? void 0 : _d.offsetLeft)) {
            setShrinkLabel(true);
        }
    }, [EndAdornment, shrinkLabel]);
    var commonProps = {
        'aria-activedescendant': extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-activedescendant'],
        'aria-autocomplete': extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-autocomplete'],
        'aria-controls': extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-controls'],
        'aria-owns': extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-controls'],
        'aria-describedby': helperText ? "helper-text-".concat(id) : undefined,
        'aria-expanded': extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-expanded'],
        'aria-haspopup': extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-haspopup'],
        'aria-labelledby': (extraProps === null || extraProps === void 0 ? void 0 : extraProps['aria-labelledby']) || "label-".concat((extraProps === null || extraProps === void 0 ? void 0 : extraProps.id) || id),
        autoFocus: autoFocus,
        className: clsx__default['default'](baseClasses.input, inputVariants[status][color], multiline
            ? [
                multilineSizes[variant][size],
                'overflow-x-hidden break-words no-scrollbar resize-none',
            ]
            : [sizes$4[variant][size], 'truncate'], selectable ? 'cursor-pointer' : ''),
        disabled: disabled,
        id: extraProps === null || extraProps === void 0 ? void 0 : extraProps.id,
        inputMode: inputMode || modes[type],
        name: name,
        onBlur: handleBlur,
        onChange: handleChange,
        onClick: onClick,
        onFocus: handleFocus,
        onKeyDown: onKeyDown,
        placeholder: '',
        readOnly: readOnly,
        required: required,
        role: extraProps === null || extraProps === void 0 ? void 0 : extraProps.role,
        tabIndex: tabIndex,
        type: type,
        defaultValue: defaultValue,
    };
    return (React__default['default'].createElement("div", { className: baseClasses.container },
        React__default['default'].createElement("label", { className: "relative", ref: containerRef },
            React__default['default'].createElement("div", { className: clsx__default['default'](baseClasses.inputWrapper, focusedStyles[variant][status][color], appearFocused
                    ? appearFocusedStyles[variant][status][color]
                    : variants$3[variant][status][color], multiline ? '' : parentSizes[variant][size]), ref: ref },
                StartAdornment ? (React__default['default'].createElement("span", { className: clsx__default['default'](baseClasses.start, variant === 'filled' ? 'pt-3' : null, multiline
                        ? adornments.multilineSize[variant][size]
                        : adornments.size[variant][size], adornments.text[status][color], typeof StartAdornment === 'function' &&
                        'uiName' in StartAdornment &&
                        StartAdornment.uiName === 'SvgIcon'
                        ? adornments.icon
                        : null) }, typeof StartAdornment === 'function' &&
                    'uiName' in StartAdornment &&
                    StartAdornment.uiName === 'SvgIcon' ? (React__default['default'].createElement(StartAdornment, { color: "inherit" })) : (StartAdornment))) : null,
                multiline ? (React__default['default'].createElement("textarea", __assign({}, commonProps, { ref: syncRef, rows: rows }))) : (React__default['default'].createElement("input", __assign({}, commonProps, toDataSet(dataSet), { enterKeyHint: enterKeyHint, max: max, min: min, ref: syncRef }))),
                onClear && hasValue ? (React__default['default'].createElement("span", { className: clsx__default['default'](baseClasses.end, multiline
                        ? adornments.multilineSize[variant][size]
                        : adornments.size[variant][size], adornments.text[status][color], EndAdornment ? 'mr-0.5' : 'mr-2.5') },
                    React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'TextInput.clear_labelled_input' }, { label: label }), color: color, onClick: handleClear, size: "small" },
                        React__default['default'].createElement(Close, null)))) : null,
                EndAdornment ? (React__default['default'].createElement("span", { className: clsx__default['default'](baseClasses.end, multiline
                        ? adornments.multilineSize[variant][size]
                        : adornments.size[variant][size], adornments.text[status][color], typeof EndAdornment === 'function' &&
                        'uiName' in EndAdornment &&
                        EndAdornment.uiName === 'SvgIcon'
                        ? adornments.icon
                        : null, 'mr-3') }, typeof EndAdornment === 'function' &&
                    'uiName' in EndAdornment &&
                    EndAdornment.uiName === 'SvgIcon' ? (React__default['default'].createElement(EndAdornment, { color: "inherit" })) : (EndAdornment))) : null,
                React__default['default'].createElement("span", { className: clsx__default['default']('input-label', variant === 'outlined'
                        ? 'input-label-outlined'
                        : 'input-label-filled', size === 'medium' ? 'input-label-medium' : 'input-label-small', baseClasses.label, disabled ? 'cursor-not-allowed' : 'cursor-text', appearFocused
                        ? "".concat(labels.focused[variant], " ").concat(labelColors.focused[variant][status][color])
                        : shrinkLabel
                            ? "".concat(labels.value[variant], " ").concat(labelColors.value[variant][status][color])
                            : "".concat(labels.inactive[variant], " ").concat(labelColors.inactive[variant][status][color]), appearFocused || shrinkLabel
                        ? labelSpacing.focused[variant][size]
                        : labelSpacing.inactive[variant][size]), id: "label-".concat((extraProps === null || extraProps === void 0 ? void 0 : extraProps.id) || id), ref: labelRef }, label))),
        React__default['default'].createElement("div", { "aria-live": error ? 'assertive' : 'off', className: helperText
                ? clsx__default['default'](baseClasses.help, labelColors.value[variant][status][color])
                : 'sr-only', id: "helper-text-".concat(id) }, helperText ? helperText : null)));
});

function Text(_a, ref) {
    var _b, _c;
    var _d = _a.clearable, clearable = _d === void 0 ? false : _d, color = _a.color, dataSet = _a.dataSet, _e = _a.defaultValue, defaultValue = _e === void 0 ? '' : _e, defaultDisplayValue = _a.defaultDisplayValue, displayRef = _a.displayRef, disabled = _a.disabled, endAdornment = _a.endAdornment, error = _a.error, helperText = _a.helperText, inputRef = _a.inputRef, inMenu = _a.inMenu, label = _a.label, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, name = _a.name, size = _a.size, startAdornment = _a.startAdornment, variant = _a.variant;
    var _f = React.useState(null), blurTarget = _f[0], setBlurTarget = _f[1];
    var _g = useMenu(), state = _g[0], dispatch = _g[1];
    var _h = useAutocomplete(), _j = _h[0], displayInputRef = _j.displayInputRef, groups = _j.groups, selectedLabel = _j.label, localRef = _j.inputRef, multi = _j.multi, select = _j.select, selectingRef = _j.selectingRef, value = _j.value, dispatchAutocomplete = _h[1];
    var hiddenInputRef = useSyncRefs(inputRef, localRef);
    var buttonRef = useSyncRefs(state.buttonRef, ref);
    React.useEffect(function () {
        if (localRef.current) {
            localRef.current.value = defaultValue;
        }
    }, [defaultValue, localRef]);
    React.useEffect(function () {
        if (!state.show && blurTarget) {
            blurTarget.blur();
        }
    }, [blurTarget, state.show]);
    var activeId = (state === null || state === void 0 ? void 0 : state.activeItemIndex) !== null && ((_b = state.items[state.activeItemIndex]) === null || _b === void 0 ? void 0 : _b.id);
    var activeLabel = activeId && ((_c = document.getElementById(activeId)) === null || _c === void 0 ? void 0 : _c.textContent);
    var commonProps = {
        onBlur: function (event) {
            var _a;
            event.preventDefault();
            if (!inMenu) {
                if (state.show) {
                    event.target.focus();
                }
                else {
                    if (select && !multi) {
                        selectingRef.current = true;
                        var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
                        var inputEvent = new Event('input', { bubbles: true });
                        (_a = descriptor.set) === null || _a === void 0 ? void 0 : _a.call(event.target, selectedLabel);
                        event.target.dispatchEvent(inputEvent);
                        dispatchAutocomplete({
                            type: ActionTypes$1.SelectOption,
                            label: selectedLabel,
                            value: value,
                        });
                    }
                }
            }
            if (!state.show || inMenu) {
                setBlurTarget(null);
                onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
            }
        },
        onChange: function (event) {
            var _a, _b;
            if (!((_a = event.target) === null || _a === void 0 ? void 0 : _a.value) && !multi) {
                dispatchAutocomplete({ type: ActionTypes$1.ClearSearching });
                dispatch({ type: ActionTypes.CloseMenu });
                onChange === null || onChange === void 0 ? void 0 : onChange(event);
                return;
            }
            if (selectingRef.current) {
                selectingRef.current = false;
                if (selectedLabel === ((_b = event.target) === null || _b === void 0 ? void 0 : _b.value)) {
                    return;
                }
            }
            dispatchAutocomplete({ type: ActionTypes$1.SetSearching });
            if (!state.show) {
                dispatch({ type: ActionTypes.OpenMenu });
            }
            onChange === null || onChange === void 0 ? void 0 : onChange(event);
        },
        onFocus: function (event) {
            var _a;
            if ((!state.show || inMenu) &&
                (((_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.value) ||
                    Object.values(groups).some(function (group) {
                        return group.display !== exports.DisplayModes.WithTerm && group.hasChildren;
                    }))) {
                if (!inMenu) {
                    event.preventDefault();
                    dispatch({ type: ActionTypes.OpenMenu });
                }
                onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
            }
        },
        onKeyDown: function (event) {
            var _a, _b, _c;
            if (inMenu) {
                event.stopPropagation();
            }
            if (event.repeat) {
                return;
            }
            switch (event.key) {
                case Keys.Tab:
                    if (state.show && !inMenu) {
                        dispatch({ type: ActionTypes.CloseMenu });
                    }
                    break;
                case Keys.Escape:
                    if (state.show) {
                        if (inMenu) {
                            (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                        }
                        else {
                            dispatch({ type: ActionTypes.CloseMenu });
                        }
                    }
                    break;
                case Keys.Enter:
                    if (state.activeItemIndex != null && state.show) {
                        var itemId = state.items[state.activeItemIndex].id;
                        (_b = document.getElementById(itemId)) === null || _b === void 0 ? void 0 : _b.click();
                        if (!multi) {
                            dispatch({ type: ActionTypes.SelectItem, id: itemId });
                        }
                    }
                    break;
                case Keys.ArrowDown:
                    event.preventDefault();
                    if (!state.show) {
                        if (((_c = displayInputRef.current) === null || _c === void 0 ? void 0 : _c.value) ||
                            Object.values(groups).some(function (group) {
                                return group.display !== exports.DisplayModes.WithTerm && group.hasChildren;
                            })) {
                            dispatch({ type: ActionTypes.OpenMenu });
                        }
                    }
                    else {
                        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Next });
                    }
                    break;
                case Keys.ArrowUp:
                    event.preventDefault();
                    if (!state.show) {
                        dispatch({ type: ActionTypes.OpenMenu });
                    }
                    else {
                        dispatch({ type: ActionTypes.GoToItem, focus: Focus.Previous });
                    }
            }
        },
    };
    var menuProps = {
        'aria-activedescendant': activeLabel && state.show ? activeLabel : undefined,
        'aria-autocomplete': 'list',
        'aria-expanded': state.show ? 'true' : undefined,
        'aria-haspopup': 'listbox',
        'aria-controls': "coconut-menu-".concat(state.id),
        id: "coconut-menu-button-".concat(state.id),
        role: 'combobox',
        onClick: function (event) {
            var _a;
            if (!state.show && ((_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.value)) {
                event.preventDefault();
                dispatch({ type: ActionTypes.OpenMenu });
            }
        },
        ref: buttonRef,
    };
    React.useEffect(function () {
        if (inMenu && multi) {
            dispatch({ type: ActionTypes.RegisterMultiSelect });
        }
        else if (!inMenu) {
            dispatch === null || dispatch === void 0 ? void 0 : dispatch({ type: ActionTypes.RegisterSelect });
        }
    }, [dispatch, inMenu, multi]);
    var clearInput = function () {
        if (localRef.current)
            localRef.current.value = '';
        dispatchAutocomplete({ type: ActionTypes$1.Clear });
    };
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        select ? (React__default['default'].createElement("input", { className: "hidden", defaultValue: defaultValue, disabled: disabled, name: name, ref: hiddenInputRef })) : null,
        React__default['default'].createElement(TextInput, __assign({ color: color, dataSet: dataSet, defaultValue: defaultDisplayValue, disabled: disabled, endAdornment: endAdornment, error: error, helperText: helperText, inputRef: displayRef, label: label }, (select ? {} : { name: name }), { onClear: clearable && selectedLabel ? clearInput : undefined, size: size, startAdornment: startAdornment, variant: variant }, commonProps, (inMenu ? {} : menuProps)))));
}
var Text$1 = React.forwardRef(Text);

var _a$2;
(function (DisplayModes) {
    DisplayModes["Always"] = "always";
    DisplayModes["WithTerm"] = "with-term";
    DisplayModes["WithoutTerm"] = "without-term";
})(exports.DisplayModes || (exports.DisplayModes = {}));
var AutocompleteContext = React.createContext(null);
var reducers$2 = (_a$2 = {},
    _a$2[ActionTypes$1.RegisterGroup] = function (state, action) {
        var _a;
        return (__assign(__assign({}, state), { groups: __assign(__assign({}, state.groups), (_a = {}, _a[action.id] = action.data, _a)) }));
    },
    _a$2[ActionTypes$1.UnregisterGroup] = function (state, action) {
        var groups = __assign({}, state.groups);
        delete groups[action.id];
        return __assign(__assign({}, state), { groups: groups });
    },
    _a$2[ActionTypes$1.SetSearching] = function (state) { return (__assign(__assign({}, state), { searching: true })); },
    _a$2[ActionTypes$1.ClearSearching] = function (state) { return (__assign(__assign({}, state), { searching: false })); },
    _a$2[ActionTypes$1.Clear] = function (state) { return (__assign(__assign({}, state), { selecting: false, label: '', value: '' })); },
    _a$2[ActionTypes$1.ClearSelecting] = function (state) { return (__assign(__assign({}, state), { selecting: false })); },
    _a$2[ActionTypes$1.SelectOption] = function (state, action) {
        return __assign(__assign({}, state), { searching: state.multi ? state.searching : false, label: action.label || state.label, value: action.value });
    },
    _a$2[ActionTypes$1.SetMinWidth] = function (state, action) { return (__assign(__assign({}, state), { minWidth: action.value })); },
    _a$2);
var runReducer$2 = function (state, action) { return reducers$2[action.type](state, action); };
var useAutocomplete = function () {
    return React.useContext(AutocompleteContext);
};
function Autocomplete(_a) {
    var _b, _c, _d;
    var _e = _a.creatable, creatable = _e === void 0 ? false : _e, _f = _a.clearable, clearable = _f === void 0 ? false : _f, children = _a.children, _g = _a.color, color = _g === void 0 ? 'default' : _g, dataSet = _a.dataSet, _h = _a.defaultDisplayValue, defaultDisplayValue = _h === void 0 ? '' : _h, _j = _a.defaultValue, defaultValue = _j === void 0 ? '' : _j, _k = _a.disabled, disabled = _k === void 0 ? false : _k, displayRef = _a.displayRef, endAdornment = _a.endAdornment, _l = _a.error, error = _l === void 0 ? false : _l, helperText = _a.helperText, _m = _a.inputRef, inputRef = _m === void 0 ? null : _m, label = _a.label, _o = _a.loading, loading = _o === void 0 ? false : _o, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onSelect = _a.onSelect, _p = _a.select, select = _p === void 0 ? false : _p, _q = _a.size, size = _q === void 0 ? 'medium' : _q, startAdornment = _a.startAdornment, _r = _a.variant, variant = _r === void 0 ? 'outlined' : _r;
    var _s = (_b = useMultiSelect()) !== null && _b !== void 0 ? _b : [], multiState = _s[0], multiDispatch = _s[1];
    var multi = !!multiDispatch;
    var displayValue = defaultDisplayValue || defaultValue;
    var localDisplayRef = React.useRef(null);
    var localInputRef = React.useRef(null);
    var selectingRef = React.useRef(false);
    var onSelectRef = React.useRef(onSelect);
    var intl = reactIntl.useIntl();
    var _t = React.useReducer(runReducer$2, null, function () {
        return {
            displayInputRef: localDisplayRef,
            groups: {},
            inputRef: localInputRef,
            label: displayValue,
            multi: multi,
            onSelectRef: onSelectRef,
            select: select,
            // Indicates that the input label is updated by selecting a suggestion.
            // Therefore, we don't want to trigger any functionality associated with user typing
            selectingRef: selectingRef,
            searching: multi ? defaultDisplayValue : select ? false : !!defaultValue,
            value: defaultValue,
        };
    }), state = _t[0], dispatch = _t[1];
    var windowSize = useWindowSize(localDisplayRef);
    React.useEffect(function () {
        onSelectRef.current = onSelect;
    }, [onSelect]);
    var displaySyncRef = useSyncRefs(displayRef, localDisplayRef);
    var inputSyncRef = useSyncRefs(inputRef, localInputRef);
    var hasVisibleChildren = React.useMemo(function () {
        return (React.Children.count(children) &&
            (Object.keys(state.groups).length === 0 ||
                Object.values(state.groups).some(function (group) {
                    return group.display !== exports.DisplayModes.WithoutTerm && group.hasChildren;
                })));
    }, [children, state.groups]);
    var _u = (_c = useMenu()) !== null && _c !== void 0 ? _c : [], menuDispatch = _u[1];
    var inMenu = !!menuDispatch;
    React.useLayoutEffect(function () {
        localDisplayRef.current &&
            dispatch({
                type: ActionTypes$1.SetMinWidth,
                value: window
                    .getComputedStyle(localDisplayRef.current)
                    .width.toString(),
            });
    }, [localDisplayRef, windowSize.width, menuDispatch]);
    var input = (React__default['default'].createElement(Text$1, { clearable: clearable && select, color: color, dataSet: dataSet, defaultDisplayValue: typeof displayValue === 'string' ? displayValue : '', defaultValue: defaultValue, disabled: disabled, displayRef: displaySyncRef, endAdornment: endAdornment, error: error, helperText: helperText, inMenu: inMenu, inputRef: inputSyncRef, label: label, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, size: size, startAdornment: startAdornment, variant: variant }));
    var items = (React__default['default'].createElement(React__default['default'].Fragment, null,
        loading ? (React__default['default'].createElement("div", { className: "flex justify-center px-3 py-1" },
            React__default['default'].createElement(Progress, { variant: "circular" }))) : (children),
        !loading &&
            !creatable &&
            (state.multi || state.searching) &&
            !hasVisibleChildren ? (React__default['default'].createElement("div", { className: "px-4 py-2 text-left cursor-default select-none text-black-60" },
            React__default['default'].createElement(Typography, { color: "inherit", variant: "subtitle2" },
                React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Ui.no_results" })))) : null,
        !loading && creatable && state.searching && !hasVisibleChildren ? (React__default['default'].createElement(Menu.Item, null,
            React__default['default'].createElement("span", null, intl.formatMessage({
                id: 'Autocomplete.add',
            }, {
                value: (_d = localDisplayRef.current) === null || _d === void 0 ? void 0 : _d.value,
            })))) : null));
    var onClose = function () {
        var _a;
        (_a = multiState === null || multiState === void 0 ? void 0 : multiState.handleClose) === null || _a === void 0 ? void 0 : _a.call(multiState);
    };
    return (React__default['default'].createElement(AutocompleteContext.Provider, { value: [state, dispatch] }, inMenu && multi ? (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Menu.Item, { applyFocusRef: localDisplayRef, selectable: false },
            React__default['default'].createElement("div", { className: "px-1 pt-1" }, input)),
        !loading && (multiState === null || multiState === void 0 ? void 0 : multiState.actions) && hasVisibleChildren ? (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("li", { className: "flex px-4 pb-3 space-x-2" }, multiState === null || multiState === void 0 ? void 0 : multiState.actions),
            React__default['default'].createElement(Divider, null))) : null,
        items)) : (React__default['default'].createElement("div", null,
        React__default['default'].createElement(Menu, { onClose: onClose },
            input,
            React__default['default'].createElement(Menu.Items, null,
                multi &&
                    !loading &&
                    (multiState === null || multiState === void 0 ? void 0 : multiState.actions) &&
                    hasVisibleChildren ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement("li", { className: "flex px-3 mb-2 -mt-2" },
                        React__default['default'].createElement("ul", null, multiState === null || multiState === void 0 ? void 0 : multiState.actions)),
                    React__default['default'].createElement(Divider, null))) : null,
                items))))));
}
function Suggestion$1(_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b, displayValue = _a.displayValue, value = _a.value, rest = __rest(_a, ["children", "disabled", "displayValue", "value"]);
    var extraProps = rest;
    var _c = useAutocomplete(), state = _c[0], dispatch = _c[1];
    var ref = React.useRef(null);
    var selected = state.value === value; // always false for multi
    var handleClick = function (event) {
        var _a, _b, _c, _d, _e, _f;
        if (!disabled) {
            event.persist();
            var input = (_a = state.inputRef) === null || _a === void 0 ? void 0 : _a.current;
            if (input) {
                var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
                var inputEvent = new Event('input', { bubbles: true });
                (_b = descriptor.set) === null || _b === void 0 ? void 0 : _b.call(input, state.select ? value : '');
                input.dispatchEvent(inputEvent);
            }
            var display = (_c = state.displayInputRef) === null || _c === void 0 ? void 0 : _c.current;
            if (display) {
                var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
                var inputEvent = new Event('input', { bubbles: true });
                (_d = descriptor.set) === null || _d === void 0 ? void 0 : _d.call(display, state.select && value
                    ? displayValue || event.currentTarget.textContent || ''
                    : '');
                display.dispatchEvent(inputEvent);
            }
            if (state.select) {
                state.selectingRef.current = true;
                dispatch({
                    type: ActionTypes$1.SelectOption,
                    label: value
                        ? displayValue || event.currentTarget.textContent || ''
                        : '',
                    value: value,
                });
            }
            (_f = (_e = state.onSelectRef).current) === null || _f === void 0 ? void 0 : _f.call(_e, event);
        }
    };
    var handler = state.multi
        ? { onChange: extraProps === null || extraProps === void 0 ? void 0 : extraProps.onChange }
        : { onClick: handleClick };
    return (React__default['default'].createElement(Menu.Item, __assign({}, ((extraProps === null || extraProps === void 0 ? void 0 : extraProps.checkbox)
        ? { checkbox: true, defaultChecked: extraProps.defaultChecked }
        : {}), { disabled: disabled, ref: ref, selected: selected, value: value }, handler), children));
}
Autocomplete.Group = Group$2;
Autocomplete.Suggestion = Suggestion$1;

// TODO: Make shared values for these utility colors
var colors$6 = {
    default: 'bg-zinc-100 text-zinc-800',
    primary: 'bg-primary-10 text-primary-darker',
    secondary: 'bg-secondary-10 text-secondary-darker',
    blue: 'bg-sky-100 text-sky-800',
    error: 'bg-red-100 text-red-800',
    green: 'bg-lime-100 text-lime-800',
    indigo: 'bg-violet-100 text-violet-700',
    pink: 'bg-pink-100 text-pink-700',
    purple: 'bg-fuchsia-100 text-fuchsia-700',
    red: 'bg-rose-100 text-rose-700',
    teal: 'bg-teal-100 text-teal-800',
    warning: 'bg-yellow-100 text-yellow-800',
    yellow: 'bg-amber-100 text-amber-800',
};
var variants$4 = {
    circle: 'rounded-full',
    square: '',
    rounded: 'rounded-md',
};
function Avatar(_a) {
    var _b, _c;
    var label = _a["aria-label"], children = _a.children, _d = _a.color, color = _d === void 0 ? 'default' : _d, name = _a.name, _e = _a.variant, variant = _e === void 0 ? 'circle' : _e;
    return (React__default['default'].createElement("div", { "aria-label": label || name, className: clsx__default['default']('justify-center items-center text-xl inline-flex w-10 h-10 p-2', colors$6[color], variants$4[variant]), role: "img" }, name !== undefined
        ? ((_c = (_b = name.match(/[A-Z]/g)) === null || _b === void 0 ? void 0 : _b.slice(0, 2)) === null || _c === void 0 ? void 0 : _c.join('')) ||
            name
                .split(' ')
                .slice(0, 2)
                .map(function (word) { return word.substring(0, 1).toUpperCase(); })
                .join('')
        : typeof children === 'string'
            ? children.substring(0, 2).toUpperCase()
            : children));
}

var colors$7 = {
    default: "bg-light-grey-main text-black-90",
    error: "bg-error-main text-white-100",
    primary: "bg-primary-main text-white-100",
    secondary: "bg-secondary-main text-white-100",
};
var positions$1 = {
    rectangle: {
        top: 'top-0 -translate-y-1/2',
        bottom: 'bottom-0 translate-y-1/2',
        left: 'left-0 -translate-x-1/2',
        right: 'right-0 translate-x-1/2',
    },
    circle: {
        top: 'top-7/50 -translate-y-1/2',
        bottom: 'bottom-7/50 translate-y-1/2',
        left: 'left-7/50 -translate-x-1/2',
        right: 'right-7/50 translate-x-1/2',
    },
};
var variants$5 = {
    default: 'h-5 min-w-5 justify-center items-center content-center px-1.5 text-xs leading-6',
    dot: 'h-2 w-2',
};
function Badge(_a) {
    var label = _a["aria-label"], children = _a.children, _b = _a.color, color = _b === void 0 ? 'default' : _b, _c = _a.value, value = _c === void 0 ? null : _c, _d = _a.invisible, invisible = _d === void 0 ? false : _d, _e = _a.max, max = _e === void 0 ? 99 : _e, _f = _a.overlap, overlap = _f === void 0 ? 'rectangle' : _f, role = _a.role, _g = _a.showZero, showZero = _g === void 0 ? false : _g, _h = _a.variant, variant = _h === void 0 ? 'default' : _h, _j = _a.position, position = _j === void 0 ? { x: 'right', y: 'top' } : _j;
    var isVisible = !invisible;
    if ((value === 0 || value === '0') && !showZero) {
        isVisible = false;
    }
    var isNumeric = typeof value === 'number' || (typeof value === 'string' && !isNaN(+value));
    if (value && isNumeric && +value > max) {
        value = "".concat(max, "+");
    }
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("span", { "aria-label": label, className: "relative inline-flex shrink-0 align-middle", role: role },
            children,
            React__default['default'].createElement("span", { "aria-hidden": !isVisible, className: clsx__default['default']('absolute z-10 flex font-sans transition-all duration-200 ease-in-out rounded-full', colors$7[color], isVisible ? 'scale-100' : 'scale-0', positions$1[overlap][position.x || 'right'], positions$1[overlap][position.y || 'top'], variants$5[variant]) }, variant === 'default' ? value : null))));
}

function Banner(_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "bg-primary-10 w-full px-4.5 py-2.5 inline-flex items-center flex-grow flex-wrap", role: "banner" }, children));
}
function Content$1(_a) {
    var children = _a.children;
    return React__default['default'].createElement("div", { className: "flex items-center text-inherit" }, children);
}
function StartAdornment(_a) {
    var children = _a.children;
    return (React__default['default'].createElement("span", { className: "shrink-0 w-6 h-6 mr-2.5 text-primary-main" }, children));
}
function Description$2(_a) {
    var children = _a.children;
    return (React__default['default'].createElement(Typography, { color: "inherit", variant: "body2" }, children));
}
function Actions$1(_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "ml-3" },
        React__default['default'].createElement("div", { className: "flex space-x-3" }, children)));
}
Banner.Actions = Actions$1;
Banner.Content = Content$1;
Banner.Description = Description$2;
Banner.StartAdornment = StartAdornment;
Banner.displayName = 'Banner';
// Proper display names are necessary to generate correct code snippets in stories
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Banner.Actions.displayName = 'Banner.Actions';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Banner.Content.displayName = 'Banner.Content';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Banner.Description.displayName = 'Banner.Description';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Banner.StartAdornment.displayName = 'Banner.StartAdornment';

function ButtonGroup(_a) {
    var children = _a.children, _b = _a.color, groupColor = _b === void 0 ? 'default' : _b, _c = _a.disabled, groupDisabled = _c === void 0 ? false : _c, _d = _a.size, groupSize = _d === void 0 ? 'medium' : _d, _e = _a.variant, groupVariant = _e === void 0 ? 'contained' : _e;
    var elements = React.Children.toArray(children);
    var number = React.Children.count(elements);
    return (React__default['default'].createElement("div", { className: "flex", role: "group" }, elements.map(function (child, index) {
        if (child) {
            var color = child.props.color || groupColor;
            var disabled = child.props.disabled || groupDisabled;
            var size = child.props.size || groupSize;
            var variant = child.props.variant || groupVariant;
            var position = index === 0 ? 'left' : index === number - 1 ? 'right' : 'middle';
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    color: color,
                    disabled: disabled,
                    position: position,
                    size: size,
                    variant: variant,
                });
            }
        }
    })));
}

function Collapse(_a) {
    var children = _a.children, _b = _a.dir, dir = _b === void 0 ? 'col' : _b, id = _a.id, _c = _a.open, open = _c === void 0 ? false : _c;
    return (React__default['default'].createElement("div", { className: clsx__default['default'](open
            ? ['flex overflow-hidden', dir === 'col' ? 'flex-col' : 'flex-row']
            : 'hidden'), id: id }, children));
}

function useElementOverflow(ref) {
    var dependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dependencies[_i - 1] = arguments[_i];
    }
    var _a = React.useState(function () { return false; }), overflowing = _a[0], setOverflowing = _a[1];
    var windowSize = useWindowSize(ref);
    React.useEffect(function () {
        var el = ref.current;
        if (el) {
            setOverflowing(el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight);
        }
    }, [ref, windowSize.height, windowSize.width, dependencies]);
    return overflowing;
}

var ActionTypes$3;
(function (ActionTypes) {
    ActionTypes[ActionTypes["SetCollapsable"] = 0] = "SetCollapsable";
    ActionTypes[ActionTypes["SetHasActions"] = 1] = "SetHasActions";
    ActionTypes[ActionTypes["UnsetCollapsable"] = 2] = "UnsetCollapsable";
    ActionTypes[ActionTypes["UnsetHasActions"] = 3] = "UnsetHasActions";
    ActionTypes[ActionTypes["ToggleOpen"] = 4] = "ToggleOpen";
})(ActionTypes$3 || (ActionTypes$3 = {}));

var _a$3;
var CardContext = React.createContext(null);
var useCard = function () { return React.useContext(CardContext); };
function createInitialState() {
    return {
        collapsable: false,
        collapseId: undefined,
        hasActions: false,
        open: false,
    };
}
var reducers$3 = (_a$3 = {},
    _a$3[ActionTypes$3.SetCollapsable] = function (state, action) {
        return __assign(__assign({}, state), { collapsable: true, collapseId: action.collapseId });
    },
    _a$3[ActionTypes$3.SetHasActions] = function (state) {
        return __assign(__assign({}, state), { hasActions: true });
    },
    _a$3[ActionTypes$3.UnsetCollapsable] = function (state) {
        return __assign(__assign({}, state), { collapsable: false, collapseId: undefined });
    },
    _a$3[ActionTypes$3.UnsetHasActions] = function (state) {
        return __assign(__assign({}, state), { hasActions: false });
    },
    _a$3[ActionTypes$3.ToggleOpen] = function (state) {
        return __assign(__assign({}, state), { open: !state.open });
    },
    _a$3);
var runReducer$3 = function (state, action) {
    return reducers$3[action.type](state, action);
};
function Action(_a) {
    var children = _a.children;
    return children;
}
function CardActions(_a) {
    var children = _a.children;
    var _b = useCard(), dispatch = _b[1];
    React.useEffect(function () {
        dispatch({ type: ActionTypes$3.SetHasActions });
        return function () { return dispatch({ type: ActionTypes$3.UnsetHasActions }); };
    }, [dispatch]);
    return React__default['default'].createElement("div", { className: "shrink-0 p-2 space-x-2" }, children);
}
function Card(_a) {
    var children = _a.children, _b = _a.outlined, outlined = _b === void 0 ? false : _b;
    var _c = React.useReducer(runReducer$3, null, createInitialState), state = _c[0], dispatch = _c[1];
    return (React__default['default'].createElement("div", { className: clsx__default['default']('flex flex-col w-full h-full font-sans bg-white-100 rounded max-h-inherit', outlined ? 'border border-black-15' : 'shadow-1') },
        React__default['default'].createElement(CardContext.Provider, { value: [state, dispatch] }, children)));
}
function CollapseButton() {
    var intl = reactIntl.useIntl();
    var _a = useCard(), _b = _a[0], open = _b.open, collapseId = _b.collapseId, dispatch = _a[1];
    var onClick = function () {
        dispatch({ type: ActionTypes$3.ToggleOpen });
    };
    return (React__default['default'].createElement(IconButton, { "aria-controls": collapseId, "aria-expanded": open, "aria-label": intl.formatMessage({ id: 'Card.toggle_content' }), onClick: onClick, size: "medium" }, open ? React__default['default'].createElement(ExpandLess, null) : React__default['default'].createElement(ExpandMore, null)));
}
function CollapseContent(_a) {
    var children = _a.children;
    var _b = useCard(), open = _b[0].open, dispatch = _b[1];
    var collapseId = "coconut-collapsable-card-content-".concat(useId());
    React.useEffect(function () {
        dispatch({ type: ActionTypes$3.SetCollapsable, collapseId: collapseId });
        return function () { return dispatch({ type: ActionTypes$3.UnsetCollapsable }); };
    }, [dispatch, collapseId]);
    return (React__default['default'].createElement(Collapse, { id: collapseId, open: open }, children));
}
function Content$2(_a) {
    var children = _a.children;
    var _b = useCard()[0], hasActions = _b.hasActions, open = _b.open;
    var ref = React.useRef(null);
    var _c = React.useState(false), rendering = _c[0], setRendering = _c[1];
    var overflowing = useElementOverflow(ref, rendering);
    React.useEffect(function () {
        setRendering(true);
    }, [children, open]);
    React.useLayoutEffect(function () {
        setRendering(false);
    }, [children, open, ref]);
    return (React__default['default'].createElement("div", { className: clsx__default['default']('py-4 overflow-hidden overflow-y-auto', overflowing ? 'border-t border-black-10' : null, overflowing && hasActions ? 'border-b' : null), ref: ref },
        React__default['default'].createElement("div", { className: "px-4" }, children)));
}
function Header(_a) {
    var children = _a.children;
    var collapsable = useCard()[0].collapsable;
    var components = {
        action: null,
        subtitle: null,
        title: null,
    };
    // TODO: This is written like this because Typescript complains when trying to access `child.type.name`. We need to figure out a way to type the child appropriately.
    React.Children.forEach(children, function (child) {
        switch (child.type) {
            case Action:
                components.action = child;
                break;
            case Subtitle:
                components.subtitle = child;
                break;
            case Title$1:
                components.title = child;
                break;
        }
    });
    return (React__default['default'].createElement("div", { className: "flex flex-row items-center justify-between shrink-0 p-4" },
        components.title || components.subtitle ? (React__default['default'].createElement("div", { className: "flex flex-col" },
            components.title,
            components.subtitle)) : null,
        React__default['default'].createElement("div", null,
            collapsable ? React__default['default'].createElement(CollapseButton, null) : null,
            components.action)));
}
function Subtitle(_a) {
    var children = _a.children;
    return (React__default['default'].createElement("span", { className: "text-sm font-normal leading-5 text-black-60" }, children));
}
function Title$1(_a) {
    var children = _a.children;
    return (React__default['default'].createElement("span", { className: "text-sm font-normal leading-5 text-black-90" }, children));
}
Card.Actions = CardActions;
Card.Action = Action;
Card.Collapse = CollapseContent;
Card.Content = Content$2;
Card.Header = Header;
Card.Subtitle = Subtitle;
Card.Title = Title$1;

var variants$6 = {
    default: {
        contained: {
            default: "border border-transparent bg-black-5 text-black-90",
            primary: "border border-transparent bg-primary-main text-white-100",
            secondary: "border border-transparent bg-secondary-main text-white-100",
            disabled: "border border-transparent bg-black-15 text-black-30",
        },
        outlined: {
            default: "border border-black-25 text-black-90 ",
            primary: "border border-primary-main text-primary-main",
            secondary: "border border-secondary-main text-secondary-main",
            disabled: "border border-black-15 text-black-30",
        },
    },
    button: {
        contained: {
            default: "border border-transparent bg-black-5 text-black-90 disabled:bg-black-15 disabled:text-black-30 active:bg-black-25 focus:bg-black-15 hover:bg-black-15",
            primary: "border border-transparent bg-primary-main text-white-100 disabled:bg-black-15 disabled:text-black-30 active:bg-primary-darker focus:bg-primary-dark hover:bg-primary-dark",
            secondary: "border border-transparent bg-secondary-main text-white-100 disabled:bg-black-15 disabled:text-black-30 active:bg-secondary-darker focus:bg-secondary-dark hover:bg-secondary-dark",
            disabled: "border border-transparent bg-black-15 text-black-30 cursor-not-allowed",
        },
        outlined: {
            default: "border border-black-25 text-black-90 disabled:bg-black-15 disabled:text-black-30 active:bg-black-25 focus:bg-black-15 hover:bg-black-15",
            primary: "border border-primary-main text-primary-main disabled:bg-black-15 disabled:text-black-30 active:bg-primary-20 focus:bg-primary-10 hover:bg-primary-10",
            secondary: "border border-secondary-main text-secondary-main disabled:bg-black-15 disabled:text-black-30 active:bg-secondary-20 focus:bg-secondary-10 hover:bg-secondary-10",
            disabled: "border border-black-15 text-black-30 cursor-not-allowed",
        },
    },
    focusable: {
        contained: {
            default: "border border-transparent bg-black-5 text-black-90 active:bg-black-15 focus:bg-black-15",
            primary: "border border-transparent bg-primary-main text-white-100 active:bg-primary-dark focus:bg-primary-dark",
            secondary: "border border-transparent bg-secondary-main text-white-100 active:bg-secondary-dark focus:bg-secondary-dark",
            disabled: "border border-transparent bg-black-15 text-black-30",
        },
        outlined: {
            default: "border border-black-25 text-black-90 active:bg-black-15 focus:bg-black-15",
            primary: "border border-primary-main text-primary-main active:bg-primary-10 focus:bg-primary-10",
            secondary: "border border-secondary-main text-secondary-main active:bg-secondary-10 focus:bg-secondary-10",
            disabled: "border border-black-15 text-black-30",
        },
    },
};
var iconColors = {
    letter: {
        default: "text-black-90 bg-black-15",
        primary: "text-white-100 bg-primary-dark",
        secondary: "text-white-100 bg-secondary-dark",
        disabled: 'text-black-30 bg-black-15',
    },
    cancel: {
        default: "text-black-45 active:text-black-90 hover:text-black-60 focused:text-black-60 disabled:text-black-30 disabled:cursor-not-allowed",
        primary: "text-primary-main hover:text-primary-dark focused:text-primary-dark active:text-primary-darker  disabled:text-black-30 disabled:cursor-not-allowed",
        secondary: "text-secondary-main hover:text-secondary-dark focused:text-secondary-dark active:text-secondary-darker disabled:text-black-30 disabled:cursor-not-allowed",
    },
};
var sizes$5 = {
    medium: {
        root: 'px-3 py-1',
        rootWithAdornment: 'px-3 py-1',
        icon: 'w-6 h-6',
        cancel: 'w-6 h-6',
        iconPadding: '-ml-2 mr-2',
        cancelPadding: 'ml-2 -mr-2',
        text: 'font-sans text-sm font-normal',
        letter: 'font-sans text-sm font-normal leading-6 text-center',
    },
    small: {
        root: 'px-2 py-0.5',
        rootWithAdornment: 'px-2 py-1',
        icon: 'w-4.5 h-4.5',
        cancel: 'w-4 h-4',
        iconPadding: '-ml-1 mr-1',
        cancelPadding: 'ml-1 -mr-1',
        text: 'font-sans text-xs font-normal',
        letter: 'font-sans text-xs leading-4.5 text-center',
    },
};
function Chip(_a) {
    var _b = _a.color, color = _b === void 0 ? 'default' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, label = _a.label, onClick = _a.onClick, onDelete = _a.onDelete, _d = _a.size, size = _d === void 0 ? 'medium' : _d, startAdornment = _a.startAdornment, _e = _a.variant, variant = _e === void 0 ? 'contained' : _e;
    var intl = reactIntl.useIntl();
    var chipType = onClick ? 'button' : onDelete ? 'focusable' : 'default';
    var handleDelete = function (event) {
        event.stopPropagation();
        if (!disabled && onDelete) {
            onDelete(event);
        }
    };
    var onKeyDown = function (event) {
        if (event.key === Keys.Delete || event.key === Keys.Backspace) {
            handleDelete(event);
        }
        if (event.key === Keys.Escape) {
            var button = event.target;
            button.blur();
        }
    };
    var isButton = onClick || onDelete;
    var Component = isButton ? 'button' : 'div';
    var buttonProps = isButton
        ? {
            'aria-label': label,
            disabled: disabled,
            onClick: onClick,
            onKeyDown: onKeyDown,
        }
        : {};
    return (React__default['default'].createElement(Component, __assign({ className: clsx__default['default']('rounded-full inline-flex items-center select-none focus:outline-none', startAdornment ? sizes$5[size].rootWithAdornment : sizes$5[size].root, disabled
            ? variants$6[chipType][variant].disabled
            : variants$6[chipType][variant][color], !onClick && 'cursor-default') }, buttonProps),
        React__default['default'].createElement("label", { className: clsx__default['default']('flex items-center', onClick ? (disabled ? 'cursor-not-allowed' : 'cursor-pointer') : null) },
            startAdornment ? (React__default['default'].createElement(StartAdornment$1, { color: color, disabled: disabled, size: size, variant: variant }, startAdornment)) : null,
            React__default['default'].createElement("span", { className: clsx__default['default']('flex', sizes$5[size].text) }, label)),
        onDelete ? (React__default['default'].createElement("div", __assign({ "aria-label": intl.formatMessage({ id: 'Chip.remove' }), className: clsx__default['default']('focus:outline-none', sizes$5[size].cancel, sizes$5[size].cancelPadding, disabled
                ? 'cursor-not-allowed'
                : variant === 'contained'
                    ? iconColors.cancel.default
                    : iconColors.cancel[color]), role: "button", tabIndex: -1 }, (disabled
            ? {}
            : {
                onClick: handleDelete,
            })),
            React__default['default'].createElement(Cancel, null))) : null));
}
function StartAdornment$1(_a) {
    var children = _a.children, color = _a.color, disabled = _a.disabled, size = _a.size, variant = _a.variant;
    var startAdornmentString = typeof children === 'string';
    return (React__default['default'].createElement("div", { className: clsx__default['default']('flex relative', sizes$5[size].icon, sizes$5[size].iconPadding, startAdornmentString &&
            clsx__default['default']('rounded-full', disabled
                ? iconColors.letter.disabled
                : variant === 'contained'
                    ? 'bg-black-30'
                    : iconColors.letter[color])) },
        React__default['default'].createElement("div", { className: clsx__default['default']('absolute inset-x-0', startAdornmentString
                ? sizes$5[size].letter
                : 'overflow-hidden rounded-full', sizes$5[size].icon) }, children)));
}

var LocaleContext = React.createContext(null);
var useLocale = function () {
    return React.useContext(LocaleContext);
};
function LocaleProvider(_a) {
    var children = _a.children, _b = _a.locale, locale = _b === void 0 ? 'en' : _b;
    var _c = React.useState(locale), language = _c[0], setLanguage = _c[1];
    return (React__default['default'].createElement(LocaleContext.Provider, { value: [language, setLanguage] }, children));
}

function hexToHSL(H) {
    var red = 0;
    var green = 0;
    var blue = 0;
    if (H.length == 4) {
        red = Number('0x' + H[1] + H[1]);
        green = Number('0x' + H[2] + H[2]);
        blue = Number('0x' + H[3] + H[3]);
    }
    else if (H.length == 7) {
        red = Number('0x' + H[1] + H[2]);
        green = Number('0x' + H[3] + H[4]);
        blue = Number('0x' + H[5] + H[6]);
    }
    red /= 255;
    green /= 255;
    blue /= 255;
    var minimum = Math.min(red, green, blue);
    var maximum = Math.max(red, green, blue);
    var delta = maximum - minimum;
    var hue = 0;
    var saturation = 0;
    var light = 0;
    if (delta == 0) {
        hue = 0;
    }
    else if (maximum == red) {
        hue = ((green - blue) / delta) % 6;
    }
    else if (maximum == green) {
        hue = (blue - red) / delta + 2;
    }
    else {
        hue = (red - green) / delta + 4;
    }
    hue = Math.round(hue * 60);
    if (hue < 0) {
        hue += 360;
    }
    light = (maximum + minimum) / 2;
    saturation = delta == 0 ? 0 : delta / (1 - Math.abs(2 * light - 1));
    saturation = +(saturation * 100).toFixed(1);
    light = +(light * 100).toFixed(1);
    return { hue: hue, saturation: saturation, light: light };
}
function generateVariants(color) {
    var prefix = "hsla(".concat(color.hue, ", ").concat(color.saturation, "%,");
    return {
        main: "".concat(prefix, " ").concat(color.light, "%, 1)"),
        darker: "".concat(prefix, " ").concat(Math.round(color.light * 0.75), "%, 1)"),
        dark: "".concat(prefix, " ").concat(Math.round(color.light * 0.875), "%, 1)"),
        light: "".concat(prefix, " ").concat(Math.round(color.light * 1.125), "%, 1)"),
        lighter: "".concat(prefix, " ").concat(Math.round(color.light * 1.25), "%, 1)"),
        '20': "".concat(prefix, " ").concat(color.light, "%, 0.2)"),
        '15': "".concat(prefix, " ").concat(color.light, "%, 0.15)"),
        '10': "".concat(prefix, " ").concat(color.light, "%, 0.1)"),
    };
}
function setStyleVariables(_a) {
    var primary = _a.primary, secondary = _a.secondary;
    var root = document.documentElement;
    if (primary) {
        var values = generateVariants(hexToHSL(primary));
        root.style.setProperty('--color-primary-main', values.main);
        root.style.setProperty('--color-primary-darker', values.darker);
        root.style.setProperty('--color-primary-dark', values.dark);
        root.style.setProperty('--color-primary-light', values.light);
        root.style.setProperty('--color-primary-lighter', values.lighter);
        root.style.setProperty('--color-primary-20', values['20']);
        root.style.setProperty('--color-primary-15', values['15']);
        root.style.setProperty('--color-primary-10', values['10']);
    }
    if (secondary) {
        var values = generateVariants(hexToHSL(secondary));
        root.style.setProperty('--color-secondary-main', values.main);
        root.style.setProperty('--color-secondary-darker', values.darker);
        root.style.setProperty('--color-secondary-dark', values.dark);
        root.style.setProperty('--color-secondary-light', values.light);
        root.style.setProperty('--color-secondary-lighter', values.lighter);
        root.style.setProperty('--color-secondary-20', values['20']);
        root.style.setProperty('--color-secondary-15', values['15']);
        root.style.setProperty('--color-secondary-10', values['10']);
    }
}

function UiProvider(_a) {
    var children = _a.children, primary = _a.primary, secondary = _a.secondary;
    setStyleVariables({ primary: primary, secondary: secondary });
    return React__default['default'].createElement(LocaleProvider, null, children);
}

const offsetFormatCache = {};
const offsetCache = {};

/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */
function tzOffset(timeZone, date) {
  try {
    const format = offsetFormatCache[timeZone] ||= new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format;
    const offsetStr = format(date).split('GMT')[1] || '';
    if (offsetStr in offsetCache) return offsetCache[offsetStr];
    return calcOffset(offsetStr, offsetStr.split(":"));
  } catch {
    // Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
    // See: https://github.com/nodejs/node/issues/53419
    if (timeZone in offsetCache) return offsetCache[timeZone];
    const captures = timeZone?.match(offsetRe);
    if (captures) return calcOffset(timeZone, captures.slice(1));
    return NaN;
  }
}
const offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
  const hours = +values[0];
  const minutes = +(values[1] || 0);
  return offsetCache[cacheStr] = hours > 0 ? hours * 60 + minutes : hours * 60 - minutes;
}

class TZDateMini extends Date {
  //#region static

  constructor(...args) {
    super();
    if (args.length > 1 && typeof args[args.length - 1] === "string") {
      this.timeZone = args.pop();
    }
    this.internal = new Date();
    if (isNaN(tzOffset(this.timeZone, this))) {
      this.setTime(NaN);
    } else {
      if (!args.length) {
        this.setTime(Date.now());
      } else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) {
        this.setTime(args[0]);
      } else if (typeof args[0] === "string") {
        this.setTime(+new Date(args[0]));
      } else if (args[0] instanceof Date) {
        this.setTime(+args[0]);
      } else {
        this.setTime(+new Date(...args));
        adjustToSystemTZ(this);
        syncToInternal(this);
      }
    }
  }
  static tz(tz, ...args) {
    return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
  }

  //#endregion

  //#region time zone

  withTimeZone(timeZone) {
    return new TZDateMini(+this, timeZone);
  }
  getTimezoneOffset() {
    return -tzOffset(this.timeZone, this);
  }

  //#endregion

  //#region time

  setTime(time) {
    Date.prototype.setTime.apply(this, arguments);
    syncToInternal(this);
    return +this;
  }

  //#endregion

  //#region date-fns integration

  [Symbol.for("constructDateFrom")](date) {
    return new TZDateMini(+new Date(date), this.timeZone);
  }

  //#endregion
}

// Assign getters and setters
const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach(method => {
  if (!re.test(method)) return;
  const utcMethod = method.replace(re, "$1UTC");
  // Filter out methods without UTC counterparts
  if (!TZDateMini.prototype[utcMethod]) return;
  if (method.startsWith("get")) {
    // Delegate to internal date's UTC method
    TZDateMini.prototype[method] = function () {
      return this.internal[utcMethod]();
    };
  } else {
    // Assign regular setter
    TZDateMini.prototype[method] = function () {
      Date.prototype[utcMethod].apply(this.internal, arguments);
      syncFromInternal(this);
      return +this;
    };

    // Assign UTC setter
    TZDateMini.prototype[utcMethod] = function () {
      Date.prototype[utcMethod].apply(this, arguments);
      syncToInternal(this);
      return +this;
    };
  }
});

/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */
function syncToInternal(date) {
  date.internal.setTime(+date);
  date.internal.setUTCMinutes(date.internal.getUTCMinutes() - date.getTimezoneOffset());
}

/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */
function syncFromInternal(date) {
  // First we transpose the internal values
  Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
  Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());

  // Now we have to adjust the date to the system time zone
  adjustToSystemTZ(date);
}

/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */
function adjustToSystemTZ(date) {
  // Save the time zone offset before all the adjustments
  const offset = tzOffset(date.timeZone, date);

  //#region System DST adjustment

  // The biggest problem with using the system time zone is that when we create
  // a date from internal values stored in UTC, the system time zone might end
  // up on the DST hour:
  //
  //   $ TZ=America/New_York node
  //   > new Date(2020, 2, 8, 1).toString()
  //   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
  //   > new Date(2020, 2, 8, 2).toString()
  //   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
  //   > new Date(2020, 2, 8, 3).toString()
  //   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
  //   > new Date(2020, 2, 8, 4).toString()
  //   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
  //
  // Here we get the same hour for both 2 and 3, because the system time zone
  // has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
  // to adjust the internal date to reflect that.
  //
  // However we want to adjust only if that's the DST hour the change happenes,
  // not the hour where DST moves to.

  // We calculate the previous hour to see if the time zone offset has changed
  // and we have landed on the DST hour.
  const prevHour = new Date(+date);
  // We use UTC methods here as we don't want to land on the same hour again
  // in case of DST.
  prevHour.setUTCHours(prevHour.getUTCHours() - 1);

  // Calculate if we are on the system DST hour.
  const systemOffset = -new Date(+date).getTimezoneOffset();
  const prevHourSystemOffset = -new Date(+prevHour).getTimezoneOffset();
  const systemDSTChange = systemOffset - prevHourSystemOffset;
  // Detect the DST shift. System DST change will occur both on
  const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();

  // Move the internal date when we are on the system DST hour.
  if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);

  //#endregion

  //#region System diff adjustment

  // Now we need to adjust the date, since we just applied internal values.
  // We need to calculate the difference between the system and date time zones
  // and apply it to the date.

  const offsetDiff = systemOffset - offset;
  if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);

  //#endregion

  //#region Post-adjustment DST fix

  const postOffset = tzOffset(date.timeZone, date);
  const postSystemOffset = -new Date(+date).getTimezoneOffset();
  const postOffsetDiff = postSystemOffset - postOffset;
  const offsetChanged = postOffset !== offset;
  const postDiff = postOffsetDiff - offsetDiff;
  if (offsetChanged && postDiff) {
    Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);

    // Now we need to check if got offset change during the post-adjustment.
    // If so, we also need both dates to reflect that.

    const newOffset = tzOffset(date.timeZone, date);
    const offsetChange = postOffset - newOffset;
    if (offsetChange) {
      date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
      Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
    }
  }

  //#endregion
}

/**
 * UTC date class. It maps getters and setters to corresponding UTC methods,
 * forcing all calculations in the UTC time zone.
 *
 * Combined with date-fns, it allows using the class the same way as
 * the original date class.
 *
 * This complete version provides not only getters, setters,
 * and `getTimezoneOffset`, but also the formatter functions, mirroring
 * all original `Date` functionality. Use this version when you need to format
 * a string or in an environment you don't fully control (a library).
 * For a minimal version, see `UTCDateMini`.
 */
class TZDate extends TZDateMini {
  //#region static

  static tz(tz, ...args) {
    return args.length ? new TZDate(...args, tz) : new TZDate(Date.now(), tz);
  }

  //#endregion

  //#region representation

  toISOString() {
    const [sign, hours, minutes] = this.tzComponents();
    const tz = `${sign}${hours}:${minutes}`;
    return this.internal.toISOString().slice(0, -1) + tz;
  }
  toString() {
    // "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    // toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
    const [day, date, month, year] = this.internal.toUTCString().split(" ");
    // "Tue Aug 13 2024"
    return `${day?.slice(0, -1) /* Remove "," */} ${month} ${date} ${year}`;
  }
  toTimeString() {
    // toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
    const time = this.internal.toUTCString().split(" ")[4];
    const [sign, hours, minutes] = this.tzComponents();
    // "07:42:23 GMT+0800 (Singapore Standard Time)"
    return `${time} GMT${sign}${hours}${minutes} (${tzName(this.timeZone, this)})`;
  }
  toLocaleString(locales, options) {
    return Date.prototype.toLocaleString.call(this, locales, {
      ...options,
      timeZone: options?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(locales, options) {
    return Date.prototype.toLocaleDateString.call(this, locales, {
      ...options,
      timeZone: options?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(locales, options) {
    return Date.prototype.toLocaleTimeString.call(this, locales, {
      ...options,
      timeZone: options?.timeZone || this.timeZone
    });
  }

  //#endregion

  //#region private

  tzComponents() {
    const offset = this.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
    return [sign, hours, minutes];
  }

  //#endregion

  withTimeZone(timeZone) {
    return new TZDate(+this, timeZone);
  }

  //#region date-fns integration

  [Symbol.for("constructDateFrom")](date) {
    return new TZDate(+new Date(date), this.timeZone);
  }

  //#endregion
}
function tzName(tz, date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: tz,
    timeZoneName: "long"
  }).format(date).slice(12);
}

/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */
const tz = timeZone => value => TZDate.tz(timeZone, +new Date(value));

var locales = {
    en: locale.enUS,
    es: locale.es,
    fr: locale.fr,
    ko: locale.ko,
    pl: locale.pl,
    pt: locale.ptBR,
    ru: locale.ru,
    zh: locale.zhCN,
};
function useDateFormatters() {
    var locale = reactIntl.useIntl().locale;
    var format = React.useCallback(function (date, format) {
        return dateFns.format(date, format, {
            locale: locales[locale] || locales.en,
        });
    }, [locale]);
    return React.useMemo(function () { return ({
        formatDateLocal: function (date) { return format(date, 'PP'); },
        formatDayOfMonth: function (date) { return format(date, 'd'); },
        formatDayOfWeek: function (date) { return format(date, 'EEEEEE'); },
        formatISODate: function (date) { return format(date, 'yyyy-MM-dd'); },
        formatMonthLong: function (date) { return format(date, 'MMMM'); },
        formatMonthAndYearLong: function (date) { return format(date, 'MMMM yyyy'); },
        formatWeekOfYear: function (date) { return format(date, 'w'); },
        formatYearAndMonth: function (date) { return format(date, 'yyyy-MM'); },
    }); }, [format]);
}

var locales$1 = {
    en: locale.enUS,
    es: locale.es,
    fr: locale.fr,
};
function useDateParsers() {
    var locale = reactIntl.useIntl().locale;
    var parse = React.useCallback(function (date, format) {
        return dateFns.parse(date, format, new Date(), {
            locale: locales$1[locale] || locales$1.en,
        });
    }, [locale]);
    return React.useMemo(function () { return ({
        parseDateLocal: function (date) { return parse(date, 'PP'); },
        validateTimezone: function (tz) {
            try {
                Intl.DateTimeFormat(undefined, { timeZone: tz });
                return true;
            }
            catch (e) {
                return false;
            }
        },
    }); }, [parse]);
}

var locales$2 = {
    en: locale.enUS,
    es: locale.es,
    fr: locale.fr,
    ko: locale.ko,
    pl: locale.pl,
    pt: locale.ptBR,
    ru: locale.ru,
    zh: locale.zhCN,
};
function getCurrentLocale(locale) {
    return locales$2[locale] || locales$2.en;
}

function getStartOfWeek(locale) {
    var _a;
    var locales = {
        fr: {
            'fr-CA': 0,
        },
    };
    return (_a = locales === null || locales === void 0 ? void 0 : locales[locale]) === null || _a === void 0 ? void 0 : _a[window.navigator.language];
}

var Modes;
(function (Modes) {
    Modes[Modes["Day"] = 0] = "Day";
    Modes[Modes["Week"] = 1] = "Week";
    Modes[Modes["Range"] = 2] = "Range";
})(Modes || (Modes = {}));
function calendarize(_a) {
    var condensed = _a.condensed, date = _a.date, intl = _a.intl, timezone = _a.timezone;
    var locale = getCurrentLocale(intl.locale);
    var weekStartsOn = getStartOfWeek(intl.locale);
    var i = 0;
    var dates = [];
    var current = condensed
        ? dateFns.startOfWeek(date, { locale: locale, weekStartsOn: weekStartsOn, in: tz(timezone) })
        : dateFns.startOfWeek(dateFns.startOfMonth(date), {
            locale: locale,
            weekStartsOn: weekStartsOn,
            in: tz(timezone),
        });
    var final = condensed
        ? dateFns.addDays(dateFns.endOfWeek(date, { locale: locale, weekStartsOn: weekStartsOn }), 1)
        : dateFns.addDays(dateFns.endOfWeek(dateFns.endOfMonth(date), { locale: locale, weekStartsOn: weekStartsOn, in: tz(timezone) }), 1);
    var difference = dateFns.differenceInCalendarDays(final, current, { in: tz(timezone) }) / 7;
    for (i; i < difference; i++) {
        var o = 0;
        var week = [];
        for (o; o < 7; o++) {
            week = __spreadArray(__spreadArray([], week, true), [current], false);
            current = dateFns.addDays(current, 1);
        }
        dates = __spreadArray(__spreadArray([], dates, true), [week], false);
    }
    return dates;
}
function DatePicker(_a) {
    var clearRef = _a.clearRef, _b = _a.condensed, condensed = _b === void 0 ? false : _b, _c = _a.initialDate, initialDate = _c === void 0 ? new Date() : _c, initialTimezone = _a.initialTimezone, inputRef = _a.inputRef, inputValueRef = _a.inputValueRef, _d = _a.mode, mode = _d === void 0 ? Modes.Day : _d, onChange = _a.onChange, open = _a.open;
    var intl = reactIntl.useIntl();
    var _e = useDateFormatters(), formatDateLocal = _e.formatDateLocal, formatMonthAndYearLong = _e.formatMonthAndYearLong, formatISODate = _e.formatISODate, formatWeekOfYear = _e.formatWeekOfYear, formatDayOfMonth = _e.formatDayOfMonth, formatYearAndMonth = _e.formatYearAndMonth, formatDayOfWeek = _e.formatDayOfWeek;
    var _f = useDateParsers(), parseDateLocal = _f.parseDateLocal, validateTimezone = _f.validateTimezone;
    var timezone = (validateTimezone(initialTimezone) && initialTimezone) ||
        Intl.DateTimeFormat().resolvedOptions().timeZone;
    var initializeDate = function (initial) {
        var date = initial || new Date();
        return new TZDate(date.getFullYear(), date.getMonth(), date.getDate(), timezone);
    };
    var focusRef = React.useRef(true);
    var _g = React.useState(initializeDate(Array.isArray(initialDate) ? initialDate[0] : initialDate)), currentDate = _g[0], setCurrentDate = _g[1];
    var _h = React.useState(null), enteredDate = _h[0], setEnteredDate = _h[1];
    var _j = React.useState(function () { return ({
        end: mode === Modes.Range && Array.isArray(initialDate)
            ? initialDate[1]
            : null,
        start: mode === Modes.Range && Array.isArray(initialDate)
            ? initialDate[0]
            : null,
    }); }), rangedDates = _j[0], setRangedDates = _j[1];
    var _k = React.useState(initialDate
        ? initializeDate(Array.isArray(initialDate) ? initialDate[0] : initialDate)
        : null), selectedDate = _k[0], setSelectedDate = _k[1];
    var weeks = calendarize({
        condensed: condensed,
        date: currentDate,
        intl: intl,
        timezone: timezone,
    });
    var headers = weeks[0];
    var month = dateFns.setDate(currentDate, 15, { in: tz(timezone) });
    var modes = {
        day: mode === Modes.Day,
        week: mode === Modes.Week,
        range: mode === Modes.Range,
        dayOrRange: mode === Modes.Day || mode === Modes.Range,
    };
    var parseValue = React.useCallback(function (value) {
        if (mode === Modes.Range || mode === Modes.Week) {
            if (!value) {
                return [null, null];
            }
            var dates = value.split(' — ');
            var locale = getCurrentLocale(intl.locale);
            var weekStartsOn = getStartOfWeek(intl.locale);
            var start = mode === Modes.Week
                ? dateFns.startOfWeek(parseDateLocal(dates[0]), {
                    locale: locale,
                    weekStartsOn: weekStartsOn,
                })
                : parseDateLocal(dates[0]);
            var end = mode === Modes.Week ? dateFns.endOfWeek(start) : parseDateLocal(dates[1]);
            if (!dateFns.isValid(start) || !dateFns.isValid(end)) {
                return [];
            }
            return [start, end];
        }
        var date = value ? parseDateLocal(value) : null;
        if (date && !dateFns.isValid(date)) {
            return [];
        }
        return [date];
    }, [mode, parseDateLocal]);
    React.useEffect(function () {
        if (mode === Modes.Range) {
            var event_1 = {
                target: {
                    value: [rangedDates.start, rangedDates.end],
                },
            };
            onChange === null || onChange === void 0 ? void 0 : onChange(event_1);
        }
        else {
            var event_2 = {
                target: {
                    value: selectedDate,
                },
            };
            onChange === null || onChange === void 0 ? void 0 : onChange(event_2);
        }
    }, [mode, rangedDates.end, rangedDates.start, selectedDate, intl.locale]);
    // TODO: Having the onChange function in the dependency array was causing an maximum update depth error. We've removed it temporarily as we do not want to force developers to have to remember to memoize this callback all the time. We will come back to this and come up with a more foolproof plan later on.
    React.useLayoutEffect(function () {
        // When DatePicker is used with input and the input value changes, adjust selected date(s)
        if (open && (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current)) {
            if ((inputValueRef === null || inputValueRef === void 0 ? void 0 : inputValueRef.current) === inputRef.current.value) {
                return;
            }
            var dates = parseValue(inputRef.current.value);
            if (dates.length) {
                if (mode === Modes.Range) {
                    if (dateFns.isAfter(dates[0], dates[1])) {
                        dates = [dates[1], dates[0]];
                    }
                    setRangedDates({ start: dates[0], end: dates[1] });
                }
                else {
                    setSelectedDate(dates[0]);
                }
                // When the range provided didn't align to a week and needed to be adjusted,
                // updating the input value to the correct string avoids onChange handler being
                // triggered unnecessarily thus causing the picker to close right after being opened
                if ((mode === Modes.Week || mode === Modes.Range) &&
                    dates[0] &&
                    dates[1]) {
                    inputRef.current.value =
                        formatDateLocal(dates[0]) + ' — ' + formatDateLocal(dates[1]);
                }
                // Open the calendar on the selected date
                focusRef.current = true;
                setCurrentDate(dates[0] || new TZDate(new Date(), timezone));
            }
        }
    }, [mode, open, intl.locale, inputRef, parseValue, inputValueRef]);
    React.useLayoutEffect(function () {
        if (focusRef.current) {
            focusRef.current = false;
            return;
        }
        var selector = "time[datetime=\"".concat(formatISODate(currentDate), "\"]");
        var time = document.querySelector(selector);
        var selectable = time.parentElement;
        if (modes.week) {
            selectable = selectable.parentElement;
        }
        selectable.focus();
    }, [currentDate, formatISODate, modes.week]);
    var next = function () {
        focusRef.current = true;
        setCurrentDate(function (date) {
            return condensed ? dateFns.addDays(date, 7) : dateFns.addMonths(date, 1);
        });
    };
    var previous = function () {
        focusRef.current = true;
        setCurrentDate(function (date) {
            return condensed ? dateFns.subDays(date, 7) : dateFns.subMonths(date, 1);
        });
    };
    var clearDate = function () {
        if (modes.range) {
            setRangedDates({ end: null, start: null });
        }
        else {
            setSelectedDate(null);
        }
    };
    var select = function (e) {
        var _a;
        if (['keypress', 'keydown', 'keyup'].includes(e.nativeEvent.type)) {
            var key_1 = e.key;
            if (key_1 !== 'Enter' && key_1 !== ' ') {
                setCurrentDate(function (date) {
                    switch (key_1) {
                        case 'ArrowDown':
                            return dateFns.startOfWeek(dateFns.addDays(date, 7));
                        case 'ArrowUp':
                            return dateFns.startOfWeek(dateFns.subDays(date, 7));
                        default:
                            return date;
                    }
                });
                return;
            }
        }
        var time = e.currentTarget.querySelector('time');
        var dateTime = ((_a = time.dataset) === null || _a === void 0 ? void 0 : _a.datetime) || formatYearAndMonth(new Date());
        var _b = dateTime.split('-').map(Number), year = _b[0], month = _b[1], day = _b[2];
        var date = new TZDate(year, month - 1, day, timezone);
        if (modes.range) {
            if ((rangedDates.end === null && rangedDates.start === null) ||
                (rangedDates.end !== null && rangedDates.start !== null)) {
                setCurrentDate(date);
                setRangedDates({ start: date, end: null });
            }
            if (rangedDates.end === null && rangedDates.start !== null) {
                setRangedDates(function (dates) {
                    var after = dateFns.isAfter(dates.start, date);
                    return {
                        end: after ? dates.start : date,
                        start: after ? date : dates.start,
                    };
                });
            }
        }
        else {
            setSelectedDate(date);
            setCurrentDate(date);
        }
    };
    var keydown = function (event) {
        var key = event.key;
        setCurrentDate(function (date) {
            switch (key) {
                case 'ArrowLeft':
                    return dateFns.subDays(date, 1);
                case 'ArrowRight':
                    return dateFns.addDays(date, 1);
                case 'ArrowDown':
                    return dateFns.addDays(date, 7);
                case 'ArrowUp':
                    return dateFns.subDays(date, 7);
                default:
                    return date;
            }
        });
    };
    var blur = function () {
        if (modes.range) {
            setEnteredDate(null);
        }
    };
    var enter = function (e) {
        var _a;
        var time = e.currentTarget.querySelector('time');
        var dateTime = ((_a = time.dataset) === null || _a === void 0 ? void 0 : _a.datetime) || formatYearAndMonth(new Date());
        var _b = dateTime.split('-').map(Number), year = _b[0], month = _b[1], day = _b[2];
        setEnteredDate(new TZDate(year, month - 1, day, timezone));
    };
    var leave = function () {
        setEnteredDate(null);
    };
    var inRange = function (day) {
        var startDate = rangedDates.start;
        var endDate = rangedDates.end || enteredDate;
        if (startDate instanceof Date && endDate instanceof Date) {
            var after = dateFns.isAfter(startDate, endDate);
            var interval = after
                ? { start: endDate, end: startDate }
                : { start: startDate, end: endDate };
            return {
                end: dateFns.isSameDay(day, after ? startDate : endDate, { in: tz(timezone) }),
                inside: dateFns.isWithinInterval(day, interval, { in: tz(timezone) }) ||
                    dateFns.isSameDay(day, startDate, { in: tz(timezone) }),
                start: dateFns.isSameDay(day, after ? endDate : startDate, {
                    in: tz(timezone),
                }),
            };
        }
        return { end: false, inside: false, start: false };
    };
    var isSameRangedDay = function (day) {
        return (rangedDates.end instanceof Date &&
            dateFns.isSameDay(day, rangedDates.end, { in: tz(timezone) })) ||
            (rangedDates.start instanceof Date &&
                dateFns.isSameDay(day, rangedDates.start, { in: tz(timezone) }));
    };
    return (React__default['default'].createElement("div", { className: "max-w-xs p-6 font-sans rounded bg-white-100 shadow-1", onBlur: blur },
        React__default['default'].createElement("div", { className: "flex items-center justify-between" },
            React__default['default'].createElement("time", { className: "text-sm font-medium leading-4", "data-datetime": formatYearAndMonth(month), dateTime: formatYearAndMonth(month) }, formatMonthAndYearLong(month)),
            React__default['default'].createElement("div", { className: "flex items-center justify-between w-16" },
                clearRef ? (React__default['default'].createElement("button", { className: "hidden", onClick: clearDate, ref: clearRef })) : null,
                React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'DatePicker.previous' }), onClick: previous },
                    React__default['default'].createElement(ChevronLeft, null)),
                React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'DatePicker.next' }), onClick: next },
                    React__default['default'].createElement(ChevronRight, null)))),
        React__default['default'].createElement("div", { className: "flex mt-4 text-center" }, headers.map(function (header) { return (React__default['default'].createElement("div", { className: "text-xs leading-4 w-1/7 text-black-90", key: formatDayOfWeek(header) }, formatDayOfWeek(header))); })),
        weeks.map(function (days) {
            var currentWeek = dateFns.isSameWeek(days[0], currentDate);
            var sameWeek = selectedDate
                ? dateFns.isSameWeek(days[0], selectedDate)
                : false;
            return (React__default['default'].createElement("div", { className: clsx__default['default']('flex mt-2 text-center', modes.week
                    ? 'group rounded-full active:bg-primary-20 focus:bg-primary-10 focus:outline-none hover:bg-primary-10'
                    : 'focus:outline-none', sameWeek && modes.week
                    ? 'bg-primary-main text-white-100 active:text-black-90 hover:text-black-90 focus:text-black-90'
                    : null), key: formatWeekOfYear(days[0]), onKeyDown: modes.week ? select : undefined, role: "button", tabIndex: modes.dayOrRange ? -1 : currentWeek ? 0 : -1 }, days.map(function (day) {
                var currentDay = dateFns.isSameDay(day, currentDate, {
                    in: tz(timezone),
                });
                var sameMonth = dateFns.isSameMonth(day, month, { in: tz(timezone) });
                var sameDay = modes.day
                    ? selectedDate
                        ? dateFns.isSameDay(day, selectedDate, { in: tz(timezone) })
                        : false
                    : isSameRangedDay(day);
                var today = dateFns.isToday(day, { in: tz(timezone) });
                var weekend = dateFns.isWeekend(day, { in: tz(timezone) });
                var _a = inRange(day), end = _a.end, inside = _a.inside, start = _a.start;
                return (React__default['default'].createElement("button", { className: clsx__default['default']('flex justify-center w-1/7 focus:outline-none', modes.dayOrRange ? 'group' : null, sameDay && modes.dayOrRange
                        ? 'text-white-100 hover:text-black-90 focus:text-black-90'
                        : null, sameMonth && !sameDay && !weekend && modes.dayOrRange
                        ? 'text-black-90'
                        : null, !sameMonth && !sameDay && !condensed && modes.dayOrRange
                        ? 'text-black-45'
                        : null, weekend && !sameDay && modes.dayOrRange
                        ? 'text-black-45'
                        : null, weekend && !sameWeek && modes.week ? 'text-black-45' : null, inside && modes.range
                        ? 'bg-primary-10 first:rounded-l-full last:rounded-r-full'
                        : null, inside && end && modes.range ? 'rounded-r-full' : null, inside && start && modes.range ? 'rounded-l-full' : null), key: formatISODate(day), onClick: select, onFocus: modes.range ? enter : undefined, onKeyDown: modes.dayOrRange ? keydown : undefined, onMouseEnter: modes.range ? enter : undefined, onMouseLeave: modes.range ? leave : undefined, tabIndex: modes.week ? -1 : currentDay ? 0 : -1, type: "button" },
                    React__default['default'].createElement("time", { className: clsx__default['default']('flex items-center justify-center w-8 h-8 text-sm leading-4 rounded-full', modes.dayOrRange
                            ? 'group-active:bg-primary-20 group-focus:bg-primary-10 group-hover:bg-primary-10'
                            : null, sameDay && modes.dayOrRange ? 'bg-primary-main' : null, today && modes.dayOrRange ? 'bg-black-5' : null, today && !sameWeek && modes.week
                            ? 'bg-black-5 group-active:bg-primary-20'
                            : null, today && sameWeek && modes.week
                            ? 'bg-primary-dark group-active:bg-primary-20 group-focus:bg-primary-15 group-hover:bg-primary-15'
                            : null), "data-datetime": formatISODate(day), dateTime: formatISODate(day) }, formatDayOfMonth(day))));
            })));
        })));
}

function DatePickerInput(_a) {
    var clearRef = _a.clearRef, _b = _a.condensed, condensed = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.error, error = _d === void 0 ? false : _d, helperText = _a.helperText, _e = _a.initialDate, initialDate = _e === void 0 ? new Date() : _e, _f = _a.inputRef, inputRef = _f === void 0 ? null : _f, label = _a.label, _g = _a.mode, mode = _g === void 0 ? Modes.Day : _g, name = _a.name, onChange = _a.onChange, _h = _a.size, size = _h === void 0 ? 'medium' : _h, _j = _a.variant, variant = _j === void 0 ? 'outlined' : _j, initialTimezone = _a.initialTimezone;
    var intl = reactIntl.useIntl();
    var containerRef = React.useRef(null);
    var instanceRef = React.useRef(null);
    var popperRef = React.useRef(null);
    var localRef = React.useRef(null);
    var inputValueRef = React.useRef('');
    var syncRef = useSyncRefs(localRef, inputRef);
    var _k = React.useState(false), open = _k[0], setOpen = _k[1];
    var formatDateLocal = useDateFormatters().formatDateLocal;
    React.useEffect(function () {
        function clickAway(event) {
            var _a, _b;
            var target = event.target;
            if (!open) {
                return;
            }
            if ((_a = popperRef.current) === null || _a === void 0 ? void 0 : _a.contains(target)) {
                return;
            }
            if ((_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.contains(target)) {
                return;
            }
            setOpen(false);
        }
        window.addEventListener('mousedown', clickAway);
        return function () { return window.removeEventListener('mousedown', clickAway); };
    }, [open]);
    React.useLayoutEffect(function () {
        var _a, _b, _c;
        if (open) {
            instanceRef.current = createPopper(containerRef.current, popperRef.current, {
                modifiers: [
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: ['top', 'bottom'],
                        },
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ],
                placement: 'bottom-start',
            });
            (_b = (_a = popperRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('button')) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else {
            (_c = instanceRef.current) === null || _c === void 0 ? void 0 : _c.destroy();
            instanceRef.current = null;
        }
    }, [open]);
    var formatValue = React.useCallback(function (dates) {
        if (!dates[0]) {
            return '';
        }
        if (mode === Modes.Range) {
            if (!dates[0] || !dates[1]) {
                return '';
            }
            return formatDateLocal(dates[0]) + ' — ' + formatDateLocal(dates[1]);
        }
        if (mode === Modes.Week) {
            var locale = getCurrentLocale(intl.locale);
            var weekStartsOn = getStartOfWeek(intl.locale);
            var start = dateFns.startOfWeek(dates[0], { locale: locale, weekStartsOn: weekStartsOn });
            var end = dateFns.endOfWeek(dates[0], { locale: locale, weekStartsOn: weekStartsOn });
            return formatDateLocal(start) + ' — ' + formatDateLocal(end);
        }
        return formatDateLocal(dates[0]);
    }, [formatDateLocal, intl.locale, mode]);
    var handleChange = function (event) {
        var _a;
        if (localRef.current) {
            var value = void 0;
            if (mode === Modes.Range) {
                var _b = event.target.value, start = _b[0], end = _b[1];
                value = formatValue([start, end]);
            }
            else {
                value = formatValue([event.target.value]);
            }
            // Do not close the picker when selecting the first date in the range
            if (localRef.current.value !== value &&
                !(mode === Modes.Range && !value)) {
                setOpen(false);
            }
            inputValueRef.current = value;
            var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
            var inputEvent = new Event('input', { bubbles: true });
            (_a = descriptor.set) === null || _a === void 0 ? void 0 : _a.call(localRef.current, value);
            localRef.current.dispatchEvent(inputEvent);
        }
        if (mode === Modes.Week) {
            var date = event.target.value;
            var locale = getCurrentLocale(intl.locale);
            var weekStartsOn = getStartOfWeek(intl.locale);
            var start = dateFns.startOfWeek(date, { locale: locale, weekStartsOn: weekStartsOn });
            var end = dateFns.endOfWeek(start, { locale: locale, weekStartsOn: weekStartsOn });
            event.target.value = [start, end];
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    var handleFocus = function () {
        var _a;
        setOpen(true);
        // fix the label going up and down when input is empty
        (_a = localRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    };
    var handleKeyDown = function (event) {
        if (event.key === Keys.Escape) {
            setOpen(false);
        }
    };
    var defaultValue = React.useMemo(function () {
        if (mode === Modes.Range) {
            return formatValue(Array.isArray(initialDate) ? initialDate : [null]);
        }
        return formatValue(Array.isArray(initialDate) ? [initialDate[0]] : [initialDate]);
    }, [formatValue, initialDate, mode]);
    return (React__default['default'].createElement("div", { 
        /*
         * We can safely ignore the `no-static-element-interactions` warning here
         * because our overlay is only designed to capture any outside
         * clicks, not serve as a clickable element itself.
         *
         * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md#case-the-event-handler-is-only-being-used-to-capture-bubbled-events
         */
        onKeyDown: handleKeyDown, role: "presentation" },
        React__default['default'].createElement("div", { ref: containerRef },
            React__default['default'].createElement(TextInput, { appearFocused: open, defaultValue: defaultValue, disabled: disabled, endAdornment: ExpandMore, error: error, helperText: helperText, inputRef: syncRef, label: label, name: name, onFocus: handleFocus, readOnly: true, selectable: true, size: size, startAdornment: mode === Modes.Day ? EventIcon : DateRange, variant: variant })),
        React__default['default'].createElement(Portal, { discoverable: true, open: open },
            React__default['default'].createElement("div", { className: clsx__default['default']('z-9998', open ? '' : 'hidden'), ref: popperRef },
                React__default['default'].createElement(DatePicker, { clearRef: clearRef, condensed: condensed, initialDate: initialDate, initialTimezone: initialTimezone, inputRef: localRef, inputValueRef: inputValueRef, mode: mode, onChange: handleChange, open: open })))));
}
function DayPickerInput(_a) {
    var _b = _a.clearRef, clearRef = _b === void 0 ? null : _b, _c = _a.condensed, condensed = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, helperText = _a.helperText, _f = _a.initialDate, initialDate = _f === void 0 ? new Date() : _f, initialTimezone = _a.initialTimezone, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, _g = _a.size, size = _g === void 0 ? 'medium' : _g, _h = _a.variant, variant = _h === void 0 ? 'outlined' : _h;
    return (React__default['default'].createElement(DatePickerInput, { clearRef: clearRef, condensed: condensed, disabled: disabled, error: error, helperText: helperText, initialDate: initialDate, initialTimezone: initialTimezone, inputRef: inputRef, label: label, mode: Modes.Day, name: name, onChange: onChange, size: size, variant: variant }));
}
function RangePickerInput(_a) {
    var _b = _a.clearRef, clearRef = _b === void 0 ? null : _b, _c = _a.condensed, condensed = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, helperText = _a.helperText, _f = _a.initialDate, initialDate = _f === void 0 ? new Date() : _f, initialTimezone = _a.initialTimezone, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, _g = _a.size, size = _g === void 0 ? 'medium' : _g, _h = _a.variant, variant = _h === void 0 ? 'outlined' : _h;
    return (React__default['default'].createElement(DatePickerInput, { clearRef: clearRef, condensed: condensed, disabled: disabled, error: error, helperText: helperText, initialDate: initialDate, initialTimezone: initialTimezone, inputRef: inputRef, label: label, mode: Modes.Range, name: name, onChange: onChange, size: size, variant: variant }));
}
function WeekPickerInput(_a) {
    var _b = _a.clearRef, clearRef = _b === void 0 ? null : _b, _c = _a.condensed, condensed = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, helperText = _a.helperText, _f = _a.initialDate, initialDate = _f === void 0 ? new Date() : _f, initialTimezone = _a.initialTimezone, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, _g = _a.size, size = _g === void 0 ? 'medium' : _g, _h = _a.variant, variant = _h === void 0 ? 'outlined' : _h;
    return (React__default['default'].createElement(DatePickerInput, { clearRef: clearRef, condensed: condensed, disabled: disabled, error: error, helperText: helperText, initialDate: initialDate, initialTimezone: initialTimezone, inputRef: inputRef, label: label, mode: Modes.Week, name: name, onChange: onChange, size: size, variant: variant }));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal$1=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal$1,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement$1,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

/**
 * defines a focus group
 */
var FOCUS_GROUP = 'data-focus-lock';
/**
 * disables element discovery inside a group marked by key
 */
var FOCUS_DISABLED = 'data-focus-lock-disabled';
/**
 * allows uncontrolled focus within the marked area, effectively disabling focus lock for it's content
 */
var FOCUS_ALLOW = 'data-no-focus-lock';
/**
 * instructs autofocus engine to pick default autofocus inside a given node
 * can be set on the element or container
 */
var FOCUS_AUTO = 'data-autofocus-inside';
/**
 * instructs autofocus to ignore elements within a given node
 * can be set on the element or container
 */
var FOCUS_NO_AUTOFOCUS = 'data-no-autofocus';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = React.useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef(defaultValue || null, function (newValue) {
        return refs.forEach(function (ref) { return assignRef(ref, newValue); });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function () {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function (ref) {
                if (!nextRefs_1.has(ref)) {
                    assignRef(ref, null);
                }
            });
            nextRefs_1.forEach(function (ref) {
                if (!prevRefs_1.has(ref)) {
                    assignRef(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
}

var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};
process.env.NODE_ENV !== "production" ? {
  children: propTypes.node
} : {};

/*! *****************************************************************************
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

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign$1({ async: true, ssr: false }, options);
    return medium;
}

var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = __rest$1(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return React.createElement(Target, __assign$1({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}

var mediumFocus = createMedium({}, function (_ref) {
  var target = _ref.target,
    currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true,
  ssr: typeof document !== 'undefined'
});

var focusScope = /*#__PURE__*/React.createContext(undefined);

var emptyArray = [];
var FocusLock = /*#__PURE__*/React.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;
  var _React$useState = React.useState(),
    realObserved = _React$useState[0],
    setObserved = _React$useState[1];
  var observed = React.useRef();
  var isActive = React.useRef(false);
  var originalFocusedElement = React.useRef(null);
  var _React$useState2 = React.useState({}),
    update = _React$useState2[1];
  var children = props.children,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$noFocusGuards = props.noFocusGuards,
    noFocusGuards = _props$noFocusGuards === void 0 ? false : _props$noFocusGuards,
    _props$persistentFocu = props.persistentFocus,
    persistentFocus = _props$persistentFocu === void 0 ? false : _props$persistentFocu,
    _props$crossFrame = props.crossFrame,
    crossFrame = _props$crossFrame === void 0 ? true : _props$crossFrame,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
    allowTextSelection = props.allowTextSelection,
    group = props.group,
    className = props.className,
    whiteList = props.whiteList,
    hasPositiveIndices = props.hasPositiveIndices,
    _props$shards = props.shards,
    shards = _props$shards === void 0 ? emptyArray : _props$shards,
    _props$as = props.as,
    Container = _props$as === void 0 ? 'div' : _props$as,
    _props$lockProps = props.lockProps,
    containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
    SideCar = props.sideCar,
    _props$returnFocus = props.returnFocus,
    shouldReturnFocus = _props$returnFocus === void 0 ? false : _props$returnFocus,
    focusOptions = props.focusOptions,
    onActivationCallback = props.onActivation,
    onDeactivationCallback = props.onDeactivation;
  var _React$useState3 = React.useState({}),
    id = _React$useState3[0];
  var onActivation = React.useCallback(function (_ref) {
    var captureFocusRestore = _ref.captureFocusRestore;
    if (!originalFocusedElement.current) {
      var _document;
      var activeElement = (_document = document) == null ? void 0 : _document.activeElement;
      originalFocusedElement.current = activeElement;
      if (activeElement !== document.body) {
        originalFocusedElement.current = captureFocusRestore(activeElement);
      }
    }
    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }
    isActive.current = true;
    update();
  }, [onActivationCallback]);
  var onDeactivation = React.useCallback(function () {
    isActive.current = false;
    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
    update();
  }, [onDeactivationCallback]);
  var returnFocus = React.useCallback(function (allowDefer) {
    var focusRestore = originalFocusedElement.current;
    if (focusRestore) {
      var returnFocusTo = (typeof focusRestore === 'function' ? focusRestore() : focusRestore) || document.body;
      var howToReturnFocus = typeof shouldReturnFocus === 'function' ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === 'object' ? howToReturnFocus : undefined;
        originalFocusedElement.current = null;
        if (allowDefer) {
          Promise.resolve().then(function () {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]);
  var onFocus = React.useCallback(function (event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = mediumBlur.useMedium;
  var setObserveNode = React.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);
  if (process.env.NODE_ENV !== 'production') {
    if (typeof allowTextSelection !== 'undefined') {
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }
    React.useEffect(function () {
      if (!observed.current && typeof Container !== 'string') {
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }
  var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && 'disabled', _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  var focusScopeValue = React.useMemo(function () {
    return {
      observed: observed,
      shards: shards,
      enabled: !disabled,
      active: isActive.current
    };
  }, [disabled, isActive.current, shards, realObserved]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasLeadingGuards && [
  /*#__PURE__*/
  React.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }), hasPositiveIndices ? /*#__PURE__*/React.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: hiddenGuard
  }) : null], !disabled && /*#__PURE__*/React.createElement(SideCar, {
    id: id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus,
    focusOptions: focusOptions,
    noFocusGuards: noFocusGuards
  }), /*#__PURE__*/React.createElement(Container, _extends({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), /*#__PURE__*/React.createElement(focusScope.Provider, {
    value: focusScopeValue
  }, children)), hasTailingGuards && /*#__PURE__*/React.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes.node,
  disabled: propTypes.bool,
  returnFocus: propTypes.oneOfType([propTypes.bool, propTypes.object, propTypes.func]),
  focusOptions: propTypes.object,
  noFocusGuards: propTypes.bool,
  hasPositiveIndices: propTypes.bool,
  allowTextSelection: propTypes.bool,
  autoFocus: propTypes.bool,
  persistentFocus: propTypes.bool,
  crossFrame: propTypes.bool,
  group: propTypes.string,
  className: propTypes.string,
  whiteList: propTypes.func,
  shards: propTypes.arrayOf(propTypes.any),
  as: propTypes.oneOfType([propTypes.string, propTypes.func, propTypes.object]),
  lockProps: propTypes.object,
  onActivation: propTypes.func,
  onDeactivation: propTypes.func,
  sideCar: propTypes.any.isRequired
} : {};

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (process.env.NODE_ENV !== "production") {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default['default'].createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/*
IE11 support
 */
var toArray = function (a) {
    var ret = Array(a.length);
    for (var i = 0; i < a.length; ++i) {
        ret[i] = a[i];
    }
    return ret;
};
var asArray = function (a) { return (Array.isArray(a) ? a : [a]); };
var getFirst = function (a) { return (Array.isArray(a) ? a[0] : a); };

var isElementHidden = function (node) {
    // we can measure only "elements"
    // consider others as "visible"
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }
    var computedStyle = window.getComputedStyle(node, null);
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
var getParentNode$1 = function (node) {
    // DOCUMENT_FRAGMENT_NODE can also point on ShadowRoot. In this case .host will point on the next node
    return node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            node.parentNode.host
        : node.parentNode;
};
var isTopNode = function (node) {
    // @ts-ignore
    return node === document || (node && node.nodeType === Node.DOCUMENT_NODE);
};
var isInert = function (node) { return node.hasAttribute('inert'); };
/**
 * @see https://github.com/testing-library/jest-dom/blob/main/src/to-be-visible.js
 */
var isVisibleUncached = function (node, checkParent) {
    return !node || isTopNode(node) || (!isElementHidden(node) && !isInert(node) && checkParent(getParentNode$1(node)));
};
var isVisibleCached = function (visibilityCache, node) {
    var cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
var isAutoFocusAllowedUncached = function (node, checkParent) {
    return node && !isTopNode(node) ? (isAutoFocusAllowed(node) ? checkParent(getParentNode$1(node)) : false) : true;
};
var isAutoFocusAllowedCached = function (cache, node) {
    var cached = cache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isAutoFocusAllowedUncached(node, isAutoFocusAllowedCached.bind(undefined, cache));
    cache.set(node, result);
    return result;
};
var getDataset = function (node) {
    // @ts-ignore
    return node.dataset;
};
var isHTMLButtonElement = function (node) { return node.tagName === 'BUTTON'; };
var isHTMLInputElement = function (node) { return node.tagName === 'INPUT'; };
var isRadioElement = function (node) {
    return isHTMLInputElement(node) && node.type === 'radio';
};
var notHiddenInput = function (node) {
    return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === 'hidden' || node.disabled));
};
var isAutoFocusAllowed = function (node) {
    var attribute = node.getAttribute(FOCUS_NO_AUTOFOCUS);
    return ![true, 'true', ''].includes(attribute);
};
var isGuard = function (node) { var _a; return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard)); };
var isNotAGuard = function (node) { return !isGuard(node); };
var isDefined = function (x) { return Boolean(x); };

var tabSort = function (a, b) {
    var aTab = Math.max(0, a.tabIndex);
    var bTab = Math.max(0, b.tabIndex);
    var tabDiff = aTab - bTab;
    var indexDiff = a.index - b.index;
    if (tabDiff) {
        if (!aTab) {
            return 1;
        }
        if (!bTab) {
            return -1;
        }
    }
    return tabDiff || indexDiff;
};
var getTabIndex = function (node) {
    if (node.tabIndex < 0) {
        // all "focusable" elements are already preselected
        // but some might have implicit negative tabIndex
        // return 0 for <audio without tabIndex attribute - it is "tabbable"
        if (!node.hasAttribute('tabindex')) {
            return 0;
        }
    }
    return node.tabIndex;
};
var orderByTabIndex = function (nodes, filterNegative, keepGuards) {
    return toArray(nodes)
        .map(function (node, index) {
        var tabIndex = getTabIndex(node);
        return {
            node: node,
            index: index,
            tabIndex: keepGuards && tabIndex === -1 ? ((node.dataset || {}).focusGuard ? 0 : -1) : tabIndex,
        };
    })
        .filter(function (data) { return !filterNegative || data.tabIndex >= 0; })
        .sort(tabSort);
};

/**
 * list of the object to be considered as focusable
 */
var tabbables = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    // elements with explicit roles will also use explicit tabindex
    // '[role="button"]',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
];

var queryTabbables = tabbables.join(',');
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function (parent, withGuards) {
    return toArray((parent.shadowRoot || parent).children).reduce(function (acc, child) {
        return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
    }, []);
};
var getFocusablesWithIFrame = function (parent, withGuards) {
    var _a;
    // contentDocument of iframe will be null if current origin cannot access it
    if (parent instanceof HTMLIFrameElement && ((_a = parent.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
        return getFocusables([parent.contentDocument.body], withGuards);
    }
    return [parent];
};
var getFocusables = function (parents, withGuards) {
    return parents.reduce(function (acc, parent) {
        var _a;
        var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
        var focusableWithIframes = (_a = []).concat.apply(_a, focusableWithShadowDom.map(function (node) { return getFocusablesWithIFrame(node, withGuards); }));
        return acc.concat(
        // add all tabbables inside and within shadow DOMs in DOM order
        focusableWithIframes, 
        // add if node is tabbable itself
        parent.parentNode
            ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function (node) { return node === parent; })
            : []);
    }, []);
};
/**
 * return a list of focusable nodes within an area marked as "auto-focusable"
 * @param parent
 */
var getParentAutofocusables = function (parent) {
    var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
    return toArray(parentFocus)
        .map(function (node) { return getFocusables([node]); })
        .reduce(function (acc, nodes) { return acc.concat(nodes); }, []);
};

/**
 * given list of focusable elements keeps the ones user can interact with
 * @param nodes
 * @param visibilityCache
 */
var filterFocusable = function (nodes, visibilityCache) {
    return toArray(nodes)
        .filter(function (node) { return isVisibleCached(visibilityCache, node); })
        .filter(function (node) { return notHiddenInput(node); });
};
var filterAutoFocusable = function (nodes, cache) {
    if (cache === void 0) { cache = new Map(); }
    return toArray(nodes).filter(function (node) { return isAutoFocusAllowedCached(cache, node); });
};
/**
 * !__WARNING__! Low level API.
 * @returns all tabbable nodes
 *
 * @see {@link getFocusableNodes} to get any focusable element
 *
 * @param topNodes - array of top level HTMLElements to search inside
 * @param visibilityCache - an cache to store intermediate measurements. Expected to be a fresh `new Map` on every call
 */
var getTabbableNodes = function (topNodes, visibilityCache, withGuards) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
/**
 * !__WARNING__! Low level API.
 *
 * @returns anything "focusable", not only tabbable. The difference is in `tabIndex=-1`
 * (without guards, as long as they are not expected to be ever focused)
 *
 * @see {@link getTabbableNodes} to get only tabble nodes element
 *
 * @param topNodes - array of top level HTMLElements to search inside
 * @param visibilityCache - an cache to store intermediate measurements. Expected to be a fresh `new Map` on every call
 */
var getFocusableNodes = function (topNodes, visibilityCache) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
/**
 * return list of nodes which are expected to be auto-focused
 * @param topNode
 * @param visibilityCache
 */
var parentAutofocusables = function (topNode, visibilityCache) {
    return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
/*
 * Determines if element is contained in scope, including nested shadow DOMs
 */
var contains$1 = function (scope, element) {
    if (scope.shadowRoot) {
        return contains$1(scope.shadowRoot, element);
    }
    else {
        if (Object.getPrototypeOf(scope).contains !== undefined &&
            Object.getPrototypeOf(scope).contains.call(scope, element)) {
            return true;
        }
        return toArray(scope.children).some(function (child) {
            var _a;
            if (child instanceof HTMLIFrameElement) {
                var iframeBody = (_a = child.contentDocument) === null || _a === void 0 ? void 0 : _a.body;
                if (iframeBody) {
                    return contains$1(iframeBody, element);
                }
                return false;
            }
            return contains$1(child, element);
        });
    }
};

/**
 * in case of multiple nodes nested inside each other
 * keeps only top ones
 * this is O(nlogn)
 * @param nodes
 * @returns {*}
 */
var filterNested = function (nodes) {
    var contained = new Set();
    var l = nodes.length;
    for (var i = 0; i < l; i += 1) {
        for (var j = i + 1; j < l; j += 1) {
            var position = nodes[i].compareDocumentPosition(nodes[j]);
            /* eslint-disable no-bitwise */
            if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
                contained.add(j);
            }
            if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
                contained.add(i);
            }
            /* eslint-enable */
        }
    }
    return nodes.filter(function (_, index) { return !contained.has(index); });
};
/**
 * finds top most parent for a node
 * @param node
 * @returns {*}
 */
var getTopParent = function (node) {
    return node.parentNode ? getTopParent(node.parentNode) : node;
};
/**
 * returns all "focus containers" inside a given node
 * @param node - node or nodes to look inside
 * @returns Element[]
 */
var getAllAffectedNodes = function (node) {
    var nodes = asArray(node);
    return nodes.filter(Boolean).reduce(function (acc, currentNode) {
        var group = currentNode.getAttribute(FOCUS_GROUP);
        acc.push.apply(acc, (group
            ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, "=\"").concat(group, "\"]:not([").concat(FOCUS_DISABLED, "=\"disabled\"])"))))
            : [currentNode]));
        return acc;
    }, []);
};

var safeProbe = function (cb) {
    try {
        return cb();
    }
    catch (e) {
        return undefined;
    }
};

/**
 * returns active element from document or from nested shadowdoms
 */
/**
 * returns current active element. If the active element is a "container" itself(shadowRoot or iframe) returns active element inside it
 * @param [inDocument]
 */
var getActiveElement = function (inDocument) {
    if (inDocument === void 0) { inDocument = document; }
    if (!inDocument || !inDocument.activeElement) {
        return undefined;
    }
    var activeElement = inDocument.activeElement;
    return (activeElement.shadowRoot
        ? getActiveElement(activeElement.shadowRoot)
        : activeElement instanceof HTMLIFrameElement && safeProbe(function () { return activeElement.contentWindow.document; })
            ? getActiveElement(activeElement.contentWindow.document)
            : activeElement);
};

var focusInFrame = function (frame, activeElement) { return frame === activeElement; };
var focusInsideIframe = function (topNode, activeElement) {
    return Boolean(toArray(topNode.querySelectorAll('iframe')).some(function (node) { return focusInFrame(node, activeElement); }));
};
/**
 * @returns {Boolean} true, if the current focus is inside given node or nodes.
 * Supports nodes hidden inside shadowDom
 */
var focusInside = function (topNode, activeElement) {
    // const activeElement = document && getActiveElement();
    if (activeElement === void 0) { activeElement = getActiveElement(getFirst(topNode).ownerDocument); }
    if (!activeElement || (activeElement.dataset && activeElement.dataset.focusGuard)) {
        return false;
    }
    return getAllAffectedNodes(topNode).some(function (node) {
        return contains$1(node, activeElement) || focusInsideIframe(node, activeElement);
    });
};

/**
 * checks if focus is hidden FROM the focus-lock
 * ie contained inside a node focus-lock shall ignore
 *
 * This is a utility function coupled with {@link FOCUS_ALLOW} constant
 *
 * @returns {boolean} focus is currently is in "allow" area
 */
var focusIsHidden = function (inDocument) {
    if (inDocument === void 0) { inDocument = document; }
    var activeElement = getActiveElement(inDocument);
    if (!activeElement) {
        return false;
    }
    // this does not support setting FOCUS_ALLOW within shadow dom
    return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function (node) { return contains$1(node, activeElement); });
};

var findSelectedRadio = function (node, nodes) {
    return nodes
        .filter(isRadioElement)
        .filter(function (el) { return el.name === node.name; })
        .filter(function (el) { return el.checked; })[0] || node;
};
var correctNode = function (node, nodes) {
    if (isRadioElement(node) && node.name) {
        return findSelectedRadio(node, nodes);
    }
    return node;
};
/**
 * giving a set of radio inputs keeps only selected (tabbable) ones
 * @param nodes
 */
var correctNodes = function (nodes) {
    // IE11 has no Set(array) constructor
    var resultSet = new Set();
    nodes.forEach(function (node) { return resultSet.add(correctNode(node, nodes)); });
    // using filter to support IE11
    return nodes.filter(function (node) { return resultSet.has(node); });
};

var pickFirstFocus = function (nodes) {
    if (nodes[0] && nodes.length > 1) {
        return correctNode(nodes[0], nodes);
    }
    return nodes[0];
};
var pickFocusable = function (nodes, node) {
    return nodes.indexOf(correctNode(node, nodes));
};

var NEW_FOCUS = 'NEW_FOCUS';
/**
 * Main solver for the "find next focus" question
 * @param innerNodes - used to control "return focus"
 * @param innerTabbables - used to control "autofocus"
 * @param outerNodes
 * @param activeElement
 * @param lastNode
 * @returns {number|string|undefined|*}
 */
var newFocus = function (innerNodes, innerTabbables, outerNodes, activeElement, lastNode) {
    var cnt = innerNodes.length;
    var firstFocus = innerNodes[0];
    var lastFocus = innerNodes[cnt - 1];
    var isOnGuard = isGuard(activeElement);
    // focus is inside
    if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
        return undefined;
    }
    var activeIndex = activeElement !== undefined ? outerNodes.indexOf(activeElement) : -1;
    var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
    var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
    // no active focus (or focus is on the body)
    if (activeIndex === -1) {
        // known fallback
        if (lastNodeInside !== -1) {
            return lastNodeInside;
        }
        return NEW_FOCUS;
    }
    // new focus, nothing to calculate
    if (lastNodeInside === -1) {
        return NEW_FOCUS;
    }
    var indexDiff = activeIndex - lastIndex;
    var firstNodeIndex = outerNodes.indexOf(firstFocus);
    var lastNodeIndex = outerNodes.indexOf(lastFocus);
    var correctedNodes = correctNodes(outerNodes);
    var correctedIndex = activeElement !== undefined ? correctedNodes.indexOf(activeElement) : -1;
    var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
    // old focus
    if (!indexDiff && lastNodeInside >= 0) {
        return lastNodeInside;
    }
    // no tabbable elements, autofocus is not possible
    if (innerTabbables.length === 0) {
        // an edge case with no tabbable elements
        // return the last focusable one
        // with some probability this will prevent focus from cycling across the lock, but there is no tabbale elements to cycle to
        return lastNodeInside;
    }
    var returnFirstNode = pickFocusable(innerNodes, innerTabbables[0]);
    var returnLastNode = pickFocusable(innerNodes, innerTabbables[innerTabbables.length - 1]);
    // first element
    if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnLastNode;
    }
    // last element
    if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnFirstNode;
    }
    // jump out, but not on the guard
    if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
        return lastNodeInside;
    }
    // focus above lock
    if (activeIndex <= firstNodeIndex) {
        return returnLastNode;
    }
    // focus below lock
    if (activeIndex > lastNodeIndex) {
        return returnFirstNode;
    }
    // index is inside tab order, but outside Lock
    if (indexDiff) {
        if (Math.abs(indexDiff) > 1) {
            return lastNodeInside;
        }
        return (cnt + lastNodeInside + indexDiff) % cnt;
    }
    // do nothing
    return undefined;
};

var findAutoFocused = function (autoFocusables) {
    return function (node) {
        var _a;
        var autofocus = (_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus;
        return (
        // @ts-expect-error
        node.autofocus ||
            //
            (autofocus !== undefined && autofocus !== 'false') ||
            //
            autoFocusables.indexOf(node) >= 0);
    };
};
var pickAutofocus = function (nodesIndexes, orderedNodes, groups) {
    var nodes = nodesIndexes.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
    if (autoFocusable && autoFocusable.length) {
        return pickFirstFocus(autoFocusable);
    }
    return pickFirstFocus(filterAutoFocusable(orderedNodes));
};

var getParents = function (node, parents) {
    if (parents === void 0) { parents = []; }
    parents.push(node);
    if (node.parentNode) {
        getParents(node.parentNode.host || node.parentNode, parents);
    }
    return parents;
};
/**
 * finds a parent for both nodeA and nodeB
 * @param nodeA
 * @param nodeB
 * @returns {boolean|*}
 */
var getCommonParent = function (nodeA, nodeB) {
    var parentsA = getParents(nodeA);
    var parentsB = getParents(nodeB);
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < parentsA.length; i += 1) {
        var currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0) {
            return currentParent;
        }
    }
    return false;
};
var getTopCommonParent = function (baseActiveElement, leftEntry, rightEntries) {
    var activeElements = asArray(baseActiveElement);
    var leftEntries = asArray(leftEntry);
    var activeElement = activeElements[0];
    var topCommon = false;
    leftEntries.filter(Boolean).forEach(function (entry) {
        topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
        rightEntries.filter(Boolean).forEach(function (subEntry) {
            var common = getCommonParent(activeElement, subEntry);
            if (common) {
                if (!topCommon || contains$1(common, topCommon)) {
                    topCommon = common;
                }
                else {
                    topCommon = getCommonParent(common, topCommon);
                }
            }
        });
    });
    // TODO: add assert here?
    return topCommon;
};
/**
 * return list of nodes which are expected to be autofocused inside a given top nodes
 * @param entries
 * @param visibilityCache
 */
var allParentAutofocusables = function (entries, visibilityCache) {
    return entries.reduce(function (acc, node) { return acc.concat(parentAutofocusables(node, visibilityCache)); }, []);
};

var reorderNodes = function (srcNodes, dstNodes) {
    var remap = new Map();
    // no Set(dstNodes) for IE11 :(
    dstNodes.forEach(function (entity) { return remap.set(entity.node, entity); });
    // remap to dstNodes
    return srcNodes.map(function (node) { return remap.get(node); }).filter(isDefined);
};
/**
 * contains the main logic of the `focus-lock` package.
 *
 * ! you probably dont need this function !
 *
 * given top node(s) and the last active element returns the element to be focused next
 * @returns element which should be focused to move focus inside
 * @param topNode
 * @param lastNode
 */
var focusSolver = function (topNode, lastNode) {
    var activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
    var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
    var visibilityCache = new Map();
    var anyFocusable = getFocusableNodes(entries, visibilityCache);
    var innerElements = anyFocusable.filter(function (_a) {
        var node = _a.node;
        return isNotAGuard(node);
    });
    if (!innerElements[0]) {
        return undefined;
    }
    var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var orderedInnerElements = reorderNodes(outerNodes, innerElements);
    // collect inner focusable and separately tabbables
    var innerFocusables = orderedInnerElements.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var innerTabbable = orderedInnerElements.filter(function (_a) {
        var tabIndex = _a.tabIndex;
        return tabIndex >= 0;
    }).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
    if (newId === NEW_FOCUS) {
        var focusNode = 
        // first try only tabbable, and the fallback to all focusable, as long as at least one element should be picked for focus
        pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) ||
            pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache));
        if (focusNode) {
            return { node: focusNode };
        }
        else {
            console.warn('focus-lock: cannot find any node to move focus into');
            return undefined;
        }
    }
    if (newId === undefined) {
        return newId;
    }
    return orderedInnerElements[newId];
};

/**
 * traverses all related nodes (including groups) returning a list of all nodes(outer and internal) with meta information
 * This is low-level API!
 * @returns list of focusable elements inside a given top(!) node.
 * @see {@link getFocusableNodes} providing a simpler API
 */
var expandFocusableNodes = function (topNode) {
    var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    var commonParent = getTopCommonParent(topNode, topNode, entries);
    var outerNodes = orderByTabIndex(getFocusables([commonParent], true), true, true);
    var innerElements = getFocusables(entries, false);
    return outerNodes.map(function (_a) {
        var node = _a.node, index = _a.index;
        return ({
            node: node,
            index: index,
            lockItem: innerElements.indexOf(node) >= 0,
            guard: isGuard(node),
        });
    });
};

var focusOn = function (target, focusOptions) {
    if (!target) {
        // not clear how, but is possible https://github.com/theKashey/focus-lock/issues/53
        return;
    }
    if ('focus' in target) {
        target.focus(focusOptions);
    }
    if ('contentWindow' in target && target.contentWindow) {
        target.contentWindow.focus();
    }
};

var guardCount = 0;
var lockDisabled = false;
/**
 * The main functionality of the focus-lock package
 *
 * Contains focus at a given node.
 * The last focused element will help to determine which element(first or last) should be focused.
 * The found element will be focused.
 *
 * This is one time action (move), not a persistent focus-lock
 *
 * HTML markers (see {@link import('./constants').FOCUS_AUTO} constants) can control autofocus
 * @see {@link focusSolver} for the same functionality without autofocus
 */
var moveFocusInside = function (topNode, lastNode, options) {
    if (options === void 0) { options = {}; }
    var focusable = focusSolver(topNode, lastNode);
    // global local side effect to countain recursive lock activation and resolve focus-fighting
    if (lockDisabled) {
        return;
    }
    if (focusable) {
        /** +FOCUS-FIGHTING prevention **/
        if (guardCount > 2) {
            // we have recursive entered back the lock activation
            console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' +
                'See https://github.com/theKashey/focus-lock/#focus-fighting');
            lockDisabled = true;
            setTimeout(function () {
                lockDisabled = false;
            }, 1);
            return;
        }
        guardCount++;
        focusOn(focusable.node, options.focusOptions);
        guardCount--;
    }
};

function weakRef(value) {
    if (!value)
        return null;
    // #68 Safari 14.1 dont have it yet
    // FIXME: remove in 2025
    if (typeof WeakRef === 'undefined') {
        return function () { return value || null; };
    }
    var w = value ? new WeakRef(value) : null;
    return function () { return (w === null || w === void 0 ? void 0 : w.deref()) || null; };
}
var recordElementLocation = function (element) {
    if (!element) {
        return null;
    }
    var stack = [];
    var currentElement = element;
    while (currentElement && currentElement !== document.body) {
        stack.push({
            current: weakRef(currentElement),
            parent: weakRef(currentElement.parentElement),
            left: weakRef(currentElement.previousElementSibling),
            right: weakRef(currentElement.nextElementSibling),
        });
        currentElement = currentElement.parentElement;
    }
    return {
        element: weakRef(element),
        stack: stack,
        ownerDocument: element.ownerDocument,
    };
};
var restoreFocusTo = function (location) {
    var _a, _b, _c, _d, _e;
    if (!location) {
        return undefined;
    }
    var stack = location.stack, ownerDocument = location.ownerDocument;
    var visibilityCache = new Map();
    for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
        var line = stack_1[_i];
        var parent_1 = (_a = line.parent) === null || _a === void 0 ? void 0 : _a.call(line);
        // is it still here?
        if (parent_1 && ownerDocument.contains(parent_1)) {
            var left = (_b = line.left) === null || _b === void 0 ? void 0 : _b.call(line);
            var savedCurrent = line.current();
            var current = parent_1.contains(savedCurrent) ? savedCurrent : undefined;
            var right = (_c = line.right) === null || _c === void 0 ? void 0 : _c.call(line);
            var focusables = getTabbableNodes([parent_1], visibilityCache);
            var aim = 
            // that is element itself
            (_e = (_d = current !== null && current !== void 0 ? current : 
            // or something in it's place
            left === null || left === void 0 ? void 0 : left.nextElementSibling) !== null && _d !== void 0 ? _d : 
            // or somebody to the right, still close enough
            right) !== null && _e !== void 0 ? _e : 
            // or somebody to the left, something?
            left;
            while (aim) {
                for (var _f = 0, focusables_1 = focusables; _f < focusables_1.length; _f++) {
                    var focusable = focusables_1[_f];
                    if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) {
                        return focusable.node;
                    }
                }
                aim = aim.nextElementSibling;
            }
            if (focusables.length) {
                // if parent contains a focusable - move there
                return focusables[0].node;
            }
        }
    }
    // nothing matched
    return undefined;
};
/**
 * Captures the current focused element to restore focus as close as possible in the future
 * Handles situations where the focused element is removed from the DOM or no longer focusable
 * moving focus to the closest focusable element
 * @param targetElement - element where focus should be restored
 * @returns a function returning a new element to focus
 */
var captureFocusRestore = function (targetElement) {
    var location = recordElementLocation(targetElement);
    return function () {
        return restoreFocusTo(location);
    };
};

/**
 * for a given `element` in a given `scope` returns focusable siblings
 * @param element - base element
 * @param scope - common parent. Can be document, but better to narrow it down for performance reasons
 * @returns {prev,next} - references to a focusable element before and after
 * @returns undefined - if operation is not applicable
 */
var getRelativeFocusable = function (element, scope, useTabbables) {
    if (!element || !scope) {
        console.error('no element or scope given');
        return {};
    }
    var shards = asArray(scope);
    if (shards.every(function (shard) { return !contains$1(shard, element); })) {
        console.error('Active element is not contained in the scope');
        return {};
    }
    var focusables = useTabbables
        ? getTabbableNodes(shards, new Map())
        : getFocusableNodes(shards, new Map());
    var current = focusables.findIndex(function (_a) {
        var node = _a.node;
        return node === element;
    });
    if (current === -1) {
        // an edge case, when anchor element is not found
        return undefined;
    }
    return {
        prev: focusables[current - 1],
        next: focusables[current + 1],
        first: focusables[0],
        last: focusables[focusables.length - 1],
    };
};
var getBoundary = function (shards, useTabbables) {
    var set = useTabbables
        ? getTabbableNodes(asArray(shards), new Map())
        : getFocusableNodes(asArray(shards), new Map());
    return {
        first: set[0],
        last: set[set.length - 1],
    };
};
var defaultOptions = function (options) {
    return Object.assign({
        scope: document.body,
        cycle: true,
        onlyTabbable: true,
    }, options);
};
var moveFocus = function (fromElement, options, cb) {
    if (options === void 0) { options = {}; }
    var newOptions = defaultOptions(options);
    var solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
    if (!solution) {
        return;
    }
    var target = cb(solution, newOptions.cycle);
    if (target) {
        focusOn(target.node, newOptions.focusOptions);
    }
};
/**
 * focuses next element in the tab-order
 * @param fromElement - common parent to scope active element search or tab cycle order
 * @param {FocusNextOptions} [options] - focus options
 */
var focusNextElement = function (fromElement, options) {
    if (options === void 0) { options = {}; }
    moveFocus(fromElement, options, function (_a, cycle) {
        var next = _a.next, first = _a.first;
        return next || (cycle && first);
    });
};
/**
 * focuses prev element in the tab order
 * @param fromElement - common parent to scope active element search or tab cycle order
 * @param {FocusNextOptions} [options] - focus options
 */
var focusPrevElement = function (fromElement, options) {
    if (options === void 0) { options = {}; }
    moveFocus(fromElement, options, function (_a, cycle) {
        var prev = _a.prev, last = _a.last;
        return prev || (cycle && last);
    });
};
var pickBoundary = function (scope, options, what) {
    var _a;
    var boundary = getBoundary(scope, (_a = options.onlyTabbable) !== null && _a !== void 0 ? _a : true);
    var node = boundary[what];
    if (node) {
        focusOn(node.node, options.focusOptions);
    }
};
/**
 * focuses first element in the tab-order
 * @param {FocusNextOptions} options - focus options
 */
var focusFirstElement = function (scope, options) {
    if (options === void 0) { options = {}; }
    pickBoundary(scope, options, 'first');
};
/**
 * focuses last element in the tab order
 * @param {FocusNextOptions} options - focus options
 */
var focusLastElement = function (scope, options) {
    if (options === void 0) { options = {}; }
    pickBoundary(scope, options, 'last');
};

function deferAction(action) {
  setTimeout(action, 1);
}
var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var tryRestoreFocus = function tryRestoreFocus() {
  return null;
};
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var windowFocused = false;
var defaultWhitelist = function defaultWhitelist() {
  return true;
};
var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};
var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;
  do {
    var item = allNodes[i];
    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        return;
      }
      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);
  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}
var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    return Boolean(focusWasOutsideWindow);
  }
  return focusWasOutsideWindow === 'meanwhile';
};
var checkInHost = function checkInHost(check, el, boundary) {
  return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost(check, el.parentNode, boundary));
};
var withinHost = function withinHost(activeElement, workingArea) {
  return workingArea.some(function (area) {
    return checkInHost(activeElement, area, area);
  });
};
var getNodeFocusables = function getNodeFocusables(nodes) {
  return getFocusableNodes(nodes, new Map());
};
var isNotFocusable = function isNotFocusable(node) {
  return !getNodeFocusables([node.parentNode]).some(function (el) {
    return el.node === node;
  });
};
var activateTrap = function activateTrap() {
  var result = false;
  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
      observed = _lastActiveTrap.observed,
      persistentFocus = _lastActiveTrap.persistentFocus,
      autoFocus = _lastActiveTrap.autoFocus,
      shards = _lastActiveTrap.shards,
      crossFrame = _lastActiveTrap.crossFrame,
      focusOptions = _lastActiveTrap.focusOptions,
      noFocusGuards = _lastActiveTrap.noFocusGuards;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    if (focusOnBody() && lastActiveFocus) {
      if (!document.body.contains(lastActiveFocus) || isNotFocusable(lastActiveFocus)) {
        lastActiveFocus = null;
        var newTarget = tryRestoreFocus();
        if (newTarget) {
          newTarget.focus();
        }
      }
    }
    var activeElement = document && document.activeElement;
    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
      var shouldForceRestoreFocus = function shouldForceRestoreFocus() {
        if (!focusWasOutside(crossFrame) || !noFocusGuards || !lastActiveFocus || windowFocused) {
          return false;
        }
        var nodes = getNodeFocusables(workingArea);
        var lastIndex = nodes.findIndex(function (_ref) {
          var node = _ref.node;
          return node === lastActiveFocus;
        });
        return lastIndex === 0 || lastIndex === nodes.length - 1;
      };
      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || shouldForceRestoreFocus() || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              if (activeElement.blur) {
                activeElement.blur();
              }
              document.body.focus();
            } else {
              result = moveFocusInside(workingArea, lastActiveFocus, {
                focusOptions: focusOptions
              });
              lastPortaledElement = {};
            }
          }
          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
          tryRestoreFocus = captureFocusRestore(lastActiveFocus);
        }
      }
      if (document && activeElement !== document.activeElement && document.querySelector('[data-focus-auto-guard]')) {
        var newActiveElement = document && document.activeElement;
        var allNodes = expandFocusableNodes(workingArea);
        var focusedIndex = allNodes.map(function (_ref2) {
          var node = _ref2.node;
          return node;
        }).indexOf(newActiveElement);
        if (focusedIndex > -1) {
          allNodes.filter(function (_ref3) {
            var guard = _ref3.guard,
              node = _ref3.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref4) {
            var node = _ref4.node;
            return node.removeAttribute('tabIndex');
          });
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }
  return result;
};
var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    event.stopPropagation();
    event.preventDefault();
  }
};
var onBlur = function onBlur() {
  return deferAction(activateTrap);
};
var onFocus = function onFocus(event) {
  var source = event.target;
  var currentNode = event.currentTarget;
  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};
var FocusWatcher = function FocusWatcher() {
  return null;
};
process.env.NODE_ENV !== "production" ? {
  children: propTypes.node.isRequired
} : {};
var onWindowFocus = function onWindowFocus() {
  windowFocused = true;
};
var onWindowBlur = function onWindowBlur() {
  windowFocused = false;
  focusWasOutsideWindow = 'just';
  deferAction(function () {
    focusWasOutsideWindow = 'meanwhile';
  });
};
var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('focus', onWindowFocus);
  window.addEventListener('blur', onWindowBlur);
};
var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('focus', onWindowFocus);
  window.removeEventListener('blur', onWindowBlur);
};
function reducePropsToState(propsList) {
  return propsList.filter(function (_ref6) {
    var disabled = _ref6.disabled;
    return !disabled;
  });
}
var focusLockAPI = {
  moveFocusInside: moveFocusInside,
  focusInside: focusInside,
  focusNextElement: focusNextElement,
  focusPrevElement: focusPrevElement,
  focusFirstElement: focusFirstElement,
  focusLastElement: focusLastElement,
  captureFocusRestore: captureFocusRestore
};
function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];
  if (trap && !lastActiveTrap) {
    attachHandler();
  }
  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;
  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation();
    if (!traps.filter(function (_ref7) {
      var id = _ref7.id;
      return id === lastTrap.id;
    }).length) {
      lastTrap.returnFocus(!trap);
    }
  }
  if (trap) {
    lastActiveFocus = null;
    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation(focusLockAPI);
    }
    activateTrap();
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function (cb) {
  return cb(focusLockAPI);
});
var FocusTrap = withSideEffect(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

var FocusLockCombination = /*#__PURE__*/React.forwardRef(function FocusLockUICombination(props, ref) {
  return /*#__PURE__*/React.createElement(FocusLock, _extends({
    sideCar: FocusTrap,
    ref: ref
  }, props));
});
var _ref = FocusLock.propTypes || {},
  sideCar = _ref.sideCar,
  propTypes$1 = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = process.env.NODE_ENV !== "production" ? propTypes$1 : {};

/*! *****************************************************************************
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

var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

function __rest$2(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray$1(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
var removedBarSizeVariable = '--removed-body-scroll-bar-size';

var effectCar = createSidecarMedium();

var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React.forwardRef(function (props, parentRef) {
    var ref = React.useRef(null);
    var _a = React.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = __rest$2(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([ref, parentRef]);
    var containerProps = __assign$2(__assign$2({}, rest), callbacks);
    return (React.createElement(React.Fragment, null,
        enabled && (React.createElement(SideCar, { sideCar: effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode: gapMode })),
        forwardProps ? (React.cloneElement(React.Children.only(children), __assign$2(__assign$2({}, containerProps), { ref: containerRef }))) : (React.createElement(Container, __assign$2({}, containerProps, { className: className, ref: containerRef }), children))));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName,
};

var getNonce = function () {
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};

function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};

/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = stylesheetSingleton();
    return function (styles, isDynamic) {
        React.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};

/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = styleHookSingleton();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};

var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};

var Style = styleSingleton();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
    React.useEffect(function () {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function () {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            }
            else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = React.useMemo(function () { return getGapWidth(gapMode); }, [gapMode]);
    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};

var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? { passive: false } : false;

var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
};
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        if (target instanceof ShadowRoot) {
            target = target.host;
        }
        else {
            target = target.parentNode;
        }
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScroll) < 1) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScrollTop) < 1) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};

var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
var extractRef$1 = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React.useRef([]);
    var touchStartRef = React.useRef([0, 0]);
    var activeAxis = React.useRef();
    var id = React.useState(idCounter++)[0];
    var Style = React.useState(styleSingleton)[0];
    var lastProps = React.useRef(props);
    React.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray$1([props.lockRef.current], (props.shards || []).map(extractRef$1)).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React.useCallback(function (event, parent) {
        if (('touches' in event && event.touches.length === 2) || (event.type === 'wheel' && event.ctrlKey)) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef$1)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = React.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should, shadowParent: getOutermostShadowParent(target) };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React.useCallback(function (event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React.useCallback(function (event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React.useCallback(function (event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React.createElement(React.Fragment, null,
        inert ? React.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null));
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}

var SideCar$1 = exportSidecar(effectCar, RemoveScrollSideCar);

var ReactRemoveScroll = React.forwardRef(function (props, ref) { return (React.createElement(RemoveScroll, __assign$2({}, props, { ref: ref, sideCar: SideCar$1 }))); });
ReactRemoveScroll.classNames = RemoveScroll.classNames;

function nodeToString(node) {
    var string = '';
    if (typeof node === 'string') {
        string = node;
    }
    else if (typeof node === 'number') {
        string = node.toString();
    }
    else if (node instanceof Array) {
        string = node.reduce(function (previous, current) { return (previous += ' ' + nodeToString(current)); }, string);
        string = string.trim();
    }
    else if (React.isValidElement(node)) {
        string += nodeToString(node.props.children);
    }
    return string;
}

var _a$4, _b;
var ActionTypes$4;
(function (ActionTypes) {
    ActionTypes[ActionTypes["AddTitle"] = 0] = "AddTitle";
    ActionTypes[ActionTypes["RemoveTitle"] = 1] = "RemoveTitle";
    ActionTypes[ActionTypes["AddContent"] = 2] = "AddContent";
    ActionTypes[ActionTypes["RemoveContent"] = 3] = "RemoveContent";
})(ActionTypes$4 || (ActionTypes$4 = {}));
(function (Backdrops) {
    Backdrops[Backdrops["Dark"] = 0] = "Dark";
    Backdrops[Backdrops["Light"] = 1] = "Light";
})(exports.Backdrops || (exports.Backdrops = {}));
(function (Constraints) {
    Constraints[Constraints["Default"] = 0] = "Default";
    Constraints[Constraints["Screen"] = 1] = "Screen";
    Constraints[Constraints["Padded"] = 2] = "Padded";
})(exports.Constraints || (exports.Constraints = {}));
var constraints = (_a$4 = {},
    _a$4[exports.Constraints.Default] = 'max-w-xl max-h-(screen-16) m-6',
    _a$4[exports.Constraints.Screen] = 'max-w-screen max-h-screen',
    _a$4[exports.Constraints.Padded] = 'max-w-(screen-16) max-h-(screen-16) m-6',
    _a$4);
var DialogContext = React.createContext(null);
var reducers$4 = (_b = {},
    _b[ActionTypes$4.AddTitle] = function (state) { return (__assign(__assign({}, state), { hasTitle: true })); },
    _b[ActionTypes$4.RemoveTitle] = function (state) { return (__assign(__assign({}, state), { hasTitle: false })); },
    _b[ActionTypes$4.AddContent] = function (state) { return (__assign(__assign({}, state), { hasContent: true })); },
    _b[ActionTypes$4.RemoveContent] = function (state) { return (__assign(__assign({}, state), { hasContent: false })); },
    _b);
var runReducer$4 = function (state, action) {
    return reducers$4[action.type](state, action);
};
var useDialog = function () {
    return React.useContext(DialogContext);
};
function Actions$2(_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", { className: "flex items-center justify-end shrink-0 p-6 space-x-2" }, children));
}
function Content$3(_a) {
    var children = _a.children;
    var ref = React.useRef(null);
    var overflowing = useElementOverflow(ref);
    var _b = useDialog(), state = _b[0], dispatch = _b[1];
    var id = "coconut-dialog-content-".concat(state.id);
    React.useLayoutEffect(function () {
        dispatch({ type: ActionTypes$4.AddContent });
        return function () {
            if (state.parentRef.current) {
                dispatch({ type: ActionTypes$4.RemoveContent });
            }
        };
    }, [dispatch, state.parentRef]);
    return (React__default['default'].createElement("div", { className: clsx__default['default']('px-6 overflow-hidden overflow-y-auto focus-visible:ring', overflowing ? 'border-b border-t border-black-10' : null, state.hasTitle ? 'py-0' : 'pt-6'), id: id, ref: ref }, children));
}
function Dialog(_a) {
    var _b;
    var _c = _a.backdrop, backdrop = _c === void 0 ? exports.Backdrops.Dark : _c, children = _a.children, _d = _a.constraint, constraint = _d === void 0 ? exports.Constraints.Default : _d, _e = _a.dismissable, dismissable = _e === void 0 ? true : _e, onDismiss = _a.onDismiss, _f = _a.open, open = _f === void 0 ? false : _f;
    var mouseDownTarget = React.useRef(null);
    var parentRef = React.useRef(null);
    var _g = React.useReducer(runReducer$4, {
        dismissable: dismissable,
        hasContent: false,
        hasTitle: false,
        id: useId(),
        onDismiss: onDismiss,
        parentRef: parentRef,
    }), state = _g[0], dispatch = _g[1];
    var handleClick = function (event) {
        if (state.dismissable && mouseDownTarget.current === event.currentTarget) {
            event.stopPropagation();
            onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
        }
    };
    var handleKeyDown = function (event) {
        if (state.dismissable && event.key === Keys.Escape) {
            event.stopPropagation();
            onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
        }
    };
    var handleMouseDown = function (event) {
        mouseDownTarget.current = event.target;
    };
    // Optimization - ReactFocusLock runs very slowly in test environments.
    // We set this explicitly in Dialog.tests, but consumers can
    // set it explicitly or fallback to true in 'test' states.
    var disabled = global.process
        ? Object.hasOwnProperty.call((_b = global.process.env) !== null && _b !== void 0 ? _b : {}, 'DISABLE_SCROLL_FOCUS_LOCK')
            ? global.process.env.DISABLE_SCROLL_FOCUS_LOCK === 'true'
            : global.process.env.NODE_ENV === 'test'
        : false;
    return open ? (React__default['default'].createElement(Portal, { open: open },
        React__default['default'].createElement("div", { "aria-describedby": state.hasContent ? "coconut-dialog-content-".concat(state.id) : undefined, "aria-labelledby": state.hasTitle ? "coconut-dialog-header-".concat(state.id) : undefined, "aria-modal": "true", className: clsx__default['default']('fixed inset-0 flex items-center justify-center opacity-100 backdrop-blur-2 z-9998', backdrop === exports.Backdrops.Dark ? 'bg-black-45' : 'bg-white-45'), 
            /*
             * We can safely ignore the `no-static-element-interactions` warning here
             * because our overlay is only designed to capture any outside
             * clicks, not serve as a clickable element itself.
             *
             * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md#case-the-event-handler-is-only-being-used-to-capture-bubbled-events
             */
            onClick: handleClick, onKeyDown: handleKeyDown, onMouseDown: handleMouseDown, ref: parentRef, role: ROLE.Dialog },
            React__default['default'].createElement(ReactRemoveScroll, { enabled: !disabled },
                React__default['default'].createElement(FocusLockCombination, { disabled: disabled, returnFocus: true },
                    React__default['default'].createElement("div", { className: clsx__default['default']('relative flex flex-col overflow-auto font-sans rounded outline-none shadow-24 bg-white-100', constraints[constraint]) },
                        React__default['default'].createElement(DialogContext.Provider, { value: [state, dispatch] }, children))))))) : null;
}
function Header$1(_a) {
    var children = _a.children;
    var _b = useDialog(), state = _b[0], dispatch = _b[1];
    var intl = reactIntl.useIntl();
    var id = "coconut-dialog-header-".concat(state.id);
    React.useLayoutEffect(function () {
        dispatch({ type: ActionTypes$4.AddTitle });
        return function () {
            if (state.parentRef.current) {
                dispatch({ type: ActionTypes$4.RemoveTitle });
            }
        };
    }, [dispatch, state.parentRef]);
    return (React__default['default'].createElement("div", { className: clsx__default['default']('flex items-center justify-between', state.dismissable ? 'px-6 py-4' : 'p-6') },
        React__default['default'].createElement("h2", { className: "flex truncate", id: id, title: nodeToString(children) },
            React__default['default'].createElement(Typography, { truncate: true, variant: "h5" }, children)),
        state.dismissable ? (React__default['default'].createElement("div", { className: "ml-2" },
            React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'Ui.close' }), onClick: state.onDismiss, size: "medium" },
                React__default['default'].createElement(Close, null)))) : null));
}
Dialog.Actions = Actions$2;
Dialog.Content = Content$3;
Dialog.Header = Header$1;

var sizes$6 = {
    default: 'text-base leading-6',
    small: 'text-sm leading-5',
};
function Link(_a) {
    var children = _a.children, dataSet = _a.dataSet, _b = _a.external, external = _b === void 0 ? false : _b, href = _a.href, id = _a.id, onClick = _a.onClick, _c = _a.size, size = _c === void 0 ? 'default' : _c;
    return (
    // We actually ARE using rel: 'noreferrer' here, which is recommended, but our syntax
    // isn't being parsed by the linter so we'll ignore this line for now.
    // eslint-disable-next-line react/jsx-no-target-blank
    React__default['default'].createElement("a", __assign({ className: clsx__default['default']('font-sans font-normal no-underline text-primary-main hover:text-primary-dark focus:text-primary-dark focus:outline-none focus-visible:ring active:text-primary-darker', sizes$6[size]) }, toDataSet(dataSet), { href: href, id: id, onClick: onClick, target: external ? '_blank' : '_self' }, (external && { rel: 'noreferrer' })), children));
}

var NestedListActionTypes;
(function (NestedListActionTypes) {
    NestedListActionTypes[NestedListActionTypes["RegisterListId"] = 0] = "RegisterListId";
    NestedListActionTypes[NestedListActionTypes["UnregisterListId"] = 1] = "UnregisterListId";
    NestedListActionTypes[NestedListActionTypes["ToggleOpen"] = 2] = "ToggleOpen";
    NestedListActionTypes[NestedListActionTypes["UpdateItemState"] = 3] = "UpdateItemState";
})(NestedListActionTypes || (NestedListActionTypes = {}));

var ListNestedLevel;
(function (ListNestedLevel) {
    ListNestedLevel[ListNestedLevel["None"] = 0] = "None";
    ListNestedLevel[ListNestedLevel["One"] = 1] = "One";
    ListNestedLevel[ListNestedLevel["Two"] = 2] = "Two";
    ListNestedLevel[ListNestedLevel["Three"] = 3] = "Three";
    ListNestedLevel[ListNestedLevel["Four"] = 4] = "Four";
})(ListNestedLevel || (ListNestedLevel = {}));
var ListContext = React.createContext(null);
var useList = function () { return React.useContext(ListContext); };

var _a$5, _b$1;
var ItemContext = React.createContext(null);
var buttonStyles = {
    default: 'focus-visible:ring-inset focus:outline-none cursor-pointer',
    disabled: 'bg-transparent cursor-not-allowed',
    inverse: 'focus-visible:ring-inset focus:outline-none cursor-pointer',
    selected: 'focus-visible:ring-inset-selected focus:outline-none cursor-pointer border-l-4 border-black-90',
};
// TODO add better default label support for expand/collapse buttons
var indents = (_a$5 = {},
    _a$5[ListNestedLevel.None] = '',
    _a$5[ListNestedLevel.One] = 'ml-4',
    _a$5[ListNestedLevel.Two] = 'ml-12',
    _a$5[ListNestedLevel.Three] = 'ml-20',
    _a$5[ListNestedLevel.Four] = 'ml-28',
    _a$5);
var insets = {
    avatar: 'pl-14',
    checkbox: 'pl-11',
    icon: 'pl-11',
};
var textStyle = {
    default: { primary: 'text-black-90', secondary: 'text-black-60' },
    disabled: { primary: 'text-black-30', secondary: 'text-black-30' },
    inverse: { primary: 'text-white-90', secondary: 'text-white-60' },
    selected: { primary: 'text-black-90', secondary: 'text-black-60' },
};
var runReducer$5 = function (state, action) {
    return reducers$5[action.type](state, action);
};
var reducers$5 = (_b$1 = {},
    _b$1[NestedListActionTypes.ToggleOpen] = function (state) {
        return __assign(__assign({}, state), { open: !state.open });
    },
    _b$1[NestedListActionTypes.RegisterListId] = function (state, action) {
        return __assign(__assign({}, state), { nestedListId: action.id });
    },
    _b$1[NestedListActionTypes.UnregisterListId] = function (state) {
        return __assign(__assign({}, state), { nestedListId: undefined });
    },
    _b$1[NestedListActionTypes.UpdateItemState] = function (state, action) {
        return __assign(__assign({}, state), { itemState: action.itemState });
    },
    _b$1);
// Used by List to send dispatch about List's ID value back to Item.
var useItem = function () {
    return React.useContext(ItemContext);
};
function Item$1(_a) {
    var _b = _a.children, children = _b === void 0 ? undefined : _b, _c = _a.defaultOpen, defaultOpen = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, endAdornment = _a.endAdornment, _e = _a.endAdornmentType, endAdornmentType = _e === void 0 ? 'icon' : _e, inset = _a.inset, _f = _a.inverse, inverse = _f === void 0 ? false : _f, onBlur = _a.onBlur, onClick = _a.onClick, onFocus = _a.onFocus, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, primary = _a.primary, secondary = _a.secondary, _g = _a.selected, selected = _g === void 0 ? false : _g, startAdornment = _a.startAdornment, _h = _a.startAdornmentType, startAdornmentType = _h === void 0 ? 'icon' : _h;
    var id = "coconut-list-item-text-".concat(useId());
    var _j = useList(), dense = _j.dense, nested = _j.nested;
    var _k = React.useReducer(runReducer$5, {
        itemState: disabled
            ? 'disabled'
            : selected
                ? 'selected'
                : inverse
                    ? 'inverse'
                    : 'default',
        open: defaultOpen,
    }), state = _k[0], dispatch = _k[1];
    var components = {
        nestedList: null,
    };
    var handleBlur = function (event) {
        if (onBlur && !disabled) {
            onBlur(event);
        }
    };
    var handleClick = function (event) {
        if (components.nestedList && !disabled) {
            dispatch({ type: NestedListActionTypes.ToggleOpen });
        }
        if (onClick && !disabled) {
            onClick(event);
        }
    };
    var handleFocus = function (event) {
        if (onFocus && !disabled) {
            onFocus(event);
        }
    };
    var handleMouseEnter = function (event) {
        if (onMouseEnter && !disabled) {
            onMouseEnter(event);
        }
    };
    var handleMouseLeave = function (event) {
        if (onMouseLeave && !disabled) {
            onMouseLeave(event);
        }
    };
    var handleKeyDown = function (event) {
        // avoid multiple activations when key is held down
        if (event.repeat)
            return;
        if (onClick &&
            event.target === event.currentTarget &&
            (event.key === Keys.Space || event.key === Keys.Enter) &&
            !disabled) {
            // prevent default behaviour of space like scrolling the page
            event.preventDefault();
            handleClick(event);
        }
    };
    React.useEffect(function () {
        dispatch({
            type: NestedListActionTypes.UpdateItemState,
            itemState: disabled
                ? 'disabled'
                : selected
                    ? 'selected'
                    : inverse
                        ? 'inverse'
                        : 'default',
        });
    }, [disabled, selected, inverse]);
    var ignoreDense = endAdornmentType === 'icon-button' && !secondary;
    var vertPadding = endAdornmentType === 'icon-button' && !secondary
        ? 'py-3'
        : dense && !ignoreDense
            ? 'py-1'
            : 'py-2';
    var buttonProps = {
        onBlur: handleBlur,
        onClick: handleClick,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        tabIndex: disabled ? -1 : 0,
        disabled: disabled ? disabled : undefined,
        // aria-pressed should not be used alongside aria-expanded.
        // https://github.com/WordPress/gutenberg/issues/21716
        'aria-pressed': selected ? true : false,
    };
    children &&
        React.Children.forEach(children, function (child) {
            switch (child.type) {
                case List:
                    components.nestedList = child;
                    break;
            }
        });
    var toggleButtonProps = __assign({ onBlur: handleBlur, onClick: handleClick, onFocus: handleFocus, onKeyDown: handleKeyDown, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, tabIndex: disabled ? -1 : 0, disabled: disabled ? disabled : undefined }, (components.nestedList
        ? {
            'aria-expanded': state.open,
            'aria-controls': state.nestedListId,
        }
        : null));
    // If has a nested list item, is automatically a button
    var button = !!(onClick || components.nestedList);
    var ChildComponent = button ? 'button' : 'div';
    var listItemClasses = {
        className: inset ? insets[inset] : '',
    };
    var interactiveEndAdornment = endAdornmentType && endAdornmentType !== 'icon';
    var isCheckbox = startAdornmentType === 'checkbox';
    var getCheckbox = function () {
        if (!startAdornment || !isCheckbox) {
            return;
        }
        return (
        // TODO fix typescript error
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        React__default['default'].createElement(Checkbox.Input, __assign({}, startAdornment.props),
            React__default['default'].createElement(Text$2, { disabled: disabled, id: id, primary: primary, secondary: secondary })));
    };
    var getLeftPadding = function () {
        if (button && state.itemState === 'selected') {
            return nested > ListNestedLevel.None ? 'pl-7' : 'pl-3';
        }
        return nested > ListNestedLevel.None ? 'pl-8' : 'pl-4';
    };
    return (React__default['default'].createElement(ItemContext.Provider, { value: [state, dispatch] },
        React__default['default'].createElement("li", __assign({}, (listItemClasses.className && listItemClasses)), components.nestedList ? (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement("span", { className: clsx__default['default']('flex items-center', !disabled && button && 'hover:bg-black-5 active:bg-black-10', indents[nested], selected ? 'bg-primary-10' : '') },
                React__default['default'].createElement("button", __assign({ className: clsx__default['default']('flex w-full truncate items-center', vertPadding, textStyle[state.itemState].primary, button ? buttonStyles[state.itemState] : '', getLeftPadding()) }, toggleButtonProps),
                    startAdornment ? (React__default['default'].createElement(StartAdornment$2, { disabled: disabled, type: startAdornmentType }, startAdornment)) : null,
                    React__default['default'].createElement(Text$2, { disabled: disabled, id: id, primary: primary, secondary: secondary }),
                    !disabled ? (React__default['default'].createElement("span", { className: "pr-2" },
                        React__default['default'].createElement(EndAdornment, null, state.open ? React__default['default'].createElement(ExpandLess, null) : React__default['default'].createElement(ExpandMore, null)))) : null),
                endAdornment && !disabled ? (React__default['default'].createElement(EndAdornment, { type: endAdornmentType }, endAdornment)) : null),
            state.open ? components.nestedList : null)) : (React__default['default'].createElement("span", { className: clsx__default['default']('flex items-center', indents[nested], !disabled && button && 'hover:bg-black-5 active:bg-black-10', selected ? 'bg-primary-10' : '') },
            React__default['default'].createElement(ChildComponent, __assign({ className: clsx__default['default']('flex w-full truncate px-4 cursor-default items-center', endAdornment ? 'pr-0' : '', vertPadding, textStyle[state.itemState].primary, button ? buttonStyles[state.itemState] : '', getLeftPadding()) }, (button ? buttonProps : {})),
                isCheckbox ? (getCheckbox()) : (React__default['default'].createElement(React__default['default'].Fragment, null,
                    React__default['default'].createElement(StartAdornment$2, { disabled: disabled, type: startAdornmentType }, startAdornment),
                    React__default['default'].createElement(Text$2, { disabled: disabled, id: id, primary: primary, secondary: secondary }))),
                !disabled && !interactiveEndAdornment ? (React__default['default'].createElement(EndAdornment, { type: endAdornmentType }, endAdornment)) : null),
            !disabled && interactiveEndAdornment ? (React__default['default'].createElement(EndAdornment, { type: endAdornmentType }, endAdornment)) : null)))));
}
function EndAdornment(_a) {
    var children = _a.children, _b = _a.nested, nested = _b === void 0 ? false : _b, _c = _a.type, type = _c === void 0 ? 'icon' : _c;
    if (!children)
        return null;
    return (React__default['default'].createElement("div", { className: clsx__default['default']('flex items-center h-full shrink-0', nested ? '' : 'pr-2') },
        React__default['default'].createElement("div", { className: clsx__default['default'](type === 'element' || type === 'icon-button'
                ? 'flex'
                : 'flex w-6 h-6') }, children)));
}
function StartAdornment$2(_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? 'icon' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    if (!children)
        return null;
    return (React__default['default'].createElement("div", { className: clsx__default['default']('flex items-center', type === 'avatar' ? 'min-w-14' : 'min-w-11', type === 'icon' ? 'h-6' : 'h-10', type === 'checkbox' ? 'w-full' : '', disabled ? 'opacity-50 cursor-not-allowed' : '') },
        React__default['default'].createElement("div", { className: clsx__default['default']('flex items-center', type === 'icon' ? 'w-6 h-6' : 'w-10 h-10', type === 'checkbox' ? 'justify-start -m-2 w-full' : 'justify-center') }, children)));
}
function Text$2(_a) {
    var id = _a.id, primary = _a.primary, secondary = _a.secondary, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var dense = useList().dense;
    var itemState = useItem()[0].itemState;
    if (!primary && !secondary)
        return null;
    return (React__default['default'].createElement("div", { className: clsx__default['default']('flex-grow truncate', disabled ? 'cursor-not-allowed' : '') },
        React__default['default'].createElement("div", { className: clsx__default['default']('flex flex-col flex-grow mr-2 items-start', secondary ? 'my-1.5' : 'my-1') },
            React__default['default'].createElement("span", { className: clsx__default['default']('inline-block w-full break-words', 'font-sans whitespace-normal text-left', dense ? 'text-sm leading-5' : 'text-base leading-6', textStyle[itemState].primary), id: id }, primary),
            secondary ? (React__default['default'].createElement("span", { className: clsx__default['default']('inline-block w-full break-words font-sans text-sm leading-5 whitespace-normal text-left', textStyle[itemState].secondary) }, secondary)) : null)));
}

function List(_a) {
    var _b;
    var 
    // Label on list item not usually necessary. Only use if further context
    // is needed (and/or subheader is not present)
    // https://www.scottohara.me/blog/2020/05/02/labelled-lists.html
    label = _a["aria-label"], children = _a.children, _c = _a.dense, dense = _c === void 0 ? false : _c, _d = _a.nested, nested = _d === void 0 ? 0 : _d, subheader = _a.subheader;
    var subheaderId = "coconut-list-subheader-".concat(useId());
    var itemDispatch = (_b = useItem()) === null || _b === void 0 ? void 0 : _b[1];
    var _e = React.useState({
        dense: dense,
        nested: nested,
        id: "coconut-list-".concat(useId()),
    }), state = _e[0], setState = _e[1];
    React.useEffect(function () {
        setState(function (prev) { return (__assign(__assign({}, prev), { dense: dense, nested: nested })); });
    }, [dense, nested]);
    React.useEffect(function () {
        // Notifies controlling item of ID so we can link through aria-controls.
        itemDispatch === null || itemDispatch === void 0 ? void 0 : itemDispatch({
            type: NestedListActionTypes.RegisterListId,
            id: state.id,
        });
        return function () {
            return itemDispatch === null || itemDispatch === void 0 ? void 0 : itemDispatch({ type: NestedListActionTypes.UnregisterListId });
        };
    }, [itemDispatch, state.id]);
    // We don't provide an aria-labelledby alternative option as it would
    // reference the subheader text, which is already rendered on the page
    // and obvious/accessible to everyone.
    var accessibleProps = React.useMemo(function () {
        var labels = label
            ? {
                'aria-label': label,
            }
            : {};
        return labels;
    }, [label]);
    return (React__default['default'].createElement(ListContext.Provider, { value: state }, nested ? (React__default['default'].createElement("ul", __assign({ className: "flex overflow-hidden flex-col" }, accessibleProps, { id: state.id }), children)) : (React__default['default'].createElement("div", { className: "flex flex-col h-full py-2" },
        subheader ? (React__default['default'].createElement("div", { className: "px-4 font-sans text-sm font-medium tracking-wide leading-12 text-black-60", id: subheaderId }, subheader)) : null,
        React__default['default'].createElement("ul", __assign({}, accessibleProps), children)))));
}
List.Item = Item$1;

function NavigationItem(_a) {
    var children = _a.children, color = _a.color, disabled = _a.disabled, label = _a.label, onClick = _a.onClick, size = _a.size, variant = _a.variant;
    var intl = reactIntl.useIntl();
    return (React__default['default'].createElement("li", null,
        React__default['default'].createElement("button", { "aria-label": intl.formatMessage({ id: 'Pagination.go_to_page' }, { label: label }), className: clsx__default['default']('flex items-center justify-center rounded-full text-black-60 text-sm font-normal leading-relaxed disabled:bg-transparent disabled:cursor-not-allowed disabled:text-black-25 focus:outline-none', sizes$7[size], variants$7[variant][color].unselected), disabled: disabled, onClick: onClick, type: "button" },
            React__default['default'].createElement("span", { className: "flex items-center justify-center w-4 h-4" }, children))));
}

function EllipsisItem(_a) {
    var disabled = _a.disabled, size = _a.size;
    return (React__default['default'].createElement("li", null,
        React__default['default'].createElement("div", { "aria-hidden": true, className: clsx__default['default']('flex justify-center items-center text-sm font-normal rounded-full leading-relaxed cursor-default', sizes$7[size], disabled ? 'text-black-25 cursor-not-allowed' : 'text-black-60') }, "\u2026")));
}

function PageItem(_a) {
    var color = _a.color, disabled = _a.disabled, index = _a.index, page = _a.page, onClick = _a.onClick, size = _a.size, variant = _a.variant;
    var intl = reactIntl.useIntl();
    return (React__default['default'].createElement("li", null,
        React__default['default'].createElement("button", { "aria-current": page === index, "aria-label": intl.formatMessage({ id: 'Pagination.go_to_page_number' }, { index: index }), className: clsx__default['default']('text-black-60 text-sm font-normal rounded-full leading-relaxed disabled:cursor-not-allowed disabled:text-black-25 focus:outline-none', sizes$7[size], page === index
                ? variants$7[variant][color].selected
                : disabled
                    ? ''
                    : variants$7[variant][color].unselected), disabled: disabled, onClick: onClick, onKeyPress: onClick, type: "button", value: index }, index)));
}

function PageList(_a) {
    var boundaryCount = _a.boundaryCount, count = _a.count, color = _a.color, disabled = _a.disabled, page = _a.page, onClick = _a.onClick, siblingCount = _a.siblingCount, size = _a.size, variant = _a.variant;
    var pageList = [];
    var numBoundaryDisplay = 2 * siblingCount + boundaryCount + 2;
    var ellipseLeft = page - 1 - siblingCount - boundaryCount >= 2;
    var ellipseRight = count - page - siblingCount - boundaryCount >= 2;
    var showAllPages = count - numBoundaryDisplay - boundaryCount < 2;
    if (showAllPages) {
        for (var index = 1; index <= count; index++) {
            pageList.push(React__default['default'].createElement(PageItem, { color: color, disabled: disabled, index: index, key: "coconut-pagination-".concat(index), onClick: onClick, page: page, size: size, variant: variant }));
        }
    }
    else {
        if (ellipseLeft) {
            for (var index = 1; index <= boundaryCount; index++) {
                pageList.push(React__default['default'].createElement(PageItem, { color: color, disabled: disabled, index: index, key: "coconut-pagination-".concat(index), onClick: onClick, page: page, size: size, variant: variant }));
            }
            pageList.push(React__default['default'].createElement(EllipsisItem, { disabled: disabled, key: "coconut-pagination-ellipsis-left", size: size }));
        }
        else {
            for (var index = 1; index <= numBoundaryDisplay; index++) {
                pageList.push(React__default['default'].createElement(PageItem, { color: color, disabled: disabled, index: index, key: "coconut-pagination-".concat(index), onClick: onClick, page: page, size: size, variant: variant }));
            }
        }
        if (ellipseLeft && ellipseRight) {
            for (var index = page - siblingCount; index <= page + siblingCount; index++) {
                pageList.push(React__default['default'].createElement(PageItem, { color: color, disabled: disabled, index: index, key: "coconut-pagination-".concat(index), onClick: onClick, page: page, size: size, variant: variant }));
            }
        }
        if (ellipseRight) {
            pageList.push(React__default['default'].createElement(EllipsisItem, { disabled: disabled, key: "coconut-pagination-ellipsis-right", size: size }));
            for (var index = count + 1 - boundaryCount; index <= count; index++) {
                pageList.push(React__default['default'].createElement(PageItem, { color: color, disabled: disabled, index: index, key: "coconut-pagination-".concat(index), onClick: onClick, page: page, size: size, variant: variant }));
            }
        }
        else {
            for (var index = count + 1 - numBoundaryDisplay; index <= count; index++) {
                pageList.push(React__default['default'].createElement(PageItem, { color: color, disabled: disabled, index: index, key: "coconut-pagination-".concat(index), onClick: onClick, page: page, size: size, variant: variant }));
            }
        }
    }
    return React__default['default'].createElement(React__default['default'].Fragment, null,
        " ",
        pageList,
        " ");
}

var sizes$7 = {
    large: 'min-w-10 h-10 px-1',
    medium: 'min-w-8 h-8 px-1',
    small: 'min-w-6 h-6 px-1',
};
var variants$7 = {
    filled: {
        default: {
            selected: "bg-black-10 focus-visible:ring",
            unselected: "active:bg-black-25 focus:bg-black-15 focus-visible:ring hover:bg-black-15",
        },
        primary: {
            selected: "bg-primary-main text-white-100 focus-visible:ring",
            unselected: "active:bg-primary-darker active:text-white-100 focus:bg-primary-dark focus:text-white-100 focus-visible:ring hover:bg-primary-dark hover:text-white-100",
        },
        secondary: {
            selected: "bg-secondary-main text-white-100 focus-visible:ring",
            unselected: "active:bg-secondary-darker active:text-white-100 focus:bg-secondary-dark focus:text-white-100 focus-visible:ring hover:bg-secondary-dark hover:text-white-100",
        },
    },
    outlined: {
        default: {
            selected: "border border-solid border-black-20 text-black-90 focus-visible:ring",
            unselected: "active:bg-black-15 focus:bg-black-5 focus-visible:ring hover:bg-black-5",
        },
        primary: {
            selected: "border border-solid border-primary-main text-primary-main focus-visible:ring",
            unselected: "active:bg-primary-20 focus:bg-primary-10 focus-visible:ring hover:bg-primary-10",
        },
        secondary: {
            selected: "border border-solid border-secondary-main text-secondary-main focus-visible:ring",
            unselected: "active:bg-secondary-20 focus:bg-secondary-10 focus-visible:ring hover:bg-secondary-10",
        },
    },
};
function Pagination(_a) {
    var label = _a["aria-label"], _b = _a.boundaryCount, boundaryCount = _b === void 0 ? 1 : _b, count = _a.count, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.defaultPage, defaultPage = _d === void 0 ? 1 : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.siblingCount, siblingCount = _f === void 0 ? 1 : _f, _g = _a.size, size = _g === void 0 ? 'medium' : _g, _h = _a.variant, variant = _h === void 0 ? 'filled' : _h;
    var intl = reactIntl.useIntl();
    var _j = React.useState(defaultPage), selectedPage = _j[0], selectPage = _j[1];
    var handleSelectPage = function (event) {
        if (!disabled) {
            selectPage(parseInt(event.target.value));
        }
    };
    var handleMoveLeft = function () {
        if (selectedPage > 1 && !disabled) {
            selectPage(selectedPage - 1);
        }
    };
    var handleMoveRight = function () {
        if (selectedPage < count && !disabled) {
            selectPage(selectedPage + 1);
        }
    };
    var handleMoveFirst = function () {
        if (!disabled) {
            selectPage(1);
        }
    };
    var handleMoveLast = function () {
        if (!disabled) {
            selectPage(count);
        }
    };
    return (React__default['default'].createElement("nav", { "aria-label": label },
        React__default['default'].createElement("ul", { className: "flex flex-wrap space-x-1 font-sans" },
            React__default['default'].createElement(NavigationItem, { color: color, disabled: disabled || selectedPage === 1, key: "coconut-pagination-first", label: intl.formatMessage({ id: 'Pagination.first' }), onClick: handleMoveFirst, size: size, variant: variant },
                React__default['default'].createElement(FirstPage, null)),
            React__default['default'].createElement(NavigationItem, { color: color, disabled: disabled || selectedPage === 1, key: "coconut-pagination-previous", label: intl.formatMessage({ id: 'Pagination.previous' }), onClick: handleMoveLeft, size: size, variant: variant },
                React__default['default'].createElement(ChevronLeft, null)),
            React__default['default'].createElement(PageList, { boundaryCount: boundaryCount, color: color, count: count, disabled: disabled, onClick: handleSelectPage, page: selectedPage, siblingCount: siblingCount, size: size, variant: variant }),
            React__default['default'].createElement(NavigationItem, { color: color, disabled: disabled || selectedPage === count, key: "coconut-pagination-next", label: intl.formatMessage({ id: 'Pagination.next' }), onClick: handleMoveRight, size: size, variant: variant },
                React__default['default'].createElement(ChevronRight, null)),
            React__default['default'].createElement(NavigationItem, { color: color, disabled: disabled || selectedPage === count, key: "coconut-pagination-last", label: intl.formatMessage({ id: 'Pagination.last' }), onClick: handleMoveLast, size: size, variant: variant },
                React__default['default'].createElement(LastPage, null)))));
}

var RadioContext = React.createContext(null);
var useRadio = function () {
    return React.useContext(RadioContext);
};

function Group$3(_a) {
    var children = _a.children, color = _a.color, _b = _a.direction, direction = _b === void 0 ? 'inherit' : _b, disabled = _a.disabled, _c = _a.defaultValue, defaultValue = _c === void 0 ? '' : _c, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.helperText, helperText = _e === void 0 ? '' : _e, name = _a.name, onChange = _a.onChange, size = _a.size;
    var id = useId();
    var _f = React.useState({
        color: color,
        direction: direction,
        disabled: disabled,
        name: name || "coconut-radio-group-".concat(id),
        size: size,
        value: defaultValue,
    }), state = _f[0], setState = _f[1];
    React.useEffect(function () {
        if (disabled !== state.disabled) {
            setState(function (prevState) { return (__assign(__assign({}, prevState), { disabled: disabled })); });
        }
    }, [disabled, state.disabled]);
    var setValue = function (value) {
        setState(function (prevState) { return (__assign(__assign({}, prevState), { value: value })); });
        if (onChange) {
            onChange({ target: { name: state.name, value: value } });
        }
    };
    var setLabelledBy = function (id) {
        return setState(function (prevState) { return (__assign(__assign({}, prevState), { labelledBy: id })); });
    };
    return (React__default['default'].createElement(RadioContext.Provider, { value: [state, setValue, setLabelledBy] },
        React__default['default'].createElement("div", { className: "flex flex-col" },
            React__default['default'].createElement("div", { "aria-labelledby": state.labelledBy, className: clsx__default['default']("flex flex-".concat(direction), direction === 'row' ? 'items-center' : ''), role: "radiogroup" }, children),
            helperText ? (React__default['default'].createElement("span", { "aria-live": error ? 'assertive' : 'off', className: clsx__default['default']('text-xs', error ? 'text-error-main' : 'text-black-60') }, helperText)) : null)));
}

var colors$8 = {
    primary: {
        background: {
            default: 'active:bg-primary-20 hover:bg-primary-10',
            focused: 'bg-primary-10',
        },
        foreground: {
            active: 'text-primary-main',
            disabled: 'text-black-30 bg-transparent',
            inactive: 'text-black-60',
        },
    },
    secondary: {
        background: {
            default: 'active:bg-secondary-20 hover:bg-secondary-10',
            focused: 'bg-secondary-10',
        },
        foreground: {
            active: 'text-secondary-main',
            disabled: 'text-black-30 bg-transparent',
            inactive: 'text-black-60',
        },
    },
};
var sizes$8 = {
    medium: 'w-10 h-10 p-2',
    small: 'w-9 h-9 p-2',
};
function Input$1(_a) {
    var label = _a["aria-label"], _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.color, passedColor = _c === void 0 ? 'primary' : _c, _d = _a.disabled, passedDisabled = _d === void 0 ? false : _d, _e = _a.inputRef, inputRef = _e === void 0 ? null : _e, passedName = _a.name, onChange = _a.onChange, _f = _a.size, passedSize = _f === void 0 ? 'small' : _f, value = _a.value;
    var _g = useRadio(), _h = _g[0], defaultColor = _h.color, defaultDisabled = _h.disabled, name = _h.name, defaultSize = _h.size, checkedValue = _h.value, setCheckedValue = _g[1];
    var _j = React.useState(function () { return false; }), focused = _j[0], setFocused = _j[1];
    var color = defaultColor || passedColor;
    var disabled = defaultDisabled !== undefined ? defaultDisabled : passedDisabled;
    var size = defaultSize || passedSize;
    var checked = checkedValue === value;
    var handleBlur = function () {
        setFocused(false);
    };
    var handleChange = function (event) {
        if (event.currentTarget.checked) {
            setCheckedValue(value);
        }
        if (onChange) {
            onChange(event);
        }
    };
    var handleFocus = function () {
        setFocused(true);
    };
    return (React__default['default'].createElement("label", { className: clsx__default['default']('radio font-sans inline-flex items-center group', disabled ? 'cursor-not-allowed' : 'cursor-pointer') },
        React__default['default'].createElement("span", { className: clsx__default['default']('rounded-full focus:outline-none relative flex', disabled ? null : colors$8[color].background.default, focused ? colors$8[color].background.focused : null, sizes$8[size]) },
            React__default['default'].createElement("input", { "aria-label": label, className: clsx__default['default']('absolute inset-0 w-full h-full p-0 m-0 opacity-0', disabled ? 'cursor-not-allowed' : 'cursor-pointer'), defaultChecked: checked, disabled: disabled, name: passedName || name, onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, ref: inputRef, type: "radio", value: value }),
            React__default['default'].createElement("span", { className: clsx__default['default']('status-active rounded-full w-full h-full', disabled
                    ? colors$8[color].foreground.disabled
                    : colors$8[color].foreground.active) },
                React__default['default'].createElement(RadioActive, null)),
            React__default['default'].createElement("span", { className: clsx__default['default']('status-inactive rounded-full w-full h-full', disabled
                    ? colors$8[color].foreground.disabled
                    : colors$8[color].foreground.inactive) },
                React__default['default'].createElement(RadioInactive, null))),
        children ? (React__default['default'].createElement("p", { className: clsx__default['default']('text-sm font-normal  leading-5 select-none', disabled ? 'text-black-45' : 'text-black-90') }, children)) : null));
}

function Items$1(_a) {
    var children = _a.children, color = _a.color, disabled = _a.disabled, _b = _a.defaultValue, defaultValue = _b === void 0 ? '' : _b, _c = _a.error, error = _c === void 0 ? false : _c, _d = _a.helperText, helperText = _d === void 0 ? '' : _d, name = _a.name, onChange = _a.onChange, size = _a.size;
    var id = useId();
    var _e = React.useState({
        color: color,
        disabled: disabled,
        name: name || "coconut-radio-group-".concat(id),
        size: size,
        value: defaultValue,
    }), state = _e[0], setState = _e[1];
    React.useEffect(function () {
        if (disabled !== state.disabled) {
            setState(function (prevState) { return (__assign(__assign({}, prevState), { disabled: disabled })); });
        }
    }, [disabled, state.disabled]);
    var setValue = React.useCallback(function (value) {
        setState(function (prevState) { return (__assign(__assign({}, prevState), { value: value })); });
        if (onChange) {
            onChange({ target: { name: state.name, value: value } });
        }
    }, [onChange, state.name]);
    var setLabelledBy = React.useCallback(function (id) { return setState(function (prevState) { return (__assign(__assign({}, prevState), { labelledBy: id })); }); }, []);
    return (React__default['default'].createElement(RadioContext.Provider, { value: [state, setValue, setLabelledBy] },
        React__default['default'].createElement(React__default['default'].Fragment, null,
            children,
            helperText ? (React__default['default'].createElement("span", { "aria-live": error ? 'assertive' : 'off', className: clsx__default['default']('text-xs', error ? 'text-error-main' : 'text-black-60') }, helperText)) : null)));
}

function Label$1(_a) {
    var children = _a.children, helperText = _a.helperText;
    var _b = useRadio(), _c = _b[0], direction = _c.direction, disabled = _c.disabled, name = _c.name, setLabelledBy = _b[2];
    var id = "".concat(name, "-label");
    React.useEffect(function () { return setLabelledBy(id); }, [id]);
    return (React__default['default'].createElement("span", { className: clsx__default['default'](direction === 'col' ? 'pb-1' : null, direction === 'row' ? 'mr-4' : null, disabled ? 'opacity-50' : null), id: id },
        React__default['default'].createElement(Typography, { variant: "subtitle2" }, children),
        helperText ? (React__default['default'].createElement("span", { className: "block" },
            React__default['default'].createElement(Typography, { variant: "subtitle3" }, helperText))) : null));
}

var Radio = { Input: Input$1, Group: Group$3, Items: Items$1, Label: Label$1 };

var ActionTypes$5;
(function (ActionTypes) {
    ActionTypes[ActionTypes["SelectOption"] = 0] = "SelectOption";
})(ActionTypes$5 || (ActionTypes$5 = {}));

function Group$4(_a) {
    var children = _a.children, _b = _a.label, label = _b === void 0 ? null : _b;
    return React__default['default'].createElement(Menu.Group, { label: label }, children);
}
Group$4.uiName = 'Select.Group';

function Option(_a, ref) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b, displayValue = _a.displayValue, _c = _a.value, value = _c === void 0 ? '' : _c;
    var state = useSelect()[0];
    var selected = state.value === value;
    var internalRef = React.useRef(null);
    var optionRef = useSyncRefs(internalRef, ref, function (element) {
        if (selected && state.displayInputRef.current && (element === null || element === void 0 ? void 0 : element.textContent)) {
            if (state.inputRef.current) {
                state.inputRef.current.value = state.value || '';
            }
            state.displayInputRef.current.value = state.value
                ? displayValue || element.textContent
                : '';
        }
    });
    var handleClick = function (event) {
        var _a, _b;
        if (!disabled) {
            var input = state.inputRef.current;
            if (input) {
                var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
                var inputEvent = new Event('input', { bubbles: true });
                (_a = descriptor.set) === null || _a === void 0 ? void 0 : _a.call(input, value);
                input.dispatchEvent(inputEvent);
            }
            var display = state.displayInputRef.current;
            if (display) {
                var descriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
                var inputEvent = new Event('input', { bubbles: true });
                (_b = descriptor.set) === null || _b === void 0 ? void 0 : _b.call(display, value ? displayValue || event.currentTarget.textContent : '');
                display.dispatchEvent(inputEvent);
            }
        }
    };
    return (React__default['default'].createElement(Menu.Item, { disabled: disabled, onClick: handleClick, ref: optionRef, selected: selected }, children));
}

function Text$3(_a) {
    var _b;
    var color = _a.color, dataSet = _a.dataSet, defaultValue = _a.defaultValue, disabled = _a.disabled, displayInputRef = _a.displayInputRef, error = _a.error, helperText = _a.helperText, inputRef = _a.inputRef, label = _a.label, onChange = _a.onChange, name = _a.name, revert = _a.revert, size = _a.size, startAdornment = _a.startAdornment, variant = _a.variant;
    var d = useDisposables();
    var _c = useSelect(), selectDispatch = _c[1];
    var _d = useMenu(), state = _d[0], dispatch = _d[1];
    var labelRef = React.useRef(null);
    var containerRef = useSyncRefs(state.buttonRef, labelRef);
    var handleChange = function (event) {
        event.persist();
        selectDispatch({
            type: ActionTypes$5.SelectOption,
            value: event.target.value,
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(event, { revert: revert() });
    };
    var menuProps = {
        'aria-controls': "coconut-menu-".concat(state.id),
        'aria-expanded': state.show ? 'true' : 'false',
        'aria-haspopup': 'listbox',
        'aria-labelledby': "label-coconut-menu-button-".concat(state.id),
        'aria-activedescendant': state.activeItemIndex !== null && state.activeItemIndex > -1
            ? (_b = state.items[state.activeItemIndex]) === null || _b === void 0 ? void 0 : _b.id
            : '',
        id: "coconut-menu-button-".concat(state.id),
        onClick: function (event) {
            if (state.show) {
                dispatch({ type: ActionTypes.CloseMenu });
                d.nextFrame(function () {
                    var _a;
                    (_a = state.buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                });
            }
            else {
                event.preventDefault();
                dispatch({ type: ActionTypes.OpenMenu });
                d.nextFrame(function () {
                    var _a;
                    (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                });
            }
        },
        onKeyDown: function (event) {
            if (event.repeat) {
                return;
            }
            switch (event.key) {
                case Keys.Space:
                case Keys.Enter:
                case Keys.ArrowDown:
                    event.preventDefault();
                    dispatch({ type: ActionTypes.OpenMenu });
                    d.nextFrame(function () {
                        var _a, _b;
                        (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                        if (!state.listbox || !((_b = state.selectedItem) === null || _b === void 0 ? void 0 : _b.index)) {
                            dispatch({ type: ActionTypes.GoToItem, focus: Focus.First });
                        }
                    });
                    break;
                case Keys.ArrowUp:
                    event.preventDefault();
                    dispatch({ type: ActionTypes.OpenMenu });
                    d.nextFrame(function () {
                        var _a, _b;
                        (_a = state.itemsRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                        if (!state.listbox || !((_b = state.selectedItem) === null || _b === void 0 ? void 0 : _b.index)) {
                            dispatch({ type: ActionTypes.GoToItem, focus: Focus.Last });
                        }
                    });
            }
        },
        role: ROLE.Combobox,
    };
    React.useEffect(function () {
        dispatch === null || dispatch === void 0 ? void 0 : dispatch({ type: ActionTypes.RegisterSelect });
    }, [dispatch]);
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("input", { className: "hidden", "data-select": true, defaultValue: defaultValue, disabled: disabled, name: name, onChange: handleChange, ref: inputRef }),
        React__default['default'].createElement(TextInput, __assign({ appearFocused: state.show, color: color, containerRef: containerRef, dataSet: dataSet, disabled: disabled, endAdornment: ExpandMore, error: error, helperText: helperText, inputRef: displayInputRef, label: label, readOnly: true, selectable: true, size: size, startAdornment: startAdornment, variant: variant }, menuProps))));
}

var _a$6;
var SelectContext = React.createContext(null);
var reducers$6 = (_a$6 = {},
    _a$6[ActionTypes$5.SelectOption] = function (state, action) { return (__assign(__assign({}, state), { value: action.value })); },
    _a$6);
var runReducer$6 = function (state, action) {
    return reducers$6[action.type](state, action);
};
var useSelect = function () {
    return React.useContext(SelectContext);
};
function Select(_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'default' : _b, dataSet = _a.dataSet, _c = _a.defaultValue, defaultValue = _c === void 0 ? '' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, helperText = _a.helperText, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, _f = _a.size, size = _f === void 0 ? 'medium' : _f, startAdornment = _a.startAdornment, _g = _a.variant, variant = _g === void 0 ? 'outlined' : _g;
    var displayInputRef = React.useRef(null);
    var localRef = React.useRef(null);
    var syncRef = useSyncRefs(localRef, inputRef);
    var _h = React.useReducer(runReducer$6, {}, function () { return ({
        value: defaultValue,
    }); }), state = _h[0], dispatch = _h[1];
    React.useEffect(function () {
        // When options do not contain an empty option, display value should be adjusted manually
        if (state.value === '' && displayInputRef.current) {
            displayInputRef.current.value = '';
        }
    }, [state.value]);
    var revert = function () {
        var currentState = __assign({}, state);
        return function () {
            var input = localRef.current;
            setTimeout(function () {
                dispatch(__assign({ type: ActionTypes$5.SelectOption }, currentState));
            }, 1);
            if (input) {
                input.value = currentState.value;
            }
        };
    };
    return (React__default['default'].createElement(SelectContext.Provider, { value: [__assign(__assign({}, state), { displayInputRef: displayInputRef, inputRef: localRef }), dispatch] },
        React__default['default'].createElement(Menu, null,
            React__default['default'].createElement(Text$3, { color: color, dataSet: dataSet, defaultValue: defaultValue, disabled: disabled, displayInputRef: displayInputRef, error: error, helperText: helperText, inputRef: syncRef, label: label, name: name, onChange: onChange, revert: revert, size: size, startAdornment: startAdornment, variant: variant }),
            React__default['default'].createElement(Menu.Items, null, children))));
}
Select.Option = React.forwardRef(Option);
Select.Group = Group$4;

var animations = {
    pulse: 'animate-pulse',
};
var colors$9 = {
    light: 'bg-black-15',
    dark: 'bg-black-25',
};
var heights = {
    short: {
        square: 'h-4',
        rounded: 'h-4',
    },
    medium: {
        square: 'h-5',
        rounded: 'h-5',
    },
    long: {
        square: 'h-6',
        rounded: 'h-6',
    },
};
var widths = {
    short: {
        circle: 'w-5 h-5',
        square: 'w-1/3',
        rounded: 'w-1/3',
    },
    medium: {
        circle: 'w-10 h-10',
        square: 'w-1/2',
        rounded: 'w-1/2',
    },
    long: {
        circle: 'w-15 h-15',
        square: 'w-full',
        rounded: 'w-full',
    },
};
var variants$8 = {
    circle: 'rounded-full',
    square: 'rounded-md',
    rounded: 'rounded-full',
};
function Skeleton(_a) {
    var _b = _a.animation, animation = _b === void 0 ? 'pulse' : _b, _c = _a.color, color = _c === void 0 ? 'dark' : _c, height = _a.height, width = _a.width, _d = _a.variant, variant = _d === void 0 ? 'circle' : _d;
    return (React__default['default'].createElement("div", { className: clsx__default['default']('cursor-default justify-center items-center inline-flex', animations[animation], colors$9[color], variants$8[variant], variant === 'circle'
            ? null
            : height
                ? heights[height][variant]
                : heights.short[variant], variant === 'circle'
            ? width
                ? widths[width].circle
                : widths.medium.circle
            : width
                ? widths[width][variant]
                : widths.long[variant]), role: "presentation" }));
}

function Snackbar(_a) {
    var _b = _a.anchorOrigin, horizontal = _b.horizontal, vertical = _b.vertical, autoHideDuration = _a.autoHideDuration, children = _a.children, _c = _a.open, open = _c === void 0 ? true : _c, _d = _a.role, role = _d === void 0 ? exports.AriaLiveRole.Alert : _d, _e = _a.severity, severity = _e === void 0 ? 'success' : _e;
    var _f = React.useState(function () { return open; }), visible = _f[0], setVisible = _f[1];
    React.useEffect(function () {
        if (autoHideDuration !== undefined) {
            setTimeout(function () { return setVisible(false); }, autoHideDuration);
        }
    }, [autoHideDuration]);
    React.useEffect(function () {
        setVisible(open);
    }, [open]);
    return visible ? (React__default['default'].createElement("div", { className: clsx__default['default']('fixed flex shadow-6 rounded-md w-full max-w-xs z-9999', horizontal === 'left'
            ? 'left-0 ml-4 md:ml-8'
            : horizontal === 'right'
                ? 'right-0 mr-4 md:mr-8'
                : 'left-half', vertical === 'bottom'
            ? 'bottom-0 mb-4 md:mb-8'
            : vertical === 'top'
                ? 'top-0 mt-4 md:mt-8'
                : 'top-half') },
        React__default['default'].createElement(Alert, { role: role, severity: severity }, children))) : null;
}
function Content$4(_a) {
    var children = _a.children;
    return React__default['default'].createElement(Alert.Content, null, children);
}
function Description$3(_a) {
    var children = _a.children;
    return React__default['default'].createElement(Alert.Description, null, children);
}
function Title$2(_a) {
    var children = _a.children;
    return React__default['default'].createElement(Alert.Title, null, children);
}
function Actions$3(_a) {
    var children = _a.children;
    return React__default['default'].createElement(Alert.Actions, null, children);
}
function Button$2(_a) {
    var children = _a.children, dataSet = _a.dataSet, onClick = _a.onClick;
    return (React__default['default'].createElement(Alert.Button, { dataSet: dataSet, onClick: onClick }, children));
}
Snackbar.Actions = Actions$3;
Snackbar.Button = Button$2;
Snackbar.Content = Content$4;
Snackbar.Description = Description$3;
Snackbar.Title = Title$2;

var colors$a = {
    primary: {
        background: {
            focused: "bg-primary-10",
            unfocused: "group-hover:bg-primary-10 group-active:bg-primary-20",
        },
        track: {
            disabled: "bg-primary-20",
            focused: "bg-primary-dark",
            unfocused: "bg-primary-main hover:bg-primary-dark active:bg-primary-darker",
        },
    },
    secondary: {
        background: {
            focused: "bg-secondary-10",
            unfocused: "group-hover:bg-secondary-10 group-active:bg-secondary-20",
        },
        track: {
            disabled: "bg-secondary-20",
            focused: "bg-secondary-dark",
            unfocused: "bg-secondary-main hover:bg-secondary-dark active:bg-secondary-darker",
        },
    },
};
var sizes$9 = {
    medium: {
        root: 'w-11 h-6',
        thumb: 'w-5 h-5',
        transform: 'translate-x-5',
    },
    small: {
        root: 'w-9 h-5',
        thumb: 'w-4 h-4',
        transform: 'translate-x-4',
    },
};
function Switch(_a) {
    var label = _a["aria-label"], _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.defaultChecked, defaultChecked = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, helperText = _a.helperText, inputRef = _a.inputRef, name = _a.name, onChange = _a.onChange, _f = _a.size, size = _f === void 0 ? 'small' : _f;
    var ref = React.useRef(null);
    var _g = React.useState(function () { return defaultChecked; }), checked = _g[0], setChecked = _g[1];
    var _h = React.useState(function () { return false; }), focused = _h[0], setFocused = _h[1];
    var switchRef = useSyncRefs(ref, inputRef);
    var handleBlur = function () {
        setFocused(false);
    };
    var handleChange = function (event) {
        setChecked(event.currentTarget.checked);
        if (onChange) {
            onChange(event);
        }
    };
    var handleFocus = function () {
        setFocused(true);
    };
    React.useEffect(function () {
        if (ref.current) {
            setChecked(ref.current.checked);
        }
    }, []);
    return (React__default['default'].createElement("label", { className: clsx__default['default']('inline-flex items-center font-sans group', disabled ? 'cursor-not-allowed' : 'cursor-pointer') },
        React__default['default'].createElement("div", { className: "flex flex-col" },
            React__default['default'].createElement("div", { className: "inline-flex items-center" },
                React__default['default'].createElement("div", { className: clsx__default['default']('relative inline-flex transition-colors duration-200 border-2 border-transparent rounded-xl', checked
                        ? disabled
                            ? colors$a[color].track.disabled
                            : colors$a[color].track.unfocused
                        : disabled
                            ? null
                            : 'bg-black-45 hover:bg-black-60 focus:bg-black-60 active:bg-black-90', checked && focused ? colors$a[color].track.focused : null, !checked && focused ? 'bg-black-60' : null, disabled ? 'bg-black-15' : null, sizes$9[size].root) },
                    React__default['default'].createElement("span", { "aria-hidden": "true", className: clsx__default['default']('relative transition duration-200 ease-in-out rounded-full pointer-events-none will-change-transform', checked ? sizes$9[size].transform : null, sizes$9[size].thumb) },
                        React__default['default'].createElement("span", { className: clsx__default['default']('absolute inset-0 rounded-full scale-200', focused ? colors$a[color].background.focused : null, disabled ? null : colors$a[color].background.unfocused) },
                            React__default['default'].createElement("span", { className: "absolute inset-0 scale-50 rounded-full bg-white-100" }))),
                    React__default['default'].createElement("input", { "aria-label": label, className: clsx__default['default']('absolute inset-0 w-full h-full p-0 m-0 opacity-0', disabled ? 'cursor-not-allowed' : 'cursor-pointer'), defaultChecked: defaultChecked, disabled: disabled, name: name, onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, ref: switchRef, type: "checkbox" })),
                children ? (React__default['default'].createElement("p", { className: clsx__default['default']('ml-2 text-sm font-normal leading-5 select-none', disabled ? 'text-black-45' : 'text-black-90') }, children)) : null),
            children ? (React__default['default'].createElement("div", { className: clsx__default['default']('text-xs font-normal tracking-wid pt-2', disabled ? 'text-black-30' : 'text-black-60') }, helperText ? helperText : null)) : null)));
}

var GroupContext = React.createContext(null);
var useGroup = function () { return React.useContext(GroupContext); };
function Group$5(_a) {
    var _b = _a.align, align = _b === void 0 ? 'stretch' : _b, children = _a.children, _c = _a.color, color = _c === void 0 ? 'default' : _c, defaultTab = _a.defaultTab, disabled = _a.disabled, onClick = _a.onClick, _d = _a.orientation, orientation = _d === void 0 ? 'horizontal' : _d, _e = _a.size, size = _e === void 0 ? 'large' : _e, _f = _a.adornmentPosition, adornmentPosition = _f === void 0 ? 'vertical' : _f;
    var _g = React.useState(defaultTab), selectedTab = _g[0], setSelectedTab = _g[1];
    return (React__default['default'].createElement("div", { className: clsx__default['default']('flex w-full flex-wrap border-b border-solid border-black-10-hex', orientation === 'vertical' ? 'flex-col' : null, align === 'left' && orientation === 'horizontal'
            ? 'justify-start'
            : null, align === 'right' && orientation === 'horizontal'
            ? 'justify-end'
            : null), role: "tablist" },
        React__default['default'].createElement(GroupContext.Provider, { value: {
                align: align,
                color: color,
                disabled: disabled,
                onClick: onClick,
                selectedTab: selectedTab,
                setSelectedTab: setSelectedTab,
                size: size,
                adornmentPosition: adornmentPosition,
            } }, children)));
}

var sizes$a = {
    large: {
        root: 'p-4',
        icon: 'w-6 h-6 pl-1',
    },
    medium: {
        root: 'p-2',
        icon: 'w-6 h-6 pl-1',
    },
    small: {
        root: 'p-1',
        icon: 'w-6 h-6 pl-1',
    },
};
var variants$9 = {
    default: {
        selected: "border-b-2 border-solid border-black-90 text-black-90 active:bg-black-20 focus:bg-black-10 focus-visible:ring hover:bg-black-10 disabled:border-b-2 disabled:border-solid disabled:border-black-25",
        unselected: "border-b-2 border-solid border-transparent text-black-90 active:bg-black-20 focus:bg-black-5 focus-visible:ring hover:bg-black-5 disabled:border-b-2 disabled:border-solid disabled:border-transparent",
    },
    primary: {
        selected: "border-b-2 border-solid border-primary-main text-primary-main active:bg-primary-20 focus:bg-primary-10 focus-visible:ring hover:bg-primary-10 disabled:border-b-2 disabled:border-solid disabled:border-black-25",
        unselected: "border-b-2 border-solid border-transparent text-primary-main active:bg-primary-20 focus:bg-primary-10 focus-visible:ring hover:bg-primary-10 disabled:border-b-2 disabled:border-solid disabled:border-transparent",
    },
    secondary: {
        selected: "border-b-2 border-solid border-secondary-main text-secondary-main active:bg-secondary-20 focus:bg-secondary-10 focus-visible:ring hover:bg-secondary-10 disabled:border-b-2 disabled:border-solid disabled:border-black-25",
        unselected: "border-b-2 border-solid border-transparent text-secondary-main active:bg-secondary-20 focus:bg-secondary-10 focus-visible:ring hover:bg-secondary-10 disabled:border-b-2 disabled:border-solid disabled:border-transparent",
    },
};
function Tab(_a) {
    var _b;
    var controls = _a["aria-controls"], children = _a.children, color = _a.color, disabled = _a.disabled, id = _a.id, onClick = _a.onClick, size = _a.size, StartAdornment = _a.startAdornment, value = _a.value;
    var _c = useGroup(), groupAlign = _c.align, groupColor = _c.color, groupDisabled = _c.disabled, groupClick = _c.onClick, selectedTab = _c.selectedTab, setSelectedTab = _c.setSelectedTab, groupSize = _c.size, adornmentPosition = _c.adornmentPosition;
    var isDisabled = disabled !== null && disabled !== void 0 ? disabled : groupDisabled;
    var isSelected = selectedTab === value;
    var handleSelectTab = function (event) {
        if (!isDisabled) {
            setSelectedTab(value);
            onClick ? onClick(event) : groupClick === null || groupClick === void 0 ? void 0 : groupClick(event);
        }
    };
    return (React__default['default'].createElement("button", { "aria-controls": controls, "aria-selected": isSelected, className: clsx__default['default']('min-w-fit font-sans text-sm font-medium leading-relaxed tracking-wide disabled:cursor-not-allowed focus:outline-none disabled:border-b-2 disabled:border-solid disabled:bg-transparent disabled:text-black-25', groupAlign === 'stretch' ? 'flex-grow' : null, isSelected
            ? variants$9[color !== null && color !== void 0 ? color : groupColor].selected
            : variants$9[color !== null && color !== void 0 ? color : groupColor].unselected, sizes$a[size !== null && size !== void 0 ? size : groupSize].root), disabled: isDisabled, id: id, onClick: handleSelectTab, role: "tab", value: value },
        React__default['default'].createElement("div", { className: clsx__default['default']('flex justify-center items-center', adornmentPosition === 'vertical' ? 'flex-col' : '') },
            StartAdornment ? (React__default['default'].createElement("span", { className: clsx__default['default']('flex items-center justify-center', sizes$a[size !== null && size !== void 0 ? size : groupSize].icon) },
                React__default['default'].createElement(StartAdornment, { color: "inherit" }))) : null,
            ((_b = children === null || children === void 0 ? void 0 : children.type) === null || _b === void 0 ? void 0 : _b.uiName) === 'SvgIcon' ? (React__default['default'].createElement("span", { className: sizes$a[size !== null && size !== void 0 ? size : groupSize].icon }, children)) : (React__default['default'].createElement("span", { className: size === 'small' ? 'px-1' : 'px-2' }, children)))));
}
Tab.Group = Group$5;

function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}

var ActionTypes$6;
(function (ActionTypes) {
    ActionTypes[ActionTypes["MoveColumn"] = 0] = "MoveColumn";
    ActionTypes[ActionTypes["SortColumn"] = 1] = "SortColumn";
    ActionTypes[ActionTypes["ToggleColumn"] = 2] = "ToggleColumn";
    ActionTypes[ActionTypes["UpdateColumns"] = 3] = "UpdateColumns";
    ActionTypes[ActionTypes["FilterChange"] = 4] = "FilterChange";
    ActionTypes[ActionTypes["ToggleRow"] = 5] = "ToggleRow";
    ActionTypes[ActionTypes["ToggleRows"] = 6] = "ToggleRows";
    ActionTypes[ActionTypes["UpdateRows"] = 7] = "UpdateRows";
    ActionTypes[ActionTypes["UpdateRowActions"] = 8] = "UpdateRowActions";
    ActionTypes[ActionTypes["ChangeLimit"] = 9] = "ChangeLimit";
    ActionTypes[ActionTypes["FirstPage"] = 10] = "FirstPage";
    ActionTypes[ActionTypes["NextPage"] = 11] = "NextPage";
    ActionTypes[ActionTypes["PreviousPage"] = 12] = "PreviousPage";
    ActionTypes[ActionTypes["UpdateLoading"] = 13] = "UpdateLoading";
    ActionTypes[ActionTypes["UpdateScrolling"] = 14] = "UpdateScrolling";
    ActionTypes[ActionTypes["UpdateScrollable"] = 15] = "UpdateScrollable";
    ActionTypes[ActionTypes["UpdateDense"] = 16] = "UpdateDense";
    ActionTypes[ActionTypes["UpdateSelectable"] = 17] = "UpdateSelectable";
})(ActionTypes$6 || (ActionTypes$6 = {}));

function useForwardClick(ref, selector) {
    var handleClick = function (event) {
        var _a;
        if (event.target === ref.current) {
            event.preventDefault();
            (_a = ref.current.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    var handleKeyDown = function (event) {
        var _a;
        if ((event.key === Keys.Enter || event.key === Keys.Space) && ref.current) {
            event.preventDefault();
            (_a = ref.current.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.click();
        }
    };
    return { handleClick: handleClick, handleKeyDown: handleKeyDown };
}

(function (Directions) {
    Directions[Directions["Left"] = 0] = "Left";
    Directions[Directions["Right"] = 1] = "Right";
    Directions[Directions["Ascending"] = 2] = "Ascending";
    Directions[Directions["Descending"] = 3] = "Descending";
})(exports.Directions || (exports.Directions = {}));

var _a$7;
/**
 * Partition columns into selected (visible) and unselected (hidden) groups
 *
 * @param columns
 * @returns GroupedTableColumns
 */
var partition = function (columns) {
    return columns.reduce(function (previous, current) {
        if (current.selected) {
            previous.selected.push(current);
        }
        else {
            previous.unselected.push(current);
        }
        return previous;
    }, { selected: [], unselected: [] });
};
/**
 * Populate columns from localStorage if available
 *
 * @param defaultColumns
 * @param initialRender
 * @param storageKey
 * @returns TableColumn[]
 */
var populate = function (defaultColumns, initialRender, storageKey) {
    if (storageKey && initialRender) {
        var serializedColumns = window.localStorage.getItem(storageKey);
        if (serializedColumns) {
            var storedColumns_1 = JSON.parse(serializedColumns);
            var newColumns = defaultColumns.filter(function (defaultColumn) {
                return !storedColumns_1.some(function (storedColumn) { return defaultColumn.key === storedColumn.key; });
            });
            return storedColumns_1
                .filter(function (storedColumn) {
                return defaultColumns.find(function (defaultColumn) { return defaultColumn.key === storedColumn.key; });
            })
                .map(function (storedColumn) {
                var defaultColumn = defaultColumns.find(function (defaultColumn) { return defaultColumn.key === storedColumn.key; });
                var column = __assign(__assign({}, storedColumn), { value: (defaultColumn === null || defaultColumn === void 0 ? void 0 : defaultColumn.value) || storedColumn.value });
                if ((defaultColumn === null || defaultColumn === void 0 ? void 0 : defaultColumn.width) !== undefined) {
                    column.width = defaultColumn.width;
                }
                else {
                    // Remove width if default doesn't specify one, to reflect current code intention
                    delete column.width;
                }
                if (defaultColumn === null || defaultColumn === void 0 ? void 0 : defaultColumn.filter) {
                    column.filter = __spreadArray([], defaultColumn.filter, true);
                }
                return column;
            })
                .concat(newColumns);
        }
    }
    return defaultColumns;
};
var reducers$7 = (_a$7 = {},
    _a$7[ActionTypes$6.ChangeLimit] = function (state, action) {
        // 1-based index of the first visible row on the current page
        var anchoredFirstRowIndex = (state.page - 1) * state.limit + 1;
        var newLimit = action.limit;
        var newPage = Math.ceil(anchoredFirstRowIndex / newLimit);
        return __assign(__assign({}, state), { limit: newLimit, page: newPage });
    },
    _a$7[ActionTypes$6.FilterChange] = function (state, action) {
        var columns = __spreadArray(__spreadArray([], state.columns.selected, true), state.columns.unselected, true);
        return __assign(__assign({}, state), { columns: partition(columns.map(function (column) {
                var _a;
                if (column.key === action.key) {
                    (_a = column.filter) === null || _a === void 0 ? void 0 : _a.map(function (filter) {
                        var _a;
                        if (filter.value === action.value) {
                            filter.checked = action.checked;
                            (_a = state.onFilterChange) === null || _a === void 0 ? void 0 : _a.call(state, {
                                columnKey: action.key,
                                value: action.value,
                                checked: action.checked,
                            });
                        }
                        return filter;
                    });
                }
                return column;
            })) });
    },
    _a$7[ActionTypes$6.FirstPage] = function (state) { return (__assign(__assign({}, state), { page: 1 })); },
    _a$7[ActionTypes$6.MoveColumn] = function (state, action) {
        var columns = state.columns.selected;
        if (state.selectable) {
            columns = columns.slice(1);
        }
        var oldIndex = columns.findIndex(function (column) { return column.key === action.key; });
        var newIndex = action.direction === exports.Directions.Left ? oldIndex - 1 : oldIndex + 1;
        columns.splice(newIndex, 0, columns.splice(oldIndex, 1)[0]);
        return __assign(__assign({}, state), { columns: partition(__spreadArray(__spreadArray(__spreadArray([], (state.selectable ? [state.columns.selected[0]] : []), true), columns, true), state.columns.unselected, true)) });
    },
    _a$7[ActionTypes$6.NextPage] = function (state) { return (__assign(__assign({}, state), { page: state.page + 1 })); },
    _a$7[ActionTypes$6.PreviousPage] = function (state) { return (__assign(__assign({}, state), { page: state.page - 1 })); },
    _a$7[ActionTypes$6.SortColumn] = function (state, action) {
        var columns = __spreadArray(__spreadArray([], state.columns.selected, true), state.columns.unselected, true);
        return __assign(__assign({}, state), { columns: partition(columns.map(function (column) {
                var _a;
                if (column.key === action.key) {
                    column.sort = action.direction;
                    (_a = state.onSort) === null || _a === void 0 ? void 0 : _a.call(state, {
                        direction: column.sort,
                        key: action.key,
                    });
                }
                else {
                    column.sort = undefined;
                }
                return column;
            })), page: 1 });
    },
    _a$7[ActionTypes$6.ToggleColumn] = function (state, action) {
        var columns = __spreadArray(__spreadArray([], state.columns.selected, true), state.columns.unselected, true);
        state.columns.selected.forEach(function (column, index, columns) {
            if (column.key === action.key) {
                var focusable = columns[index + 1] || columns[index - 1];
                var element = document.querySelector("th[data-key=\"".concat(focusable.key, "\"]"));
                element === null || element === void 0 ? void 0 : element.focus();
                element === null || element === void 0 ? void 0 : element.setAttribute('tabIndex', '0');
            }
        });
        return __assign(__assign({}, state), { columns: partition(columns.map(function (column) {
                if (column.key === action.key) {
                    column.selected = !column.selected;
                }
                return column;
            })) });
    },
    _a$7[ActionTypes$6.ToggleRow] = function (state, action) {
        var rows = state.rows.map(function (row) {
            if (row.id === action.key) {
                row.selected = !row.selected;
                if (action.selectionsRef === undefined) {
                    return row;
                }
                if (row.selected) {
                    action.selectionsRef.current.push(row.id);
                }
                else {
                    var deselectedRow = action.selectionsRef.current.indexOf(row.id);
                    action.selectionsRef.current.splice(deselectedRow, 1);
                }
            }
            return row;
        });
        if (state.onSelect) {
            state.onSelect(state.rows.filter(function (row) { return row.selected; }));
        }
        return __assign(__assign({}, state), { rows: rows });
    },
    _a$7[ActionTypes$6.ToggleRows] = function (state, action) {
        var rows = state.rows.map(function (row) {
            row.selected = action.status === 'checked';
            if (action.selectionsRef === undefined) {
                return row;
            }
            if (row.selected && action.selectionsRef.current.indexOf(row.id) === -1) {
                action.selectionsRef.current.push(row.id);
            }
            if (!row.selected) {
                var deselectedRow = action.selectionsRef.current.indexOf(row.id);
                action.selectionsRef.current.splice(deselectedRow, 1);
            }
            return row;
        });
        if (state.onSelect) {
            state.onSelect(state.rows.filter(function (row) { return row.selected; }));
        }
        return __assign(__assign({}, state), { rows: rows });
    },
    _a$7[ActionTypes$6.UpdateRows] = function (state, action) {
        var selectedRows = state.rows.filter(function (row) { return row.selected; });
        if (selectedRows.length > 0) {
            var _loop_1 = function (selectedRow) {
                var index = action.rows.findIndex(function (row) { return row.id === selectedRow.id; });
                if (index > -1) {
                    action.rows[index].selected = true;
                }
            };
            for (var _i = 0, selectedRows_1 = selectedRows; _i < selectedRows_1.length; _i++) {
                var selectedRow = selectedRows_1[_i];
                _loop_1(selectedRow);
            }
        }
        if (action.selectionsRef) {
            action.selectionsRef.current = action.selectionsRef.current.filter(function (selectedRow) {
                return action.rows.find(function (row) { return row.id === selectedRow; }) !== undefined;
            });
        }
        var page = state.page;
        if (action.total < (state.page - 1) * state.limit + 1) {
            page = Math.ceil(action.total / state.limit);
        }
        else if (action.rows.length === 0 && state.page > 1) {
            page = state.page - 1;
        }
        return __assign(__assign({}, state), { page: page > 0 ? page : 1, rows: action.rows, total: action.total });
    },
    _a$7[ActionTypes$6.UpdateRowActions] = function (state, action) {
        return __assign(__assign({}, state), { rowActions: action.rowActions });
    },
    _a$7[ActionTypes$6.UpdateLoading] = function (state, action) {
        return __assign(__assign({}, state), { loading: action.loading });
    },
    _a$7[ActionTypes$6.UpdateColumns] = function (state, action) {
        return __assign(__assign({}, state), { columns: action.columns });
    },
    _a$7[ActionTypes$6.UpdateScrolling] = function (state, actions) {
        return __assign(__assign({}, state), { isScrolling: actions.isScrolling });
    },
    _a$7[ActionTypes$6.UpdateScrollable] = function (state, actions) {
        return __assign(__assign({}, state), { scrollable: actions.scrollable });
    },
    _a$7[ActionTypes$6.UpdateDense] = function (state, actions) {
        return __assign(__assign({}, state), { dense: actions.dense });
    },
    _a$7[ActionTypes$6.UpdateSelectable] = function (state, actions) {
        var columns = {
            selected: __spreadArray([], state.columns.selected, true),
            unselected: __spreadArray([], state.columns.unselected, true),
        };
        // If selectable is being set to false, remove the checkbox column
        if (!actions.selectable) {
            var checkboxIndex = columns.selected.findIndex(function (column) { return column.key === 'checkbox'; });
            if (checkboxIndex !== -1) {
                columns.selected = __spreadArray(__spreadArray([], columns.selected.slice(0, checkboxIndex), true), columns.selected.slice(checkboxIndex + 1), true);
            }
        }
        // If selectable is being set to true, Head.tsx will handle adding the checkbox column
        return __assign(__assign({}, state), { columns: columns, selectable: actions.selectable });
    },
    _a$7);
var runReducer$7 = function (state, action) {
    return reducers$7[action.type](state, action);
};
var TableContext = React.createContext(null);
var useTable = function () {
    return React.useContext(TableContext);
};

var getWidthStyle = function (width) {
    if (width === undefined || width === null || isNaN(Number(width))) {
        return {};
    }
    return { width: "".concat(width, "%") };
};
function ColumnHeader(_a) {
    var _b;
    var key = _a["data-key"], _c = _a.dense, dense = _c === void 0 ? false : _c, children = _a.children, sort = _a.sort, _d = _a.sticky, sticky = _d === void 0 ? false : _d, _e = _a.tabIndex, tabIndex = _e === void 0 ? -1 : _e, width = _a.width;
    var ref = React.useRef(null);
    var state = useTable()[0];
    var buttonActions = useForwardClick(ref, 'button');
    var checkboxActions = useForwardClick(ref, 'input[type="checkbox"]');
    // @ts-expect-error The type property will exist on any ReactElement that is passed as a child, but will not
    // exist on any other object. Typescript however, will not obey `hasOwnProperty` checks, so we need to
    // ignore this error until we can determine a better interface
    var checkable = children && children.type === Checkbox;
    var shouldBeSticky = sticky &&
        (state.columns.unselected.length > 0 ||
            Number((_b = state.rowActions) === null || _b === void 0 ? void 0 : _b.length) > 0);
    return (React__default['default'].createElement("th", { "aria-sort": sort === exports.Directions.Ascending
            ? 'ascending'
            : sort === exports.Directions.Descending
                ? 'descending'
                : undefined, className: clsx__default['default']('px-4 text-left border-b border-r last:border-r-0 focus:outline-none last:px-4.5 last:w-[.1%] bg-black-5-hex', dense ? null : state.dense ? 'py-1.5' : 'py-3', checkable ? 'pl-3.5 pr-1.5' : null, state.selectable ? 'first:w-[.1%] first:border-r-0' : 'first:pl-6', shouldBeSticky
            ? 'sticky right-0 sticky-column overflow-visible border-black-10-hex hover:bg-black-10-hex focus:bg-black-10-hex active:bg-black-15-hex'
            : 'border-black-10 hover:bg-black-10-hex focus:bg-black-10-hex active:bg-black-15-hex'), "data-key": key, onClick: checkable ? checkboxActions.handleClick : buttonActions.handleClick, onKeyDown: checkable ? checkboxActions.handleKeyDown : buttonActions.handleKeyDown, ref: ref, 
        // Can't put into className as it contains a dynamic arbitrary variable that tailwind
        // can't process.
        style: getWidthStyle(width), tabIndex: tabIndex }, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            // @ts-expect-error The only current use case here is for the Table component where
            // we nest the `Menu`, `AddColumn` and `Checkbox.Input` components inside of the
            // `ColumnHeader`. While the `Checkbox.Input` component does not accept a
            // `focusRef`, the other two do. React will silently discard this prop
            // when it's not appropriate, but the types required for Typescript
            // to not complain are completely internal to that file, so we
            // will be ignoring this error.
            //
            // @see file://./Head.tsx
            return React.cloneElement(child, { focusRef: ref });
        }
        return child;
    })));
}

var toDate = function (value) {
    var dateTime = '';
    if (value instanceof Date) {
        dateTime = dateFns.format(value, 'PP p');
    }
    if (typeof value === 'number') {
        dateTime = dateFns.format(dateFns.fromUnixTime(value), 'PP p');
    }
    return dateTime;
};
function Cell(_a) {
    var _b;
    var children = _a.children, _c = _a.selected, selected = _c === void 0 ? false : _c, _d = _a.sticky, sticky = _d === void 0 ? false : _d, width = _a.width;
    var ref = React.useRef(null);
    var state = useTable()[0];
    var actions = useForwardClick(ref, 'input[type="checkbox"]');
    // @ts-expect-error The type property will exist on any ReactElement that is passed as a child, but will not
    // exist on any other object. Typescript however, will not obey `hasOwnProperty` checks, so we need to
    // ignore this error until we can determine a better interface
    var checkable = children && children.type === Checkbox;
    var dateable = (typeof children === 'number' || children instanceof Date) &&
        dateFns.isValid(children);
    var shouldBeSticky = sticky &&
        (state.columns.unselected.length > 0 ||
            Number((_b = state.rowActions) === null || _b === void 0 ? void 0 : _b.length) > 0);
    return (React__default['default'].createElement("td", { className: clsx__default['default']('px-4 text-left border-r last:border-r-0 border-black-10 focus:outline-none', selected ? (sticky ? 'bg-black-5-hex' : 'bg-black-5') : 'bg-white-100', checkable ? 'pl-3.5 pr-1.5' : state.dense ? 'py-1.5' : 'py-3', state.selectable ? 'first:w-[.1%] first:border-r-0' : 'first:pl-6', shouldBeSticky
            ? 'sticky right-0 sticky-column overflow-visible group-hover:bg-black-5-hex focus:bg-black-5-hex border-l'
            : 'group-hover:bg-black-5 focus:bg-black-5'), onClick: checkable ? actions.handleClick : undefined, onKeyDown: checkable ? actions.handleKeyDown : undefined, ref: ref, role: "gridcell", style: getWidthStyle(width), tabIndex: -1 },
        React__default['default'].createElement(Typography, { variant: "body2" }, dateable ? toDate(children) : children)));
}

function Body() {
    var _a;
    var intl = reactIntl.useIntl();
    var _b = useTable(), state = _b[0], dispatch = _b[1];
    if (state.selectable) {
        var column_1 = state.columns.selected.find(function (column) { return column.key !== 'checkbox'; });
        state.rows = state.rows.map(function (row) {
            var handleChange = function () {
                dispatch({
                    type: ActionTypes$6.ToggleRow,
                    key: row.id,
                    selectionsRef: state.selectionsRef,
                });
            };
            return __assign(__assign({}, row), { checkbox: (React__default['default'].createElement(Checkbox.Input, { "aria-label": intl.formatMessage({ id: 'Table.select_row' }, { row: "".concat(row[column_1.key]) }), defaultChecked: row.selected, onChange: handleChange, tabIndex: -1 })) });
        });
    }
    var hasRowActions = (_a = state.rowActions) === null || _a === void 0 ? void 0 : _a.length;
    return (React__default['default'].createElement("tbody", null, state.loading ? (React__default['default'].createElement("tr", { className: "absolute inset-0 flex items-center justify-center mt-32" },
        React__default['default'].createElement("td", null,
            React__default['default'].createElement(Progress, { variant: "circular" },
                React__default['default'].createElement(Progress.Description, null,
                    React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Ui.loading" })))))) : (state.rows.slice(0, Number(state.limit)).map(function (row) {
        var _a, _b, _c;
        var showRowAction = hasRowActions &&
            ((_a = state.rowActions) === null || _a === void 0 ? void 0 : _a.some(function (action) { return action.enabled === undefined || action.enabled(row); }));
        return (React__default['default'].createElement("tr", { "aria-selected": state.selectable
                ? (row === null || row === void 0 ? void 0 : row.selected)
                    ? 'true'
                    : 'false'
                : undefined, className: "border-b border-black-10 last:border-b-0 group", key: row.id },
            state.columns.selected.map(function (column) { return (React__default['default'].createElement(Cell, { key: column.key, selected: row === null || row === void 0 ? void 0 : row.selected }, row[column.key] ? (row[column.key]) : (React__default['default'].createElement("span", { className: "text-black-45" },
                React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Table.not_specified" }))))); }),
            state.staticColumns && !hasRowActions ? null : (React__default['default'].createElement(Cell, { selected: row === null || row === void 0 ? void 0 : row.selected, sticky: true }, showRowAction ? (React__default['default'].createElement(Menu, { placement: "bottom-end" },
                React__default['default'].createElement(Menu.Button, { icon: true, label: intl.formatMessage({ id: 'Table.more_actions' }) },
                    React__default['default'].createElement(MoreVert, null)),
                React__default['default'].createElement(Menu.Items, null, (_c = (_b = state.rowActions) === null || _b === void 0 ? void 0 : _b.filter(function (action) {
                    if (action.enabled) {
                        return action.enabled(row);
                    }
                    return true;
                })) === null || _c === void 0 ? void 0 : _c.map(function (action) {
                    var onClick = function () {
                        action.handler(row);
                    };
                    return (React__default['default'].createElement("div", { className: "text-black-60", key: "".concat(row.id, "-").concat(action.label) },
                        React__default['default'].createElement(Menu.Item, { onClick: onClick, startAdornment: action.startAdornment },
                            React__default['default'].createElement("div", { className: "text-black-90" }, action.label))));
                })))) : null))));
    }))));
}

var ArrowForward = createSvgIcon(React__default['default'].createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" }), 'ArrowForward');

var ArrowUpward = createSvgIcon(React__default['default'].createElement("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" }), 'ArrowUpward');

function AddColumn(_a) {
    var actions = _a.actions, focusRef = _a.focusRef;
    var intl = reactIntl.useIntl();
    var state = useTable()[0];
    var fallback = React.useRef(state.columns.selected[0]);
    var ref = React.useRef({
        focus: function (options) {
            var _a;
            if (focusRef === null || focusRef === void 0 ? void 0 : focusRef.current) {
                focusRef.current.focus(options);
            }
            else {
                var header = document.querySelector("th[data-key=\"".concat(fallback.current.key, "\"]"));
                var row = header.parentElement;
                var table = (_a = row.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                var cells = table.rows[row.rowIndex].cells;
                cells[cells.length - 1].focus();
            }
        },
    });
    React.useEffect(function () {
        fallback.current = state.columns.selected[0];
    }, [state.columns.selected]);
    return (React__default['default'].createElement(Menu, { focusRef: ref, placement: "bottom-end" },
        React__default['default'].createElement(Menu.Button, { disabled: state.columns.unselected.length === 0, icon: true, label: intl.formatMessage({ id: 'Table.add_column' }), tabIndex: -1 },
            React__default['default'].createElement(Add, null)),
        React__default['default'].createElement(Menu.Items, null,
            React__default['default'].createElement(Menu.Group, { label: intl.formatMessage({ id: 'Table.add_column' }) }, state.columns.unselected.map(function (column) { return (React__default['default'].createElement(Menu.Item, { "data-key": column.key, key: column.key, onClick: actions.addColumn }, column.value)); })))));
}
function Head() {
    var _a;
    var intl = reactIntl.useIntl();
    var isInitial = useInitialRender();
    var _b = useTable(), state = _b[0], dispatch = _b[1];
    var actions = {
        addColumn: function (event) {
            dispatch({
                type: ActionTypes$6.ToggleColumn,
                key: event.currentTarget.dataset.key,
            });
        },
        hide: function (event) {
            dispatch({
                type: ActionTypes$6.ToggleColumn,
                key: event.currentTarget.dataset.key,
            });
        },
        filterChange: function (event) {
            dispatch({
                checked: event.currentTarget.checked,
                key: event.currentTarget.dataset.key,
                type: ActionTypes$6.FilterChange,
                value: event.currentTarget.name,
            });
        },
        moveLeft: function (event) {
            dispatch({
                type: ActionTypes$6.MoveColumn,
                direction: exports.Directions.Left,
                key: event.currentTarget.dataset.key,
            });
        },
        moveRight: function (event) {
            dispatch({
                type: ActionTypes$6.MoveColumn,
                direction: exports.Directions.Right,
                key: event.currentTarget.dataset.key,
            });
        },
        sortAscending: function (event) {
            dispatch({
                type: ActionTypes$6.SortColumn,
                direction: exports.Directions.Ascending,
                key: event.currentTarget.dataset.key,
            });
        },
        sortDescending: function (event) {
            dispatch({
                type: ActionTypes$6.SortColumn,
                direction: exports.Directions.Descending,
                key: event.currentTarget.dataset.key,
            });
        },
    };
    if (state.selectable) {
        var checked = state.rows.filter(function (row) { return row === null || row === void 0 ? void 0 : row.selected; });
        var handleChange = function (event) {
            var status = event.target.checked ? 'checked' : 'unchecked';
            dispatch({
                type: ActionTypes$6.ToggleRows,
                status: status,
                selectionsRef: state.selectionsRef,
            });
        };
        var checkbox = {
            key: 'checkbox',
            selected: true,
            value: (React__default['default'].createElement(Checkbox.Input, { "aria-label": intl.formatMessage({ id: 'Table.select_all' }), defaultChecked: checked.length === state.rows.length && state.rows.length > 0, indeterminate: checked.length > 0 && checked.length < state.rows.length, onChange: handleChange, tabIndex: -1 })),
        };
        if (isInitial) {
            state.columns.selected = __spreadArray([checkbox], state.columns.selected, true);
        }
        else {
            var index = state.columns.selected.findIndex(function (column) { return column.key === 'checkbox'; });
            if (index === -1) {
                state.columns.selected = __spreadArray([checkbox], state.columns.selected, true);
            }
            else {
                var columns = state.columns.selected.slice(0);
                columns[0] = checkbox;
                state.columns.selected = columns;
            }
        }
    }
    var hasRowActions = (_a = state.rowActions) === null || _a === void 0 ? void 0 : _a.length;
    return (React__default['default'].createElement("thead", { className: clsx__default['default']('z-10 transition-shadow duration-150 ease-in', state.scrollable ? 'sticky top-0' : '', state.isScrolling ? 'shadow-3' : 'shadow-0') }, state.loading ? null : (React__default['default'].createElement("tr", null,
        state.columns.selected.map(function (column, index, columns) { return (React__default['default'].createElement(ColumnHeader, { "data-key": column.key, dense: column.key === 'checkbox', key: column.key, sort: column.sort, tabIndex: index === 0 ? 0 : -1, width: column.width }, column.key === 'checkbox' ? (column.value) : state.staticColumns ? (React__default['default'].createElement(ColumnHeaderContent, { column: column, menu: false })) : (React__default['default'].createElement(Menu, { headless: true },
            React__default['default'].createElement(Menu.Button, { tabIndex: -1 },
                React__default['default'].createElement(ColumnHeaderContent, { column: column })),
            React__default['default'].createElement(Menu.Items, null,
                column.filter ? (React__default['default'].createElement(Menu.Group, null,
                    React__default['default'].createElement(Menu.Item, { "data-key": column.key, onClick: actions.sortAscending, startAdornment: FilterList },
                        React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Table.filter" }),
                        React__default['default'].createElement(Menu, null,
                            React__default['default'].createElement(Menu.Items, null,
                                React__default['default'].createElement(Menu.Group, null, column.filter.map(function (filter) { return (React__default['default'].createElement(Menu.Item, { checkbox: true, "data-key": column.key, defaultChecked: filter.checked, key: filter.value, onChange: actions.filterChange, value: filter.value }, filter.label)); }))))))) : null,
                React__default['default'].createElement(Menu.Group, null,
                    React__default['default'].createElement(Menu.Item, { "data-key": column.key, disabled: column.sortable === false, onClick: actions.sortAscending, startAdornment: ArrowUpward },
                        React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Table.sort_ascending" })),
                    React__default['default'].createElement(Menu.Item, { "data-key": column.key, disabled: column.sortable === false, onClick: actions.sortDescending, startAdornment: ArrowDownward },
                        React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Table.sort_descending" })),
                    React__default['default'].createElement(Menu.Item, { "data-key": column.key, disabled: state.selectable ? index === 1 : index === 0, onClick: actions.moveLeft, startAdornment: ArrowBack },
                        React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Table.move_left" })),
                    React__default['default'].createElement(Menu.Item, { "data-key": column.key, disabled: index === columns.length - 1, onClick: actions.moveRight, startAdornment: ArrowForward },
                        React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Table.move_right" })),
                    React__default['default'].createElement(Menu.Item, { "data-key": column.key, disabled: columns.length === 1 ||
                            (state.selectable && columns.length === 2), onClick: actions.hide, startAdornment: VisibilityOff },
                        React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Table.hide" })))))))); }),
        state.staticColumns && !hasRowActions ? null : (React__default['default'].createElement(ColumnHeader, { dense: true, sticky: true },
            React__default['default'].createElement(AddColumn, { actions: actions })))))));
}
function ColumnHeaderContent(_a) {
    var column = _a.column, _b = _a.menu, menu = _b === void 0 ? true : _b, _c = _a.show, show = _c === void 0 ? false : _c;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Typography, { variant: "button" }, column.value),
        menu ? (React__default['default'].createElement("div", { className: "w-6 ml-2 text-black-45" }, show ? React__default['default'].createElement(ExpandLess, null) : React__default['default'].createElement(ExpandMore, null))) : null,
        column.sort !== undefined ? (React__default['default'].createElement("div", { className: "w-4.5 ml-auto text-black-30" },
            React__default['default'].createElement(ArrowDownward, null))) : null));
}

function BaseTable(_a) {
    var children = _a.children, initialColumns = _a.columns, _b = _a.dense, dense = _b === void 0 ? false : _b, _c = _a.loading, loading = _c === void 0 ? false : _c, rowActions = _a.rowActions, rows = _a.rows, _d = _a.scrollable, scrollable = _d === void 0 ? true : _d, _e = _a.selectable, selectable = _e === void 0 ? false : _e, storageKey = _a.storageKey, total = _a.total;
    var header = React.useRef(null);
    var tableContainer = React.useRef(null);
    var _f = React.useState(0), headerBottomPosition = _f[0], setHeaderBottomPosition = _f[1];
    var locale = useLocale()[0];
    var previousLocale = usePrevious(locale);
    var _g = useTable(), state = _g[0], dispatch = _g[1];
    var handleScroll = React.useCallback(function () {
        if (!tableContainer.current || !state.scrollable) {
            return;
        }
        dispatch({
            type: ActionTypes$6.UpdateScrolling,
            isScrolling: !(tableContainer.current.scrollTop === 0),
        });
    }, [dispatch, state.scrollable]);
    var getHeaderBottomPosition = function () {
        if (header.current) {
            setHeaderBottomPosition(header.current.getBoundingClientRect().bottom);
        }
    };
    React.useEffect(function () {
        var container = tableContainer.current;
        getHeaderBottomPosition();
        if (state.scrollable) {
            container === null || container === void 0 ? void 0 : container.addEventListener('scroll', handleScroll);
        }
        window.addEventListener('resize', getHeaderBottomPosition);
        return function () {
            if (state.scrollable) {
                container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('resize', getHeaderBottomPosition);
        };
    }, [handleScroll, state.scrollable]);
    React.useEffect(function () {
        if (locale === previousLocale) {
            return;
        }
        if (initialColumns.some(function (column) { return column.filter !== undefined; })) {
            var columns_1 = __assign({}, state.columns);
            var keys_1 = ['selected', 'unselected'];
            initialColumns.forEach(function (initialColumn) {
                keys_1.forEach(function (key) {
                    var index = columns_1[key].findIndex(function (column) { return column.key === initialColumn.key && column.filter; });
                    if (index > -1) {
                        var column = columns_1[key][index];
                        if (column.filter && initialColumn.filter) {
                            column.filter = column.filter.map(function (filter) {
                                var _a, _b, _c;
                                return (__assign(__assign({}, filter), { label: (_c = (_b = (_a = initialColumn.filter) === null || _a === void 0 ? void 0 : _a.find(function (initialFilter) { return filter.value === initialFilter.value; })) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : filter.label }));
                            });
                            columns_1[key][index] = column;
                        }
                    }
                });
            });
            dispatch({
                type: ActionTypes$6.UpdateColumns,
                columns: columns_1,
            });
            if (state.selectable) {
                var index = columns_1.selected.findIndex(function (column) { return column.key === 'checkbox'; });
                columns_1.selected = __spreadArray(__spreadArray([], columns_1.selected.slice(0, index), true), columns_1.selected.slice(index + 1), true);
            }
            if (storageKey) {
                window.localStorage.setItem(storageKey, JSON.stringify(__spreadArray(__spreadArray([], columns_1.selected, true), columns_1.unselected, true)));
            }
        }
    }, [
        dispatch,
        initialColumns,
        locale,
        previousLocale,
        state.selectable,
        state.columns,
        storageKey,
    ]);
    React.useEffect(function () {
        if (storageKey) {
            var columns = __assign({}, state.columns);
            if (state.selectable) {
                var index = columns.selected.findIndex(function (column) { return column.key === 'checkbox'; });
                columns.selected = __spreadArray(__spreadArray([], columns.selected.slice(0, index), true), columns.selected.slice(index + 1), true);
            }
            window.localStorage.setItem(storageKey, JSON.stringify(__spreadArray(__spreadArray([], columns.selected, true), columns.unselected, true)));
        }
    }, [state.selectable, state.columns, storageKey]);
    React.useEffect(function () {
        dispatch({
            type: ActionTypes$6.UpdateRows,
            rows: rows,
            selectionsRef: state.selectionsRef,
            total: total,
        });
    }, [dispatch, rows, state.selectionsRef, total]);
    React.useEffect(function () {
        dispatch({
            type: ActionTypes$6.UpdateRowActions,
            rowActions: rowActions,
        });
    }, [dispatch, rowActions]);
    React.useEffect(function () {
        dispatch({
            type: ActionTypes$6.UpdateLoading,
            loading: loading,
        });
    }, [dispatch, loading]);
    React.useEffect(function () {
        dispatch({
            type: ActionTypes$6.UpdateScrollable,
            scrollable: scrollable,
        });
    }, [dispatch, scrollable]);
    React.useEffect(function () {
        dispatch({
            type: ActionTypes$6.UpdateDense,
            dense: dense,
        });
    }, [dense, dispatch]);
    React.useEffect(function () {
        dispatch({
            type: ActionTypes$6.UpdateSelectable,
            selectable: selectable,
        });
    }, [dispatch, selectable]);
    var handleKeyDown = function (event) {
        var _a, _b, _c;
        var cell = event.target;
        var row = cell.parentElement;
        var table = (_a = row.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        var cellIndex = cell.cellIndex;
        var rowIndex = row.rowIndex;
        if (cellIndex === undefined || rowIndex === undefined) {
            return;
        }
        var newCell;
        switch (event.key) {
            case Keys.ArrowDown:
                newCell = (_b = table.rows[rowIndex + 1]) === null || _b === void 0 ? void 0 : _b.cells[cellIndex];
                break;
            case Keys.ArrowUp:
                newCell = (_c = table.rows[rowIndex - 1]) === null || _c === void 0 ? void 0 : _c.cells[cellIndex];
                break;
            case Keys.ArrowRight:
                newCell = table.rows[rowIndex].cells[cellIndex + 1];
                break;
            case Keys.ArrowLeft:
                newCell = table.rows[rowIndex].cells[cellIndex - 1];
                break;
        }
        if (newCell) {
            newCell.focus();
            newCell.setAttribute('tabIndex', '0');
            cell.setAttribute('tabIndex', '-1');
        }
    };
    var viewportHeight = window.innerHeight;
    var headerHeight = header.current
        ? header.current.getBoundingClientRect().height
        : 0;
    // Tables within the viewport have heights that rely on the bottom position of the header.
    // However, to give other tables (beyond the viewport) the same height, we need to rely on the height of the header instead.
    var isBelowViewport = headerBottomPosition > viewportHeight;
    // Calculate maxHeight only if scrollable is enabled
    var maxHeight = scrollable
        ? isBelowViewport
            ? "calc(".concat(viewportHeight - headerHeight, "px)")
            : "calc(".concat(viewportHeight - headerBottomPosition, "px)")
        : undefined;
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement("header", { className: "divide-y divide-black-10 bg-white-100", ref: header }, children),
        React__default['default'].createElement("section", { className: "w-full max-w-full" },
            React__default['default'].createElement("div", { className: scrollable ? 'overflow-auto' : '', ref: tableContainer, style: { maxHeight: maxHeight } },
                React__default['default'].createElement("table", { cellPadding: 0, className: "w-full font-sans border-spacing-0", onKeyDown: handleKeyDown, role: "grid" },
                    React__default['default'].createElement(Head, null),
                    React__default['default'].createElement(Body, null))))));
}

function BulkActions(_a) {
    var children = _a.children;
    var state = useTable()[0];
    var selected = state.rows.filter(function (row) { return row.selected; }).length;
    return (React__default['default'].createElement("div", { className: "flex items-center py-px" },
        React__default['default'].createElement(Typography, { component: "p", variant: "subtitle2" },
            React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Ui.number_selected", values: { number: selected } })),
        React__default['default'].createElement("div", { className: "ml-6 items-center flex space-x-3" }, children)));
}

function GlobalActions(_a) {
    var children = _a.children;
    return React__default['default'].createElement("div", { className: "flex items-center space-x-2" }, children);
}

function Title$3(_a) {
    var children = _a.children;
    return (React__default['default'].createElement(Typography, { component: "h1", variant: "h5" }, children));
}

function Header$2(_a) {
    var children = _a.children;
    var state = useTable()[0];
    var components = {
        bulkActions: null,
        globalActions: null,
        title: null,
    };
    // TODO: This is written like this because Typescript complains when trying to access `child.type.name`. We need to figure out a way to type the child appropriately.
    React.Children.forEach(children, function (child) {
        switch (child.type) {
            case BulkActions:
                components.bulkActions = child;
                break;
            case GlobalActions:
                components.globalActions = child;
                break;
            case Title$3:
                components.title = child;
                break;
        }
    });
    var bulkable = state.rows.filter(function (row) { return row.selected; }).length > 0 &&
        components.bulkActions;
    if (bulkable) {
        return (React__default['default'].createElement("div", { className: "px-6 py-4 bg-primary-20" }, components.bulkActions));
    }
    return (React__default['default'].createElement("div", { className: "flex items-center justify-between px-6 py-4" },
        components.title,
        components.globalActions));
}

var computeRowStart = function (state) {
    return state.rows.length > 0 ? (state.page - 1) * state.limit + 1 : 0;
};
var computeRowEnd = function (start, count) {
    return count > 0 ? start + count - 1 : 0;
};
/**
 * Determine if the current state has a sentinel row (i.e., more rows than the limit)
 * indicating more data is available.
 */
var hasSentinel = function (state) {
    return state.rows.length > state.limit;
};
var buildEmptyMeta = function (state) { return ({
    end: 0,
    hasNext: false,
    hasPrev: false,
    pagination: state.pagination,
    start: 0,
    total: 0,
}); };
var buildSimpleMeta = function (state) {
    var start = computeRowStart(state);
    var sentinel = hasSentinel(state);
    var hasPrev = start > 1;
    // We return one extra row as a sentinel to indicate more data is available so this check is necessary.
    var visibleCount = sentinel ? state.limit : state.rows.length;
    var end = computeRowEnd(start, visibleCount);
    var total = sentinel ? undefined : end;
    return {
        end: end,
        hasNext: sentinel,
        hasPrev: hasPrev,
        pagination: 'simple',
        start: start,
        total: total,
    };
};
var buildLengthAwareMeta = function (state) {
    var start = computeRowStart(state);
    var hasPrev = start > 1;
    var hasNext = state.page * state.limit < state.total;
    var remaining = state.total - start + 1;
    var visibleCount = Math.min(state.limit, remaining);
    var end = computeRowEnd(start, visibleCount);
    return {
        end: end,
        hasNext: hasNext,
        hasPrev: hasPrev,
        pagination: 'lengthAware',
        start: start,
        total: state.total,
    };
};
var computePaginationMeta = function (state) {
    if (state.rows.length === 0) {
        return buildEmptyMeta(state);
    }
    return state.pagination === 'simple'
        ? buildSimpleMeta(state)
        : buildLengthAwareMeta(state);
};
function Position(_a) {
    var loading = _a.loading, meta = _a.meta;
    var intl = reactIntl.useIntl();
    if (loading) {
        return (React__default['default'].createElement("span", { className: "inline-flex w-24 align-middle" },
            React__default['default'].createElement(Skeleton, { "aria-label": intl.formatMessage({ id: 'Table.pagination_loading' }), color: "light", variant: "square", width: "long" })));
    }
    if (meta.start === 0 && meta.end === 0) {
        return (React__default['default'].createElement(Typography, { component: "p", variant: "subtitle2" }, intl.formatMessage({ id: 'Ui.no_results' })));
    }
    return (React__default['default'].createElement(Typography, { component: "p", variant: "subtitle2" }, intl.formatMessage({ id: 'Table.position' }, {
        end: meta.end,
        start: meta.start,
        total: meta.total || "".concat(meta.end + 1, "+"),
    })));
}
function PaginationComponent(_a) {
    var onChange = _a.onChange;
    var intl = reactIntl.useIntl();
    var _b = useTable(), state = _b[0], dispatch = _b[1];
    var didMountRef = React.useRef(false);
    var meta = React.useMemo(function () {
        return computePaginationMeta({
            limit: state.limit,
            page: state.page,
            pagination: state.pagination,
            rows: state.rows,
            total: state.total,
        });
    }, [state.limit, state.page, state.pagination, state.rows, state.total]);
    React.useEffect(function () {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return; // skip initial mount
        }
        // Intentionally not calling onChange on every render; only when limit/page change.
        // onChange is omitted from deps because parent does not provide a stable callback.
        onChange({ limit: state.limit, page: state.page });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.limit, state.page]);
    var handleNavigate = function (nextPage) {
        if (nextPage < 1 || nextPage === state.page) {
            return;
        }
        dispatch({
            type: nextPage > state.page ? ActionTypes$6.NextPage : ActionTypes$6.PreviousPage,
        });
    };
    var handleClickNext = function () {
        if (meta.hasNext) {
            handleNavigate(state.page + 1);
        }
    };
    var handleClickPrevious = function () {
        if (meta.hasPrev) {
            handleNavigate(state.page - 1);
        }
    };
    var handleChange = function (e) {
        var nextLimit = Number(e.currentTarget.value);
        dispatch({ type: ActionTypes$6.ChangeLimit, limit: nextLimit });
    };
    if (state.rows.length === 0) {
        return (React__default['default'].createElement(Typography, { component: "p", variant: "subtitle2" },
            React__default['default'].createElement(reactIntl.FormattedMessage, { id: "Ui.no_results" })));
    }
    return (React__default['default'].createElement("div", { className: "flex items-center" },
        React__default['default'].createElement("nav", { "aria-label": intl.formatMessage({ id: 'Table.pagination' }), className: "flex items-center" },
            React__default['default'].createElement(Position, { loading: state.loading, meta: meta }),
            React__default['default'].createElement("ul", { className: "flex items-center ml-4" },
                React__default['default'].createElement("li", { className: "inline-flex" },
                    React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'Pagination.previous' }), disabled: !meta.hasPrev || state.loading, onClick: handleClickPrevious },
                        React__default['default'].createElement(ChevronLeft, null))),
                React__default['default'].createElement("li", { className: "inline-flex ml-3" },
                    React__default['default'].createElement(IconButton, { "aria-label": intl.formatMessage({ id: 'Pagination.next' }), disabled: !meta.hasNext || state.loading, onClick: handleClickNext },
                        React__default['default'].createElement(ChevronRight, null)))),
            React__default['default'].createElement("div", { className: "ml-6 min-w-40" },
                React__default['default'].createElement(Select, { defaultValue: String(state.limit), disabled: state.loading, label: intl.formatMessage({ id: 'Table.per_page' }), onChange: handleChange, size: "small" },
                    React__default['default'].createElement(Select.Option, { value: "25" }, "25"),
                    React__default['default'].createElement(Select.Option, { value: "50" }, "50"),
                    React__default['default'].createElement(Select.Option, { value: "100" }, "100"))))));
}

function Search(_a) {
    var _b = _a.defaultValue, defaultValue = _b === void 0 ? '' : _b, onChange = _a.onChange;
    var intl = reactIntl.useIntl();
    var _c = useTable(), dispatch = _c[1];
    var handleChange = function (event) {
        dispatch({ type: ActionTypes$6.FirstPage });
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    return (React__default['default'].createElement("div", { className: "ml-auto" },
        React__default['default'].createElement(TextInput, { defaultValue: defaultValue, label: intl.formatMessage({ id: 'Table.search' }), onChange: handleChange, size: "small", type: "search" })));
}

function Toolbar(_a) {
    var children = _a.children;
    var intl = reactIntl.useIntl();
    return (React__default['default'].createElement("div", { "aria-label": intl.formatMessage({ id: 'Table.actions' }), className: "flex items-center justify-between px-6 py-3" }, children));
}

function BasicTable(_a) {
    var children = _a.children, initialColumns = _a.columns, _b = _a.dense, dense = _b === void 0 ? false : _b, _c = _a.limit, limit = _c === void 0 ? 50 : _c, _d = _a.loading, loading = _d === void 0 ? false : _d, onSelect = _a.onSelect, _e = _a.pagination, pagination = _e === void 0 ? 'lengthAware' : _e, rows = _a.rows, _f = _a.scrollable, scrollable = _f === void 0 ? true : _f, _g = _a.selectable, selectable = _g === void 0 ? false : _g, selectionsRef = _a.selectionsRef, total = _a.total;
    var adjustedColumns = React.useMemo(function () {
        return initialColumns.map(function (column) { return (__assign(__assign({}, column), { selected: true, sort: undefined })); });
    }, [initialColumns]);
    var _h = React.useReducer(runReducer$7, {}, function () {
        return ({
            columns: {
                selected: adjustedColumns,
                unselected: [],
            },
            dense: dense,
            limit: limit,
            loading: loading,
            onSelect: onSelect,
            page: 1,
            pagination: pagination,
            rowActions: undefined,
            rows: rows,
            isScrolling: false,
            scrollable: scrollable,
            selectable: selectable,
            selectionsRef: selectionsRef,
            staticColumns: true,
            total: pagination === 'lengthAware' ? total || rows.length : undefined,
        });
    }), state = _h[0], dispatch = _h[1];
    return (React__default['default'].createElement(TableContext.Provider, { value: [state, dispatch] },
        React__default['default'].createElement(BaseTable, { columns: adjustedColumns, dense: dense, loading: loading, rows: rows, scrollable: scrollable, selectable: selectable, total: total }, children)));
}
BasicTable.BulkActions = BulkActions;
BasicTable.GlobalActions = GlobalActions;
BasicTable.Header = Header$2;
BasicTable.Pagination = PaginationComponent;
BasicTable.Search = Search;
BasicTable.Title = Title$3;
BasicTable.Toolbar = Toolbar;

function Table(_a) {
    var children = _a.children, initialColumns = _a.columns, _b = _a.dense, dense = _b === void 0 ? false : _b, _c = _a.limit, limit = _c === void 0 ? 50 : _c, _d = _a.loading, loading = _d === void 0 ? false : _d, onFilterChange = _a.onFilterChange, onSelect = _a.onSelect, onSort = _a.onSort, _e = _a.pagination, pagination = _e === void 0 ? 'lengthAware' : _e, rowActions = _a.rowActions, rows = _a.rows, _f = _a.scrollable, scrollable = _f === void 0 ? true : _f, _g = _a.selectable, selectable = _g === void 0 ? false : _g, selectionsRef = _a.selectionsRef, storageKey = _a.storageKey, total = _a.total;
    var initialRender = useInitialRender();
    var _h = React.useReducer(runReducer$7, {
        columns: partition(populate(initialColumns, initialRender, storageKey)),
        dense: dense,
        limit: limit,
        loading: loading,
        onFilterChange: onFilterChange,
        onSelect: onSelect,
        onSort: onSort,
        page: 1,
        pagination: pagination,
        rowActions: rowActions,
        rows: rows,
        isScrolling: false,
        scrollable: scrollable,
        selectable: selectable,
        selectionsRef: selectionsRef,
        total: pagination === 'lengthAware' ? total || rows.length : undefined,
    }), state = _h[0], dispatch = _h[1];
    return (React__default['default'].createElement(TableContext.Provider, { value: [state, dispatch] },
        React__default['default'].createElement(BaseTable, { columns: initialColumns, dense: dense, loading: loading, rowActions: rowActions, rows: rows, scrollable: scrollable, selectable: selectable, storageKey: storageKey, total: total }, children)));
}
Table.BulkActions = BulkActions;
Table.GlobalActions = GlobalActions;
Table.Header = Header$2;
Table.Pagination = PaginationComponent;
Table.Search = Search;
Table.Title = Title$3;
Table.Toolbar = Toolbar;

var sizes$b = {
    large: {
        icon: 'w-5 mr-1',
        root: 'p-1',
        text: 'font-sans text-sm font-normal leading-4',
    },
    medium: {
        icon: 'w-4 mr-1',
        root: 'p-1',
        text: 'font-sans text-xs font-normal leading-3',
    },
    small: {
        icon: 'w-3 mr-0.5',
        root: 'p-0.75',
        text: 'font-sans text-xs font-normal leading-3',
    },
};
// TODO: Make shared values for these utility colors
var colors$b = {
    blue: 'border border-sky-300 bg-sky-100 text-sky-800',
    default: "border border-zinc-300 bg-zinc-100 text-zinc-800",
    grey: "border border-gray-400 bg-gray-200 text-gray-800",
    indigo: 'border border-violet-300 bg-violet-100 text-violet-700',
    pink: 'border border-pink-300 bg-pink-100 text-pink-700',
    purple: 'border border-fuchsia-300 bg-fuchsia-100 text-fuchsia-700',
    red: 'border border-rose-300 bg-rose-100 text-rose-700',
    teal: 'border border-teal-300 bg-teal-100 text-teal-800',
    yellow: 'border border-amber-300 bg-amber-100 text-amber-800',
};
function Tag(_a) {
    var _b = _a.color, color = _b === void 0 ? 'default' : _b, label = _a.label, _c = _a.size, size = _c === void 0 ? 'medium' : _c, StartAdornment = _a.startAdornment;
    return (React__default['default'].createElement("span", { className: clsx__default['default']('rounded-sm inline-flex cursor-default', colors$b[color], sizes$b[size].root) },
        React__default['default'].createElement("span", { className: "flex items-center" },
            StartAdornment ? (React__default['default'].createElement("span", { className: clsx__default['default'](sizes$b[size].icon) },
                React__default['default'].createElement(StartAdornment, null))) : null,
            React__default['default'].createElement("span", { className: clsx__default['default']('w-full', sizes$b[size].text) }, label))));
}

function useIsMounted() {
    var isMounted = React.useRef(true);
    React.useEffect(function () {
        return function () {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}

var INTERACTIVE_NODE_NAMES = {
    a: 'ANCHOR',
    audio: 'AUDIO',
    button: 'BUTTON',
    details: 'DETAILS',
    embed: 'EMBED',
    iframe: 'IFRAME',
    img: 'IMG',
    input: 'INPUT',
    label: 'LABEL',
    select: 'SELECT',
    textarea: 'TEXTAREA',
    video: 'VIDEO',
};
/**
 * Returns if the node provided is interactive. Interactive elements
 * are a subset of HTML elements that support interaction.
 */
function isChildInteractive(node) {
    if (!node || !node.nodeName) {
        return false;
    }
    return Object.hasOwnProperty.call(INTERACTIVE_NODE_NAMES, node.nodeName.toLowerCase());
}
/**
 * Returns an element that supports interactivity, if can be found.
 * Searches to a maximum of 5 levels deep.
 */
function getInteractiveChild(element) {
    if (!element) {
        return;
    }
    var MAX_DEPTH = 5;
    // breadth-first search
    var stack = [
        { node: element, level: 0 },
    ];
    while (stack.length) {
        var item = stack.pop();
        if (!item)
            continue;
        var node = item.node, level = item.level;
        if (isChildInteractive(node)) {
            return node;
        }
        for (var _i = 0, _a = Array.from(node.childNodes); _i < _a.length; _i++) {
            var child = _a[_i];
            if (level + 1 > MAX_DEPTH) {
                continue;
            }
            stack.unshift({
                node: child,
                level: level + 1,
            });
        }
    }
    return;
}

var styles = {
    class: {
        top: 'top-0 -mt-3 -translate-y-full',
        bottom: 'bottom-0 -mb-3 translate-y-full',
        left: 'left-0 -ml-3 -mb-1 -translate-x-full',
        right: 'right-0 -mr-3 -mb-1 translate-x-full',
    },
    style: {
        top: {
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
        },
        bottom: {
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
        },
        right: {
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
        },
        left: {
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            borderTopColor: 'transparent',
        },
    },
};
function Tooltip(_a) {
    var title = _a.title, children = _a.children, _b = _a.arrow, arrow = _b === void 0 ? false : _b, _c = _a.placement, placement = _c === void 0 ? 'bottom' : _c;
    var isMounted = useIsMounted();
    var _d = React.useState(null), popper = _d[0], setPopper = _d[1];
    var _e = React.useState(null), timeoutId = _e[0], setTimeoutId = _e[1];
    var _f = React.useState('top'), arrowDirection = _f[0], setArrowDirection = _f[1];
    var _g = React.useState(false), show = _g[0], setShow = _g[1];
    var _h = React.useState(), interactive = _h[0], setInteractive = _h[1];
    var isTouch = window.matchMedia('(any-hover: none) and (any-pointer: coarse)').matches;
    var tooltipRef = React.useRef(null);
    var arrowRef = React.useRef(null);
    var hoverableRef = React.useRef(null);
    var id = "coconut-tooltip-".concat(useId());
    React.useEffect(function () {
        if (!children) {
            return;
        }
        setInteractive(getInteractiveChild(hoverableRef.current));
    }, [children]);
    var open = function () {
        var _a;
        if (timeoutId) {
            window.clearTimeout(timeoutId);
        }
        (_a = hoverableRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', closeOnEscape);
        if (hoverableRef.current && tooltipRef.current && !popper) {
            var instance = createPopper(hoverableRef.current, tooltipRef.current, {
                placement: placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                    {
                        name: 'flip',
                        options: {
                            padding: 10,
                        },
                    },
                    {
                        name: 'arrow',
                        enabled: arrow,
                        options: {
                            element: arrowRef.current,
                            padding: 10,
                        },
                    },
                    {
                        name: 'flipArrow',
                        enabled: arrow,
                        phase: 'write',
                        fn: function (_a) {
                            var state = _a.state;
                            var popperPlacement = state.placement;
                            switch (popperPlacement) {
                                case 'top':
                                case 'top-start':
                                case 'top-end':
                                    setArrowDirection('bottom');
                                    break;
                                case 'right':
                                case 'right-start':
                                case 'right-end':
                                    setArrowDirection('left');
                                    break;
                                case 'left':
                                case 'left-start':
                                case 'left-end':
                                    setArrowDirection('right');
                                    break;
                                default:
                                    setArrowDirection('top');
                            }
                        },
                    },
                    maxSize$1,
                    applyMaxSize,
                ],
            });
            setPopper(instance);
        }
        setShow(true);
    };
    var close = React.useCallback(function () {
        var id = window.setTimeout(function () {
            if (isMounted.current) {
                setShow(false);
                popper === null || popper === void 0 ? void 0 : popper.destroy();
                setPopper(null);
            }
        }, 125);
        setTimeoutId(id);
    }, [isMounted, popper]);
    var closeOnEscape = React.useCallback(function (e) {
        if (e.key === Keys.Escape) {
            return close();
        }
    }, [close]);
    var onKeyDown = React.useCallback(function (e) {
        closeOnEscape(e);
    }, [closeOnEscape]);
    React.useEffect(function () {
        document.addEventListener('keydown', onKeyDown);
        return function () { return document.removeEventListener('keydown', onKeyDown); };
    }, [onKeyDown]);
    if (title.length === 0) {
        return children;
    }
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: clsx__default['default']((interactive === null || interactive === void 0 ? void 0 : interactive.disabled) ? 'pointer-events-none' : ''), onBlur: close, onFocus: open, onMouseEnter: open, onMouseLeave: close, ref: hoverableRef }, React.Children.map(children, function (child, i) {
            if (React.isValidElement(child) && i === 0) {
                return React.cloneElement(child, {
                    'aria-describedby': id,
                });
            }
            return child;
        })),
        isTouch ? null : (React__default['default'].createElement("div", { className: clsx__default['default']('px-2.5 py-2 rounded text-white-100 bg-black-60 z-50', show ? null : 'hidden'), id: id, onBlur: close, onFocus: open, onMouseOut: close, onMouseOver: open, ref: tooltipRef, role: "tooltip" },
            React__default['default'].createElement("div", { className: "max-w-xs font-sans text-sm leading-tight" }, title),
            arrow ? (React__default['default'].createElement("div", { className: clsx__default['default']('border-6 border-black-60 w-0 h-0', styles.class[arrowDirection]), ref: arrowRef, style: styles.style[arrowDirection] })) : null))));
}

exports.Alert = Alert;
exports.Autocomplete = Autocomplete;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Banner = Banner;
exports.BasicTable = BasicTable;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Chip = Chip;
exports.Collapse = Collapse;
exports.DatePicker = DatePicker;
exports.DayPickerInput = DayPickerInput;
exports.Dialog = Dialog;
exports.Divider = Divider;
exports.IconButton = IconButton;
exports.Link = Link;
exports.List = List;
exports.Menu = Menu;
exports.MultiSelect = MultiSelect;
exports.Pagination = Pagination;
exports.Progress = Progress;
exports.Radio = Radio;
exports.RangePickerInput = RangePickerInput;
exports.Select = Select;
exports.Skeleton = Skeleton;
exports.Snackbar = Snackbar;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Table = Table;
exports.Tag = Tag;
exports.TextInput = TextInput;
exports.Tooltip = Tooltip;
exports.Typography = Typography;
exports.UiProvider = UiProvider;
exports.WeekPickerInput = WeekPickerInput;
exports.useLocale = useLocale;
//# sourceMappingURL=index.js.map
