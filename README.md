# plugin-search-widget

Halo 2.0 的通用搜索组件插件。

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

### 自定义样式

虽然目前不能直接为搜索组件编写额外的样式，但可以通过一系列的 CSS 变量来自定义部分样式，开发者可以根据需求自行在主题中添加这些 CSS 变量，让搜索组件和主题更好地融合。

目前已提供的 CSS 变量：

| 变量名                                              | 描述               |
| --------------------------------------------------- | ------------------ |
| `--halo-search-widget-base-font-size`               | 基础字体大小       |
| `--halo-search-widget-base-border-radius`           | 基础元素的圆角     |
| `--halo-search-widget-base-font-family`             | 基础字体族         |
| `--halo-search-widget-color-modal-layer`            | 模态层颜色         |
| `--halo-search-widget-color-modal-content-bg`       | 模态内容背景颜色   |
| `--halo-search-widget-color-form-input-bg`          | 表单输入背景颜色   |
| `--halo-search-widget-color-form-input`             | 表单输入文字颜色   |
| `--halo-search-widget-color-form-input-placeholder` | 表单输入占位符颜色 |
| `--halo-search-widget-color-form-divider`           | 表单分隔线颜色     |
| `--halo-search-widget-color-result-empty`           | 无结果提示颜色     |
| `--halo-search-widget-color-result-item-bg`         | 结果项背景颜色     |
| `--halo-search-widget-color-result-item-hover-bg`   | 结果项悬停背景颜色 |
| `--halo-search-widget-color-result-item-title`      | 结果项标题颜色     |
| `--halo-search-widget-color-result-item-content`    | 结果项内容颜色     |
| `--halo-search-widget-color-command-kbd-item`       | 命令键盘项颜色     |
| `--halo-search-widget-color-command-kbd-border`     | 命令键盘边框颜色   |

<details>
<summary>点击查看 CSS 代码模板</summary>

```css
:root {
   --halo-search-widget-base-font-size: ;
   --halo-search-widget-base-border-radius: ;
   --halo-search-widget-base-font-family: ;
   --halo-search-widget-color-modal-layer: ;
   --halo-search-widget-color-modal-content-bg: ;
   --halo-search-widget-color-form-input-bg: ;
   --halo-search-widget-color-form-input: ;
   --halo-search-widget-color-form-input-placeholder: ;
   --halo-search-widget-color-form-divider: ;
   --halo-search-widget-color-result-empty: ;
   --halo-search-widget-color-result-item-bg: ;
   --halo-search-widget-color-result-item-hover-bg: ;
   --halo-search-widget-color-result-item-title: ;
   --halo-search-widget-color-result-item-content: ;
   --halo-search-widget-color-command-kbd-item: ;
   --halo-search-widget-color-command-kbd-border: ;
}
```

</details>

### 配色切换方案

根据上面提供的 CSS 变量，也可以通过定义 CSS 变量的方式为搜索组件提供动态切换配色的功能。

以下是实现示例，你可以根据需求自行修改选择器或者媒体查询。

```css
@media (prefers-color-scheme: dark) {
  .color-scheme-auto {
    color-scheme: dark;
    --halo-search-widget-color-modal-layer: rgba(0, 0, 0, 0.8);
    --halo-search-widget-color-modal-content-bg: rgb(15 23 42);
    --halo-search-widget-color-form-input: rgb(255, 255, 255);
    --halo-search-widget-color-form-input-placeholder: rgb(148 163 184);
    --halo-search-widget-color-form-input-bg: rgb(15 23 42);
    --halo-search-widget-color-form-divider: rgb(30 41 59);
    --halo-search-widget-color-result-item-bg: rgb(30 41 59);
    --halo-search-widget-color-result-item-hover-bg: rgb(51 65 85);
    --halo-search-widget-color-result-item-title: rgb(255 255 255);
    --halo-search-widget-color-result-item-content: rgb(148 163 184);
    --halo-search-widget-color-command-kbd-item: rgb(148 163 184);
    --halo-search-widget-color-command-kbd-border: rgb(30 41 59);
    --halo-search-widget-color-result-empty: rgb(148 163 184);
  }
}

.color-scheme-dark {
  color-scheme: dark;
  --halo-search-widget-color-modal-layer: rgba(0, 0, 0, 0.8);
  --halo-search-widget-color-modal-content-bg: rgb(15 23 42);
  --halo-search-widget-color-form-input: rgb(255, 255, 255);
  --halo-search-widget-color-form-input-placeholder: rgb(148 163 184);
  --halo-search-widget-color-form-input-bg: rgb(15 23 42);
  --halo-search-widget-color-form-divider: rgb(30 41 59);
  --halo-search-widget-color-result-item-bg: rgb(30 41 59);
  --halo-search-widget-color-result-item-hover-bg: rgb(51 65 85);
  --halo-search-widget-color-result-item-title: rgb(255 255 255);
  --halo-search-widget-color-result-item-content: rgb(148 163 184);
  --halo-search-widget-color-command-kbd-item: rgb(148 163 184);
  --halo-search-widget-color-command-kbd-border: rgb(30 41 59);
  --halo-search-widget-color-result-empty: rgb(148 163 184);
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
