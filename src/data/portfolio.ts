import type { SidebarPortfolioTemplateProps } from '@/components/SidebarPortfolioTemplate';

// Base path for GitHub Pages deployment
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/MyPortfolio' : '';

export const credlyBadgeId = '993fc5eb-3c2a-4096-8fc9-9da4bd2b3b42';

/**
 * All portfolio content. Dates use "Mon YYYY" / "YYYY" / "Present" so the
 * template can show durations (e.g. "2 yrs 3 mos").
 */
export const portfolio: SidebarPortfolioTemplateProps = {
  name: 'Lee Qin Wen',
  role: 'Software Engineer & Cyber Enthusiast',
  bio: 'I create modern, responsive web applications. Passionate about clean code, user experience, and continuous learning.',
  avatarSrc: `${BASE_PATH}/images/ProfilePic.jpg`,
  signatureText: 'Kelvin',
  details: [
    { icon: 'pin', label: 'Singapore' },
    { icon: 'briefcase', label: 'Software engineer since 2020' },
    { icon: 'cap', label: 'Master of Cybersecurity (in progress)' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leeqinwen/', icon: 'linkedin' },
    // { label: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
  ],
  email: 'kelvinlee0711@live.com',
  cvUrl: `${BASE_PATH}/LeeQinWen_Resume_v3.pdf`,
  cvFileName: 'LeeQinWen_Resume.pdf',

  headline: 'Software Engineer',
  tagline:
    'I create modern, responsive web applications using cutting-edge technologies, with a growing focus on cybersecurity.',
  heroQuips: ['deployed ✓', 'UAT passed', 'query 30% faster', 'migration done', 'bug squashed', 'went live!'],

  about: [
    'My journey began with a curiosity about how websites work, which evolved into a passion for creating seamless digital experiences.',
    "I'm always eager to learn new technologies. I believe in writing clean, maintainable code and creating applications that provide real value to users. Alongside my software development work, I have a passion for Cybersecurity and actively self-study to build practical skills and expand my expertise.",
  ],
  // Clicking one of these highlights the roles that used it
  keySkills: ['.NET', 'React.js', 'PostgreSQL', 'MSSQL', 'Node.js', 'GraphQL', 'Ember.js'],

  experience: [
    {
      company: 'Secur Solution Group Pte Ltd',
      logo: { color: '#D97757', text: 'S' },
      roles: [
        {
          title: 'Software Engineer / Business Analyst',
          type: 'Full-Time',
          start: 'Jul 2024',
          end: 'Present',
          summary:
            'Work closely with users to ensure daily business workflows run without disruption, and fix system bugs to keep the system stable.',
          highlights: [
            'Successfully drove Ministry of Law Case Accounting System project to go-live',
            'Improved application performance by 30% through revising complex SQL queries',
          ],
          skills: ['.NET', 'MSSQL'],
        },
      ],
    },
    {
      company: 'Medisys Innovation Pte Ltd',
      logo: { color: '#3a6ea5', text: 'M' },
      roles: [
        {
          title: 'Software Engineer / System Analyst',
          type: 'Full-Time',
          start: 'Jun 2022',
          end: 'Jun 2024',
          summary:
            'Developed and maintained existing web applications. Worked closely with clients and developer team to deliver custom solutions.',
          highlights: [
            'Maintained and enhanced Lab Management Software, implementing features that improved functionality and user experience',
            'Completed 2 data migrations for the Aptus Medical Center and Singapore Polytechnic projects',
            'Led and managed User Acceptance Testing for 2 key Parkway projects',
          ],
          skills: ['React.js', 'PostgreSQL', '.NET'],
        },
      ],
    },
    {
      company: 'Adtiki Sdn Bhd',
      logo: { color: '#2f8f6b', text: 'A' },
      roles: [
        {
          title: 'Junior Full Stack Software Engineer',
          type: 'Full-Time',
          start: 'Jul 2020',
          end: 'Apr 2022',
          summary: 'Built the responsive Adtiki Ads Campaign website. Gained experience in modern web development practices.',
          highlights: [
            'Helped integrate the Uppy uploader into the Ads Campaign website',
            'Helped integrate the Annotorious image annotation library into the Ads Campaign website, allowing users to comment on images',
          ],
          skills: ['Ember.js', 'PostgreSQL', 'Node.js', 'GraphQL'],
        },
      ],
    },
  ],

  education: [
    {
      school: 'University Teknology Malaysia (UTM)',
      degree: 'Master of Cybersecurity',
      start: '2025',
      end: 'Present',
      logo: { color: '#8a2b3d', glyph: 'cap' },
    },
    {
      school: 'University Tunku Abdul Rahman (UTAR)',
      degree: 'Bachelor of Science (Honours) Software Engineering',
      start: '2016',
      end: '2020',
      logo: { color: '#1f4f8f', glyph: 'book' },
    },
  ],

  certifications: [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'AWS',
      year: '2023',
      summary: 'Practitioner certification in cloud services.',
      logo: { color: '#232f3e', glyph: 'cube' },
    },
    {
      title: 'Semgrep 101',
      issuer: 'Semgrep',
      year: '2025',
      summary:
        'Fundamentals of static code analysis, software supply chain security, and secret scanning with Semgrep in this course.',
      logo: { color: '#1b8a5a', glyph: 'spark' },
    },
  ],

  // TODO(Kelvin): levels (0–100) are rough estimates from years of use — adjust to taste
  skills: [
    {
      name: 'Frontend',
      items: [
        { name: 'JavaScript', level: 85, years: 6 },
        { name: 'React.js', level: 75, years: 2 },
        { name: 'Next.js', level: 65, years: 1 },
        { name: 'Ember.js', level: 65, years: 2 },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: '.NET', level: 82, years: 4 },
        { name: 'Node.js', level: 70, years: 2 },
        { name: 'GraphQL', level: 65, years: 2 },
      ],
    },
    {
      name: 'Data & Cloud',
      items: [
        { name: 'PostgreSQL', level: 82, years: 4 },
        { name: 'MSSQL', level: 80, years: 2 },
        { name: 'AWS', level: 65, years: 2 },
      ],
    },
  ],

  contactTitle: 'Get in touch',
  contactText: 'Open for any opportunities. Reach me by email, or call +65 88378142.',
  labels: { available: 'Open to opportunities' },
  timeZone: 'Asia/Singapore',
  city: 'Singapore',

  accent: '#D97757',
  paper: '#fbf6f2',
};
