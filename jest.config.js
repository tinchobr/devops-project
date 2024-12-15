module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage', // Carpeta donde se guardará el reporte
  coverageReporters: ['lcov', 'text'], // LCOV es compatible con SonarQube
};
