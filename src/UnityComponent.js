import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityComponent = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./aquarium/b2nc.loader.js",
        dataUrl: "./aquarium/b2nc.data",
        frameworkUrl: "./aquarium/b2nc.framework.js",
        codeUrl: "./aquarium/b2nc.wasm",
    });

    return (
        <div >
          <Unity style={{ width: '100vw', height: '80vh'}} unityProvider={unityProvider} />
        </div>
      );
};

export default UnityComponent;
