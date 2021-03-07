import React from 'react';
import { Link } from "gatsby";
import styles from 'styled-components';

const Header = styles.header`
  margin: 0 auto;
  padding: 0 0.75rem;
  text-align: center; 
`;

const MainHeading = styles.h1`
  font-size: 2rem;
`;

const BackToHome = styles.span`
  color: #ff9f1a;
`;

export default function HeaderComponent({ title, isRoot })
{
  let header = isRoot ?  
  (<MainHeading>
    <Link to="/">{title}</Link>
  </MainHeading>)
  :
  (<Link to="/">
    <BackToHome>{title}</BackToHome>
  </Link>)
  ;

  return (
    <Header>{header}</Header>
  )
}