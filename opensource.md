---
layout: page
title: Open Source
description: ATS loves the open source ethos, and encourages aggressive open code releases.
permalink: /opensource/
---

You can find our GitHub page at [github.com/atsid](https://github.com/atsid).

We try to encourage releasing as much of our code as possible as open source projects. For more detail on our open source strategy, have a look at [this post](https://medium.com/@natoverse/an-open-source-strategy-for-ats-c5cca250ef48).

## What Can Be Released?

Nearly anything! We encourage our employees to always be thinking about code that could be beneficial to release as open source software.

This makes it easier to reuse for other projects, and lets us give back to the community.

Guidelines for whether a project should be released include:

* Is there a wider use case or other potential interest for the project?
* Will releasing the code represent ATS well?
* Have you confirmed that the codebase itself does not represent proprietary capabilities or IP<sup>1</sup>?

If you aren't sure whether a project is a good candidate for open sourcing, feel free to ask for a review by other technical staff or ATS management.

## Open Source Standards

Our open source code should reflect our values as a development team, and should therefore be of high quality.

Some specific guidelines to consider for any open source codebase that we maintain or would like to release:

* Does the README.md state the purpose and goals of the project?
* Is the README.md file clear and comprehensive for new developers to get started working?
* Have you put relevant and useful [badges](https://github.com/badges/shields) in the README.md file to indicate status and quality<sup>2</sup>?
* Have you included a LICENSE file? (We default to [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0), feel free to copy it from one of our many open source repos)
* Where appropriate, is the `package.json` content complete and up-to-date?
* Have you confirmed that there is no sensitive information in the codebase (customer or corporate proprietary information, passwords/tokens, etc.)?


<sub><sup>1</sup>We try not to depend on proprietary IP, but it's worth double-checking. Especially if we're including customer-provided components or business logic.</sub>

<sub><sup>2</sup>ATS has built and maintains a [badging dashboard tool](https://badger.atsid.net/) that can help you check this.</sub>

