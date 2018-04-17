let properties = require('./properties').default;
let data = require('./data').default;
console.log(properties)
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
        let {bindinput} = this.data; 
        console.log(event);
        console.log(bindinput,this.data)
        this.checkFunction(bindinput) ? bindinput(event) : void(0);
    }
  },
  externalClasses:['valid_input_selfclass']
})