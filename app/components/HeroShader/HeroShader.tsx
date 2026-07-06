"use client";

import { useEffect, useRef } from "react";

export default function HeroShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") as WebGLRenderingContext | null;

    if (!gl) {
      console.warn("WebGL is not supported.");
      return;
    }

    function syncSize() {
      const w = canvas?.clientWidth || 1280;
      const h = canvas?.clientHeight || 720;

      if (!canvas) return;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }

    syncSize();

    const vs = `
attribute vec2 a_position;
varying vec2 v_texCoord;

void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

    const fs = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texCoord;

vec3 permute(vec3 x){
    return mod(((x*34.0)+1.0)*x,289.0);
}

float snoise(vec2 v){
    const vec4 C = vec4(
        0.211324865405187,
        0.366025403784439,
       -0.577350269189626,
        0.024390243902439
    );

    vec2 i = floor(v + dot(v,C.yy));
    vec2 x0 = v - i + dot(i,C.xx);

    vec2 i1 = (x0.x > x0.y)
        ? vec2(1.0,0.0)
        : vec2(0.0,1.0);

    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;

    i = mod(i,289.0);

    vec3 p = permute(
        permute(i.y + vec3(0.0,i1.y,1.0))
        + i.x + vec3(0.0,i1.x,1.0)
    );

    vec3 m = max(
        0.5 - vec3(
            dot(x0,x0),
            dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)
        ),
        0.0
    );

    m *= m;
    m *= m;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;

    m *= 1.79284291400159 -
        0.85373472095314 *
        (a0*a0 + h*h);

    vec3 g;

    g.x = a0.x*x0.x + h.x*x0.y;
    g.yz = a0.yz*x12.xz + h.yz*x12.yw;

    return 130.0 * dot(m,g);
}

void main(){

    vec2 uv = v_texCoord;

    vec3 emerald = vec3(0.023,0.306,0.231);
    vec3 cream = vec3(0.976,0.976,0.941);

    float n1 = snoise(uv*2.0 + u_time*0.1);
    float n2 = snoise(uv*4.0 - u_time*0.05);

    float combined = n1*0.5 + n2*0.5;

    vec3 color = mix(
        emerald,
        cream,
        combined*0.3 + 0.2
    );

    color += 0.02 * sin(u_time + uv.x*5.0);

    gl_FragColor = vec4(color,1.0);
}
`;

    function createShader(type: number, source: string) {
      const shader = gl?.createShader(type);

      if (!shader) return null;

      gl?.shaderSource(shader, source);
      gl?.compileShader(shader);

      if (!gl?.getShaderParameter(shader, gl?.COMPILE_STATUS)) {
        console.error(gl?.getShaderInfoLog(shader));
        gl?.deleteShader(shader);
        return null;
      }

      return shader;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fs);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();

    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();

    if (!buffer) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "a_position");

    gl.enableVertexAttribArray(position);

    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const nx = (event.clientX - rect.left) / rect.width;
      const ny = 1 - (event.clientY - rect.top) / rect.height;

      mouse.x = nx * canvas.width;
      mouse.y = ny * canvas.height;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame = 0;

    const render = (time: number) => {
      syncSize();

      gl.viewport(0, 0, canvas.width, canvas.height);

      if (uTime) {
        gl.uniform1f(uTime, time * 0.001);
      }

      if (uResolution) {
        gl.uniform2f(uResolution, canvas.width, canvas.height);
      }

      if (uMouse) {
        gl.uniform2f(uMouse, mouse.x, mouse.y);
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMouseMove);

      resizeObserver?.disconnect();

      gl.deleteBuffer(buffer);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
}
