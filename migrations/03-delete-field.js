module.exports = function (migration) {
  const til = migration.editContentType('til');
  til.deleteField('intro');
}
