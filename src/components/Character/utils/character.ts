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

const applyOutfitColors = (character: THREE.Object3D) => {
  const outfitColors = new Map([
    ["bodyshirt", new THREE.Color("#d8c3a5")],
    ["pant", new THREE.Color("#090909")],
  ]);

  character.traverse((child) => {
    const normalizedName = child.name.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const outfitColor = outfitColors.get(normalizedName);

    if (!(child instanceof THREE.Mesh) || !outfitColor) return;

    const recolorMaterial = (material: THREE.Material) => {
      const outfitMaterial = material.clone();

      if (
        "color" in outfitMaterial &&
        outfitMaterial.color instanceof THREE.Color
      ) {
        outfitMaterial.color.copy(outfitColor);
      }

      if ("roughness" in outfitMaterial) {
        outfitMaterial.roughness = normalizedName === "pant" ? 0.88 : 0.74;
      }

      outfitMaterial.needsUpdate = true;
      return outfitMaterial;
    };

    child.material = Array.isArray(child.material)
      ? child.material.map(recolorMaterial)
      : recolorMaterial(child.material);
  });
};

const addMustache = (character: THREE.Object3D) => {
  const headBone = character.getObjectByName("spine006");
  if (!headBone) return;

  const mustache = new THREE.Group();
  mustache.name = "KayqueMustache";
  mustache.position.set(0, 0.68, 1.27);
  mustache.rotation.x = -0.08;

  const material = new THREE.MeshStandardMaterial({
    color: "#21140e",
    roughness: 0.92,
    metalness: 0,
  });
  const geometry = new THREE.CapsuleGeometry(0.045, 0.52, 6, 20);
  const mustacheMesh = new THREE.Mesh(geometry, material);
  mustacheMesh.rotation.z = Math.PI / 2;
  mustacheMesh.scale.set(1, 1, 0.42);
  mustacheMesh.frustumCulled = false;

  mustache.add(mustacheMesh);
  headBone.add(mustache);
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
            applyOutfitColors(character);
            addMustache(character);
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
