<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    created: function () {
      (function (doc, win) {
        var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            if (clientWidth >= 750) {
              docEl.style.fontSize = '40px'
            } else {
              docEl.style.fontSize = 40 * (clientWidth / 750) + 'px'
            }
          }

        if (!doc.addEventListener) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
      })(document, window)
    },
    mounted: function () {

    }
  }
</script>

<style>

</style>
