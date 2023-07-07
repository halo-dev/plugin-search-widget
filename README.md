# plugin-search-widget

此插件是对 [halo-sigs/search-widget](https://github.com/halo-sigs/search-widget) 的一个封装，安装之后即可通过调用 JS API 的形式唤起搜索框。

## 使用方式

1. 下载，目前提供以下两个下载方式：
    - GitHub Releases：访问 [Releases](https://github.com/halo-sigs/plugin-search-widget/releases) 下载 Assets 中的 JAR 文件。
    - Halo 应用市场：<https://halo.run/store/apps/app-DlacW>。
2. 安装，插件安装和更新方式可参考：<https://docs.halo.run/user-guide/plugins>。

> 需要注意的是，此插件需要主题进行适配，不会主动显示搜索入口。

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

此插件是一个通用的搜索框插件，主题需要做的只是通过 JS API 唤起搜索框即可，以下是代码示例：

```html
<li th:if="${pluginFinder.available('PluginSearchWidget')}">
  <a href="javascript:SearchWidget.open()" title="搜索">
    搜索
  </a>
</li>
```

其中，`pluginFinder.available('PluginSearchWidget')` 的作用是判断使用者是否安装和启用了此插件，如果没有安装或者没有启用，那么就不会显示搜索入口。
