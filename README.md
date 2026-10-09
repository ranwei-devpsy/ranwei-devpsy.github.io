# Ran Wei Academic Website

魏然教授英文个人主页的 Astro 源码。网站包含 Home、Research、Publications、Teaching 和 About 五个页面，使用 GitHub Pages 发布。

## 网站与发布

正式主页地址为 `https://ranwei-devpsy.github.io/`，直接显示英文首页。Research、Publications、Teaching 和 About 使用根目录下的独立地址。

网站的发布由仓库中的 `.github/workflows/deploy.yml` 完成。该工作流在每次推送至 `main` 后安装依赖、生成静态网页并发布。仓库以源码为准，生成的 `dist/` 无需提交。

仓库的 Settings → Pages 中，Source 使用 GitHub Actions。部署工作流自动读取 GitHub Pages 提供的网址和路径。

## 日常维护

首次使用时，将仓库克隆到本地，在 Codex 中打开项目，并配置有仓库写入权限的 GitHub 登录。项目使用 Node.js 22.22.2。具体的内容文件、修改方法及发布步骤见 [维护说明](docs/MAINTENANCE.md)；AI 接手规则见 [AGENTS.md](AGENTS.md)。

在 Codex 中打开这个项目，提供准确的修改内容，并要求先同步远程仓库、保留现有设计、完成构建和本地预览。查看修改结果后，再要求提交并推送至 `main`。GitHub Actions 完成后，公开网站自动更新。

添加论文时可使用以下指令，并附上完整参考文献和 DOI：

```text
请先同步仓库并阅读 README.md 和 AGENTS.md。将以下论文添加到 Publications，按年份排列，并生成对应的 APA 引用和 BibTeX。保留现有页面设计，构建并打开本地预览，暂不发布。

论文信息：
```

确认本地预览后可继续：

```text
修改已经确认，请提交并推送至 main，检查 GitHub Actions 发布结果和公开页面。
```

更换照片时附上图片，要求替换当前照片并更新图片尺寸属性。照片区域保留自然比例，适配横向或纵向照片。

Codex 项目说明文件 `AGENTS.md` 保存网站的内容、设计和维护规则。维护者仍须确认学术信息与最终修改结果。

## 源码位置

| 内容 | 文件 |
| --- | --- |
| 联系方式、学院链接、内容更新日期 | `src/data/profile.json` |
| 论文、首页选刊、研究领域标签、引用元数据 | `src/data/publications.json` |
| 受邀报告 | `src/data/talks.json` |
| 姓名与机构展示文字、简介、研究方向、课程、教育经历文案、导航文字 | `src/lib/content.ts` |
| 页面结构、经历年份和学术服务列表 | `src/pages/` |
| 照片 | `public/images/ran-wei.png` |
| 字体、颜色、间距和响应式布局 | `src/styles/global.css` |
| 自动发布 | `.github/workflows/deploy.yml` |

源码与生成网站均只包含英文版本。

姓名、职务和机构信息在 `profile.json` 中也有记录；修改这些信息时须同步两处内容。

论文的 `details` 用于网页展示，`bibliography` 用于 APA 和 BibTeX 导出，更新时须保持一致。`selected` 控制首页选刊，`topics` 控制研究领域筛选，`metadataSource` 记录公开核实来源。作者角色标记与共同署名说明应保留原始含义。新增论文的 `id` 须唯一；删除论文时同时更新研究页中引用它的 `paperIds`。

## 本地开发

需要 Node.js 22.22.2 和 npm。

```sh
npm ci
npm run dev
```

打开 `http://127.0.0.1:4321/` 查看网站。

```sh
npm run build
npm run preview
```

生产构建写入 `dist/`。部署环境通过 `SITE_URL` 和 `SITE_BASE` 配置正式地址；GitHub Actions 自动设置这两个参数。本地开发无需设置。

## 官方参考

- [GitHub Pages 建站与仓库命名](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Pages 自动发布工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Codex 使用与项目设置](https://developers.openai.com/codex/quickstart/)
- [Codex 项目说明文件 AGENTS.md](https://developers.openai.com/codex/guides/agents-md/)
