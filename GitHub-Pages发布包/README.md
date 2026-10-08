# 王金凯个人主页

两份独立的求职网页，分别展示商业分析 / 数据分析与金融科技。每页有自己的案例、经历、作品和联系方式，不提供方向切换或共用选择页。

**当前状态：本地页面已制作；尚未发布到 GitHub Pages。**

## 先看效果

直接用浏览器打开 `analytics/index.html` 或 `fintech/index.html`。两页各自完整可用，无需安装依赖。根目录 `index.html` 是商业分析页的副本，方便打开站点根地址。

可选本地服务：在此目录运行 `python -m http.server 8000 --bind 127.0.0.1`，访问 `http://127.0.0.1:8000/`。

## 修改内容

| 文件 | 修改内容 |
|---|---|
| `index.html` | 商业分析页的根地址副本，修改商业分析内容后同步更新 |
| `analytics/index.html` | 商业分析 / 数据分析的案例、经历和作品 |
| `fintech/index.html` | 金融科技的案例、经历和作品 |
| `assets/css/styles.css` | 两页共用的字体、颜色、布局和手机适配 |

改动后刷新浏览器即可看到效果。页内导航对应 `cases`、`experience`、`works`、`contact`，修改这些标识时需同步导航链接。

两页的经历与教育分别保存，更新时请检查两页。邮箱同时出现在首屏与联系区；修改邮箱时更新文字及 `mailto:` 链接。网页展示可核实的简历与公开项目内容，不含真实业务数据库记录；流程图均为方法示意。量化项目展示公开 Notebook 中可核对的研究方法，不展示未经复核的收益数字。

## 两份独立发布包

另附“商业分析-独立网页.zip”和“金融科技-独立网页.zip”。每个包都包含自己的 `index.html`、样式与说明，不需要另一个方向的文件。可以分别上传到两个 GitHub Pages 仓库，获得两个独立站点；也可以采用下述同一仓库的两个独立页面路径。

每个主案例新增直接可见的分析过程，四个作品补充流程与实现、设计要点。摘要便于扫读，补充说明供进一步了解。

## 发布到 GitHub Pages

推荐使用个人网站仓库 `JKW-NB.github.io`。当前工具未能创建新仓库或配置 Pages，因此需要在 GitHub 完成以下设置：

1. 登录 JKW-NB，在 GitHub 新建 **Public** 仓库，名称为 `JKW-NB.github.io`，勾选添加 README。若同名仓库已存在，先检查已有网站，不覆盖。
2. 解压本次交付的发布包。在仓库选择 **Add file → Upload files**，上传包内的 `index.html`、`analytics` 文件夹、`fintech` 文件夹、`assets` 文件夹，以及 `.nojekyll`、`README.md`。保留文件夹结构，网站的 `index.html` 必须位于仓库根目录。不要只上传 ZIP 文件，也不要上传外层“个人主页”文件夹、`.git` 或两份原始简历。
3. 提交到 `main` 分支。进入 **Settings → Pages**，在 Source 选择 **Deploy from a branch**，Branch 选择 `main`，目录选择 **/(root)**，点击 **Save**。
4. 等 GitHub 显示网站已发布，再分别检查两个独立方向页；若显示错误，查看仓库 Actions 中的 Pages 部署记录。

设置步骤依据 [GitHub Pages 快速开始](https://docs.github.com/en/pages/quickstart) 与 [发布源设置](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。本网站直接使用 HTML，标题在各页 `<title>` 内，无需配置 Jekyll 主题。

### 发布成功后放入简历的地址

以下是采用上述仓库名时的**预期地址，尚未验证上线**：

- 商业分析 / 数据分析：`https://jkw-nb.github.io/analytics/`
- 金融科技：`https://jkw-nb.github.io/fintech/`
- 根地址：`https://jkw-nb.github.io/`（商业分析页副本）

若选择其他仓库名称，页面地址会增加该仓库路径，例如 `https://jkw-nb.github.io/portfolio/analytics/`。站内资源与链接使用相对路径，兼容此情况。

## 验证与后续维护

验证范围和实际结果记录在 `docs/verification.md`。首版不依赖 JavaScript，案例通过浏览器原生展开控件阅读，手机与键盘浏览均可使用。

目前公开联系方式为邮箱与 GitHub。后续若增加简历下载，先准备适合公开的对应版本，再加入实际文件和下载链接。作品说明与项目变化、在读状态及内容更新时间应保持同步。