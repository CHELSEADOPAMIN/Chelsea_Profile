# 个人网站设计风格 Prompt — 极简布局 × 复古 Mac 质感

> **用法**: 在使用 Claude Code 编写网页前，将下方 prompt 作为前置上下文发送。生成的页面会保持干净的单列居中布局，但在字体、色彩、纹理和控件上带有 Classic Mac / Aqua 时代的怀旧感。

---

## Prompt（直接复制使用）

```
你是一个前端开发者。请按照以下设计规范构建我的个人网站。

核心理念：布局是现代极简的（单列居中、大量留白），但视觉语言是复古 macOS 的（拟物控件、像素字体、经典配色、旧 Mac 质感）。最终效果应该像"一个 2001 年的 Mac 用户用 iWeb 搭的个人主页，但审美品味很好"。

---

## 一、整体布局（保持极简）

- 页面最大宽度 700-800px，水平居中
- 单列布局，内容垂直堆叠，区块间距慷慨（2-3rem）
- 大量留白，整体有"呼吸感"
- 响应式，移动端友好
- 语义化 HTML

---

## 二、复古 Mac 配色

| 用途 | 色值 |
|------|------|
| 桌面/页面背景 | `#D5D5C9`（经典米灰）或 `#C0C0C0`（System 7 灰）|
| 窗口/卡片背景 | `#ECECEC` |
| 主文字 | `#000000` |
| 次要文字 | `#666666` |
| 不可用文字 | `#999999` |
| 选中高亮 | `#3162D4`（经典蓝）|
| 边框/分割线 | `#999999` / `#B0B0B0` |
| 按钮表面 | `#DDDDDD` |
| 头像衬底 | `#B8B0D0`（复古淡紫，比现代版更灰更沉） |

使用 CSS 变量统一管理：
```css
:root {
  --bg-desktop: #D5D5C9;
  --bg-window: #ECECEC;
  --bg-card: #FFFFFF;
  --color-primary: #000000;
  --color-secondary: #666666;
  --color-accent: #3162D4;
  --color-border: #999999;
  --color-button: #DDDDDD;
  --color-avatar-bg: #B8B0D0;
}
```

---

## 三、复古字体系统

```css
:root {
  /* 标题 — 用 Chicago/Geneva 感觉的字体 */
  --font-display: "Geneva", "ChicagoFLF", "Lucida Grande", "Helvetica Neue", sans-serif;

  /* 正文 — Lucida Grande 是 Aqua 时代的灵魂 */
  --font-body: "Lucida Grande", "Geneva", "Helvetica Neue", sans-serif;

  /* 等宽 — 终端感 */
  --font-mono: "Monaco", "Menlo", "Courier New", monospace;
}
```

**Google Fonts 备选（无本地字体时）：**
- 标题像素风: `"Silkscreen"` （Google Fonts 有收录）
- 正文: `"IBM Plex Sans"` （小字号下类似 Lucida Grande）
- 等宽: `"IBM Plex Mono"`

**字号规则（保持复古小字号感，但标题可以大一点）：**
- 主标题 (h1): 24-28px, font-weight: 700（比纯 System 7 稍大，但不夸张）
- 副标题: 13-14px, font-weight: 400
- 导航/按钮: 12-13px
- 正文: 13-14px, line-height: 1.5

