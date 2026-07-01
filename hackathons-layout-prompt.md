# Hackathons 页面布局 Prompt

> 这是一个纯布局描述，不包含视觉风格。请搭配你的整体风格 prompt 一起使用。

---

## Prompt（直接复制使用）

```
请按照以下布局规范构建 Hackathons 页面。视觉风格请遵循之前提供的整体设计规范，这里只定义布局和结构。

---

## 页面结构

### 1. 页面标题区
- 大标题 "Hackathons"，居中，加粗
- 紧跟一行统计摘要，居中，灰色小字，格式为 "X wins, Y total"

### 2. 卡片网格

使用响应式网格布局：
- 桌面端: 3 列等宽
- 平板端: 2 列
- 手机端: 1 列
- 卡片间距: 24-32px
- 网格最大宽度与页面一致（约 1000-1100px），居中

### 3. 单张卡片结构（从上到下）

每张卡片由以下 5 个区域垂直堆叠：

```
┌─────────────────────────┐
│                         │
│    项目截图 / 封面图     │  ← 区域 A: 图片
│    🏷️ 角标（斜带）       │
│                         │
├─────────────────────────┤
│     项目名称（加粗）     │  ← 区域 B: 标题
│     获奖情况（小字）     │
├─────────────────────────┤
│                         │
│     项目描述（正文）     │  ← 区域 C: 描述
│     （可选：翻译）       │
│                         │
├─────────────────────────┤
│ 🔗 🐙        日期 · 地点 │  ← 区域 D: 底栏
└─────────────────────────┘
```

#### 区域 A — 项目封面图
- 宽度撑满卡片，高度固定比例（约 16:10 或 3:2）
- 图片使用 `object-fit: cover`
- 左上角有一个**斜 45° 角标/缎带 (ribbon)**，标注状态：
  - "WINNER"（获奖）— 背景色用强调色
  - "FINALIST"（入围）— 背景色用次要色
  - 角标文字全大写，字号 10-11px，加粗，白色
  - CSS 实现: 用 `transform: rotate(-45deg)` 的绝对定位元素

#### 区域 B — 项目标题 + 获奖
- 项目名称: 居中，加粗，字号稍大（16-18px）
- 获奖信息: 居中，灰色小字（13-14px），紧跟标题下方
  - 格式示例: "Top 5 Finalist" / "Won: 1st - $2000 Prize" / "Won: 3rd - Swag Pack"
- 标题区与图片间有 16px 间距

#### 区域 C — 项目描述
- 居中对齐的正文段落，字号 13-14px
- 描述内容简洁，3-5 句话
- 如有第二语言翻译，用稍浅的灰色显示在英文描述下方，之间空 12px
- 描述区上下各留 12-16px padding

#### 区域 D — 底栏（链接 + 时间地点）
- 左侧: 图标链接（GitHub 图标、网站/地球图标等），水平排列，间距 12px
- 右侧: 日期 + " · " + 城市名，灰色小字，右对齐
- 底栏与描述之间用细分割线隔开，或自然留白
- 底栏 padding: 12-16px
- 使用 `display: flex; justify-content: space-between; align-items: center`

### 4. 卡片样式
- 卡片无明显边框，使用轻微阴影或背景色区分
- 卡片之间等间距
- 所有卡片等高（使用 CSS Grid 的隐式等高，或对描述区域设 min-height）
- 卡片 hover 时可选加轻微上浮阴影

---

## 数据结构参考

每个 hackathon 条目的数据字段：

```typescript
interface HackathonEntry {
  title: string;            // "Mistral Worldwide Hackathon"
  image: string;            // 封面图 URL
  badge: "WINNER" | "FINALIST" | "HONORABLE" | null;
  award: string;            // "Won: 1st - $2000 Prize"
  description: string;      // 英文描述
  description_alt?: string; // 可选第二语言描述
  date: string;             // "Mar 2026"
  location: string;         // "Sydney"
  links: {
    github?: string;
    website?: string;
    devpost?: string;
  };
}
```

---

## 排序与数量
- 按时间倒序排列（最新的在前）
- 不限数量，可以有 6、9、12+ 张卡片
- 网格自动换行填充
```
