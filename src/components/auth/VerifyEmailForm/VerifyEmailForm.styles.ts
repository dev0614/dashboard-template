import styled from 'styled-components';
import theme from 'styles/theme';

export const ImageWrapper = styled.div`
  margin-bottom: 1.875rem;
`;

export const VerifyEmailDescription = styled.div`
  margin-bottom: 1.875rem;
  color: ${(props) => props.theme.colors.text.main};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.regular};

  @media only screen and ${theme.media.xs} {
    font-size: ${(props) => props.theme.commonFontSizes.xxs};
  }

  @media only screen and ${theme.media.md} {
    font-size: ${(props) => props.theme.commonFontSizes.xs};
  }
`;

export const NoCodeText = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.main.primary};
  font-size: ${(props) => props.theme.commonFontSizes.xs};
  font-weight: ${(props) => props.theme.commonFontWeight.regular};
  text-decoration: underline;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