**全局抗锯齿：**
```css
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 四、导航栏

- 固定在页面顶部，高度 28-32px
- 背景: 浅灰渐变，模仿 Mac 菜单栏
  ```css
  background: linear-gradient(180deg, #FBFBFB 0%, #E3E3E3 100%);
  border-bottom: 1px solid #B3B3B3;
  ```
- **左侧**: 小圆形头像(28px) + 姓名（加粗，12-13px）+ @用户名（灰色）
- **右侧**: 导航链接（Home / Projects / Blog）+ GitHub 图标 + LinkedIn 图标
- 链接 hover: 蓝色高亮背景 `#3162D4` + 白色文字（经典 Mac 菜单选中效果）
- 字体: `var(--font-body)`, 13px

---

## 五、Hero 区域（首页主体）

所有内容水平居中：

1. **标题行**: "Hello, I'm [名字] 👋"
   - 字体: `var(--font-display)`, 24-28px, bold
   - 可选：用 `"Silkscreen"` 像素字体增加复古感

2. **副标题**: 关键词用 " × " 连接
   - 字号 13px，颜色 `var(--color-secondary)`

3. **头像**:
   - 圆形，约 200px
   - 衬底: 比头像稍大的圆，颜色 `var(--color-avatar-bg)`
   - 可选：给头像加 1px solid #999 边框，增加 Classic Mac 图标感

4. **一句话介绍**:
   - 13-14px，`var(--font-body)`

5. **CTA 按钮** — 使用复古 Mac 按钮样式（二选一）:

   **风格 A: System 7 浮雕按钮**
   ```css
   .btn-retro {
     background: #DDDDDD;
     border: 2px solid;
     border-color: #FFFFFF #808080 #808080 #FFFFFF;
     padding: 4px 16px;
     font-family: var(--font-body);
     font-size: 12px;
     cursor: pointer;
   }
   .btn-retro:active {
     border-color: #808080 #FFFFFF #FFFFFF #808080;
     background: #C0C0C0;
   }
   ```

   **风格 B: Aqua 果冻按钮**
   ```css
   .btn-aqua {
     background: linear-gradient(180deg, #FEFEFE, #DFDFDF);
     border: 1px solid #B0B0B0;
     border-radius: 5px;
     padding: 5px 18px;
     font-family: var(--font-body);
     font-size: 13px;
     box-shadow: 0 1px 2px rgba(0,0,0,0.1),
                 inset 0 1px 0 rgba(255,255,255,0.6);
   }
   ```

---

## 六、背景纹理（关键复古元素）

页面背景不要纯白，使用经典 Mac 桌面纹理之一：

**选项 A: 米灰纯色**
```css
body { background: #D5D5C9; }
```

**选项 B: System 7 棋盘格微纹理**
```css
body {
  background-color: #C0C0C0;
  background-image: repeating-conic-gradient(
    #B8B8B8 0% 25%, transparent 0% 50%
  );
  background-size: 2px 2px;
}
```

**选项 C: 淡灰亚麻纹理（OS X Lion 风格）**
```css
body {
  background-color: #E8E4DE;
  background-image: url("data:image/svg+xml,..."); /* 细微噪点纹理 */
}
```

推荐使用选项 A 或 B，简单且效果好。

---

## 七、图标风格

不使用现代线条图标（Lucide / Heroicons），改用：
- **Emoji 图标**: 📁 📄 🗑️ 💾 ⚙️ 🔍 等
- 或使用像素风格的 SVG 小图标
- GitHub / LinkedIn 图标可保留，但尽量用单色/灰色调

---

## 八、卡片/内容区域（可选，用于 Projects 等页面）

如果有项目展示或博客列表，每个条目用"窗口"样式包裹：

```css
.card-window {
  background: var(--bg-window);
  border: 1px solid var(--color-border);
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  overflow: hidden;
}
.card-window .titlebar {
  height: 22px;
  background: linear-gradient(180deg, #E8E8E8, #D0D0D0);
  border-bottom: 1px solid #B0B0B0;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 6px;
}
.card-window .dot { width: 10px; height: 10px; border-radius: 50%; }
.card-window .dot.red { background: #FF5F57; }
.card-window .dot.yellow { background: #FFBD2E; }
.card-window .dot.green { background: #28C840; }
.card-window .content { padding: 16px; }
```

---

## 九、动效（克制）

- 页面加载: 轻微 fade-in（0.3s），不要 slide-up
- 按钮 hover: 仅颜色变化，不要缩放
- 菜单高亮: 即时切换，不要过渡动画（复古 Mac 菜单没有动画）
- 窗口/卡片出现: 可选 `scale(0.95) → scale(1)` 的 0.2s 动画

---

## 十、深色模式（可选）

如果支持深色模式，参考 macOS Mojave 暗色桌面：
```css
[data-theme="dark"] {
  --bg-desktop: #2D2D2D;
  --bg-window: #3A3A3A;
  --bg-card: #444444;
  --color-primary: #E0E0E0;
  --color-secondary: #999999;
  --color-border: #555555;
  --color-button: #505050;
  --color-avatar-bg: #4A4560;
}
```

---

## 快速检查清单

生成页面后确认：
- [ ] 布局是单列居中、大量留白的（像截图那样干净）
- [ ] 背景不是纯白，带有复古灰/米色调或微纹理
- [ ] 字体是 Geneva / Lucida Grande / Silkscreen 风格，字号偏小(12-14px)
- [ ] 导航栏像 Mac 菜单栏（灰色渐变 + 蓝色 hover 高亮）
- [ ] 按钮是浮雕或 Aqua 果冻风格，不是现代扁平按钮
- [ ] 如有卡片/项目展示，使用窗口面板样式（带红黄绿圆点标题栏）
- [ ] 图标使用 emoji 或像素风 SVG
- [ ] 整体感觉是"极简 + 怀旧"，不是"极简 + 现代"
```

---

## 风格速查

| 维度 | 描述 |
|------|------|
| 布局 | 现代极简：单列居中、大留白、不拥挤 |
| 视觉 | 复古 Mac：拟物按钮、经典配色、小字号 |
| 字体 | Geneva / Lucida Grande / Silkscreen 像素风 |
| 背景 | 米灰色 / 棋盘格微纹理（非纯白） |
| 按钮 | 3D 浮雕 或 Aqua 渐变果冻 |
| 图标 | Emoji 或像素 SVG |
| 卡片 | Mac 窗口样式（标题栏 + 红黄绿圆点） |
| 导航 | Mac 菜单栏风格（灰渐变 + 蓝色选中） |
| 动效 | 极度克制，快速 fade，无花哨过渡 |
| 整体气质 | "2001年的 Mac 用户建的个人主页，但品味很好" |
