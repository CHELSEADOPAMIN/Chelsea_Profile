# Chelsea Profile — 整体实施方案

## 设计方向

**核心概念**: "2001 年 Mac 用户用 iWeb 搭建的个人主页，但审美品味很好" — 现代极简布局 × 复古 macOS 拟物质感。

---

## 一、项目架构 (基于 Composition Patterns + React Best Practices)

```
src/
├── app/
│   ├── layout.tsx              ← Server Component, 全局布局 + 字体 + CSS 变量
│   ├── page.tsx                ← Server Component, 首页 Hero
│   ├── globals.css             ← CSS 变量、复古纹理、全局样式
│   └── hackathons/
│       └── page.tsx            ← Server Component, Hackathons 页面
├── components/
│   ├── nav-bar.tsx             ← Client Component (hover 交互)
│   ├── hero-section.tsx        ← Server Component, 首页主体
│   ├── retro-button.tsx        ← Server Component, Aqua/System7 按钮
│   ├── mac-window-card.tsx     ← Server Component, 红黄绿圆点窗口卡片
│   ├── hackathon-card.tsx      ← Server Component, Hackathon 条目卡片
│   └── ribbon-badge.tsx        ← Server Component, WINNER/FINALIST 角标
├── data/
│   └── hackathons.ts           ← Hackathon 数据 (TypeScript 类型 + 静态数据)
└── lib/
    └── utils.ts                ← cn() 工具函数
```

---

## 二、关键技术决策

### 1. Server vs Client Components (React Best Practices: `bundle-*`)

| 组件 | 类型 | 原因 |
|------|------|------|
| `layout.tsx` | Server | 静态壳层，无交互 |
| `page.tsx` (首页) | Server | 纯展示，零 JS 发送到客户端 |
| `hackathons/page.tsx` | Server | 数据驱动渲染，无客户端状态 |
| `nav-bar.tsx` | **Client** | 需要 hover 高亮 + 移动端菜单切换 + 路由高亮 |
| 其他组件 | Server | 纯展示，最大化减少 bundle |

### 2. 组件设计 (Composition Patterns: `architecture-*`)

- **不用 boolean props 控制变体**，改用显式的 variant 数据驱动:
  ```tsx
  // ✅ 数据驱动，badge 字段决定角标样式
  <RibbonBadge type="WINNER" />
  <RibbonBadge type="FINALIST" />

  // ❌ 不用 boolean
  <RibbonBadge isWinner isFinalist />
  ```

- **RetroButton 用 variant prop** (不是 boolean):
  ```tsx
  <RetroButton variant="aqua">Contact</RetroButton>
  <RetroButton variant="system7">Download CV</RetroButton>
  ```

- **React 19**: 不使用 `forwardRef`，直接传 `ref` prop

### 3. 性能优化 (React Best Practices: `server-*`, `rendering-*`)

- 直接导入组件，**不使用 barrel files** (`bundle-barrel-imports`)
- 首页纯 Server Component，**零客户端 JS**
- 图片使用 `next/image` + `priority` (hero 头像) + AVIF/WebP 格式
- 动画用 **纯 CSS** (fade-in, hover 效果) — 复古 Mac 风格本身就要求克制动效
- `content-visibility: auto` 用于 Hackathon 卡片列表 (`rendering-content-visibility`)

### 4. 字体策略 (Frontend Design)

```
Google Fonts 加载:
- Silkscreen (像素风标题) — 复古 Mac 核心辨识度
- IBM Plex Sans (正文 fallback)
- IBM Plex Mono (代码/等宽)

本地 fallback:
- Lucida Grande → Geneva → Helvetica Neue
```

使用 `next/font/google` 优化加载，自动 font-display: swap。

### 5. 样式系统 (Frontend Design + Web Design Guidelines)

- **CSS 变量** 管理复古配色 (亮/暗模式)
- **Tailwind** 扩展配色对应 CSS 变量
- 背景纹理: 采用 **选项 A (米灰纯色 `#D5D5C9`)** + 可选 System 7 棋盘格微纹理
- 暗色模式: 参考 macOS Mojave 暗色方案，通过 `next-themes` 切换

### 6. 认证 (Better Auth)

当前为纯静态个人展示站，**暂不集成认证**。如后续需要 CMS / Admin 后台，可通过 Better Auth 快速接入:
- 安装 `better-auth`
- 配置 `auth.ts` + 数据库适配器
- 加入 admin 插件保护管理路由

---

## 三、页面详细规划

### 首页 (Home)

```
┌──────────────────────────────────────────┐
│ 🍎  Chelsea  @chelseadopamin    Home | Hackathons | 🐙 🔗 │  ← Mac 菜单栏
├──────────────────────────────────────────┤
│                                          │
│           Hello, I'm Chelsea 👋          │  ← Silkscreen 像素字体
│       Builder × Hacker × Designer        │  ← 13px 灰色副标题
│                                          │
│              ┌──────────┐                │
│              │  头像 ○   │                │  ← 200px 圆形 + 淡紫衬底
│              └──────────┘                │
│                                          │
│         一句话自我介绍...                  │  ← Lucida Grande 14px
│                                          │
│      [ 📧 Contact ]  [ 📄 Resume ]       │  ← Aqua 果冻按钮
│                                          │
└──────────────────────────────────────────┘
```

### Hackathons 页面

