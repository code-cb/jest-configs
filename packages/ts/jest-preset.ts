import { Config } from 'jest';

export const config: Config = {
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/test/**/*.[jt]s?(x)'],
  testPathIgnorePatterns: ['/_\\w+.\\w+$'],
  transform: { '\\.jsx?|tsx?|cts|mts$': '@codecb/babel-jest' },
};

export default config;
