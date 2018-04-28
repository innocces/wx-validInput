let properties = require('./properties').default;
let data = require('./data').default;
let validate = require('./validate').default;

Component({
  options: {
    multipleSlots: true
  },
  properties,
  data,
  // 当组件节点准备好时，进行初始vendor
  ready(){
    let { initValue } = this.data;
    initValue ? this.setData({value:initValue}) : void(0);
  },
  methods: {
    checkFunction(handler){
      return Object.prototype.toString.call(handler) == "[Object,Object]";
    },
    input(event){
      let { value } = event.detail;
      this.change(event);
      this.triggerEvent('input', event, event);
      this.setData({value:validate.trims(value,'g')}) 
      this.timeToValid('input',event);

    },
    focus(event){
      this.triggerEvent('focus', event, event); 
      this.timeToValid('focus',event);
    },
    change(event){
      this.triggerEvent('change', event, event); 
      this.timeToValid('change',event);
    },
    blur(event){
      this.triggerEvent('blur', event, event); 
      this.timeToValid('blur',event);
    },
    confirm(event){
      this.triggerEvent('confirm', event, event); 
      this.timeToValid('confirm',event);
    },
    // 校验函数
    valid(event){
      let { type , detail , currentTarget} = event;

      // 解析value和自定义验证时间进行相应验证类型的验证
      let { value } = detail,  
          /* 这里解释一下为什么不从this.data上结构value,因为在输入过程中value并不会双向响应 */
          { validtype, validtoast } = currentTarget.dataset;
      /*
       * 验证过程逻辑分析
       * 1. 是否存在验证事件类型
       * 2. 是否存在验证类型
       * 3. 是否存在value
       * 4. 是否toast提示 
       */
      var validEventArray = ['input','change','blur'];
      if(validEventArray.includes(type) && validate.hasOwnProperty(validtype)){
        console.log(this.data)
        var reg = validate[validtype];
        if(!reg(value)){
          this.showToast(validtype,validtoast);
        }else{
          this.setData({error: false})
        } 
      }
    },
    showToast(validtype,validtoast=''){
      /* 这里需要整合提示,如果你每次都输入提示的话可以将此处的对象删除 */
      let prefix = '您输入的',
          endfix = '格式不正确';
      let toastmsg = {
        'tel': '手机号',
        'bankCard': '银行卡号',
        'idCard': '身份证号',
        'phone': '座机号码',
        'date' : '时间',
        'email': '邮箱地址',
        'QQ': 'QQ',
        'name': '姓名',
        'ecode': '邮编'
      };
      validtoast = validtoast ? validtoast : `${prefix}${toastmsg[validtype]}${endfix}`; 
      let { errorBorder } = this.data;
      if(errorBorder){this.setData({error: true});}
      wx.showToast({mask:true,title:validtoast,icon:'none'})
    },
     /* 启用那个函数进行错误处理 */
     timeToValid(type,event){
       let {validTime} = this.data;
       type == validTime ? this.valid(event) : void(0);
       
     }
  },
  externalClasses:['valid_input_selfclass']
})