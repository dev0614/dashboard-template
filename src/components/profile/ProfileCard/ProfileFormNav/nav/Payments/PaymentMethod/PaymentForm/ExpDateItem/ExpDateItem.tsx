import React from 'react';
import { useTranslation } from 'react-i18next';
import { MaskedInput } from 'components/common/inputs/MaskedInput/MaskedInput';
import { FormItem } from 'components/profile/ProfileCard/ProfileFormNav/ProfileForm/ProfileForm.styles';
import { CardInputProps } from '../interfaces';

export const ExpDateItem: React.FC<CardInputProps> = ({ disabled, handleInputChange, handleInputFocus }) => {
  const { t } = useTranslation();

  return (
    <FormItem
      name="expiry"
      label={t('profile.nav.payments.expDate')}
      requiredMark="optional"
      rules={[
        {
          required: true,
          message: t('common.requiredField'),
        },
      ]}
    >
      <MaskedInput
        placeholderChar=" "
        placeholder="MM/YY"
        mask="11/11"
        name="expiry"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        disabled={disabled}
      />
    </FormItem>
  );
};
