@echo off
echo 🚀 开始部署 ShowDoc 到 Vercel...

REM 检查是否安装了 Vercel CLI
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI 未安装，正在安装...
    npm install -g vercel
)

REM 安装依赖
echo 📦 安装项目依赖...
npm install

REM 构建前端
echo 🔨 构建前端项目...
npm run build

REM 检查构建是否成功
if not exist "Public\index.html" (
    echo ❌ 构建失败，未找到 Public\index.html
    exit /b 1
)

echo ✅ 构建成功！

REM 部署到 Vercel
echo 🌐 部署到 Vercel...
vercel --prod

echo 🎉 部署完成！
pause