---
layout: page
title: GitHub
description: We use git, hosted at GitHub, for most source control.
permalink: /github/
---

Most source control at ATS uses [GitHub](https://github.com/atsid).

We like to use the [GitHub Flow](https://guides.github.com/introduction/flow/),
because it helps elevate visibility and ownership of development across the team.

## Flow

When a new feature or bug needs to be worked on, we:

1. Create a new **branch**, named to include a reference to the task management system ID and a useful description: `{task-id}-{short-description}`.

    > 1234-fixing-database-connection

2. All **commits** toward the feature/bug are prefixed with the task id: `(#{task-id}) - {description of commit}`.
    
    > \(#1234) - Fix connection pool settings

3. When feature or bug is complete, submit a **pull request** back to master.

4. Others review the pull request and provide feedback. When that feedback is addressed and you get 1-2 :shipit:, **merge** the branch into master.

We use specific formats for our branch names and commit logs so that the tools can automatically organize into an activity stream for a task.
We enclose the commit message issue number in parens to get around the use of leading '#' as a comment prefix in some editors.

## Commit Messages

The commit log of a project is an important resource for yourself and future developers to use when trying to understand the history of an issue or feature.
Using a consistent convention for commit messages makes it easier to understand the project, and easier for developers to pick up work on any project.

We really like [this guide](http://chris.beams.io/posts/git-commit/) for writing consistent, informative commit messages. The main difference we endorse is the issue number prefixing described above,
which makes the GitHub site for the repo much more interactive via links.

## Access Control

By default, all members of the ATS org get `read` access to all repositories. This lets everyone see all of our code so we can learn from it, reuse it, and be aware of other project activity.
 
We don't default to `write` access for the [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege). This makes it harder to accidentally commit to a project.

It also gives project leads or primary maintainers a chance to bring new team members up to speed with the project's conventions before they're able to commit.

If you see a project you'd like write access to so you can contribute, contact the team lead if there is one, or check the contributors list to see who has been committing a lot recently. If that isn't helpful, contact [Nathan Evans](mailto:nathan.evans@atsid.com) directly to be added.