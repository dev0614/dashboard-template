import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { socialLinksData } from 'constants/socialLinksData';
import { FormItem } from '../../../../../../common/Form/Form.styles';
import { Col, Row } from 'antd';
import { ClipboardInput } from 'components/common/inputs/ClipboardInput/ClipboardInput';

interface SocialLinksItemProps {
  socialLinks: {
    facebook: string | undefined;
    twitter: string | undefined;
    linkedin: string | undefined;
  };
}

export const SocialLinksItem: React.FC<SocialLinksItemProps> = ({ socialLinks }) => {
  const { t } = useTranslation();

  const socialLinksItems = useMemo(
    () =>
      socialLinksData.map((link) => (
        <Col key={link.id} xs={24} md={12}>
          <FormItem name={link.name}>
            <ClipboardInput
              value={Object.entries(socialLinks).find((formLink) => formLink[0] === link.name)?.[1]}
              addonBefore={<link.Icon />}
            />
          </FormItem>
        </Col>
      )),
    [socialLinks],
  );

  return (
    <FormItem label={t('profile.nav.personalInfo.socialLinks')}>
      <Row gutter={[20, 0]}>{socialLinksItems}</Row>
    </FormItem>
  );
};
