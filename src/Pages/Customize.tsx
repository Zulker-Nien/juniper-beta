import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Header from "../Components/Header";
import SvgComponent from "../Components/LandingBg";
import ModelLoad from "../Components/ModelLoad";
import "../Home.scss";
const Customize = () => {
  const [controlClicked, setControlClicked] = useState(0);
  return (
    <div className="InterractiveContainer">
      <Header />
      <div className="modelContainer">
        <Suspense fallback={null}>
          <Canvas flat camera={{ fov: 75, position: [0, 0, 9] }}>
            <ambientLight position={[0, 1, 0]} intensity={0.1} />
            <spotLight position={[0, 10, 10]} intensity={1} />
            <ModelLoad scale={0.1} position={[0, -1, 0]} />
            <ContactShadows
              position={[0, -3, 0]}
              opacity={1}
              scale={10}
              blur={2.5}
              far={4}
              key={undefined}
              onPointerMissed={undefined}
              quaternion={undefined}
              attach={undefined}
              args={undefined}
              children={undefined}
              onUpdate={undefined}
              up={undefined}
              rotation={undefined}
              matrix={undefined}
              layers={undefined}
              dispose={undefined}
              clear={undefined}
              raycast={undefined}
              onClick={undefined}
              onContextMenu={undefined}
              onDoubleClick={undefined}
              onPointerUp={undefined}
              onPointerDown={undefined}
              onPointerOver={undefined}
              onPointerOut={undefined}
              onPointerEnter={undefined}
              onPointerLeave={undefined}
              onPointerMove={undefined}
              onPointerCancel={undefined}
              onWheel={undefined}
              castShadow={true}
              visible={undefined}
              type={undefined}
              isGroup={undefined}
              id={undefined}
              uuid={undefined}
              name={undefined}
              parent={undefined}
              modelViewMatrix={undefined}
              normalMatrix={undefined}
              matrixWorld={undefined}
              matrixAutoUpdate={undefined}
              matrixWorldNeedsUpdate={undefined}
              receiveShadow={undefined}
              frustumCulled={undefined}
              renderOrder={undefined}
              animations={undefined}
              userData={undefined}
              customDepthMaterial={undefined}
              customDistanceMaterial={undefined}
              isObject3D={undefined}
              onBeforeRender={undefined}
              onAfterRender={undefined}
              applyMatrix4={undefined}
              applyQuaternion={undefined}
              setRotationFromAxisAngle={undefined}
              setRotationFromEuler={undefined}
              setRotationFromMatrix={undefined}
              setRotationFromQuaternion={undefined}
              rotateOnAxis={undefined}
              rotateOnWorldAxis={undefined}
              rotateX={undefined}
              rotateY={undefined}
              rotateZ={undefined}
              translateOnAxis={undefined}
              translateX={undefined}
              translateY={undefined}
              translateZ={undefined}
              localToWorld={undefined}
              worldToLocal={undefined}
              lookAt={undefined}
              add={undefined}
              remove={undefined}
              removeFromParent={undefined}
              getObjectById={undefined}
              getObjectByName={undefined}
              getObjectByProperty={undefined}
              getWorldPosition={undefined}
              getWorldQuaternion={undefined}
              getWorldScale={undefined}
              getWorldDirection={undefined}
              traverse={undefined}
              traverseVisible={undefined}
              traverseAncestors={undefined}
              updateMatrix={undefined}
              updateMatrixWorld={undefined}
              updateWorldMatrix={undefined}
              toJSON={undefined}
              clone={undefined}
              copy={undefined}
              addEventListener={undefined}
              hasEventListener={undefined}
              removeEventListener={undefined}
              dispatchEvent={undefined}
            />
          </Canvas>
        </Suspense>
      </div>
      <div className="controlContainer">
        <div
          className={
            controlClicked === 1 ? "controlButtonClicked" : "controlButton"
          }
          onClick={() => {
            setControlClicked(1);
          }}
        >
          Patterns
        </div>
        <div
          className={
            controlClicked === 2 ? "controlButtonClicked" : "controlButton"
          }
          onClick={() => {
            setControlClicked(2);
          }}
        >
          Color
        </div>
        <div
          className={
            controlClicked === 3 ? "controlButtonClicked" : "controlButton"
          }
          onClick={() => {
            setControlClicked(3);
          }}
        >
          Logos
        </div>
      </div>
    </div>
  );
};

export default Customize;
