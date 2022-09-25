import Nullstack from 'nullstack';

export default class BGPropPage extends Nullstack {
    render() {
        return (
            <>
                {/* BG color */}
                <div bg={{ color: 'red' }} data-testid="bgColor" />
                <div background={{ color: 'red' }} data-testid="bgColor" />
                <div bgColor="red" data-testid="bgColor" />
                <div backgroundColor="red" data-testid="bgColor" />

                {/* BG attachment */}
                <div bg={{ attachment: 'fixed' }} data-testid="bgAttachment" />
                <div background={{ attachment: 'fixed' }} data-testid="bgAttachment" />
                <div bgAttachment="fixed" data-testid="bgAttachment" />
                <div backgroundAttachment="fixed" data-testid="bgAttachment" />

                {/* BG blend */}
                <div bg={{ blend: 'lighten' }} data-testid="bgBlend" />
                <div bg={{ blendMode: 'lighten' }} data-testid="bgBlend" />
                <div background={{ blend: 'lighten' }} data-testid="bgBlend" />
                <div background={{ blendMode: 'lighten' }} data-testid="bgBlend" />
                <div bgBlend="lighten" data-testid="bgBlend" />
                <div bgBlendMode="lighten" data-testid="bgBlend" />
                <div backgroundBlend="lighten" data-testid="bgBlend" />
                <div backgroundBlendMode="lighten" data-testid="bgBlend" />

                {/* BG clip */}
                <div bg={{ clip: 'border-box' }} data-testid="bgClip" />
                <div background={{ clip: 'border-box' }} data-testid="bgClip" />
                <div bgClip="border-box" data-testid="bgClip" />
                <div backgroundClip="border-box" data-testid="bgClip" />

                {/* BG image */}
                <div bg={{ image: 'url(/image.png)' }} data-testid="bgImage" />
                <div background={{ image: 'url(/image.png)' }} data-testid="bgImage" />
                <div bgImage="url(/image.png)" data-testid="bgImage" />
                <div backgroundImage="url(/image.png)" data-testid="bgImage" />

                {/* BG position */}
                <div bg={{ pos: 'center center' }} data-testid="bgPosition" />
                <div background={{ pos: 'center center' }} data-testid="bgPosition" />
                <div bg={{ position: 'center center' }} data-testid="bgPosition" />
                <div background={{ position: 'center center' }} data-testid="bgPosition" />
                <div bgPos="center center" data-testid="bgPosition" />
                <div backgroundPos="center center" data-testid="bgPosition" />
                <div bgPosition="center center" data-testid="bgPosition" />
                <div backgroundPosition="center center" data-testid="bgPosition" />

                {/* BG repeat */}
                <div bg={{ repeat: 'repeat-y' }} data-testid="bgRepeat" />
                <div background={{ repeat: 'repeat-y' }} data-testid="bgRepeat" />
                <div bgRepeat="repeat-y" data-testid="bgRepeat" />
                <div backgroundRepeat="repeat-y" data-testid="bgRepeat" />

                {/* BG size */}
                <div bg={{ size: 'cover' }} data-testid="bgSize" />
                <div background={{ size: 'cover' }} data-testid="bgSize" />
                <div bgSize="cover" data-testid="bgSize" />
                <div backgroundSize="cover" data-testid="bgSize" />
            </>
        )
    }
}