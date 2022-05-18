import React from 'react';
import { Button, ButtonProps } from 'antd';
import 'antd/dist/antd.css';

export interface ExtButtonProps extends ButtonProps {
  /**
   * @description 简单测试
   * @default false
   */
  isMy?: boolean;
}

const ExtButton: React.FC<ExtButtonProps> = (props) => {
  const { children, ...restProps } = props;

  var lebrons = '张三';

  return <Button {...restProps}>{children}</Button>;
};

export default ExtButton;
