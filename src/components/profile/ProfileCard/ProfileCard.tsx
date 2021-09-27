import React, { useEffect, useState } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Card } from '../../common/Card/Card';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfileNav } from './ProfileNav/ProfileNav';
import { PageTitle } from 'components/common/PageTitle/PageTitle';
import { getUser, User } from 'api/users.api';
import { ProfileFormNav } from './ProfileFormNav/ProfileFormNav';
import * as S from './ProfileCard.styles';

export const ProfileCard: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState('main');

  const [profileData, setProfileData] = useState<User>();

  useEffect(() => {
    getUser().then((res) => setProfileData(res));
  }, []);

  const { t } = useTranslation();

  return profileData ? (
    <>
      <PageTitle>
        {currentMenu === 'main' ? (
          t('profile.title')
        ) : (
          <S.Btn icon={<LeftOutlined />} type="text" onClick={() => setCurrentMenu('main')}>
            {t('common.back')}
          </S.Btn>
        )}
      </PageTitle>

      {currentMenu === 'main' ? (
        <Card padding={30}>
          <ProfileInfo profileData={profileData} />
          <ProfileNav setCurrentMenu={setCurrentMenu} />
        </Card>
      ) : (
        <ProfileFormNav menu={currentMenu} setCurrentMenu={setCurrentMenu} />
      )}
    </>
  ) : null;
};
