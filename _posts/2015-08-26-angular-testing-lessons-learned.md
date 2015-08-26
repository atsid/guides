---
layout: post
title:  AngularJS Testing Lessons Learned
description: Recently, our company encountered a significant (28%) complaint rate spike
date:   2015-08-26 14:13:00
author: Chris Trevino
platform: Medium
original: https://medium.com/@darthtrevino/angularjs-testing-lessons-learned-14a5d1e17f3
category: blog
---

Recently, our company encountered a significant (28%) complaint rate spike in one of our email-sending applications that utilized AWS’ Simple Email Service (SES). An error spike of this magnitude is unacceptable. Not only does it put our production access to SES at risk, it potentially alienates customers and puts our reputation at risk.

At the heart of this issue is a feature request from our client. Our client had requested that we construct an automated email that is sent to all users of a platform to notify them of new products coming online. This is fine and dandy, assuming that users have a mechanism to opt-out. Super Simple Stuff. In this case, users were not able to opt-out due to a bug, and were thus getting pissed. QED.

The bug worked like this: users would visit their email preferences page and un-check the Subscribe to Marketing Email check-box. They would then see a green “success” toast. However, when they refreshed the page the Subscribe to Marketing Email checkbox would still be checked, and they would still receive the unwanted messages. Keyboard-throwing fury would ensue.

The problem was in the Angular controller for managing email preferences. In Angular, when a checkbox is bound to a model property, and the required attribute is present, then the model value will be true when checked and undefined when unchecked [demonstration](https://jsfiddle.net/darthtrevino/k5fa5qkf/1/). When the user submits the payload, properties with undefined values were culled and are not applied to the update mechanism.

Although this controller was well tested in isolation, the testing was written in a vacuum. You can see the train of thought of the tester: Since a check-box is boolean state, it must bind to a boolean value. I’ll assume unchecked is false, and checked is true. This simple, logical assumption led to unwarranted confidence in the solution.

Unwarranted confidence is the artifact of when something is properly unit-tested, but no integration or end-to-end testing has been performed. It’s testing that’s misinformed about how their dependencies will actually work.

The lessons learned with regards to testing in this case are:

* (Angular-specific) DOM-coupled components, such as controllers and directives, may be tested in isolation, but they should also be tested against a small, test DOM.
* (More general) If a component A is highly-coupled with component B, they should be tested in a coupled environment. If this is infeasible, component A should be tested against a lifelike mock of component B, based on empirical, real-world interaction (e.g. actual results from a service interface).
* Users will be more critical about functionality that affects them viscerally: their money, email inboxes, privacy, etc.. If any concerns in a application should have end-to-end automated testing it should be these.
