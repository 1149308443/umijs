# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 文件结构

```
├── dist                    // 打包出来的文件
├── mock                    // 存储 mock 文件，此目录下所有 js 和 ts 文件会被解析为 mock 文件。
├── public                  // 此目录下所有文件会被 copy 到输出路径。
├── package-lock.json   
├── package.json
├── README.md
├── src
|  └── pages                // 所有路由组件存放在这里。
|  ├── layouts/index.tsx    // 约定式路由时的全局布局文件。
|  ├── .umi                 // 临时文件目录，比如入口文件、路由等，都会被临时生成到这里
├── tsconfig.json
└── typings.d.ts
├── .umirc.ts               // 配置文件,包含umi内置功能和插件的配置
├── .env                    // 环境变量。 
├──  
├── 
```

### 使用疑惑
2. 路由权限的时候,useAuth获取登陆状态是什么鬼







