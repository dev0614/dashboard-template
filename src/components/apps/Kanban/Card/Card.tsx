import React, { useState } from 'react';
import { MovableCardWrapper, Footer } from 'react-trello/dist/styles/Base';
import Tag from 'react-trello/dist/components/Card/Tag';
import { CardState, Tag as ITag } from '../interfaces';
import { ReactComponent as ThreeDots } from '../../../../assets/icons/three-dots.svg';
import * as S from './Card.styles';

interface CardProps {
  style: CSSStyleSheet;
  tagStyle: CSSStyleSheet;
  onClick: () => void;
  onDelete: () => void;
  onChange: (card: CardState) => void;
  className: string;
  id: string | number;
  title: string;
  description: string;
  tags: ITag[];
  cardDraggable: boolean;
  editable: boolean;
}

interface EditPopoverProps {
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onArchive: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const EditPopover: React.FC<EditPopoverProps> = ({ onDelete, onArchive }) => {
  return (
    <S.EditPopover>
      <S.EditPopoverLine onClick={onDelete}>Delete</S.EditPopoverLine>
      <S.EditPopoverLine onClick={onArchive}>Archivate</S.EditPopoverLine>
    </S.EditPopover>
  );
};

export const Card: React.FC<CardProps> = ({
  style,
  tagStyle,
  onClick,
  onDelete,
  onChange,
  className,
  id,
  title,
  description,
  tags,
  cardDraggable,
  editable,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isShowEditPopover, setIsShowEditPopover] = useState(false);

  const onArrowPress = () => {
    setIsExpanded(!isExpanded);
  };

  const onThreeDotsPress = () => {
    setIsShowEditPopover(!isShowEditPopover);
  };

  const onDeleteCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    onDelete();
    event.stopPropagation();
  };

  const updateCard = (card: CardState) => {
    onChange({ ...card, id });
  };

  return (
    <MovableCardWrapper data-id={id} onClick={onClick} style={style} className={className}>
      {title && (
        <S.CardHeader>
          <S.CardTitle draggable={cardDraggable}>
            {editable ? (
              <S.Input
                name="title"
                value={title}
                border
                placeholder="title"
                resize="vertical"
                onSave={(value: string) => updateCard({ title: value })}
              />
            ) : (
              title
            )}
          </S.CardTitle>
          <S.CardRightContent>
            <S.ArrowDownWrapper onClick={onArrowPress}>
              <S.ArrowDown isExpanded={isExpanded} />
            </S.ArrowDownWrapper>
            <S.ThreeDotsWrapper onClick={onThreeDotsPress}>
              <ThreeDots />
            </S.ThreeDotsWrapper>

            {isShowEditPopover && <EditPopover onDelete={onDeleteCard} onArchive={onDeleteCard} />}
          </S.CardRightContent>
        </S.CardHeader>
      )}
      {isExpanded && (
        <>
          <S.CardDetails>
            {editable ? (
              <S.Input
                value={description}
                border
                placeholder="description"
                resize="vertical"
                onSave={(value: string) => updateCard({ description: value })}
              />
            ) : (
              description
            )}
          </S.CardDetails>
          {tags && tags.length > 0 && (
            <Footer>
              {tags.map((tag) => (
                <Tag key={tag.title} {...tag} tagStyle={tagStyle} />
              ))}
            </Footer>
          )}
        </>
      )}
    </MovableCardWrapper>
  );
};
