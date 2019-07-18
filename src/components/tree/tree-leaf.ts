import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'tree-leaf', template:
        `
<template>
    <li class="TreeLeaf">{data.id}</li>
</template>
`})
export class TreeLeaf {
    @bindable public data: any;
}
