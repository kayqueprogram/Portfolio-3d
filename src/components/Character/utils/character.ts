import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const applySkinTone = (character: THREE.Object3D) => {
  const skinMeshes = new Set(["plane007", "ear001", "hand", "neck"]);
  const skinColor = new THREE.Color("#8b5a3c");

  character.traverse((child) => {
    const normalizedName = child.name.replace(/[^a-z0-9]/gi, "").toLowerCase();

    if (!(child instanceof THREE.Mesh) || !skinMeshes.has(normalizedName)) return;

    const recolorMaterial = (material: THREE.Material) => {
      const skinMaterial = material.clone();

      if ("color" in skinMaterial && skinMaterial.color instanceof THREE.Color) {
        skinMaterial.color.copy(skinColor);
      }

      skinMaterial.needsUpdate = true;
      return skinMaterial;
    };

    child.material = Array.isArray(child.material)
      ? child.material.map(recolorMaterial)
      : recolorMaterial(child.material);
  });
};

const applyBrownEyes = async (character: THREE.Object3D) => {
  const brownEyesTexture = await new THREE.TextureLoader().loadAsync(
    "/images/eyes-brown.webp"
  );
  brownEyesTexture.flipY = false;
  brownEyesTexture.colorSpace = THREE.SRGBColorSpace;

  character.traverse((child) => {
    const normalizedName = child.name.replace(/[^a-z0-9]/gi, "").toLowerCase();

    if (!(child instanceof THREE.Mesh) || normalizedName !== "eyes001") return;

    const replaceEyeTexture = (material: THREE.Material) => {
      const eyeMaterial = material.clone();

      if ("map" in eyeMaterial) {
        eyeMaterial.map = brownEyesTexture;
      }

      eyeMaterial.needsUpdate = true;
      return eyeMaterial;
    };

    child.material = Array.isArray(child.material)
      ? child.material.map(replaceEyeTexture)
      : replaceEyeTexture(child.material);
  });
};

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            applySkinTone(character);
            await applyBrownEyes(character);
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = false;
                child.receiveShadow = false;
                mesh.frustumCulled = true;
                if (mesh.material && !Array.isArray(mesh.material)) {
                  (mesh.material as THREE.ShaderMaterial).precision = 'mediump';
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
