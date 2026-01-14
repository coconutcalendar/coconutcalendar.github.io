import React from 'react';
import clsx from 'clsx';

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

var colors = {
    default: 'text-black-60',
    inherit: 'text-inherit',
    primary: 'text-primary-main',
    secondary: 'text-secondary-main',
};
function SvgIcon(_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'inherit' : _b, viewBox = _a.viewBox;
    return (React.createElement("svg", { "aria-hidden": "true", className: clsx('select-none w-full h-auto', colors[color]), fill: "currentColor", focusable: "false", viewBox: viewBox || '0 0 24 24', width: "0" }, children));
}

function createSvgIcon(path, name, viewBox) {
    var component = function (props) { return (React.createElement(SvgIcon, __assign({}, __assign(__assign({}, props), { viewBox: viewBox })), path)); };
    component.displayName = name;
    component.uiName = 'SvgIcon';
    return component;
}

var Add = createSvgIcon(React.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), 'Add');

var AddToWorkflow = createSvgIcon(React.createElement("path", { d: "M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19H17V16H14V10H17V7H21.735C21.3908 6.40084 20.7449 6 20 6ZM14 6H10V4H14V6Z M21 9V12H24V14H21V17H19V14H16V12H19V9H21Z" }), 'AddToWorkflow');

var Alarm = createSvgIcon(React.createElement("path", { d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" }), 'Alarm');

var Analytics = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "m21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55c.34-1.07-.47-2.52-1.93-2.52-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55c-1.07-.33-2.51.48-2.51 1.93 0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55c-.34 1.07.47 2.52 1.93 2.52 1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" }),
    React.createElement("path", { d: "m15 9 .94-2.07 2.06-.93-2.06-.93-.94-2.07-.92 2.07-2.08.93 2.08.93z" }),
    React.createElement("path", { d: "m3.5 11 .5-2 2-.5-2-.5-.5-2-.5 2-2 .5 2 .5z" })), 'Analytics');

var ArrowBack = createSvgIcon(React.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }), 'ArrowBack');

