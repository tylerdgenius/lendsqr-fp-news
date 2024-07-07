const getInitials = (_author: string) => {
  if (!_author) return '-';

  const text = _author.split(' ');

  return `${text[0].slice(0)[0]}${text[1] ? text[1].slice(0)[0] : ''}`;
};

export default getInitials;
