/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreatePage = ({ page, actions }) => {
  // const { createPage, deletePage } = actions
  //
  // // Only create one 404 page at /404.html
  // if (page.path.includes('404')) {
  //   return Promise.resolve()
  // }
  //
  // return new Promise(resolve => {
  //   // First delete all pages
  //   deletePage(page)
  //
  //   Object.keys(locales).map(lang => {
  //     // Remove the trailing slash from the path, e.g. --> /blog
  //     page.path = replaceTrailing(page.path)
  //
  //     // Remove the leading AND traling slash from path, e.g. --> blog
  //     const pageName = replaceBoth(page.path)
  //     const localizedPath = locales[lang].default ? page.path : `${locales[lang].path}${page.path}`
  //
  //     // This name is also used as "slug" (UID) in the Prismic backend. Result --> blog-de-de
  //     const localizedName = `${pageName}-${locales[lang].locale}`
  //     const i18n = locales[lang]
  //
  //     return createPage({
  //       ...page,
  //       path: localizedPath,
  //       context: {
  //         locale: lang,
  //         name: localizedName,
  //         i18n,
  //       },
  //     })
  //   })
  //
  //   resolve()
  // })
// }