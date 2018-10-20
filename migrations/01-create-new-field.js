module.exports = function (migration) {
  // Create a new category reference field in the til content type.
  const til = migration.editContentType('til');
  til.createField('category')
    .name('Category')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        linkContentType: ['category']
      }
    ])
}
