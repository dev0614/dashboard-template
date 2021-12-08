import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { ScreeningsFriend } from './ScreeningsFriend/ScreeningsFriend';
import { CurrentStatisticsState } from '../ScreeningsCard';
import { useResponsive } from 'hooks/useResponsive';
import { Screening } from 'api/screenings.api';
import * as S from './ScreeningsFriends.styles';
import { CarouselArrow } from 'components/common/CarouselArrow/CarouselArrow';

interface ScreeningsFriendsProps {
  screenings: Screening[];
  currentStatistics: CurrentStatisticsState;
  setCurrentStatistics: (func: (state: CurrentStatisticsState) => CurrentStatisticsState) => void;
  isFirstClick: boolean;
  setFirstClick: (state: boolean) => void;
}

export const ScreeningsFriends: React.FC<ScreeningsFriendsProps> = ({
  screenings,
  currentStatistics,
  setCurrentStatistics,
  isFirstClick,
  setFirstClick,
}) => {
  const { mobileOnly, isTablet } = useResponsive();

  const { t } = useTranslation();

  const handleClickItem = (mode: number) => () => {
    setCurrentStatistics((prev) => {
      if (isFirstClick && prev.firstUser !== mode) {
        setFirstClick(!isFirstClick);

        return {
          ...prev,
          secondUser: mode,
        };
      } else if (prev.secondUser !== mode) {
        setFirstClick(!isFirstClick);

        return {
          ...prev,
          firstUser: mode,
        };
      } else {
        return {
          ...prev,
        };
      }
    });
  };

  const screeningsItems = useMemo(
    () =>
      screenings.map((screening, index) => (
        <ScreeningsFriend
          key={screening.name}
          name={screening.name}
          value={screening.value}
          prevValue={screening.prevValue}
          src={screening.imgUrl}
          isPrimary={index === currentStatistics.firstUser}
          isSecondary={index === currentStatistics.secondUser}
          onClick={handleClickItem(index)}
        />
      )),
    [screenings, currentStatistics],
  );

  const colItems = useMemo(
    () =>
      screeningsItems.map((item, index) => (
        <Col key={index} span={24}>
          {item}
        </Col>
      )),
    [screeningsItems],
  );

  return (
    <S.Wrapper>
      {mobileOnly && screeningsItems.length > 0 && (
        <S.ScreeningsCarousel
          arrows
          prevArrow={
            <CarouselArrow>
              <ArrowLeftOutlined />
            </CarouselArrow>
          }
          nextArrow={
            <CarouselArrow>
              <ArrowRightOutlined />
            </CarouselArrow>
          }
          slidesToShow={6}
          responsive={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 5,
              },
            },
          ]}
        >
          {screeningsItems}
        </S.ScreeningsCarousel>
      )}

      {isTablet && (
        <Row
          gutter={[
            { xs: 10, sm: 10, xl: 22 },
            { xs: 10, sm: 10, xl: 22 },
          ]}
        >
          <Col span={24}>
            <S.Title>{t('dashboard.latestScreenings.friends')}</S.Title>
          </Col>

          {colItems}
        </Row>
      )}
    </S.Wrapper>
  );
};
