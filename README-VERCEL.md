# ShowDoc Vercel 部署指南

本项目已经适配 Vercel 部署。由于 Vercel 不支持 PHP，我们将项目改造为前端静态站点 + Node.js Serverless Functions 的架构。

## 部署步骤

### 1. 准备工作
确保你有 Vercel 账号并安装了 Vercel CLI：
```bash
npm i -g vercel
```

### 2. 本地构建测试
```bash
# 安装依赖
npm install

# 构建前端
npm run build
```

### 3. 部署到 Vercel
```bash
# 登录 Vercel
vercel login

# 部署项目
vercel --prod
```

## 架构说明

### 前端
- 使用原有的 Vue.js 前端代码
- 构建输出到 `Public` 目录
- API 端点改为 `/api/` 路径

### 后端
- 原 PHP 后端功能需要重新实现为 Node.js Serverless Functions
- API 路由位于 `api/index.js`
- 目前只提供基础框架，需要根据业务需求实现具体功能

## 注意事项

1. **数据库**: Vercel 不提供持久化存储，需要使用外部数据库服务（如 PlanetScale、Supabase 等）

2. **文件上传**: 需要使用云存储服务（如 AWS S3、阿里云 OSS 等）

3. **API 重构**: 原 PHP API 需要逐个重新实现为 Node.js 函数

4. **环境变量**: 在 Vercel 控制台配置必要的环境变量

## 下一步工作

1. 选择并配置数据库服务
2. 重新实现核心 API 功能
3. 配置文件存储服务
4. 测试和优化性能