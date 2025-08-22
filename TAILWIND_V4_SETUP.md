# Tailwind CSS v4 配置说明

## 项目配置

这个项目已经正确配置了 Tailwind CSS v4。以下是配置文件的说明：

### 1. 主要配置文件

#### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
```

#### `postcss.config.mjs`
```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

#### `src/app/globals.css`
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans), Arial, Helvetica, sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
}
```

### 2. 依赖包

在 `package.json` 中确保有以下依赖：

```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.11"
  }
}
```

## Tailwind CSS v4 的新特性

### 主要变化

1. **移除了 `init` 命令** - 不再需要运行 `npx tailwindcss init -p`
2. **新的 CSS 导入方式** - 使用 `@import "tailwindcss";` 而不是 `@tailwind` 指令
3. **新的主题配置** - 使用 `@theme` 块来定义自定义主题
4. **PostCSS 插件** - 使用 `@tailwindcss/postcss` 插件

### 自定义颜色和字体

在 `globals.css` 中使用 `@theme` 块来定义自定义值：

```css
@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans), Arial, Helvetica, sans-serif;
  --font-mono: var(--font-geist-mono), monospace;
}
```

### 使用自定义颜色

在组件中使用自定义颜色：

```jsx
<div className="bg-background text-foreground">
  <h1 className="text-4xl font-bold">Hello World</h1>
</div>
```

## 运行项目

```bash
npm run dev
```

访问 http://localhost:3000 查看效果。

## 注意事项

- Tailwind CSS v4 仍处于 alpha 阶段，可能会有变化
- 确保使用正确的 PostCSS 插件版本
- 自定义主题值需要在 `@theme` 块中定义
- 支持深色模式自动切换 