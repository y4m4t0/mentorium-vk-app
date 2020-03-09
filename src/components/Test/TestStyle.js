import styled from 'styled-components'

export const TestStyle = styled.div 
`   
    grid-template-rows: auto 1fr;
    padding-bottom: 3rem;

    .test-content {
        display: grid;
        grid-template-rows: 1fr 2fr;
        grid-gap: 1rem;
    }
`
export const TestQuestion = styled.div
`
`
export const TestOptions = styled.div 
`   display: grid;
    grid-gap: 1rem;

    .test-option {
        background: #fbfbfb;
        border-radius: 10px;
        dipslay: grid;
        grid-gap: 1rem;
        padding: 1rem;
    }   
    .selected {
        background: yellow;
    } 
    .correct {
        background: green;
    }
    .incorrect {
        background: red;
    }
`