import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'anim', template:
        `
<template>
    <div class="Anim">
        <anim-box repeat.for="item of data.anim.items" key="\${item.id}" data.bind="item" />
    </div>
</template>
`})
export class Anim {
    @bindable public data: any;
}
