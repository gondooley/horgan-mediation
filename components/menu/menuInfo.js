function menuItem(text, href) {
  return {
    text: text,
    href: href,
  }
}

const menuInfo = [
  { 'item': menuItem('Home', '/') },
  {
    'item': menuItem('Contact', '/contact'),
    // 'subitems': [menuItem] - currently not deployed
  },
  { 'item': menuItem('About', '/about') },
  { 'item': menuItem('Mediation', '/mediation-general') },
  { 'item': menuItem('Workplace and Commercial', '/mediation') },
  { 'item': menuItem('Family Mediation', '/family') },
];

export default menuInfo;