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

const BackToHome = styles.h4`
  margin: 0;
  padding: 0;
  color: #ff3838;
  text-decoration: none;
  text-align: left;
`;

export default function HeaderComponent({ title, isRoot })
{
  let header = isRoot ?  
  (<MainHeading>
    <Link to="/">{title}</Link>
  </MainHeading>)
  :
  (<BackToHome>
    <Link to="/">{title + ' >'}</Link>
  </BackToHome>)
  ;

  return (
    <Header>{header}</Header>
  )
}