import { bindable, customElement } from "@aurelia/runtime";

@customElement({
  name: 'app', template:
    `
    <template>
  <div class="Main">
    <table-component if.bind="data.location === 'table'" data.bind="data"></table-component>
    <anim if.bind="data.location === 'anim'" data.bind="data"></anim>
    <tree-element if.bind="data.location === 'tree'" data.bind="data"></tree-element>
  </div>
  </template>
`})
export class App {
  @bindable public data: any;

}
