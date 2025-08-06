// Vercel Serverless Function 作为 API 代理
// 由于 Vercel 不支持 PHP，这里提供一个基础的 Node.js API 框架

export default async function handler(req, res) {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { url, method } = req;
  const path = url.replace('/api', '');

  try {
    // 这里需要根据原 PHP API 重新实现主要功能
    // 或者代理到其他服务器上的 PHP 后端
    
    if (path.startsWith('/home/index')) {
      // 首页数据
      return res.json({
        error_code: 0,
        data: {
          title: 'ShowDoc',
          description: '一个非常适合IT团队的API文档、技术文档工具'
        }
      });
    }

    if (path.startsWith('/user/login')) {
      // 用户登录 - 需要实现具体逻辑
      return res.json({
        error_code: 0,
        data: {
          message: '登录功能需要重新实现'
        }
      });
    }

    // 默认响应
    res.status(404).json({
      error_code: 404,
      data: {
        message: 'API 端点未找到，需要重新实现 PHP 后端功能'
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error_code: 500,
      data: {
        message: '服务器内部错误'
      }
    });
  }
}