<style>
.upload-file{
  display: flex;
  padding: 10px 20px;
  background-color: #ffffff;
  border: 2px dashed #f0f0f0;
  border-radius: 4px;
  margin: 20px 0;
  justify-content: space-between;
}

.upload-file .button{
  background: #393e46;
  color: #FFF;
  font-size: 0.877em;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  -moz-transition: all .2s;
  -o-transition: all .2s;
  -webkit-transition: all .2s;
  transition: all .2s;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile + label {
  font-size: 0.877em;
  color: #393e46;
  display: inline-block;
  cursor: pointer;
  padding: 10px 30px;
  background-color: #ffffff;
  border: 0;
  margin-right: 10px;
  border-radius: 3px;
  flex: 1 1 0%;
}

.inputfile:focus + label,
.inputfile + label:hover {
  color: #30343b;

}

</style>

<template>
  <div class="upload-file">
    <input type="file" name="uploadFile" class="inputfile" :id="`uploadFile${id}`" @change="changed($event)">
    <label :for="`uploadFile${id}`">{{message}}</label>
    <button v-show="file" type="button" class="button" @click="send()">{{buttonTitle}}</button>
  </div>
</template>

<script>

export default {
  name: "UploadFile",

  data(){
    return {
      file: {},
      id: 0
    }
  },

  props: {
    message: {
      type: String,
      required: false,
      default: "Choose a file..."
    },
    buttonTitle: {
      type: String,
      required: false,
      default: "Send"
    }
  },

  ready(){
    var inputsfiles = document.querySelectorAll(".inputfile")
    this.id = inputsfiles.length - 1
  },

  methods: {
    changed(e){
      this.file = e.target.files[0];
      var label = e.target.nextElementSibling
      var fileName = '';
      fileName = e.target.value.split( '\\' ).pop();
      if( fileName ){
        label.innerHTML = fileName;
      }
      else{
        label.innerHTML = labelVal;
      }
    },
    send(){
      this.$emit("send-file", this.file)
    }
  }
}
</script>
