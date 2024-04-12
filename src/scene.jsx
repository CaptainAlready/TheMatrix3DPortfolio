/*
Model: https://www.unrealengine.com/marketplace/en-US/product/31797bf6fa0545d590e3bb17d0968dea
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 matrixdesk.glb --transform 
Files: matrixdesk.glb [244.97MB] > TheMatrix3DPortfolio\public\matrixdesk-transformed.glb [11.74MB] (95%)

Model: https://sketchfab.com/3d-models/old-monitor-9748cdcaf09c4a1bbe4ffe1e7b4bfd52
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\Monitor.glb --transform 
Files: Monitor.glb [2.83MB] > TheMatrix3DPortfolio\public\Monitor-transformed.glb [153.56KB] (95%)

Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 matrixdesk-mobile.glb --transform 
Files: matrixdesk-mobile.glb [10.47MB] > TheMatrix3DPortfolio\public\matrixdesk-mobile-transformed.glb [1.17MB] (89%)

*/


import { useGLTF, Html, Bounds, useBounds, PresentationControls } from '@react-three/drei'
import { useRef } from 'react'
import { useThree } from '@react-three/fiber'

export function Scene() {
  const meshRef = useRef();
  const isMobile = window.innerWidth < 1200;

  function Matrix_Desk(props) {
    const { nodes, materials } = useGLTF('/matrixdesk-transformed.glb')
    return (
      <group {...props} dispose={null} >
        <mesh geometry={nodes.SM_NeosDesk_A01_N1.geometry} material={materials.MI_Desk_A01} position={[-1.022, 0.365, -1.775]} rotation={[0, 1.565, 0]} scale={0.841} />
        <mesh geometry={nodes.SM_Prop_ComputerKeyboard_A.geometry} material={materials.MI_ComputerKeyboard_A01} position={[-0.036, 1.362, -0.129]} rotation={[0, -1.426, 0]} scale={[1.221, 1.165, 1.173]} />
        <mesh geometry={nodes.SM_Prop_ComputerKeyboard_B.geometry} material={materials.MI_ComputerKeyboard_A02} position={[-0.329, 1.441, -1.426]} rotation={[0, -0.613, 0]} />
        <mesh geometry={nodes.SM_Prop_ComputerMonitor_B.geometry} material={materials.MI_ComputerMonitor_A02} position={[0.107, 1.365, 0.708]} rotation={[-3.011, -0.546, -3.074]} scale={1.09} />
        <mesh geometry={nodes.SM_ComputerSpeakers_B01_N1.geometry} material={materials.MI_ComputerSpeakers_A01} position={[0.425, 1.365, -0.596]} rotation={[0, -1.474, 0]} />
        <mesh geometry={nodes.Cube6.geometry} material={materials.MI_ComputerMouse_A01} position={[-0.05, 1.364, 0.289]} rotation={[0.42, -1.507, 0.424]} />
        <mesh geometry={nodes.SM_PlasticTray_B01_N2.geometry} material={materials.MI_Toolbox_Trays_A01} position={[-2.306, 1.364, 0.68]} rotation={[0, -1.097, 0]} scale={0.869} />
        <mesh geometry={nodes.SM_ComputerTower_A01_N4.geometry} material={materials.MI_ComputerPrinter_A01} position={[0.724, 0.369, -0.61]} rotation={[0, 0.087, 0]} scale={1.595} />
        <group position={[-1.471, 1.364, 1.08]} rotation={[-Math.PI, 0.017, -Math.PI]} scale={0.914}>
          <mesh geometry={nodes.SM_Toolbox_Prestaged_C01_N1.geometry} material={materials.MI_Toolbox_A01} />
          <mesh geometry={nodes.SM_Toolbox_Prestaged_C01_N1_1.geometry} material={materials.MI_Toolbox_Pack_A01} />
        </group>
        <mesh geometry={nodes.SM_DeskLamp_B01_N2.geometry} material={materials.MI_DeskLamp_B01} position={[-1.129, 1.364, 0.865]} rotation={[-3.134, -0.37, 3.128]} />
        <group position={[0.188, 0.365, -0.287]} rotation={[-Math.PI, 1.557, -Math.PI]}>
          <mesh geometry={nodes.SM_Desk_A01_N1.geometry} material={materials.MI_Desk_Cab_A02} />
          <mesh geometry={nodes.SM_Desk_A01_N1_1.geometry} material={materials.MI_Unit_A01} />
        </group>
        <mesh geometry={nodes.SM_Food_Leftover_AO1_N1.geometry} material={materials.MI_Food_Leftover_A01} position={[-0.648, 1.3, -1.653]} rotation={[0, -Math.PI / 9, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N4.geometry} material={materials.MI_DisksAndFloppys_A02} position={[0.214, 1.37, 0.169]} rotation={[0, -Math.PI / 6, 0]} />
        <mesh geometry={nodes.SM_Headset_A01_N2.geometry} material={materials.MI_Headset_A01} position={[0.076, 1.807, 0.654]} rotation={[0.085, -1.481, -0.077]} scale={0.85} />
        <mesh geometry={nodes.SM_BooksPamphlets_K01_N1.geometry} material={materials.MI_Post_It_A5_Books_A01} position={[-0.061, 1.364, 0.561]} rotation={[0, -0.282, 0]} />
        <mesh geometry={nodes.SM_ComputerParts_C05_N1.geometry} material={materials.MI_ComputerPrinter_C05} position={[-0.468, 1.551, 0.94]} rotation={[-Math.PI, 0.001, -Math.PI]} />
        <mesh geometry={nodes.SM_ComputerPrinter_A01_N1.geometry} material={materials.MI_ComputerPrinter_B01} position={[0.207, 1.384, -0.591]} rotation={[0.175, 0.67, 0]} scale={0.744} />
        <mesh geometry={nodes.SM_ComputerCards_A01_N2.geometry} material={materials.MI_ComputerCards_A01} position={[-0.075, 1.382, -1.024]} rotation={[0, 0.52, 0]} />
        <mesh geometry={nodes.SM_Record_FloppyDisk_G01_N2.geometry} material={materials.MI_DisksAndFloppys_B01} position={[-0.059, 1.423, -0.868]} rotation={[0, -0.656, 0]} />
        <mesh geometry={nodes.SM_Toolbox_Prestaged_A01_N1.geometry} material={materials.MI_Toolbox_PlasticBox_A01} position={[-1.589, 1.364, 0.753]} rotation={[-Math.PI, 1.405, -Math.PI]} scale={0.736} />
        <mesh geometry={nodes.SM_Record_Cassette_A01_N2.geometry} material={materials.MI_DisksAndFloppys_C01} position={[0.176, 1.406, -0.099]} rotation={[0, -1.378, 0]} />
        <mesh geometry={nodes.SM_Phone_A01_N2.geometry} material={materials.MI_Phone_A01} position={[-0.107, 1.376, -1.216]} rotation={[0, -0.783, 0]} scale={0.597} />
        <mesh geometry={nodes.SM_DeskLamp_A01_N1.geometry} material={materials.MI_DeskLamp_A01} position={[0.669, 1.443, 0.147]} rotation={[2.171, -1.316, 2.156]} scale={1.347} />
        <group position={[-0.193, 1.566, -1.71]} rotation={[Math.PI, -0.524, Math.PI]}>
          <mesh geometry={nodes.SM_Record_Stack_A02_N1.geometry} material={materials.MI_DisksAndFloppys_F01} />
          <mesh geometry={nodes.SM_Record_Stack_A02_N1_1.geometry} material={materials.MI_DisksAndFloppys_E01} />
        </group>
        <mesh geometry={nodes.SM_Record_Case_A01_N3.geometry} material={materials.MI_DisksAndFloppys_D01} position={[-1.775, 1.364, 0.706]} rotation={[Math.PI, -0.142, Math.PI]} />
        <mesh geometry={nodes.SM_DeskChair_A01_N1.geometry} material={materials.MI_DeskChair_A01} position={[-0.602, 0.372, 0.162]} rotation={[-Math.PI, 0.546, -Math.PI]} />
        <mesh geometry={nodes.Cube21.geometry} material={materials.MI_ComputerPrinter_A05} position={[0.062, 1.295, -1.45]} rotation={[0, -0.947, 0]} scale={0.817} />
        <mesh geometry={nodes.SM_BooksPamphlets_N01_N1.geometry} material={materials.MI_Thin_Magazines_CodingBooks_A01} position={[0.472, 1.399, -0.414]} scale={0.768} />
        <mesh geometry={nodes.SM_Wire_A01.geometry} material={materials.MI_CordsNWires_A01} position={[1.025, 0.369, -0.313]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N2.geometry} material={materials.MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N2} position={[0.221, 1.365, 0.13]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N2001.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N2.001']} position={[-1.344, 1.06, 0.204]} rotation={[0, -0.202, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N2002.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N2.002']} position={[-1.037, 1.092, -1.961]} rotation={[0, -0.299, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N2011.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N2.003']} position={[0.235, 1.365, 0.264]} rotation={[0, Math.PI / 6, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N2012.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N2.004']} position={[-0.134, 1.365, -0.529]} rotation={[0, -0.801, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N2013.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N2.005']} position={[0.267, 1.365, -0.432]} rotation={[0, -0.801, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1004.geometry} material={materials.MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1} position={[0.183, 1.365, -0.362]} rotation={[0, 0.436, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1005.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.001']} position={[0.014, 1.423, -1.629]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1016.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.008']} position={[-2.262, 1.774, 1.061]} rotation={[0, -0.396, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1017.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.009']} position={[-0.214, 1.474, 0.71]} rotation={[0, -0.369, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1018.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.010']} position={[-0.04, 1.47, -0.672]} rotation={[0, -0.419, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1006.geometry} material={materials.MI_Glass_01_SM_Record_CDCase_B01_N1} position={[-0.811, 1.714, 1.125]} rotation={[0, 0.419, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1007.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.002']} position={[0.347, 1.566, -0.987]} rotation={[0, 0.347, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1008.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.003']} position={[0.545, 1.365, -1.002]} rotation={[0, -0.228, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1009.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.004']} position={[0.473, 1.486, -0.432]} rotation={[0, -0.175, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1010.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.005']} position={[-1.5, 0.95, 0.183]} rotation={[0, 0.314, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1011.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.006']} position={[-0.262, 1.296, -1.196]} rotation={[0, -0.698, 0]} />
        <mesh geometry={nodes.SM_Record_CDCase_B01_N1015.geometry} material={materials['MI_DisksAndFloppys_A01_SM_Record_CDCase_B01_N1.007']} position={[-2.288, 1.714, 1.075]} rotation={[0, -0.535, 0]} />
        <instancedMesh args={[nodes.SM_ComputerTower_A01_N1.geometry, materials.MI_ComputerTower_A01, 8]} instanceMatrix={nodes.SM_ComputerTower_A01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_B01_N1.geometry, materials.MI_Magazines_Only_A01, 6]} instanceMatrix={nodes.SM_BooksPamphlets_B01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_ComputerParts_B05_N1.geometry, materials.MI_ComputerPrinter_B05, 5]} instanceMatrix={nodes.SM_ComputerParts_B05_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_L01_N1.geometry, materials.MI_Thin_Magazines_CodingBooks_A01, 21]} instanceMatrix={nodes.SM_BooksPamphlets_L01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_F01_N1.geometry, materials.MI_Post_It_A5_Books_A01, 14]} instanceMatrix={nodes.SM_BooksPamphlets_F01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_M01_N1.geometry, materials.MI_Thin_Magazines_CodingBooks_A01, 24]} instanceMatrix={nodes.SM_BooksPamphlets_M01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_A01_N1.geometry, materials.MI_Magazines_Only_A01, 6]} instanceMatrix={nodes.SM_BooksPamphlets_A01_N1.instanceMatrix} />
        {/* <instancedMesh args={[nodes.SM_BooksPamphlets_J01_N1.geometry, materials.MI_Post_It_A5_Books_A01, 12]} instanceMatrix={nodes.SM_BooksPamphlets_J01_N1.instanceMatrix} /> */}
        <instancedMesh args={[nodes.SM_ComputerCards_D01_N1.geometry, materials.MI_ComputerCards_A01, 5]} instanceMatrix={nodes.SM_ComputerCards_D01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_ComputerParts_A04_N1.geometry, materials.MI_ComputerParts_A04, 6]} instanceMatrix={nodes.SM_ComputerParts_A04_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_ComputerParts_C04_N1.geometry, materials.MI_ComputerParts_A04, 6]} instanceMatrix={nodes.SM_ComputerParts_C04_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_O01_N1.geometry, materials.MI_Thin_Magazines_CodingBooks_A01, 23]} instanceMatrix={nodes.SM_BooksPamphlets_O01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_E01_N1.geometry, materials.MI_Newspaper_WobblyMag_OpenMagTight_A01, 18]} instanceMatrix={nodes.SM_BooksPamphlets_E01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_BooksPamphlets_C01_N1.geometry, materials.MI_Newspaper_WobblyMag_OpenMagTight_A01, 18]} instanceMatrix={nodes.SM_BooksPamphlets_C01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_ComputerParts_B04_N1.geometry, materials.MI_ComputerParts_A04, 6]} instanceMatrix={nodes.SM_ComputerParts_B04_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_Record_Cassette_B01_N1.geometry, materials.MI_DisksAndFloppys_C01, 5]} instanceMatrix={nodes.SM_Record_Cassette_B01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_Food_Leftover_GO1_N1.geometry, materials.MI_Food_Leftover_A01, 10]} instanceMatrix={nodes.SM_Food_Leftover_GO1_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_Record_CDCase_B01_N1.geometry, materials.MI_DisksAndFloppys_A02, 6]} instanceMatrix={nodes.SM_Record_CDCase_B01_N1.instanceMatrix} />
        <instancedMesh args={[nodes.SM_Record_HardDrive_A01_N1.geometry, materials.MI_DisksAndFloppys_A02, 5]} instanceMatrix={nodes.SM_Record_HardDrive_A01_N1.instanceMatrix} />
      </group>
    )
  }


  function Matrix_DeskMobile(props) {
    const { nodes, materials } = useGLTF('/matrixdesk-mobile-transformed.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.SM_NeosDesk_A01_N1.geometry} material={materials.MI_Desk_A01} position={[-1.022, 0.365, -1.775]} rotation={[0, 1.565, 0]} scale={0.841} />
        <mesh geometry={nodes.SM_Prop_ComputerKeyboard_A.geometry} material={materials.MI_ComputerKeyboard_A01} position={[-0.036, 1.362, -0.129]} rotation={[0, -1.426, 0]} scale={[1.221, 1.165, 1.173]} />
        <mesh geometry={nodes.Cube6.geometry} material={materials.MI_ComputerMouse_A01} position={[-0.05, 1.364, 0.289]} rotation={[0.42, -1.507, 0.424]} />
        <mesh geometry={nodes.SM_ComputerTower_A01_N4.geometry} material={materials.MI_ComputerPrinter_A01} position={[0.724, 0.369, -0.61]} rotation={[0, 0.087, 0]} scale={1.595} />
        <group position={[0.188, 0.365, -0.287]} rotation={[-Math.PI, 1.557, -Math.PI]}>
          <mesh geometry={nodes.SM_Desk_A01_N1.geometry} material={materials.MI_Desk_Cab_A02} />
          <mesh geometry={nodes.SM_Desk_A01_N1_1.geometry} material={materials.MI_Unit_A01} />
        </group>
        <mesh geometry={nodes.SM_DeskChair_A01_N1.geometry} material={materials.MI_DeskChair_A01} position={[-0.602, 0.372, 0.162]} rotation={[-Math.PI, 0.546, -Math.PI]} />
        <mesh geometry={nodes.SM_BooksPamphlets_F01_N1012.geometry} material={materials.MI_Post_It_A5_Books_A01} position={[-0.52, 1.287, -1.839]} rotation={[-0.053, -0.865, 3.096]} scale={[0.719, 0.809, 0.65]} />
        <mesh geometry={nodes.SM_ComputerCards_D01_N1004.geometry} material={materials.MI_ComputerCards_A01} position={[0.164, 1.221, 0.26]} />
        <mesh geometry={nodes.SM_ComputerParts_C04_N1.geometry} material={materials.MI_ComputerParts_A04} position={[0.2, 1.365, -0.086]} rotation={[Math.PI, -1.53, Math.PI]} />
      </group>
    )
  }

  function Monitor(props) {
    const { nodes, materials } = useGLTF('/Monitor-transformed.glb')


    return (
      <group {...props} dispose={null} ref={meshRef}>
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[-1, 4, 0.01]} rotation={[0, 0, -Math.PI / 2]} scale={[1.513, 1.657, 2.054]}>
          {isMobile ? (
            <Html scale={3} className="content" rotation-x={-Math.PI / 2} rotation-z={Math.PI / 2} position={[33, 24, -36.5]} transform >
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <iframe className="iframe_monitor" width={"430px"} height={"450px"} src='https://captainalready.github.io/Portfolio2D' />
              </div>
            </Html>
          ) : (
            <Html scale={1} className="content" rotation-x={-Math.PI / 2} rotation-z={Math.PI / 2} position={[1.2, 25, -4.7]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <iframe className="iframe_monitor" width={"1300px"} height={"1320px"} src='https://captainalready.github.io/Portfolio2D' />
              </div>
            </Html>
          )
          }
        </mesh>
        <mesh geometry={nodes.pCube3_monitor_0.geometry} material={materials.monitor} scale={16} position={[2, -46, -10.4]} />
      </group>
    )
  }

  function SelectToZoom({ children }) {
    const api = useBounds();
    return (
      <group onClick={(e) => (e.stopPropagation(), api.refresh(meshRef.current).fit())}
        onPointerMissed={(e) => (api.to({ position: [5, 15, 150], target: [0, 0, 0] }))}>
        {children}
      </group>
    )
  }


  if (isMobile) {
    return (
      <PresentationControls
        global
        config={{ mass: 10, tension: 30 }}
        snap={{ mass: 10, tension: 100 }} >
        <Bounds damping={1.5} margin={1}>
          <SelectToZoom>
            <Matrix_DeskMobile scale={15} position={[3, -15, 5.2]} rotation={[0, Math.PI / 2, 0.1]} />
            <Monitor scale={0.08} rotation={[0, -Math.PI / 2 + 0.03, 0]} position={[0.4, 9.5, 1]} />
          </SelectToZoom>
        </Bounds>
      </PresentationControls>
    )
  }
  else {
    return (
      <PresentationControls
        global
        config={{ mass: 10, tension: 30 }}
        snap={{ mass: 10, tension: 100 }} >
        <Bounds damping={1.5} margin={1}>
          <SelectToZoom>
            <Matrix_Desk scale={15} position={[3, -15, 5.2]} rotation={[0, Math.PI / 2, 0.1]} />
            <Monitor scale={0.08} rotation={[0, -Math.PI / 2 + 0.03, 0]} position={[0.4, 9.5, 1]} />
          </SelectToZoom>
        </Bounds>
      </PresentationControls>
    )
  }
}
