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

                {/* Border style */}
                <div bd={{ style: 'dashed' }} data-testid="borderStyle" />
                <div border={{ style: 'dashed' }} data-testid="borderStyle" />
                <div bdStyle="dashed" data-testid="borderStyle" />
                <div borderStyle="dashed" data-testid="borderStyle" />

                {/* Border width */}
                <div bd={{ style: 'solid', width: 10 }} data-testid="borderWidth" />
                <div border={{ style: 'solid', width: 10 }} data-testid="borderWidth" />
                <div bdStyle="solid" bdWidth={10} data-testid="borderWidth" />
                <div borderStyle="solid" borderWidth={10} data-testid="borderWidth" />

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

                {/* Border right */}
                <div bd={{ right: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderRight" />
                <div border={{ right: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderRight" />
                <div bdRight={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderRight" />
                <div borderRight={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderRight" />

                {/* Border right (color) */}
                <div bd={{ right: { color: 'blue' } }} data-testid="borderRightColor" />
                <div border={{ right: { color: 'blue' } }} data-testid="borderRightColor" />
                <div bdRight={{ color: 'blue' }} data-testid="borderRightColor" />
                <div borderRight={{ color: 'blue' }} data-testid="borderRightColor" />
                <div bdRightColor="blue" data-testid="borderRightColor" />
                <div borderRightColor="blue" data-testid="borderRightColor" />

                {/* Border right (radius) */}
                <div bd={{ right: { radius: '30px' } }} data-testid="borderRightRadius" />
                <div border={{ right: { radius: '30px' } }} data-testid="borderRightRadius" />
                <div bdRight={{ radius: '30px' }} data-testid="borderRightRadius" />
                <div borderRight={{ radius: '30px' }} data-testid="borderRightRadius" />
                <div bdRightRadius="30px" data-testid="borderRightRadius" />
                <div borderRightRadius="30px" data-testid="borderRightRadius" />

                {/* Border right (style) */}
                <div bd={{ right: { style: 'dashed' } }} data-testid="borderRightStyle" />
                <div border={{ right: { style: 'dashed' } }} data-testid="borderRightStyle" />
                <div bdRight={{ style: 'dashed' }} data-testid="borderRightStyle" />
                <div borderRight={{ style: 'dashed' }} data-testid="borderRightStyle" />
                <div bdRightStyle="dashed" data-testid="borderRightStyle" />
                <div borderRightStyle="dashed" data-testid="borderRightStyle" />

                {/* Border right (width) */}
                <div bd={{ right: { style: 'solid', width: '10px' } }} data-testid="borderRightWidth" />
                <div border={{ right: { style: 'solid', width: '10px' } }} data-testid="borderRightWidth" />
                <div bdRight={{ style: 'solid', width: '10px' }} data-testid="borderRightWidth" />
                <div borderRight={{ style: 'solid', width: '10px' }} data-testid="borderRightWidth" />
                <div bdRightStyle="solid" bdRightWidth="10px" data-testid="borderRightWidth" />
                <div borderRightStyle="solid" borderRightWidth="10px" data-testid="borderRightWidth" />

                {/* Border top */}
                <div bd={{ top: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderTop" />
                <div border={{ top: { color: 'blue', style: 'dashed', width: 5 } }} data-testid="borderTop" />
                <div bdTop={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderTop" />
                <div borderTop={{ color: 'blue', style: 'dashed', width: 5 }} data-testid="borderTop" />

                {/* Border top (color) */}
                <div bd={{ top: { color: 'blue' } }} data-testid="borderTopColor" />
                <div border={{ top: { color: 'blue' } }} data-testid="borderTopColor" />
                <div bdTop={{ color: 'blue' }} data-testid="borderTopColor" />
                <div borderTop={{ color: 'blue' }} data-testid="borderTopColor" />
                <div bdTopColor="blue" data-testid="borderTopColor" />
                <div borderTopColor="blue" data-testid="borderTopColor" />

                {/* Border top (radius) */}
                <div bd={{ top: { radius: '30px' } }} data-testid="borderTopRadius" />
                <div border={{ top: { radius: '30px' } }} data-testid="borderTopRadius" />
                <div bdTop={{ radius: '30px' }} data-testid="borderTopRadius" />
                <div borderTop={{ radius: '30px' }} data-testid="borderTopRadius" />
                <div bdTopRadius="30px" data-testid="borderTopRadius" />
                <div borderTopRadius="30px" data-testid="borderTopRadius" />

                {/* Border top (style) */}
                <div bd={{ top: { style: 'dashed' } }} data-testid="borderTopStyle" />
                <div border={{ top: { style: 'dashed' } }} data-testid="borderTopStyle" />
                <div bdTop={{ style: 'dashed' }} data-testid="borderTopStyle" />
                <div borderTop={{ style: 'dashed' }} data-testid="borderTopStyle" />
                <div bdTopStyle="dashed" data-testid="borderTopStyle" />
                <div borderTopStyle="dashed" data-testid="borderTopStyle" />

                {/* Border top (width) */}
                <div bd={{ top: { style: 'solid', width: '10px' } }} data-testid="borderTopWidth" />
                <div border={{ top: { style: 'solid', width: '10px' } }} data-testid="borderTopWidth" />
                <div bdTop={{ style: 'solid', width: '10px' }} data-testid="borderTopWidth" />
                <div borderTop={{ style: 'solid', width: '10px' }} data-testid="borderTopWidth" />
                <div bdTopStyle="solid" bdTopWidth="10px" data-testid="borderTopWidth" />
                <div borderTopStyle="solid" borderTopWidth="10px" data-testid="borderTopWidth" />

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

                {/* Border X */}
                <div bd={{ x: { color: 'red', style: 'dashed', width: 10 } }} data-testid="borderX" />
                <div border={{ x: { color: 'red', style: 'dashed', width: 10 } }} data-testid="borderX" />
                <div bdX={{ color: 'red', style: 'dashed', width: 10 }} data-testid="borderX" />
                <div borderX={{ color: 'red', style: 'dashed', width: 10 }} data-testid="borderX" />

                {/* Border Y */}
                <div bd={{ y: { color: 'red', style: 'dashed', width: 10 } }} data-testid="borderY" />
                <div border={{ y: { color: 'red', style: 'dashed', width: 10 } }} data-testid="borderY" />
                <div bdY={{ color: 'red', style: 'dashed', width: 10 }} data-testid="borderY" />
                <div borderY={{ color: 'red', style: 'dashed', width: 10 }} data-testid="borderY" />
            </>
        )
    }
}