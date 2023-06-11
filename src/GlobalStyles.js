import styled from 'styled-components'


export const MainBody = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    height: 50px;
    width: 100%;
`

export const Container = styled.div`
    width: 90%;
    max-width: 1280px;
    margin: auto;
`

export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right};
`

export const FlexContaine = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    flex-direction: ${({ direction }) => direction};

    & > div {
        flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    }
`

export const Heading = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.white};
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => {
        switch(size) {
            case 'h1':
                return '4.5rem';
            case 'h2':
                return '3rem';
            case 'h3':
                return '2rem';
            case 'h4':
                return '1.2rem';
            default:
                return;
        }
    }};
`

export const BlueText = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
    
`

export const IconContainer = styled.div`
    font-size: ${({ size }) => size};
    cursor: pointer;
    color: ${( color, theme ) => }size;
`