import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { EChartsOption } from 'echarts';
import { Chart } from '../../../common/Chart/Chart';
import theme, { media } from '../../../../styles/theme';
import { pieChartData } from '../../../../constants/healthChartData';

export const HealthChart: React.FC = () => {
  const isMobile = useMediaQuery({ query: media.xs });
  const isTablet = useMediaQuery({ query: media.md });
  const isDesktop = useMediaQuery({ query: media.xl });
  const isBigScreen = useMediaQuery({ query: media.xxl });

  const option = {
    color: [
      theme.colors.chartsErrorGradient,
      theme.colors.chartsAccentGradient,
      theme.colors.chartsPrimaryGradient,
      theme.colors.basicLight,
    ],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      left: '50%',
      top: 'center',
      orient: 'vertical',
      itemWidth: (isBigScreen && 20) || 13,
      itemHeight: (isBigScreen && 20) || 13,
      itemGap: (isBigScreen && 25) || (isTablet && 10) || 5,
      icon: (isBigScreen && 'roundRect') || 'circle',
      textStyle: {
        padding: 10,
        width: (isBigScreen && 320) || (isDesktop && 170) || (isTablet && 220) || 130,
        overflow: 'break',
        rich: {
          a: {
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontWeight: 500,
            padding: [0, 0, 5, 0],
          },
          b: {
            fontFamily: 'Montserrat',
            fontSize: (isBigScreen && 12) || 10,
          },
        },
      },
      formatter: (name: string) => {
        let target;

        for (let i = 0; i < pieChartData.length; i++) {
          if (pieChartData[i].name === name) {
            target = pieChartData[i].description;
          }
        }

        return `{a|${name}}\n\n{b|${target}}`;
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['25%', 'center'],
        avoidLabelOverlap: false,
        labelLine: false,
        label: {
          show: true,
          position: 'center',
          formatter: (label: EChartsOption) => {
            return `${label.value} percent`;
          },
          backgroundColor: theme.colors.secondary,
          color: theme.colors.primary,
          fontSize: (isBigScreen && 24) || 16,
        },
        data: pieChartData,
        emphasis: {
          label: {
            show: true,
            backgroundColor: theme.colors.secondary,
            color: theme.colors.primary,
          },
        },
      },
    ],
  };

  return <Chart option={option} height={isMobile && !isBigScreen && 250} />;
};
