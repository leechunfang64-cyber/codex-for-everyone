# 环境变量怎么配置

## 现象

本地能跑，部署后失败；或者换一台机器后 API 调不通。很多时候不是代码坏了，而是环境变量没有配置一致。

## 判断路径

环境变量要分三层：

- 本地开发：`.env.local` 或 shell export。
- CI/CD：GitHub Actions、Vercel、Cloudflare Pages 的环境变量面板。
- 运行时：服务端进程真正读到的变量。

## 命令

查看本地变量是否存在：

```bash
printenv | sort | rg "OPENAI|API|TOKEN|KEY"
```

检查 `.env` 是否被 Git 跟踪：

```bash
git status --short
git check-ignore .env .env.local
```

## 预期输出

`.env` 和 `.env.local` 应该被 `.gitignore` 忽略。仓库里只保留 `.env.example`，说明需要哪些变量，但不包含真实密钥。

## 错误分叉

- 本地有变量，部署没有：去部署平台配置。
- 变量名拼写不一致：统一命名并更新文档。
- 前端读不到变量：检查框架是否要求公开前缀。
- 服务端变量泄露到前端：立即修复构建配置。

## 不要做什么

- 不要把真实密钥写进 README。
- 不要把 `.env` 提交到 GitHub。
- 不要在前端暴露服务端密钥。
- 不要用一个 Key 跑所有环境。

环境变量管理看起来琐碎，但它直接关系到安全、成本和故障恢复。
