import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'tree-element', template:
        `
<template>
    <div class="Tree">
        <tree-node data.bind="data.tree.root"></tree-node>
    </div>
</template>
`})
export class TreeElement {
    @bindable public data: any;
}
