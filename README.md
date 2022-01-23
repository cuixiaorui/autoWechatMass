# autoWechatMass

使用 robotjs 实现的微信群发功能

## 使用

1. 打开 src/meta.json 配置打开 wechat 的快捷键 & 在 weChat 中搜索的快捷键
2. 在 rooms.json 里面配置要发的群名称
   - 允许配置多个 group
   - 当执行脚本的时候可以选择发送的 group
3. 执行 `pnpm run dev`
   - 或者安装到全局,在当前项目路径下执行 `npm link`
   - 之后只需要执行 `awm` 即可

## 目前存在的问题

1. 如果通过 command+f 搜出来的结果是不正确的话 ，那么就会出现误操作的问题
   - 我们默认会取第一个搜索出来的结果
   - 坐等一个 pr：vx 如何精确的搜索群名
2. 执行此脚本的时候，不可以有其他的操作的

## TODO

1. open weChat 的快捷键需要用户定义
2. mac 和 windows 用户操作的兼容
