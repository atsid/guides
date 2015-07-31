---
layout: post
title:  Angular and the Law of Demeter
description: We use Angular a lot at ATS, but we've frequently encountered issues with scope data accumulation.
date:   2015-07-30 16:42:04
author: Chris Trevino
platform: Medium
original: https://medium.com/@darthtrevino/angular-and-the-law-of-demeter-ebde032c52cf
category: blog
---

We use Angular quite a bit at ATS. It provides a high-productivity development environment, a clean structure to Javascript applications, and a vibrant community with lots of plugins and enhancements.

Over the past few weeks, in one of our Angular projects, we have seen a certain issue crop up several times. The application would start up fine, and a cursory run-through of the app would look fine, but here and there views would not be rendered, and important functionality would disappear. It’s an issue that we‘ve encountered somewhat regularly: controllers gathering data from scopes.

For those unaware, Angular scopes are basically nested context objects that are attached to the DOM and kind of mirror the DOM. There is a root scope at the top level of your Angular application, and child scopes that are created for controllers and directives. Properties in parent scopes are percolated to child scopes unless they are overridden.

Nested property scoping is fine for HTML views. It allows views to bind to properties provided by their own controllers, or properties available at certain document levels. This seems to match the mental model of scoping within the context of the DOM should work.