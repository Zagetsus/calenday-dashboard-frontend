import { DateUtils } from '~/app/infra/utils';
import { CURRENT_DATE } from '~/config/vars';

describe('Date Utils (thirtyDaysAgo)', () => {
  test('should return a date', () => {
    expect(DateUtils.thirtyDaysAgo({ date: CURRENT_DATE })).toBeInstanceOf(
      Date
    );
  });

  test('should return a date with 30 days ago', () => {
    expect(DateUtils.thirtyDaysAgo({ date: CURRENT_DATE })).toEqual(
      new Date(CURRENT_DATE.getTime() - 30 * 24 * 60 * 60 * 1000)
    );
  });
});
