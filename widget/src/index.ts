import { createApp, defineComponent } from "vue";
//@ts-ignore
import { SearchWidget } from "@halo-dev/search-widget";
import "./styles/style.css";
import "@halo-dev/search-widget/dist/style.css";

export function openSearch() {
  const container = document.createElement("div");
  const root = document.createElement("div");
  const styleEl = document.createElement("link");
  const shadowDOM = container.attachShadow?.({ mode: "open" }) || container;
  styleEl.setAttribute("rel", "stylesheet");
  styleEl.setAttribute("href", "./static/style.css");
  shadowDOM.appendChild(styleEl);
  shadowDOM.appendChild(root);
  document.body.appendChild(container);

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
            document.body.removeChild(container);
          }, 200);
        }
      },
    },
    template: `<SearchWidget v-model:visible="visible" @update:visible="onVisibleChange" />`,
  });

  const app = createApp(rootComponent);
  app.mount(root);
}
