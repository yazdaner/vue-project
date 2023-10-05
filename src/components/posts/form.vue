<script setup>

import { reactive } from 'vue';

const props = defineProps({
    loadingBtn : Object,
    btnText : String,
    postData : Object,
});


const emit = defineEmits({
    formData: Object
});

const form = reactive({
    title: "",
    body: "",

    titleError: "",
    bodyError: "",
});

if(props.postData !== undefined){
    form.title = props.postData.title,
    form.body = props.postData.body
}

function validate() {
    if (form.title == '') {
        form.titleError = 'title is required'
    } else {
        form.titleError = ''
    }
    if (form.body == '') {
        form.bodyError = 'body is required'
    } else {
        form.bodyError = ''
    }
    if (form.title != '' && form.body != '') {
        props.loadingBtn = true;
        emit('formData',form);
    }
}

</script>

<template>
    <form @submit.prevent="validate()">
        <div class="col-md-4">
            <div class="mb-3">
                <label for="title" class="form-label">title</label>
                <input name="title" type="text" class="form-control" id="title" v-model.lazy="form.title">
                <div class="text-danger">
                    {{ form.titleError }}
                </div>
            </div>
            <div class="mb-3">
                <label for="body" class="form-label">body</label>
                <textarea class="form-control" id="body" name="body" rows="5" v-model.lazy="form.body"></textarea>
                <div class="text-danger">
                    {{ form.bodyError }}
                </div>
            </div>
            <div class="mb-3">
                <button class="btn btn-dark" type="submit" :disabled="props.loadingBtn">
                    <div v-if="props.loadingBtn" class="spinner-border spinner-border-sm"></div>
                    {{btnText}}
                </button>
            </div>
        </div>
    </form>
</template>

<style scoped></style>
