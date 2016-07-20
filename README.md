[![Dependency Status](https://david-dm.org/atsid/guides.svg)](https://david-dm.org/atsid/guides)
[![Dev Dependency Status](https://david-dm.org/atsid/guides/dev-status.svg)](https://david-dm.org/atsid/guides)
[![Build Status](https://travis-ci.org/atsid/guides.svg?branch=master)](https://travis-ci.org/atsid/guides)

# guides

Docs and discussion about ATS software delivery culture and practices.

## Contributing

We want everyone at ATS to contribute to the discussion about how we build software!

>**Please fork the repo or create a branch, make changes, and submit a pull request to get your ideas reviewed by other developers.**

This is a [Jekyll](http://jekyllrb.com/) site, so it is both readable and editable using [Markdown](http://daringfireball.net/projects/markdown/),
and is deployable straight to GitHub Pages.

Once you've made all the edits you'd like, push your branch and submit a pull request. Once your pull request has been reviewed
and discussed by the team, you should get a :shipit: or two indicating that it's ready to go. At that point, merge the branch into `master`,
and the Travis build will automatically re-deploy the site to gh-pages.

*The workflow of branching, submitting a PR, then merging is covered more thoroughly in our [GitHub guide](https://github.com/atsid/guides/blob/master/github.md).*

### Development Guides

The 'guides' are individual pages that describe some aspect of how we deliver software and services to our customers. `*.md` files in the root are the guide pages. The home page automatically pulls in all of these pages and displays them in the list.

If you want to edit an existing page, simply work on it in your favorite editor.
If you want to add a new guide page, add a new `*.md` file to the project root, and then insert the [yaml header material](http://jekyllrb.com/docs/frontmatter/).
You can use one of the other pages as a template, but at a minimum you'll need the title, description, and permalink fields.

### Other Development

If you want to do deeper work on the site's structure or design, have a look at the [Jekyll docs](http://jekyllrb.com/docs/home/) to understand how the content is set up.

We use Vagrant to streamline the installation of Jekyll so you can run the site locally to make sure any changes will look ok when deployed.

1. `vagrant up`
1. `vagrant ssh`
1. `cd /vagrant`
1. Start jekyll: `jekyll serve --host 0.0.0.0` or use the handy bash alias `serve`
1. View the site on your host machine: http://localhost:4000/guides

### Deployment

Deployment uses a gulp task to push to `gh-pages`, where it can be viewed at http://labs.atsid.com/guides/.

1. Get dev dependencies: `npm install`
1. Install gulp if you don't have it: `npm install -g gulp`
1. `gulp deploy`

Note again that this process happens automatically by Travis whenever commits are made to master.