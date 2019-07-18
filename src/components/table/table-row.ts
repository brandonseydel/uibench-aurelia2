import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'table-row',
    template:
        `
<template>
<tr class="\${classes}" data-id="\${data.id}">
    <table-cell repeat.for="cell of data.props" text.bind="cell" />
</tr>
</template>
`})
export class TableRow {
    @bindable public data: any;

    get classes() {
        return (this.data.active) ? 'TableRow active' : 'TableRow';
    }
}
