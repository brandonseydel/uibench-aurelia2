import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'tree-node', template:
        `
<template>
    <ul class="TreeNode">
    <li as-element="tree-node" repeat.for="item of treeNodes" key="\${item.id}" data.bind="item"/>
    <li as-element="tree-leaf" repeat.for="item of treeLeafs" key="\${item.id}" data.bind="item"/>

    </ul>
</template>
`})
export class TreeNode {
    @bindable public data?: { children?: any[] };

    get treeNodes() {
        return this.data!.children!.filter((y) => y.container);
    }

    get treeLeafs() {
        return this.data!.children!.filter((y) => !y.container);
    }
}
