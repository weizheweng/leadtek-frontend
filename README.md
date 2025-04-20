# SystemMonitor

SystemMonitor 是一個用於監控系統資源使用率的應用程式，可以即時顯示 CPU、磁碟和記憶體的使用情況。

## 系統需求

- Node.js 20 或更高版本
- pnpm 9 或更高版本

## 安裝步驟

1. 安裝 pnpm 9.0.0：
   ```bash
   npm install -g pnpm@9
   ```
2. 安裝專案依賴：
   ```bash
   pnpm install
   ```

## 功能特點

- 即時監控 CPU 使用率
- 顯示磁碟使用情況
- 監控記憶體使用率
- 直觀的圖形化介面

## 開發

```bash
# 啟動開發伺服器
pnpm dev

# 建置專案
pnpm build

# 執行 lint 檢查
pnpm lint
```

## 環境變數

專案使用以下環境變數：

- `VITE_API_URL`: API 服務的基礎 URL
- `VITE_APP_TITLE`: 應用程式標題

## 專案結構

```
src/
├── pages/         # 頁面組件
├── hooks/         # 自定義 React Hooks
├── utils/         # 工具函數
└── types/         # TypeScript 類型定義
```
