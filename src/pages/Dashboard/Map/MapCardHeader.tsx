import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import { dates } from '../../../constants/dates';

const today = dates.getToday();

export const MapCardHeader: React.FC = () => {
  return (
    <Wrapper>
      Map
      <Text>{today.toLocaleDateString()}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled(Typography.Text)`
  font-size: 0.75rem;
`;
