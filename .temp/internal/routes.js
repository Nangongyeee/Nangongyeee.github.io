/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/home/xuejie/my_blog2/Nangongyeee.github.io/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-22c4cc90",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-22c4cc90").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-51a641f6",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-51a641f6").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-74e79daf",
    path: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-74e79daf").then(next)
    },
  },
  {
    path: "/技术文章/",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/"
  },
  {
    path: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/index.html",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/"
  },
  {
    path: "/技术文章/",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/"
  },
  {
    name: "v-41df4dc8",
    path: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/java%E9%AB%98%E7%BA%A7/javaee.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-41df4dc8").then(next)
    },
  },
  {
    path: "/技术文章/java高级/javaee.html",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/java%E9%AB%98%E7%BA%A7/javaee.html"
  },
  {
    path: "/技术文章/java高级/javaee.html",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/java%E9%AB%98%E7%BA%A7/javaee.html"
  },
  {
    name: "v-2a7af21c",
    path: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/java/javase.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2a7af21c").then(next)
    },
  },
  {
    path: "/技术文章/java/javase.html",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/java/javase.html"
  },
  {
    path: "/技术文章/java/javase.html",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/java/javase.html"
  },
  {
    name: "v-c871b990",
    path: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/vue/vue01.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c871b990").then(next)
    },
  },
  {
    path: "/技术文章/vue/vue01.html",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/vue/vue01.html"
  },
  {
    path: "/技术文章/vue/vue01.html",
    redirect: "/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/vue/vue01.html"
  },
  {
    name: "v-633e5308",
    path: "/%E7%94%9F%E6%B4%BB%E5%88%86%E4%BA%AB/life.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-633e5308").then(next)
    },
  },
  {
    path: "/生活分享/life.html",
    redirect: "/%E7%94%9F%E6%B4%BB%E5%88%86%E4%BA%AB/life.html"
  },
  {
    path: "/生活分享/life.html",
    redirect: "/%E7%94%9F%E6%B4%BB%E5%88%86%E4%BA%AB/life.html"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-2a5adf98",
    path: "/tags/Java基础/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-2a5adf98").then(next)
    },
    meta: {"pid":"tags","id":"Java基础"}
  },
  {
    path: "/tags/Java基础/index.html",
    redirect: "/tags/Java基础/"
  },
  {
    name: "v-e03f2858",
    path: "/tags/零基础/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-e03f2858").then(next)
    },
    meta: {"pid":"tags","id":"零基础"}
  },
  {
    path: "/tags/零基础/index.html",
    redirect: "/tags/零基础/"
  },
  {
    name: "v-300d2181",
    path: "/tags/Spring/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-300d2181").then(next)
    },
    meta: {"pid":"tags","id":"Spring"}
  },
  {
    path: "/tags/Spring/index.html",
    redirect: "/tags/Spring/"
  },
  {
    name: "v-3aee5baf",
    path: "/tags/SpringBoot/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-3aee5baf").then(next)
    },
    meta: {"pid":"tags","id":"SpringBoot"}
  },
  {
    path: "/tags/SpringBoot/index.html",
    redirect: "/tags/SpringBoot/"
  },
  {
    name: "v-16454405",
    path: "/tags/面向对象/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-16454405").then(next)
    },
    meta: {"pid":"tags","id":"面向对象"}
  },
  {
    path: "/tags/面向对象/index.html",
    redirect: "/tags/面向对象/"
  },
  {
    name: "v-3a90ac7a",
    path: "/tags/JavaSE/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-3a90ac7a").then(next)
    },
    meta: {"pid":"tags","id":"JavaSE"}
  },
  {
    path: "/tags/JavaSE/index.html",
    redirect: "/tags/JavaSE/"
  },
  {
    name: "v-669281ea",
    path: "/tags/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-669281ea").then(next)
    },
    meta: {"pid":"tags","id":"vue"}
  },
  {
    path: "/tags/vue/index.html",
    redirect: "/tags/vue/"
  },
  {
    name: "v-2aeea536",
    path: "/tags/js/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-2aeea536").then(next)
    },
    meta: {"pid":"tags","id":"js"}
  },
  {
    path: "/tags/js/index.html",
    redirect: "/tags/js/"
  },
  {
    name: "v-31b3711a",
    path: "/tags/生活/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-31b3711a").then(next)
    },
    meta: {"pid":"tags","id":"生活"}
  },
  {
    path: "/tags/生活/index.html",
    redirect: "/tags/生活/"
  },
  {
    name: "v-33a24f30",
    path: "/tags/分享生活/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-33a24f30").then(next)
    },
    meta: {"pid":"tags","id":"分享生活"}
  },
  {
    path: "/tags/分享生活/index.html",
    redirect: "/tags/分享生活/"
  },
  {
    name: "v-fc6ed512",
    path: "/categories/Java基础/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-fc6ed512").then(next)
    },
    meta: {"pid":"categories","id":"Java基础"}
  },
  {
    path: "/categories/Java基础/index.html",
    redirect: "/categories/Java基础/"
  },
  {
    name: "v-62faafef",
    path: "/categories/java/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-62faafef").then(next)
    },
    meta: {"pid":"categories","id":"java"}
  },
  {
    path: "/categories/java/index.html",
    redirect: "/categories/java/"
  },
  {
    name: "v-14bbbf36",
    path: "/categories/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-14bbbf36").then(next)
    },
    meta: {"pid":"categories","id":"前端"}
  },
  {
    path: "/categories/前端/index.html",
    redirect: "/categories/前端/"
  },
  {
    name: "v-711f6636",
    path: "/categories/生活/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-711f6636").then(next)
    },
    meta: {"pid":"categories","id":"生活"}
  },
  {
    path: "/categories/生活/index.html",
    redirect: "/categories/生活/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]