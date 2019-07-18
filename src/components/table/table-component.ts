import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'table-component', template: `
<template>
    <table class="Table">
        <tbody>
            <table-row repeat.for="item of data.table.items" data.bind="item" />
        </tbody>
    </table>
</template>
`})
export class TableComponent {
    @bindable public data: any;
}
