"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerToolPkg = registerToolPkg;
/**
 * X Social Sidebar - ToolPkg 主入口
 *
 * 已实测的宿主约束（本轮全部踩过）：
 * 1. screen 必须是带 __operit_toolpkg_module_path 标记的函数（require 出来的）。
 * 2. ToolPkg.readResource() 不允许在 registerToolPkg() 运行期间调用。
 * 3. readResource 靠 __operitCurrentCallId 解析 target，在 UI 的 onLoad 里
 *    跨异步边界调用会报 "package/toolpkg runtime target is empty"。
 * 4. UI 模块作用域里**能**访问裸 Tools（宿主注入到全局）。但绝对不能写
 *    `var Tools = globalThis.Tools;` —— var 提升会把整条作用域上的 Tools
 *    遮蔽成 undefined，于是 UI 里任何 Tools.Files.xxx 都同步抛异常，
 *    日志一行都写不出来，表现就是「永远卡在加载界面」。这是上一版真正的根因。
 * 5. Tools 只有 Files/Net/System/SoftwareSettings/Tasker/UI/Memory/FFmpeg/
 *    Workflow，没有 Tools.Zip。
 *
 * 因此 HTML 直接以 base64 内联进 ui/x_social_sidebar/index.ui.js，
 * UI 侧在内存解码 + 裸 Tools.Files.write 落盘 + onInterceptRequest 回 filePath。
 * 本文件只做路由注册，不再参与资源导出。
 */
var index_ui_js_1 = require("./ui/x_social_sidebar/index.ui.js");

var TOOLPKG_ID = "x_social_sidebar";
var UI_ID = "x_social_main";
var UI_ROUTE = "toolpkg:" + TOOLPKG_ID + ":ui:" + UI_ID;

function pickScreen() {
    var m = index_ui_js_1;
    if (m && typeof m === "function") return m;
    if (m && m.default && typeof m.default === "function") return m.default;
    if (m && m.default && m.default.default && typeof m.default.default === "function") return m.default.default;
    return null;
}

function registerToolPkg() {
    var screen = pickScreen();
    if (!screen) {
        throw new Error("X Social: 找不到 Screen 导出（exports.default）");
    }
    ToolPkg.registerUiRoute({
        id: UI_ID,
        route: UI_ROUTE,
        runtime: "compose_dsl",
        screen: screen,
        params: {},
        keepAlive: true,
        title: {
            zh: "X",
            en: "X"
        }
    });
    ToolPkg.registerNavigationEntry({
        id: "x_social_sidebar_entry",
        route: UI_ROUTE,
        surface: "main_sidebar_plugins",
        title: {
            zh: "X",
            en: "X"
        },
        icon: "alternate_email",
        order: 30
    });
    return true;
}