import { DateUtils } from '~/app/infra/utils';
import { CURRENT_DATE } from '~/config/vars';

describe('Date Utils (sixtyDaysAgo)', () => {
  test('should return a date', () => {
    expect(DateUtils.sixtyDaysAgo({ date: CURRENT_DATE })).toBeInstanceOf(Date);
  });

  test('should return a date with 60 days ago', () => {
    expect(DateUtils.sixtyDaysAgo({ date: CURRENT_DATE })).toEqual(
      new Date(CURRENT_DATE.getTime() - 60 * 24 * 60 * 60 * 1000)
    );
  });
});
