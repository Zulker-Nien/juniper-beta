import { PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import Store from "../store";
import { useMediaQuery } from "react-responsive";
import { MeshStandardMaterial } from "three";

const ModelLoad = (props: any) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  var mass = 0;
  var tension = 0;
  {
    isTabletOrMobile ? (mass = 0) : (mass = 2);
  }
  {
    isTabletOrMobile ? (tension = 0) : (tension = 100);
  }
  const store = useContext(Store);
  const { color, layer } = store;
  const { scene } = useGLTF("PoloShirt.glb");
  console.log(scene);
  const ref = useRef<any>();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.PI / 7 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  let testColor = new MeshStandardMaterial({
    color: color,
    alphaToCoverage: true,
    clipIntersection: true,
    clipShadows: true,
    emissiveIntensity: 0,
    side: 2,
  });
  let Sleeves = new MeshStandardMaterial({
    color: color,
    alphaToCoverage: true,
    clipIntersection: true,
    clipShadows: true,
    emissiveIntensity: 0,
    side: 2,
  });

  let Torso = new MeshStandardMaterial({
    color: color,
    alphaToCoverage: true,
    clipIntersection: true,
    clipShadows: true,
    emissiveIntensity: 0,
    side: 2,
  });

  const modelParts = [
    // Sleeves
    { childID: `${layer == "Sleeves" && "trial_13_1"}`, mtl: Sleeves },
    // { childID: "trial_13_2", mtl: coloronly },
    // { childID: "trial_13_3", mtl: testColor },
    // Torso
    { childID: `${layer == "Torso" && "trial_13_4"}`, mtl: Torso },
    // { childID: "trial_13_5", mtl: coloronly },
    // { childID: "trial_13_6", mtl: coloronly },
    // { childID: "trial_13_7", mtl: coloronly },
    // { childID: "trial_13_8", mtl: coloronly },
    // { childID: "trial_13_9", mtl: coloronly },
    // { childID: "trial_13_10", mtl: coloronly },
    { childID: "trial_13_11", mtl: testColor },
  ];

  const mapColor = (parent: any, type: any, mtl: any) => {
    parent.traverse((o: any) => {
      if (o.isMesh) {
        if (o.name === type) {
          o.material = mtl;

          // const mat = coloronly.color
          // o.material.color.setHex(mtl)
          console.log(o.material);
        }
      }
    });
  };
  if (scene) {
    for (let object of modelParts) {
      mapColor(scene, object.childID, object.mtl);
    }
  }

  return (
    <>
      <group ref={ref} dispose={null} {...props}>
        <PresentationControls
          global
          config={{ mass: mass, tension: tension }}
          // snap={{ mass: 4, tension: 1500 }}
          rotation={[-0.3, 0, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Infinity, Infinity]}
          // zoom={2}
        >
          <primitive object={scene} />
        </PresentationControls>
      </group>
    </>
  );
};

export default ModelLoad;
