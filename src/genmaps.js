let seed=7;const R=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};
function grid(w,h,c){return Array.from({length:h},()=>Array(w).fill(c));}
const out=g=>g.map(r=>r.join(''));
// VILLAGE 40x28
{const W=40,H=28,g=grid(W,H,'.');
for(let y=0;y<H;y++)for(let x=0;x<W;x++){
 if(y<2||x<2||x>37) g[y][x]='T';
 if((y===2||x<4||x>35)&&g[y][x]==='.'&&R()<0.35&&y<21) g[y][x]=R()<0.7?'T':'b';
}
for(let x=4;x<=35;x++){g[3][x]='#';g[20][x]='#';}
for(let y=3;y<=20;y++){g[y][4]='#';g[y][35]='#';}
for(let y=4;y<20;y++)for(let x=5;x<35;x++){const r=R(); g[y][x]= r<0.04?'w':r<0.07?'f':r<0.12?',':'.';}
for(let y=10;y<=14;y++)for(let x=15;x<=24;x++)g[y][x]=':';
for(let y=8;y<=9;y++)for(let x=19;x<=20;x++)g[y][x]=':';
for(let y=15;y<=22;y++)for(let x=19;x<=20;x++)g[y][x]=':';
for(let y=12;y<=13;y++)for(let x=25;x<W;x++)g[y][x]=':';
for(let y=12;y<=13;y++)for(let x=9;x<15;x++)g[y][x]=':';
for(let y=21;y<=23;y++)for(let x=0;x<W;x++)if(g[y][x]!==':')g[y][x]='s';
for(let y=24;y<H;y++)for(let x=0;x<W;x++)g[y][x]='~';
[[1,21],[14,21],[25,21],[37,21],[33,23],[3,23]].forEach(([x,y])=>g[y][x]='P');
// clear object footprints
const clr=(x0,y0,w,h)=>{for(let y=y0-h+1;y<=y0;y++)for(let x=x0;x<x0+w;x++)if(g[y][x]!==':')g[y][x]='.';};
clr(17,7,6,3);clr(7,8,4,2);clr(28,8,4,2);clr(7,17,4,2);clr(28,17,4,2);
console.log('VILLAGE',JSON.stringify(out(g)));}
// TRAIL 64x22
{const W=64,H=22,g=grid(W,H,'T');
const carve=(x,y,r,c,only)=>{for(let j=-3;j<=3;j++)for(let i=-3;i<=3;i++){const X=Math.round(x+i),Y=Math.round(y+j);if(X<0||Y<0||X>=W||Y>=H)continue;if(i*i+j*j<=r*r){if(!only||g[Y][X]===only)g[Y][X]=c;}}};
const path=(pts,w)=>{for(let k=0;k<pts.length-1;k++){const[a,b]=[pts[k],pts[k+1]];const n=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])*3);for(let s=0;s<=n;s++){const t=s/n,x=a[0]+(b[0]-a[0])*t,y=a[1]+(b[1]-a[1])*t;carve(x,y,w,',','T');carve(x,y,w,',','b');}}for(let k=0;k<pts.length-1;k++){const[a,b]=[pts[k],pts[k+1]];const n=Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])*3);for(let s=0;s<=n;s++){const t=s/n;carve(a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,0.75,':');}}};
const main=[[0,11],[8,11],[12,7],[24,7],[28,12],[36,13],[44,13],[48,9],[55,9]];
path(main,2.3);path([[18,7],[18,2.5]],1.6);path([[40,13],[40,18.5]],1.6);
for(let y=3;y<=17;y++)for(let x=50;x<=62;x++){const dx=(x-57)/6.5,dy=(y-10)/7;if(dx*dx+dy*dy<1)g[y][x]=g[y][x]===':'?':':',';}
carve(18,2.5,1.6,',');carve(40,18.5,1.8,',');
for(let y=0;y<H;y++){const x=31+Math.round(Math.sin(y*0.5)*1.2);for(const X of [x,x+1]){g[y][X]=g[y][X]===':'||g[y][X]===','&&y>=11&&y<=15?'_':'~';}}
for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(g[y][x]==='~'){const L=g[y][x-1],Rr=g[y][x+1];}
 if(g[y][x]===','){const r=R();if(r<0.06)g[y][x]='f';else if(r<0.09)g[y][x]='w';else if(r<0.1)g[y][x]='r';}
}
for(let y=0;y<H;y++)for(let x=0;x<W;x++){if(g[y][x]==='T'){let n=0;for(const[a,b]of[[1,0],[-1,0],[0,1],[0,-1]]){const c=(g[y+b]||[])[x+a];if(c===','||c===':')n++;}if(n&&R()<0.25)g[y][x]='b';}}
for(let y=5;y<=15;y++){g[y][63]='r';}
console.log('TRAIL',JSON.stringify(out(g)));}
