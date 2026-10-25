# X Social Sidebar for Operit

在 [Operit](https://github.com/AAswordman/Operit) 中复刻 X (Twitter) 移动端体验的侧边栏工具包。

## 功能

- **主页时间线** — 关注流 / 热门流切换
- **搜索** — 关键词检索帖子与用户
- **通知** — 点赞 / 转推 / 回复 / 关注 分类
- **私信聊天** — 双账号模拟对话
- **个人主页** — 资料卡、媒体网格、帖子列表
- **交互** — 发帖、点赞、转推、收藏、删除、关注
- **媒体上传** — 本地图片 / 视频，带封面帧
- **本地持久化** — 状态写入 `state.json`，重启不丢

## 安装

### 方式一：直接安装包

下载 [`x_social_sidebar.toolpkg`](./x_social_sidebar.toolpkg)，在 Operit 中导入即可。

### 方式二：从源码安装

```bash
# 克隆本仓库后，用 Operit 的「导入 ToolPkg」功能指向仓库根目录
```

## 目录结构

```
manifest.json              # ToolPkg 清单
main.js                    # 入口
packages/x_social.js       # x_social 工具子包（35 个工具）
shared/store.js            # 账号归一化等共享逻辑
shared/types.js            # 类型定义
ui/x_social_sidebar/index.ui.js  # WebView 外壳（内嵌 HTML）
metadata.json              # 工具元数据
resources/index.html       # 前端完整实现
```

## 工具一览

`x_social` 子包提供以下能力：

| 类别 | 工具 |
|---|---|
| 帖子 | `post` `status` `delete` `like` `retweet` `bookmark` `listComments` `comment` |
| 用户 | `profile` `updateProfile` `follow` `unfollow` `following` `followers` |
| 社交 | `notifications` `search` `directMessages` `sendDM` `chatLinks` `socialBridgeQueue` |

## 数据存储

运行时数据存放在：

```
/sdcard/Download/Operit/plugins/x_social_sidebar/
├── state.json     # 帖子、账号、通知、私信
└── media/         # 上传的图片与视频
```

卸载插件不会自动删除这些文件，需要时手动清理。

## 隐私

本仓库不包含任何用户数据。首次运行时使用默认账号（`@you` / `@operit_ai`），
所有帖子与媒体都保存在本地设备上，不会上传到任何服务器。

## License

MIT
