import styled from 'styled-components';

export const Grid = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  justifyContent: 'center',
  textAlign: 'center',
});

export const GridColumn = styled.div({
  width: '300px',
  display: 'flex',
  flexWrap: 'wrap',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  margin: '10px',
  padding: '10px',
  height: '150px',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Paragraph = styled.p({
  margin: '2px',
  width: '100%',
});
