/* METADATA
{
  "name": "x_social",
  "display_name": "X Social",
  "description": "Two-account X social simulation",
  "category": "Chat",
  "enabledByDefault": true,
  "tools": [
    {
      "name": "post",
      "description": "发布一条 X 帖子，可带文字、本地图片/视频路径或 base64 媒体数据。",
      "parameters": [
        {
          "name": "author",
          "type": "string",
          "required": false,
          "description": "发帖账号：user（用户本人）或 ai（AI 自己）。AI 代发时必须显式传 ai，否则会落到用户账号上。默认 user"
        },
        {
          "name": "text",
          "type": "string",
          "required": false,
          "description": "帖子正文"
        },
        {
          "name": "imagePaths",
          "type": "array",
          "required": false,
          "description": "本地图片路径数组"
        },
        {
          "name": "videoPaths",
          "type": "array",
          "required": false,
          "description": "本地视频路径数组"
        },
        {
          "name": "imageData",
          "type": "array",
          "required": false,
          "description": "base64 图片数组，元素 {data,name}"
        },
        {
          "name": "videoData",
          "type": "array",
          "required": false,
          "description": "base64 视频数组，元素 {data,name,durationMs}"
        }
      ]
    },
    {
      "name": "listComments",
      "description": "读取某条帖子的全部评论。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "帖子 postId"
        }
      ]
    },
    {
      "name": "comment",
      "description": "给一条帖子发表评论。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "要评论的帖子 postId"
        },
        {
          "name": "text",
          "type": "string",
          "required": true,
          "description": "评论内容"
        },
        {
          "name": "author",
          "type": "string",
          "required": false,
          "description": "评论者：user 或 ai。AI 代评时必须显式传 ai，否则会落到用户账号。默认 user"
        }
      ]
    },
    {
      "name": "status",
      "description": "查询帖子列表与账号状态。",
      "parameters": [
        {
          "name": "author",
          "type": "string",
          "required": false,
          "description": "user/ai，省略查全部"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多返回条数，默认 50"
        },
        {
          "name": "includeRetweets",
          "type": "boolean",
          "required": false,
          "description": "是否包含转发副本，默认 true"
        },
        {
          "name": "light",
          "type": "boolean",
          "required": false,
          "description": "轻量模式：true 时不返回评论正文（只给 commentCount），显著减小返回体。首页/列表轮询用这个。"
        }
      ]
    },
    {
      "name": "like",
      "description": "点赞或取消点赞某条帖子。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "postId"
        },
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "user/ai"
        }
      ]
    },
    {
      "name": "retweet",
      "description": "转发或取消转发某条帖子。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "postId"
        },
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "actor"
        }
      ]
    },
    {
      "name": "bookmark",
      "description": "收藏或取消收藏某条帖子。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "postId"
        },
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "actor"
        }
      ]
    },
    {
      "name": "deletePost",
      "description": "删除帖子及其转发副本。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "postId"
        }
      ]
    },
    {
      "name": "follow",
      "description": "关注或取消关注另一个账号。",
      "parameters": [
        {
          "name": "follower",
          "type": "string",
          "required": false,
          "description": "follower"
        },
        {
          "name": "target",
          "type": "string",
          "required": false,
          "description": "target"
        }
      ]
    },
    {
      "name": "reset",
      "description": "清空帖子数据，可选保留账号关注关系。",
      "parameters": [
        {
          "name": "keepAccounts",
          "type": "boolean",
          "required": false,
          "description": "keepAccounts"
        }
      ]
    },
    {
      "name": "profile",
      "description": "读取某个账号的主页资料：资料字段、帖子列表、关注关系。",
      "parameters": [
        {
          "name": "who",
          "type": "string",
          "required": false,
          "description": "user 或 ai，默认 user"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多返回帖子数，默认 50"
        }
      ]
    },
    {
      "name": "dmList",
      "description": "获取私信会话列表（含最后一条消息与未读数）。",
      "parameters": [
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "user 或 ai，默认 user"
        }
      ]
    },
    {
      "name": "dmMessages",
      "description": "读取与某个账号的私信历史。",
      "parameters": [
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "发起方 user/ai，默认 user"
        },
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "对方 user/ai，默认 ai"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多返回条数，默认 200"
        }
      ]
    },
    {
      "name": "dmSend",
      "description": "发送一条私信。",
      "parameters": [
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "发送方 user/ai，默认 user"
        },
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "接收方 user/ai，默认 ai"
        },
        {
          "name": "text",
          "type": "string",
          "required": false,
          "description": "消息正文"
        },
        {
          "name": "imagePaths",
          "type": "array",
          "required": false,
          "description": "本地图片路径数组"
        },
        {
          "name": "videoPaths",
          "type": "array",
          "required": false,
          "description": "本地视频路径数组"
        }
      ]
    },
    {
      "name": "dmRead",
      "description": "把某个会话标记为已读。",
      "parameters": [
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "user 或 ai，默认 user"
        },
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "对方 user/ai，默认 ai"
        }
      ]
    },
    {
      "name": "updateProfile",
      "description": "更新账号资料（昵称、用户名、简介、头像色、头像图片）。who=ai 表示修改 AI 账号自己，AI 想改自己的资料时必须显式传 who=ai（缺省是 user）。",
      "parameters": [
        {
          "name": "who",
          "type": "string",
          "required": false,
          "description": "要修改的账号：user（用户本人）或 ai（AI 自己）。修改 AI 自己的资料时必须显式传 ai，默认 user"
        },
        {
          "name": "displayName",
          "type": "string",
          "required": false,
          "description": "昵称"
        },
        {
          "name": "bio",
          "type": "string",
          "required": false,
          "description": "简介"
        },
        {
          "name": "handle",
          "type": "string",
          "required": false,
          "description": "用户名（不含 @）"
        },
        {
          "name": "avatarColor",
          "type": "string",
          "required": false,
          "description": "头像底色，如 #1D9BF0"
        },
        {
          "name": "avatarPath",
          "type": "string",
          "required": false,
          "description": "头像图片本地路径；传空字符串清除"
        }
      ]
    },
    {
      "name": "notifications",
      "description": "获取通知列表（点赞/转发/关注/提及）。",
      "parameters": [
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "user 或 ai，默认 user"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多返回条数，默认 50"
        }
      ]
    },
    {
      "name": "readNotifications",
      "description": "把某个账号收到的通知全部标记为已读，清掉通知页角标上的未读计数。",
      "parameters": [
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "user 或 ai，默认 user"
        }
      ]
    },
    {
      "name": "search",
      "description": "按关键词搜索帖子与账号。",
      "parameters": [
        {
          "name": "q",
          "type": "string",
          "required": true,
          "description": "关键词"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多返回帖子数，默认 60"
        }
      ]
    },
    {
      "name": "listChats",
      "description": "列出 Operit 中的对话，用于把 AI 私信绑定到真实角色卡对话。",
      "parameters": []
    },
    {
      "name": "bindChat",
      "description": "把某个 X 账号（默认 ai）的私信绑定到指定 Operit 对话；chatId 传空字符串表示解绑。绑定后私信会自动转发进该对话并回填 AI 回复。",
      "parameters": [
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "对端账号 user/ai，默认 ai"
        },
        {
          "name": "chatId",
          "type": "string",
          "required": false,
          "description": "目标对话 ID，传空字符串解绑"
        }
      ]
    },
    {
      "name": "chatLinks",
      "description": "查看当前私信与 Operit 对话的绑定关系。",
      "parameters": []
    },
    {
      "name": "bridgeSend",
      "description": "把一条文本送进绑定的 Operit 对话，并返回发送前的助手消息指纹（桥接第一步）。",
      "parameters": [
        {
          "name": "chatId",
          "type": "string",
          "required": true,
          "description": "绑定的对话 ID"
        },
        {
          "name": "text",
          "type": "string",
          "required": true,
          "description": "要发送的文本"
        }
      ]
    },
    {
      "name": "bridgePoll",
      "description": "检查绑定对话是否出现新的 AI 回复，有则写入私信并返回（桥接第二步）。",
      "parameters": [
        {
          "name": "chatId",
          "type": "string",
          "required": true,
          "description": "绑定的对话 ID"
        },
        {
          "name": "before",
          "type": "string",
          "required": false,
          "description": "bridgeSend 返回的指纹"
        },
        {
          "name": "peek",
          "type": "string",
          "required": false,
          "description": "预留"
        },
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "写回的对端账号，默认 ai"
        },
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "发起方，默认 user"
        }
      ]
    },
    {
      "name": "describePostImages",
      "description": "只读：把某条帖子的图片注册进宿主图片池，返回宿主的多模态图片标签（type=image，带 UUID），使对话里的 AI 能直接看到照片本体；注册失败时自动降级为文字描述。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "帖子 ID"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多描述几张图，默认 3"
        }
      ]
    },
    {
      "name": "bridgeSocial",
      "description": "把一条社交事件（发帖/用户评论/AI 评论）送进绑定的 Operit 对话，让对话里的 AI 知道 X 平台上发生了什么。只发送不等待，返回 beforeTs 作为「新回复」基准。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "帖子 ID"
        },
        {
          "name": "kind",
          "type": "string",
          "required": false,
          "description": "事件类型：post（新帖，带图时会把照片本体一起发给 AI）/ user_comment（用户评论）/ ai_comment（AI 评论，不会真的发出去，仅返回提示），默认 post"
        },
        {
          "name": "commentId",
          "type": "string",
          "required": false,
          "description": "评论 ID；kind 为评论类且省略时取该帖最后一条评论"
        }
      ]
    },
    {
      "name": "socialBridgeTarget",
      "description": "只读：返回某账号当前绑定的对话 ID（发帖/评论后前端据此决定把事件送进哪个对话）。",
      "parameters": [
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "要查询的账号，默认 ai"
        }
      ]
    },
    {
      "name": "socialBridgeQueue",
      "description": "只读：取回「等待桥接的社交事件队列」。AI 通过工具调用发布帖子/评论（author=ai）时不经过前端 UI 帧，由后端入队、前端泵投递到绑定对话。",
      "parameters": [
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多返回条数，默认 20"
        }
      ]
    },
    {
      "name": "socialBridgeAck",
      "description": "确认（并清空）已投递的社交事件，避免同一条事件被重复送进对话。",
      "parameters": [
        {
          "name": "ids",
          "type": "array",
          "required": true,
          "description": "已成功投递的事件 id 列表（来自 socialBridgeQueue）"
        },
        {
          "name": "postIds",
          "type": "array",
          "required": false,
          "description": "这些事件对应的帖子 ID 列表。用于给该帖打「待回复窗口」标记：窗口内 AI 针对该帖发出的评论不再入队，避免「AI 评论 → 桥接 → AI 再评论」无限循环。省略时后端会从队列项里自动推导。"
        }
      ]
    },
    {
      "name": "aiReplyComment",
      "description": "把 AI 在对话里的回复写回某条帖子的评论区（AI 身份，带防重复与防桥接循环）。由 UI 帧读到新回复后调用。",
      "parameters": [
        {
          "name": "postId",
          "type": "string",
          "required": true,
          "description": "目标帖子 ID"
        },
        {
          "name": "text",
          "type": "string",
          "required": true,
          "description": "AI 回复正文"
        },
        {
          "name": "sourceTs",
          "type": "number",
          "required": false,
          "description": "该回复在对话里的真实时间戳，用于评论排序"
        },
        {
          "name": "dedupe",
          "type": "string",
          "required": false,
          "description": "去重键，省略则按 postId+时间戳+正文前缀自动生成"
        }
      ]
    },
    {
      "name": "chatHistory",
      "description": "只读：读取绑定对话的最近消息历史（Operit 对话原文）。用于把 AI 回复同步回 X 私信，不发送任何消息。",
      "parameters": [
        {
          "name": "chatId",
          "type": "string",
          "required": false,
          "description": "对话 ID，省略则用当前绑定的对话"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "最多返回条数，默认 20"
        }
      ]
    },
    {
      "name": "aiReply",
      "description": "把一条 AI 回复写入 X 私信（由 UI 帧读到对话里的新回复后调用）。",
      "parameters": [
        {
          "name": "text",
          "type": "string",
          "required": true,
          "description": "AI 回复正文"
        },
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "对端账号，默认 ai"
        },
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "接收方，默认 user"
        },
        {
          "name": "dedupe",
          "type": "string",
          "required": false,
          "description": "去重键；相同键不会重复写入"
        },
        {
          "name": "sinceTs",
          "type": "number",
          "required": false,
          "description": "时间游标基线（毫秒时间戳）。只接受比该时间更新的回复，用于避免把历史旧回复重复写进私信"
        },
        {
          "name": "sourceTs",
          "type": "number",
          "required": false,
          "description": "该条 AI 回复在绑定对话里的真实时间戳（毫秒）。落库时用它当消息时间，保证气泡顺序 = 真实对话顺序"
        }
      ]
    },
    {
      "name": "fixAiTimestamps",
      "description": "【修复】把 X 私信里 AI 消息的错误时间戳（写入时刻）修正为绑定对话里的真实时间，并按真实时间重新排序。只读对话，不发消息。",
      "parameters": [
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "对端账号，默认 ai"
        },
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "本方账号，默认 user"
        },
        {
          "name": "chatId",
          "type": "string",
          "required": false,
          "description": "指定对话 id，默认用绑定的对话"
        },
        {
          "name": "dryRun",
          "type": "boolean",
          "required": false,
          "description": "true=只预演不写盘（默认），false=实际写入修复"
        }
      ]
    },
    {
      "name": "aiReplyCursor",
      "description": "只读：读取 AI 回复的时间游标。前端在发送消息那一刻取当前游标作为基线，之后只同步更新的回复。",
      "parameters": [
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "对端账号，默认 ai"
        },
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "接收方，默认 user"
        }
      ]
    },
    {
      "name": "chatBundle",
      "description": "【性能】一次性返回打开聊天界面所需的全部数据：私信消息、会话列表、通知、账号资料、对话绑定与 AI 回复游标。原来打开会话要连打 5~6 次工具（dmRead/dmMessages/dmList/chatLinks/notifications/aiReplyCursor），每次都全量读写 state.json，页面明显卡顿；此工具一次调用拿全。",
      "parameters": [
        {
          "name": "actor",
          "type": "string",
          "required": false,
          "description": "发起方 user/ai，默认 user"
        },
        {
          "name": "peer",
          "type": "string",
          "required": false,
          "description": "对方 user/ai，默认 ai"
        },
        {
          "name": "limit",
          "type": "number",
          "required": false,
          "description": "私信消息条数上限，默认 200"
        },
        {
          "name": "markRead",
          "type": "boolean",
          "required": false,
          "description": "是否顺手把该会话标记为已读，默认 true"
        },
        {
          "name": "includeThreads",
          "type": "boolean",
          "required": false,
          "description": "是否返回会话列表，默认 true"
        },
        {
          "name": "includeNotifications",
          "type": "boolean",
          "required": false,
          "description": "是否返回通知，默认 true"
        },
        {
          "name": "includeChatLinks",
          "type": "boolean",
          "required": false,
          "description": "是否返回对话绑定信息，默认 true"
        }
      ]
    }
  ]
}
*/
var XSocialTools = (function () {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/shared/store.ts
  var store_exports = {};
  __export(store_exports, {
    accountOf: () => accountOf,
    defaultState: () => defaultState,
    ensureDirs: () => ensureDirs,
    findPost: () => findPost,
    getTools: () => getTools,
    loadState: () => loadState,
    makeId: () => makeId,
    makePost: () => makePost,
    mediaDir: () => mediaDir,
    normalizeAccountId: () => normalizeAccountId,
    now: () => now,
    saveState: () => saveState
  });
  function pickStoreDir() {
    try {
      const tp = globalThis.ToolPkg;
      if (tp && typeof tp.getConfigDir === "function") {
        const dir = tp.getConfigDir("x_social_sidebar");
        if (dir) return String(dir);
      }
    } catch (e) {
    }
    return "/sdcard/Download/Operit/cleanOnExit/x_social_sidebar";
  }
  function now() {
    return Date.now();
  }
  function makeId(prefix) {
    return prefix + "_" + Date.now().toString(36) + "_" + Math.floor(Math.random() * 1e6).toString(36);
  }
  function defaultAccounts() {
    return {
      user: {
        id: "user",
        handle: "@you",
        displayName: "You",
        bio: "\u672C\u8D26\u53F7\uFF08\u7528\u6237\uFF09",
        avatarColor: "#1D9BF0",
        joined: "2026-10",
        following: ["ai"]
      },
      ai: {
        id: "ai",
        handle: "@operit_ai",
        displayName: "Operit AI",
        bio: "\u672C\u8D26\u53F7\uFF08AI\uFF09",
        avatarColor: "#7856FF",
        joined: "2026-10",
        following: ["user"]
      }
    };
  }
  function defaultState() {
    return { version: 1, posts: [], accounts: defaultAccounts() };
  }
  function getTools() {
    return globalThis.Tools;
  }
  /* ================================================================
     【性能·状态缓存】后端每次工具调用都要读写 state.json（42KB），
     而 loadState 一次就是 **4 次宿主往返**：
       mkdir(STORE_DIR) + mkdir(MEDIA_DIR) + exists(state.json) + read(state.json)
     打开聊天界面原本要调 6 个工具 → 20+ 次文件往返，这就是卡顿的一大来源。

     优化三件套：
       ① ensureDirs 每个引擎实例只做一次（目录不会凭空消失）→ 省 2 次往返
       ② state.json 的**原始字符串**缓存 3 秒：
          命中缓存时直接 JSON.parse，不再走宿主读文件 → 省 2 次往返
          关键：返回的是**新对象**（每次都重新 parse），
          所以调用方随便改这个对象都不会污染缓存，语义与读文件完全一致。
       ③ saveState 写盘后同步刷新缓存，保证「写完立刻能读到」。

     正确性：所有写操作都经过 saveState（缓存随之刷新），
     所以缓存与磁盘始终一致；万一有外部直接改文件，最多延迟 3 秒生效。
     ================================================================ */
  var __dirsReady = false;
  var __stateCache = { raw: null, ts: 0 };
  var __stateCacheTTL = 3000;

  async function ensureDirs() {
    if (__dirsReady) return;
    const Tools = getTools();
    try {
      await Tools.Files.mkdir(STORE_DIR, true, "android");
    } catch (e) {
    }
    try {
      await Tools.Files.mkdir(MEDIA_DIR, true, "android");
    } catch (e) {
    }
    __dirsReady = true;
  }
  function mediaDir() {
    return MEDIA_DIR;
  }
  function normalizeStateShape(parsed) {
    if (!parsed || !parsed.posts) return null;
    const d = defaultState();
    parsed.accounts = Object.assign(d.accounts, parsed.accounts || {});
    parsed.version = parsed.version || 1;
    return parsed;
  }
  async function loadState() {
    const Tools = getTools();
    await ensureDirs();
    /* --- 命中缓存：跳过 exists + read 两次宿主往返 --- */
    const t = Date.now();
    if (__stateCache.raw !== null && t - __stateCache.ts < __stateCacheTTL) {
      try {
        const cached = normalizeStateShape(JSON.parse(__stateCache.raw));
        if (cached) return cached;
      } catch (e) { }
    }
    try {
      const exists = await Tools.Files.exists(STORE_FILE, "android");
      if (!exists || !exists.exists) {
        __stateCache.raw = null;
        __stateCache.ts = 0;
        return defaultState();
      }
      const res = await Tools.Files.read(STORE_FILE, "android");
      const raw = res && (res.content !== void 0 ? res.content : res.data);
      if (!raw) return defaultState();
      let rawText = typeof raw === "string" ? raw : JSON.stringify(raw);
      __stateCache.raw = rawText;
      __stateCache.ts = Date.now();
      const parsed = normalizeStateShape(JSON.parse(rawText));
      if (!parsed) return defaultState();
      return parsed;
    } catch (e) {
      return defaultState();
    }
  }
  async function saveState(state) {
    const Tools = getTools();
    await ensureDirs();
    /* 【性能】紧凑序列化：state.json 目前有 42KB，用 indent=2 写出来很大，
       每次写盘都要多写一倍多的字节。去掉缩进后体积约小 20%，
       读盘时的 JSON.parse 几乎不变（1ms 左右），纯赚。 */
    const text = JSON.stringify(state);
    await Tools.Files.write(STORE_FILE, text, false, "android");
    /* 写完立刻刷新缓存，保证「刚写入的内容马上能读到」 */
    __stateCache.raw = text;
    __stateCache.ts = Date.now();
  }
  function normalizeAccountId(value) {
    let v = String(value || "").trim().toLowerCase();
    if (!v) return "user";
    // 去掉前导 @，兼容 "@ai" / "@operit_ai" 这类带 @ 的写法
    v = v.replace(/^@+/, "");
    // 只认明确的 AI 标记，避免 "ailin"/"aircraft" 之类被误判成 AI
    if (v === "ai" || v === "a i" || v === "assistant" || v === "bot" || v === "operit" || v === "operit_ai" || v === "operit ai") return "ai";
    if (v.indexOf("operit_ai") === 0 || v.indexOf("operit ai") === 0) return "ai";
    if (v.indexOf("ai_") === 0 || v.indexOf("ai-") === 0) return "ai";
    return "user";
  }
  function accountOf(state, id) {
    return state.accounts[id] || defaultAccounts()[id];
  }
  function makePost(authorId, state, text, attachments) {
    const acc = accountOf(state, authorId);
    return {
      id: makeId("post"),
      authorId,
      authorHandle: acc.handle,
      authorDisplayName: acc.displayName,
      text: text || "",
      createdAtMs: now(),
      attachments: attachments || [],
      likedBy: [],
      retweetedBy: [],
      bookmarkedBy: [],
      comments: []
    };
  }
  function findPost(state, postId) {
    for (const p of state.posts) {
      if (p.id === postId) return p;
    }
    return null;
  }
  var STORE_DIR, STORE_FILE, MEDIA_DIR;
  var init_store = __esm({
    "src/shared/store.ts"() {
      STORE_DIR = pickStoreDir();
      STORE_FILE = STORE_DIR + "/state.json";
      MEDIA_DIR = STORE_DIR + "/media";
    }
  });

  // src/packages/x_social.ts
  var x_social_exports = {};
  __export(x_social_exports, {
    api: () => api
  });
  init_store();
  function ok(data, message) {
    return { success: true, data, message };
  }
  function fail(message) {
    return { success: false, message };
  }
  async function wrap(func, params) {
    try {
      const result = await func(params || {});
      complete(result);
    } catch (error) {
      complete({ success: false, message: `\u6267\u884C\u5931\u8D25: ${error && error.message ? error.message : String(error)}` });
    }
  }
  function extFromName(name, fallback) {
    const m = /\.[a-zA-Z0-9]{1,8}$/.exec(name || "");
    return m ? m[0] : fallback;
  }
  function detectMime(name) {
    const ext = extFromName(name, "").toLowerCase();
    if (ext === ".png") return "image/png";
    if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
    if (ext === ".webp") return "image/webp";
    if (ext === ".gif") return "image/gif";
    if (ext === ".mp4") return "video/mp4";
    if (ext === ".mov") return "video/quicktime";
    if (ext === ".webm") return "video/webm";
    if (ext === ".mkv") return "video/x-matroska";
    return "application/octet-stream";
  }
  // 按媒体类型挑一个「一定能被正确识别」的落盘扩展名。
  // 图片统一存 .jpg，扩展名和 mime 天然对齐；
  // 视频沿用原扩展名，取不到就用 .mp4。
  function pickExt(name, kind) {
    const raw = extFromName(String(name || ""), "").toLowerCase();
    if (kind === "image") {
      if (raw === ".png" || raw === ".webp" || raw === ".gif" || raw === ".bmp") return raw;
      return ".jpg";
    }
    if (raw === ".mp4" || raw === ".mov" || raw === ".webm" || raw === ".mkv") return raw;
    return ".mp4";
  }
  async function fileExists(path) {
    try {
      const res = await getTools().Files.exists(path, "android");
      return !!(res && (res.exists === true || res.exists === "true" || res.success === true));
    } catch (e) {
      return false;
    }
  }
  // 【修复·mime 判定】原先 mime 取自「原文件名」的扩展名，
  // 前端选图给的临时名（如 picked_1792842708302_xxx）没有扩展名，
  // 于是所有选图附件的 mime 都退化成 application/octet-stream。
  // 现在改成按**实际落盘的目标扩展名**判定 —— mime 永远和文件真实内容一致。
  // 【修复·视频不显示封面】
// 旧实现：视频附件只存 path，前端 <video> 没有 poster，
//          WebView 里 preload="metadata" 常常拿不到首帧 → 视频位置一片纯黑。
// 新实现：视频落盘后立刻抽一张首帧图存到 media 目录，
//          附件对象里带上 poster 字段，前端渲染成 <video poster="...">。
//
    // 抽帧用宿主注入的 Tools.FFmpeg（与宿主内置 ffmpeg 包同一套 FFmpeg 6.0）。
    // 【修复·视频封面抽帧一直失败】
    // 旧实现：Tools.FFmpeg.execute({ command: "..." }) —— 传对象。
    // 但宿主沙盒注入的 FFmpeg.execute 期望的是**扁平字符串**，
    // 传对象时整个 {command:...} 被当成输出文件名，FFmpeg 报
    // "Unable to find a suitable output format for '{command:...}'" → 退出码 1 → 无封面。
    // 宿主实测（Tools 探针）：
    //   execute({command})      → 失败（把对象当输出名）
    //   execute("字符串")        → ✅ 成功产出 jpg
    //   execute([数组])          → 失败（数组被 join 成逗号串）
    //   exec / run               → 宿主未提供这两个方法
    //   convert                  → 需要 input_path/output_path，不能抽帧
    // 所以正确写法是：execute("扁平命令字符串")。
    async function extractVideoPoster(videoPath) {
        try {
            const Tools = getTools();
            if (!Tools || !Tools.FFmpeg) return "";
            const posterPath = mediaDir() + "/" + makeId("poster") + ".jpg";
            // 扁平命令字符串（不要包成对象）
            const cmd = '-y -ss 0.1 -i "' + videoPath + '" -frames:v 1 -vf scale=480:-1 "' + posterPath + '"';
            try {
                await Tools.FFmpeg.execute(cmd);
            } catch (e) {
                // 兼容个别版本仍用对象形态
                try { await Tools.FFmpeg.execute({ command: cmd }); } catch (e2) { }
            }
            // 抽帧成功的话目标文件应该存在
            if (await fileExists(posterPath)) return posterPath;
            return "";
        } catch (e) {
            return "";
        }
    }
async function copyLocalToMedia(src, kind) {
    try {
        if (!src || !String(src)) return null;
        const p = String(src);
        const exists = await fileExists(p);
        if (!exists) return null;
        const name = p.split("/").pop() || kind + "_" + Date.now();
        const ext = pickExt(name, kind);
        const dest = mediaDir() + "/" + makeId(kind) + ext;
        await getTools().Files.copy(p, dest, false, "android", "android");
        const att = { id: makeId("att"), type: kind, path: dest, name, mime: detectMime(dest) };
        // 视频顺带抽首帧当封面
        if (kind === "video") {
            const poster = await extractVideoPoster(dest);
            if (poster) att.poster = poster;
        }
        return att;
    } catch (e) {
        return null;
    }
  }
  async function writeBase64ToMedia(data, name, kind, durationMs) {
    try {
      let raw = String(data || "");
      const m = new RegExp("^data:[^;]+;base64,(.*)$", "s").exec(raw);
      if (m) raw = m[1];
      if (!raw) return null;
      const cleanName = String(name) || kind + "_" + Date.now() + (kind === "image" ? ".jpg" : ".mp4");
      const ext = pickExt(cleanName, kind);
      const dest = mediaDir() + "/" + makeId(kind) + ext;
      await getTools().Files.writeBinary(dest, raw, "android");
      const att = { id: makeId("att"), type: kind, path: dest, name: cleanName, mime: detectMime(dest), durationMs };
      // 【修复·视频封面】base64 上传的视频也要抽首帧。
      // 前端选图/选视频走的就是 base64 通道（readAsDataURL），
      // 旧实现只在 copyLocalToMedia（本地路径）里抽帧，
      // 导致「从相册选视频」永远没有封面。
      if (kind === "video") {
          const poster = await extractVideoPoster(dest);
          if (poster) att.poster = poster;
      }
      return att;
    } catch (e) {
      return null;
    }
  }
  async function collectAttachments(params) {
    const out = [];
    for (const p of Array.isArray(params.imagePaths) ? params.imagePaths : []) {
      const att = await copyLocalToMedia(String(p), "image");
      if (att) out.push(att);
    }
    for (const p of Array.isArray(params.videoPaths) ? params.videoPaths : []) {
      const att = await copyLocalToMedia(String(p), "video");
      if (att) out.push(att);
    }
    for (const item of Array.isArray(params.imageData) ? params.imageData : []) {
      const att = await writeBase64ToMedia(item && item.data, item && item.name, "image");
      if (att) out.push(att);
    }
    for (const item of Array.isArray(params.videoData) ? params.videoData : []) {
      const att = await writeBase64ToMedia(item && item.data, item && item.name, "video", item && item.durationMs);
      if (att) out.push(att);
    }
    return out;
  }
  function serializeComment(c, state) {
    // 评论者昵称同样实时解析，改名后旧评论同步
    let name = c.authorDisplayName;
    let handle = c.authorHandle;
    if (state && state.accounts && c.authorId) {
      const acc = state.accounts[c.authorId];
      if (acc) {
        name = acc.displayName || name;
        handle = acc.handle || handle;
      }
    }
    return {
      id: c.id,
      authorId: c.authorId,
      authorHandle: handle,
      authorDisplayName: name,
      text: String(c.text || ""),
      createdAtMs: Number(c.createdAtMs || 0),
      // 【新增·社交事件桥接】前端可据此区分「AI 通过桥接回填的评论」
      fromBridge: !!c.fromBridge,
    };
  }
  function serializePost(p, state, opts) {
    opts = opts || {};
    /* 【性能】light 模式：首页轮询只要知道评论**条数**，
       不需要每条评论的正文/作者/时间。
       旧实现每次 status 都把全部评论正文塞进返回体，
       评论一多，JSON 体积和解析耗时线性上涨 → 界面越用越卡。 */
    const light = !!opts.light;
    // 【修复·昵称同步】作者昵称/用户名不再用发帖瞬间的快照，
    // 而是实时从账号表解析 —— 用户改了昵称或用户名后，
    // 所有旧帖都会立刻显示新名字，不会再出现「帖子不同步」。
    let liveHandle = p.authorHandle;
    let liveName = p.authorDisplayName;
    if (state && state.accounts && p.authorId) {
      const acc = state.accounts[p.authorId];
      if (acc) {
        liveHandle = acc.handle || liveHandle;
        liveName = acc.displayName || liveName;
      }
    }
    // 转发副本的原作者同样实时解析
    let rtLiveHandle = p.retweetOfAuthorHandle;
    let rtLiveName = p.retweetOfAuthorDisplayName;
    if (state && state.accounts && p.retweetOfPostId) {
      const origin = findPost(state, p.retweetOfPostId);
      if (origin) {
        const oacc = state.accounts[origin.authorId];
        if (oacc) {
          rtLiveHandle = oacc.handle || rtLiveHandle;
          rtLiveName = oacc.displayName || rtLiveName;
        }
      }
    }
    return {
      id: p.id,
      authorId: p.authorId,
      authorHandle: liveHandle,
      authorDisplayName: liveName,
      text: p.text,
      createdAtMs: p.createdAtMs,
      likeCount: p.likedBy.length,
      retweetCount: p.retweetedBy.length,
      bookmarkCount: p.bookmarkedBy.length,
      likedBy: p.likedBy.slice(),
      retweetedBy: p.retweetedBy.slice(),
      bookmarkedBy: p.bookmarkedBy.slice(),
      commentCount: Array.isArray(p.comments) ? p.comments.length : 0,
      comments: light ? [] : (Array.isArray(p.comments) ? p.comments.map((c) => serializeComment(c, state)) : []),
      attachments: p.attachments.map((a) => ({
        id: a.id,
        type: a.type,
        path: a.path,
        name: a.name,
        mime: detectMime(a.name || a.path),
        durationMs: a.durationMs,
        // 【修复·视频封面】把首帧图路径一起下发，前端渲染 <video poster="...">
        poster: a.poster || ""
      })),
      retweetOfPostId: p.retweetOfPostId,
      retweetOfAuthorId: p.retweetOfAuthorId || "",
      retweetOfAuthorHandle: rtLiveHandle,
      retweetOfAuthorDisplayName: rtLiveName,
      retweetOfText: p.retweetOfText,
      retweetOfCreatedAtMs: p.retweetOfCreatedAtMs,
      retweetOfAttachments: p.retweetOfAttachments || []
    };
  }
  function post(params) {
    return wrap(async () => {
      const state = await loadState();
      const authorId = normalizeAccountId(params.author);
      const text = String(params.text || "").trim();
      const attachments = await collectAttachments(params);
      if (!text && attachments.length === 0) {
        return fail("\u53D1\u5E16\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF08\u6587\u5B57\u4E0E\u9644\u4EF6\u81F3\u5C11\u4E00\u9879\uFF09");
      }
      const p = makePost(authorId, state, text, attachments);
      state.posts.unshift(p);
      /* 【社交事件桥接·AI 侧·重要修正】
         原来：AI 自己发的帖子会入队 → 前端泵把它当「新帖」送回绑定对话
               → AI 收到「【X 平台 · 新帖子】…这是你自己发的」→ 可能再发一条 → 回环。
         现在：**AI 自己发的东西一律不入队**。
               AI 收到自己的回声没有任何新信息。
               「用户发帖 → 通知 AI」的链路不受影响，
               因为那条链路由前端在用户操作时直接投递（bridgeSocialEvent）。
         注意：**不要**在这里恢复入队逻辑。 */
      await saveState(state);
      /* 【社交事件桥接】发帖后的桥接由前端 UI 帧驱动（见 index.html 的
         bridgeSocialEvent）。这里**不再自动触发**：
          ① 后端工具返回后包运行时会回收，等不到 AI 回复；
          ② 前端已经在发帖成功后调用 bridgeSocialEvent，
             两边同时触发会把同一条事件重复送进对话。
         AI 若需手动补发，用 bridgeSocial 工具。 */
      return ok({ post: serializePost(p, state) }, "\u5DF2\u53D1\u5E03");
    }, params);
  }
  function status(params) {
    return wrap(async () => {
      const state = await loadState();
      const authorFilter = params.author ? normalizeAccountId(params.author) : null;
const includeRetweets = params.includeRetweets !== false;
      const limit = Math.max(1, Math.min(100, Number(params.limit || 50)));
      /* 【性能】light=true 时不返回评论正文（只要条数）。
         前端首页轮询用这个模式，能显著减小返回体与 JSON 解析开销。 */
      const light = params.light === true || params.light === "true";
      let posts = state.posts.slice();
      if (authorFilter) posts = posts.filter((p) => p.authorId === authorFilter);
      if (!includeRetweets) posts = posts.filter((p) => !p.retweetOfPostId);
      posts.sort((a, b) => b.createdAtMs - a.createdAtMs);
      posts = posts.slice(0, limit);
      const accounts = [accountOf(state, "user"), accountOf(state, "ai")];
      return ok({ accounts, posts: posts.map((p) => serializePost(p, state, { light })), total: state.posts.length }, "查询完成");
    }, params);
  }
  function toggle(params, field, label) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      const actorId = normalizeAccountId(params.actor);
      if (!postId) return fail("\u7F3A\u5C11 postId");
      const p = findPost(state, postId);
      if (!p) return fail("\u5E16\u5B50\u4E0D\u5B58\u5728: " + postId);
      const arr = p[field];
      const idx = arr.indexOf(actorId);
      let active;
      if (idx >= 0) {
        arr.splice(idx, 1);
        active = false;
      } else {
        arr.push(actorId);
        active = true;
      }
      // 点赞时给帖子作者发通知（收藏是私密的，不发通知）
      if (field === "likedBy" && active) {
        pushNotification(state, "like", p.authorId, actorId, {
          postId: p.id,
          text: String(p.text || "").slice(0, 120),
        });
      }
      await saveState(state);
      return ok({ postId, actor: actorId, active, post: serializePost(p, state) }, label + (active ? "\u6210\u529F" : "\u5DF2\u53D6\u6D88"));
    }, params);
  }
  function like(params) {
    return toggle(params, "likedBy", "\u70B9\u8D5E");
  }
  function bookmark(params) {
    return toggle(params, "bookmarkedBy", "\u6536\u85CF");
  }
  function retweet(params) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      const actorId = normalizeAccountId(params.actor);
      if (!postId) return fail("\u7F3A\u5C11 postId");
      const origin = findPost(state, postId);
      if (!origin) return fail("\u5E16\u5B50\u4E0D\u5B58\u5728: " + postId);
      const idx = origin.retweetedBy.indexOf(actorId);
      if (idx >= 0) {
        origin.retweetedBy.splice(idx, 1);
        state.posts = state.posts.filter((p) => !(p.retweetOfPostId === postId && p.authorId === actorId));
        await saveState(state);
        return ok({ postId, actor: actorId, active: false, post: serializePost(origin, state) }, "\u5DF2\u53D6\u6D88\u8F6C\u53D1");
      }
      origin.retweetedBy.push(actorId);
      const acc = accountOf(state, actorId);
      const rt = {
        id: makeId("rt"),
        authorId: actorId,
        authorHandle: acc.handle,
        authorDisplayName: acc.displayName,
        text: "",
        createdAtMs: Date.now(),
        attachments: [],
        likedBy: [],
        retweetedBy: [],
        bookmarkedBy: [],
        retweetOfPostId: origin.id,
        retweetOfAuthorId: origin.authorId,
        retweetOfAuthorHandle: origin.authorHandle,
        retweetOfAuthorDisplayName: origin.authorDisplayName,
        retweetOfText: origin.text,
        retweetOfCreatedAtMs: origin.createdAtMs,
        retweetOfAttachments: origin.attachments.slice()
      };
      state.posts.unshift(rt);
      // 转发通知
      pushNotification(state, "repost", origin.authorId, actorId, {
        postId: origin.id,
        text: String(origin.text || "").slice(0, 120),
      });
      await saveState(state);
      return ok({ postId, actor: actorId, active: true, post: serializePost(rt, state) }, "\u5DF2\u8F6C\u53D1");
    }, params);
  }
  function comment(params) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      const authorId = normalizeAccountId(params.author);
      const text = String(params.text || "").trim();
      if (!postId) return fail("\u7F3A\u5C11 postId");
      if (!text) return fail("\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A");
      const p = findPost(state, postId);
      if (!p) return fail("\u5E16\u5B50\u4E0D\u5B58\u5728: " + postId);
      if (!Array.isArray(p.comments)) p.comments = [];
      const acc = accountOf(state, authorId);
      const c = {
        id: makeId("cmt"),
        authorId,
        authorHandle: acc.handle,
        authorDisplayName: acc.displayName,
        text,
        createdAtMs: now(),
        // 【新增·社交事件桥接】标记这条评论是不是桥接回填的。
        // 桥接回填的评论**不再触发下一轮桥接**，否则会无限循环。
        fromBridge: params.fromBridge === true || params.fromBridge === "true",
      };
      p.comments.push(c);
      /* 【社交事件桥接·AI 侧·重要修正】
         原来：AI 自己发的评论会入队 → 前端泵把它当「社交事件」送回绑定对话
               → AI 收到「【X 平台 · AI 评论】…请知悉并可继续跟进」
               → AI 又发一条评论 → 又入队 → 无限回环。
         现在：**AI 自己发的东西一律不入队**（既不带 fromBridge 的、也不带普通评论）。
               AI 收到自己的回声没有任何新信息，纯属噪音 + 回环源。
               「用户发帖/评论 → 通知 AI」的链路完全不受影响，
               因为那条链路由前端在用户操作时直接投递（bridgeSocialEvent）。
         注意：**不要**在这里恢复入队逻辑。 */
      // 评论通知
      pushNotification(state, "comment", p.authorId, authorId, {
        postId: p.id,
        text: text.slice(0, 120),
      });
      await saveState(state);
      /* 【社交事件桥接】评论后的桥接同样由前端 UI 帧驱动（index.html 的
         评论发送回调里调用 bridgeSocialEvent）。
         这里不再自动触发，理由同 post：
           ① 后端等不到 AI 回复；② 会和前端重复触发。
         AI 主动补发用 bridgeSocial 工具；桥接回填写入的评论带
         fromBridge=true，不会触发下一轮，天然断链防循环。 */
      return ok({ postId, comment: serializeComment(c, state), commentCount: p.comments.length, post: serializePost(p, state) }, "\u5DF2\u53D1\u5E03\u8BC4\u8BBA");
    }, params);
  }
  function listComments(params) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      if (!postId) return fail("\u7F3A\u5C11 postId");
      const p = findPost(state, postId);
      if (!p) return fail("\u5E16\u5B50\u4E0D\u5B58\u5728: " + postId);
      const comments = Array.isArray(p.comments) ? p.comments : [];
      return ok({ postId, comments: comments.map((c) => serializeComment(c, state)), commentCount: comments.length }, "\u67e5\u8be2\u5b8c\u6210");
    }, params);
  }
  /* ================================================================
     【新增·社交事件桥接】发帖 / 评论 → 绑定对话 → AI 回复回填为评论

     需求：用户发帖子、给 AI 评论（包括 AI 自己在评论区的评论），
           都要通过桥接发给绑定聊天的对话，让 AI 知道发生了什么。

     设计：
       ① post / comment 落库后，调用 bridgeSocialEvent() 把事件摘要
          送进绑定的 Operit 对话（state.chatLinks[peer]）。
       ② 事件消息用固定前缀标注类型，对话里的 AI 能明确区分
          「这是新帖」/「这是用户评论」/「这是 AI 评论」。
       ③ 后台轮询对话，等 AI 给出新回复后，把它**回填成该帖的评论**
          （而不是私信），这样 AI 的回应就出现在评论区里，语义正确。
       ④ 回填用对话里的真实时间戳，保证评论顺序正确。

     为什么不在前端做：发帖/评论是**工具调用**触发的，
       前端 UI 帧可能根本没开着一个页面，桥接必须发生在后端。
     ================================================================ */

  /** 生成发往对话的事件消息文本（对话里的 AI 靠它区分事件类型） */
  function formatSocialEvent(kind, post, comment, state) {
    const acc = accountOf(state, "ai");
    const lines = [];
    if (kind === "post") {
      const name = post.authorDisplayName || post.authorHandle || "用户";
      const media = (post.attachments || []).length;
      lines.push("【X 平台 · 新帖子】");
      lines.push("发帖人：" + name + "（" + (post.authorHandle || "") + "）");
      lines.push("帖子内容：" + (post.text || "（无正文）"));
      if (media > 0) {
        lines.push("附带媒体：" + media + " 个（" +
          (post.attachments || []).map((a) => (a.type === "video" ? "视频" : "图片")).join("、") + "）");
      }
      lines.push("帖子ID：" + post.id);
      lines.push("如果你想回应这条帖子，请调用 x_social:comment 工具来发布评论");
      lines.push("（postId=" + post.id + "，author=\"ai\"，text=你的评论正文）。");
      lines.push("只发布你真正想说的话；如果你认为无需回应，可以不调用该工具。");
    } else if (kind === "user_comment") {
      const name = comment.authorDisplayName || comment.authorHandle || "用户";
      const pname = post.authorDisplayName || post.authorHandle || "";
      lines.push("【X 平台 · 用户评论】");
      lines.push("评论人：" + name + "（" + (comment.authorHandle || "") + "）");
      lines.push("评论内容：" + (comment.text || ""));
      lines.push("所在帖子（作者 " + pname + "）：" + (post.text || "（无正文）").slice(0, 200));
      lines.push("帖子ID：" + post.id);
      lines.push("如果你想回应这条评论，请调用 x_social:comment 工具来发布评论");
      lines.push("（postId=" + post.id + "，author=\"ai\"，text=你的评论正文）。");
      lines.push("只发布你真正想说的话；如果你认为无需回应，可以不调用该工具。");
    } else if (kind === "ai_comment") {
      const name = comment.authorDisplayName || comment.authorHandle || "";
      const pname = post.authorDisplayName || post.authorHandle || "";
      lines.push("【X 平台 · AI 评论】");
      lines.push("评论者：" + name + "（" + (comment.authorHandle || "") + "）");
      lines.push("评论内容：" + (comment.text || ""));
      lines.push("所在帖子（作者 " + pname + "）：" + (post.text || "（无正文）").slice(0, 200));
      lines.push("帖子ID：" + post.id);
      lines.push("这条评论来自 AI 自己（可能是你之前在别处的回复），此处仅作记录。");
      lines.push("**不需要**对此再回复 —— 回复自己的话没有意义，还可能造成循环。");
    }
    return lines.join("\n");
  }

  /**
   * 判断某个帖子是否正处于「待回复窗口」。
   *  窗口内 AI 针对该帖发出的帖子/评论不再入队桥接，
   *  用来断开「AI 评论 → 桥接 → AI 再评论 → …」的无限循环。
   */
  function inAwaitingWindow(state, postId) {
    const aw = state && state.socialBridgeAwaiting;
    if (!aw || typeof aw !== "object") return false;
    const until = Number(aw[String(postId || "")] || 0);
    if (!until) return false;
    if (until < now()) {
      delete aw[String(postId)];
      return false;
    }
    return true;
  }

  /**
   * 把一条社交事件放进「待桥接队列」。
   *  用途：AI 通过**工具调用**发布帖子/评论时，不经过前端 UI 帧，
   *        前端拿不到「刚发了一条」的时机 → 由后端入队，前端定期泵取。
   *  kind: "ai_post" | "ai_comment"
   */
  function enqueueSocialEvent(state, kind, postId, commentId) {
    if (!Array.isArray(state.socialBridgeQueue)) state.socialBridgeQueue = [];
    const item = {
      id: makeId("sbq"),
      kind: kind,
      postId: String(postId || ""),
      commentId: commentId ? String(commentId) : "",
      createdAtMs: now(),
    };
    state.socialBridgeQueue.push(item);
    // 队列上限，防止无限增长
    while (state.socialBridgeQueue.length > 100) state.socialBridgeQueue.shift();
    return item;
  }

  /** 把一条评论写进帖子（供桥接回填复用） */
  function appendComment(state, post, authorId, text, fromBridge) {
    if (!Array.isArray(post.comments)) post.comments = [];
    const acc = accountOf(state, authorId);
    const c = {
      id: makeId("cmt"),
      authorId,
      authorHandle: acc.handle,
      authorDisplayName: acc.displayName,
      text: String(text || ""),
      createdAtMs: now(),
      // 【防循环】桥接回填的评论不再触发下一轮桥接，
      // 否则 AI 回复 → 回填 → 桥接 → AI 回复 → … 会无限循环。
      fromBridge: !!fromBridge,
    };
    post.comments.push(c);
    return c;
  }

  /**
   * 社交事件桥接主流程（后台执行，不阻塞工具调用返回）。
   * kind: "post" | "user_comment" | "ai_comment"
   * 返回 { bridged, chatId, reply, commentId }
   */
  async function bridgeSocialEvent(state, kind, post, comment) {
    const links = ensureChatLinks(state);
    // AI 账号的绑定对话（peer = ai）
    const chatId = String(links["ai"] || "").trim();
    if (!chatId) return { bridged: false, reason: "未绑定对话" };
    const tools = getTools();
    if (!tools || !tools.Chat || typeof tools.Chat.sendMessage !== "function") {
      return { bridged: false, reason: "宿主不支持对话发送" };
    }
    let eventText = formatSocialEvent(kind, post, comment, state);
    if (kind === "post" && post && Array.isArray(post.attachments) && post.attachments.some((a) => a && a.type === "image")) {
      let links = [];
      try {
        links = await registerPostImages(post, 3);
      } catch (e) { links = []; }
      if (links.length) {
        const lLines = links.map((l, i) => "图片" + (i + 1) + "：" + (l.link || ""));
        eventText = eventText + "\n" + lLines.join("\n");
        eventText = eventText + "\n（以上是随帖附带的照片本体，你可以直接看到。）";
      } else {
        try {
          const descs = await describePostImages(post, 3);
          const dLines = imageDescriptionLines(descs);
          if (dLines.length) eventText = eventText + "\n" + dLines.join("\n");
        } catch (e) { }
      }
    }
    /* 【架构·重要】这里**只发送、不等待回复**。
       历史教训（见 dmSend 处注释）：工具调用返回后包运行时会被回收，
       任何跨工具的长时间轮询（原来等 60 秒）都跑不完 → AI 的回复丢失。
       所以：
         ① 本函数只负责把事件消息送进绑定对话（单次 await，快）；
         ② 回复的读取与回填交给「前端 UI 帧驱动」：
            XBridge.chatHistory → 轮询新回复 → x_social:aiReplyComment 落库。
           这条链路已在私信桥接里验证可用，UI 帧不受包运行时回收影响。
       返回 beforeTs 供前端做「新回复」基准，避免把旧回复当新回复。 */
    let beforeTs = 0;
    try {
      const got = await fetchLastAssistantReply(chatId);
      if (got && got.ts > 0) beforeTs = got.ts;
    } catch (e) { }
    try {
      await tools.Chat.sendMessage(eventText, chatId, undefined, undefined, {
        runtime: "main",
        hide_user_message: false,
        notify_reply: true,
        disable_warning: true,
        persist_turn: true
      });
    } catch (e) {
      return { bridged: false, chatId, beforeTs, reason: "发送失败: " + String((e && e.message) || e) };
    }
    return { bridged: true, chatId, beforeTs, eventText, reply: "" };
  }

  /**
   * 把 AI 在对话里的回复写回「某条帖子」的评论区（AI 身份）。
   * 由前端 UI 帧驱动调用：UI 帧读到对话里新出现的 AI 回复后，
   * 把正文 + 真实时间戳一起传上来，这里落库成评论。
   * 为什么不让后端自己等：见 bridgeSocialEvent 的架构注释 ——
   * 工具调用返回后包运行时会被回收，长时间轮询跑不完。
   *
   * 防重复：用 (postId + sourceTs + 正文前缀) 作为去重键，
   *   轮询多打几次也不会写出多条相同评论。
   * 防循环：落库的评论带 fromBridge=true，不会触发下一轮桥接。
   */
  function aiReplyComment(params) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      const text = String(params.text || "").trim();
      if (!postId) return fail("缺少 postId");
      if (!text) return fail("回复内容为空");
      const p = findPost(state, postId);
      if (!p) return fail("帖子不存在: " + postId);
      const sourceTs = Number(params.sourceTs || 0);
      const dedupe = String(params.dedupe || "") ||
        ("aicmt:" + postId + ":" + sourceTs + ":" + text.slice(0, 60));
      /* 去重键复用 aiReplyKeys 存储（同一套裁剪策略，最多保留 200 条） */
      if (!state.aiReplyKeys || typeof state.aiReplyKeys !== "object") state.aiReplyKeys = {};
      if (state.aiReplyKeys[dedupe]) {
        return ok({ written: false, reason: "duplicate", dedupe }, "重复回复已忽略");
      }
      state.aiReplyKeys[dedupe] = now();
      const keys = Object.keys(state.aiReplyKeys);
      if (keys.length > 200) {
        for (let i = 0; i < keys.length - 200; i++) delete state.aiReplyKeys[keys[i]];
      }
      const c = appendComment(state, p, "ai", text, true);
      /* 【修复·排序】用对话里的真实时间戳，保证评论区顺序 = 真实对话顺序 */
      if (sourceTs > 0) c.createdAtMs = sourceTs;
      pushNotification(state, "comment", p.authorId, "ai", {
        postId: p.id,
        text: text.slice(0, 120),
      });
      await saveState(state);
      return ok({
        postId: p.id,
        comment: serializeComment(c, state),
        commentCount: (p.comments || []).length,
      }, "AI 回复已写入评论区");
    }, params);
  }

  /**
   * 只读：取回「等待桥接的社交事件队列」。
   *  【为什么需要队列】AI 是通过**工具调用**发布帖子/评论的（author="ai"），
   *  不经过前端 UI 帧，所以前端拿不到「刚发了一条 AI 评论」这个时机，
   *  自然触发不了桥接。后端在落库时把这类事件入队，
   *  前端 UI 帧定期调用本工具把队列里的事件送进绑定对话。
   *
   *  返回 { items: [{ kind, postId, commentId }] }
   */
  function socialBridgeQueue(params) {
    return wrap(async () => {
      const state = await loadState();
      const q = Array.isArray(state.socialBridgeQueue) ? state.socialBridgeQueue : [];
      const limit = Math.max(1, Math.min(50, Number(params.limit || 20)));
      const items = q.slice(0, limit);
      return ok({ items, total: q.length }, "读取完成");
    }, params);
  }

  /**
   * 确认（并清空）已投递的事件。
   *  前端把事件送进对话成功后调用，避免同一条事件被重复投递。
   *  同时给 postId 打一个「待回复窗口」标记：在这个窗口内，
   *  AI 针对该帖发出的评论**不再入队**，从而断开
   *  「AI 评论 → 桥接 → AI 再评论 → …」的无限循环。
   */
  function socialBridgeAck(params) {
    return wrap(async () => {
      const state = await loadState();
      const ids = Array.isArray(params.ids) ? params.ids.map(String)
        : (params.id ? [String(params.id)] : []);
      if (!ids.length) return fail("缺少 ids");
      const set = new Set(ids);
      const q = Array.isArray(state.socialBridgeQueue) ? state.socialBridgeQueue : [];
      const removedItems = q.filter((it) => set.has(String(it && it.id)));
      const keep = q.filter((it) => !set.has(String(it && it.id)));
      const removed = q.length - keep.length;
      state.socialBridgeQueue = keep;
      // 记录窗口：这些帖子在窗口内不接受 AI 自发评论的再次入队
      /* 【修复】postIds 可能被宿主按 schema 过滤掉，
         所以这里也要能从「被移除的队列项」里推导 postId。 */
      const postIds = new Set(
        (Array.isArray(params.postIds) ? params.postIds.map(String)
          : (params.postId ? [String(params.postId)] : []))
      );
      for (const it of removedItems) {
        if (it && it.postId) postIds.add(String(it.postId));
      }
      if (!state.socialBridgeAwaiting || typeof state.socialBridgeAwaiting !== "object") {
        state.socialBridgeAwaiting = {};
      }
      const WIN = 180000;   // 3 分钟窗口
      const until = now() + WIN;
      for (const pid of postIds) {
        if (pid) state.socialBridgeAwaiting[pid] = until;
      }
      // 清理过期项
      const t = now();
      for (const k of Object.keys(state.socialBridgeAwaiting)) {
        if (Number(state.socialBridgeAwaiting[k]) < t) delete state.socialBridgeAwaiting[k];
      }
      await saveState(state);
      return ok({ removed, remaining: keep.length }, "已确认");
    }, params);
  }

  /** 只读：告诉前端「这条社交事件该桥接到哪个对话」。
   *  UI 帧拿不到后端 state，发帖/评论后需要知道往哪个 chatId 送。 */
  function socialBridgeTarget(params) {
    return wrap(async () => {
      const state = await loadState();
      const links = ensureChatLinks(state);
      const peer = normalizeAccountId(params.peer || "ai");
      const chatId = String(links[peer] || "").trim();
      return ok({ peer, chatId, bound: !!chatId }, chatId ? "已绑定对话" : "未绑定对话");
    }, params);
  }

  /** 手动触发一次社交事件桥接（只发送事件，不等回复）。
   *  用途：
   *    ① 存量帖子/评论补发（部署前发生的事件不会自动桥接）
   *    ② 前端发现漏桥接时手动补一次
   *  返回里的 beforeTs 是「发送前最后一条 AI 回复的时间戳」，
   *  前端拿它当基准轮询 chatHistory，就能只认发送之后的新回复。 */
  function describePostImagesTool(params) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      if (!postId) return fail("缺少 postId");
      const post = findPost(state, postId);
      if (!post) return fail("帖子不存在: " + postId);
      const limit = Number(params.limit || 3) || 3;
      const sp = serializePost(post, state);
      const links = await registerPostImages(sp, limit);
      const linkLines = links.map((l, i) => "图片" + (i + 1) + "：" + (l.link || ""));
      if (links.length) {
        return ok({ postId, mode: "image_link", lines: linkLines, links }, "已注册图片（本体可直接看到）");
      }
      const descs = await describePostImages(sp, limit);
      const descLines = imageDescriptionLines(descs);
      return ok({ postId, mode: "text_fallback", lines: descLines, descriptions: descs }, "图片注册失败，已降级为文字描述");
    }, params);
  }
  function bridgeSocial(params) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      const kind = String(params.kind || "post");
      if (!postId) return fail("缺少 postId");
      const p = findPost(state, postId);
      if (!p) return fail("帖子不存在: " + postId);
      let comment = null;
      if (kind === "user_comment" || kind === "ai_comment") {
        const cid = String(params.commentId || "").trim();
        const list = Array.isArray(p.comments) ? p.comments : [];
        comment = cid
          ? list.find((x) => x.id === cid) || null
          : list[list.length - 1] || null;
        if (!comment) return fail("找不到评论: " + (cid || "(最后一条)"));
        if (kind === "user_comment") comment.authorId = comment.authorId || "user";
      }
      const res = await bridgeSocialEvent(state, kind, serializePost(p, state),
        comment ? serializeComment(comment, state) : null);
      if (!res.bridged) return fail("桥接未生效: " + (res.reason || "未知原因"));
      return ok(res, "已桥接到对话");
    }, params);
  }


  function deletePost(params) {
    return wrap(async () => {
      const state = await loadState();
      const postId = String(params.postId || "").trim();
      if (!postId) return fail("\u7F3A\u5C11 postId");
      const before = state.posts.length;
      state.posts = state.posts.filter((p) => p.id !== postId && p.retweetOfPostId !== postId);
      const removed = before - state.posts.length;
      if (removed === 0) return fail("\u5E16\u5B50\u4E0D\u5B58\u5728: " + postId);
      await saveState(state);
      return ok({ postId, removed }, "\u5DF2\u5220\u9664");
    }, params);
  }
  function follow(params) {
    return wrap(async () => {
      const state = await loadState();
      const followerId = normalizeAccountId(params.follower || "user");
      const targetId = normalizeAccountId(params.target || "ai");
      if (followerId === targetId) return fail("\u4E0D\u80FD\u5173\u6CE8\u81EA\u5DF1");
      const acc = accountOf(state, followerId);
      const following = acc.following || [];
      const idx = following.indexOf(targetId);
      let active;
      if (idx >= 0) {
        following.splice(idx, 1);
        active = false;
      } else {
        following.push(targetId);
        active = true;
      }
      acc.following = following;
      state.accounts[followerId] = acc;
      // 关注通知（只在关注时通知，取消关注不通知）
      if (active) {
        pushNotification(state, "follow", targetId, followerId, {});
      }
      await saveState(state);
      return ok({ follower: followerId, target: targetId, following: active, accounts: [accountOf(state, "user"), accountOf(state, "ai")] }, active ? "\u5DF2\u5173\u6CE8" : "\u5DF2\u53D6\u6D88\u5173\u6CE8");
    }, params);
  }
  function reset(params) {
    return wrap(async () => {
      const state = await loadState();
      const keepAccounts = params.keepAccounts === undefined ? true : !!params.keepAccounts;
      const fresh = { version: 1, posts: [], accounts: keepAccounts ? state.accounts : (await Promise.resolve().then(() => (init_store(), store_exports))).defaultState().accounts };
      await saveState(fresh);
      return ok({ posts: 0, keepAccounts }, "\u5DF2\u91CD\u7F6E");
    }, params);
  }

  // ================= 私信 / 资料 / 通知 =================
  function pairKey(a, b) {
    return [a, b].sort().join("__");
  }
  function ensureDm(state) {
    if (!state.dms || typeof state.dms !== "object") state.dms = {};
    return state.dms;
  }
  function ensureNotifs(state) {
    if (!Array.isArray(state.notifications)) state.notifications = [];
    return state.notifications;
  }
  // ================= 通知生成 =================
  // 之前只读不写，导致点赞/转发/关注/评论后「通知」页永远是空的。
  // 统一在这里落库，字段与前端 renderNotifications 对齐：
  //   { id, type, target, actorId, actorHandle, actorDisplayName, text, postId, createdAtMs }
  function pushNotification(state, type, targetId, actorId, extra) {
    if (!targetId || !actorId || targetId === actorId) return null;
    const list = ensureNotifs(state);
    const acc = accountOf(state, actorId);
    const e = extra || {};
    const n = {
      id: makeId("ntf"),
      type: String(type || ""),
      target: targetId,
      actorId: actorId,
      actorHandle: acc.handle,
      actorDisplayName: acc.displayName,
      text: String(e.text || ""),
      postId: String(e.postId || ""),
      createdAtMs: now(),
    };
    list.unshift(n);
    // 只保留最近 200 条
    if (list.length > 200) list.length = 200;
    return n;
  }
  function serializeAttachment(a) {
    return {
      id: a.id,
      type: a.type,
      path: a.path,
      name: a.name,
      mime: detectMime(a.name || a.path),
      durationMs: a.durationMs,
      // 【修复·视频封面】视频首帧图路径，前端渲染成 <video poster="...">
      poster: a.poster || ""
    };
  }
  function profile(params) {
    return wrap(async () => {
      const state = await loadState();
      const who = normalizeAccountId(params.who);
      const limit = Math.max(1, Math.min(100, Number(params.limit || 50)));
      const acc = accountOf(state, who);
      const mine = state.posts
        .filter((p) => p.authorId === who)
        .sort((a, b) => b.createdAtMs - a.createdAtMs)
        .slice(0, limit);
      const following = acc.following || [];
      return ok(
        {
          account: acc,
          posts: mine.map((p) => serializePost(p, state)),
          following: following.slice(),
          followers: Object.keys(state.accounts).filter((k) =>
            (accountOf(state, k).following || []).indexOf(who) >= 0
          )
        },
        "\u67e5\u8be2\u5b8c\u6210"
      );
    }, params);
  }
  function updateProfile(params) {
    return wrap(async () => {
      const state = await loadState();
      // 【AI 改自己资料】who 传 "ai" 即可修改 AI 账号（昵称/用户名/简介/头像）。
      // 缺省是 user，所以 AI 改自己时必须显式传 who=ai。
      const who = normalizeAccountId(params.who);
      const acc = accountOf(state, who);
      if (params.displayName !== undefined) acc.displayName = String(params.displayName || "").slice(0, 40) || acc.displayName;
      if (params.bio !== undefined) acc.bio = String(params.bio || "").slice(0, 200);
      if (params.handle !== undefined) {
        const h = String(params.handle || "").trim().replace(/^@+/, "");
        if (h) acc.handle = "@" + h.slice(0, 20);
      }
      if (params.avatarColor !== undefined) acc.avatarColor = String(params.avatarColor || acc.avatarColor);
      if (params.avatarPath !== undefined) {
        const raw = String(params.avatarPath || "").trim();
        if (!raw) {
          acc.avatarPath = "";
        } else {
          // 把头像复制进媒体目录，避免原图被清理后头像丢失
          const copied = await copyLocalToMedia(raw, "image");
          acc.avatarPath = copied ? copied.path : raw;
        }
      }
      state.accounts[who] = acc;
      await saveState(state);
      return ok({ account: acc }, "\u8d44\u6599\u5df2\u66f4\u65b0");
    }, params);
  }
  function dmList(params) {
    return wrap(async () => {
      const state = await loadState();
      const actor = normalizeAccountId(params.actor);
      const dms = ensureDm(state);
      const out = [];
      for (const key of Object.keys(dms)) {
        const thread = dms[key];
        if (!thread || !Array.isArray(thread.messages)) continue;
        if (thread.members.indexOf(actor) < 0) continue;
        const peer = thread.members.filter((m) => m !== actor)[0] || "ai";
        /* 【修复·会话列表错乱】最后一条消息取「时间最新」的那条，
           而不是数组末尾那条（AI 回复回填真实时间后写入顺序 ≠ 时间顺序，
           数组末尾可能是很早的消息 → 列表预览与排序都错）。 */
        let last = null;
        for (const m of thread.messages) {
          if (!m) continue;
          if (!last || Number(m.createdAtMs || 0) > Number(last.createdAtMs || 0)) last = m;
        }
        out.push({
          key,
          peer,
          peerAccount: accountOf(state, peer),
          lastMessage: last,
          unread: Number(thread.unreadFor && thread.unreadFor[actor]) || 0,
          updatedAtMs: last ? last.createdAtMs : 0
        });
      }
      out.sort((a, b) => b.updatedAtMs - a.updatedAtMs);
      return ok({ threads: out }, "\u67e5\u8be2\u5b8c\u6210");
    }, params);
  }
  function dmMessages(params) {
    return wrap(async () => {
      const state = await loadState();
      const actor = normalizeAccountId(params.actor);
      const peer = normalizeAccountId(params.peer);
      const limit = Math.max(1, Math.min(500, Number(params.limit || 200)));
      const dms = ensureDm(state);
      const thread = dms[pairKey(actor, peer)];
      /* 【修复·顺序错乱】按创建时间升序返回。
         之前直接返回数组末尾元素（写入顺序），一旦 AI 回复与用户消息
         并发写入（aiReply 和 dmSend 各自 saveState），落库顺序
         可能与时间顺序不一致，前端渲染出来就是「消息错乱」。
         这里统一按 createdAtMs 排序，保证气泡顺序 = 真实时间顺序。 */
      let messages = thread && Array.isArray(thread.messages) ? thread.messages.slice() : [];
      /* 【修复·顺序不稳定】时间戳相同不再用 id 字典序做 tie-break
         （id 含随机后缀 → 同一毫秒内顺序随机 → 气泡穿插）。
         改为稳定排序：时间相同保持数组原顺序。 */
      messages = messages.sort((a, b) => {
        const ta = Number((a && a.createdAtMs) || 0);
        const tb = Number((b && b.createdAtMs) || 0);
        if (ta !== tb) return ta - tb;
        return 0;
      });
      /* 【修复·截断错位】先按时间排序再取最后 limit 条。
         旧实现先 slice(-limit)（按写入顺序截断）再排序，
         当 AI 回复是「回填真实时间」时，它可能被截断掉 → 消息忽隐忽现。 */
      messages = messages.slice(-limit);
      return ok(
        {
          peer,
          peerAccount: accountOf(state, peer),
          messages,
          total: thread && thread.messages ? thread.messages.length : 0
        },
        "\u67e5\u8be2\u5b8c\u6210"
      );
    }, params);
  }
  function dmSend(params) {
    return wrap(async () => {
      const state = await loadState();
      const actor = normalizeAccountId(params.actor);
      const peer = normalizeAccountId(params.peer);
      if (actor === peer) return fail("\u4e0d\u80fd\u7ed9\u81ea\u5df1\u53d1\u79c1\u4fe1");
      const text = String(params.text || "").trim();
      const attachments = await collectAttachments(params);
      if (!text && attachments.length === 0) return fail("\u79c1\u4fe1\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");
      const dms = ensureDm(state);
      const key = pairKey(actor, peer);
      if (!dms[key]) dms[key] = { members: [actor, peer], messages: [], unreadFor: {} };
      const thread = dms[key];
      const msg = {
        id: makeId("dm"),
        from: actor,
        to: peer,
        text,
        createdAtMs: Date.now(),
        attachments: attachments.map(serializeAttachment)
      };
      thread.messages.push(msg);
      if (!thread.unreadFor) thread.unreadFor = {};
      thread.unreadFor[peer] = (Number(thread.unreadFor[peer]) || 0) + 1;
      const acc = accountOf(state, actor);
      // 私信通知（统一走 pushNotification，字段与前端一致）
      pushNotification(state, "dm", peer, actor, {
        text: text.slice(0, 120),
      });
      if (state.notifications.length > 300) state.notifications.length = 300;
      const links = ensureChatLinks(state);
      const boundChat = links[peer];
      await saveState(state);
      // 桥接转发不再在这里做：页面会用 bridgeSend / bridgePoll 显式驱动，
      // 这样不会因工具调用结束后运行时回收而丢掉 AI 回复。
      return ok({ message: msg, key, boundChat: boundChat || "" }, "\u5df2\u53d1\u9001");
    }, params);
  }
  function dmRead(params) {
    return wrap(async () => {
      const state = await loadState();
      const actor = normalizeAccountId(params.actor);
      const peer = normalizeAccountId(params.peer);
      const dms = ensureDm(state);
      const key = pairKey(actor, peer);
      const thread = dms[key];
      if (!thread) return ok({ key, unread: 0 }, "\u65e0\u4f1a\u8bdd");
      if (!thread.unreadFor) thread.unreadFor = {};
      thread.unreadFor[actor] = 0;
      await saveState(state);
      return ok({ key, unread: 0 }, "\u5df2\u6807\u8bb0\u4e3a\u5df2\u8bfb");
    }, params);
  }
  function notifications(params) {
    return wrap(async () => {
      const state = await loadState();
      const actor = normalizeAccountId(params.actor);
      const limit = Math.max(1, Math.min(100, Number(params.limit || 50)));
      const all = ensureNotifs(state).filter((n) => n.target === actor);
      return ok({ notifications: all.slice(0, limit), total: all.length }, "\u67e5\u8be2\u5b8c\u6210");
    }, params);
  }
  /** 把某个账号收到的通知标记为已读（清掉通知页的小红点/蓝点计数）。
   *  之前只有查询没有写入 read 的路径，导致通知角标永远消不掉。 */
  function readNotifications(params) {
    return wrap(async () => {
      const state = await loadState();
      const actor = normalizeAccountId(params.actor);
      const list = ensureNotifs(state);
      let n = 0;
      for (const item of list) {
        if (item.target !== actor) continue;
        if (item.read) continue;
        item.read = true;
        item.readAtMs = now();
        n++;
      }
      if (n > 0) await saveState(state);
      return ok({ actor, markedRead: n }, n > 0 ? "\u5df2\u6807\u8bb0\u4e3a\u5df2\u8bfb" : "\u6ca1\u6709\u672a\u8bfb\u901a\u77e5");
    }, params);
  }
  // ================= 搜索 =================
  function searchPosts(params) {
    return wrap(async () => {
      const state = await loadState();
      const q = String(params.q || "").trim().toLowerCase();
      const limit = Math.max(1, Math.min(100, Number(params.limit || 60)));
      if (!q) return ok({ posts: [], accounts: [] }, "\u7a7a\u5173\u952e\u8bcd");
      const posts = state.posts
        .filter((p) => {
          const t = String(p.text || "").toLowerCase();
          const h = String(p.authorHandle || "").toLowerCase();
          const n = String(p.authorDisplayName || "").toLowerCase();
          const rt = String(p.retweetOfText || "").toLowerCase();
          return t.indexOf(q) >= 0 || h.indexOf(q) >= 0 || n.indexOf(q) >= 0 || rt.indexOf(q) >= 0;
        })
        .sort((a, b) => b.createdAtMs - a.createdAtMs)
        .slice(0, limit);
      const accounts = ["user", "ai"]
        .map((k) => accountOf(state, k))
        .filter((a) => {
          const n = String(a.displayName || "").toLowerCase();
          const h = String(a.handle || "").toLowerCase();
          return n.indexOf(q) >= 0 || h.indexOf(q) >= 0;
        });
      return ok({ posts: posts.map((p) => serializePost(p, state)), accounts }, "\u641c\u7d22\u5b8c\u6210");
    }, params);
  }
  // ================= 对话绑定（把 AI 私信接到真实 Operit 对话） =================
  function ensureChatLinks(state) {
    if (!state.chatLinks || typeof state.chatLinks !== "object") state.chatLinks = {};
    return state.chatLinks;
  }
  function listOperitChats() {
    return wrap(async () => {
      try {
        const res = await getTools().Chat.listAll();
        const chats = (res && res.chats) || [];
        return ok(
          {
            chats: chats.map((c) => ({
              id: String(c.id || ""),
              title: String(c.title || ""),
              characterCardId: String(c.characterCardId || ""),
              characterCardName: String(c.characterCardName || ""),
              updatedAt: Number(c.updatedAt || 0),
              isCurrent: !!c.isCurrent
            }))
          },
          "\u67e5\u8be2\u5b8c\u6210"
        );
      } catch (e) {
        return fail("\u8bfb\u53d6\u5bf9\u8bdd\u5217\u8868\u5931\u8d25: " + String((e && e.message) || e));
      }
    });
  }
  function bindChat(params) {
    return wrap(async () => {
      const state = await loadState();
      const peer = normalizeAccountId(params.peer || "ai");
      const links = ensureChatLinks(state);
      if (params.chatId === undefined || params.chatId === null || String(params.chatId) === "") {
        delete links[peer];
        await saveState(state);
        return ok({ peer, chatId: "" }, "\u5df2\u89e3\u9664\u7ed1\u5b9a");
      }
      links[peer] = String(params.chatId);
      await saveState(state);
      return ok({ peer, chatId: links[peer] }, "\u5df2\u7ed1\u5b9a\u5bf9\u8bdd");
    });
  }
  function chatLinks(params) {
    return wrap(async () => {
      const state = await loadState();
      const links = ensureChatLinks(state);
      // 【增强】同时返回每个绑定对话的角色卡名/标题，
      // 前端聊天页标题直接用「聊天标题(角色卡)」显示。
      const meta = {};
      try {
        const res = await getTools().Chat.listAll();
        const chats = (res && res.chats) || [];
        for (const c of chats) {
          const cid = String(c.id || "");
          if (!cid) continue;
          meta[cid] = {
            title: String(c.title || ""),
            characterCardId: String(c.characterCardId || ""),
            characterCardName: String(c.characterCardName || ""),
            // 展示名优先用角色卡名，其次对话标题
            displayName: String(c.characterCardName || c.title || ""),
          };
        }
      } catch (e) { }
      return ok({ links: Object.assign({}, links), meta: meta }, "\u67e5\u8be2\u5b8c\u6210");
    });
  }
  function cleanReply(raw) {
    let t = String(raw || "");
    t = t.replace(/<think>[\s\S]*?<\/think>/gi, "");
    t = t.replace(/<think[\s\S]*$/gi, "");
    t = t.replace(/<tool>[\s\S]*?<\/tool>/gi, "");
    t = t.replace(/<tool[\s\S]*$/gi, "");
    t = t.replace(/<attachment[^>]*>[\s\S]*?<\/attachment>/gi, "");
    t = t.replace(/\n{3,}/g, "\n\n").trim();
    return t;
  }
  /* 【修复·对话记录混乱】返回 { text, ts }：
     ts = 这条回复在对话里的真实时间戳，落库时用它当 createdAtMs，
     否则 AI 回复的时间是「写入时刻」→ 和用户消息穿插、顺序全乱。 */
  async function fetchLastAssistantReply(chatId) {
    try {
      const res = await getTools().Chat.getMessages(chatId, { order: "desc", limit: 12 });
      const msgs = (res && res.messages) || [];
      for (let i = 0; i < msgs.length; i++) {
        const m = msgs[i];
        const sender = String((m && m.sender) || "");
        if (sender === "assistant" || sender === "ai" || sender === "bot") {
          const text = cleanReply(m && m.content);
          if (text) return { text: text, ts: Number((m && m.timestamp) || 0) };
        }
      }
      return { text: "", ts: 0 };
    } catch (e) {
      return { text: "", ts: 0 };
    }
  }
  /* 【修复·对话记录混乱·核心】AI 回复落库时用「写入时刻」当时间戳，
     而真实回复是在对话里更早之前产生的。
     后果：所有被同步回来的 AI 回复，排序键都是「我刚好打开聊天页的时刻」，
     于是它们全部挤在用户最新消息旁边、彼此只差几百毫秒 ——
     表现就是「聊天记录顺序全乱了」。
   典型现场（实测 state.json）：
     [5] ai ts=1792854550782  gap=3341839
     [6] ai ts=1792854551218  gap=   436   ← 与上一条挤在一起
     [7] ai ts=1792854551689  gap=   471   ← 又挤在一起
   这三条在对话里的真实产生时间相隔几分钟，却被排成连号。

   修复：把「对话里的真实时间戳」一路传下来，落库时用它当 createdAtMs。
     ① aiReply 新增参数 sourceTs（对话里该条回复的真实时间戳）
     ② pushAiReply 接受 ts 参数，优先用它
     ③ 前端同步时把 chatHistory 返回的 timestamp 一起传上来
   这样气泡顺序 = 真实对话顺序，与「谁先谁后」一致。 */
