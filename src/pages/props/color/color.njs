import Nullstack from 'nullstack';

export default class ColorPropPage extends Nullstack {
    render() {
        return (
            <>
                {/* BG color (hex) */}
                <div bg={{ color: '#FF0000' }} data-testid="bgColorHex" />
                <div background={{ color: '#FF0000' }} data-testid="bgColorHex" />
                <div bgColor="#FF0000" data-testid="bgColorHex" />
                <div backgroundColor="#FF0000" data-testid="bgColorHex" />

                {/* BG color (name) */}
                <div bg={{ color: 'red' }} data-testid="bgColorName" />
                <div background={{ color: 'red' }} data-testid="bgColorName" />
                <div bgColor="red" data-testid="bgColorName" />
                <div backgroundColor="red" data-testid="bgColorName" />

                {/* BG color (value) */}
                <div bg={{ color: { value: 'blue' } }} data-testid="bgColorValue" />
                <div background={{ color: { value: 'blue' } }} data-testid="bgColorValue" />
                <div bgColor={{ value: 'blue' }} data-testid="bgColorValue" />
                <div backgroundColor={{ value: 'blue' }} data-testid="bgColorValue" />

                {/* BG color (value/darken) */}
                <div bg={{ color: { darken: .5, value: 'blue' } }} data-testid="bgColorValueDarken" />
                <div background={{ color: { darken: .5, value: 'blue' } }} data-testid="bgColorValueDarken" />
                <div bgColor={{ darken: .5, value: 'blue' }} data-testid="bgColorValueDarken" />
                <div backgroundColor={{ darken: .5, value: 'blue' }} data-testid="bgColorValueDarken" />

                {/* BG color (value/faded) */}
                <div bg={{ color: { faded: .5, value: 'blue' } }} data-testid="bgColorValueFaded" />
                <div background={{ color: { faded: .5, value: 'blue' } }} data-testid="bgColorValueFaded" />
                <div bgColor={{ faded: .5, value: 'blue' }} data-testid="bgColorValueFaded" />
                <div backgroundColor={{ faded: .5, value: 'blue' }} data-testid="bgColorValueFaded" />

                {/* BG color (value/lighten) */}
                <div bg={{ color: { lighten: .5, value: 'blue' } }} data-testid="bgColorValueLighten" />
                <div background={{ color: { lighten: .5, value: 'blue' } }} data-testid="bgColorValueLighten" />
                <div bgColor={{ lighten: .5, value: 'blue' }} data-testid="bgColorValueLighten" />
                <div backgroundColor={{ lighten: .5, value: 'blue' }} data-testid="bgColorValueLighten" />

                {/* BG color (value/opacity) */}
                <div bg={{ color: { opacity: .5, value: 'blue' } }} data-testid="bgColorValueOpacity" />
                <div background={{ color: { opacity: .5, value: 'blue' } }} data-testid="bgColorValueOpacity" />
                <div bgColor={{ opacity: .5, value: 'blue' }} data-testid="bgColorValueOpacity" />
                <div backgroundColor={{ opacity: .5, value: 'blue' }} data-testid="bgColorValueOpacity" />

                {/* Color (hex) */}
                <div color="#FF0000" data-testid="colorHex" />

                {/* Color (name) */}
                <div color="red" data-testid="colorName" />

                {/* Color (value) */}
                <div color={{ value: '#FF0000' }} data-testid="colorValue" />

                {/* Color (value/darken) */}
                <div color={{ darken: .5, value: '#FF0000' }} data-testid="colorValueDarken" />

                {/* Color (value/faded) */}
                <div color={{ faded: .5, value: '#FF0000' }} data-testid="colorValueFaded" />

                {/* Color (value/lighten) */}
                <div color={{ lighten: .5, value: '#FF0000' }} data-testid="colorValueLighten" />

                {/* Color (value/opacity) */}
                <div color={{ opacity: .5, value: '#FF0000' }} data-testid="colorValueOpacity" />
            </>
        )
    }
}