import React from 'react';

import {
  FooterContainer,
  FooterCopyright,
  FooterNavLinks,
  FooterNavItem,
  FooterNavLink,
  FooterContainerWrapper,
  FooterTop,
  FooterBottom,
  FooterNav,
} from './Footer.styled';

export interface Props {

}

const Footer: React.SFC<{}> = () => {

  return (
    <FooterContainerWrapper >
      <FooterContainer>
        <FooterTop>
          <FooterNav>
            <FooterNavLinks>
              <FooterNavItem>
                <FooterNavLink to={'support'}>Link to Support</FooterNavLink>
              </FooterNavItem>
            </FooterNavLinks>
          </FooterNav>
        </FooterTop>
        <FooterBottom>
          <FooterCopyright>{`© ${new Date().getFullYear()} BoardLikeTrello. Self React Education. All rights reserved`}</FooterCopyright>
        </FooterBottom>
      </FooterContainer>
    </FooterContainerWrapper>
  );
};

export default Footer;
