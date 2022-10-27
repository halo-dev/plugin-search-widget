import { createApp, defineComponent } from "vue";
//@ts-ignore
import { SearchWidget } from "@halo-dev/search-widget";
import "./styles/style.css";
import "@halo-dev/search-widget/dist/style.css";

// SearchWidget will mount this dom
let container: HTMLElement | undefined;
let root: HTMLElement | undefined;

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    container = document.createElement("div");
    root = document.createElement("div");
    const styleEl = document.createElement("link");
    const shadowDOM = container.attachShadow?.({ mode: "open" }) || container;
    styleEl.setAttribute("rel", "stylesheet");
    styleEl.setAttribute(
      "href",
      "/plugins/PluginSearchWidget/assets/static/style.css"
    );
    shadowDOM.appendChild(styleEl);
    shadowDOM.appendChild(root);
    document.body.appendChild(container);
  });
})();

function createComponent() {
  if (!container || !root) {
    return;
  }

  const rootComponent = defineComponent({
    components: {
      SearchWidget,
    },
    data() {
      return {
        visible: false,
      };
    },
    mounted() {
      this.visible = true;
    },
    methods: {
      onVisibleChange(visible: boolean) {
        if (!visible) {
          setTimeout(() => {
            container && document.body.removeChild(container);
          }, 200);
        }
      },
    },
    template: `
          <SearchWidget v-model:visible="visible" @update:visible="onVisibleChange"/>`,
  });

  const app = createApp(rootComponent);
  app.mount(root);
}

export function open() {
  createComponent();
}
