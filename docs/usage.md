# 怎么用

1. 用这个模板建 cms 站点。伙伴页写在站点上，不要再建知识库。
2. 还没有自己的伙伴时，可以用种子里的示例站看结构。示例会跳过编排。
3. 首页 `index` 的子页面是 `channel`。`index.list` 的子页面是 `page` 和 `channel`。`channel` 是目录壳，详情用 `page`。
4. 详情页的名称写 `title`，介绍写 `body`。
5. 从网址或文件导入时，向导写入的是 `title` 和 `content`。这个模板的正文栏是 `body`，对不上，需要在页面上改 `body`。
6. 提问入口是 `-/search`。

编排方案见 [activation.yml](activation.yml)：伙伴页留在原路径、顶层目录收成伙伴组，或全部放在首页下。
