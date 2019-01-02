export = once;

declare function once(name: Function): Function;

declare namespace once {
    export let onceMap: Function;
}
