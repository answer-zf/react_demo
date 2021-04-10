import React from 'react';

// 创建
// export const ThemeContext = React.createContext();
// 没有匹配 Provider,设置默认值
export const ThemeContext = React.createContext({ themeColor: 'pink' });
// 接收者
export const ThemeProvider = ThemeContext.Provider;
// 消费者
export const ThemeConsumer = ThemeContext.Consumer;
