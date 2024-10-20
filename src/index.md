---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Docs"
  text: ""
  tagline: 一生如牛不得闲，得闲已与山共眠 <br> 春风若有怜花意，可否许我再少年

features:
  - icon: ✍️
    title: Docker
    linkText: 开发中...
    link: https://workerpath.org
    details: Docker Docker Docker Docker

  - icon: ✍️
    title: CloudFlare
    linkText: 开发中...
    link: https://workerpath.org
    details: CloudFlare CloudFlare CloudFlare

  - icon: ⚡️
    title: Koa
    linkText: 开发中...
    link: https://workerpath.org
    details: Koa Koa Koa

  - icon: 🧾
    title: Mysql
    linkText: 开发中...
    link: https://workerpath.org
    details: Mysql Mysql Mysql Mysql
---

# TODO

<br>

::: timeline TODO
- ⬜ 管理后台搭建
- ⬜ 赔偿金计算模块
- ⬜ 离职辅导模块流程
- ⬜ 调研文件存储到R2，配置一个文件存储workers
- ⬜ 调研 workers中 调用 df-lib 生成 PDF 并存储到 R2
- ⬜ 网关鉴权考虑加入JWT，目前'Referer', 'Origin' 只能做辅助鉴权，可被伪造
- ⬜ 文书代写模块设计，配置模板与生成规则
- ⬜ 搭建邮件服务workers
- ⬜ 此外考虑密钥定期轮换，比如登录一次，刷新token一次，最好的方法是定期自动轮换，但是需要设计一个如nginx的机制，在启用新的密钥前确保已处理完就密钥的请求
- ⬜ 对每个接口都进行RSA非对称加密，并加入时间戳，把整个params加时间戳后按照字典顺序排序参数进行加密，服务端进行私钥解密，并对比时间戳是否超过30秒，超过返回401
- ⬜ 考虑生成文书的下载方式，目前计划单独设立一个workers来生成PDF存到R2，然后通过手机号验证下载三次后删除
- ⬜ 每个页面的frontmatter都需要设置一个title，这个title作为创建GitHub讨论组的标题，需要保证title唯一性
  :::

::: timeline 2024-08-22
- ✅ 完成Turnstile小部件集成与API验证
  :::
  ::: timeline 2024-08-21
- ✅ 完成短信验证码发送与KV验证
  :::
  ::: timeline 2024-08-20
- ✅ 模板添加与分页列表接口
- ✅ 管理员登录接口及鉴权
- ✅ JWT鉴权：会话IP不是登录IP返回401，防止Token盗窃
  :::

::: timeline 2024-08-19
- ✅ 网关接口速率限制 3 / 10
- ✅ 线上客户端接口请求验证
  :::
  ::: timeline 2024-08-10
- ✅ 业务workers关闭对外访问，通过 ```Bind``` 与API网关绑定进行请求转发
- ✅ 搭建API网关做接口转发，'Referer', 'Origin' 访问鉴权
- ✅ 里程碑！完成cloudflare的worker搭建
  :::


**备用地址1:** <https://workerpath.org>

**备用地址2:** <https://workerpath.org>

**备用地址3:** <https://workerpath.org>

**备用地址4:** <https://workerpath.org>

给图片添加链接
[![沙漠中的岩石图片](https://picsum.photos/600/300 "Shiprock")](https://workerpath.org)


~~世界是平坦的。~~ 我们现在~~知道世界是圆的。~~
