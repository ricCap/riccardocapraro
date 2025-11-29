import { useEffect, useState } from 'react';

export default function LinkedInBanner() {
  const [dataUrl, setDataUrl] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  
  const petrol = '#264e4a';
  const amber = '#fa9436';
  const width = 1584;
  const height = 396;
  
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = petrol;
    ctx.fillRect(0, 0, width, height);
    
    ctx.strokeStyle = amber;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(79, 79);
    ctx.lineTo(79, 317);
    ctx.stroke();
    ctx.globalAlpha = 1;
    
    ctx.fillStyle = amber;
    ctx.textAlign = 'right';
    ctx.font = '700 72px Inter, Segoe UI, system-ui, sans-serif';
    ctx.fillText('From Paper', 1457, 170);
    ctx.fillText('to Production', 1457, 250);
    
    setDataUrl(canvas.toDataURL('image/png'));
  }, []);
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = 'linkedin-banner-riccardo-capraro.png';
    link.href = dataUrl;
    link.click();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };
  
  return (
    <div className="p-4">
      <p className="text-sm text-gray-500 mb-2">LinkedIn Banner (1584 x 396 px)</p>
      
      {dataUrl && (
        <img 
          src={dataUrl} 
          alt="LinkedIn Banner Preview"
          className="w-full rounded-lg shadow-lg mb-4"
        />
      )}
      
      <button
        onClick={handleDownload}
        className="px-6 py-3 rounded-lg font-semibold text-white transition-all"
        style={{ backgroundColor: downloaded ? '#22c55e' : amber }}
      >
        {downloaded ? '✓ Downloaded!' : '⬇️ Download PNG'}
      </button>
      
      <div className="mt-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div style={{ width: 20, height: 20, backgroundColor: petrol, borderRadius: 4 }} />
          <span>Petrol {petrol}</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{ width: 20, height: 20, backgroundColor: amber, borderRadius: 4 }} />
          <span>Amber {amber}</span>
        </div>
      </div>
    </div>
  );
}