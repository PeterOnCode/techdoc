---
lang: en-US
title: Learn
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

In the very first lesson of our Vue.js 3 Fundamentals course, besides of
learning how to easily add Vue.js from a [CDN](https://unpkg.com/vue@3) to our
site we're going to
take a look at Vue.js enjoyable and automatic reactivity system.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Shopping List App</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>

<div id="shopping-list">
    <h1>{{ header }}</h1>
    <input v-model="header">
</div>

<script src="https://unpkg.com/vue@3"></script>
<script>

    Vue.createApp({
        data() {
            return {
                header: 'View is ready to party'
            }
        }
    }).mount('#shopping-list')
</script>
</body>

</html>
```


<example></example>

 <Badge type="tip" text="v2" vertical="top" />


## 2. Using Vue Devtools with Vue.js 3

Using Vue Devtools with Vue.js 3

The Vue Devtools is an invaluable browser extension to Chrome and Firefox that
will speed up your development and bug hunting.

Vue Devtools 6 supports Vue 3 and as of right now it's in beta and available for
[Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)
and [Firefox](https://github.com/vuejs/vue-devtools/releases/download/v6.0.0-beta.8/vuejs_devtools_beta-6.0.0.8-an+fx.xpi)
.

## 3. Vue.js 3 template Syntax and Expressions

## 4. List Rendering in Vue 3

## 5. User Inputs in Vue 3

## 6. User Events in Vue 3

## 7. Methods in Vue 3

## 8. Conditional Rendering in Vue 3

## 9. HTML Attribute Binding in Vue 3

## 10. Dynamic CSS classes with Vue 3

## 11. Computed Properties in Vue 3