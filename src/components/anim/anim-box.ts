import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: "anim-box", template: `
<template>
<div class="AnimBox" data-id="\${data.id}"
    css="border-radius:\${(data.time % 10).toString()}px;background:\${(0.5 + ((data.time % 10) / 10)).toString()}px" />
</template>
`})
export class AnimBox {
    @bindable public data: any;
}