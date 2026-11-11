# 结构

范围是 cms。快速开始放入网址或文件时，只建这个模板的站点，确认栏目后再写成站点页面，不建知识库。

`seeds/` 里有一套示例站。选「先用示例体验」时用这套种子，种子自己已有栏目，会跳过编排。

## 首页、壳、详情

首页 `templates/index.liquid`，名字是生态门户首页。子页面是 `channel`。

`templates/index.list.liquid`，名字是 Index，没有设置项。子页面是 `page` 和 `channel`。

`templates/channel.liquid`，名字是伙伴分类与检索。它是壳，子页面是 `page`。

正文是 `templates/page.liquid`，名字是伙伴 / 集成详情。富文本 id 是 `body`，不是 `content`。子页面仍是 `page`。

导入正文的模板名是 `page`。向导写入的是 `title` 和 `content`，这个模板的正文栏是 `body`，对不上。

`search`、`tag` 和反馈流没有设置项，不是内容模板。提问入口是 `-/search`。
