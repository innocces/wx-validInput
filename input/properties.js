export default {
  flex:{
    type:String,
    value:'flex-start'
  },
  placeHolder:{
    type:String,
    value:'请输入您的数据'
  },
  validType:{
    type:String,
    value:'text'
  },
  type:{
    type:String,
    value:'text'
  },
  validToast:{
    type:String,
    value:''
  },
  initValue:{
    type:String,
    value:''
  },
  maxLength:{
    type:Number,
    value:140
  },
  adjustPosition:{
    type:Boolean,
    value:true
  },
  confirmType:{
    type:String,
    value: 'done'
  },
  focus:{
    type:Boolean,
    value:false
  },
  placeholderClass:{
    type:String,
    value:'input-placeholder'
  },
  bindinput:{
    type: Function,
    value:void(0)
  },
  bindfocus:{
    type: Function,
    value: void(0)
  },
  bindblur:{
    type: Function,
    value: void(0)
  },
  bindconfirm:{
    type:Function,
    value: void(0)
  }
};