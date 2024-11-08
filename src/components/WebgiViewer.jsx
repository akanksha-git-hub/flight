import React, { useCallback, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
} from "webgi"
import { scrollAnimation } from '../lib/scroll-animation'

gsap.registerPlugin (ScrollTrigger)

export default function WebgiViewer() {

    const canvasRef = useRef(null)

    const memoizedScrollAnimation = useCallback((position, target, onUpdate) => {
        if(position && target && onUpdate) {
            scrollAnimation(position, target, onUpdate)
        }
    }, [])

    const setupViewer = useCallback(async() => {
        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const camera = viewer.scene.activeCamera
        const position = camera.position
        const target = camera.target

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)
        viewer.renderer.refreshPipeline()
    
        // Import and add a GLB file.
        await manager.addFromPath("ww1_flying_aircraft.glb")   

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true

        viewer.scene.activeCamera.setCameraOptions( { controlsEnabled: false })

        window.scrollTo(0, 0)

        let needsUpdate = true

        const onUpdate = () => {
            needsUpdate = true
            viewer.setDirty() // camera and the viewer needs to be updated
        }

        viewer.addEventListener('preFrame', () => {
            if(needsUpdate) {
                camera.positionTargetUpdated(true)
                needsUpdate= false
            }
        })
        memoizedScrollAnimation(position, target, onUpdate)
    }, [])

    useEffect(() => {
        setupViewer()
    }, [])

  return (
    <div id='webgi-canvas-container'>
        <canvas 
            id='webgi-canvas'
            ref={canvasRef}
        />
    </div>
  )
}
