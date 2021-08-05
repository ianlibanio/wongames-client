import { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { Logo } from 'components/Logo'
import { Button } from 'components/Button'

import * as S from './styles'
import { MediaMatch } from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Abrir o menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Início</S.MenuLink>
          <S.MenuLink href="#">Explorar</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Pesquisar" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Abrir o carrinho de compras" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign In</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label="Fechar o menu"
          onClick={() => setIsOpen(false)}
        />
        <S.MenuNav>
          <S.MenuLink href="#">Início</S.MenuLink>
          <S.MenuLink href="#">Explorar</S.MenuLink>

          {username && (
            <>
              <S.MenuLink href="#">Minha conta</S.MenuLink>
              <S.MenuLink href="#">Lista de desejos</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Entrar
            </Button>
            <span>ou</span>
            <S.CreateAccount href="#" title="Sign In">
              Crie sua conta
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
