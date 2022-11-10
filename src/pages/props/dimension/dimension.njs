import Nullstack from 'nullstack';

// Props
import { sizeAliases } from '#props/dimension';

export default class DimensionPropPage extends Nullstack {
    render() {
        return (
            <div height="100vh">
                {/* Height (no unit) */}
                <div height={50} data-testid="heightNoUnit" />

                {/* Height (unit) */}
                <div height="1rem" data-testid="heightUnit" />
                <div height="15px" data-testid="heightUnit" />

                {/* Height (alias) */}
                {sizeAliases.map(({ alias }) => (
                    <div height={alias} data-testid="heightAlias" />
                ))}

                {/* Max height (no unit) */}
                <div maxHeight={50} data-testid="maxHeightNoUnit" />

                {/* Max height (unit) */}
                <div maxHeight="1rem" data-testid="maxHeightUnit" />
                <div maxHeight="15px" data-testid="maxHeightUnit" />

                {/* Max height (alias) */}
                {sizeAliases.map(({ alias }) => (
                    <div maxHeight={alias} data-testid="maxHeightAlias" />
                ))}

                {/* Max width (no unit) */}
                <div maxWidth={50} data-testid="maxWidthNoUnit" />

                {/* Max width (unit) */}
                <div maxWidth="1rem" data-testid="maxWidthUnit" />
                <div maxWidth="15px" data-testid="maxWidthUnit" />

                {/* Max width (alias) */}
                {sizeAliases.map(({ alias }) => (
                    <div maxWidth={alias} data-testid="maxWidthAlias" />
                ))}
            </div>
        )
    }
}