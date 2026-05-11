# partners 生态伙伴主题

基于 `guide` 目录结构扩展：Bento 首页、`channel` 目录筛选、`page` 伙伴详情（含 `layout/theme.liquid` 的 `<head>` 内 JSON-LD）、`statics/become-a-partner` 多步表单。动态字段统一走 `page.settings.*`，站点级线索邮箱见 `config/settings_schema.json` 的 `partner_lead_email`。

## 推荐站点结构

| 页面 | `template_name` / 说明 |
|------|-------------------------|
| 根首页 `/` | `index`（默认 `template_style` 为空即 Bento 门户） |
| 伙伴目录 `/partner-hub`（slug 可自定，首页里用 `site.pages['/partner-hub']`） | `channel`，子级为多个 `page`（每个伙伴一条） |
| 伙伴详情 | `page`，字段见模板内 `{% schema %}` |
| 入驻申请 | 静态页 `statics/become-a-partner.liquid`，URL 一般为 `/become-a-partner` |

示例数据见 `seeds/001_site.yml`、`seeds/002_pages.yml`。

## 首页 `template_style` 矩阵

| `template_style` | 模板文件 | 说明 |
|------------------|----------|------|
| （默认 / 空） | `templates/index.liquid` | Bento + 双区块 + CTA，推荐 |
| `list` | `templates/index.list.liquid` | 搜索 + 标签 + 列表行（玻璃卡片，适配深色壳） |
| `timeline` | `templates/index.timeline.liquid` | 时间线视图（已去掉覆盖全局背景/页脚的 style，适配深色壳） |

## 开发

```shell
# 安装 npm 包
yarn install
# 执行此命令，可在实时把 src 目录的 js/css 代码编译到 assets 目录
yarn dev
```


```shell
# 安装 guard-livereload，浏览器安装 livereload 插件，可实现代码改动，浏览器页面自动刷新
bundle install
bundle exec guard
```

### 安装配置TailwindCSS
[TailwindCSS官网](https://www.tailwindcss.cn/docs/installation)

#### 1.安装Tailwindcss
通过`npm`安装`tailwindcss`，然后创建`tailwind.config.js`配置文件
```bash
npm add -D tailwindcss
npx tailwindcss init
```
#### 2.配置模板文件的路径和自定义样式
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.liquid", "./snippets/**/*.liquid", "./layout/**/*.liquid", "./statics/**/*.liquid"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: () => {
        return {
          slate: {
            150: "#E9EEF5"
          },
          ...["primary", "secondary", "accent", "info", "success", "warning", "error"].reduce((map, name) => {
            return {
              ...map,
              [name]: {
                DEFAULT: `hsl(var(--theme-color-${name}) / <alpha-value>)`,
                lighten: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) calc(var(--theme-color-${name}-hsl-l) + 15%))`,
                darken: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) calc(var(--theme-color-${name}-hsl-l) - 15%))`,
                ...[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].reduce((map,lightness) => {
                  return {
                    ...map,
                    [lightness]: `hsl(var(--theme-color-${name}-hsl-h) var(--theme-color-${name}-hsl-s) ${100 - lighten/10}%)`
                  }
                }, {})
              }
            }
          }, {})
        }
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        18: "4.5rem",
      },
    },
  },
  plugins: [],
}
```
#### 3.引入Tailwindcss到css文件中
例如：`./src/main.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@config '../tailwind.config.js'
```
#### 4.在`package.json`中配置css编译路径
```json
"scripts": {
  "build": "npm-run-all --parallel build:css build:js",
  "build:css": "npx tailwindcss -i ./src/main.css -o ./assets/css/main.css",
  ......
  "dev": "npm-run-all --parallel 'build:css -- --watch' 'build:js -- --watch'"
}
```
#### 5.在`theme.liquid`文件中引入css
```html
{{ 'css/main.css' | asset_url | stylesheet_tag: data-turbo-track: 'reload' }}
```


## 编译与发布

```bash
yarn install
yarn build
```

将 `assets/stylesheets/application.css` 与 `assets/javascripts/application.js` 一并提交或上传至主题包。发布前确认各语言 `locales/*.schema.json` 与 `locales/*.json` 已同步（含 `partners.*` 与 `partner_lead_email` 文案）。
