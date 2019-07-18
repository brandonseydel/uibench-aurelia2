import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'tree-leaf', template:
        `
<template>
    <div class="Tree">
        <tree-node data.bind="data.root" />
    </div>;
</template>
`})
export class Tree {
    @bindable public data: any;
}
