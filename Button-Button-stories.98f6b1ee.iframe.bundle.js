"use strict";(self.webpackChunk_coconut_software_ui=self.webpackChunk_coconut_software_ui||[]).push([[8096],{"./src/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icons/ChevronLeft.tsx"),_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/icons/ChevronRight.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Button/Button.tsx"),childrenMap={none:void 0,arrowLeft:_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_1__.A,arrowRight:_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_2__.A};const __WEBPACK_DEFAULT_EXPORT__={title:"Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:{endAdornment:{control:{options:Object.keys(childrenMap),type:"select"}},startAdornment:{control:{options:Object.keys(childrenMap),type:"select"}}}};var Default=function Template(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.A,Object.assign({},args,{endAdornment:childrenMap[args.endAdornment],startAdornment:childrenMap[args.startAdornment]}),args.children)}.bind({});Default.args={children:"Button"};const __namedExportsOrder=["Default"]},"./src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utilities_toDataSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utilities/toDataSet.ts"),sizes={large:{root:"h-12 px-4 py-3",icon:"w-6 h-6"},medium:{root:"h-10 px-2 py-2",icon:"w-5 h-5"},small:{root:"h-8 px-1 py-1",icon:"w-4.5 h-4.5"}},disabled_contained={default:"disabled:bg-black-15 disabled:text-black-30",inverse:"disabled:bg-white-15 disabled:text-white-30"},disabled_outlined={default:"disabled:bg-transparent disabled:border-black-15 disabled:text-black-30",inverse:"disabled:bg-transparent disabled:border-white-30 disabled:text-white-30"},disabled_text={default:"disabled:bg-transparent disabled:text-black-30",inverse:"disabled:bg-transparent disabled:text-white-30"},positions={contained:{default:{left:"rounded-l",middle:"rounded-none border-l border-black-15 disabled:border-black-15",right:"rounded-r border-l border-black-15 disabled:border-black-15"},inverse:{left:"rounded-l",middle:"rounded-none border-l border-black-15 disabled:border-black-15",right:"rounded-r border-l border-black-15 disabled:border-black-15"},primary:{left:"rounded-l",middle:"rounded-none border-l border-primary-dark disabled:border-black-15",right:"rounded-r border-l border-primary-dark disabled:border-black-15"},secondary:{left:"rounded-l",middle:"rounded-none border-l border-secondary-dark disabled:border-black-15",right:"rounded-r border-l border-secondary-dark disabled:border-black-15"}},outlined:{default:{left:"rounded-l disabled:border-black-20",middle:"rounded-none border-l-0 disabled:border-black-20",right:"rounded-r border-l-0 disabled:border-black-20"},inverse:{left:"rounded-l disabled:border-white-100",middle:"rounded-none border-l-0 disabled:border-white-100",right:"rounded-r border-l-0 disabled:border-white-100"},primary:{left:"rounded-l disabled:border-primary-main",middle:"rounded-none border-l-0 disabled:border-primary-main",right:"rounded-r border-l-0 disabled:border-primary-main"},secondary:{left:"rounded-l disabled:border-secondary-main",middle:"rounded-none border-l-0 disabled:border-secondary-main",right:"rounded-r border-l-0 disabled:border-secondary-main"}},text:{default:{left:"rounded-l",middle:"rounded-none border-l border-black-15 disabled:border-black-15",right:"rounded-r border-l border-black-15 disabled:border-black-15"},inverse:{left:"rounded-l",middle:"rounded-none border-l border-black-15 disabled:border-black-15",right:"rounded-r border-l border-black-15 disabled:border-black-15"},primary:{left:"rounded-l",middle:"rounded-none border-l border-primary-dark disabled:border-black-15",right:"rounded-r border-l border-primary-dark disabled:border-black-15"},secondary:{left:"rounded-l",middle:"rounded-none border-l border-secondary-dark disabled:border-black-15",right:"rounded-r border-l border-secondary-dark disabled:border-black-15"}}},variants={contained:{default:"bg-black-5 text-black-90 ".concat(disabled_contained.default," active:bg-black-25 focus:bg-black-15 focus-visible:ring hover:bg-black-15"),inverse:"bg-white-25 text-white-100 ".concat(disabled_contained.inverse," active:bg-white-60 focus:bg-white-45 focus-visible:ring hover:bg-white-45"),primary:"bg-primary-main text-white-100 ".concat(disabled_contained.default," active:bg-primary-darker focus:bg-primary-dark focus-visible:ring hover:bg-primary-dark"),secondary:"bg-secondary-main text-white-100 ".concat(disabled_contained.default," active:bg-secondary-darker focus:bg-secondary-dark focus-visible:ring hover:bg-secondary-dark")},outlined:{default:"border border-solid border-black-20 text-black-90 ".concat(disabled_outlined.default," active:bg-black-15 focus:bg-black-5 focus-visible:ring hover:bg-black-5"),inverse:"border border-solid border-white-100 text-white-100 ".concat(disabled_outlined.inverse," active:bg-white-45 focus:bg-white-25 focus-visible:ring hover:bg-white-25"),primary:"border border-solid border-primary-main text-primary-main ".concat(disabled_outlined.default," active:bg-primary-20 focus:bg-primary-10 focus-visible:ring hover:bg-primary-10"),secondary:"border border-solid border-secondary-main text-secondary-main ".concat(disabled_outlined.default," active:bg-secondary-20 focus:bg-secondary-10 focus-visible:ring hover:bg-secondary-10")},text:{default:"text-black-90 ".concat(disabled_text.default," active:bg-black-15 focus:bg-black-5 focus-visible:ring hover:bg-black-5"),inverse:"text-white-100 ".concat(disabled_text.inverse," active:bg-white-45 focus:bg-white-25 focus-visible:ring hover:bg-white-25"),primary:"text-primary-main ".concat(disabled_text.default," active:bg-primary-20 focus:bg-primary-10 focus-visible:ring hover:bg-primary-10"),secondary:"text-secondary-main ".concat(disabled_text.default," active:bg-secondary-20 focus:bg-secondary-10 focus-visible:ring hover:bg-secondary-10")}};function ButtonComponent(_ref,ref){var _children$type,controls=_ref["aria-controls"],expanded=_ref["aria-expanded"],hasPopup=_ref["aria-haspopup"],children=_ref.children,_ref$color=_ref.color,color=void 0===_ref$color?"default":_ref$color,dataSet=_ref.dataSet,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,EndAdornment=_ref.endAdornment,form=_ref.form,href=_ref.href,id=_ref.id,onClick=_ref.onClick,onKeyDown=_ref.onKeyDown,_ref$position=_ref.position,position=void 0===_ref$position?null:_ref$position,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,StartAdornment=_ref.startAdornment,_ref$tabIndex=_ref.tabIndex,tabIndex=void 0===_ref$tabIndex?0:_ref$tabIndex,target=_ref.target,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"contained":_ref$variant,Component=href?"a":"button";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,Object.assign({"aria-controls":controls,"aria-expanded":expanded,"aria-haspopup":hasPopup,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("font-sans text-sm font-medium leading-relaxed tracking-wide disabled:cursor-not-allowed focus:outline-none",variants[variant][color],sizes[size].root,position?positions[variant][color][position]:"rounded")},(0,_utilities_toDataSet__WEBPACK_IMPORTED_MODULE_2__.Q)(dataSet),{disabled,form,href,id,onClick,onKeyDown,ref,tabIndex},href?{target}:{type}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center"},StartAdornment?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("flex items-center justify-center",sizes[size].icon)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(StartAdornment,{color:"inherit"})):null,"SvgIcon"===(null==children||null===(_children$type=children.type)||void 0===_children$type?void 0:_children$type.uiName)?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:sizes[size].icon},children):react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"small"===size?"px-1":"px-2"},children),EndAdornment?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("flex items-center justify-center",sizes[size].icon)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(EndAdornment,{color:"inherit"})):null))}var Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(ButtonComponent);const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{"aria-controls":{defaultValue:null,description:"",name:"aria-controls",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"",name:"aria-expanded",required:!1,type:{name:"Booleanish"}},"aria-haspopup":{defaultValue:null,description:"",name:"aria-haspopup",required:!1,type:{name:'boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog"'}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'},{value:'"primary"'},{value:'"secondary"'}]}},dataSet:{defaultValue:null,description:"",name:"dataSet",required:!1,type:{name:"Record<string, string>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"(({ children, color, viewBox, }: PropsWithChildren<SvgIconProps>) => Element)"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLElement>"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"ButtonPosition | null"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"(({ children, color, viewBox, }: PropsWithChildren<SvgIconProps>) => Element)"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/ChevronLeft.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./src/utilities/createSvgIcon.tsx").A)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");try{ChevronLeft.displayName="ChevronLeft",ChevronLeft.__docgenInfo={description:"",displayName:"ChevronLeft",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"inherit"'}]}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/ChevronLeft.tsx#ChevronLeft"]={docgenInfo:ChevronLeft.__docgenInfo,name:"ChevronLeft",path:"src/icons/ChevronLeft.tsx#ChevronLeft"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/ChevronRight.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./src/utilities/createSvgIcon.tsx").A)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");try{ChevronRight.displayName="ChevronRight",ChevronRight.__docgenInfo={description:"",displayName:"ChevronRight",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"inherit"'}]}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/ChevronRight.tsx#ChevronRight"]={docgenInfo:ChevronRight.__docgenInfo,name:"ChevronRight",path:"src/icons/ChevronRight.tsx#ChevronRight"})}catch(__react_docgen_typescript_loader_error){}},"./src/utilities/createSvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>utilities_createSvgIcon});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),colors={default:"text-black-60",inherit:"text-inherit",primary:"text-primary-main",secondary:"text-secondary-main"};function SvgIcon(_ref){var children=_ref.children,_ref$color=_ref.color,color=void 0===_ref$color?"inherit":_ref$color,viewBox=_ref.viewBox;return react.createElement("svg",{"aria-hidden":"true",className:(0,clsx_m.A)("select-none w-full h-auto",colors[color]),fill:"currentColor",focusable:"false",viewBox:viewBox||"0 0 24 24",width:"0"},children)}const SvgIcon_SvgIcon=SvgIcon;try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"inherit"'}]}},viewBox:{defaultValue:null,description:"",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}const utilities_createSvgIcon=function createSvgIcon(path,name){var component=function component(props){return react.createElement(SvgIcon_SvgIcon,props,path)};return component.displayName=name,component.uiName="SvgIcon",component}},"./src/utilities/toDataSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toDataSet(record){return Object.keys(record||{}).reduce((function(previous,current){var key="data-".concat(current.replace(/[A-Z]/g,(function(match){return"-"+match.toLowerCase()})));return record&&(previous[key]=record[current]),previous}),{})}__webpack_require__.d(__webpack_exports__,{Q:()=>toDataSet})},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function __WEBPACK_DEFAULT_EXPORT__(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__})}}]);