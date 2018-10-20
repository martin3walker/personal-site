module.exports = function (migration) {
  // Simplistic function deducing an intro the til's body text.
  const createIntro = (body) => {
    return `${body.slice(0,150)}...`
  }

  migration.transformEntries({
    contentType: 'til',
    derviedContentType: 'category',
    from: ['category'],
    to: ['intro'],
    transformEntryForLocale: async (from, locale) => {
      return {
        intro: createIntro(from.body[locale])
      }
    }
  })
}
