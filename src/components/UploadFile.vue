<style>
.upload-file{
  display: flex;
  align-items: center;
}

.upload-file .button{
	background: #00adb5;
	color: #FFF;
	font-size: 0.877em;
	border: none;
	border-radius: 30px;
	text-transform: uppercase;
	padding: 15px 30px;
	margin: auto;
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

  & + label {
    font-size: 1em;
    color: #d9534f;
    display: inline-block;
    cursor: pointer; /* "hand" cursor */
  }
}

.inputfile:focus + label,
.inputfile + label:hover {
  color: darken(#d9534f, 15%);
}

</style>

<template>
  <div class="upload-file">
    <input type="file" name="uploadFile" class="inputfile" :id="`uploadFile`" @change="changed($event)">
    <label :for="`uploadFile`">{{message}}</label>
    <button v-show="file" type="button" class="button" @click="send()">{{buttonTitle}}</button>
  </div>
</template>

<script>

export default {
  name: "UploadFile",

  data(){
    return {
      file: {}
    }
  },

  props: {
    message: {
      type: Text,
      required: false,
      default: "Choose a file..."
    },
    buttonTitle: {
      type: Text,
      required: false,
      default: "Send"
    }
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
