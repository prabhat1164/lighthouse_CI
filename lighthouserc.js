module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
      },
      assert: {
        preset: 'lighthouse:no-pwa',
        assertions: {
        'csp-xss': 'warn',
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.90 }],
        },
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };