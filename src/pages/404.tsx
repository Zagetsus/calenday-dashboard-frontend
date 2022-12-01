import { makeNotFound } from '~/app/main/factories/pages';
import { BaseLayout } from '~/app/presentation/layouts';

function _404() {
  return <BaseLayout>{makeNotFound()}</BaseLayout>;
}

export default _404;
