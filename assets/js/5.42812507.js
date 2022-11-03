(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{245:function(t,e,a){},246:function(t,e,a){},260:function(t,e,a){},411:function(t,e,a){"use strict";a(245)},412:function(t,e,a){"use strict";a(246)},426:function(t,e,a){"use strict";a(260)},493:function(t,e,a){"use strict";a.r(e);var s={name:"Home",components:{NavLink:a(244).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(411),a(15)),o=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content1 custom1"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports,n={name:"H5Viewer",props:{iframePath:String}},r=(a(412),Object(i.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"h5-viewer"},[t("div",{staticClass:"mobile-iframe"},[t("div",{staticClass:"mobile-content"},[t("iframe",{attrs:{src:this.iframePath,frameborder:"0",width:"100%",height:"100%"}})])])])}),[],!1,null,"ca82fc2a",null).exports),h=a(485),c=a(486),l=a(487),u=a(242),d={name:"Layout",components:{Home:o,Page:c.a,Sidebar:l.a,Navbar:h.a,H5Viewer:r},data:()=>({isSidebarOpen:!1,isH5:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(u.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]},iframePath(){const t=this.$page.relativePath.split("/")[1].split(".")[0],e=t+".html";return this.$site.themeConfig.iframePath+"/ycui/h5Demo/"+(-1!==e.indexOf("README")?"index.html":e)}},watch:{$route(){this.checkIsH5()}},mounted(){this.checkIsH5(),console.log("vm",this),this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{checkIsH5(){this.isH5=new RegExp("^"+this.$site.themeConfig.layoutPath).test(this.$page.path)},toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},m=(a(426),Object(i.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),t.$page.frontmatter.home?t._e():e("Sidebar",{class:[{"custom-sidebar":t.isH5}],attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{class:[{"custom-page":t.isH5}],attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.isH5?e("H5Viewer",{attrs:{iframePath:t.iframePath}}):t._e()],1)}),[],!1,null,"960bc568",null));e.default=m.exports}}]);