import styled from 'styled-components';
import { Button, Typography, Image as AntImage } from 'antd';
import { media } from '../../../../styles/theme';

export const BtnMore = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 3rem;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 2;
  transition: all 0.3s ease;
  pointer-events: none;

  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 7px;

  background-color: ${(props) => props.theme.colors.basicLight};

  @media only screen and ${media.md} {
    width: calc(50% - 0.3125rem);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;

    border-radius: ${(props) => props.theme.border.radius};

    background: ${(props) => props.theme.colors.primaryGradient};
  }

  &:hover {
    &::after {
      opacity: 0.7;
    }

    & ${BtnMore} {
      pointer-events: all;
      opacity: 1;
    }
  }
`;

export const Image = styled(AntImage)`
  width: 100%;
  height: 100%;
`;

export const InfoWrapper = styled.div`
  padding: 0.875rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.375rem;

  @media only screen and ${media.md} {
    margin-bottom: 0.625rem;
  }
`;

export const Title = styled(Typography.Text)`
  font-weight: 500;
  font-size: 0.75rem;

  color: ${(props) => props.theme.colors.basicDark};
`;

export const Text = styled(Typography.Text)`
  font-size: 0.75rem;
`;

export const Description = styled(Typography.Text)`
  font-size: 0.625rem;
`;
