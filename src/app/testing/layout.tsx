"use client"
import { Container, ContainerTests } from "./style"


export default function TestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <Container>
        <ContainerTests>
            {children}
        </ContainerTests>
        </Container>

    )
}