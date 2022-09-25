import Nullstack from 'nullstack';

export default class BorderPropPage extends Nullstack {
    render() {
        return (
            <>
                {/* No border */}
                <div bd="none" data-testid="noBorder" />
                <div border="none" data-testid="noBorder" />

                {/* Default border */}
                <div bd={true} data-testid="defaultBorder" />
                <div border={true} data-testid="defaultBorder" />

                {/* Border color */}
                <div bd={{ color: 'red' }} data-testid="borderColor" />
                <div border={{ color: 'red' }} data-testid="borderColor" />
                <div bdColor="red" data-testid="borderColor" />
                <div borderColor="red" data-testid="borderColor" />

                {/* Border radius (no unit) */}
                <div bd={{ radius: 1 }} data-testid="borderRadiusNoUnit" />
                <div border={{ radius: 1 }} data-testid="borderRadiusNoUnit" />
                <div bdRadius={1} data-testid="borderRadiusNoUnit" />
                <div borderRadius={1} data-testid="borderRadiusNoUnit" />
                <div radius={1} data-testid="borderRadiusNoUnit" />
                <div rounded={1} data-testid="borderRadiusNoUnit" />

                {/* Border radius (with unit) */}
                <div bd={{ radius: '30px' }} data-testid="borderRadius" />
                <div border={{ radius: '30px' }} data-testid="borderRadius" />
                <div bdRadius="30px" data-testid="borderRadius" />
                <div borderRadius="30px" data-testid="borderRadius" />
                <div radius="30px" data-testid="borderRadius" />
                <div rounded="30px" data-testid="borderRadius" />

                {/* Border radius (alias) */}
                <div rounded="2xl" data-testid="borderRadiusAlias" />
                <div rounded="full" data-testid="borderRadiusAlias" />
                <div rounded="lg" data-testid="borderRadiusAlias" />
                <div rounded="md" data-testid="borderRadiusAlias" />
                <div rounded="sm" data-testid="borderRadiusAlias" />
                <div rounded="xl" data-testid="borderRadiusAlias" />

                {/* Border
                <div border="none" data-testid="border" />
                <div border={true} data-testid="border" />
                <div border="green" data-testid="border" />
                <div border={{
                    color: 'red',
                    style: 'dashed',
                    width: 3
                }} data-testid="border" />
                <div border={{
                    color: 'blue',
                    style: 'dotted',
                    width: '1rem'
                }} data-testid="border" />

                {/* Border color */}
                <div border={{ color: 'red ' }} data-testid="borderColor" />
                <div borderColor="red" data-testid="borderColor" />

                {/* Border radius */}
                <div border={{ radius: '10px' }} data-testid="borderRadius" /> */}
            </>
        )
    }
}