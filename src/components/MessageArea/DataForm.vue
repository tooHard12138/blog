<template>
  <form
    @submit.prevent="handleSubmit"
    id="data-form-container"
    ref="container"
    class="data-form-container"
  >
    <div class="form-item">
      <div class="input">
        <input
          class="text-input name"
          maxlength="10"
          type="text"
          placeholder="用户昵称"
          v-model="formData.name"
        />
        <span class="tip">{{ formData.name.length }}/10</span>
      </div>
      <div class="error">{{ formError.name }}</div>
    </div>
    <div class="form-item">
      <div class="input">
        <textarea
          class="text-input content"
          maxlength="300"
          type="textarea"
          placeholder="输入内容"
          v-model="formData.content"
        />
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ formError.content }}</div>
    </div>
    <div class="form-item">
      <button :disabled="isListLoading" class="btn">提交</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        content: "",
      },
      formError: {
        name: "",
        content: "",
      },
      isListLoading: false,
    };
  },
  methods: {
    handleSubmit() {
      this.formError.name = this.formData.name.trim() ? "" : "请填写昵称";
      this.formError.content = this.formData.content.trim() ? "" : "请填写内容";
      if (this.formError.name || this.formError.content) {
        return;
      }
      this.isListLoading = true;
      this.$emit(
        "submit",
        { nickname: this.formData.name, content: this.formData.content },
        (message) => {
          this.$showMessage({
            message,
            type: "success",
            duration: 1000,
            container: this.$refs.container,
            callback: () => {
              this.isListLoading = false;
              this.formData.name = "";
              this.formData.content = "";
            },
          });
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-form-container {
  font-size: 14px;
  .form-item {
    &:first-child {
      width: 50%;
    }
    margin-bottom: 8px;
    .name {
      height: 40px;
      line-height: 40px;
    }
    .content {
      height: 120px;
      resize: none;
    }
    .error {
      margin-top: 6px;
      color: @danger;
      height: 20px;
      line-height: 20px;
    }
    .btn {
      box-sizing: border-box;
      width: 100px;
      height: 34px;
      line-height: 34px;
      border: none;
      outline: none;
      color: #fff;
      background: @primary;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: darken(@primary, 10%);
      }
      &:disabled {
        background: lighten(@primary, 20%);
        cursor: no-drop;
      }
    }
  }
}

.input {
  position: relative;
  .tip {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 12px;
    color: @gray;
  }
}

.text-input {
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px dashed @gray;
  padding: 8px 15px;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: @primary;
  }
}
</style>