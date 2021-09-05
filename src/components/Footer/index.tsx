import { Heading } from 'components/Heading'
import { Logo } from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

export const Footer = () => (
  <S.Wrapper>
    <Logo color="blue" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>

        <a href="mailto:suporte@wongames.gg">suporte@wongames.gg</a>
        <a href="tel:+550000000000">+55 00 00000000</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>

          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/explore">
            <a>Explore</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Rua Lorem ipsum dolor</span>
        <span>123 - 00000000</span>
        <span>Lorem ipsum, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2021 © All rights reserved</S.Copyright>
  </S.Wrapper>
)
