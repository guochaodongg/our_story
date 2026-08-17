# 💕 我们的故事 · Our Story

一个用 GitHub Pages 托管的纪念网页，用来记录和你在一起的每一个瞬间。

首页有一颗会跳动的大爱心（点击它会有爱心爆发的特效），下面有四个分类可以切换查看：

- 📍 **一起去过的地方** —— 走过的路、看过的风景
- 🍜 **一起吃过的美食** —— 一起尝过的味道
- 🎈 **一起做过的事** —— 平凡却闪光的小事
- 🌟 **未来的规划** —— 想和你一起实现的以后

## 🌐 在线访问

开启 GitHub Pages 后，访问地址为：

```
https://<你的GitHub用户名>.github.io/our_story/
```

> 把 `<你的GitHub用户名>` 替换成你自己的 GitHub 账号名即可。

## ✏️ 怎么修改内容

你只需要编辑一个文件：`js/data.js`。

里面每个分类都是一个列表，照着示例改文字就行，例如：

```js
{ name: "西湖", date: "2023.05", desc: "断桥边牵手散步", emoji: "🏞️" }
```

- 想加照片：放一项 `img: "photos/west-lake.jpg"`，并把图片放进 `photos/` 文件夹，网页会自动显示照片（没有照片则显示 emoji）。
- 「未来的规划」用 `when` 表示时间：`{ name: "求婚", when: "准备好了", desc: "..." }`。

改完保存、推送到 GitHub，网页会自动更新。

## 🚀 开启 GitHub Pages（首次）

1. 打开仓库 `our_story` 的 **Settings → Pages**。
2. **Source** 选择你的默认分支（通常是 `main`），目录选 `/(root)`。
3. 点击 **Save**，等一两分钟，再用上面的地址访问即可。

## 📁 文件结构

```
index.html       页面结构
css/style.css    样式与动画
js/data.js       内容数据（你主要改这里）
js/app.js        渲染与交互逻辑
```

---

Made with ❤ for you.
