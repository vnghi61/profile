import {FiCloud, FiCode, FiFacebook, FiGithub} from 'react-icons/fi';

export const AppConfig = {
  name: "Nguyen Van Nghi",
  username: "vnghi61", // should be GitHub username
  avatar: 'https://i.imgur.com/aXTszAQ.jpeg',
  verticalAvatar: 'https://i.imgur.com/aXTszAQ.jpeg',
  introduction: `2 years experience in Web development.\n` +
    `Working in scalable and high-performance technology systems.\n`,
  subscriptions: [{
    name: "Hire Me",
    price: "At any price",
    preferred: true,
  }, {
    name: "Freelance",
    price: "At any price"
  }],
  socialLinks: [{
    name: 'GitHub',
    url: 'https://github.com/vnghi61',
    icon: FiGithub
  }, {
    name: 'Facebook',
    url: 'https://www.facebook.com/Nghi.1110.2003',
    icon: FiFacebook
  }],
  expertises: [{
    name: 'Web Development',
    icon: FiCode,
    description: 'React, Next.js, Node.js PHP, SQL, MongoDB, REST API, etc.'
  }, {
    name: 'Infrastructure',
    icon: FiCloud,
    description: 'AWS, Plesk, Docker, etc.'
  }],
  giscusEnabled: true,
}
