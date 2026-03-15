---
title: Lazyvim编辑器
published: 2025-08-16
tags: [share, test]
description: 记录Lazyvim编辑器相关配置
draft: false
---

- 官方文档：`https://lazyvim-ambitious-devs.phillips.codes/`

## 安装

- 安装neovim
  - 直接看发布的[releases](https://github.com/neovim/neovim/releases)
  - linux版本使用命令行直接安装后不是最新版，如`apt install neovim`安装的是0.9.5版本的，而最新版至少是0.11.x
  - 附：neovim[官网](https://neovim.io/doc/install/)
- 使用git克隆lazyvim模板或其他的lazyvim配置文件
- 打开lazyvim：`nvim .`

## 部分基础命令

- 替换（整个缓冲区中所有 old替换为 new）：`:%s/old/new/g`
- 替换前确认（整个缓冲区）：`:%s/old/new/gc`
- 查找当前缓冲区：`/`
- 多行编辑：`ctrl + v` 切换到`V-Block模式`， 按住`j k l j`中一个进行选择， 切换到大写后按住`A`或者`I`输入内容，输入内容时可以切换大小写，输入内容完毕后，保证大写后按`ESC`
- 代码上下行切换：`alt + h/j`wh
- 复制整个缓冲区：`:%y`
- 展开折叠代码块：`zc`、`zo`、`za`
- 重载插件：`:Lazy reload`
- 代码跳转到实现/定义和返回： `gd` `ctrl + o`
- 查看引用：`gr`
- 将光标所在行和下一行连为一行：`J`
- 复制光标所在单词：`yiw`
- 复制光标所在单词到词尾：`yw`
- 删除光标所在单词：`diw`
- 打开或关闭终端：`<Space> ft`

## 配置eslint

- 查看当前项目或缓冲区所使用的静态代码分析工具：`:LspInfo`
- 查看当前项目或缓冲区格式化插件：`:ConformInfo`

## TO DO插件

- 查看：`:Trouble`、`:TodoQuickFix`
- 关闭面板：q

## 配置自定义代码片段

- lazyvim中默认集成了各大语言的预定义代码片段，由`friendly-snippets.nvim`实现，但也需要自定义一些符合自己习惯的代码片段，自定义代码片段主要通过LuaSnip插件实现

### 步骤：

- 打开配置文件夹nvim，在nvim文件夹下创建snippets文件夹
- 定义代码片段文件
  - 有Json和Lua两种文件类型
  - 这里的son文件类型，可以和vscode通用，其中文件名为文件格式的名称，如`javascript.json`或`typescript.json`，可以在Lazyvim中使用`:echo &filetype`查看当前文件的类型，另外tsx格式的文件是`typescriptreact.json`
  - 自定义代码片段，如
  ```json
  {
    "Print to console": {
      "prefix": "log",
      "body": "console.log('$1', $2);",
      "description": "Log to console with label"
    },
    "React Function Component": {
      "prefix": "rfc",
      "body": [
        "const ${1:ComponentName} = () => {",
        "  return (",
        "    <div>",
        "      ${0}",
        "    </div>",
        "  );",
        "};",
        "",
        "export default ${1:ComponentName};"
      ],
      "description": "Create a React functional component"
    }
  }
  ```
- 配置LuaSnip加载自定义片段：
  - LazyVim默认已配置LuaSnip，但需要确保加载自定义片段目录。检查或创建 `~/.config/nvim/lua/plugins/luasnip.lua`：
  ```lua
  return {
    {
      "L3MON4D3/LuaSnip",
      config = function()
        require("luasnip").config.setup({
          -- 启用片段历史记录
          history = true,
          -- 删除片段时更新动态片段
          update_events = "TextChanged,TextChangedI",
        })

        -- 加载friendly-snippets片段库
        require("luasnip.loaders.from_vscode").lazy_load()

        -- 加载自定义片段
        require("luasnip.loaders.from_vscode").lazy_load({
          -- 下面的vim.fn.stdpath("config")，再不同系统对应不同的路径：
          -- Linux/macOS: ~/.config/nvim
          -- Windows: ~/AppData/Local/nvim
          paths = { vim.fn.stdpath("config") .. "/snippets" },
          override_priority = 1000  -- 确保自定义片段优先级更高
        })
      end,
    }
  }
  ```
- 验证自定义片段，测试通过后，再添加更多自定义片段

## AI相关插件

- `avante.nvim`，截止2025-12-4，处于快速迭代阶段

