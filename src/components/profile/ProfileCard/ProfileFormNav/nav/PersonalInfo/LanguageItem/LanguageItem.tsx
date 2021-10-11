import React from 'react';
import { Select, Option } from 'components/common/Select/Select';
import { useTranslation } from 'react-i18next';
import { FlagOutlined } from '@ant-design/icons';
import { languages } from 'constants/languages';
import { FormItem } from '../../../ProfileForm/ProfileForm.styles';

const languageOptions = languages.map((lang) => (
  <Option key={lang.id} value={lang.value}>
    {lang.name}
  </Option>
));

export const LanguageItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormItem name="language" label={t('profile.nav.personalInfo.language')}>
      <Select suffixIcon={<FlagOutlined />}>{languageOptions}</Select>
    </FormItem>
  );
};
