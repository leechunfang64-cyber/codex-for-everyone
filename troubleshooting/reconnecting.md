# Codex reconnecting 怎么排查

## 现象

Codex Desktop 反复显示 reconnecting，消息发不出去，或者运行一段时间后中断。浏览器能打开网页，不代表 Codex Desktop 的链路一定健康。

## 判断路径

先区分三类问题：

- 账号认证问题。
- Codex Desktop 到 ChatGPT backend 的网络问题。
- 本地代理环境变量或 TUN 路由问题。

不要一上来就清缓存、重装、重登账号。这样可能破坏本来正常的认证状态，却没有处理真正的网络根因。

## 命令

```bash
/Applications/Codex.app/Contents/Resources/codex doctor --summary
```

如果怀疑 shell 代理变量污染：

```bash
env -u HTTP_PROXY -u HTTPS_PROXY -u ALL_PROXY -u http_proxy -u https_proxy -u all_proxy \
  /Applications/Codex.app/Contents/Resources/codex doctor --summary
```

检查关键路径：

```bash
curl --noproxy '*' -I --max-time 15 https://chatgpt.com/backend-api/codex/responses
```

## 预期输出

健康状态下，`codex doctor` 应该能显示 WebSocket connected。`chatgpt.com/backend-api/codex/responses` 对普通 HEAD/GET 请求返回 405 并不一定是坏事，关键是能连到正确服务。

## 错误分叉

- 只有带代理变量时失败：优先排查 `HTTP_PROXY` / `HTTPS_PROXY` / `ALL_PROXY` 是否被 Codex 子进程继承。
- 浏览器正常但 Codex 失败：排查 Desktop 进程网络路径，不要只看浏览器。
- `auth.openai.com` 正常但 Codex 仍失败：继续检查 `chatgpt.com/backend-api/codex/responses` 和 WebSocket。

## 不要做什么

- 不要先删除认证文件。
- 不要只凭一次 curl 结果下结论。
- 不要把所有问题都归因于 OpenAI 账号。
- 不要在还没验证代理路径前反复重装 Codex。

真实排障要看链路，不看情绪。能定位路径，才有修复收益。
