---
lang: en-US
title: Learning material
---

- <https://vueschool.io/courses/vuejs-3-fundamentals>

11 lessons - 58 min - Beginner

## About the Vue.js 3 Fundamentals with the Options API course

Vue.js is a fantastic JavaScript framework, that is performant, progressive, and
remarkably easy to start using. This is our course on the very basics of Vue.
js - _The Vue.js Fundamentals_.

Vue.js 3 provides 2 different API options for interacting with it's core
functionality. In this course, we will teach you the fundamental concepts of
Vue.js 3 using it's more traditional API: **the Options API**. Once completed,
you'll have a solid foundation for your Vue journey.

The Vue.js 3 Fundamentals course covers:

- Introduction to two-way data binding
- Template syntax and expressions
- Vue directives, loops and conditional rendering
- Vue Devtools
- Handling user Inputs
- Handling Events
- Vue.js Methods and Computed Properties
- Attribute Bindings and dynamic classes

The course is suitable for developers who do not yet know about Vue.js or are
just getting started with Vue.

If you're looking for an advanced, thorough Vue.js 3 course where you learn by
building a real-world application we recommend you to check out The Vue.js 3
Master Class.

## 1. Get Started with Vue.js 3

- <https://vueschool.io/lessons/getting-started-with-vue-js-3>

In the very first lesson of our Vue.js 3 Fundamentals course, besides of
learning how to easily add Vue.js from a [CDN](https://unpkg.com/vue@3) to our
site we're going to
take a look at Vue.js enjoyable and automatic reactivity system.

```shell
npm create vite@latest
```

> App.vue

```vue

<script setup lang="ts">
import {ref} from "vue";

const header = ref("Vue is ready to party!")
</script>

<template>
  <h1>Header text: {{ header }}</h1>
  <input v-model="header">
</template>
```

<example></example>

 <Badge type="tip" text="v2" vertical="top"></Badge>

## 2. Using Vue Devtools with Vue.js 3

- <https://vueschool.io/lessons/using-vue-dev-tools-with-vuejs-3>

Using Vue Devtools with Vue.js 3

The Vue Devtools is an invaluable browser extension to Chrome and Firefox that
will speed up your development and bug hunting.

Vue Devtools 6 supports Vue 3 and as of right now it's in beta and available for

- [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)
  and
- [Firefox](https://github.com/vuejs/vue-devtools/releases/download/v6.0.0-beta.8/vuejs_devtools_beta-6.0.0.8-an+fx.xpi)
  .

## 3. Vue.js 3 template Syntax and Expressions

- <https://vueschool.io/lessons/vue-js-3-template-syntax-and-expressions>

In the previous lesson, we briefly touched upon the templating syntax to bind
Vue data to the DOM.

In this lesson, we'll dive deeper into Vue's templating syntax and learn how to
run JavaScript expressions directly in the template.

> App.vue
```vue
<script setup lang="ts">
import {ref} from "vue";

const header = ref("Shopping list App")
</script>

<template>
  <h1>{{ header || "Welcome" }}</h1>
  <input v-model="header">
</template>

```

## 4. List Rendering in Vue 3

- <https://vueschool.io/lessons/list-rendering-in-vue-3>

In almost all applications there is a need to iterate or loop through a list of items and render them on the page.

In this lesson, we're taking a closer look at Vue's v-for directive, which lets us iterate through arrays and objects in an elegant matter.

> App.vue
```vue
<script setup lang="ts">
import {reactive, ref} from "vue";

const header = ref("Shopping list App")
const items = reactive([
  {id:1,label:"10 party hats"},
  {id:2,label:"2 board games"},
  {id:3,label:"20 cups"}
])
</script>

<template>
  <h1>{{ header || "Welcome" }}</h1>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.label }}</li>
    <li>---</li>
    <li v-for="{id,label} in items" :key="id">{{ label }}</li>
    <li>---</li>
    <li v-for="(item, index) in items" :key="index">{{index}}: {{ item.label }}</li>
  </ul>
</template>
```
### Links

- [Tips and Gotchas for Using key with v-for in Vue.js 3](https://vueschool.io/articles/vuejs-tutorials/tips-and-gotchas-for-using-key-with-v-for-in-vue-js-3/)

## 5. User Inputs in Vue 3

- <https://vueschool.io/lessons/user-inputs-vue-devtools-in-vue-3>


## 6. User Events in Vue 3

## 7. Methods in Vue 3

## 8. Conditional Rendering in Vue 3

## 9. HTML Attribute Binding in Vue 3

## 10. Dynamic CSS classes with Vue 3

## 11. Computed Properties in Vue 3
