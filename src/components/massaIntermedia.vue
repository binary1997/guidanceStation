<template>
  <div>
    <div class="massaIntermedia_PC">
      <div class="left_nav">
        <mu-button
          color="primary"
          v-for="item in pageData"
          :key="item.name"
          class="left_nav_item"
          @click="navChange(item.list)"
          >{{ item.name }}</mu-button
        >
      </div>
      <div class="right">
        <p class="right_name">{{ listData[0].typeName }}</p>
        <div class="right_content">
          <div
            v-for="a_item in listData"
            :key="a_item.id"
            class="right_content_item"
            @click="openAddr(a_item.url)"
          >
            <img
              class="right_content_img"
              :src="`https://static.iiter.cn/${a_item.icon}`"
              alt=""
              srcset=""
            />
            {{ a_item.alias }}
          </div>
        </div>
      </div>
    </div>
    <div class="massaIntermedia_MT">
      <div class="left_nav_MT">
        <mu-button
          color="primary"
          v-for="item in pageData"
          :key="item.name"
          class="left_nav_item"
          @click="navChange(item.list)"
          >{{ item.name }}</mu-button
        >
      </div>
      <div class="right_MT">
        <p class="right_name">{{ listData[0].typeName }}</p>
        <div class="right_content">
          <div
            v-for="a_item in listData"
            :key="a_item.id"
            class="right_content_item"
            @click="openAddr(a_item.url)"
          >
            <img
              class="right_content_img"
              :src="`https://static.iiter.cn/${a_item.icon}`"
              alt=""
              srcset=""
            />
            {{ a_item.alias }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { programmer } from "./../assets/js/data";
export default {
  name: "massaIntermedia",
  data() {
    return {
      pageData: [],
      listData: [],
    };
  },
  props: {},
  components: {},
  created() {
    this.pageData = programmer;
    this.listData = programmer[0].list;
    console.log(programmer, "programmer");
  },
  mounted() {},
  methods: {
    navChange(list) {
      this.listData = list;
    },
    openAddr(addr) {
      window.location.href = addr;
    },
  },
};
</script>

<style  scoped>
.massaIntermedia_PC {
  width: 60vw;
  margin: 5vh auto 2vh auto;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 0 5px -1px #d9d9d9;
  padding: 10px;
  display: flex;
}
.left_nav {
  width: 10%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e6e6e6;
}
.left_nav_item {
  margin: 5px auto;
}
.right {
  width: 90%;
}
.right_name {
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.right_content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}
.right_content_item {
  margin: 5px 0 5px 10px;
  padding: 5px 10px;
  border: 0.1px solid #eaeaea;
  border-radius: 2px;
  display: flex;
  align-items: center;
  font-size: 15px;
  width: 19%;
}
.right_content_item:hover {
  border: 0.1px solid #fff;
  box-shadow: 0px 0px 5px 1px #d9d9d9;
}
.right_content_img {
  width: 25px;
  margin-right: 5px;
}
.massaIntermedia_MT {
  width: 90vw;
  display: none;
  margin: 5vh auto 2vh auto;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 0 5px -1px #d9d9d9;
  padding: 10px;
  flex-wrap: wrap;
}
.left_nav_MT {
  width: 100%;
  display: flex;
  overflow-x: scroll;
  border-right: 1px solid #e6e6e6;
  scrollbar-width: none; 
}

.left_nav_MT::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.right_MT {
  width: 100%;
}
@media screen and (max-width: 500px) {
  .massaIntermedia_PC {
    display: none;
  }
  .massaIntermedia_MT {
    display: flex;
  }
  .left_nav_item {
    margin: 5px 5px;
   
  }
  .right_content {
    justify-content: space-between;
  }
  .right_content_item {
    width: 45%;
    margin: 5px 0 ;
  }
  .right_content_item{
     overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .right_name{
    padding: 5px 0;
   
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
    border-bottom: 1px solid #e6e6e6;
  }
}
</style>