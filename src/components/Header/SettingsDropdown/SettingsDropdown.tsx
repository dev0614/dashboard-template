import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Radio, RadioChangeEvent, Switch } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ThemeSwitchContext } from '../../../context/ThemeSwitchContext';
import * as S from '../Header.styles';

export const SettingsDropdown: React.FC = () => {
  const [isChecked, setChecked] = useState(false);

  const { currentTheme, changeTheme } = useContext(ThemeSwitchContext);

  const { t, i18n } = useTranslation();

  const handleChange = (e: RadioChangeEvent) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    if (isChecked && currentTheme !== 'dark') {
      changeTheme('dark');
    } else if (!isChecked && currentTheme !== 'light') {
      changeTheme('light');
    }
  }, [isChecked]);

  return (
    <Dropdown
      overlay={
        <S.Menu>
          <S.DropdownContent>
            <Radio.Group defaultValue={i18n.language} onChange={handleChange}>
              <Radio value="en">English</Radio>
              <Radio value="de">Deutsch</Radio>
            </Radio.Group>
            <S.SwitchWrapper>
              <Switch
                defaultChecked={isChecked}
                checkedChildren={t('common.darkTheme')}
                unCheckedChildren={t('common.lightTheme')}
                onChange={(value) => setChecked(value)}
              />
            </S.SwitchWrapper>
          </S.DropdownContent>
        </S.Menu>
      }
      trigger={['click']}
    >
      <S.DropdownHeader>
        <SettingOutlined />
      </S.DropdownHeader>
    </Dropdown>
  );
};
