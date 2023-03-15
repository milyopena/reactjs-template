import {Link} from 'react-router-dom';

type BackLinkProps = {
  navigateTo: string;
  text: string;
};

export const BackLink = ({navigateTo, text}: BackLinkProps) => {
  return <Link to={navigateTo}>{text}</Link>;
};
