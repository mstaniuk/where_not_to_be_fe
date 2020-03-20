export default {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },

  computed: {
    isMobile() {
      return this.windowWidth < 1200;
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.getWindowSize);
      this.getWindowSize();
    });
  },

  methods: {
    getWindowSize() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowSize);
  }
};
