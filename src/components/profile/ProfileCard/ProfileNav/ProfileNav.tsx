import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { profileNavData } from 'constants/profileNavData';
import theme from 'styles/theme';
import * as S from './ProfileNav.styles';

interface ProfileNavProps {
  setCurrentMenu: (menu: string) => void;
}

export const ProfileNav: React.FC<ProfileNavProps> = ({ setCurrentMenu }) => {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({ query: theme.media.xl });

  return (
    <S.Wrapper>
      {profileNavData.map((item) => (
        <S.Btn
          size={(isDesktop && 'large') || 'middle'}
          key={item.id}
          icon={<item.Icon />}
          type="text"
          color={item.color}
          onClick={() => setCurrentMenu(item.href)}
        >
          {t(item.name)}
        </S.Btn>
      ))}
    </S.Wrapper>
  );
};
