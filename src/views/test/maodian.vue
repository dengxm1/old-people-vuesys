<template>
     <div class="anchor-point">
    <!-- 滚动区域 -->
    <div class="scroll-content" @scroll="onScroll">
      <div class="scroll-item" style="height: 200px;background: #3a8ee6;">一层</div>
      <div class="scroll-item" style="height: 200px;background: red;">二层</div>
      <div class="scroll-item" style="height: 200px;background: #42b983">三层</div>
      <div class="scroll-item" style="height: 200px;background: yellow;">四层</div>
    </div>
    <!-- 按钮 -->
    <div class="operation-btn">
      <div v-for="(item, index) in ['一层','二层','三层','四层']" :key="index" @click="jump(index)"
           :style="{background: activeStep === index ? '#eeeeee' : '#ffffff'}">{{item}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
activeStep:''
    }
  },
    methods: {
      
        // 点击切换锚点
jump (index) {
  function smoothDown (element) {
   if (distance < total) {
     distance += step
     element.scrollTop = distance
     setTimeout(smoothDown.bind(this, element), 10)
   } else {
     element.scrollTop = total
   }
 }
 // 参数element为滚动区域
 function  smoothUp (element) {
   if (distance > total) {
     distance -= step
     element.scrollTop = distance
     setTimeout(smoothUp.bind(this, element), 10)
    } 
  else {
     element.scrollTop = total
   }
 }
 let target = document.querySelector('.scroll-content')
 let scrollItems = document.querySelectorAll('.scroll-item')
console.log(target)
console.log(scrollItems)
 // 判断滚动条是否滚动到底部
 if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
   this.activeStep = index
 }
 let total = scrollItems[index].offsetTop - scrollItems[0].offsetTop // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)

 let distance = document.querySelector('.scroll-content').scrollTop // 滚动条距离滚动区域顶部的距离
 // let distance = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset // 滚动条距离滚动区域顶部的距离(滚动区域为窗口)
 // 滚动动画实现, 使用setTimeout的递归实现平滑滚动，将距离细分为50小段，10ms滚动一次
 // 计算每一小段的距离
 let step = total / 50
 if (total > distance) {
   smoothDown(document.querySelector('.scroll-content'))
 } else {
   let newTotal = distance - total
   step = newTotal / 50
   smoothUp(document.querySelector('.scroll-content'))
 }
 
},
 // 滚动触发按钮高亮
onScroll (e) {
  let scrollItems = document.querySelectorAll('.scroll-item')
  for (let i = scrollItems.length - 1; i >= 0; i--) {
    // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
    let judge = e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop
    if (judge) {
      this.activeStep = i
      break
    }
  }
},

 // document.querySelectorAll('.scroll-item').forEach((item, index1) => {
 //   if (index === index1) {
 //     item.scrollIntoView({
 //       block: 'start',
 //       behavior: 'smooth'
 //     })
 //   }
 // })
    },
}
</script>
<style scoped>
  .anchor-point {
    flex-basis: 100%;
    display: flex;
    overflow: hidden;
  }
    .scroll-content {
      height: 800px;
      width: 200px;
      margin:0 auto;
      overflow-y: scroll;
    }
    .operation-btn {
      width: 10%;
      height: 100%;
    }

</style>