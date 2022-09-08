import {
  changeToCurrency,
  ChangeToCurrencyProps
} from '~/app/infra/utils/change-to-currency/change-to-currency.util';

describe('Change To Currency', () => {
  const defaultValue: ChangeToCurrencyProps = {
    value: 123,
    style: 'currency'
  };

  it('should return a string currency', () => {
    expect(changeToCurrency(defaultValue)).toContain('R$');
  });

  it('should return a string decimal', () => {
    expect(changeToCurrency({ ...defaultValue, style: 'decimal' })).toBe(
      '1,23'
    );
  });

  it('should return a string currency with code', () => {
    expect(
      changeToCurrency({
        ...defaultValue,
        currencyDisplay: 'code'
      })
    ).toContain('BRL');
  });

  it('should return a string currency with name', () => {
    expect(
      changeToCurrency({
        ...defaultValue,
        currencyDisplay: 'name'
      })
    ).toContain('Real brasileiro');
  });
});
