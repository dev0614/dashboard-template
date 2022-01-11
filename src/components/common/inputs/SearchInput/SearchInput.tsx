import React from 'react';
import { Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { InputProps } from '../Input/Input';
import * as S from './SearchInput.styles';

interface SearchInputProps extends InputProps {
  loading?: boolean;
  filter?: React.ReactNode;
  onSearch?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => void;
  enterButton?: React.ReactNode;
  inputPrefixCls?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ loading, filter, ...props }) => {
  return (
    <S.SearchInput
      prefix={<SearchOutlined />}
      {...(filter && {
        suffix: (
          <S.Space align="center">
            {loading && <Spin size="small" />}
            {filter}
          </S.Space>
        ),
      })}
      {...props}
    />
  );
};
