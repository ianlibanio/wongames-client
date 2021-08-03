import { ReactNode, MouseEvent } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
  onClick?: () => (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {icon}
    {children && <span>{children}</span>}
  </S.Wrapper>
)