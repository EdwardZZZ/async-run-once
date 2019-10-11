export = once;

declare function once(name: Function): (...any: any[]) => Promise<any>;

declare namespace once {
    export let onceMap: Function;
}
