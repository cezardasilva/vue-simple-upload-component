<template>
	<div class="upload-demo">

		<upload-file message="Choose a file or drag it here" :isDragDrop="true" @selected-file="uploadAction($event)" @remove-file="removeAction($event)"></upload-file>

		<div class="uploaded-file" v-if="file">
			<code>
				{{file.name}}<br>
				{{file.size}}<br>
				{{file.type}}
			</code>
		</div>
	</div>
</template>

<script>

import UploadFile from './components/UploadFile.vue'

export default {
	name: "UploadDemo",
	components: {
		UploadFile
	},
	data(){
		return {
			file: null
		}
	},

	methods: {
		uploadAction(e){
			this.file = Object.assign(e)
		},
		removeAction(){
			this.file = null
		}
	}
}
</script>
