<script lang="ts" setup>
import { VModal } from "@halo-dev/components";
import { ref, watch, onMounted } from "vue";
import debounce from "lodash.debounce";
import axios from "axios";
import type { Result, Hit } from "@/types/model";

onMounted(() => {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    const htmlClass = htmlElement.getAttribute("class");
    if (htmlClass) vElementClass.value = htmlClass;
  }
});

const props = withDefaults(
  defineProps<{
    visible: boolean;
    baseUrl?: string;
  }>(),
  {
    visible: false,
    baseUrl: "",
  }
);

const emit = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();

const searchInput = ref<HTMLInputElement | null>(null);
const keyword = ref("");
const vElementClass = ref("");
const selectedIndex = ref(0);
const searchResults = ref<Result>({
  hits: [],
  keyword: "",
  total: 0,
  limit: 0,
  processingTimeMills: 0,
});

const handleSearch = debounce(() => {
  axios
    .get<Result>(
      `${
        props.baseUrl
      }/apis/api.halo.run/v1alpha1/indices/post?keyword=${keyword.value.trim()}&highlightPreTag=<mark>&highlightPostTag=</mark>`
    )
    .then((response) => {
      searchResults.value = response.data;
    });
}, 300);

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.visible) {
    return;
  }

  const { key, ctrlKey } = e;

  if (key === "ArrowUp" || (key === "k" && ctrlKey)) {
    selectedIndex.value = Math.max(0, selectedIndex.value - 1);
    e.preventDefault();
  }

  if (key === "ArrowDown" || (key === "j" && ctrlKey)) {
    selectedIndex.value = Math.min(
      searchResults.value.hits.length - 1,
      selectedIndex.value + 1
    );
    e.preventDefault();
  }

  if (key === "Enter") {
    const searchResult = searchResults.value.hits[selectedIndex.value];
    if (searchResult) {
      handleOpenLink(searchResult);
    }
  }

  if (key === "Escape") {
    onVisibleChange(false);
    e.preventDefault();
  }
};

const handleOpenLink = (hit: Hit) => {
  window.location.href = hit.permalink;
};

watch(
  () => selectedIndex.value,
  (index) => {
    if (index > 0) {
      document.getElementById(`search-item-${index}`)?.scrollIntoView();
      return;
    }
    document.getElementById("search-input")?.scrollIntoView();
  }
);

watch(
  () => keyword.value,
  () => {
    selectedIndex.value = 0;
  }
);

watch(
  () => props.visible,
  (visible) => {
    if (visible) {
      setTimeout(() => {
        searchInput.value?.focus();
      }, 100);

      document.addEventListener("keydown", handleKeydown);
    } else {
      document.removeEventListener("keydown", handleKeydown);
      keyword.value = "";
      selectedIndex.value = 0;
    }
  }
);

const onVisibleChange = (visible: boolean) => {
  emit("update:visible", visible);
};
</script>

<template>
  <VModal
    :visible="visible"
    :body-class="['!p-0']"
    :width="650"
    :centered="false"
    layer-closable
    @update:visible="onVisibleChange"
  >
    <div
      class="rounded"
      :class="{
        'bg-slate-50': vElementClass === 'light',
        'bg-slate-950': vElementClass === 'dark',
      }"
    >
      <div
        id="search-input"
        class="border-b px-4 py-2.5"
        :class="{
          'border-gray-100': vElementClass === 'light',
          'border-gray-800': vElementClass === 'dark',
        }"
      >
        <input
          ref="searchInput"
          v-model="keyword"
          placeholder="输入关键词以搜索"
          class="w-full py-1 text-base outline-none"
          :class="{
            'bg-gray-50 text-gray-900': vElementClass === 'light',
            'bg-gray-950 text-gray-100': vElementClass === 'dark',
          }"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          @input="handleSearch"
        />
      </div>
      <div class="px-2 py-2.5">
        <div
          v-if="!searchResults.hits.length"
          class="flex items-center justify-center text-sm text-gray-500"
        >
          <span>没有搜索结果</span>
        </div>
        <ul
          v-else
          class="box-border flex h-full w-full flex-col gap-1"
          role="list"
        >
          <li
            v-for="(item, itemIndex) in searchResults.hits"
            :id="`search-item-${itemIndex}`"
            :key="itemIndex"
            class="cursor-pointer"
            @click="handleOpenLink(item)"
          >
            <div
              class="flex flex-col gap-1 rounded-md px-2 py-2.5"
              :class="{
                '!bg-gray-100':
                  selectedIndex === itemIndex && vElementClass === 'light',
                'bg-gray-50 hover:bg-gray-100': vElementClass === 'light',
                'bg-gray-950 hover:bg-gray-900': vElementClass === 'dark',
                '!bg-gray-900':
                  selectedIndex === itemIndex && vElementClass === 'dark',
              }"
            >
              <div
                v-if="item.title"
                class="text-sm font-semibold"
                :class="{
                  'text-gray-900': vElementClass === 'light',
                  '!text-gray-100': vElementClass === 'dark',
                }"
                v-html="item.title"
              ></div>
              <div
                v-if="item.content"
                class="text-xs"
                :class="{
                  'text-gray-600': vElementClass === 'light',
                  '!text-gray-400': vElementClass === 'dark',
                }"
                v-html="item.content"
              ></div>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="border-t px-4 py-2.5"
        :class="{
          'border-gray-100': vElementClass === 'light',
          'border-gray-800': vElementClass === 'dark',
        }"
      >
        <div class="flex items-center justify-end">
          <span
            class="mr-1 text-xs"
            :class="{
              'text-gray-600': vElementClass === 'light',
              'text-gray-400': vElementClass === 'dark',
            }"
            >选择</span
          >
          <kbd
            class="mr-1 w-5 rounded border p-0.5 text-center text-[10px] shadow-sm"
            :class="{
              'text-gray-600': vElementClass === 'light',
              'text-gray-400': vElementClass === 'dark',
            }"
          >
            ↑
          </kbd>
          <kbd
            class="mr-5 w-5 rounded border p-0.5 text-center text-[10px] shadow-sm"
            :class="{
              'text-gray-600': vElementClass === 'light',
              'text-gray-400': vElementClass === 'dark',
            }"
          >
            ↓
          </kbd>
          <span
            class="mr-1 text-xs"
            :class="{
              'text-gray-600': vElementClass === 'light',
              'text-gray-400': vElementClass === 'dark',
            }"
            >确认</span
          >
          <kbd
            class="mr-5 rounded border p-0.5 text-[10px] shadow-sm"
            :class="{
              'text-gray-600': vElementClass === 'light',
              'text-gray-400': vElementClass === 'dark',
            }"
          >
            Enter
          </kbd>
          <span
            class="mr-1 text-xs"
            :class="{
              'text-gray-600': vElementClass === 'light',
              'text-gray-400': vElementClass === 'dark',
            }"
            >关闭</span
          >
          <kbd
            class="rounded border p-0.5 text-[10px] shadow-sm"
            :class="{
              'text-gray-600': vElementClass === 'light',
              'text-gray-400': vElementClass === 'dark',
            }"
          >
            Esc
          </kbd>
        </div>
      </div>
    </div>
  </VModal>
</template>
