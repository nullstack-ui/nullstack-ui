import Nullstack from 'nullstack';

export default class Grid extends Nullstack {
    render() {
        return (
            <>
                <div
                    grid={{
                        columns: 3,
                        gap: 10,
                        value: true
                    }}
                    mb={2}>
                    {Array(5).fill('').map((_, index) => <Column index={index} colSpan={index === 3 ? 3 : 'auto'} />)}
                </div>

                <div
                    grid={{
                        columns: 6,
                        gap: 10,
                        value: true
                    }}
                    mb={2}>
                    <Column
                        colSpan={4}
                        colStart={2} />

                    <Column
                        colEnd={3}
                        colStart={1} />

                    <Column
                        colSpan={2}
                        colEnd={7}
                    />

                    <Column
                        colSpan={6}
                        colStart={0}
                        _hover={{
                            colSpan: 4,
                            colStart: 2
                        }} />
                </div>

                <div
                    grid={{
                        // columns: 6,
                        flow: 'column',
                        gap: 10,
                        rows: 4,
                        value: true
                    }}>
                    {Array(20).fill('').map((_, index) => <Column index={index} colSpan={index === 3 ? 3 : 'auto'} rowSpan={index === 1 ? 3 : 'auto'} />)}
                </div>
            </>
        )
    }
}

const Column = ({
    index,
    ...rest
}) => (
    <div
        {...rest}
        border={{
            color: {
                darken: true,
                value: 'yellow'
            }
        }}
        color="yellow"
        p={1}>
        Column {index != null ? index + 1 : ''}
    </div>
)