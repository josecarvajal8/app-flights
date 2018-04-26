/// <reference no-default-lib="true"/>
/// <reference path="node_modules/sugar-inflections/sugar.d.ts" />
/// <reference path="node_modules/sugar/sugar.d.ts" />
/// <reference path="node_modules/sugar/sugar-extended.d.ts" />
declare module "*.json" {
    const value: any;
    export default value;
}
interface ZeplinSize {
    height: number;
    width: number;
}

declare module 'react-native-orientation'