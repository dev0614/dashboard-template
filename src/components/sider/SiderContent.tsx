import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import { SiderMenuLink } from './SiderMenuLink/SiderMenuLink';
import { navigation } from 'constants/navigation';
import { notificationsSeverities } from 'constants/notificationsSeverities';
import * as S from './SiderContent.styles';

const SubMenu = Menu.SubMenu;

interface SiderContentProps {
  toggleSider: () => void;
}

const SiderContent: React.FC<SiderContentProps> = ({ toggleSider }) => {
  const { t } = useTranslation();

  const notificationSeverity = useMemo(
    () => (id: number) => notificationsSeverities.find((nf) => nf.id === id)?.name,
    [],
  );

  const navMenu = useMemo(
    () =>
      navigation.map((nav, index) =>
        !nav.menus && nav.url ? (
          <SiderMenuLink
            key={index}
            icon={<nav.icon />}
            href={nav.url}
            name={t(nav.title)}
            notificationsCount={nav.meta?.notifications.count}
            {...(nav.meta && { notificationsSeverity: notificationSeverity(nav.meta.notifications.severity) })}
          />
        ) : (
          <SubMenu key={index} title={t(nav.title)} icon={<nav.icon />}>
            {nav.menus?.map((menu, index) => (
              <SiderMenuLink
                key={`${nav.name}${index}`}
                name={t(menu.title)}
                href={menu.url}
                notificationsSeverity={notificationSeverity(menu.meta.notifications.severity)}
                notificationsCount={menu.meta.notifications.count}
              />
            ))}
          </SubMenu>
        ),
      ),
    [notificationSeverity],
  );

  return (
    <S.Menu mode="inline" onClick={toggleSider}>
      {navMenu}
    </S.Menu>
  );
};

export default SiderContent;
