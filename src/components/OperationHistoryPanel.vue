<script setup lang="ts">
const { history } = useOperation()

const latest = computed(() => {
  return history.length > 0 ? history[history.length - 1] : null
})

/**
 * UNIX time to HH:mm:ss.SSS
 */
function formatTime (time: number) {
  const date = new Date(time)
  const h = date.getHours().toString().padStart(2, '0')
  const m = date.getMinutes().toString().padStart(2, '0')
  const s = date.getSeconds().toString().padStart(2, '0')
  const ms = date.getMilliseconds().toString().padStart(3, '0')
  return `${h}:${m}:${s}.${ms}`
}

const showAll = ref(false)

function toggleShowAll () {
  showAll.value = !showAll.value
}
</script>

<template>
  <div
    class="history-panel"
    :style="showAll ? `height: 50%;` : `height: 24px`"
    style="display: flex;"
  >
    <div v-if="showAll" style="overflow-y: scroll; width: 100%">
      <div v-for="(_, i) in history" :key="i">
        [{{ formatTime(history[history.length - 1 - i]?.time || 0) }}]
        {{ history[history.length - 1 - i]?.text }}
      </div>
    </div>
    <div v-else>
      <div v-if="latest">
        [{{ formatTime(latest.time) }}]
        {{ latest.text }}
      </div>
    </div>
    <button v-if="showAll" class="toggle" style="top: -20px" @click="toggleShowAll">
      Hide Operation history
    </button>
    <button v-else class="toggle" @click="toggleShowAll">
      Show All
    </button>
  </div>
</template>

<style scoped>
.history-panel {
  font-family: 'Monaco';
  border-top: 1px solid var(--border-grey);
  font-size: 12px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgb(17 17 17);
  z-index: 1000;
  white-space: nowrap;
}

.toggle {
  border: 1px solid var(--border-grey);
  box-sizing: border-box;
  background: black;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
