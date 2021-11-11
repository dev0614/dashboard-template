import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { Modal } from 'components/common/Modal/Modal';
import { Button } from 'components/common/buttons/Button/Button';
import { SearchInput } from 'components/common/inputs/SearchInput/SearchInput';

export const SearchIcon = styled(SearchOutlined)`
  &.anticon.anticon-search {
    display: block;
    font-size: 1.25rem;

    color: ${(props) => props.theme.colors.text.secondary};

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1.625rem;

      color: ${(props) => props.theme.colors.text.main};
    }
  }
`;

export const InputSearch = styled(SearchInput)`
  @media only screen and ${(props) => props.theme.media.md} {
    border-radius: 50px;
    border: 0;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const SearchModal = styled(Modal)`
  border-radius: ${(props) => props.theme.border.radius};

  & .ant-modal-body {
    padding: 0;
  }
`;

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;