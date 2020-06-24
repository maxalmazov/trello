import styled, { media, css, theme } from '../../../theme';

export const Header = styled.section`
  width: 100vw;
  background-color: ${theme.blue};
  height: 80px;
  display: flex;
  align-items: center;
  z-index: 5;
  padding: 0 24px;

  ${media.desktopM`
    padding: 0 24px;
  `}

  ${media.xxxlarge`
    padding: 0 276px;
  `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;
