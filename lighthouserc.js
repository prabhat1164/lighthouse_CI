module.exports = {
    ci: {
      upload: {
        target: 'temporary-public-storage',
      },
      assert: {
        preset: 'lighthouse:recommended',
        assertions: {
          'csp-xss': 'off',
          'categories:performance': ['error', { minScore: 0.90 }],
          'categories:accessibility': ['error', { minScore: 0.90 }],
          'categories:best-practices': ['error', { minScore: 0.90 }],
          'categories:seo': ['error', { minScore: .90 }],
        },
      },
    },
  };