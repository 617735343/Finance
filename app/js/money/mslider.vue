<template>
  <Panel title="轮播图" :class="$style.pannel">
    <section :class="$style.content">
      <Slider :items="items" :cname="$style.slider"/>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  components: {
    Panel,
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/21756/23/8272/105785/5c74ecdbEaf16791c/f5f6053214dd3594.png?width=750&height=400"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/23182/19/7780/54795/5c6fc52eE00ed325c/8f393b37bf87d921.jpg?width=750&height=400"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/23987/10/6467/33251/5c51768aE67229997/72c6ddc1b71c0b11.png?width=750&height=400"
        },
        {
          href: "home",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/18022/19/8691/43154/5c78f4feEa13b699b/82a300c572740592.png?width=750&height=400"
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
}
.slider {
  img {
    width: 100%;
  }
}
</style>

