import styled from 'styled-components';
import background from '../src/assets/background.jpg'

export const Container = styled.div`
    background-image: url(${background});
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
