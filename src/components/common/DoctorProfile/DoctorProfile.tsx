import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import * as S from './DoctorProfile.styles';
import { specifities } from 'constants/specifities';
import { UserOutlined } from '@ant-design/icons';

interface DoctorProfileProps {
  src?: string;
  name?: string;
  speciality?: string | number;
  rating?: number;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ src, name, speciality, rating }) => {
  const { t } = useTranslation();

  const specifity = specifities.find((el) => el.id === speciality)?.name;

  return (
    <Row align="top" gutter={[10, 10]} wrap={false}>
      <Col>
        <Avatar size="large" src={src} icon={<UserOutlined />} alt="Doctor avatar" shape="square" />
      </Col>

      <Col>
        <Row gutter={[5, 5]}>
          <Col span={24}>
            <S.Title>{t('common.doctor')}</S.Title>
          </Col>

          <Col span={24}>
            <S.Text>{name}</S.Text>
          </Col>

          <Col span={24}>
            <S.Rating value={rating} disabled />
          </Col>
        </Row>
      </Col>

      <Col>
        <Row gutter={[5, 5]}>
          <Col span={24}>
            <S.Title>{t('common.specifity')}</S.Title>
          </Col>

          <Col span={24}>
            <S.Text>{t(`common.${specifity}`)}</S.Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
