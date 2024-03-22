export const findOptionByValue = <ValueType, OptionType>(values: ValueType[], options: OptionType[], value: ValueType) => {
  const index = values.indexOf(value);
  return options[index];
};
