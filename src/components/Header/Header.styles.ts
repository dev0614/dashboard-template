import styled, { css } from 'styled-components';
import { Col, Collapse, Menu } from 'antd';
import { BurgerIcon } from '../common/Burger/BurgerIcon';
import { GitHubButton } from '@app/components/Header/GitHubButton';

export const DropdownMenu = styled(Menu)`
  background-color: ${(props) => props.theme.colors.main.mainBackground};
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07) !important;
  border-radius: ${(props) => props.theme.border.radius};
  line-height: 1.5715;
`;

export const DropdownHeader = styled.div`
  cursor: pointer;

  & > span[role='img'],
  .ant-badge {
    display: block;
    font-size: 1.25rem;

    color: ${(props) => props.theme.colors.text.main};

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1.625rem;
    }
  }
`;

export const DropdownCollapse = styled(Collapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: ${(props) => props.theme.colors.main.primary};

    @media only screen and ${(props) => props.theme.media.md} {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(Col)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(BurgerIcon)`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: -0.5rem;
  color: ${(props) => props.theme.colors.text.main};

  ${(props) => props.isCross && `color: ${props.theme.colors.text.secondary}`};
`;

export const SearchColumn = styled(Col)`
  padding: ${(props) => `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
`;

interface ProfileColumn {
  $isTwoColumnsLayout: boolean;
}

export const ProfileColumn = styled(Col)<ProfileColumn>`
  @media only screen and ${(props) => props.theme.media.md} {
    ${(props) =>
      props?.$isTwoColumnsLayout &&
      css`
        background-color: ${(props) => props.theme.colors.main.mainBackground};
        padding: ${(props) =>
          `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
      `}
  }
`;

export const GHButton = styled(GitHubButton)`
  display: none;

  @media only screen and ${(props) => props.theme.media.lg} {
    display: block;
  }
`;
