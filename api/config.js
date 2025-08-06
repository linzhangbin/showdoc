// API 配置文件
export const config = {
  // 数据库配置 - 需要配置外部数据库
  database: {
    // 示例：使用 PlanetScale 或其他云数据库
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  
  // JWT 配置
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: '7d'
  },
  
  // 文件存储配置
  storage: {
    // 示例：使用 AWS S3 或阿里云 OSS
    provider: process.env.STORAGE_PROVIDER || 'local',
    bucket: process.env.STORAGE_BUCKET,
    region: process.env.STORAGE_REGION,
    accessKey: process.env.STORAGE_ACCESS_KEY,
    secretKey: process.env.STORAGE_SECRET_KEY,
  },
  
  // 应用配置
  app: {
    name: 'ShowDoc',
    version: '3.4.1',
    env: process.env.NODE_ENV || 'production'
  }
};