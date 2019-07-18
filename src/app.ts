import { bindable, customElement } from "@aurelia/runtime";

@customElement({
  name: 'app', template:
    `
    <template>
  <div class="Main">
    <table-component if.bind="data.location === 'table'" data.bind="data" >
    </table-component>
    <anim if.bind="data.location === 'anim'"/>
    <tree if.bind="data.location === 'tree'" />
  </div>
  </template>
`})
export class App {
  @bindable public data: any;
}
