import React, { useEffect, useRef } from 'react';
import { Cpu, ShieldCheck, Code, Award, Trophy, User, Layers, FileCheck, Orbit } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const nodeCount = 38;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulse: number;
    }> = [];

    const mouse = { x: -1000, y: -1000, radius: 100 };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.5,
        color: Math.random() > 0.4 ? '#7895B2' : '#A5ABB3',
        pulse: Math.random() * Math.PI
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          n.x -= (dx / dist) * force * 2;
          n.y -= (dy / dist) * force * 2;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const distBetween = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (distBetween < 95) {
            const alpha = (1 - distBetween / 95) * 0.25;
            ctx.strokeStyle = `rgba(120, 149, 178, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();

            // Synaptic electrical signal pulse packet
            if (Math.sin(n.pulse) > 0.88) {
              const packetRatio = (Math.sin(n.pulse) - 0.88) / 0.12;
              const px = n.x + (n2.x - n.x) * packetRatio;
              const py = n.y + (n2.y - n.y) * packetRatio;
              ctx.fillStyle = '#F2F3F4';
              ctx.beginPath();
              ctx.arc(px, py, 1.3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[500px] rounded-xl p-1 bg-[#202328] border border-[#343940]">
      <div className="w-full h-full min-h-[560px] rounded-lg bg-[#17191C] relative overflow-hidden flex flex-col justify-between p-4 sm:p-5 border border-[#343940]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair z-0" />

        {/* Top Telemetry Status Header */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#343940]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7895B2]"></span>
            <span className="font-mono text-xs font-semibold text-[#F2F3F4] tracking-wider">3D ENGINE LIVE</span>
            <span className="text-[10px] font-mono text-[#A5ABB3] hidden sm:inline">// TELEMETRY HUD</span>
          </div>
          <div className="font-mono text-[10px] text-[#7895B2] bg-[#202328] border border-[#343940] px-2.5 py-1 rounded-md flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7895B2]" />
            <span>SHP // VERIFIED CANDIDATE</span>
          </div>
        </div>

        {/* Main Pilot Profile Summary Card */}
        <div className="relative z-10 my-auto py-2">
          <div className="bg-[#25292E] rounded-xl border border-[#343940] p-4 sm:p-5 space-y-3.5">
            
            {/* Candidate Bio Header */}
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-lg bg-[#202328] border border-[#343940] flex items-center justify-center font-display font-bold text-[#7895B2] text-sm shrink-0">
                SHP
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display font-bold text-[#F2F3F4] text-base leading-tight">{portfolioData.personal.fullName}</h3>
                  <span className="text-[10px] font-mono text-[#7895B2] bg-[#202328] border border-[#343940] px-1.5 py-0.5 rounded">2nd Year</span>
                </div>
                <p className="text-xs text-[#7895B2] font-mono mt-0.5">B.Tech Artificial Intelligence &amp; Data Science</p>
                <p className="text-[11px] text-[#A5ABB3] truncate">{portfolioData.personal.collegeName}</p>
              </div>
            </div>

            {/* Verified Resume Summary Statement */}
            <p className="text-[11px] text-[#A5ABB3] leading-relaxed italic bg-[#202328] border-l-2 border-[#7895B2] px-3 py-2 rounded-r">
              &ldquo;{portfolioData.personal.resumeSummary}&rdquo;
            </p>

            {/* Academic Performance Telemetry (Real Verified Numbers) */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#202328] border border-[#343940] rounded-lg p-2 text-center">
                <div className="text-[10px] font-mono text-[#A5ABB3]">B.TECH CGPA</div>
                <div className="text-base font-bold font-display text-[#7895B2] leading-tight">8.12</div>
                <div className="text-[9px] font-mono text-[#A5ABB3]">Sem 1: 8.10 | Sem 2: 8.14</div>
              </div>
              <div className="bg-[#202328] border border-[#343940] rounded-lg p-2 text-center">
                <div className="text-[10px] font-mono text-[#A5ABB3]">12TH HSC</div>
                <div className="text-base font-bold font-display text-[#F2F3F4] leading-tight">92.60%</div>
                <div className="text-[9px] font-mono text-[#A5ABB3]">Science Stream</div>
              </div>
              <div className="bg-[#202328] border border-[#343940] rounded-lg p-2 text-center">
                <div className="text-[10px] font-mono text-[#A5ABB3]">10TH SSC</div>
                <div className="text-base font-bold font-display text-[#F2F3F4] leading-tight">92.80%</div>
                <div className="text-[9px] font-mono text-[#A5ABB3]">Distinction Range</div>
              </div>
            </div>

            {/* Real Project Highlights */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-[#7895B2] tracking-wider uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5"><Cpu className="w-3 h-3 text-[#7895B2]" /> REAL BUILDS (RESUME VERIFIED)</span>
                <span className="text-[#A5ABB3]">2 COMPLETED</span>
              </div>
              <div className="bg-[#202328] border border-[#343940] rounded-lg p-2 flex items-center justify-between text-xs">
                <div>
                  <div className="font-medium text-[#F2F3F4]">Face Mask Detection System</div>
                  <div className="text-[10px] text-[#A5ABB3] font-mono">Python • OpenCV • TensorFlow • Keras</div>
                </div>
                <span className="text-[10px] font-mono text-[#7895B2] bg-[#25292E] border border-[#343940] px-2 py-0.5 rounded">Computer Vision</span>
              </div>
              <div className="bg-[#202328] border border-[#343940] rounded-lg p-2 flex items-center justify-between text-xs">
                <div>
                  <div className="font-medium text-[#F2F3F4]">Automatic Water Dispenser</div>
                  <div className="text-[10px] text-[#A5ABB3] font-mono">IR Proximity Sensor • 5V Relay • DC Pump</div>
                </div>
                <span className="text-[10px] font-mono text-[#7895B2] bg-[#25292E] border border-[#343940] px-2 py-0.5 rounded">IoT Automation</span>
              </div>
            </div>

            {/* Verified Credentials & Badges */}
            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
              <a href={portfolioData.personal.codeChefUrl} target="_blank" rel="noreferrer" className="pointer-events-auto inline-flex items-center gap-1 text-[10px] font-mono text-[#F2F3F4] bg-[#202328] hover:border-[#7895B2] border border-[#343940] px-2 py-0.5 rounded transition-colors">
                <Code className="w-3 h-3 text-[#7895B2]" /> CodeChef: {portfolioData.personal.codeChefUsername}
              </a>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#A5ABB3] bg-[#202328] border border-[#343940] px-2 py-0.5 rounded">
                <Award className="w-3 h-3 text-[#7895B2]" /> 11 Certifications
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#A5ABB3] bg-[#202328] border border-[#343940] px-2 py-0.5 rounded">
                <Trophy className="w-3 h-3 text-[#7895B2]" /> District Sports Player
              </span>
            </div>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-2 pt-1 pointer-events-auto">
              <a href="#about" className="flex-1 py-1.5 text-center rounded-lg bg-[#202328] hover:bg-[#25292E] border border-[#343940] hover:border-[#7895B2] text-[#F2F3F4] text-xs font-mono font-medium transition-all flex items-center justify-center gap-1">
                <User className="w-3 h-3 text-[#7895B2]" /> Full Bio
              </a>
              <a href="#projects" className="flex-1 py-1.5 text-center rounded-lg bg-[#202328] hover:bg-[#25292E] border border-[#343940] hover:border-[#7895B2] text-[#F2F3F4] text-xs font-mono font-medium transition-all flex items-center justify-center gap-1">
                <Layers className="w-3 h-3 text-[#7895B2]" /> Projects
              </a>
              <a href={`./${portfolioData.personal.resumeFileName}`} download={portfolioData.personal.resumeFileName} target="_blank" rel="noreferrer" className="flex-1 py-1.5 text-center rounded-lg bg-[#202328] hover:bg-[#25292E] border border-[#343940] hover:border-[#7895B2] text-[#7895B2] text-xs font-mono font-medium transition-all flex items-center justify-center gap-1">
                <FileCheck className="w-3 h-3 text-[#7895B2]" /> Resume
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Telemetry Status Footer */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#343940] text-[10px] font-mono text-[#A5ABB3]">
          <div className="flex items-center gap-1.5 text-[#7895B2]">
            <Orbit className="w-3.5 h-3.5" />
            <span className="tracking-wider">SYNAPTIC NEURAL MESH</span>
          </div>
          <div className="text-[#A5ABB3] tracking-wider">
            HOVER TO STIMULATE
          </div>
        </div>

      </div>
    </div>
  );
};
