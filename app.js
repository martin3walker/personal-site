const htmlStandards = require('reshape-standard');
const cssStandards = require('spike-css-standards');
const jsStandards = require('spike-js-standards');
const markdown = require('markdown-it');
const pageId = require('spike-page-id');
const Records = require('spike-records');
const env = process.env.SPIKE_ENV;
const locals = {};
const Contentful = require('spike-contentful');

module.exports = {
    devtool: 'source-map',
    ignore: [
      '**/layout.html',
      '**/template-project-page.html',
      '**/_*',
      '**/.*',
      'readme.md',
      'yarn.lock',
      'package-lock.json'
    ],
    plugins: [
      new Contentful({
        addDataTo: locals,
        accessToken:
          'af92bc5651eae6b1f3f5d3c65ed9c3e3e664a0b68bda67a0e6b89415336af0ee',
        spaceId: '3r3os8le32yo',
        includeLevel: 10,
        contentTypes: [
          {
            name: 'til',
            id: 'til',
            filters: {
              order:'fields.date',
            },
            template: {
              path: 'views/template-til-page.html',
              output: til => {
                return `tils/${til.fields.slug}.html`;
              }
            }
          },
          {
            name: 'categories',
            id: 'category',
            template: {
              path: 'views/template-til-category.html',
              output: category => {
                return `categories/${category.fields.slug}.html`
              }
            }
          },
          {
            name: 'introduction',
            id: 'introduction'
          },
          {
            name: 'projects',
            id: 'project'
          },
          {
            name: 'introTils',
            id: 'introTils'
          }
        ]
      }),
      new Records ({
        addDataTo: locals,
        test: {data: {foo: 'bar'}},
        spotify: { url: {
          path: "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=9&offset=9",
          headers: {
            "Accept": "application/json",
            "Authorization": "Bearer BQDf06p0zai3GeE5BOs1kfrV_Q7dEVvHe-Biw0DDsbvQahEpjHDH9DRzfUWwRWjvo5TnKukxw_NA5xlmARtHL4nN7XSSybli-zPHI84VAeejBahvMY7i7VaRB4mDyGxrW3tphbolaUZzSqaBput8-VjIBAQr",
            "Content-Type": "application/json"
          }
        }}
      })
    ],
    reshape: htmlStandards({
      locals: () => locals,
      minify: env === 'production',
      content: () => markdown.render(),
    }),
    postcss: cssStandards({
      minify: env === 'production',
      warnForDuplicates: env !== 'production'
    }),
    babel: jsStandards()
  }

  setTimeout(() => console.log(locals.spotify), 3000)
