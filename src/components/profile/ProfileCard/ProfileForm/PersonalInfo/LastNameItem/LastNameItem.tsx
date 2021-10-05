import React from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItem } from '../../ProfileForm.styles';

export const LastNameItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="lastName" label={t('profile.nav.personalInfo.lastName')}>
      <Input />
    </FormItem>
  );
};
