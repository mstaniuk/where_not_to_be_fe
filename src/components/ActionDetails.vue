<template>
  <section
    class="map-popup" :class="'map-popup--' + point.type"
  >
    <button class="map-popup__close" @click.prevent="$emit('closeClick')">
      <i class="icon icon-close" />
    </button>
    <header class="map-popup__header">
      <h3 class="map-popup__title brygada">{{ point.title }}</h3>
      <div class="map-popup__address">Świętego Wawrzyńca 15, 31-060 Kraków</div>
    </header>

    <div class="map-popup__actions">
      <div v-if="point.target">
        <div class="map-popup__target-label">Target</div>
        <div class="map-popup__target">
          {{ point.target }} {{ point.unit }}
        </div>
      </div>

      <div v-if="point.time.from && point.time.to">
        <div class="map-popup__target-label">Preferred time</div>
        <div class="map-popup__target">
          <span class="nowrap">{{ point.time.from | date }}</span> -
          <span class="nowrap">{{ point.time.to | date }}</span>
        </div>
      </div>

      <div class="map-popup__cta">
        <button
          class="btn btn--filled"
          :class="{
              'btn--red': point.type === 'crowd',
              'btn--navy': point.type === 'single'
            }"
        >
          Help
        </button>
      </div>
    </div>

    <div class="map-popup__description">
      {{ point.description }}
    </div>
  </section>
</template>

<script>
export default {
  name: "ActionDetails",

  props: {
    point: {
      type: Object,
      required: true,
    }
  },
}
</script>
