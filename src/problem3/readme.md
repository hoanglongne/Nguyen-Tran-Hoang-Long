## Things to improve from old_version to new_version

1. **Unused Props and Destructuring**:
   - The `Props` interface is defined but not used in the `WalletPage` component. There's also destructuring of `children` and `...rest` from `props`, but these values are not used within the component. This leads to unnecessary code and potential confusion for other developers.

2. **Incorrect Variable Names**:
   - In the `sortedBalances` memoization function, `lhsPriority` is used in the filter function, but it's not defined anywhere. It should be `balancePriority`.

3. **Inefficient Sorting**:
   - The sorting of `sortedBalances` is done using a custom sorting function. The `getPriority` function is called multiple times for each element during the sorting process. This can lead to unnecessary function calls and slower sorting performance.

4. **Missing Error Handling**:
   - There is no error handling for cases where `useWalletBalances()` or `usePrices()` fail to retrieve data, which can lead to runtime errors.

5. **Redundant Mapping**:
   - The `formattedBalances` array is created by mapping over `sortedBalances`, duplicating the data unnecessarily. You could format the balances directly when rendering `WalletRow` components, avoiding the creation of a separate array.