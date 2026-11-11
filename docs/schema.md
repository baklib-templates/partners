# 字段

以设置项的 `id` 为准。下面每个 id 都可写。

## 全站

| id | 类型 | 作用 |
| --- | --- | --- |
| `slogan` | 文本 | 一句话描述 |
| `company_name` | 文本 | 公司名称 |
| `copyright_info` | 文本 | 备案或版权 |
| `partner_lead_email` | 文本 | 入驻线索邮箱 |
| `partner_type` | 多行文本 | 伙伴类型选项 |
| `partner_region` | 多行文本 | 伙伴区域选项 |
| `partner_tier` | 多行文本 | 伙伴等级选项 |
| `sort_rule` | 选择 | 列表排序 |
| `is_allow_feedback` | 开关 | 是否展示用户反馈 |
| `is_show_visit_count` | 开关 | 是否展示访问量 |
| `is_allow_header` | 开关 | 是否展示页头 |
| `is_allow_footer` | 开关 | 是否展示页脚 |
| `head_html` | HTML | 自定义 head |
| `header_menu_html` | HTML | 顶部导航 |
| `footer_menu_html` | HTML | 底部区域 |
| `weixin_app_id` / `weixin_app_secret` / `weixin_enabled` / `weixin_debug` | 文本或开关 | 微信分享 |

## 首页

`index`（生态门户首页）的子页面是 `channel`。

| id | 类型 | 作用 |
| --- | --- | --- |
| `description` | 富文本 | 首页说明 |

`index.list`（Index）没有设置项。子页面是 `page` 和 `channel`。

## 目录壳 `channel`

名字是伙伴分类与检索。子页面是 `page`。

| id | 类型 | 作用 |
| --- | --- | --- |
| `intro` | 多行文本 | 目录页说明 |

## 伙伴详情 `page`

名字是伙伴 / 集成详情。子页面仍是 `page`。正文栏是 `body`，不是 `content`。

| id | 类型 | 作用 |
| --- | --- | --- |
| `title` | 文本 | 伙伴或应用名称 |
| `tagline` | 文本 | 合作口号 |
| `logo_image_url` | 图片 | Logo |
| `body` | 富文本 | 详细介绍 |
| `partner_type` | 选择 | 伙伴类型 |
| `region` | 选择 | 区域 |
| `partner_tier` | 选择 | 等级 |
| `website_url` | 文本 | 官网 |
| `action_link` | 文本 | 转化按钮链接 |
| `action_label` | 文本 | 转化按钮文案 |
| `resource_links` | 多行文本 | 资源链接 |
| `contact_email` | 文本 | 联系邮箱 |
| `industries` | 多行文本 | 覆盖行业 |

`search`、`tag` 和反馈流没有设置项，不是内容模板。
