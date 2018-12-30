<template>
  <a
    v-if="isExternalLink"
    :href="to"
    :title="title"
    target="_blank"
  >
    <slot />
  </a>

  <router-link v-else :to="to"><slot /></router-link>
</template>

<script>
import { isExternalLink } from '../../utils'

export default {
  name: 'Link',

  props: ['to', 'title'],

  computed: {
    isExternalLink() {
      return isExternalLink(this.to)
    }
  }
}
</script>
