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

                {/* Border bottom */}
                <div bd={{ bottom: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderBottom" />
                <div border={{ bottom: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderBottom" />
                <div bdBottom={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderBottom" />
                <div borderBottom={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderBottom" />

                {/* Border bottom (color) */}
                <div bd={{ bottom: { color: 'blue' } }} data-testid="borderBottomColor" />
                <div border={{ bottom: { color: 'blue' } }} data-testid="borderBottomColor" />
                <div bdBottom={{ color: 'blue' }} data-testid="borderBottomColor" />
                <div borderBottom={{ color: 'blue' }} data-testid="borderBottomColor" />
                <div bdBottomColor="blue" data-testid="borderBottomColor" />
                <div borderBottomColor="blue" data-testid="borderBottomColor" />

                {/* Border bottom (radius) */}
                <div bd={{ bottom: { radius: '30px' } }} data-testid="borderBottomRadius" />
                <div border={{ bottom: { radius: '30px' } }} data-testid="borderBottomRadius" />
                <div bdBottom={{ radius: '30px' }} data-testid="borderBottomRadius" />
                <div borderBottom={{ radius: '30px' }} data-testid="borderBottomRadius" />
                <div bdBottomRadius="30px" data-testid="borderBottomRadius" />
                <div borderBottomRadius="30px" data-testid="borderBottomRadius" />

                {/* Border bottom (style) */}
                <div bd={{ bottom: { style: 'dashed' } }} data-testid="borderBottomStyle" />
                <div border={{ bottom: { style: 'dashed' } }} data-testid="borderBottomStyle" />
                <div bdBottom={{ style: 'dashed' }} data-testid="borderBottomStyle" />
                <div borderBottom={{ style: 'dashed' }} data-testid="borderBottomStyle" />
                <div bdBottomStyle="dashed" data-testid="borderBottomStyle" />
                <div borderBottomStyle="dashed" data-testid="borderBottomStyle" />

                {/* Border bottom (width) */}
                <div bd={{ bottom: { style: 'solid', width: '10px' } }} data-testid="borderBottomWidth" />
                <div border={{ bottom: { style: 'solid', width: '10px' } }} data-testid="borderBottomWidth" />
                <div bdBottom={{ style: 'solid', width: '10px' }} data-testid="borderBottomWidth" />
                <div borderBottom={{ style: 'solid', width: '10px' }} data-testid="borderBottomWidth" />
                <div bdBottomStyle="solid" bdBottomWidth="10px" data-testid="borderBottomWidth" />
                <div borderBottomStyle="solid" borderBottomWidth="10px" data-testid="borderBottomWidth" />

                {/* Border left */}
                <div bd={{ left: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderLeft" />
                <div border={{ left: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderLeft" />
                <div bdLeft={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderLeft" />
                <div borderLeft={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderLeft" />

                {/* Border left (color) */}
                <div bd={{ left: { color: 'blue' } }} data-testid="borderLeftColor" />
                <div border={{ left: { color: 'blue' } }} data-testid="borderLeftColor" />
                <div bdLeft={{ color: 'blue' }} data-testid="borderLeftColor" />
                <div borderLeft={{ color: 'blue' }} data-testid="borderLeftColor" />
                <div bdLeftColor="blue" data-testid="borderLeftColor" />
                <div borderLeftColor="blue" data-testid="borderLeftColor" />

                {/* Border left (radius) */}
                <div bd={{ left: { radius: '30px' } }} data-testid="borderLeftRadius" />
                <div border={{ left: { radius: '30px' } }} data-testid="borderLeftRadius" />
                <div bdLeft={{ radius: '30px' }} data-testid="borderLeftRadius" />
                <div borderLeft={{ radius: '30px' }} data-testid="borderLeftRadius" />
                <div bdLeftRadius="30px" data-testid="borderLeftRadius" />
                <div borderLeftRadius="30px" data-testid="borderLeftRadius" />

                {/* Border left (style) */}
                <div bd={{ left: { style: 'dashed' } }} data-testid="borderLeftStyle" />
                <div border={{ left: { style: 'dashed' } }} data-testid="borderLeftStyle" />
                <div bdLeft={{ style: 'dashed' }} data-testid="borderLeftStyle" />
                <div borderLeft={{ style: 'dashed' }} data-testid="borderLeftStyle" />
                <div bdLeftStyle="dashed" data-testid="borderLeftStyle" />
                <div borderLeftStyle="dashed" data-testid="borderLeftStyle" />

                {/* Border left (width) */}
                <div bd={{ left: { style: 'solid', width: '10px' } }} data-testid="borderLeftWidth" />
                <div border={{ left: { style: 'solid', width: '10px' } }} data-testid="borderLeftWidth" />
                <div bdLeft={{ style: 'solid', width: '10px' }} data-testid="borderLeftWidth" />
                <div borderLeft={{ style: 'solid', width: '10px' }} data-testid="borderLeftWidth" />
                <div bdLeftStyle="solid" bdLeftWidth="10px" data-testid="borderLeftWidth" />
                <div borderLeftStyle="solid" borderLeftWidth="10px" data-testid="borderLeftWidth" />

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

                {/* Border radius (bottom) */}
                <div bd={{ radius: { bottom: '30px' } }} data-testid="borderRadiusBottom" />
                <div border={{ radius: { bottom: '30px' } }} data-testid="borderRadiusBottom" />
                <div bdRadius={{ bottom: '30px' }} data-testid="borderRadiusBottom" />
                <div borderRadius={{ bottom: '30px' }} data-testid="borderRadiusBottom" />
                <div radius={{ bottom: '30px' }} data-testid="borderRadiusBottom" />
                <div rounded={{ bottom: '30px' }} data-testid="borderRadiusBottom" />

                {/* Border radius (left) */}
                <div bd={{ radius: { left: '30px' } }} data-testid="borderRadiusLeft" />
                <div border={{ radius: { left: '30px' } }} data-testid="borderRadiusLeft" />
                <div bdRadius={{ left: '30px' }} data-testid="borderRadiusLeft" />
                <div borderRadius={{ left: '30px' }} data-testid="borderRadiusLeft" />
                <div radius={{ left: '30px' }} data-testid="borderRadiusLeft" />
                <div rounded={{ left: '30px' }} data-testid="borderRadiusLeft" />

                {/* Border radius (right) */}
                <div bd={{ radius: { right: '30px' } }} data-testid="borderRadiusRight" />
                <div border={{ radius: { right: '30px' } }} data-testid="borderRadiusRight" />
                <div bdRadius={{ right: '30px' }} data-testid="borderRadiusRight" />
                <div borderRadius={{ right: '30px' }} data-testid="borderRadiusRight" />
                <div radius={{ right: '30px' }} data-testid="borderRadiusRight" />
                <div rounded={{ right: '30px' }} data-testid="borderRadiusRight" />

                {/* Border radius (top) */}
                <div bd={{ radius: { top: '30px' } }} data-testid="borderRadiusTop" />
                <div border={{ radius: { top: '30px' } }} data-testid="borderRadiusTop" />
                <div bdRadius={{ top: '30px' }} data-testid="borderRadiusTop" />
                <div borderRadius={{ top: '30px' }} data-testid="borderRadiusTop" />
                <div radius={{ top: '30px' }} data-testid="borderRadiusTop" />
                <div rounded={{ top: '30px' }} data-testid="borderRadiusTop" />
            </>
        )
    }
}