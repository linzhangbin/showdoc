#!/bin/bash

echo "🚀 开始部署 ShowDoc 到 Vercel..."

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI 未安装，正在安装..."
    npm install -g vercel
fi

# 安装依赖
echo "📦 安装项目依赖..."
npm install

# 构建前端
echo "🔨 构建前端项目..."
npm run build

# 检查构建是否成功
if [ ! -f "Public/index.html" ]; then
    echo "❌ 构建失败，未找到 Public/index.html"
    exit 1
fi

echo "✅ 构建成功！"

# 部署到 Vercel
echo "🌐 部署到 Vercel..."
vercel --prod

echo "🎉 部署完成！"