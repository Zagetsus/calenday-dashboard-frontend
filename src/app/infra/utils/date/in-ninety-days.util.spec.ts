import { DateUtils } from '~/app/infra/utils';
import { CURRENT_DATE } from '~/config/vars';

describe('Date Utils (inNinetyDaysAgo)', () => {
  it('should return a date', () => {
    expect(DateUtils.inNinetyDays({ date: CURRENT_DATE })).toBeInstanceOf(Date);
  });
});
