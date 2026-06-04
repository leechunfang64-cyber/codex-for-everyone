# token exchange failed 怎么理解

## 现象

登录或认证过程中出现 `token exchange failed`。这通常说明本地客户端拿到授权结果后，和服务端交换 token 的过程失败。

## 判断路径

这个错误不要直接等同于“账号坏了”。它可能来自：

- 浏览器登录流程中断。
- 本地回调端口不可用。
- 网络代理阻断认证请求。
- 系统时间异常。
- 客户端版本过旧。

## 命令

检查 Codex 版本和诊断：

```bash
codex --version
codex doctor --summary
```

检查系统时间：

```bash
date
```

临时去掉代理变量再试：

```bash
env -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY codex doctor --summary
```

## 预期输出

如果去掉代理变量后认证链路恢复，说明问题更可能是代理环境污染，而不是账号本身。

## 错误分叉

- 浏览器登录页打不开：先处理浏览器和网络。
- 浏览器登录成功但客户端失败：检查本地回调、代理变量和 Codex 版本。
- 所有 OpenAI 页面都无法访问：先处理基础网络。

## 不要做什么

- 不要把 API Key 和 ChatGPT 登录混为一谈。
- 不要在不同终端里盲目重复登录。
- 不要把 token、cookie、认证日志贴到公开仓库。

认证问题的成本在于错误操作会扩大风险。先定位，再动手。
