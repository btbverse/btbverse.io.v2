import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Background = () => {
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
          zIndex: 1,
        },
        detectRetina: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 50,
                smooth: 500,
              },
            },
          },
          modes: {
            bubble: {
              distance: 140,
              duration: 100,
              opacity: 1,
              size: 10,
              speed: 2,
            },
            connect: {
              distance: 700,
              lineLinked: {
                opacity: 1,
              },
              radius: 160,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 300,
              duration: 0.1,
            },
            slow: {
              active: false,
              radius: 0,
              factor: 1,
            },
          },
        },
        particles: {
          color: {
            value: ["#6F2DBD" , "#A663CC", "#B298DC", "#B8D0EB", "#B9FAF8"],
          },
          lineLinked: {
            blink: false,
            color: "random",
            consent: false,
            distance: 100,
            enable: true,
            opacity: 0.8,
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
              area: 2000,
            },
            limit: 200,
            value: 600,
          },
          opacity: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 2,
              sync: false,
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
              minimumValue: 5,
              speed: 4,
              sync: true,
            },
            random: true,
            value: 15,
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
        background: {
          position: "10% 10%",
          repeat: "no-repeat",
          size: "cover",
          color: "#040404"
        },
      }}
    />
  );
};
