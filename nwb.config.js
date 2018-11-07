module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MultipleCollaboratorField',
      externals: {
        react: 'React'
      }
    }
  }
}
