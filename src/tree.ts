import { customElement } from "@aurelia/runtime";

@customElement({
    name: 'tree',
    template:
        `<div class="Tree"><tree-node data.bind="this.props.data.root" /></div>;`,
})
export class Tree {

}