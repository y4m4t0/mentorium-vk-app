import styled from 'styled-components'

export const CourseStyle = styled.div 
`
    padding: 0.5rem;
    background: #fbfbfb;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-radius: 10px;
    grid-gap: 1rem;
    margin-bottom 1rem;

    .card {
        display: grid;
        grid-template-columns: 1fr auto;
    }
    
    .title {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 10px;
    }

    .progress {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        grid-gap: 0.5rem;
    }

`
export const TestStyle = styled.div 
`
    padding: 0.5rem;
    background: #fbfbfb;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-radius: 10px;
    grid-gap: 1rem;
    margin-bottom 1rem; 
      
    .progress {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        grid-gap: 0.5rem;
    }
`
export const CourseVerification = styled.div
`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    ${props => props.onDelete ?
        `
            left: 0;
            opacity: 1;
            transition: opacity 0.3s;
        `
    :
        `
            opacity: 0;
            transition: opacity 0.3s;
            left: -1000px;
        `
    }
`