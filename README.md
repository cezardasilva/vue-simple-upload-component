# Vue Upload Component [![npm](https://img.shields.io/npm/dt/vue-simple-upload-component.svg)]() [![npm](https://img.shields.io/npm/v/vue-simple-upload-component.svg)]() [![npm](https://img.shields.io/npm/l/vue-simple-upload-component.svg)]() [![GitHub stars](https://img.shields.io/github/stars/cezardasilva/vue-simple-upload-component.svg?style=social&label=Star)]()


> A simple upload component for Vue.js 2.x


## Instalation
```bash
npm install vue-simple-upload-component --save-dev
```

## Usage example

```Vue
<template>
  <div>
  	<upload-file @changed-files="uploadAction($event)"></upload-file>
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

## Props

Properties 		| Description
----------------|----------------
*message*   		| **Default:** ```Choose a file...```<br>**Required:** *false*<br> It's used to indicate the upload zone.
*dragOverMessage* | **Default:** ```Drag it here```<br>**Required:** *false*<br> Used when dragover event is dispatched
*uploadedMessage* | **Default:** ```empty```<br>**Required:** *false*<br> Used to show a message when upload a file
*showButton*		| **Default:** ```false ```<br>**Required:** *false*<br> Show send button.
*buttonTitle*		| **Default:** ``` Send ```<br>**Required:** *false*<br> Send button title/value
*cancelButton*	| **Default:** ```Cancel```<br>**Required:** *false*<br> File cancel button
*itemIndex*		|**Default:** ```0```<br>**Required:** *false*<br> Component index for multiples upload components
*isDragDrop*		| **Default:** ```false```<br>**Required:** *false*<br> Enable/Disable Drag&Drop.
*acceptedFormats*	| **Default:** ```[]```<br>**Required:** *false*<br> Accepted MIME Types.

## Events


| Event 			| Description|
|----------------|----------------|
| send-file  		| Called if drag&drop is inactive and user pressed the 'Send' button		  |
| changed-files	| When files list's changed, added or removed a file. |
| selected-file	| When a file is added (**REMOVED**)	|
|remove-file		| Called when the actual file is removed	(**REMOVED**)	 	|

## Change Log

### v1.0.0

> Added support to multiple files
> Changed 'add' and 'remove' file methods.
