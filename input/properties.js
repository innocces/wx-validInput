export default {
  flex:{ // 弹性布局方式
    type:String,
    value:'flex-start'
  },
  placeHolder:{
    type:String, // 提示语
    value:'请输入您的数据'
  },
  validType:{
    type:String, // 验证类型
    value:''
  },
  type:{ // 输入框类型
    type:String,
    value:'text'
  },
  validTime:{
    type:String,
    value: 'blur'
  },
  validToast:{ // 验证错误提示
    type:String,
    value:''
  },
  initValue:{ // 初始值
    type:String,
    value:''
  },
  maxLength:{ // 最大长度
    type:Number,
    value:140
  },
  adjustPosition:{  // 是否上推页面
    type:Boolean,
    value:true
  },
  confirmType:{  // 确认按钮类型
    type:String,
    value: 'done'
  },
  focus:{ // 是否自动聚焦
    type:Boolean,
    value:false
  },
  placeholderClass:{ // 提示信息样式
    type:String,
    value:'input-placeholder'
  },
  errorBorder:{ // 验证错误时是否进行border边框展示(红色)
    type:Boolean,
    value:true
  },
  password:{ // 是否为密码类型
    type:Boolean,
    value:false
  },
  disabled:{ // 是否禁用
    type:Boolean,
    value:false
  }
};