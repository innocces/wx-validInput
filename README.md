# wx-validInput
微信小程序校验输入框组件

## 主要使用方法
> 将validInput组件下载下来,在要使用的页面的json文件中加入下面代码

```json
  "usingComponents": {
    "validInput": "/你的路径/input/input"
  }
```

> 在对应的wxml页面

```html
    <validInput
            place-holder="请输入您的身份证号"
            type="idcard"
            init-value="123"
            valid-type="idCard"
            max-length="18"
            bindinput="input" 
            bindchange="change" 
            bindblur="blur" 
            bindfocus="focus"
            >
</validInput> 
```

## 校验类型
|    校验类型    |    参数名    |
|:-------:|:-------:|
|   姓名   |    name     |
|   手机号   |    tel     |
|   银行卡号   |    bankCard     |
|   身份证号   |    idCard     |
|   QQ  |    QQ   |
|   日期   |    date     |
|   email   |   email    |
|   邮编   |    ecode   |


## props(这里只列出和input组件中不同的参数，其余未提出的input属性可直接使用)
|    props    |    参数名    |       参数类型       |      默认值      |
|:-------:|:-------:|:-------:|:-------:|
|   提示信息   |    place-holder     |     String    |   请输入您的数据   |
|   验证类型   |    valid-type     |     String    |      |
|   验证时机  |    valid-time     |     String    |   blur   |
|   验证错误提示  |    valid-toast     |     String    |      |
|   初始值   |   init-value   |     String    |      |
|   最大长度   |   max-length     |     Number    |   140  |
|   错误红色阴影提示   |    error-border   |     Boolean    |   true   |

