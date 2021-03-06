import * as S from "./style";

interface ModalProps {
  show: boolean;
  closeShow: () => void;
}

const OrderModal: React.FC<ModalProps> = ({ show, closeShow }) => {
  if (!show) {
    return null;
  }

  const onConfirm = () => {
    closeShow();
  };

  return (
    <S.Wrapper>
      <S.Overlay onClick={closeShow} />
      <S.Container>
        <S.Title>
          주문 내역
          <S.Close onClick={closeShow}>X</S.Close>
        </S.Title>
        <S.OrderDesc>
          <span>메뉴 : 아메리카노, 카페라떼</span>
          <span>금액 : 9800 원</span>
          <span>주소 : 광주 광산구 상무대로 312</span>
        </S.OrderDesc>
        <S.BtnWrapper>
          <button onClick={onConfirm}>확인</button>
          <button onClick={closeShow}>취소</button>
        </S.BtnWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default OrderModal;
