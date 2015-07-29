[![Dev Dependency Status](https://david-dm.org/atsid/engineering/dev-status.svg)](https://david-dm.org/atsid/engineering)

# engineering

Docs and discussion about ATS engineering culture and practices

## Contributing

We want everyone at ATS to contribute to the discussion about how we build software!

**Please branch the repo, make changes, and submit a pull request to get your ideas reviewed by other developers.**

This set of guides is a [Jekyll](http://jekyllrb.com/) site, so it is both easily readable and editable by developers using [Markdown](http://daringfireball.net/projects/markdown/),
and is deployable straight to GitHub Pages.

`*.md` files in the root are the process pages. The home page automatically pulls in all of the process pages
and displays them as tiles.

If you want to edit an existing page, simply work on it in your favorite editor.
If you want to add a new process page, add a new `*.md` file to the project root, and then insert the [yaml header material](http://jekyllrb.com/docs/frontmatter/).
You can use one of the other pages as a guide, but at a minimum you'll need the title, description, and permalink fields.

If you want to do deeper work on the site's structure or design, have a look at the [Jekyll docs](http://jekyllrb.com/docs/home/) to understand how the content is set up.

Once you've made all the edits you'd like, push your branch and submit a pull request. Once your pull request has been reviewed
and discussed by the team, you should get a :shipit: or two indicating that it's ready to go. At that point, merge the branch into `master`,
and the Travis build will automatically re-deploy the site to gh-pages.

*The workflow of branching, submitting a PR, then merging is covered more thoroughly in our [GitHub guide](https://github.com/atsid/engineering/blob/master/github.md).*

### Development

We use Vagrant to streamline the installation of Jekyll so you can run the site locally to make sure any changes will look ok when deployed.

1. `vagrant up`
1. `vagrant ssh`
1. `cd /vagrant`
1. Start jekyll: `jekyll serve`
1. View the site on your host machine: http://localhost:4000/engineering

### Deployment

Deployment uses a gulp task to push to `gh-pages`, where it can be viewed at http://labs.atsid.com/engineering/.

1. Get dev dependencies: `npm install`
1. Install gulp if you don't have it: `npm install -g gulp`
1. `gulp deploy`

Note again that this process happens automatically by Travis whenever commits are made to master.

