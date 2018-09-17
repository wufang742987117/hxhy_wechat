<!-- 上传图片 组件 -->
<template>
  <div class="vue-uploader">
    <div class="file-list">
      <section v-for="(file, index) of files" class="file-item draggable-item">
        <img :src="file.src"  ondragstart="return false;">
        <span class="file-remove" @click="remove(index)" style="float:none">+</span>
      </section>
      <section v-if="status == 'ready'" class="file-item">
        <div @click="add" class="add">
          <span style="float:none">+</span>
        </div>
      </section>
    </div>
    <section v-if="files.length != 0" class="upload-func">
      <div class="progress-bar">
        <section v-if="uploading" :width="(percent * 100) + '%'">{{(percent * 100) + '%'}}</section>
      </div>
    </section>
    <input type="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple">
  </div>
</template>

<script>

  import { REST } from "api";

  import { Toast } from 'mint-ui'

  export default {
    props: ["src","temp"],
    data() {
      return {
        status: 'ready', // 状态
        files: [],
        point: {},
        uploading: false,
        percent: 0,
        formData:{
          idCardFrontUrl:'',
          idCardBackUrl:'',
          threeCardUrl:'',
          contractUrl:[],
          contract2Url:[]
        }
      }
    },
    methods: {
      // 添加图片操作
      add() {
        this.$refs.file.click();
      },
      // 完成操作 还原状态
      finished() {
        this.files = []
        this.status = 'ready'
      },
      // 上传图片列表中的某个图片
      remove(index) {
        this.files.splice(index, 1);
        if(this.temp=="idCardFrontUrl") {
          this.formData.idCardFrontUrl='';
          this.status = 'ready';
          this.$emit('idCardFrontUrl',{type:1,content:this.formData.idCardFrontUrl})
        }
        else if(this.temp=="idCardBackUrl") {
          this.formData.idCardBackUrl='';
          this.status = 'ready'
          this.$emit('idCardBackUrl',{type:2,content:this.formData.idCardBackUrl})
        }else if(this.temp=="threeCardUrl") {
          this.formData.threeCardUrl='';
          this.status = 'ready'
          this.$emit('threeCardUrl',{type:3,content:this.formData.threeCardUrl})
        }
        else if(this.temp=="contractUrl") {
          console.log(index);
          delete this.formData.contractUrl[index];
          // this.formData.contractUrl = this.formData.contractUrl.splice(index,1);
          // _this.formData.contractUrl.push(JSON.parse(xhr.response).data.src);
          for(var i=0; i<this.formData.contractUrl.length; i++){
            if(this.formData.contractUrl[i] == "" || typeof(this.formData.contractUrl[i]) == "undefined"){
              this.formData.contractUrl.splice(i,1);
              i--;
            }
          }
          this.$emit('contractUrl',{type:4,content:this.formData.contractUrl})
        }
        else if(this.temp=="contract2Url") {
          delete this.formData.contract2Url[index];
          for(var i=0; i<this.formData.contract2Url.length; i++){
            if(this.formData.contract2Url[i] == "" || typeof(this.formData.contract2Url[i]) == "undefined"){
              this.formData.contract2Url.splice(i,1);
              i--;
            }
          }
          // this.formData.contract2Url = this.formData.contract2Url.splice(index,1);
          this.$emit('contract2Url',{type:5,content:this.formData.contract2Url})
        }
      },
      // 唤醒相机/图库
      fileChanged() {
        const list = this.$refs.file.files
        if(this.temp=="idCardFrontUrl"||this.temp=="idCardBackUrl"||this.temp=="threeCardUrl") {
          if (list.length >1) {
            Toast('只能上传一张图片');
            _this.status = 'finished'
            return;
          }
        }
        for (let i = 0; i < list.length; i++) {
          if (!this.isContain(list[i])) {
            const item = {
              name: 'file',
              size: list[i].size,
              file: list[i]
            }
            // 转换图片格式
            this.html5Reader(list[i], item)
            this.files.push(item)

            // console.log(3333333333333333333333333,this.files[0].file.size);
            const formData = new FormData();
            this.files.forEach((item) => {
              formData.append(item.name, item.file)
            })



            const xhr = new XMLHttpRequest()
            xhr.upload.addEventListener('progress', this.uploadProgress, false)
            xhr.open('POST', this.src, true)
            // this.uploading = true
            xhr.send(formData)
            let _this = this;
            xhr.onload = () => {
              // this.uploading = false
              if (xhr.status === 200 || xhr.status === 304) {
                console.log(11111111112222,JSON.parse(xhr.response));
                if(this.temp=="idCardFrontUrl") {
                  // if( _this.formData.idCardFrontUrl.length>1) {
                  //   alert('只能上传一张照片');
                  // }
                  _this.formData.idCardFrontUrl=JSON.parse(xhr.response).data.src;
                  _this.status = 'finished'
                  this.$emit('idCardFrontUrl',{type:1,content:_this.formData.idCardFrontUrl})
                }
                else if(this.temp=="idCardBackUrl") {
                  _this.formData.idCardBackUrl=JSON.parse(xhr.response).data.src;
                  _this.status = 'finished'
                  this.$emit('idCardBackUrl',{type:2,content:_this.formData.idCardBackUrl})
                }else if(this.temp=="threeCardUrl") {
                  _this.formData.threeCardUrl=JSON.parse(xhr.response).data.src;
                  _this.status = 'finished'
                  this.$emit('threeCardUrl',{type:3,content:_this.formData.threeCardUrl})
                }
                else if(this.temp=="contractUrl") {
                  _this.formData.contractUrl.push(JSON.parse(xhr.response).data.src);
                  this.$emit('contractUrl',{type:4,content:_this.formData.contractUrl})

                }
                else if(this.temp=="contract2Url") {
                  _this.formData.contract2Url.push(JSON.parse(xhr.response).data.src);
                  this.$emit('contract2Url',{type:5,content:_this.formData.contract2Url})
                }
                // this.status = 'finished'
                console.log('upload success!')
              } else {
                console.log(`error：error code ${xhr.status}`)
              }
            }
          }
        }
        this.$refs.file.value = ''
      },
      //将图片文件转成BASE64格式
      html5Reader(file, item){
        const reader = new FileReader()
        reader.onload = (e) => {
          this.$set(item, 'src', e.target.result)
        }
        reader.readAsDataURL(file)
      },
      // 判断是否包含
      isContain(file) {
        this.files.forEach((item) => {
          if(item.name === file.name && item.size === file.size) {
            return true
          }
        })
        return false
      },
      // 上传进度
      uploadProgress(evt) {
        const component = this
        if (evt.lengthComputable) {
          const percentComplete = Math.round((evt.loaded * 100) / evt.total)
          component.percent = percentComplete / 100
        } else {
          console.warn('upload progress unable to compute')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .vue-uploader {
    border: 1px solid #e5e5e5;
    .file-list {
      padding: 10px 0px;
      &:after {
        content:'';
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        font-size: 0;
      }
      .file-item {
        float: left;
        position: relative;
        width: 100px;
        text-align: center;
        img{
          width: 80px;
          height: 80px;
          border: 1px solid #ececec;
        }
        .file-remove {
          position: absolute;
          right: 12px;
          /*display: none;*/
          top: 4px;
          width: 14px;
          height: 14px;
          color: white;
          cursor: pointer;
          line-height: 12px;
          border-radius: 100%;
          transform: rotate(45deg);
          background: rgba(0, 0, 0, 0.5);
        }
        &:hover{
          .file-remove {
            display: inline;
          }
        }
        .file-name {
          margin: 0;
          height: 40px;
          word-break: break-all;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
        }
      }
    }
    .add {
      width: 80px;
      height: 80px;
      margin-left: 10px;
      float: left;
      text-align: center;
      line-height: 80px;
      border: 1px dashed #ececec;
      font-size: 30px;
      cursor: pointer;
    }
    .upload-func {
      display: flex;
      padding: 0 10px;
      margin: 0px;
      background: #f8f8f8;
      border-top: 1px solid #ececec;
      .progress-bar {
        flex-grow: 1;
        section {
          margin-top: 5px;
          background: #00b4aa;
          border-radius: 3px;
          text-align: center;
          color: #fff;
          font-size: 12px;
          transition: all .5s ease;
        }
      }
      .operation-box {
        flex-grow: 0;
        padding-left: 10px;
        button {
          padding: 4px 12px;
          color: #fff;
          background: #007ACC;
          border: none;
          border-radius: 2px;
          cursor: pointer;
        }
      }
    }
    & > input[type="file"] {
      display: none;
    }
  }
</style>
