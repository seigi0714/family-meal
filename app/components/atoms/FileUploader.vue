<template>
<div class="resize-img" >
  <!-- 画像選択 -->
    <div v-show="!resizedImg" class="resize-img__post">
      <label for="file" class="resize-img__post__label">画像
        <input
          id="file"
          ref="fileInput"
          type="file"
          accept=".jpeg, .png"
          @change="uploadImg">
      </label>
    </div>
    <!-- プレビュー -->
    <div v-show="resizedImg" class="resize-img__preview">
      <div class="resize-img__preview__circle" @click="clearUploadImg">
        <span class="resize-img__preview__circle__close-icon">×</span>
      </div>
      <canvas ref="canvas" class="resize-img__preview__canvas"/>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      resizedImg: null
    };
  },
  destroyed() {
    this.clearUploadImg();
  },
  methods: {
    uploadImg(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.generateImgUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    generateImgUrl(file) {
      const image = new Image();
      image.crossOrigin = 'Anonymous';

      image.onload = (e) => {
        const resizedBase64 = this.makeResizeImg(image);
        // リサイズ済みのBase64をblobに変換
        const resizedBlob = this.base64ToBlob(resizedBase64);
        // urlを生成してプレビュー表示できるようにする
        const resizedImg = window.URL.createObjectURL(resizedBlob);
        this.resizedImg = resizedImg;
      };
      image.src = file;
    },
    makeResizeImg(image) {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d'); // 2Dコンテキスト
      // 縦横で長い方の最大値を1000とする
      const MAX_SIZE = 1000;

      // MAX_SIZEよりも小さかったらそのまま
      if (image.width < MAX_SIZE && image.height < MAX_SIZE) {
        [canvas.width, canvas.height] = [image.width, image.height];
        ctx.drawImage(image, 0, 0);
        return canvas.toDataURL('image/jpeg');
      }

      let dstWidth;
      let dstHeight;
      // 縦横比の計算
      if (image.width > image.height) {
        dstWidth = MAX_SIZE;
        dstHeight = (image.height * MAX_SIZE) / image.width;
      } else {
        dstHeight = MAX_SIZE;
        dstWidth = (image.width * MAX_SIZE) / image.height;
      }
      canvas.width = dstWidth;
      canvas.height = dstHeight;
      // リサイズ
      ctx.drawImage(image, 0, 0,image.width, image.height, 0, 0, dstWidth,dstHeight);

      // data_url形式に変換したものを返す
      return canvas.toDataURL('image/jpeg');
    },
    clearUploadImg() {
      this.resizedImg = null;
      if (this.$refs.fileInput && this.$refs.fileInput.value !== undefined) {
        this.$refs.fileInput.value = '';
      }
    },
    base64ToBlob(base64) {
      const bin = atob(base64.replace(/^.*,/, ''));
      const buffer = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      return new Blob([buffer.buffer], {
        type: 'image/png'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.resize-img {
  width: 456px;
  height: 400px;
  margin: 0 auto;
  @media screen and (max-width: 456px){
    width: 100vw;
  }

  &__post {
    border: 1px solid rgba(#000, 0.16);
    line-height: 30rem;

    &__label {
      display: inline-block;
      width: 100%;
      cursor: pointer;

      color: rgba(0, 0, 0, 0.4);
      text-align: center;

      & > input {
        display: none;
      }
    }
  }

  &__preview {
    width: 456px;
    height: 400px;

    &__circle {
      position: absolute;
      right: 30px;
      width: 27px;
      height: 27px;
      margin: 5px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 10px;
      text-align: center;
      cursor: pointer;
      &__close-icon {
        color: #fff;
      }
    }

    &__canvas {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
