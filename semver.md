---
layout: page
title: SemVer
description: SemVer is a way of specifying project versions so they increment in a predictable, meaningful way.
permalink: /semver/
---

'Semantic Versioning' or *SemVer* is a specific ruleset for versioning the software libraries that you author.
As you can gather from the name, the intent is to make every version change *semantically meaningful*,
so that those who use your library can easily understand the impact a version change might have on them.

SemVer has been gaining wide traction, especially in the Node.js community, and builds upon lessons learned from
a long history of software version management with tools such as [Maven](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html).

SemVer has a [public specification](http://semver.org/), authored by Tom Preston-Werner, co-founder of GitHub.
The spec is a very worthwhile read, but a short summary is provided here for convenience:

<div class="emphasis-block">

    Given a version number MAJOR.MINOR.PATCH, increment the:

    <ol>
        <li>MAJOR version when you make incompatible API changes</li>
        <li>MINOR version when you add functionality in a backwards-compatible manner</li>
        <li>PATCH version when you make backwards-compatible bug fixes</li>
    </ol>
</div>

SemVer is valuable for a couple of significant reasons.
First is that the predictability makes it clear to everyone what to expect when the library version changes.
Second, `package.json` provides a number of [version specifier flags](https://docs.npmjs.com/files/package.json#dependencies)
that allow libraries to dynamically import dependencies according to SemVer rules, such as 'latest patch that doesn't change backwards compatibility'.

When you're working on a project, think carefully about the implications of changes you are making and plan for release version changes as appropriate.
Also make sure you [perform a release](https://help.github.com/articles/creating-releases/) whenever you update a version, so the contents of the software do not change for that version.