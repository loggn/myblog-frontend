---
title: '搭建 docker 开发环境'
id: 1
date: '2025-08-21'
tags: ['docker', '开发环境']
---

# 搭建 docker 开发环境

## 我喜欢的文件结构

```
├── .devcontainer/
│   ├── devcontainer.json
│   └── Dockerfile
└── docker-compose.yml
```

- Dockerfile : 定义开发环境的镜像构建规则（基础镜像、依赖安装、代码挂载等）  
  eg:

```
FROM golang

# 安装常用工具
RUN apt-get update && apt-get install -y \
  bash curl git \
  && rm -rf /var/lib/apt/lists/*

```

- devcontainer.json : 配置 VSCode 的 Remote-Containers 扩展，连接容器开发环境
  eg:

```
{
  "name": "User System Dev Container",
  "dockerComposeFile": "../docker-compose.yml",
  "service": "app",
  "workspaceFolder": "/workspace",
  "extensions": [
    "golang.Go",
    "ms-azuretools.vscode-docker"
  ],
  "remoteEnv": {
    "GO111MODULE": "on"
  },
  "postCreateCommand": "go mod tidy"
}
```

- docker-compose.yml : 定义容器服务、端口映射、卷挂载等，简化容器启动和管理
  eg：

```
version: '3.9'
services:
  dev_env:  # 服务名称
    build: .devcontainer/Dockerfile  # 基于当前目录的 Dockerfile 构建镜像
    volumes:
      - .:/workspace  # 将本地代码挂载到容器内的 /workspace
    ports:
      - "8000:8000"    # 按需映射端口（如 Web 服务调试）
    environment:
      - TZ=Asia/Shanghai  # 设置时区
    stdin_open: true     # 允许交互式输入
    tty: true            # 分配伪终端
```
