"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPost = exports.makePost = exports.accountOf = exports.normalizeAccountId = exports.saveState = exports.loadState = exports.mediaDir = exports.ensureDirs = exports.defaultState = exports.makeId = exports.now = void 0;
const STORE_DIR = "/sdcard/Download/Operit/cleanOnExit/x_social_sidebar";
const STORE_FILE = STORE_DIR + "/state.json";
const MEDIA_DIR = STORE_DIR + "/media";
function now() {
    return Date.now();
}
exports.now = now;
function makeId(prefix) {
    return prefix + "_" + Date.now().toString(36) + "_" + Math.floor(Math.random() * 1e6).toString(36);
}
exports.makeId = makeId;
function defaultAccounts() {
    return {
        user: {
            id: "user",
            handle: "@you",
            displayName: "You",
            bio: "本账号（用户）",
            avatarColor: "#1D9BF0",
            joined: "2026-10",
            following: ["ai"],
        },
        ai: {
            id: "ai",
            handle: "@operit_ai",
            displayName: "Operit AI",
            bio: "本账号（AI）",
            avatarColor: "#7856FF",
            joined: "2026-10",
            following: ["user"],
        },
    };
}
function defaultState() {
    return { version: 1, posts: [], accounts: defaultAccounts() };
}
exports.defaultState = defaultState;
async function ensureDirs() {
    const Tools = globalThis.Tools;
    try {
        await Tools.Files.mkdir(STORE_DIR, true, "android");
    }
    catch (e) { }
    try {
        await Tools.Files.mkdir(MEDIA_DIR, true, "android");
    }
    catch (e) { }
}
exports.ensureDirs = ensureDirs;
function mediaDir() {
    return MEDIA_DIR;
}
exports.mediaDir = mediaDir;
async function loadState() {
    const Tools = globalThis.Tools;
    await ensureDirs();
    try {
        const exists = await Tools.Files.exists(STORE_FILE, "android");
        if (!exists || !exists.exists)
            return defaultState();
        const res = await Tools.Files.read(STORE_FILE, "android");
        const raw = res && (res.content !== undefined ? res.content : res.data);
        if (!raw)
            return defaultState();
        const parsed = JSON.parse(raw);
        if (!parsed || !parsed.posts)
            return defaultState();
        const d = defaultState();
        parsed.accounts = Object.assign(d.accounts, parsed.accounts || {});
        parsed.version = parsed.version || 1;
        return parsed;
    }
    catch (e) {
        return defaultState();
    }
}
exports.loadState = loadState;
async function saveState(state) {
    const Tools = globalThis.Tools;
    await ensureDirs();
    await Tools.Files.write(STORE_FILE, JSON.stringify(state, null, 2), false, "android");
}
exports.saveState = saveState;
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
exports.normalizeAccountId = normalizeAccountId;
function accountOf(state, id) {
    return state.accounts[id] || defaultAccounts()[id];
}
exports.accountOf = accountOf;
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
    };
}
exports.makePost = makePost;
function findPost(state, postId) {
    for (const p of state.posts) {
        if (p.id === postId)
            return p;
    }
    return null;
}
exports.findPost = findPost;
