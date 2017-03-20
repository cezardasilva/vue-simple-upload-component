<template>
	<div id="app">
		<upload-file :acceptedFormats="['application/pdf']" :isDragDrop="true"></upload-file>
	</div>
</template>

<script>

import UploadFile from '../src/components/UploadFile.vue'

export default {
	name: 'UploadApp',
	components: {
		UploadFile
	}
}
</script>
