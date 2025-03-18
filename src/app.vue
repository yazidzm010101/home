<script setup lang="ts">
const appConfig = useAppConfig()

useHead(() => ({
  htmlAttrs: {
    lang: 'id',
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap' },
  ],
  meta: [],
  titleTemplate: (title?: string) => title ? `${title} - ${appConfig.name}` : appConfig.name,
  descriptionTemplate: appConfig.description,
}))
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
