export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'JrdnHnz.dev';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'GLHF <3';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Made with Love by JrdnHnz.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
