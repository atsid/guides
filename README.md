[![Dev Dependency Status](https://david-dm.org/atsid/engineering/dev-status.svg)](https://david-dm.org/atsid/engineering)

# Engineering
Docs and discussion about ATS engineering culture and practices

## Getting Started

We want everyone at ATS to contribute to the discussion about how we build software!

**Please branch the repo, make changes, and submit a pull request to get your ideas reviewed by other developers.**

### Development

This set of guides is a [Jekyll](http://jekyllrb.com/) site, so it is both easily readable and editable by developers using [Markdown](http://daringfireball.net/projects/markdown/),
and is deployable straight to GitHub Pages.

We use Vagrant to streamline the installation of Jekyll, and gulp to do the deployment.

1. `vagrant up`
1. `vagrant ssh`
1. Start jekyll: `jekyll serve`
1. View the site: `http://localhost:4000/engineering`

### Deployment

Deployment uses a gulp task to push to `gh-pages`.

1. Get dev dependencies: `npm install`
1. `gulp deploy`

