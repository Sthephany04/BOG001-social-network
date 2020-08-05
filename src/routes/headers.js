import header from '../templates/header';
import headerTimeline from '../templates/headerTimeline';
// import headerEvent from '../templates/headerEvent';

const headerRouter = (route) => {
  switch (route) {
    case '#/login':
      return header();
    case '#/sign-up':
      return header();
    case '#/timeline':
      return headerTimeline();
    case '#/event':
      return headerTimeline();
    default:
      return header();
  }
};

export default headerRouter;
