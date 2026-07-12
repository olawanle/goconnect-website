import { useEffect, useRef } from "react"
import * as THREE from "three"

import { usePageVisibility, usePrefersReducedMotion } from "./hooks"

const NODE_POSITIONS: [number, number, number][] = [
  [0, 0, 0],
  [-4, 2, -1],
  [-4, -2, 0],
  [4, 2, -1],
  [4, -2, 0],
  [0, 4, -2],
  [0, -4, -1],
  [-2, 0, 2],
  [2, 0, 2],
  [-6, 0, -3],
  [6, 0, -3],
  [-2, 4, -3],
  [2, -4, -3],
  [0, 0, -5],
]

const CONNECTIONS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
  [0, 8],
  [1, 5],
  [1, 9],
  [2, 6],
  [2, 9],
  [3, 5],
  [3, 10],
  [4, 6],
  [4, 10],
  [5, 11],
  [6, 12],
  [7, 8],
  [9, 13],
  [10, 13],
  [11, 13],
  [12, 13],
  [1, 7],
  [2, 8],
  [3, 8],
  [4, 7],
]

export function CircuitOverlay({ active = true }: { active?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const visibleRef = usePageVisibility()

  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200)
    camera.position.set(0, 0, 12)

    const GREEN = new THREE.Color(0x39ff14)
    const GREEN_DIM = new THREE.Color(0x1a7a07)

    type NodeEntry = {
      mesh: THREE.Mesh | THREE.Line
      basePos?: [number, number, number]
      speed?: number
      phase?: number
      isRing?: boolean
    }

    const nodes: NodeEntry[] = []

    NODE_POSITIONS.forEach((pos, i) => {
      const size = i === 0 ? 0.25 : i < 5 ? 0.18 : 0.12
      const geo =
        i === 0
          ? new THREE.OctahedronGeometry(size, 1)
          : new THREE.OctahedronGeometry(size, 0)
      const mat = new THREE.MeshBasicMaterial({
        color: i === 0 ? GREEN : i < 5 ? GREEN : GREEN_DIM,
        transparent: true,
        opacity: i === 0 ? 1 : i < 5 ? 0.9 : 0.6,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...pos)
      scene.add(mesh)
      nodes.push({
        mesh,
        basePos: [...pos],
        speed: 0.3 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
      })
    })

    for (let r = 0; r < 3; r++) {
      const ringGeo = new THREE.TorusGeometry(0.5 + r * 0.4, 0.008, 8, 80)
      const ringMat = new THREE.MeshBasicMaterial({
        color: GREEN,
        transparent: true,
        opacity: 0.4 - r * 0.1,
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.rotation.x = Math.PI / 3 + r * 0.4
      ring.userData.rotSpeed = 0.008 + r * 0.004
      ring.userData.axis = r % 2 === 0 ? "z" : "y"
      scene.add(ring)
      nodes.push({ mesh: ring, isRing: true })
    }

    const lineMat = new THREE.LineBasicMaterial({
      color: GREEN,
      transparent: true,
      opacity: 0.25,
    })

    const linesMeshes: Array<{
      mesh: THREE.Line
      a: number
      b: number
    }> = []

    CONNECTIONS.forEach(([a, b]) => {
      const geo = new THREE.BufferGeometry()
      const pa = NODE_POSITIONS[a]
      const pb = NODE_POSITIONS[b]
      geo.setAttribute("position", new THREE.Float32BufferAttribute([...pa, ...pb], 3))
      const line = new THREE.Line(geo, lineMat.clone())
      scene.add(line)
      linesMeshes.push({ mesh: line, a, b })
    })

    const packets: Array<{
      mesh: THREE.Mesh
      a: number
      b: number
      t: number
      speed: number
    }> = []

    CONNECTIONS.slice(0, 16).forEach(([a, b]) => {
      const geo = new THREE.SphereGeometry(0.05, 6, 6)
      const mat = new THREE.MeshBasicMaterial({
        color: GREEN,
        transparent: true,
        opacity: 0.9,
      })
      const pkt = new THREE.Mesh(geo, mat)
      scene.add(pkt)
      packets.push({
        mesh: pkt,
        a,
        b,
        t: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
      })
    })

    const partCount = 600
    const partPos = new Float32Array(partCount * 3)
    for (let i = 0; i < partCount; i++) {
      partPos[i * 3] = (Math.random() - 0.5) * 40
      partPos[i * 3 + 1] = (Math.random() - 0.5) * 30
      partPos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 8
    }
    const partGeo = new THREE.BufferGeometry()
    partGeo.setAttribute("position", new THREE.BufferAttribute(partPos, 3))
    const partMat = new THREE.PointsMaterial({
      color: 0x39ff14,
      size: 0.05,
      transparent: true,
      opacity: 0.35,
    })
    scene.add(new THREE.Points(partGeo, partMat))

    let mx2 = 0
    let my2 = 0
    const onMouseMove = (e: MouseEvent) => {
      mx2 = (e.clientX / window.innerWidth - 0.5) * 2
      my2 = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    document.addEventListener("mousemove", onMouseMove)

    const resize = () => {
      const parent = canvas.parentElement
      const width = parent?.clientWidth ?? window.innerWidth
      const height = parent?.clientHeight ?? window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    resize()
    window.addEventListener("resize", resize)

    const clockStart = Date.now()
    let rafId = 0

    const animate = () => {
      rafId = requestAnimationFrame(animate)

      if (!visibleRef.current || !active) return

      const t = (Date.now() - clockStart) * 0.001

      camera.position.x += (mx2 * 1.5 - camera.position.x) * 0.04
      camera.position.y += (my2 * 1.0 - camera.position.y) * 0.04
      camera.lookAt(0, 0, 0)

      nodes.forEach((n, i) => {
        if (n.isRing && n.mesh instanceof THREE.Mesh) {
          const axis = n.mesh.userData.axis as string
          const rotSpeed = n.mesh.userData.rotSpeed as number
          if (axis === "z") n.mesh.rotation.z += rotSpeed
          else n.mesh.rotation.y += rotSpeed
          return
        }
        if (n.basePos && n.mesh instanceof THREE.Mesh) {
          n.mesh.position.y =
            n.basePos[1] + Math.sin(t * (n.speed ?? 0.3) + (n.phase ?? 0)) * 0.15
          n.mesh.rotation.y = t * 0.5
          if (i === 0) n.mesh.rotation.z = t * 0.3
        }
      })

      linesMeshes.forEach(({ mesh, a, b }) => {
        const nodeA = nodes[a]?.mesh
        const nodeB = nodes[b]?.mesh
        const pa =
          nodeA instanceof THREE.Mesh
            ? nodeA.position
            : new THREE.Vector3(...NODE_POSITIONS[a])
        const pb =
          nodeB instanceof THREE.Mesh
            ? nodeB.position
            : new THREE.Vector3(...NODE_POSITIONS[b])
        const pos = mesh.geometry.attributes.position.array as Float32Array
        pos[0] = pa.x
        pos[1] = pa.y
        pos[2] = pa.z
        pos[3] = pb.x
        pos[4] = pb.y
        pos[5] = pb.z
        mesh.geometry.attributes.position.needsUpdate = true
      })

      packets.forEach((pkt) => {
        pkt.t += pkt.speed
        if (pkt.t > 1) pkt.t = 0
        const nodeA = nodes[pkt.a]?.mesh
        const nodeB = nodes[pkt.b]?.mesh
        const pa =
          nodeA instanceof THREE.Mesh
            ? nodeA.position
            : new THREE.Vector3(...NODE_POSITIONS[pkt.a])
        const pb =
          nodeB instanceof THREE.Mesh
            ? nodeB.position
            : new THREE.Vector3(...NODE_POSITIONS[pkt.b])
        pkt.mesh.position.lerpVectors(pa, pb, pkt.t)
        const mat = pkt.mesh.material as THREE.MeshBasicMaterial
        mat.opacity = 0.9 - Math.abs(pkt.t - 0.5) * 1.6
      })

      lineMat.opacity = 0.2 + Math.sin(t * 0.8) * 0.05
      linesMeshes.forEach((l) => {
        const mat = l.mesh.material as THREE.LineBasicMaterial
        mat.opacity = 0.15 + Math.random() * 0.1
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", resize)

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points) {
          obj.geometry.dispose()
          const material = obj.material
          if (Array.isArray(material)) {
            material.forEach((m) => m.dispose())
          } else {
            material.dispose()
          }
        }
      })
      renderer.dispose()
    }
  }, [active, reducedMotion, visibleRef])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="pointer-events-none absolute inset-0 z-[1] size-full opacity-25"
      aria-hidden="true"
    />
  )
}
