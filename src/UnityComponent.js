import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityComponent = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "./aquarium/aquarium.loader.js",
        dataUrl: "./aquarium/aquarium.data",
        frameworkUrl: "./aquarium/aquarium.framework.js",
        codeUrl: "./aquarium/aquarium.wasm",
    });

    return (
        <div >
          <Unity style={{ width: '100vw', height: '80vh'}} unityProvider={unityProvider} />
        </div>
      );
};

export default UnityComponent;