var ArrowDownward = createSvgIcon(React.createElement("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }), 'ArrowDownward');

var ArrowRightAlt = createSvgIcon(React.createElement("path", { d: "M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" }), 'ArrowRightAlt');

var AssignmentIndicator = createSvgIcon(React.createElement("path", { d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z" }), 'AssignmentIndicator');

var AudioDownload = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M12.1895 20L7.18945 15H3.18945V9H7.18945L12.1895 4V20ZM14.1895 7.96973C15.6695 8.70973 16.6895 10.23 16.6895 12C16.6895 12.3051 16.6564 12.6022 16.5986 12.8896C16.151 13.3001 15.8543 13.8712 15.7979 14.5098L15.791 14.6904C15.3701 15.2496 14.8225 15.7072 14.1895 16.0195V7.96973ZM14.1895 3.23047C18.1994 4.14051 21.1895 7.72004 21.1895 12C21.1895 12.9298 21.0481 13.8264 20.7861 14.6699L20.7715 14.4443C20.6631 13.5013 20.031 12.7208 19.1768 12.3955C19.1841 12.2646 19.1895 12.1328 19.1895 12C19.1895 8.83001 17.0794 6.15004 14.1895 5.29004V3.23047Z" }),
    React.createElement("path", { d: "M18.288 14.7328L18.3601 20.2057M14.8345 18.4379L18.37 21.9734M18.3601 21.9634L21.8956 18.4278", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'AudioDownload');

var BarChart = createSvgIcon(React.createElement("path", { d: "M4 20V9h4v11Zm6 0V4h4v16Zm6 0v-7h4v7Z" }), 'BarChart');

var Block = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" }), 'Block');

var Blur = createSvgIcon(React.createElement("path", { d: "M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }), 'Blur');

var BlurSlightly = createSvgIcon(React.createElement("path", { d: "M8.72727 7.09091C7.74545 7.09091 7.09091 7.74545 7.09091 8.72727C7.09091 9.70909 7.74545 10.3636 8.72727 10.3636C9.70909 10.3636 10.3636 9.70909 10.3636 8.72727C10.3636 7.74545 9.70909 7.09091 8.72727 7.09091ZM8.72727 13.6364C7.74545 13.6364 7.09091 14.2909 7.09091 15.2727C7.09091 16.2545 7.74545 16.9091 8.72727 16.9091C9.70909 16.9091 10.3636 16.2545 10.3636 15.2727C10.3636 14.2909 9.70909 13.6364 8.72727 13.6364ZM3.81818 7.90909C3.32727 7.90909 3 8.23636 3 8.72727C3 9.21818 3.32727 9.54545 3.81818 9.54545C4.30909 9.54545 4.63636 9.21818 4.63636 8.72727C4.63636 8.23636 4.30909 7.90909 3.81818 7.90909ZM8.72727 19.3636C8.23636 19.3636 7.90909 19.6909 7.90909 20.1818C7.90909 20.6727 8.23636 21 8.72727 21C9.21818 21 9.54545 20.6727 9.54545 20.1818C9.54545 19.6909 9.21818 19.3636 8.72727 19.3636ZM3.81818 14.4545C3.32727 14.4545 3 14.7818 3 15.2727C3 15.7636 3.32727 16.0909 3.81818 16.0909C4.30909 16.0909 4.63636 15.7636 4.63636 15.2727C4.63636 14.7818 4.30909 14.4545 3.81818 14.4545ZM8.72727 4.63636C9.21818 4.63636 9.54545 4.30909 9.54545 3.81818C9.54545 3.32727 9.21818 3 8.72727 3C8.23636 3 7.90909 3.32727 7.90909 3.81818C7.90909 4.30909 8.23636 4.63636 8.72727 4.63636ZM15.2727 7.09091C14.2909 7.09091 13.6364 7.74545 13.6364 8.72727C13.6364 9.70909 14.2909 10.3636 15.2727 10.3636C16.2545 10.3636 16.9091 9.70909 16.9091 8.72727C16.9091 7.74545 16.2545 7.09091 15.2727 7.09091ZM15.2727 4.63636C15.7636 4.63636 16.0909 4.30909 16.0909 3.81818C16.0909 3.32727 15.7636 3 15.2727 3C14.7818 3 14.4545 3.32727 14.4545 3.81818C14.4545 4.30909 14.7818 4.63636 15.2727 4.63636ZM20.1818 14.4545C19.6909 14.4545 19.3636 14.7818 19.3636 15.2727C19.3636 15.7636 19.6909 16.0909 20.1818 16.0909C20.6727 16.0909 21 15.7636 21 15.2727C21 14.7818 20.6727 14.4545 20.1818 14.4545ZM20.1818 7.90909C19.6909 7.90909 19.3636 8.23636 19.3636 8.72727C19.3636 9.21818 19.6909 9.54545 20.1818 9.54545C20.6727 9.54545 21 9.21818 21 8.72727C21 8.23636 20.6727 7.90909 20.1818 7.90909ZM15.2727 19.3636C14.7818 19.3636 14.4545 19.6909 14.4545 20.1818C14.4545 20.6727 14.7818 21 15.2727 21C15.7636 21 16.0909 20.6727 16.0909 20.1818C16.0909 19.6909 15.7636 19.3636 15.2727 19.3636ZM15.2727 13.6364C14.2909 13.6364 13.6364 14.2909 13.6364 15.2727C13.6364 16.2545 14.2909 16.9091 15.2727 16.9091C16.2545 16.9091 16.9091 16.2545 16.9091 15.2727C16.9091 14.2909 16.2545 13.6364 15.2727 13.6364Z" }), 'BlurSlightly');

var Calendar = createSvgIcon(React.createElement("path", { d: "M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" }), 'Calendar');

var Call = createSvgIcon(React.createElement("path", { d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" }), 'Call');

var CallEnd = createSvgIcon(React.createElement("path", { d: "M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" }), 'CallEnd');

var Cancel = createSvgIcon(React.createElement("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }), 'Cancel');

var CancelOutline = createSvgIcon(React.createElement("path", { d: "M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }), 'CancelOutline');

var CancelPresentation = createSvgIcon(React.createElement("path", { d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.41 15.95L12 13.36l2.59 2.59L16 14.54l-2.59-2.59L16 9.36l-1.41-1.41L12 10.54 9.41 7.95 8 9.36l2.59 2.59L8 14.54z" }), 'CancelPresentation');

var Category = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M12 2l-5.5 9h11z" }),
    React.createElement("circle", { cx: "17.5", cy: "17.5", r: "4.5" }),
    React.createElement("path", { d: "M3 13.5h8v8H3z" })), 'Category');

var Chat = createSvgIcon(React.createElement("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" }), 'Chat');

var ChatBubbleOutline = createSvgIcon(React.createElement("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" }), 'ChatBubbleOutline');

var ChatDownload = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M20 2C21.1 2 22 2.9 22 4V15.3125C21.8687 15.351 21.74 15.4005 21.6152 15.4609L21.5957 13.9814L21.5791 13.7266C21.4346 12.4677 20.3577 11.4978 19.0635 11.5146C17.7691 11.5317 16.7168 12.5297 16.6055 13.792L16.5967 14.0479L16.6143 15.416C15.7051 15.0329 14.6157 15.2115 13.875 15.9521C13.3154 16.5117 13.0784 17.2703 13.1602 18H6L2 22L2.00977 4C2.00977 2.9 2.9 2 4 2H20ZM6 12V14H14V12H6ZM6 9V11H18V9H6ZM6 6V8H18V6H6Z" }),
    React.createElement("path", { d: "M19.096 14.0145L19.1682 19.4874M15.6425 17.7196L19.1781 21.2551M19.1682 21.2451L22.7037 17.7096", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'ChatDownload');

var CheckCircleOutline = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" }), 'CheckCircleOutline');

var ChevronLeft = createSvgIcon(React.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }), 'ChevronLeft');

var ChevronRight = createSvgIcon(React.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), 'ChevronRight');

var Close = createSvgIcon(React.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), 'Close');

var ClosedCaption = createSvgIcon(React.createElement("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z" }), 'ClosedCaption');

var Columns = createSvgIcon(React.createElement("path", { d: "M13 5V4C13 3.71667 13.0958 3.47917 13.2875 3.2875C13.4792 3.09583 13.7167 3 14 3H20C20.2833 3 20.5208 3.09583 20.7125 3.2875C20.9042 3.47917 21 3.71667 21 4V5C21 5.28333 20.9042 5.52083 20.7125 5.7125C20.5208 5.90417 20.2833 6 20 6H14C13.7167 6 13.4792 5.90417 13.2875 5.7125C13.0958 5.52083 13 5.28333 13 5ZM3 5V4C3 3.71667 3.09583 3.47917 3.2875 3.2875C3.47917 3.09583 3.71667 3 4 3H10C10.2833 3 10.5208 3.09583 10.7125 3.2875C10.9042 3.47917 11 3.71667 11 4V5C11 5.28333 10.9042 5.52083 10.7125 5.7125C10.5208 5.90417 10.2833 6 10 6H4C3.71667 6 3.47917 5.90417 3.2875 5.7125C3.09583 5.52083 3 5.28333 3 5ZM13 20V9C13 8.71667 13.0958 8.47917 13.2875 8.2875C13.4792 8.09583 13.7167 8 14 8H20C20.2833 8 20.5208 8.09583 20.7125 8.2875C20.9042 8.47917 21 8.71667 21 9V20C21 20.2833 20.9042 20.5208 20.7125 20.7125C20.5208 20.9042 20.2833 21 20 21H14C13.7167 21 13.4792 20.9042 13.2875 20.7125C13.0958 20.5208 13 20.2833 13 20ZM3 20V9C3 8.71667 3.09583 8.47917 3.2875 8.2875C3.47917 8.09583 3.71667 8 4 8H10C10.2833 8 10.5208 8.09583 10.7125 8.2875C10.9042 8.47917 11 8.71667 11 9V20C11 20.2833 10.9042 20.5208 10.7125 20.7125C10.5208 20.9042 10.2833 21 10 21H4C3.71667 21 3.47917 20.9042 3.2875 20.7125C3.09583 20.5208 3 20.2833 3 20Z" }), 'Columns');

var Compass = createSvgIcon(React.createElement("path", { d: "M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" }), 'Compass');

var Contacts = createSvgIcon(React.createElement("path", { d: "M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" }), 'Contacts');

var DateRange = createSvgIcon(React.createElement("path", { d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" }), 'DateRange');

var DayView = createSvgIcon(React.createElement("path", { d: "M3 20v-2h18v2ZM3 6V4h18v2Zm2 10q-.825 0-1.413-.588Q3 14.825 3 14v-4q0-.825.587-1.413Q4.175 8 5 8h14q.825 0 1.413.587Q21 9.175 21 10v4q0 .825-.587 1.412Q19.825 16 19 16Z" }), 'DayView');

var Delete = createSvgIcon(React.createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }), 'Delete');

var Description = createSvgIcon(React.createElement("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }), 'Description');

var DesktopUIDownload = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M21 3C22.1 3 23 3.9 23 5L22.9902 16.5654C22.9222 16.4759 22.8493 16.3883 22.7676 16.3066C22.2792 15.8184 21.6397 15.5761 21 15.5771V5H3V17H11.6885C11.2751 17.8571 11.3769 18.9004 11.999 19.6631L12.1709 19.8525L13.3184 21H8V19H3C1.9 19 1 18.1 1 17V5C1 3.9 1.9 3 3 3H21ZM7 12V14H5V12H7ZM15.0762 12C15.0034 12.2344 14.9639 12.4838 14.9639 12.7422V14H8V12H15.0762ZM7 8V10H5V8H7ZM19 8V10H8V8H19Z" }),
    React.createElement("path", { d: "M17.4645 12.7421L17.4645 19.8525M13.9388 18.0847L17.4744 21.6203M17.4645 21.6102L21 18.0747", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'DesktopUIDownload');

var Domain = createSvgIcon(React.createElement("path", { d: "M12,7V3H2v18h20V7H12z M6,19H4v-2h2V19z M6,15H4v-2h2V15z M6,11H4V9h2V11z M6,7H4V5h2V7z M10,19H8v-2h2V19z M10,15H8v-2h2 V15z M10,11H8V9h2V11z M10,7H8V5h2V7z M20,19h-8v-2h2v-2h-2v-2h2v-2h-2V9h8V19z M18,11h-2v2h2V11z M18,15h-2v2h2V15z" }), 'Domain');

var Done = createSvgIcon(React.createElement("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }), 'Done');

var Draw = createSvgIcon(React.createElement("path", { d: "M18.85 10.39L19.91 9.33C20.69 8.55 20.69 7.28 19.91 6.5L18.5 5.09C17.72 4.31 16.45 4.31 15.67 5.09L14.61 6.15L18.85 10.39ZM13.19 7.56L4 16.76V21H8.24L17.43 11.81L13.19 7.56ZM19 17.5C19 19.69 16.46 21 14 21C13.45 21 13 20.55 13 20C13 19.45 13.45 19 14 19C15.54 19 17 18.27 17 17.5C17 17.03 16.52 16.63 15.77 16.3L17.25 14.82C18.32 15.45 19 16.29 19 17.5ZM4.58 13.35C3.61 12.79 3 12.06 3 11C3 9.2 4.89 8.37 6.56 7.64C7.59 7.18 9 6.56 9 6C9 5.59 8.22 5 7 5C5.74 5 5.2 5.61 5.17 5.64C4.82 6.05 4.19 6.1 3.77 5.76C3.36 5.42 3.28 4.81 3.62 4.38C3.73 4.24 4.76 3 7 3C9.24 3 11 4.32 11 6C11 7.87 9.07 8.72 7.36 9.47C6.42 9.88 5 10.5 5 11C5 11.31 5.43 11.6 6.07 11.86L4.58 13.35Z" }), 'Draw');

var Edit = createSvgIcon(React.createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }), 'Edit');

var _Error = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }), 'Error');

var ErrorOutline = createSvgIcon(React.createElement("path", { d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), 'ErrorOutline');

var Event = createSvgIcon(React.createElement("path", { d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" }), 'Event');

var EventBusy = createSvgIcon(React.createElement("path", { d: "m9.31 17 2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" }), 'EventBusy');

var EventNote = createSvgIcon(React.createElement("path", { d: "M17 10H7V12H17V10ZM19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM14 14H7V16H14V14Z" }), 'EventNote');

var ExitToApp = createSvgIcon(React.createElement("path", { d: "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }), 'ExitToApp');

var ExpandLess = createSvgIcon(React.createElement("path", { d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" }), 'ExpandLess');

var ExpandMore = createSvgIcon(React.createElement("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }), 'ExpandMore');

var Favorite = createSvgIcon(React.createElement("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }), 'Favorite');

var FavoriteOutline = createSvgIcon(React.createElement("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" }), 'FavoriteOutline');

var FileCopy = createSvgIcon(React.createElement("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" }), 'FileCopy');

var FileMissing = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M15 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7L15 2ZM6 20V4H14L16 6L18 8V20H6Z" }),
    React.createElement("path", { d: "M11 18H13V16H11V18ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" })), 'FileMissing');

var Files = createSvgIcon(React.createElement("path", { d: "M4.18945 6H2.18945V20C2.18945 21.1 3.08945 22 4.18945 22H18.1895V20H4.18945V6ZM20.1895 2H8.18945C7.08945 2 6.18945 2.9 6.18945 4V16C6.18945 17.1 7.08945 18 8.18945 18H20.1895C21.2895 18 22.1895 17.1 22.1895 16V4C22.1895 2.9 21.2895 2 20.1895 2ZM19.1895 11H9.18945V9H19.1895V11ZM15.1895 15H9.18945V13H15.1895V15ZM19.1895 7H9.18945V5H19.1895V7Z" }), 'Files');

var FilterList = createSvgIcon(React.createElement("path", { d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" }), 'FilterList');

var FilterListOff = createSvgIcon(React.createElement("path", { d: "M20.3249 22.475L1.5249 3.67498L2.5999 2.59998L21.3999 21.4L20.3249 22.475ZM2.9999 7.49998V5.99998H5.3499V7.49998H2.9999ZM5.9999 12.75V11.25H10.5999V12.75H5.9999ZM9.6249 7.49998L8.1249 5.99998H20.9999V7.49998H9.6249ZM9.9999 18V16.5H13.9999V18H9.9999ZM14.8749 12.75L13.3749 11.25H17.9999V12.75H14.8749Z" }), 'FilterListOff');

var FirstPage = createSvgIcon(React.createElement("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), 'FirstPage');

var Folder = createSvgIcon(React.createElement("path", { d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" }), 'Folder');

var FormatListBulleted = createSvgIcon(React.createElement("path", { d: "M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z" }), 'FormatListBulleted');

var Fullscreen = createSvgIcon(React.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }), 'Fullscreen');

var Globe = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }), 'Globe');

var GroupWork = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }), 'GroupWork');

var HelpOutline = createSvgIcon(React.createElement("path", { d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" }), 'HelpOutline');

var Home = createSvgIcon(React.createElement("path", { d: "M11.4 3.2C11.7556 2.93333 12.2444 2.93333 12.6 3.2L20.6 9.2C20.8518 9.38885 21 9.68524 21 10V21C21 21.5523 20.5523 22 20 22H15C14.4477 22 14 21.5523 14 21V15.75C14 15.4739 13.7761 15.25 13.5 15.25L10.5 15.25C10.2239 15.25 10 15.4739 10 15.75V21C10 21.5523 9.55228 22 9 22H4C3.44772 22 3 21.5523 3 21V10C3 9.68524 3.14819 9.38885 3.4 9.2L11.4 3.2Z" }), 'Home');

var HourglassEmpty = createSvgIcon(React.createElement("path", { d: "M4 1.33331V5.33331H4.00667L4 5.33998L6.66667 7.99998L4 10.6666L4.00667 10.6733H4V14.6666H12V10.6733H11.9933L12 10.6666L9.33333 7.99998L12 5.33998L11.9933 5.33331H12V1.33331H4ZM10.6667 11V13.3333H5.33333V11L8 8.33331L10.6667 11ZM8 7.66665L5.33333 4.99998V2.66665H10.6667V4.99998L8 7.66665Z" }), 'HourglassEmpty', '0 0 16 16');

var Image = createSvgIcon(React.createElement("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }), 'Image');

var Info = createSvgIcon(React.createElement("path", { d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }), 'Info');

var KeyboardArrowDown = createSvgIcon(React.createElement("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }), 'KeyboardArrowDown');

var KeyboardArrowUp = createSvgIcon(React.createElement("path", { d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" }), 'KeyboardArrowUp');

var Language = createSvgIcon(React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" }), 'Language');

var LastPage = createSvgIcon(React.createElement("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), 'LastPage');

var Launch = createSvgIcon(React.createElement("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }), 'Launch');

var Link = createSvgIcon(React.createElement("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" }), 'Link');

var LinkOff = createSvgIcon(React.createElement("path", { d: "M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z" }), 'LinkOff');

var ListAlt = createSvgIcon(React.createElement("path", { d: "M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z" }), 'ListAlt');

var Lock = createSvgIcon(React.createElement("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }), 'Lock');

var LockOpen = createSvgIcon(React.createElement("path", { d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" }), 'LockOpen');

var Lunch = createSvgIcon(React.createElement("path", { d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" }), 'Lunch');

var Mail = createSvgIcon(React.createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }), 'Mail');

var _Map = createSvgIcon(React.createElement("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" }), 'Map');

var Merge = createSvgIcon(React.createElement("path", { d: "M17 20.41L18.41 19L15 15.59L13.59 17L17 20.41ZM7.49997 8H11V13.59L5.58997 19L6.99997 20.41L13 14.41V8H16.5L12 3.5L7.49997 8Z" }), 'Merge');

var Message = createSvgIcon(React.createElement("path", { d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" }), 'Message');

var Mic = createSvgIcon(React.createElement("path", { d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" }), 'Mic');

var MicOff = createSvgIcon(React.createElement("path", { d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" }), 'MicOff');

var MoreVert = createSvgIcon(React.createElement("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }), 'MoreVert');

var NetworkCheck = createSvgIcon(React.createElement("path", { d: "M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c2.88-2.88 6.79-4.08 10.53-3.62l1.19-2.68C9.89 3.84 4.74 5.27 1 9zm20 2l2-2c-1.64-1.64-3.55-2.82-5.59-3.57l-.53 2.82c1.5.62 2.9 1.53 4.12 2.75zm-4 4l2-2c-.8-.8-1.7-1.42-2.66-1.89l-.55 2.92c.42.27.83.59 1.21.97zM5 13l2 2c1.13-1.13 2.56-1.79 4.03-2l1.28-2.88c-2.63-.08-5.3.87-7.31 2.88z" }), 'NetworkCheck');

var NewReleases = createSvgIcon(React.createElement("path", { d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" }), 'NewReleases');

var NoPhotography = createSvgIcon(React.createElement("path", { d: "M10.94 8.12L7.48 4.66L9 3h6l1.83 2H20c1.1 0 2 0.9 2 2v12c0 0.05-0.01 0.1-0.02 0.16l-5.1-5.1C16.96 13.71 17 13.36 17 13 c0-2.76-2.24-5-5-5C11.64 8 11.29 8.04 10.94 8.12z M20.49 23.31L18.17 21H4c-1.1 0-2-0.9-2-2V7c0-0.59 0.27-1.12 0.68-1.49l-2-2 L2.1 2.1l19.8 19.8L20.49 23.31z M14.49 17.32l-1.5-1.5C12.67 15.92 12.35 16 12 16c-1.66 0-3-1.34-3-3c0-0.35 0.08-0.67 0.19-0.98 l-1.5-1.5C7.25 11.24 7 12.09 7 13c0 2.76 2.24 5 5 5C12.91 18 13.76 17.75 14.49 17.32z" }), 'NoPhotography');

var Notes = createSvgIcon(React.createElement("path", { d: "M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" }), 'Notes');

var NotesDownload = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M14.3672 16L15 16.6328V18H3V16H14.3672ZM16.6719 11L16.6787 11.501C15.7696 11.1179 14.6801 11.2966 13.9395 12.0371C13.659 12.3176 13.4592 12.6481 13.3398 13H3V11H16.6719ZM21 6V8H20.5146C20.1154 7.74169 19.6391 7.59304 19.1279 7.59961C18.6392 7.60605 18.1848 7.75247 17.8027 8H3V6H21Z" }),
    React.createElement("path", { d: "M19.1601 10.0994L19.2322 15.5723M15.7066 13.8044L19.2421 17.34M19.2322 17.33L22.7678 13.7944", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" })), 'NotesDownload');

var OpenInBrowser = createSvgIcon(React.createElement("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z" }), 'OpenInBrowser');

var PanelClose = createSvgIcon(React.createElement("path", { d: "M21 19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21L5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19L3 5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3L19 3C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5L21 19ZM16 19L19 19L19 5L16 5L16 19ZM14 19L14 5L5 5L5 19L14 19ZM11 9.8225L8.52766 12.5L11 15.1775L10.23887 16L7 12.5L10.23887 9L11 9.8225Z" }), 'PanelClose');

var PanelOpen = createSvgIcon(React.createElement("path", { d: "M21 19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21L5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19L3 5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3L19 3C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5L21 19ZM16 19L19 19L19 5L16 5L16 19ZM14 19L14 5L5 5L5 19L14 19ZM7 9.8225L9.47234 12.5L7 15.1775L7.76113 16L11 12.5L7.76113 9L7 9.8225Z" }), 'PanelOpen');

var People = createSvgIcon(React.createElement("path", { d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" }), 'People');

var Person = createSvgIcon(React.createElement("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), 'Person');

var PersonAdd = createSvgIcon(React.createElement("path", { d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }), 'PersonAdd');

var PersonOff = createSvgIcon(React.createElement("path", { d: "M8.65,5.82C9.36,4.72,10.6,4,12,4c2.21,0,4,1.79,4,4c0,1.4-0.72,2.64-1.82,3.35L8.65,5.82z M20,17.17 c-0.02-1.1-0.63-2.11-1.61-2.62c-0.54-0.28-1.13-0.54-1.77-0.76L20,17.17z M21.19,21.19L2.81,2.81L1.39,4.22l8.89,8.89 c-1.81,0.23-3.39,0.79-4.67,1.45C4.61,15.07,4,16.1,4,17.22V20h13.17l2.61,2.61L21.19,21.19z" }), 'PersonOff');

var PhoneLink = createSvgIcon(React.createElement("path", { d: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" }), 'PhoneLink');

var PhotoCamera = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("circle", { cx: "12", cy: "12", r: "3.2" }),
    React.createElement("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })), 'PhotoCamera');

var Place = createSvgIcon(React.createElement("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }), 'Place');

var Portrait = createSvgIcon(React.createElement("path", { d: "M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" }), 'Portrait');

var PresentToAll = createSvgIcon(React.createElement("path", { d: "M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z" }), 'PresentToAll');

var PrivateNotes = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M21.0001 9.33268H20.3334V7.99935C20.3334 6.15935 18.8401 4.66602 17.0001 4.66602C15.1601 4.66602 13.6667 6.15935 13.6667 7.99935V9.33268H13.0001C12.2667 9.33268 11.6667 9.93268 11.6667 10.666V17.3327C11.6667 18.066 12.2667 18.666 13.0001 18.666H21.0001C21.7334 18.666 22.3334 18.066 22.3334 17.3327V10.666C22.3334 9.93268 21.7334 9.33268 21.0001 9.33268ZM17.0001 15.3327C16.2667 15.3327 15.6667 14.7327 15.6667 13.9993C15.6667 13.266 16.2667 12.666 17.0001 12.666C17.7334 12.666 18.3334 13.266 18.3334 13.9993C18.3334 14.7327 17.7334 15.3327 17.0001 15.3327ZM19.0667 9.33268H14.9334V7.99935C14.9334 6.85935 15.8601 5.93268 17.0001 5.93268C18.1401 5.93268 19.0667 6.85935 19.0667 7.99935V9.33268Z" }),
    React.createElement("rect", { height: "2", width: "7", x: "2", y: "11" }),
    React.createElement("rect", { height: "2", width: "9", x: "2", y: "6" }),
    React.createElement("rect", { height: "2", width: "7", x: "2", y: "16" })), 'PrivateNotes');

var QrCode = createSvgIcon(React.createElement("path", { d: "M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 10h2v2h-2zm-6-6h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0-4h2v2h-2zm2 2h2v2h-2z" }), 'QrCode');

var QuestionAnswer = createSvgIcon(React.createElement("path", { d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" }), 'QuestionAnswer');

var RadioActive = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
    React.createElement("path", { d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" })), 'RadioActive');

var RadioInactive = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), 'RadioInactive');

var Redo = createSvgIcon(React.createElement("path", { d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" }), 'Redo');

var Refresh = createSvgIcon(React.createElement("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" }), 'Refresh');

var RemoveCircle = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" }), 'RemoveCircle');

var Repeat = createSvgIcon(React.createElement("path", { d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" }), 'Repeat');

var ReportProblem = createSvgIcon(React.createElement("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), 'ReportProblem');

var Room = createSvgIcon(React.createElement("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" }), 'Room');

var Rows = createSvgIcon(React.createElement("path", { d: "M8.3 20C8.03083 20 7.80521 19.9042 7.62313 19.7125C7.44104 19.5208 7.35 19.2833 7.35 19V14C7.35 13.7167 7.44104 13.4792 7.62313 13.2875C7.80521 13.0958 8.03083 13 8.3 13H19.05C19.3192 13 19.5448 13.0958 19.7269 13.2875C19.909 13.4792 20 13.7167 20 14V19C20 19.2833 19.909 19.5208 19.7269 19.7125C19.5448 19.9042 19.3192 20 19.05 20H8.3ZM8.5 11C8.23083 11 8.00521 10.9042 7.82313 10.7125C7.64104 10.5208 7.55 10.2833 7.55 10V5C7.55 4.71667 7.64104 4.47917 7.82313 4.2875C8.00521 4.09583 8.23083 4 8.5 4H19.05C19.3192 4 19.5448 4.09583 19.7269 4.2875C19.909 4.47917 20 4.71667 20 5V10C20 10.2833 19.909 10.5208 19.7269 10.7125C19.5448 10.9042 19.3192 11 19.05 11H8.5ZM3.95 20C3.68083 20 3.45521 19.9042 3.27312 19.7125C3.09104 19.5208 3 19.2833 3 19V14C3 13.7167 3.09104 13.4792 3.27312 13.2875C3.45521 13.0958 3.68083 13 3.95 13H4.7C4.96917 13 5.19479 13.0958 5.37688 13.2875C5.55896 13.4792 5.65 13.7167 5.65 14V19C5.65 19.2833 5.55896 19.5208 5.37688 19.7125C5.19479 19.9042 4.96917 20 4.7 20H3.95ZM3.95 11C3.68083 11 3.45521 10.9042 3.27312 10.7125C3.09104 10.5208 3 10.2833 3 10V5C3 4.71667 3.09104 4.47917 3.27312 4.2875C3.45521 4.09583 3.68083 4 3.95 4H4.7C4.96917 4 5.19479 4.09583 5.37688 4.2875C5.55896 4.47917 5.65 4.71667 5.65 5V10C5.65 10.2833 5.55896 10.5208 5.37688 10.7125C5.19479 10.9042 4.96917 11 4.7 11H3.95Z" }), 'Rows');

var SaveAlt = createSvgIcon(React.createElement("path", { d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" }), 'SaveAlt');

var Schedule = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }),
    React.createElement("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" })), 'Schedule');

var Search = createSvgIcon(React.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }), 'Search');

var Send = createSvgIcon(React.createElement("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }), 'Send');

var Serve = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("rect", { height: "11", width: "4", x: "1", y: "11" }),
    React.createElement("path", { d: "M20,17h-7l-2.09-0.73l0.33-0.94L13,16h2.82c0.65,0,1.18-0.53,1.18-1.18v0c0-0.49-0.31-0.93-0.77-1.11L8.97,11H7v9.02 L14,22l8.01-3v0C22,17.9,21.11,17,20,17z" })), 'Serve');

var Settings = createSvgIcon(React.createElement("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" }), 'Settings');

var SignDocument = createSvgIcon(React.createElement("path", { d: "M18.41 5.8L17.2 4.59C16.42 3.81 15.15 3.81 14.37 4.59L11.69 7.27L3 15.96V20H7.04L15.78 11.26L18.41 8.63C19.2 7.85 19.2 6.58 18.41 5.8ZM6.21 18H5V16.79L13.66 8.13L14.87 9.34L6.21 18ZM11 20L15 16H21V20H11Z" }), 'SignDocument');

var Speaker = createSvgIcon(React.createElement("path", { d: "M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }), 'Speaker');

var Star = createSvgIcon(React.createElement("path", { d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" }), 'Star');

var StarOutline = createSvgIcon(React.createElement("path", { d: "M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" }), 'StarOutline');

var Support = createSvgIcon(React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.46 7.12-2.78 1.15a4.982 4.982 0 0 0-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM9.13 4.54l1.17 2.78a5 5 0 0 0-2.98 2.97L4.54 9.13a7.984 7.984 0 0 1 4.59-4.59zM4.54 14.87l2.78-1.15a4.968 4.968 0 0 0 2.97 2.96l-1.17 2.78a7.996 7.996 0 0 1-4.58-4.59zm10.34 4.59-1.15-2.78a4.978 4.978 0 0 0 2.95-2.97l2.78 1.17a8.007 8.007 0 0 1-4.58 4.58z" }), 'Support');

var SupportAgent = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" }),
    React.createElement("circle", { cx: "9", cy: "13", r: "1" }),
    React.createElement("circle", { cx: "15", cy: "13", r: "1" }),
    React.createElement("path", { d: "M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" })), 'SupportAgent');

var SyncAlt = createSvgIcon(React.createElement("path", { d: "M22 8l-4-4v3H3v2h15v3l4-4zM2 16l4 4v-3h15v-2H6v-3l-4 4z" }), 'SyncAlt');

var TaskComplete = createSvgIcon(React.createElement("path", { d: "M10.6 16.05 17.65 9l-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z" }), 'TaskComplete');

var Timelapse = createSvgIcon(React.createElement("path", { d: "M16.24 7.75c-1.17-1.17-2.7-1.76-4.24-1.76v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48zM12 1.99c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), 'Timelapse');

var Tune = createSvgIcon(React.createElement("path", { d: "M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z" }), 'Tune');

var TurnRight = createSvgIcon(React.createElement("path", { d: "M6.48071 3.69225V11.5768C6.48071 12.0243 6.63813 12.4054 6.95296 12.7202C7.26763 13.0349 7.64871 13.1923 8.09621 13.1923H17.0845L14.9845 15.2923L15.6922 16L19 12.6923L15.6922 9.3845L14.9845 10.0922L17.0845 12.1923H8.09621C7.91671 12.1923 7.76921 12.1346 7.65371 12.0193C7.53838 11.9038 7.48071 11.7563 7.48071 11.5768V3.69225H6.48071Z", fill: "currentColor" }), 'TurnRight');

var Undo = createSvgIcon(React.createElement("path", { d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" }), 'Undo');

var UnverifiedUser = createSvgIcon(React.createElement("path", { d: "M12 1L3 4.3V10.999C3 16.554 6.83625 21.735 12 23C17.1638 21.735 21 16.554 21 10.999V4.3L12 1ZM13.125 16.4H10.875V14.2H13.125V16.4ZM13.125 12H10.875V6.5H13.125V12Z" }), 'UnverifiedUser');

var VerifiedUser = createSvgIcon(React.createElement("path", { d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" }), 'VerifiedUser');

var VideoCam = createSvgIcon(React.createElement("path", { d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" }), 'VideoCam');

var VideoCamOff = createSvgIcon(React.createElement("path", { d: "M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z" }), 'VideoCamOff');

var Visibility = createSvgIcon(React.createElement("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }), 'Visibility');

var VisibilityOff = createSvgIcon(React.createElement("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" }), 'VisibilityOff');

var VolumeDown = createSvgIcon(React.createElement("path", { d: "M16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM3 9V15H7L12 20V4L7 9H3Z" }), 'VolumeDown');

var VolumeMute = createSvgIcon(React.createElement("path", { d: "M3 9V15H7L12 20V4L7 9H3Z" }), 'VolumeMute');

var VolumeUp = createSvgIcon(React.createElement("path", { d: "M3 9.00047V15.0005H7L12 20.0005V4.00047L7 9.00047H3ZM16.5 12.0005C16.5 10.2305 15.48 8.71047 14 7.97047V16.0205C15.48 15.2905 16.5 13.7705 16.5 12.0005ZM14 3.23047V5.29047C16.89 6.15047 19 8.83047 19 12.0005C19 15.1705 16.89 17.8505 14 18.7105V20.7705C18.01 19.8605 21 16.2805 21 12.0005C21 7.72047 18.01 4.14047 14 3.23047Z" }), 'VolumeUp');

var Walk = createSvgIcon(React.createElement("path", { d: "M7 23 9.8 8.9 8 9.6V13H6V8.3l5.05 -2.15c0.2333 -0.1 0.4792 -0.15833 0.7375 -0.175 0.2583 -0.01667 0.5042 0.01667 0.7375 0.1 0.2333 0.08333 0.4542 0.2 0.6625 0.35 0.2083 0.15 0.3792 0.34167 0.5125 0.575l1 1.6c0.4333 0.7 1.0208 1.275 1.7625 1.725 0.7417 0.45 1.5875 0.675 2.5375 0.675v2c-1.1667 0 -2.2083 -0.2417 -3.125 -0.725 -0.9167 -0.4833 -1.7 -1.1 -2.35 -1.85L12.9 13.5l2.1 2V23h-2v-6.5l-2.1 -1.6L9.1 23H7Zm6.5 -17.5c-0.55 0 -1.0208 -0.19583 -1.4125 -0.5875C11.6958 4.52083 11.5 4.05 11.5 3.5s0.1958 -1.02083 0.5875 -1.4125C12.4792 1.69583 12.95 1.5 13.5 1.5s1.0208 0.19583 1.4125 0.5875c0.3917 0.39167 0.5875 0.8625 0.5875 1.4125s-0.1958 1.02083 -0.5875 1.4125C14.5208 5.30417 14.05 5.5 13.5 5.5Z" }), 'Walk');

var Warning = createSvgIcon(React.createElement("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }), 'Warning');

var Web = createSvgIcon(React.createElement("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" }), 'Web');

var WebAsset = createSvgIcon(React.createElement("path", { d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z" }), 'WebAsset');

var WeekView = createSvgIcon(React.createElement("path", { d: "M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h1.325q.825 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413Q6.15 20 5.325 20Zm7.35 0q-.825 0-1.412-.587Q9.35 18.825 9.35 18V6q0-.825.588-1.412Q10.525 4 11.35 4h1.325q.825 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413Q13.5 20 12.675 20Zm7.325 0q-.825 0-1.412-.587-.588-.588-.588-1.413V6q0-.825.588-1.412Q17.85 4 18.675 4H20q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z" }), 'WeekView');

var Workflow = createSvgIcon(React.createElement("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" }), 'Workflow');

var ZoomIn = createSvgIcon(React.createElement(React.Fragment, null,
    React.createElement("path", { d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" }),
    React.createElement("path", { d: "M12 10H10V12H9V10H7V9H9V7H10V9H12V10Z" })), 'ZoomIn');

var ZoomOut = createSvgIcon(React.createElement("path", { d: "M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14ZM7 9H12V10H7V9Z" }), 'ZoomOut');

export { Add, AddToWorkflow, Alarm, Analytics, ArrowBack, ArrowDownward, ArrowRightAlt, AssignmentIndicator, AudioDownload, BarChart, Block, Blur, BlurSlightly, Calendar, Call, CallEnd, Cancel, CancelOutline, CancelPresentation, Category, Chat, ChatBubbleOutline, ChatDownload, CheckCircleOutline, ChevronLeft, ChevronRight, Close, ClosedCaption, Columns, Compass, Contacts, DateRange, DayView, Delete, Description, DesktopUIDownload, Domain, Done, Draw, Edit, _Error as Error, ErrorOutline, Event, EventBusy, EventNote, ExitToApp, ExpandLess, ExpandMore, Favorite, FavoriteOutline, FileCopy, FileMissing, Files, FilterList, FilterListOff, FirstPage, Folder, FormatListBulleted, Fullscreen, Globe, GroupWork, HelpOutline, Home, HourglassEmpty, Image, Info, KeyboardArrowDown, KeyboardArrowUp, Language, LastPage, Launch, Link, LinkOff, ListAlt, Lock, LockOpen, Lunch, Mail, _Map as Map, Merge, Message, Mic, MicOff, MoreVert, NetworkCheck, NewReleases, NoPhotography, Notes, NotesDownload, OpenInBrowser, PanelClose, PanelOpen, People, Person, PersonAdd, PersonOff, PhoneLink, PhotoCamera, Place, Portrait, PresentToAll, PrivateNotes, QrCode, QuestionAnswer, RadioActive, RadioInactive, Redo, Refresh, RemoveCircle, Repeat, ReportProblem, Room, Rows, SaveAlt, Schedule, Search, Send, Serve, Settings, SignDocument, Speaker, Star, StarOutline, Support, SupportAgent, SyncAlt, TaskComplete, Timelapse, Tune, TurnRight, Undo, UnverifiedUser, VerifiedUser, VideoCam, VideoCamOff, Visibility, VisibilityOff, VolumeDown, VolumeMute, VolumeUp, Walk, Warning, Web, WebAsset, WeekView, Workflow, ZoomIn, ZoomOut };
//# sourceMappingURL=icons.es.js.map