```
┌──────────────────────────────────────────┐
│ Mac 菜单栏 (同首页)                        │
├──────────────────────────────────────────┤
│                                          │
│              Hackathons                   │  ← 居中大标题
│           3 wins, 8 total                │  ← 灰色统计
│                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │🎀WINNER │  │         │  │🎀FINALIST│ │  ← 3列网格
│  │ 截图     │  │ 截图     │  │ 截图     │  │
│  │ 标题     │  │ 标题     │  │ 标题     │  │
│  │ 获奖     │  │ 获奖     │  │ 获奖     │  │
│  │ 描述     │  │ 描述     │  │ 描述     │  │
│  │🔗  日期·地│  │🔗  日期·地│  │🔗  日期·地│  │
│  └─────────┘  └─────────┘  └─────────┘  │
│                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │  ...     │  │  ...     │  │  ...     │  │
│  └─────────┘  └─────────┘  └─────────┘  │
└──────────────────────────────────────────┘
```

- 网格最大宽度 **1100px** (比首页宽，容纳 3 列)
- 卡片使用 Mac 窗口风格 (红黄绿圆点标题栏)
- 角标用 CSS `rotate(-45deg)` 斜带实现
- 响应式: 3列 → 2列 → 1列

---

## 四、复古 Mac 视觉规范

### 配色 (CSS 变量)

| 用途 | 亮色模式 | 暗色模式 |
|------|----------|----------|
| 桌面/页面背景 | `#D5D5C9` | `#2D2D2D` |
| 窗口/卡片背景 | `#ECECEC` | `#3A3A3A` |
| 主文字 | `#000000` | `#E0E0E0` |
| 次要文字 | `#666666` | `#999999` |
| 选中高亮 | `#3162D4` | `#3162D4` |
| 边框/分割线 | `#999999` | `#555555` |
| 按钮表面 | `#DDDDDD` | `#505050` |
| 头像衬底 | `#B8B0D0` | `#4A4560` |

### 字体系统

| 用途 | 字体栈 | 字号 |
|------|--------|------|
| 主标题 (h1) | Silkscreen / Geneva / ChicagoFLF | 24-28px, bold |
| 副标题 | var(--font-body) | 13-14px |
| 导航/按钮 | var(--font-body) | 12-13px |
| 正文 | Lucida Grande / Geneva | 13-14px, line-height 1.5 |
| 等宽 | Monaco / Menlo | 13px |

### 导航栏样式

- 固定顶部，高度 28-32px
- 背景: 浅灰渐变 `linear-gradient(180deg, #FBFBFB, #E3E3E3)`
- 底部边框: `1px solid #B3B3B3`
- 链接 hover: 蓝色高亮背景 `#3162D4` + 白色文字
- 左侧: 小圆形头像 + 姓名 + @用户名
- 右侧: 导航链接 + GitHub/LinkedIn 图标

### 按钮样式

采用 **Aqua 果冻按钮** 为主要风格:
- 背景: `linear-gradient(180deg, #FEFEFE, #DFDFDF)`
- 边框: `1px solid #B0B0B0`
- 圆角: `5px`
- 内阴影: `inset 0 1px 0 rgba(255,255,255,0.6)`

备选 **System 7 浮雕按钮** 用于次要操作。

### 动效 (极度克制)

- 页面加载: `opacity 0→1`, `0.3s ease`
- 按钮 hover: 仅颜色变化，无缩放
- 菜单高亮: 即时切换，无过渡动画
- 卡片 hover: 轻微上浮阴影
- `prefers-reduced-motion` 时禁用全部动画

---

## 五、Web Interface Guidelines 合规要点

- 语义化 HTML: `<nav>`, `<main>`, `<article>`, `<header>`
- 所有图片有 `alt` 属性
- 链接可键盘聚焦，有 `focus-visible` 样式
- 颜色对比度达到 WCAG AA (暗色模式尤其注意)
- `prefers-reduced-motion` 时禁用所有动画
- 外部链接加 `rel="noopener noreferrer"` + `target="_blank"`

---

## 六、数据结构

### Hackathon 数据类型

```typescript
interface HackathonEntry {
  title: string;
  image: string;
  badge: "WINNER" | "FINALIST" | "HONORABLE" | null;
  award: string;
  description: string;
  description_alt?: string;
  date: string;
  location: string;
  links: {
    github?: string;
    website?: string;
    devpost?: string;
  };
}
```

---

## 七、实施步骤

| 步骤 | 内容 | 涉及文件 |
|------|------|----------|
| 1 | 全局基础: CSS 变量、字体加载、布局骨架、暗色模式 | `globals.css`, `layout.tsx`, `tailwind.config.ts` |
| 2 | 导航栏: Mac 菜单栏组件 | `nav-bar.tsx` |
| 3 | 首页: Hero 区域 (标题、头像、介绍、按钮) | `page.tsx`, `hero-section.tsx`, `retro-button.tsx` |
| 4 | Hackathon 基础组件: 窗口卡片、角标 | `mac-window-card.tsx`, `ribbon-badge.tsx` |
| 5 | Hackathon 页面: 数据、卡片、网格布局 | `hackathons.ts`, `hackathon-card.tsx`, `hackathons/page.tsx` |
| 6 | 细节打磨: 动画、响应式、暗色模式测试 | 各文件微调 |

---

## 八、技术栈总览

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 15.3 | 框架 (App Router) |
| React | 19 | UI 库 |
| TypeScript | 5.8 | 类型安全 |
| Tailwind CSS | 3.4 | 样式工具 |
| next-themes | 0.4 | 暗色模式切换 |
| next/font | built-in | Google Fonts 优化加载 |
| next/image | built-in | 图片优化 (AVIF/WebP) |
