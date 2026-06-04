# Codex for Everyone

A practical Codex handbook for everyone: learn AI coding by building real tools, products, and one-person company infrastructure.

一本面向真实开发场景的 OpenAI Codex 开源实战手册。这里记录 Codex 使用方法、AI 编程工作流、提示词模式、网络排障、真实项目案例和长期实践经验。

## 项目定位

Codex for Everyone 不是官方文档翻译，也不是工具收藏夹。它关注真实开发里的三个问题：

- 需求怎么拆，Codex 才能真正干活。
- 报错怎么查，才能从现象走到根因。
- 一次项目怎么沉淀为教程、模板、产品和现金流入口。

面向读者：

- 想用 AI 编程但没有系统方法的新手。
- 独立开发者、内容创业者和一人公司操盘者。
- 已经会用 ChatGPT / Codex / Claude Code，但缺少真实项目闭环的人。

## 内容结构

- `Start`：Codex 是什么、普通人为什么也能 AI 编程、需求拆解与反馈迭代。
- `Workflows`：md 转 Word、图片处理、浏览器扩展、邮箱提取、虚拟产品发卡页、PPT 生成、小红书素材库。
- `Troubleshooting`：Codex reconnecting、token exchange failed、stream disconnected、GitHub、Vercel、环境变量、API Key 泄露。
- `Productization`：从工具到产品、从案例到教程、从信任到现金流。
- `Principles`：需求判断、连续调试、做出结果、上线收钱复用、生产资料。

## 本地开发

```bash
npm install
npm run dev
```

构建静态站点：

```bash
npm run build
npm run preview
```

## Cloudflare Pages

- Framework preset: `None` 或 `VitePress`
- Build command: `npm run build`
- Build output directory: `.vitepress/dist`
- Production branch: `main`

## License

本知识库采用 [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议。

你可以自由分享、转载和改编本项目内容，但必须遵守：

- 署名：保留来源和作者信息。
- 非商业使用：未经许可，不得用于商业销售、付费课程、商业资料包或其他直接商业变现。
- 相同方式共享：如果你基于本项目改编并公开发布，也需要使用同样或兼容的协议。
- 保留说明：不要删除原始许可证和来源链接。

如果你希望商业使用、企业内训、付费课程引用或二次分发，请先取得授权。

## 贡献原则

优先贡献真实案例、真实排障和可复用提示词。不要提交 API Key、客户隐私、不可验证的收益数字或没有验证路径的经验判断。
