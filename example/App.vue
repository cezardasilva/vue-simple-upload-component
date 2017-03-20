<template>
	<div id="app">
		<upload-file></upload-file>
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
