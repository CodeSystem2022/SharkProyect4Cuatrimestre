import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Link } from '@mui/material';

const Footer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.caption.fontSize,
  textAlign: 'center',
}));

const Links = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const LinkItem = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: theme.typography.caption.fontSize,
  textDecoration: 'none',
}));

const FooterComponent = () => {
  return (
    <Footer>
      <Copyright>Copyright © 2023</Copyright>
      <Links>
        <LinkItem href="#">Inicio </LinkItem>
        <LinkItem href="#">Acerca de </LinkItem>
        <LinkItem href="#">Contacto </LinkItem>
      </Links>
    </Footer>
  );
};

export default FooterComponent;
