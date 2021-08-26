<template>
  <div class="">
    <div class="searchBox">
      <div class="searchBox_div">
        <div class="searchBox_nav">
          <p
            @click="searchSwitch('baidu')"
            class="searchBox_nav_p"
            :class="searchName == 'baidu' ? 'searchBox_navActive' : ''"
          >
            百度
          </p>
          <p
            @click="searchSwitch('bing')"
            class="searchBox_nav_p searchBox_nav_p_middle"
            :class="searchName == 'bing' ? 'searchBox_navActive' : ''"
          >
            必应
          </p>
          <p
            @click="searchSwitch('google')"
            class="searchBox_nav_p"
            :class="searchName == 'google' ? 'searchBox_navActive' : ''"
          >
            谷歌
          </p>
        </div>
        <div class="searchBox_input_div">
          <input type="text" v-model="content" />
        </div>

        <mu-button color="primary" @click="search()">
          <mu-icon left value="search"></mu-icon>
          搜索
        </mu-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBox",
  data() {
    return {
      searchName: "baidu",
      content: "",
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    searchSwitch(name) {
      this.searchName = name;
    },
    search() {
      if (this.searchName == "baidu") {
        window.location.href = `https://www.baidu.com/s?wd=${this.content}`;
      } else if (this.searchName == "bing") {
        window.location.href = `https://www.bing.com/search?q=${this.content}`;
      } else if (this.searchName == "google") {
        window.location.href = `https://www.google.com/search?q=${this.content}`;
      }
    },
  },
};
</script>

<style  scoped>
.searchBox {
  width: 60vw;
  margin: 5vh auto 2vh auto;
  border-radius: 10px;

  background: #ffffff;
  box-shadow: 0px 2px 3px -1px rgb(228 228 228);
  padding:10px 20px ;
}
.searchBox_nav {
  display: flex;
  
  font-size: 15px;
  justify-content: flex-start;
  margin: 10px 0;
}

.searchBox_nav_p {
  padding: 0 10px;
  height: 36px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: inset 13px 13px 26px #d9d9d9, inset -13px -13px 26px #ffffff;
  margin: 0 5px;
  line-height: 36px;
   border: 1px solid #fff;
}

.searchBox_nav_p {
  margin: 0 5px 0 0;
}
.searchBox_input {
  border-radius: 5px;
  background: #ffffff;
}

.searchBox_div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.searchBox_input_div {
  flex: 1;
  border: 1px solid #d9d9d9;
   padding: 5px ;
   margin: 0 10px;
   height: 36px;
}
.searchBox_input_div input {
  background: none;
  outline: none;
  border: none;
  width: 100%;
  font-size: 16px;
}

.searchBox_navActive {
  background: #ffffff;
  box-shadow: none;
  border: 1px solid #d9d9d9;
}

@media screen and (max-width: 500px) {
  .searchBox {
  width: 90vw;
  }
  .searchBox_div{
     flex-wrap: wrap;
  }
  .searchBox_nav{
    width: 100%;

  }
  .searchBox_nav_p{
    flex: 1;
    text-align: center;
    margin: 0 ;
  }
  .searchBox_input_div{
    margin: 0 10px 0 0 ;
  }
  .searchBox_nav_p_middle{
    margin: 0 5px;
  }
     
}
</style>