function pushAiReply(state, peer, text, actor, ts) {
    if (!text) return null;
    const dms = ensureDm(state);
    const key = pairKey(peer, actor);
    if (!dms[key]) dms[key] = { members: [peer, actor], messages: [], unreadFor: {} };
    const thread = dms[key];
    // 优先用对话里的真实时间戳；没有就退回当前时间
    const realTs = Number(ts || 0);
    const createdAtMs = realTs > 0 ? realTs : Date.now();
    const msg = {
      id: makeId("dm"),
      from: peer,
      to: actor,
      text,
      createdAtMs: createdAtMs,
      attachments: []
    };
    thread.messages.push(msg);
    if (!thread.unreadFor) thread.unreadFor = {};
    thread.unreadFor[actor] = (Number(thread.unreadFor[actor]) || 0) + 1;
    // AI 回复也通知对方（私聊通知）
    pushNotification(state, "dm", actor, peer, {
      text: String(text || "").slice(0, 120),
    });
    return msg;
  }
  /** 取当前对话里最后一条助手消息的指纹（用于判断是否有新回复） */
  async function lastAssistantFingerprint(chatId) {
    try {
      const res = await getTools().Chat.getMessages(chatId, { order: "desc", limit: 6 });
      const msgs = (res && res.messages) || [];
      for (let i = 0; i < msgs.length; i++) {
        const m = msgs[i];
        const sender = String((m && m.sender) || "");
        if (sender === "assistant" || sender === "ai" || sender === "bot") {
          return String((m && m.content) || "").slice(0, 200);
        }
      }
      return "";
    } catch (e) {
      return "";
    }
  }

  /** 桥接第一步：把私信送进绑定的 Operit 对话，返回发送前的助手消息指纹 */
  function bridgeSend(params) {
    return wrap(async () => {
      const chatId = String(params.chatId || "").trim();
      const text = String(params.text || "").trim();
      if (!chatId) return fail("\u672a\u7ed1\u5b9a\u5bf9\u8bdd");
      if (!text) return fail("\u6d88\u606f\u4e3a\u7a7a");
      const tools = getTools();
      if (!tools || !tools.Chat || typeof tools.Chat.sendMessage !== "function") {
        return fail("\u5bbf\u4e3b\u4e0d\u652f\u6301\u5bf9\u8bdd\u53d1\u9001");
      }
      let before = "";
      try { before = await lastAssistantFingerprint(chatId); } catch (e) { }
      await tools.Chat.sendMessage(text, chatId, undefined, undefined, {
        runtime: "main",
        hide_user_message: false,
        notify_reply: true,
        disable_warning: true,
        persist_turn: true
      });
      return ok({ chatId, before }, "\u5df2\u8f6c\u53d1\u5230\u5bf9\u8bdd");
    }, params);
  }

  /** 桥接第二步：轮询绑定对话是否出现新的助手回复；有则落库并返回 */
  function bridgePoll(params) {
    return wrap(async () => {
      const chatId = String(params.chatId || "").trim();
      const before = String(params.before || "");
      const peer = normalizeAccountId(params.peer || "ai");
      const actor = normalizeAccountId(params.actor || "user");
      if (!chatId) return fail("\u672a\u7ed1\u5b9a\u5bf9\u8bdd");
      const got = await fetchLastAssistantReply(chatId);
      const reply = got && got.text ? got.text : "";
      if (!reply) return ok({ reply: "", pending: true }, "\u8fd8\u6ca1\u6709\u56de\u590d");
      if (before && reply.slice(0, 200) === before) {
        return ok({ reply: "", pending: true }, "\u8fd8\u6ca1\u6709\u65b0\u56de\u590d");
      }
      const fresh = await loadState();
      /* 【修复·对话记录混乱】带上对话里的真实时间戳落库 */
      const msg = pushAiReply(fresh, peer, reply, actor, got.ts);
      await saveState(fresh);
      return ok({ reply, message: msg }, "\u5df2\u6536\u5230 AI \u56de\u590d");
    }, params);
  }

  /** 只读：读取绑定对话的最近消息历史。
   *  这是「私信能收到 AI 回复」的关键补充：
   *  绑定对话往往就是**当前正在跑的会话**，往里 sendMessage 会撞上宿主
   *  的 busy 保护（"Previous message is still being processed"）而失败。
   *  但「读」历史不受影响，所以用读的方式把 AI 回复同步回 X 私信。
   *  本函数**不发送任何消息**，纯只读。 */
  function chatHistory(params) {
    return wrap(async () => {
      const state = await loadState();
      const links = ensureChatLinks(state);
      let chatId = String(params.chatId || "").trim();
      if (!chatId) {
        // 优先用 AI 账号的绑定；没有就退回当前对话
        chatId = String(links["ai"] || "");
      }
      if (!chatId) {
        try {
          const la = await getTools().Chat.listAll();
          if (la && la.currentChatId != null) chatId = String(la.currentChatId);
        } catch (e) { }
      }
      if (!chatId) return fail("未绑定对话");
      const limit = Math.max(1, Math.min(100, Number(params.limit || 20)));
      let res = null;
      try {
        res = await getTools().Chat.getMessages(chatId, { order: "desc", limit: limit });
      } catch (e) {
        return fail("读取对话历史失败: " + String((e && e.message) || e));
      }
      const msgs = (res && res.messages) || [];
      const out = [];
      for (let i = msgs.length - 1; i >= 0; i--) {
        const m = msgs[i];
        if (!m) continue;
        const sender = String((m && m.sender) || "");
        const raw = String((m && m.content) || "");
        if (sender === "hide") continue;
        if (/^<proxy_sender/i.test(raw)) continue;
        const text = cleanReply(raw);
        if (!text) continue;
        out.push({
          sender: sender,
          roleName: String((m && m.roleName) || ""),
          content: text.slice(0, 4000),
          timestamp: Number((m && m.timestamp) || 0),
        });
      }
      return ok({ chatId: chatId, messages: out, count: out.length }, "读取完成");
    }, params);
  }

  /** 把一条 AI 回复写入 X 私信。
   *  由 UI 帧读到绑定对话里的新回复后调用（UI 帧才有不受 busy 限制的读取通道）。
   *  dedupe 用于避免同一段回复被重复写入（例如轮询期间多读到一次）。
   *
   *  【修复·旧回复刷屏/错乱】之前只靠 dedupe（内容哈希）去重，但内容哈希
   *  是「同一段文本」，对话里每次复读同一句话就会被判成重复而丢失。
   *  更要命的是：前端每次进入聊天都会把对话里最近 3 条 AI 回复无条件灌进来，
   *  于是「切换会话前 AI 的回复」被反复写入 X 私信，越滚越多、顺序错乱。
   *
   *  现在引入**时间游标**（state.aiReplyCursor[peer]）：
   *   - 只接受 createdAtMs 严格大于游标的回复（游标 = 已处理到的最新回复时间）
   *   - 前端在「发送消息那一刻」调用 aiReplyCursor 读取当前游标作为基线，
   *     之后只接收比基线更新的回复 → 旧回复天然被挡在外面
   *   - 内容哈希去重保留，作为第二道防线
   */
  function aiReply(params) {
    return wrap(async () => {
      const state = await loadState();
      const text = String(params.text || "").trim();
      if (!text) return fail("回复内容为空");
      const peer = normalizeAccountId(params.peer || "ai");
      const actor = normalizeAccountId(params.actor || "user");
      const dedupe = String(params.dedupe || "");
      /* 【修复·对话记录混乱】对话里该条回复的真实时间戳。
         前端从 chatHistory 拿到 timestamp 后传上来，
         落库时用它当 createdAtMs，气泡顺序 = 真实对话顺序。 */
      const sourceTs = Number(params.sourceTs || 0);
      /* --- 时间游标：只接收「比游标更新」的回复 --- */
      const sinceTs = Number(params.sinceTs || 0);
      let cursors = null;
      let cursorKey = "";
      if (!state.aiReplyCursor || typeof state.aiReplyCursor !== "object") {
        state.aiReplyCursor = {};
        cursors = state.aiReplyCursor;
      } else {
        cursors = state.aiReplyCursor;
      }
      cursorKey = peer + "__" + actor;
      const cursor = Number(cursors[cursorKey] || 0);
      if (sinceTs > 0 && sinceTs < cursor) {
        // 已经处理过的旧回复，直接忽略
        return ok({ written: false, reason: "stale", cursor: cursor }, "旧回复已忽略");
      }
      if (!state.aiReplyKeys || typeof state.aiReplyKeys !== "object") state.aiReplyKeys = {};
      /* 【修复·重复/丢失】同一「对话 + 真实时间戳」只允许写入一次。
         旧实现只靠 dedupe 字符串（正文前缀）去重，
         两条不同回复若开头 120 字相同 → 第二条被误判重复而**丢失**。
         这里额外用 sourceTs 做精确去重；dedupe 键里也已带 ts。 */
      const tsKey = sourceTs > 0 ? "ts:" + cursorKey + ":" + sourceTs : "";
      if (tsKey && state.aiReplyKeys[tsKey]) {
        return ok({ written: false, reason: "duplicate_ts", dedupe: tsKey }, "重复回复已忽略");
      }
      if (dedupe) {
        if (state.aiReplyKeys[dedupe]) {
          return ok({ written: false, reason: "duplicate", dedupe: dedupe }, "重复回复已忽略");
        }
        state.aiReplyKeys[dedupe] = now();
        if (tsKey) state.aiReplyKeys[tsKey] = now();
        // 只保留最近 200 条去重键，避免状态无限增长
        const keys = Object.keys(state.aiReplyKeys);
        if (keys.length > 200) {
          for (let i = 0; i < keys.length - 200; i++) delete state.aiReplyKeys[keys[i]];
        }
      }
      const msg = pushAiReply(state, peer, text, actor, sourceTs);
      // 推进游标：记下这条回复的时间戳
      // 【修复】用「对话里的真实时间戳」推进游标，而不是写入时刻。
      // 旧实现用 createdAtMs（写入时刻）推进游标，于是游标一路跟着
      // 「我打开聊天页的时刻」往前走，而对话里的真实回复时间比它早得多
      // → 下一轮 sinceTs 拿到的基线偏大 → 真实的新回复被判成「旧回复」而丢弃。
      const ts = Number(sourceTs || (msg && msg.createdAtMs) || now());
      if (ts > cursor) cursors[cursorKey] = ts;
      if (state.notifications && state.notifications.length > 300) state.notifications.length = 300;
      await saveState(state);
      return ok({ written: !!msg, message: msg, cursor: cursors[cursorKey] }, "已写入 AI 回复");
    }, params);
  }

  /** 只读：读取 AI 回复时间游标（前端在发送消息那一刻取基线用）。
   *  返回当前游标 + 对话里最新一条 AI 回复的时间戳，
   *  前端把它作为 sinceTs 传给 aiReply，即可只接收「之后新产生」的回复。 */
  function aiReplyCursor(params) {
    return wrap(async () => {
      const state = await loadState();
      const peer = normalizeAccountId(params.peer || "ai");
      const actor = normalizeAccountId(params.actor || "user");
      const key = peer + "__" + actor;
      const cursor = Number((state.aiReplyCursor && state.aiReplyCursor[key]) || 0);
      let latest = 0;
      try {
        const dms = ensureDm(state);
        const thread = dms[pairKey(peer, actor)];
        if (thread && Array.isArray(thread.messages)) {
          for (const m of thread.messages) {
            if (!m || String(m.from || "") !== peer) continue;
            const t = Number(m.createdAtMs || 0);
            if (t > latest) latest = t;
          }
        }
      } catch (e) { }
      return ok({ peer, actor, cursor: Math.max(cursor, latest), lastReplyAtMs: latest }, "读取完成");
    }, params);
  }

  /* ================================================================
   【修复·对话记录混乱·存量数据修复】
   旧实现里 AI 回复落库时用「写入时刻」当 createdAtMs，
   于是所有被同步回来的 AI 回复都挤在「我打开聊天页的那一刻」，
   彼此只差几百毫秒 —— 顺序全乱（实测 state.json 里 14 条 AI 消息全是这样）。

   这个工具做一次性修复：
     ① 读绑定对话的真实消息历史（Tools.Chat.getMessages）
     ② 按「正文 + 出现顺序」把每条 AI 回复的真实 timestamp 对应上
     ③ 回填 state.json 里对应 AI 消息的 createdAtMs
     ④ 按真实时间重新排序，并同步修正 aiReplyCursor
   修完之后新旧消息的排序键都是真实时间，顺序自然一致。

   只读对话、只改自己的 state，不发任何消息。
   ================================================================ */
