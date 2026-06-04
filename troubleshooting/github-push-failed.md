# GitHub 推送失败怎么办

## 现象

执行 `git push` 后失败，常见表现包括认证失败、没有权限、远程仓库不存在、分支名不对、被保护分支拒绝。

## 判断路径

先不要反复 push。按顺序确认：

1. 当前是不是 Git 仓库。
2. 当前分支叫什么。
3. 远程地址指向哪里。
4. 当前 Git 身份是谁。
5. GitHub 是否有仓库权限。

## 命令

```bash
git status --short --branch
git remote -v
git branch --show-current
git config user.name
git config user.email
```

如果远程还没配置：

```bash
git remote add origin https://github.com/<user>/<repo>.git
git branch -M main
git push -u origin main
```

## 预期输出

- 分支应为 `main` 或你准备推送的目标分支。
- `origin` 应该指向正确 GitHub 仓库。
- 用户邮箱应符合你想用的 Git 身份。

## 错误分叉

- `repository not found`：仓库不存在，或当前账号无权限。
- `authentication failed`：检查 GitHub 登录、token、credential helper。
- `non-fast-forward`：远程有你本地没有的提交，需要先拉取并处理冲突。
- `protected branch hook declined`：不能直接推主分支，需要 PR。

## 不要做什么

- 不要用 `git reset --hard` 试图解决 push 问题。
- 不要把 GitHub token 写进远程 URL 后提交。
- 不要在不清楚身份时推到主分支。

Git 是资产账本。推送失败不是小事，先确认你要把什么资产交给哪个远程仓库。
