// gitprofile.config.js

const config = {
  github: {
    username: 'aroralanuk', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'Lab7_Starter',
        'Lab5_Starter',
        'Lab8_Starter',
        'Lab9_Starter',
        'aisle-temp',
        'scaffold-eth-challenges',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kunalarora01',
    twitter: 'auroraByKunal',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: 'auroraByKunal',
    mirror: 'lanuk.eth',
    dev: '',
    website: 'https://aroralanuk.github.io/',
    phone: '',
    email: 'crazentonkunalizar@gmail.com',
  },
  skills: [
    'Solidity',
    'Python',
    'C/C++',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'Flutter',
  ],
  experiences: [
    {
      company: 'Proxima Capital',
      position: 'Junior Solidity Developer',
      from: 'March 2022',
      to: 'Present',
    },
    {
      company: 'Blockchain at San Diego',
      position: 'Co-founder and Vice President, Education',
      from: 'July 2021',
      to: 'Present',
    },
    {
      company: 'BlockLab',
      position: 'Undergraduate Researcher',
      from: 'October 2021',
      to: 'Present',
    },
  ],
  education: [
    {
      institution: 'University of California, San Diego',
      degree: 'Bachelor of Science in Mathematics and Computer Science',
      from: '2019',
      to: '2023',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'auroraByKunal',
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-MTJXK0YMZW', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '2617601', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['bumblebee', 'halloween'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
