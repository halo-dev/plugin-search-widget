# plugin-search-widget

Halo 2.0 的通用搜索组件插件。

![Preview](./images/preview.png)

## 使用方式

1. 下载，目前提供以下两个下载方式：
    - GitHub Releases：访问 [Releases](https://github.com/halo-dev/plugin-search-widget/releases) 下载 Assets 中的 JAR 文件。
    - Halo 应用市场：<https://halo.run/store/apps/app-DlacW>。
2. 安装，插件安装和更新方式可参考：<https://docs.halo.run/user-guide/plugins>。

> 需要注意的是，此插件需要主题进行适配，不会主动显示搜索入口。

## 开发环境

```bash
git clone git@github.com:halo-dev/plugin-search-widget.git

# 或者当你 fork 之后

git clone git@github.com:{your_github_id}/plugin-search-widget.git
```

```bash
cd path/to/plugin-search-widget
```

```bash
./gradlew pnpmInstall

./gradlew build
```

修改 Halo 配置文件：

```yaml
halo:
  plugin:
    runtime-mode: development
    classes-directories:
      - "build/classes"
      - "build/resources"
    lib-directories:
      - "libs"
    fixedPluginPath:
      - "/path/to/plugin-search-widget"
```

## 主题适配

### 调用搜索弹框

此插件是一个通用的搜索框插件，主题需要做的只是通过 JS API 唤起搜索框即可，以下是代码示例：

```html
<li th:if="${pluginFinder.available('PluginSearchWidget')}">
  <a href="javascript:SearchWidget.open()" title="搜索">
    搜索
  </a>
</li>
```

其中，`pluginFinder.available('PluginSearchWidget')` 的作用是判断使用者是否安装和启用了此插件，如果没有安装或者没有启用，那么就不会显示搜索入口。

#### 配置选项

`SearchWidget.open()` 支持传入配置参数：

```javascript
// 不传参数，使用默认配置
SearchWidget.open();

// 传入搜索选项（旧版本兼容方式）
SearchWidget.open({ keyword: '关键词' });

// 传入完整配置（推荐）
SearchWidget.open({
  searchOptions: {
    keyword: '关键词',
    // 其他搜索选项...
  },
  lockScroll: false // 是否锁定页面滚动，默认为 true
});
```

**参数说明：**

- `searchOptions`: 搜索 API 的选项参数
- `lockScroll`: 是否在打开搜索框时锁定页面滚动（隐藏滚动条），默认为 `true`
  - 设置为 `true` 时，打开搜索框会隐藏页面滚动条（默认行为）
  - 设置为 `false` 时，打开搜索框不会隐藏页面滚动条，可以避免页面抖动问题

**注意：** 如果你的网站在打开搜索框时出现页面抖动或内容偏移的问题，可以将 `lockScroll` 设置为 `false` 来解决。

### 自定义样式

虽然目前不能直接为搜索组件编写额外的样式，但可以通过一系列的 CSS 变量来自定义部分样式，开发者可以根据需求自行在主题中添加这些 CSS 变量，让搜索组件和主题更好地融合。

目前已提供的 CSS 变量：

| 变量名                                              | 描述               | 备注                                                                             |
|-----------------------------------------------------|------------------|----------------------------------------------------------------------------------|
| `--halo-search-widget-base-font-size`               | 基础字体大小       | --                                                                               |
| `--halo-search-widget-base-font-family`             | 字体               | --                                                                               |
| `--halo-search-widget-base-rounded`                 | 边框圆角           | --                                                                               |
| `--halo-search-widget-base-bg-color`                | 基础背景色         | --                                                                               |
| `--halo-search-widget-primary-color`                | 主色               | --                                                                               |
| `--halo-search-widget-muted-color`                  | 辅助色             | --                                                                               |
| `--halo-search-widget-content-color`                | 文本色             | --                                                                               |
| `--halo-search-widget-modal-bg-color`               | 模态框背景色       | --                                                                               |
| `--halo-search-widget-modal-layer-color`            | 模态框遮挡层背景色 | --                                                                               |
| `--halo-search-widget-hit-bg-color`                 | 搜索结果条目背景色 | --                                                                               |
| `--halo-search-widget-divider-color`                | 分割线颜色         | --                                                                               |
| `--halo-search-widget-kbd-border-color`             | 快捷键图标边框颜色 | --                                                                               |
| `--halo-search-widget-kbd-shadow`                   | 快捷键图标阴影     | --                                                                               |
| `--halo-search-widget-base-border-radius`           | 基础元素的圆角     | 已过时，将在未来的版本移除，后续使用 `--halo-search-widget-base-rounded` 代替      |
| `--halo-search-widget-color-modal-layer`            | 模态层颜色         | 已过时，将在未来的版本移除，后续使用 `--halo-search-widget-modal-layer-color` 代替 |
| `--halo-search-widget-color-modal-content-bg`       | 模态内容背景颜色   | 已过时，将在未来的版本移除，后续使用 `--halo-search-widget-modal-bg-color` 代替    |
| `--halo-search-widget-color-form-input-bg`          | 表单输入背景颜色   | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-form-input`             | 表单输入文字颜色   | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-form-input-placeholder` | 表单输入占位符颜色 | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-form-divider`           | 表单分隔线颜色     | 已过时，将在未来的版本移除，后续使用 `--halo-search-widget-divider-color` 代替     |
| `--halo-search-widget-color-result-empty`           | 无结果提示颜色     | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-result-item-bg`         | 结果项背景颜色     | 已过时，将在未来的版本移除，后续使用 `--halo-search-widget-hit-bg-color` 代替      |
| `--halo-search-widget-color-result-item-hover-bg`   | 结果项悬停背景颜色 | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-result-item-title`      | 结果项标题颜色     | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-result-item-content`    | 结果项内容颜色     | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-command-kbd-item`       | 命令键盘项颜色     | 已过时，将在未来的版本移除                                                        |
| `--halo-search-widget-color-command-kbd-border`     | 命令键盘边框颜色   | 已过时，将在未来的版本移除，后续使用 `--halo-search-widget-kbd-border-color` 代替  |

<details>
<summary>点击查看 CSS 代码模板</summary>

```css
:root{
  --halo-search-widget-base-font-size: ;
  --halo-search-widget-base-font-family: ;
  --halo-search-widget-base-rounded: ;
  --halo-search-widget-base-bg-color: ;
  --halo-search-widget-primary-color: ;
  --halo-search-widget-muted-color: ;
  --halo-search-widget-content-color: ;
  --halo-search-widget-modal-bg-color: ;
  --halo-search-widget-modal-layer-color: ;
  --halo-search-widget-hit-bg-color: ;
  --halo-search-widget-divider-color: ;
  --halo-search-widget-kbd-border-color: ;
  --halo-search-widget-kbd-shadow: ;
}
```

</details>

### 配色切换方案

根据上面提供的 CSS 变量，也可以通过定义 CSS 变量的方式为搜索组件提供动态切换配色的功能。

以下是实现示例，你可以根据需求自行修改选择器或者媒体查询。

```css
@media (prefers-color-scheme: dark) {
  .color-scheme-auto,
  [data-color-scheme='auto'] {
    color-scheme: dark;
    --halo-search-widget-muted-color: #cbd5e1;
    --halo-search-widget-content-color: #f1f5f9;
    --halo-search-widget-hit-bg-color: #090a11;
    --halo-search-widget-modal-bg-color: #15172a;
    --halo-search-widget-modal-layer-color: #000000cc;
    --halo-search-widget-base-bg-color: #090a11;
    --halo-search-widget-divider-color: #1e293b;
    --halo-search-widget-kbd-border-color: #334155;
    --halo-search-widget-kbd-shadow: 0px 2px 0px 0px #ffffff1a;
  }
}

.color-scheme-dark,
.dark,
[data-color-scheme='dark'] {
  color-scheme: dark;
  --halo-search-widget-muted-color: #cbd5e1;
  --halo-search-widget-content-color: #f1f5f9;
  --halo-search-widget-hit-bg-color: #090a11;
  --halo-search-widget-modal-bg-color: #15172a;
  --halo-search-widget-modal-layer-color: #000000cc;
  --halo-search-widget-base-bg-color: #090a11;
  --halo-search-widget-divider-color: #1e293b;
  --halo-search-widget-kbd-border-color: #334155;
  --halo-search-widget-kbd-shadow: 0px 2px 0px 0px #ffffff1a;
}
```

此外，为了让主题可以更加方便的适配暗黑模式，此插件也提供了一套暗黑模式的配色方案，主题可以直接使用此方案，而不需要自己去适配暗黑模式，适配方式如下：

1. 在 html 或者 body 标签添加 class：
   1. `color-scheme-auto`：自动模式，根据系统的暗黑模式自动切换。
   2. `color-scheme-dark` / `dark`：强制暗黑模式。
   3. `color-scheme-light` / `light`：强制明亮模式。
2. 在 html 或者 body 标签添加 `data-color-scheme` 属性：
   1. `auto`：自动模式，根据系统的暗黑模式自动切换。
   2. `dark`：强制暗黑模式。
   3. `light`：强制明亮模式。

## Credits

- [Algolia DocSearch](https://github.com/algolia/docsearch): 搜索组件的 UI 设计灵感来源于 DocSearch。