function fixAiTimestamps(params) {
    return wrap(async () => {
      const state = await loadState();
      const peer = normalizeAccountId(params.peer || "ai");
      const actor = normalizeAccountId(params.actor || "user");
      const links = ensureChatLinks(state);
      const chatId = String(params.chatId || links[peer] || "").trim();
      if (!chatId) return fail("未绑定对话");
      const dryRun = params.dryRun === undefined ? true : !!params.dryRun;

      /* --- 1. 读绑定对话历史 --- */
      let res = null;
      try {
        res = await getTools().Chat.getMessages(chatId, { order: "asc", limit: 300 });
      } catch (e) {
        return fail("读取对话历史失败: " + String((e && e.message) || e));
      }
      const rawMsgs = (res && res.messages) || [];
      // 对话里的 AI 回复：正文 → 真实时间戳（按时间升序）
      const histTs = {};
      const histOrder = [];
      for (const m of rawMsgs) {
        if (!m) continue;
        const sender = String((m && m.sender) || "");
        if (sender !== "ai" && sender !== "assistant" && sender !== "bot") continue;
        const body = cleanReply((m && m.content) || "");
        if (!body) continue;
        const ts = Number((m && m.timestamp) || 0);
        if (!histTs[body]) histTs[body] = [];
        histTs[body].push(ts);
        histOrder.push({ body: body, ts: ts });
      }
      histOrder.sort((a, b) => a.ts - b.ts);
      if (!histOrder.length) return ok({ fixed: 0, reason: "no_history" }, "对话里没有 AI 回复");

      /* --- 2. 取出 state 里该会话的 AI 消息 --- */
      const dms = ensureDm(state);
      const key = pairKey(actor, peer);
      const thread = dms[key];
      if (!thread || !Array.isArray(thread.messages)) {
        return ok({ fixed: 0, reason: "no_thread" }, "没有对应的私信会话");
      }
      const aiMsgs = thread.messages.filter((m) => m && String(m.from || "") === peer);

      /* --- 3. 按正文 + 出现顺序对应并回填 --- */
      const used = {};
      let fixed = 0;
      const details = [];
      for (const m of aiMsgs) {
        const body = cleanReply(m.text || "");
        const cand = histTs[body];
        if (!cand || !cand.length) continue;
        const idx = used[body] || 0;
        if (idx >= cand.length) continue;
        const realTs = cand[idx];
        used[body] = idx + 1;
        const oldTs = Number(m.createdAtMs || 0);
        if (realTs > 0 && realTs !== oldTs) {
          m.createdAtMs = realTs;
          fixed++;
          details.push({ id: m.id, from: oldTs, to: realTs, preview: body.slice(0, 40) });
        }
      }

      /* --- 4. 重新排序 + 修正游标 --- */
      if (fixed > 0 && !dryRun) {
        thread.messages.sort((a, b) => {
          const ta = Number((a && a.createdAtMs) || 0);
          const tb = Number((b && b.createdAtMs) || 0);
          if (ta !== tb) return ta - tb;
          return String((a && a.id) || "").localeCompare(String((b && b.id) || ""));
        });
        const cursorKey = peer + "__" + actor;
        if (!state.aiReplyCursor || typeof state.aiReplyCursor !== "object") state.aiReplyCursor = {};
        const maxTs = aiMsgs.reduce((mx, m) => Math.max(mx, Number(m.createdAtMs || 0)), 0);
        if (maxTs > 0) state.aiReplyCursor[cursorKey] = maxTs;
        await saveState(state);
      }
      return ok({
        fixed: fixed,
        dryRun: dryRun,
        historyAiCount: histOrder.length,
        stateAiCount: aiMsgs.length,
        cursor: (state.aiReplyCursor || {})[peer + "__" + actor],
        details: details.slice(0, 40)
      }, dryRun ? ("预演完成：" + fixed + " 条待修正") : ("已修正 " + fixed + " 条"));
    }, params);
  }

  /* ================================================================
   【性能】chatBundle —— 打开聊天界面的一次性聚合包
     ---------------------------------------------------------------
     背景：打开一个会话原本要连打 5~6 次工具：
       dmRead + dmMessages + dmList + chatLinks + notifications + aiReplyCursor
     而每个工具调用都会：
       ① 走一次宿主 → 包运行时的往返（几百 ms）
       ② 全量读 state.json（42KB）→ JSON.parse
       ③ dmRead 还会全量写回 state.json
     结果就是「打开聊天界面明显卡一下」。

     优化：一次 loadState（只读一次、只写一次），在内存里拼出前端需要的全部字段。
     数据量与原来完全一致，语义不变，只是把 6 次往返压成 1 次。
     ================================================================ */
  function chatBundle(params) {
    return wrap(async () => {
      const state = await loadState();
      const actor = normalizeAccountId(params.actor || "user");
      const peer = normalizeAccountId(params.peer || "ai");
      const limit = Math.max(1, Math.min(500, Number(params.limit || 200)));
      const markRead = params.markRead === undefined ? true : !!params.markRead;
      const incThreads = params.includeThreads === undefined ? true : !!params.includeThreads;
      const incNotifs = params.includeNotifications === undefined ? true : !!params.includeNotifications;
      const incLinks = params.includeChatLinks === undefined ? true : !!params.includeChatLinks;

      const dms = ensureDm(state);
      const key = pairKey(actor, peer);
      const thread = dms[key];

      /* --- 1. 私信消息（按时间升序，与 dmMessages 保持一致） --- */
      let messages = thread && Array.isArray(thread.messages) ? thread.messages.slice() : [];
      messages = messages.sort((a, b) => {
        const ta = Number((a && a.createdAtMs) || 0);
        const tb = Number((b && b.createdAtMs) || 0);
        if (ta !== tb) return ta - tb;
        return 0; // 稳定排序：时间相同保持原顺序
      });
      messages = messages.slice(-limit); // 先排序后截断，避免回填消息被截掉

      /* --- 2. 标记已读（合并进同一次写盘） --- */
      let readMarked = false;
      if (markRead && thread) {
        if (!thread.unreadFor) thread.unreadFor = {};
        if (Number(thread.unreadFor[actor]) || 0) {
          thread.unreadFor[actor] = 0;
          readMarked = true;
        }
      }

      /* --- 3. 会话列表 --- */
      let threads = [];
      if (incThreads) {
        for (const tkey of Object.keys(dms)) {
          const t = dms[tkey];
          if (!t || !Array.isArray(t.messages)) continue;
          if (t.members.indexOf(actor) < 0) continue;
          const tpeer = t.members.filter((m) => m !== actor)[0] || "ai";
          /* 【修复·会话列表错乱】同 dmList：取时间最新的消息做预览 */
          let last = null;
          for (const m of t.messages) {
            if (!m) continue;
            if (!last || Number(m.createdAtMs || 0) > Number(last.createdAtMs || 0)) last = m;
          }
          threads.push({
            key: tkey,
            peer: tpeer,
            peerAccount: accountOf(state, tpeer),
            lastMessage: last,
            unread: Number(t.unreadFor && t.unreadFor[actor]) || 0,
            updatedAtMs: last ? last.createdAtMs : 0
          });
        }
        threads.sort((a, b) => b.updatedAtMs - a.updatedAtMs);
      }

      /* --- 4. 通知 --- */
      let notifications = [];
      if (incNotifs) {
        const all = ensureNotifs(state);
        for (const n of all) {
          if (!n) continue;
          if (String(n.target || "") !== actor) continue;
          notifications.push(n);
        }
        notifications = notifications.slice(-60);
      }

      /* --- 5. AI 回复游标 --- */
      const cursorKey = peer + "__" + actor;
      const cursor = Number((state.aiReplyCursor && state.aiReplyCursor[cursorKey]) || 0);
      let latest = 0;
      if (thread && Array.isArray(thread.messages)) {
        for (const m of thread.messages) {
          if (!m || String(m.from || "") !== peer) continue;
          const t = Number(m.createdAtMs || 0);
          if (t > latest) latest = t;
        }
      }

      /* --- 6. 对话绑定信息 --- */
      let links = {};
      let meta = {};
      if (incLinks) {
        links = Object.assign({}, ensureChatLinks(state));
        try {
          const res = await getTools().Chat.listAll();
          const chats = (res && res.chats) || [];
          for (const c of chats) {
            const cid = String(c.id || "");
            if (!cid) continue;
            meta[cid] = {
              title: String(c.title || ""),
              characterCardId: String(c.characterCardId || ""),
              characterCardName: String(c.characterCardName || ""),
              displayName: String(c.characterCardName || c.title || "")
            };
          }
        } catch (e) { }
      }

      /* --- 7. 账号资料 --- */
      const accounts = {
        user: accountOf(state, "user"),
        ai: accountOf(state, "ai")
      };

      /* 只在真的改了「已读」时才写盘，避免无谓的 42KB 写盘 */
      if (readMarked) await saveState(state);

      return ok(
        {
          actor,
          peer,
          peerAccount: accountOf(state, peer),
          accounts,
          messages,
          total: thread && thread.messages ? thread.messages.length : 0,
          threads,
          notifications,
          links,
          meta,
          cursor: Math.max(cursor, latest),
          lastReplyAtMs: latest,
          readMarked
        },
        "查询完成"
      );
    }, params);
  }

  /** 后台把用户私信送进真实 Operit 对话（桥接），取回 AI 新回复后落库 */
  function forwardToOperitChat(state, actor, chatId, text) {
    const tools = getTools();
    if (!tools || !tools.Chat || typeof tools.Chat.sendMessage !== "function") return;
    if (!text) return;
    const runner = async () => {
      let before = "";
      try { before = await lastAssistantFingerprint(chatId); } catch (e) { }
      try {
        await tools.Chat.sendMessage(text, chatId || undefined, undefined, undefined, {
          runtime: "main",
          hide_user_message: false,
          notify_reply: true
        });
      } catch (e) { }
      let reply = "";
      let replyTs = 0;
      // 最多等 40 秒，一旦出现与 before 不同的助手消息就认为拿到了新回复
      for (let i = 0; i < 40; i++) {
        await new Promise((r) => setTimeout(r, 1000));
        const now = await fetchLastAssistantReply(chatId);
        if (!now || !now.text) continue;
        if (now.text !== before) { reply = now.text; replyTs = now.ts; break; }
      }
      if (!reply) return;
      try {
        const fresh = await loadState();
        /* 【修复·对话记录混乱】用真实时间戳落库，避免 AI 回复插到用户消息旁边 */
        pushAiReply(fresh, "ai", reply, actor, replyTs);
        if (fresh.notifications && fresh.notifications.length > 300) fresh.notifications.length = 300;
        await saveState(fresh);
      } catch (e) { }
    };
    try {
      if (typeof setTimeout === "function") setTimeout(runner, 0);
      else runner();
    } catch (e) { }
  }

  /**
   * 从宿主 Files.read 的返回值里取出文本内容。
   * 宿主在不同场景会返回 {content} / {data} / 纯字符串，这里都兜住。
   */
  function extractText(r) {
    if (r == null) return "";
    if (typeof r === "string") return r;
    if (r.content !== undefined && r.content !== null) return String(r.content);
    if (r.data !== undefined && r.data !== null) return String(r.data);
    if (r.text !== undefined && r.text !== null) return String(r.text);
    return "";
  }
  /**
   * 把帖子里的图片注册进**宿主图片池**，拿到宿主的多模态图片链接。
   *
   * 【关键·宿主真正的图片通道】
   *   宿主解析消息里的图片不靠 markdown 图片语法，而是靠一个特殊的
   *   link 标签（type 为 image，带一个 UUID id）：
   *     - 宿主把本地图片注册进 ImagePoolManager（磁盘持久化 + 内存索引），
   *       拿到一个 UUID；
   *     - 工具返回值里给出这个 link 标签；
   *     - 消息构建阶段（ConversationMarkupManager.splitImageLinksForModel）
   *       会把这个标签从正文里摘出来，并把对应图片作为多模态内容
   *       真正发给模型。
   *   所以只要把带这个标签的文本送进对话，AI 就能**直接看到照片**，
   *   而不是看到一段文字描述。
   *
   * 【参数名】direct_image=true（宿主读文件工具的隐藏参数）。
   *   实测：Files.read({path, direct_image:"true"}) 返回的 content 里
   *   就是那个 link 标签；其它候选参数名都会退回 OCR 文本。
   */
  async function registerPostImages(post, limit) {
    const max = typeof limit === "number" ? limit : 3;
    const tools = getTools();
    if (!tools || !tools.Files || typeof tools.Files.read !== "function") return [];
    const atts = ((post && post.attachments) || []).filter((a) => a && a.type === "image");
    const out = [];
    for (const a of atts) {
      if (out.length >= max) break;
      const p = String(a.path || "");
      if (!p) continue;
      try {
        const r = await tools.Files.read({ path: p, direct_image: "true" });
        const t = String(extractText(r) || "").trim();
        /* 原样保留宿主给的标签文本，只额外抽出 id 供调试与去重，
           绝不自己拼标签，避免格式与宿主解析正则对不上。 */
        const re = new RegExp('<link\\s+type="image"\\s+id="([^"]+)"[^>]*>');
        const m = re.exec(t);
        if (m) {
          const s0 = t.indexOf(m[0]);
          const rest = t.slice(s0);
          const e0 = rest.indexOf('</link>');
          const tag = e0 === -1 ? rest.slice(0, m[0].length) : rest.slice(0, e0 + '</link>'.length);
          out.push({ path: p, id: m[1], link: tag });
        }
      } catch (e) { }
    }
    return out;
  }
  /**
   * 降级路径：让宿主自己的读文件工具（带 intent）把图片转成**文字描述**。
   * 只有 registerPostImages 失败时才会走到这里。
   */
  async function describePostImages(post, limit) {
    const max = typeof limit === "number" ? limit : 3;
    const tools = getTools();
    if (!tools || !tools.Files || typeof tools.Files.read !== "function") return [];
    const atts = ((post && post.attachments) || []).filter((a) => a && a.type === "image");
    const out = [];
    for (const a of atts) {
      if (out.length >= max) break;
      const p = String(a.path || "");
      if (!p) continue;
      try {
        const r = await tools.Files.read({ path: p, intent: "详细描述这张图片的内容" });
        const t = String(extractText(r) || "").trim();
        if (t) out.push({ path: p, description: t });
      } catch (e) { }
    }
    return out;
  }
  /** 把描述数组拼成给对话看的「图片N：…」行 */
  function imageDescriptionLines(descs) {
    const arr = Array.isArray(descs) ? descs : [];
    const out = [];
    for (let i = 0; i < arr.length; i++) {
      const d = arr[i] || {};
      const txt = String(d.description || d.text || "").trim();
      if (txt) out.push("图片" + (i + 1) + "（文字描述）：" + txt);
    }
    return out;
  }
  var api = {
    post,
    status,
    profile,
    updateProfile,
    comment,
    listComments,
    dmList,
    dmMessages,
    dmSend,
    dmRead,
    notifications,
    readNotifications,
    like,
    retweet,
    bookmark,
    deletePost,
    follow,
    reset,
    search: searchPosts,
    listChats: listOperitChats,
    bindChat,
    chatLinks,
    bridgeSend,
    bridgePoll,
    bridgeSocial,
    describePostImages: describePostImagesTool,
    socialBridgeTarget,
    socialBridgeQueue,
    socialBridgeAck,
    aiReplyComment,
    chatHistory,
    aiReply,
    aiReplyCursor,
    // 【修复·对话记录混乱】存量 AI 消息时间戳修正
    fixAiTimestamps,
    chatBundle
  };
  return api;
})();
exports.post = XSocialTools.post;
exports.status = XSocialTools.status;
exports.like = XSocialTools.like;
exports.retweet = XSocialTools.retweet;
exports.bookmark = XSocialTools.bookmark;
exports.deletePost = XSocialTools.deletePost;
exports.follow = XSocialTools.follow;
exports.reset = XSocialTools.reset;
exports.profile = XSocialTools.profile;
exports.updateProfile = XSocialTools.updateProfile;
exports.comment = XSocialTools.comment;
exports.listComments = XSocialTools.listComments;
exports.dmList = XSocialTools.dmList;
exports.dmMessages = XSocialTools.dmMessages;
exports.dmSend = XSocialTools.dmSend;
exports.dmRead = XSocialTools.dmRead;
exports.notifications = XSocialTools.notifications;
exports.readNotifications = XSocialTools.readNotifications;
exports.search = XSocialTools.search;
exports.listChats = XSocialTools.listChats;
exports.bindChat = XSocialTools.bindChat;
exports.chatLinks = XSocialTools.chatLinks;
// 【修复】bridgeSend / bridgePoll 之前漏了导出，导致运行时脚本报
// "function 'bridgeSend' not found in script"，AI 私信发出去收不到回复。
exports.bridgeSend = XSocialTools.bridgeSend;
exports.bridgePoll = XSocialTools.bridgePoll;
// 【新增·社交事件桥接】发帖/评论 → 绑定对话；AI 回复回填成评论（前端 UI 帧驱动）
exports.bridgeSocial = XSocialTools.bridgeSocial;
exports.socialBridgeTarget = XSocialTools.socialBridgeTarget;
exports.socialBridgeQueue = XSocialTools.socialBridgeQueue;
exports.socialBridgeAck = XSocialTools.socialBridgeAck;
exports.aiReplyComment = XSocialTools.aiReplyComment;
// 只读工具：读取绑定对话历史，把 AI 回复同步回 X 私信
exports.chatHistory = XSocialTools.chatHistory;
// 写入 AI 回复到 X 私信（UI 帧读到新回复后调用）
exports.aiReply = XSocialTools.aiReply;
// 读取 AI 回复时间游标（前端取基线，只同步本次发送之后的新回复）
exports.aiReplyCursor = XSocialTools.aiReplyCursor;
// 【修复·对话记录混乱】把存量 AI 消息的错误时间戳修正为真实时间
exports.fixAiTimestamps = XSocialTools.fixAiTimestamps;
// 【性能】打开聊天界面的一次性聚合包（消息+会话+通知+绑定+游标）
exports.chatBundle = XSocialTools.chatBundle;
// 只读工具：把帖子图片注册进宿主图片池，返回多模态图片标签
exports.describePostImages = XSocialTools.describePostImages;
