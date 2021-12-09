import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { CarouselArrow } from 'components/common/CarouselArrow/CarouselArrow';
import { ScreeningsProps } from '../interfaces';
import * as S from './MobileScreenings.styles';

export const MobileScreenings: React.FC<ScreeningsProps> = ({ screeningsItems }) => {
  return (
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
  );
};
