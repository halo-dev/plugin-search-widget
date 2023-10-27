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

### 适配配色

目前，此插件为了让主题更好的适配颜色，对外暴露了以下 CSS 变量：

```css
--halo-search-widget-color-modal-layer: ;             /* 搜索弹框遮罩层颜色 */
--halo-search-widget-color-modal-content-bg: ;        /* 搜索弹框内容区域背景色 */
--halo-search-widget-color-form-input: ;              /* 搜索框输入框字体颜色 */
--halo-search-widget-color-form-input-placeholder: ;  /* 搜索框输入框占位符颜色 */
--halo-search-widget-color-form-input-bg: ;           /* 搜索框输入框背景色 */
--halo-search-widget-color-form-divider: ;            /* 搜索框分割线颜色 */
--halo-search-widget-color-result-item-bg: ;          /* 搜索结果项背景色 */
--halo-search-widget-color-result-item-hover-bg: ;    /* 搜索结果项鼠标悬浮背景色 */
--halo-search-widget-color-result-item-title: ;       /* 搜索结果项标题颜色 */
--halo-search-widget-color-result-item-content: ;     /* 搜索结果项内容颜色 */
--halo-search-widget-color-command-kbd-item: ;        /* 搜索结果项快捷键提示字体颜色 */
--halo-search-widget-color-command-kbd-border: ;      /* 搜索结果项快捷键提示边框颜色 */
--halo-search-widget-color-result-empty: ;            /* 搜索结果为空时的颜色 */
```

主题可以利用这些 CSS 变量来适配主题的配色，或者用于适配暗黑模式。

适配主题配色示例：

```css
:root {
  --halo-search-widget-color-modal-layer: rgb(107 114 128 / 0.75);
  --halo-search-widget-color-modal-content-bg: #fff;
  --halo-search-widget-color-form-input: #000;
  --halo-search-widget-color-form-input-placeholder: #999;
  --halo-search-widget-color-form-input-bg: #fff;
  --halo-search-widget-color-form-divider: #eaeaea;
  --halo-search-widget-color-result-item-bg: #fff;
  --halo-search-widget-color-result-item-hover-bg: #f5f5f5;
  --halo-search-widget-color-result-item-title: #000;
  --halo-search-widget-color-result-item-content: #999;
  --halo-search-widget-color-command-kbd-item: #fff;
  --halo-search-widget-color-command-kbd-border: #fff;
  --halo-search-widget-color-result-empty: #999;
}
```

适配暗黑模式切换示例：

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
