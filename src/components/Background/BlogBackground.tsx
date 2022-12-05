import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const BlogBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
        },
        detectRetina: false,
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#6F2DBD", "#A663CC", "#B298DC", "#B8D0EB", "#B9FAF8"],
          },
          lineLinked: {
            blink: false,
            color: "random",
            consent: false,
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 3,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 100,
                y: 100,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: false,
              area: 20,
            },
            limit: 20,
            value: 60,
          },
          opacity: {
            animation: {
              enable: false,
              minimumValue: 1,
              speed: 1,
              sync: true,
            },
            random: false,
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            animation: {
              enable: true,
              minimumValue: 3,
              speed: 3,
              sync: false,
            },
            random: true,
            value: 20,
          },
        },
        polygon: {
          draw: {
            enable: true,
            lineColor: "rgba(255,255,255,0.1)",
            lineWidth: 2,
          },
          enable: false,
          move: {
            radius: 50,
          },
          position: {
            x: 30,
            y: 10,
          },
          inline: {
            arrangement: "equidistant",
          },
          scale: 20,
          type: "inline",
        },
      }}
    />
  );
};
