# plugin-search-widget

此插件是对 [halo-sigs/search-widget](https://github.com/halo-sigs/search-widget) 的一个封装，安装之后即可通过调用 JS API 的形式唤起搜索框。

## 开发环境

```bash
git clone git@github.com:halo-sigs/plugin-search-widget.git

# 或者当你 fork 之后

git clone git@github.com:{your_github_id}/plugin-search-widget.git
```

```bash
cd path/to/plugin-search-widget
```

```bash
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

## 使用方式

1. 在 [Releases](https://github.com/halo-sigs/plugin-search-widget/releases) 下载最新的 JAR 文件。
2. 在 Halo 后台的插件管理上传 JAR 文件进行安装。

> 需要注意的是，此插件需要主题进行适配，不会主动显示搜索入口。

## 主题适配

此插件是一个通用的搜索框插件，主题需要做的只是通过 JS API 唤起搜索框即可，以下是代码示例：

```html
<li th:if="${pluginFinder.available('PluginSearchWidget')}">
  <a href="javascript:SearchWidget.open()" title="搜索">
    搜索
  </a>
</li>
```

其中，`pluginFinder.available('PluginSearchWidget')` 的作用是判断使用者是否安装和启用了此插件，如果没有安装或者没有启用，那么就不会显示搜索入口。
