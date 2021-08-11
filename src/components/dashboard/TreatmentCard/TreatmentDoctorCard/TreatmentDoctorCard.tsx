import React from 'react';
import { Moment } from 'moment';
import { treatmentData } from '../../../../constants/treatment';
import * as S from './TreatmentDoctorCard.styles';

interface TreatmentDoctorCardProps {
  date: Moment;
}

export const TreatmentDoctorCard: React.FC<TreatmentDoctorCardProps> = ({ date }) => {
  const treatment = treatmentData.find((tr) => tr.date === date.format('DD.MM.YY'));

  return (
    <S.Wrapper>
      {treatment ? (
        <>
          <S.ProfileWrapper>
            <S.Avatar src={treatment?.doctorImgUrl} shape="square" />
            <S.InfoWrapper>
              <S.InfoItem>
                <S.Title>Doctor</S.Title>
                <S.Text>{treatment.doctorName}</S.Text>
              </S.InfoItem>
              <S.InfoItem>
                <S.Title>Speciality</S.Title>
                <S.Text>{treatment.doctorSpeciality}</S.Text>
              </S.InfoItem>
              <S.InfoItem>
                <S.Rating disabled defaultValue={treatment.doctorRating} />
                <S.Text>{treatment.doctorRating}</S.Text>
              </S.InfoItem>
            </S.InfoWrapper>
          </S.ProfileWrapper>
          <S.DiagnosisWrapper>
            <S.Title>Diagnosis</S.Title>
            <S.Text>{treatment.diagnosis}</S.Text>
          </S.DiagnosisWrapper>
          <S.VisitWrapper>
            <S.Title>Upcoming visits</S.Title>
            <S.Text>{treatment.date}</S.Text>
          </S.VisitWrapper>
          <S.Button type="primary">Ask the doctor a question</S.Button>
        </>
      ) : (
        <S.Title>There is no treatments at this day.</S.Title>
      )}
    </S.Wrapper>
  );
};
