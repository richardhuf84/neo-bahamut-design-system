import styled from '@emotion/styled';
import { NBButton } from '@neo-bahamut-ds/components';

const StyledPage = styled.div`
  .page {
  }
`;

export const Index = () => (
  <StyledPage>
    <NBButton>Primary button</NBButton>
    <NBButton kinds="secondary">Secondary button</NBButton>
  </StyledPage>
);

export default Index;
