export default function Tabs({ children, buttons, Container }) {
    return (<>
        <Container>
            {buttons}
        </Container>
        {children}
    </>
    );
}