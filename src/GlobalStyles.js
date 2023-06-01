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

export const Containe = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap }) => gap};
    flex-direction: ${({ direction }) => direction};

    > div {
        flex: ${({ fullWidthChild }) => fullWidthChild && 1};
    }
`

export const Heading = styled(PaddingContainer)``