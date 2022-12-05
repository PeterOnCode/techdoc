---
date: 2022-11-24
author: peteroncode
title: Introduction to Vue 3
description: Vue 3
permalinkPattern: vue/courses/:slug.html
---

# Introduction to Vue 3

- <https://frontendmasters.com/courses/vue-3/>

Sarah Drasner

- <https://twitter.com/sarah_edo>
- <https://github.com/sdras>
- <https://codepen.io/sdras>
- <https://sarah.dev/>

Repo lives at: <https://github.com/sdras/intro-to-vue>

## 1. Introduction

### 1.1. Introduction

- <https://frontendmasters.com/courses/vue-3/introduction/>
- [Intro to Vue Intro](https://slides.com/sdrasner/deck?token=gsSM2n2V) -
  password: !vue!

Sarah Drasner introduces Vue.js, a JavaScript framework that is known for
its declarative nature, for being legible, easy to maintain, powerful, and
up to date with best practices for frontend libraries.

This segment also includes a comparison between Vue.js and other frameworks,
namely React and Angular, and an overview of the course content.

#### 1.1.1. Why Vue

- Declarative
- Legible
- Easy to Maintain
- A collection of the best of the best
- Elegant
- Gives me what I want when I need it, and gets out of my way
- A way to be really productive
- Goodness gracious it's freaking fun!

#### 1.1.2. Comparison with other frameworks

- A virtual DOM
- Reactive components that offer the View layer only
- Props and a centralized state management store similar to React.
- Conditional rendering, and service, similar to Angular.
- Inspired by Polymer for simplicity and performance, Vue offers a similar
  style as HTML, styles, and JavaScript are composed in tandem.
- Scoped styles in SFC that are similar to some types of CSS-in-JS like CSS
  Modules.

### 1.2. Course Resources & Setup

- <https://frontendmasters.com/courses/vue-3/course-resources-setup/>
- [Intro to Vue 1: Directives & Data Rendering](https://slides.com/sdrasner/intro-to-vue3-1?token=n3Yja_t9)

Sarah gives an overview of the course slides, the course repository, the
various chrome extensions used for the course, and how to get set up with
CodePen to follow along with the course.

### 1.3 Vue 3 Hello World

- <https://frontendmasters.com/courses/vue-3/vue-3-hello-world/>

Sarah creates a new Vue.js instance that returns the "Hello World" message, and
demonstrates that using the Vue framework allows engineers to write clean,
legible, easy to maintain, and reactive code.

- <https://codepen.io/sdras/pen/zYryxmK>


```vue
<div id="app">{{ message }} Nice to meet Vue.</div>
```

#### 1.3.1. Light comparison

Vanilla Js vs Vue for Conditional Rendering

```js
const items = [
  'thingie',
  'another thingie',
  'lots of stuff',
  'yadda yadda'
];

function listOfStuff() {
  const full_list = items.map(el => `<li> ${el} </li>`).join('');

  const contain = document.querySelector('#container');
  contain.innerHTML = `<ul> ${full_list} </ul>`;
}

listOfStuff();

```

- <https://codepen.io/sdras/pen/bGpmKLK/064262e70e22ca81dc474e234bae29ae>

```vue
const App = {
  data() {
    return {
      items: [
        'thingie',
        'another thingie',
        'lots of stuff',
        'yadda yadda'
      ]
    }
  }
}
```

```html
<div id="app">
  <ul>
    <li v-for="item in items">
      {{ item }}
    </li>
  </ul>
</div>
```

- <https://codepen.io/sdras/pen/rjjjaB/af6307c633262350c9642f554ff64b55>

- Clean
- semantic
- declarative
- Legible
- Easy to maintain
- reactive

#### 1.3.2. Directives

- [v-if](https://v3.vuejs.org/guide/conditional.html#v-if)
- [v-else](https://v3.vuejs.org/api/directives.html#v-else)
- [v-else-if](https://v3.vuejs.org/api/directives.html#v-else-if)
- [v-show](https://v3.vuejs.org/api/directives.html#v-show)
- [v-for](https://v3.vuejs.org/api/directives.html#v-for)
- [v-text](https://v3.vuejs.org/api/directives.html#v-for)
- [v-html](https://v3.vuejs.org/api/directives.html#v-html)
- [v-slot](https://v3.vuejs.org/api/directives.html#v-html)
- [v-on](https://v3.vuejs.org/api/directives.html#v-html)
- [v-bind](https://v3.vuejs.org/api/directives.html#v-bind)
- [v-model](https://v3.vuejs.org/api/directives.html#v-bind)
- [v-pre](https://v3.vuejs.org/api/directives.html#v-bind)
- [v-cloak](https://v3.vuejs.org/api/directives.html#v-cloak)
- [v-once](https://v3.vuejs.org/api/directives.html#v-once)
- [v-is](https://v3.vuejs.org/api/directives.html#v-is)

## 2. Directives, Modifiers & Data Rendering

- <https://slides.com/sdrasner/intro-to-vue3-1?token=n3Yja_t9#/11>
---

- [Intro to Vue 2: Methods, Computed, Watchers](https://slides.com/sdrasner/intro-to-vue3-2?token=jgTfDndR)
- [Intro to Vue 3: Components and Slots](https://slides.com/sdrasner/intro-to-vue-3-3?token=NLsRwMvr)
- [Intro to Vue 4: Vue CLI and Nuxt](https://slides.com/sdrasner/intro-to-vue-3-4?token=0IQFDZvK)
- [Intro to Vue 5: Animation](https://slides.com/sdrasner/intro-to-vue-3-5?token=YXhIwtpW)
- [Intro to Vue 6: Composition API and Custom Directives](https://slides.com/sdrasner/intro-to-vue-3-6?token=yidUZcRL)
- [Intro to Vue 7: Vuex](https://slides.com/sdrasner/intro-to-vue-3-7?token=YvT8ZUzV)
