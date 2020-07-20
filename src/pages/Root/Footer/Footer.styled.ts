import styled, { media, css, theme } from '../../../theme';
import { Link } from 'react-router-dom';

export const FooterContainerWrapper = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 0 24px;

  ${media.desktopM`
    padding: 0 24px;
  `}

  ${media.xxxlarge`
    padding: 0 24px;
  `}
`;

export const FooterContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const FooterCopyright = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #3d3d3d;
  padding-bottom: 24px;
`;

export const FooterNav = styled.div`
  padding: 0 0;
  flex: 1 1;
`;

export const FooterNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  ${media.desktop`
    justify-content: center;
    flex-direction: row;
  `};
`;

export const FooterNavItem = styled.li`
  display: flex;
  flex-direction: row;
  padding-right: 15px;
  color: ${theme.blueDarkened10};
`;

export const FooterNavLink = styled(Link)`
  display: inline-block;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #3d3d3d;

  &:hover {
    color: ${theme.orangeLightened10};
  }
`;
