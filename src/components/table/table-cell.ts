import { bindable, customElement } from "@aurelia/runtime";

@customElement({
    name: 'table-cell',
    template: `
<template>
    <td class="TableCell" click.delegate="onClick($event)">
        \${text}
    </td>;
</template>
`})
export class TableCell {
    @bindable public text: string = '';

    public onClick = (e: MouseEvent) => {
        // tslint:disable-next-line: no-console
        console.log('Clicked' + this.text);
        e.stopPropagation();
    }
}