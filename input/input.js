let properties = require('./properties').default;
let data = require('./data').default;
Component({
  options: {
    multipleSlots: true
  },
  properties,
  data,
  methods: {
    checkFunction(handler){
      return Object.prototype.toString.call(handler) == "[Object,Object]";
    },
    input(event){
      this.change(event);
      this.triggerEvent('input', event, event); 
    },
    focus(event){
      this.triggerEvent('focus', event, event); 
    },
    change(event){
      this.triggerEvent('change', event, event); 
    },
    blur(event){
      this.triggerEvent('blur', event, event); 
    },
    confirm(event){
      this.triggerEvent('confirm', event, event); 
    }
  },
  externalClasses:['valid_input_selfclass']
})