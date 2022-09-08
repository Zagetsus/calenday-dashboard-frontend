import { DateUtils } from '~/app/infra/utils';
import { CURRENT_DATE } from '~/config/vars';

describe('Date Utils (ninetyDaysAgo)', () => {
  test('should return a date', () => {
    expect(DateUtils.ninetyDaysAgo({ date: CURRENT_DATE })).toBeInstanceOf(
      Date
    );
  });

  test('should return a date with 90 days ago', () => {
    expect(DateUtils.ninetyDaysAgo({ date: CURRENT_DATE })).toEqual(
      new Date(CURRENT_DATE.getTime() - 90 * 24 * 60 * 60 * 1000)
    );
  });
});
