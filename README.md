# Vue Upload Component [![npm](https://img.shields.io/npm/dt/vue-simple-upload-component.svg)]() [![npm](https://img.shields.io/npm/v/vue-simple-upload-component.svg)]() [![npm](https://img.shields.io/npm/l/vue-simple-upload-component.svg)]() [![GitHub stars](https://img.shields.io/github/stars/cezardasilva/vue-simple-upload-component.svg?style=social&label=Star)]()


> A simple upload component for Vue.js 2.x

# Instalation
```bash
npm install vue-simple-upload-component --save-dev
```

# Usage

## Drag and Drop mode

```Vue
<template>
  <div>
  <upload-file message="Choose a file or drag it here" :isDragDrop="true" @selected-file="uploadAction($event)" @remove-file="removeAction($event)"></upload-file>
  </div>
</template>

<script>
import UploadFile from 'vue-simple-upload-component'
export default {
	name: "MyComponent",
	components: {
		UploadFile
	}
}
</script>
```

## Without Drag and Drop

```Vue
<template>
  <div>
  <upload-file message="Choose a file..." :showButton="true" @selected-file="uploadAction($event)" @remove-file="removeAction($event)"></upload-file>
  </div>
</template>

<script>
import UploadFile from 'vue-simple-upload-component'
export default {
	name: "MyComponent",
	components: {
		UploadFile
	}
}
</script>
```
