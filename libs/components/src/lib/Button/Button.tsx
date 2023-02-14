import { forwardRef, ReactNode } from 'react';
import styled from '@emotion/styled';

type NBButtonKind = 'primary' | 'secondary';

export interface NBButtonProps {
  children?: ReactNode;
  kind?: NBButtonKind;
}

const StyledButton = styled.button<NBButtonProps>`
  appearance: none;
  background-color: ${(props) => (props.kind === 'primary' ? 'teal' : 'navy')};
  border: none;
  border-radius: 0.25rem;
  color: white;
  padding: 0.75rem;
`;

export const NBButton = forwardRef<HTMLButtonElement, NBButtonProps>(
  (
    {
     
     
     
      children,
      kind = 'primary',

      ...props
    },
    ref
  ) => (
    <StyledButton kind={kind} {...props} ref={ref}>
      {children}
    </StyledButton>
  )
);
