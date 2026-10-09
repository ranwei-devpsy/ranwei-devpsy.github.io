# 网站内容维护

## 修改与发布

网站使用 Astro 生成静态网页。维护时修改仓库中的源码和内容文件；GitHub Actions 在代码推送至 `main` 后自动构建并发布。仅保存本地文件或创建本地提交不会更新公开网页。

常规流程：同步仓库 → 修改内容 → 本地构建与预览 → 确认内容 → 提交并推送至 `main` → 等待发布成功 → 刷新正式网页。

## AI 首次接手

1. 阅读根目录 `AGENTS.md`、`README.md` 和本说明，检查当前分支、远程地址和未提交修改。
2. 根据下表定位内容文件，保留现有正式学术风格和页面设计。
3. 使用 `npm ci` 安装锁定的依赖，使用 `npm run dev` 打开本地预览。常规编辑地址为 `http://127.0.0.1:4321/`。
4. 完成修改后运行 `npm run build`，查看受影响的内容。论文更新还须检查 APA 引用和 BibTeX 文件。
5. 获得发布指令后提交并推送，检查 Actions 中 Publish academic website 的执行结果和公开网页。报告实际完成状态。

## 内容定位

| 修改事项 | 文件与操作 |
| --- | --- |
| 邮箱、学院主页链接 | 修改 `src/data/profile.json` 的 `email`、`facultyPage` |
| 姓名、职务、机构 | 同步 `profile.json` 和 `src/lib/content.ts` 的英文文案 |
| 首页研究简介 | 修改 `src/lib/content.ts` 的 `home.bio` |
| 研究方向、方法 | 修改 `themes`、`research`；相关论文使用 `paperIds` |
| 新增或修改论文 | 修改 `src/data/publications.json`，各条目 `id` 唯一 |
| 首页选刊 | 修改论文条目的 `selected` 布尔值 |
| 论文筛选标签 | 修改论文条目的 `topics`，使用已有领域键 |
| 课程名称、开课学期 | 修改 `teaching` |
| 受邀报告 | 修改 `src/data/talks.json`，标题和机构保存在 `en` 字段中 |
| 学历、任职、荣誉、服务 | 文案位于 `about`；年份和列表位于 `src/pages/about.astro` |
| 个人照片 | 替换 `public/images/ran-wei.png`；同步首页图片的实际宽高属性 |
| 更新日期 | 内容更新时修改 `profile.updatedISO`，格式为 `YYYY-MM-DD` |

### 论文记录

使用文件中已有条目的结构填写作者、年份、题名、期刊、DOI、署名说明和研究标签。论文列表按年份排列，同年条目保留数据文件中的顺序；新增同年论文时自行选择其位置。

`details` 决定网页显示的卷期、页码或发表状态；`bibliography` 决定引用导出，两者须保持一致。作者的 `+` 和 `*` 标记保留在完整论文列表，APA 和 BibTeX 导出会移除这些角色标记。`note` 用于共同署名说明。共同资深作者不得改写为通讯作者。

`selected` 为 `true` 的条目出现在首页。研究主题的 `paperIds` 指向论文 `id`；删除条目时须同步这些引用。当前领域键为 `language`、`interaction`、`regulation`、`cognition`、`ai`。公开的核实来源可记录在 `metadataSource`。

### 照片

保留照片的自然比例，沿用现有最大宽高限制。替换照片时同步图片格式、路径及 HTML 宽高属性，无需裁剪成与旧照片完全相同的比例。

## 使用 AI 修改

首次接手或新增论文时，可以提供以下指令及论文信息：

```text
请先同步仓库，阅读 AGENTS.md、README.md 和 docs/MAINTENANCE.md。根据以下信息更新论文列表，保留现有设计，检查网页引用和 BibTeX，完成生产构建后打开本地预览，暂不发布。

论文信息：
```

确认预览后：

```text
修改已确认，请提交并推送至 main，等待 GitHub Actions 发布成功，再检查正式主页。
```

## 无 AI 时修改

可在 GitHub 仓库中打开相应内容文件，点击编辑图标，修改后选择 Commit changes 并提交到 `main`。GitHub 会自动构建和发布。直接编辑 JSON 或 TypeScript 文件时须保持原有语法。

在电脑上编辑时，修改后须自行提交并推送至 GitHub。构建与发布由 GitHub Actions 完成，无需每次在本地手动运行发布命令。日常维护不需要另建后台、数据库或登录服务。

## 发布结果

查看 Actions 中最新的 Publish academic website。build 和 deploy 均成功后，刷新正式网页查看更新。提交已推送但工作流未成功，表示新版本尚未发布。失败时根据失败步骤和日志修正后重新推送，或请维护者协助。

正式主页地址为 `https://ranwei-devpsy.github.io/`。发布设置可在仓库的 Settings → Pages 中查看。
