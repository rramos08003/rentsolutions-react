import { useState, useEffect } from "react";

const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,600;1,500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html,body{font-size:15px;scroll-behavior:smooth;width:100%;max-width:100%;overflow-x:hidden;margin:0;padding:0;}
    body{font-family:'Plus Jakarta Sans',sans-serif;background:#F5F8FD;color:#1A2235;-webkit-font-smoothing:antialiased;line-height:1.6;}
    #root{width:100%;max-width:100%;overflow-x:hidden;}
    :root{
      --blue:#1565C0;--b2:#1976D2;--b3:#1E88E5;--bdk:#0D47A1;
      --blt:#E3F2FD;--bmd:#BBDEFB;
      --green:#2E7D32;--g2:#388E3C;--g3:#43A047;--glt:#E8F5E9;--gdk:#1B5E20;
      --cyan:#0288D1;--navy:#1565C0;--off2:#EEF2F8;
      --off:#F5F8FD;
      --border:#D4DDE8;--border2:#B8C4D8;
      --t1:#1A2235;--t2:#2C3A5C;--t3:#5A6A8A;--t4:#8A96B0;
      --r:6px;--r2:10px;--r3:14px;
      --sh:0 1px 3px rgba(0,0,0,.07),0 1px 2px rgba(0,0,0,.04);
      --sh2:0 4px 16px rgba(0,0,0,.08),0 2px 4px rgba(0,0,0,.04);
      --sh3:0 8px 32px rgba(0,0,0,.1),0 2px 8px rgba(0,0,0,.05);
      --nav-h:102px;
    }
    a{text-decoration:none;color:inherit;}
    .container{max-width:1160px;margin:0 auto;padding:0 32px;}
    .btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;padding:9px 20px;border-radius:var(--r);cursor:pointer;transition:all .2s;border:1.5px solid transparent;white-space:nowrap;}
    .btn-blue{background:var(--blue);color:white;border-color:var(--blue);}
    .btn-blue:hover{background:var(--b2);box-shadow:0 4px 14px rgba(21,101,192,.28);transform:translateY(-1px);}
    .btn-white{background:white;color:var(--blue);border-color:white;font-weight:700;}
    .btn-white:hover{background:var(--blt);transform:translateY(-1px);}
    .btn-ghost{background:transparent;color:var(--t2);border-color:var(--border2);}
    .btn-ghost:hover{border-color:var(--blue);color:var(--blue);background:var(--blt);}
    .btn-gw{background:transparent;color:white;border-color:rgba(255,255,255,.4);}
    .btn-gw:hover{border-color:white;background:rgba(255,255,255,.1);}
    .btn-sm{padding:7px 14px;font-size:12px;}
    .btn-lg{padding:12px 26px;font-size:14px;}
    .btn-txt{background:none;border:none;color:var(--blue);font-size:13px;font-weight:700;cursor:pointer;padding:0;font-family:'Plus Jakarta Sans',sans-serif;}
    .card{background:white;border:1px solid var(--border);border-radius:var(--r2);box-shadow:var(--sh);transition:all .2s;}
    .card:hover{box-shadow:var(--sh2);}
    .pad{padding:22px;}
    .badge{display:inline-flex;align-items:center;font-size:11px;font-weight:700;padding:3px 9px;border-radius:100px;}
    .bg-blue{background:var(--blt);color:var(--blue);}
    .bg-amber{background:#FFF8E1;color:#E65100;}
    .bg-blue{background:var(--blt);color:var(--blue);}
    .bg-red{background:#FEE2E2;color:#DC2626;}
    .eyebrow{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--green);display:block;margin-bottom:10px;}
    .rule{width:34px;height:3px;background:var(--green);border-radius:2px;margin:13px auto 0;}
    .top-bar{position:fixed;top:0;left:0;right:0;height:36px;background:var(--blue);z-index:1001;display:flex;align-items:center;justify-content:flex-end;padding:0 32px;}
    .top-bar-link{font-size:12px;font-weight:600;color:white;padding:0 12px;border-right:1px solid rgba(255,255,255,.3);cursor:pointer;transition:opacity .2s;white-space:nowrap;}
    .top-bar-link:hover{opacity:.75;}
    .top-bar-phone{font-size:15px;font-weight:800;color:white;padding-left:14px;}
    .main-nav{position:fixed;top:36px;left:0;right:0;height:66px;background:white;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 32px;z-index:1000;transition:box-shadow .3s;}
    .main-nav.sc{box-shadow:var(--sh2);}
    .nb{background:none;border:none;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;font-size:13.5px;font-weight:500;color:var(--t2);padding:7px 11px;border-radius:var(--r);transition:all .2s;border-bottom:2.5px solid transparent;}
    .nb:hover{background:var(--blt);color:var(--blue);}
    .nb.act{color:var(--blue);font-weight:700;border-bottom-color:var(--blue);border-radius:0;}
    .dd{position:relative;padding-bottom:2px;}
    .ddm{position:absolute;top:calc(100% + 0px);left:50%;transform:translateX(-50%);background:#222;border-radius:var(--r);box-shadow:0 8px 24px rgba(0,0,0,.15);min-width:186px;padding:6px;opacity:0;pointer-events:none;visibility:hidden;transition:opacity .18s;z-index:300;padding-top:10px;margin-top:0px;}
    .dd:hover .ddm{opacity:1;pointer-events:all;visibility:visible;}
    .ddi{display:block;padding:9px 14px;font-size:13px;font-weight:500;color:rgba(255,255,255,.85);border-radius:4px;cursor:pointer;transition:all .15s;white-space:nowrap;}
    .ddi:hover{background:rgba(255,255,255,.12);color:white;}
    .ddi.first{color:white;font-weight:700;}
    .fl{display:block;font-size:11.5px;font-weight:700;color:var(--t2);margin-bottom:5px;}
    .fi,.fs,.fta{width:100%;padding:9px 13px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13.5px;background:white;border:1.5px solid var(--border);border-radius:var(--r);color:var(--t1);outline:none;transition:all .2s;}
    .fi:focus,.fs:focus,.fta:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(21,101,192,.09);}
    .fta{min-height:96px;resize:vertical;line-height:1.6;}
    .fg{margin-bottom:15px;}
    .dt{width:100%;border-collapse:collapse;font-size:13.5px;}
    .dt th{font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--t3);padding:9px 16px;text-align:left;border-bottom:1px solid var(--border);background:var(--off);}
    .dt td{padding:12px 16px;border-bottom:1px solid var(--border);color:var(--t2);}
    .dt tr:last-child td{border-bottom:none;}
    .dt tr:hover td{background:var(--off);}
    .tbar{display:flex;border-bottom:1.5px solid var(--border);overflow-x:auto;}
    .tab{padding:11px 18px;font-size:13px;font-weight:500;color:var(--t3);cursor:pointer;border-bottom:2.5px solid transparent;margin-bottom:-1.5px;transition:all .2s;white-space:nowrap;}
    .tab.act{color:var(--blue);font-weight:700;border-bottom-color:var(--blue);}
    .si{display:flex;align-items:center;gap:10px;padding:9px 16px;font-size:13.5px;font-weight:500;color:var(--t2);cursor:pointer;transition:all .2s;border-left:3px solid transparent;}
    .si:hover{background:var(--off);color:var(--t1);}
    .si.act{background:var(--blt);color:var(--blue);border-left-color:var(--blue);font-weight:700;}
    .ck{display:flex;gap:10px;align-items:flex-start;padding:8px 0;font-size:13.5px;color:var(--t2);border-bottom:1px solid var(--off2);}
    .ck:last-child{border-bottom:none;}
    .cm{width:18px;height:18px;border-radius:50%;background:var(--blt);border:1.5px solid var(--b3);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;}
    .mbg{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:2000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(2px);animation:fadeIn .2s;}
    .mb{background:white;border-radius:var(--r3);width:100%;box-shadow:0 24px 64px rgba(0,0,0,.12);animation:fadeUp .3s;max-height:90vh;overflow-y:auto;}
    .mhd{padding:19px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;}
    .mbd{padding:24px;}
    .mft{padding:15px 24px;border-top:1px solid var(--border);display:flex;gap:10px;justify-content:flex-end;}
    .playout{display:flex;min-height:calc(100vh - 66px);margin-top:66px;}
    .psb{width:214px;min-width:214px;background:white;border-right:1px solid var(--border);position:sticky;top:66px;height:calc(100vh - 66px);overflow-y:auto;padding:14px 0;}
    .pmain{flex:1;background:var(--off);}
    .pcnt{padding:28px;max-width:1040px;}
    .phdr{background:white;border-bottom:1px solid var(--border);padding:17px 28px;display:flex;justify-content:space-between;align-items:center;margin:-28px -28px 24px;}
    .bddm{position:absolute;top:calc(100% + 6px);left:0;background:white;border:1px solid var(--border);border-radius:var(--r2);box-shadow:var(--sh3);min-width:210px;padding:7px;z-index:200;animation:fadeUp .18s;}
    .bddi{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:6px;cursor:pointer;font-size:13.5px;transition:all .15s;}
    .bddi:hover{background:var(--blt);color:var(--blue);}
    .bddi.sel{background:var(--blt);color:var(--blue);font-weight:700;}
    .bcnt{font-size:11px;font-weight:700;background:var(--bmd);color:var(--blue);padding:2px 8px;border-radius:100px;}
    .pstats{display:flex;border-top:1px solid var(--off2);margin-top:12px;padding-top:12px;}
    .pstat{flex:1;text-align:center;border-right:1px solid var(--off2);}
    .pstat:last-child{border-right:none;}
    .pstat-n{font-size:17px;font-weight:800;color:var(--t1);line-height:1.1;margin-top:3px;}
    .pstat-l{font-size:10px;color:var(--t4);font-weight:600;text-transform:uppercase;letter-spacing:.05em;}
    .chip{padding:6px 14px;border-radius:100px;font-size:12.5px;font-weight:600;border:1.5px solid var(--border2);cursor:pointer;transition:all .2s;background:transparent;color:var(--t2);}
    .chip.on,.chip:hover{border-color:var(--blue);color:var(--blue);background:var(--blt);}
    .tl{position:relative;padding-left:24px;}
    .tl::before{content:'';position:absolute;left:5px;top:6px;bottom:0;width:1.5px;background:linear-gradient(to bottom,var(--b3),transparent);}
    .tlitem{position:relative;margin-bottom:34px;}
    .tldot{position:absolute;left:-24px;top:5px;width:12px;height:12px;border-radius:50%;background:var(--b3);border:3px solid white;box-shadow:0 0 0 1.5px var(--b3);}
    .ann{background:white;border:1px solid var(--border);border-radius:var(--r2);padding:18px 22px;border-left:3px solid var(--b3);margin-bottom:14px;}
    .dr{display:flex;align-items:center;gap:14px;padding:12px 18px;border-bottom:1px solid var(--border);transition:all .2s;cursor:pointer;}
    .dr:hover{background:var(--off);}
    .dr:last-child{border-bottom:none;}
    .ro{display:flex;align-items:center;gap:9px;padding:10px 13px;border:1.5px solid var(--border);border-radius:var(--r);cursor:pointer;transition:all .2s;font-size:13.5px;font-weight:500;color:var(--t2);}
    .ro.sel{border-color:var(--blue);background:var(--blt);color:var(--blue);}
    .rdot{width:15px;height:15px;border-radius:50%;border:2px solid var(--border2);transition:all .2s;flex-shrink:0;}
    .ro.sel .rdot{border-color:var(--blue);background:var(--blue);box-shadow:inset 0 0 0 2.5px white;}
    .uz{border:1.5px dashed var(--border2);border-radius:var(--r);padding:22px;text-align:center;transition:all .2s;cursor:pointer;}
    .uz:hover{border-color:var(--blue);background:var(--blt);}
    .cc{aspect-ratio:1;border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;transition:all .2s;position:relative;}
    .cc:hover{background:var(--blt);color:var(--blue);}
    .cc.tod{background:var(--blue);color:white;font-weight:700;}
    .cc.ev::after{content:'';position:absolute;bottom:3px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:var(--b3);}
    .cc.om{color:var(--t4);}
    .pc{border-radius:var(--r2);border:1.5px solid var(--border);overflow:hidden;transition:all .2s;}
    .pc:hover,.pc.feat{border-color:var(--blue);box-shadow:0 8px 28px rgba(21,101,192,.15);}
    .ftl{font-size:13px;color:rgba(255,255,255,.42);transition:all .2s;display:block;margin-bottom:9px;}
    .ftl:hover{color:rgba(255,255,255,.88);}
    .adm-sb{width:220px;min-width:220px;background:#0D47A1;position:sticky;top:66px;height:calc(100vh - 66px);overflow-y:auto;padding:14px 0;}
    .adm-si{display:flex;align-items:center;gap:10px;padding:10px 18px;font-size:13.5px;font-weight:500;color:rgba(255,255,255,.6);cursor:pointer;transition:all .2s;border-left:3px solid transparent;}
    .adm-si:hover{background:rgba(255,255,255,.06);color:rgba(255,255,255,.9);}
    .adm-si.act{background:rgba(255,255,255,.1);color:white;border-left-color:var(--bmd);font-weight:700;}
    @keyframes fadeUp{from{opacity:0;transform:translateY(11px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes spin{to{transform:rotate(360deg)}}
    @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    .au{animation:fadeUp .4s ease both;}
    .au1{animation:fadeUp .4s .1s ease both;}
  `}</style>
);

const Ic = ({ n, s = 16, c = "currentColor" }) => {
  const d = {
    home:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
    pay:"M3 10h18M7 15h.01M11 15h2M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z",
    wrench:"M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
    bell:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0",
    doc:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    user:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z",
    users:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
    cal:"M3 4h18v18H3z M16 2v4 M8 2v4 M3 10h18",
    shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    check:"M20 6L9 17l-5-5",
    info:"M12 22a10 10 0 100-20 10 10 0 000 20z M12 8v4 M12 16h.01",
    logout:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
    upload:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
    download:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3",
    eye:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z",
    eyeoff:"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24 M1 1l22 22",
    search:"M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35",
    filter:"M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    al:"M15 18l-6-6 6-6", ar:"M9 18l6-6-6-6",
    chart:"M18 20V10 M12 20V4 M6 20v-6",
    phone:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
    mail:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
    map:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z",
    star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    bld:"M1 22V6a2 2 0 012-2h10a2 2 0 012 2v16H1z M16 8h4a2 2 0 012 2v12h-6V8z",
    key:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
    plus:"M12 5v14 M5 12h14",
    award:"M12 15a7 7 0 100-14 7 7 0 000 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12",
    close:"M18 6L6 18 M6 6l12 12",
    bed:"M2 4v16 M2 8h18a2 2 0 012 2v10 M2 14h20 M6 8V4",
    bath:"M4 13h16 M4 19h16 M7 13V9a5 5 0 0110 0v4",
    sqft:"M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
    fb:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    yt:"M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z M9.75 15.02l5.75-3.02-5.75-3.02v6.04z",
    pen:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
    trash:"M3 6h18 M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2",
    settings:"M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
    msg:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    hand:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    tag:"M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z M7 7h.01",
  };
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {(d[n]||"").split(" M").map((seg,i)=><path key={i} d={i===0?seg:"M"+seg}/>)}
    </svg>
  );
};

const Logo = ({ white = false }) => (
  <div style={{display:"flex",alignItems:"center",gap:9,cursor:"pointer"}}>
    <svg width="42" height="40" viewBox="0 0 42 40">
      <rect x="2" y="18" width="17" height="20" rx="2" fill="#43A047"/>
      <circle cx="10.5" cy="27" r="3.5" fill="#2E7D32"/>
      <rect x="23" y="18" width="17" height="20" rx="2" fill="#1976D2"/>
      <circle cx="31.5" cy="27" r="3.5" fill="#1565C0"/>
      <polygon points="21,2 3,19 39,19" fill="#388E3C"/>
      <rect x="16.5" y="30" width="9" height="8" rx="1.5" fill="rgba(255,255,255,.92)"/>
    </svg>
    <div>
      <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:16.5,fontWeight:800,color:white?"white":"#1565C0",letterSpacing:"-.01em",lineHeight:1.05}}>Rent Solutions</div>
      <div style={{fontSize:9,fontWeight:700,color:white?"rgba(255,255,255,.7)":"#2E7D32",letterSpacing:".07em",textTransform:"uppercase"}}>Property Management &amp; Leasing</div>
    </div>
  </div>
);

const LISTINGS = [
  {id:1,img:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",addr:"4821 Cypress Chase Dr",city:"Tampa",zip:"33624",beds:4,baths:2,sqft:2100,rent:2450,avail:"Available Now",type:"Single Family",garage:2},
  {id:2,img:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",addr:"9203 River Glen Blvd",city:"Riverview",zip:"33578",beds:3,baths:2,sqft:1680,rent:1950,avail:"Available Now",type:"Single Family",garage:1},
  {id:3,img:"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",addr:"2716 Bayshore Blvd #204",city:"Tampa",zip:"33629",beds:2,baths:2,sqft:1200,rent:1795,avail:"May 1",type:"Condominium",garage:1},
  {id:4,img:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&q=80",addr:"6104 Stone Oak Ct",city:"Wesley Chapel",zip:"33544",beds:4,baths:3,sqft:2450,rent:2850,avail:"Available Now",type:"Single Family",garage:2},
  {id:5,img:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&q=80",addr:"1812 Palm Ave #301",city:"Tampa",zip:"33605",beds:1,baths:1,sqft:850,rent:1395,avail:"Apr 15",type:"Apartment",garage:0},
  {id:6,img:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",addr:"3345 Carrollwood Village",city:"Tampa",zip:"33618",beds:3,baths:2.5,sqft:1920,rent:2250,avail:"Available Now",type:"Townhouse",garage:1},
];

const BLOG_POSTS = [
  {id:1,title:"How to Be a Good Landlord / Property Manager",date:"October 8, 2017",cat:"Management",excerpt:"Run Your Property Like a Business. Some landlords do a terrible job running their business — often treating it as a side-gig rather than a business. When you treat it with the respect and organization of any serious business venture, amazing things happen.",img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"},
  {id:2,title:"How to Be a Good Tenant",date:"October 8, 2017",cat:"Renter Tips",excerpt:"Read your lease. No, seriously — read it. It won't be the most exciting night table material but you'll thank yourself when you do. A lease is a binding legal contract that creates a binding relationship between you and your landlord.",img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"},
  {id:3,title:"Tampa Bay Rental Market Update: What Owners Need to Know",date:"March 15, 2024",cat:"Market Updates",excerpt:"The Tampa Bay rental market continues to show resilience as interest rates remain elevated and inventory stays constrained. Single-family rental demand is particularly strong in suburban corridors.",img:"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"},
  {id:4,title:"Investing in Multi-Family Properties in Hillsborough County",date:"February 2, 2024",cat:"Investors",excerpt:"Multi-family properties in Hillsborough County represent a compelling opportunity for investors seeking cash-flowing assets with strong occupancy fundamentals and a growing renter population.",img:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"},
  {id:5,title:"Section 8 Housing: What Landlords Need to Know",date:"January 20, 2024",cat:"Management",excerpt:"Section 8 vouchers provide landlords with guaranteed rent payments, qualified tenants, and long-term occupancy. Here is everything you need to know about participating in the Housing Choice Voucher Program.",img:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"},
  {id:6,title:"How Pro Power Leasing Fills Vacancies 2x Faster",date:"December 10, 2023",cat:"Management",excerpt:"Our exclusive leasing system combines professional photography, MLS syndication, and intensive tenant screening to fill vacancies in an average of 14 days — far faster than the market average.",img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"},
];

function PropCard({l,onClick}){
  return(
    <div className="card" style={{cursor:"pointer",overflow:"hidden"}} onClick={onClick}>
      <div style={{position:"relative",overflow:"hidden",height:200}}>
        <img src={l.img} alt={l.addr} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .4s"}}
          onMouseEnter={e=>e.target.style.transform="scale(1.05)"} onMouseLeave={e=>e.target.style.transform="scale(1)"}/>
        <div style={{position:"absolute",top:10,left:10}}>
          <span className={`badge ${l.avail==="Available Now"?"bg-blue":"bg-amber"}`}>{l.avail}</span>
        </div>
        <div style={{position:"absolute",top:10,right:10,background:"rgba(20,35,15,.88)",borderRadius:6,padding:"5px 11px"}}>
          <span style={{fontFamily:"Lora,serif",fontSize:17,fontWeight:600,color:"white"}}>${l.rent.toLocaleString()}</span>
          <span style={{fontSize:10,color:"rgba(255,255,255,.45)"}}>/mo</span>
        </div>
        <div style={{position:"absolute",bottom:10,left:10}}>
          <span style={{background:"rgba(255,255,255,.93)",borderRadius:4,padding:"3px 9px",fontSize:10.5,fontWeight:700,color:"var(--t2)",textTransform:"uppercase",letterSpacing:".04em"}}>{l.type}</span>
        </div>
      </div>
      <div style={{padding:"13px 17px 17px"}}>
        <div style={{fontSize:14.5,fontWeight:700,color:"var(--t1)",marginBottom:1}}>{l.addr}</div>
        <div style={{fontSize:12.5,color:"var(--t3)"}}>{l.city}, FL {l.zip}</div>
        <div className="pstats">
          {[{icon:"bed",val:l.beds,lbl:l.beds===1?"Bed":"Beds"},{icon:"bath",val:l.baths,lbl:l.baths===1?"Bath":"Baths"},{icon:"sqft",val:l.sqft.toLocaleString(),lbl:"Sq Ft"}].map(({icon,val,lbl})=>(
            <div key={lbl} className="pstat">
              <Ic n={icon} s={13} c="var(--b3)"/>
              <div className="pstat-n">{val}</div>
              <div className="pstat-l">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LModal({l,onClose}){
  return(
    <div className="mbg" onClick={onClose}>
      <div className="mb" style={{maxWidth:560}} onClick={e=>e.stopPropagation()}>
        <div style={{position:"relative"}}>
          <img src={l.img} alt="" style={{width:"100%",height:238,objectFit:"cover",borderRadius:"14px 14px 0 0"}}/>
          <button onClick={onClose} style={{position:"absolute",top:12,right:12,width:30,height:30,borderRadius:6,background:"rgba(0,0,0,.52)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Ic n="close" s={14} c="white"/>
          </button>
          <div style={{position:"absolute",top:12,left:12}}>
            <span className={`badge ${l.avail==="Available Now"?"bg-blue":"bg-amber"}`}>{l.avail}</span>
          </div>
        </div>
        <div className="mbd">
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
            <div>
              <div style={{fontSize:10.5,fontWeight:700,color:"var(--g3)",textTransform:"uppercase",letterSpacing:".07em",marginBottom:3}}>{l.type}</div>
              <div style={{fontFamily:"Lora,serif",fontSize:21,color:"var(--t1)",marginBottom:2}}>{l.addr}</div>
              <div style={{fontSize:13,color:"var(--t3)"}}>{l.city}, FL {l.zip}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontFamily:"Lora,serif",fontSize:28,color:"var(--blue)",fontWeight:600}}>${l.rent.toLocaleString()}/mo</div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,background:"var(--off)",borderRadius:"var(--r2)",padding:16,marginBottom:16}}>
            {[{icon:"bed",val:l.beds,lbl:l.beds===1?"Bedroom":"Bedrooms"},{icon:"bath",val:l.baths,lbl:l.baths===1?"Bathroom":"Bathrooms"},{icon:"sqft",val:l.sqft.toLocaleString(),lbl:"Square Feet"}].map(({icon,val,lbl})=>(
              <div key={lbl} style={{textAlign:"center",padding:"8px 0"}}>
                <Ic n={icon} s={18} c="var(--b3)"/>
                <div style={{fontFamily:"Lora,serif",fontSize:26,fontWeight:600,color:"var(--t1)",lineHeight:1.15,marginTop:4}}>{val}</div>
                <div style={{fontSize:12,color:"var(--t3)",fontWeight:500}}>{lbl}</div>
              </div>
            ))}
          </div>
          {l.garage>0&&<div style={{fontSize:13,color:"var(--t3)",marginBottom:4}}><b style={{color:"var(--t2)"}}>{l.garage}-car garage</b> included</div>}
        </div>
        <div className="mft">
          <button className="btn btn-ghost btn-sm" onClick={onClose}>Close</button>
          <button className="btn btn-ghost btn-sm">Schedule Tour</button>
          <button className="btn btn-green btn-sm">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

function BedsDD({beds,setBeds,listings=LISTINGS}){
  const [open,setOpen]=useState(false);
  return(
    <div style={{position:"relative",display:"inline-block"}}>
      <button className={`chip${beds?" on":""}`} onClick={()=>setOpen(!open)} style={{display:"flex",alignItems:"center",gap:5}}>
        {beds?`${beds}+ Beds`:"Bedrooms"} <Ic n="ar" s={10}/>
      </button>
      {open&&(
        <div className="bddm">
          <div style={{fontSize:10,fontWeight:700,color:"var(--t4)",textTransform:"uppercase",letterSpacing:".1em",padding:"3px 12px 7px"}}>Filter by Bedrooms</div>
          <div className={`bddi${!beds?" sel":""}`} onClick={()=>{setBeds(null);setOpen(false);}}>
            <span>Any Bedrooms</span><span className="bcnt">{listings.length} homes</span>
          </div>
          {[1,2,3,4].map(n=>{
            const cnt=listings.filter(l=>l.beds>=n).length;
            return(
              <div key={n} className={`bddi${beds===n?" sel":""}`} onClick={()=>{setBeds(n);setOpen(false);}}>
                <span>{n}+ Bedrooms</span><span className="bcnt">{cnt} available</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Nav({page,go,loggedIn,loggedInAs}){
  const [sc,setSc]=useState(false);
  useEffect(()=>{
    const h=()=>setSc(window.scrollY>20);
    window.addEventListener("scroll",h);
    return()=>window.removeEventListener("scroll",h);
  },[]);
  const navItems=[
    {label:"Home",p:"home"},
    {label:"Browse Our Listings",p:"listings"},
    {label:"Owners",p:"owners",sub:[
      {label:"Management",p:"owners"},{label:"Leasing",p:"owners"},
      {label:"Get a Free Quote",p:"contact"},{label:"Pricing",p:"owners"},
      {label:"Our Guarantees",p:"owners"},{label:"Landlord Rescue",p:"owners"},
      {label:"Owner Login",p:"portal-login"},
    ]},
    {label:"Renters",p:"renters",sub:[
      {label:"Search Our Listings",p:"listings"},{label:"Tenant Login",p:"portal-login"},
      {label:"Tenant Resources",p:"renters"},{label:"Maintenance",p:"renters"},
      {label:"Contact Us",p:"contact"},
    ]},
    {label:"Investors",p:"investors",sub:[
      {label:"Inspect & Analyze",p:"investors"},{label:"Portfolio Managers",p:"investors"},
      {label:"Turnaround",p:"investors"},{label:"Oversee Rehab",p:"investors"},
      {label:"Multi-family",p:"investors"},{label:"Section 8",p:"investors"},
      {label:"Turnover",p:"investors"},{label:"Legal",p:"investors"},
    ]},
    {label:"Realtors",p:"realtors",sub:[
      {label:"Overview",p:"realtors"},{label:"Refer an Owner",p:"realtors"},
      {label:"Refer a Renter",p:"realtors"},{label:"Partner with Us",p:"realtors"},
      {label:"Realtor FAQs",p:"realtors"},
    ]},
    {label:"About Us",p:"about",sub:[
      {label:"Our Company",p:"about"},{label:"Our Team",p:"about"},
      {label:"Join our Team",p:"about"},{label:"Contact Us",p:"contact"},
    ]},
    {label:"Blog",p:"blog"},
  ];
  return(
    <>
      <div className="top-bar">
        <span className="top-bar-link" onClick={()=>go("rental-app")}>Rental Application</span>
        <span className="top-bar-link" onClick={()=>go("portal-login","owner")}>Owner Login</span>
        <span className="top-bar-link" onClick={()=>go("portal-login","tenant")}>Tenant Login</span>
        <span className="top-bar-link" onClick={()=>go("contact")}>Contact Us</span>
        <span style={{width:1,height:16,background:"rgba(255,255,255,.35)",margin:"0 4px"}}/>
        <a href="tel:8135795597" className="top-bar-phone">(813) 579.5597</a>
        {loggedIn&&(
          <button className="btn btn-sm" onClick={()=>go(loggedInAs==="Admin"?"admin-dashboard":"portal-dashboard")}
            style={{marginLeft:12,background:"rgba(255,255,255,.15)",border:"1px solid rgba(255,255,255,.3)",color:"white",fontSize:11,padding:"4px 12px",borderRadius:4}}>
            <Ic n="user" s={11} c="white"/> {loggedIn}
          </button>
        )}
      </div>
      <div className={`main-nav${sc?" sc":""}`}>
        <div onClick={()=>go("home")}><Logo/></div>
        <div style={{display:"flex",alignItems:"center",gap:1}}>
          {navItems.map(item=>(
            <div key={item.p} className="dd">
              <button className={`nb${page===item.p?" act":""}`} onClick={()=>go(item.p)}>
                {item.label}{item.sub&&<span style={{fontSize:9,opacity:.4,marginLeft:3}}>&#9660;</span>}
              </button>
              {item.sub&&(
                <div className="ddm">
                  {item.sub.map((s,i)=>(
                    <div key={s.label} className={`ddi${i===0?" first":""}`} onClick={()=>go(s.p)}>{s.label}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:9}}>
          {loggedIn
            ?<button className="btn btn-green btn-sm" onClick={()=>go(loggedInAs==="Admin"?"admin-dashboard":"portal-dashboard")}>My Account</button>
            :<button className="btn btn-green btn-sm" onClick={()=>go("contact")}>Free Quote</button>
          }
        </div>
      </div>
    </>
  );
}

function Footer({go}){
  const cols=[
    {t:"For Owners",links:[["Management","owners"],["Leasing","owners"],["Pricing","owners"],["Guarantees","owners"],["Owner Portal","portal-login"]]},
    {t:"For Renters",links:[["Browse Listings","listings"],["Tenant Portal","portal-login"],["Maintenance","renters"],["Apply Online","rental-app"]]},
    {t:"Investors",links:[["Inspect & Analyze","investors"],["Portfolio Managers","investors"],["Multi-family","investors"],["Section 8","investors"]]},
    {t:"Company",links:[["About Us","about"],["Our Team","about"],["Realtors","realtors"],["Blog","blog"],["Contact Us","contact"]]},
  ];
  return(
    <footer style={{background:"#0D2B5E",paddingTop:52,borderTop:"2px solid #0a3070"}}>
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",gap:36,paddingBottom:44,borderBottom:"1px solid rgba(255,255,255,.12)"}}>
          <div>
            <div style={{marginBottom:14}}><Logo white/></div>
            <p style={{fontSize:13,color:"rgba(255,255,255,.42)",lineHeight:1.85,marginBottom:18,maxWidth:250}}>
              Full-service property management for owners, renters &amp; investors across Greater Tampa Bay since 2004.
            </p>
            <div style={{display:"flex",gap:8}}>
              {["fb","yt"].map(ic=>(
                <div key={ic} style={{width:31,height:31,borderRadius:6,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.12)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                  <Ic n={ic} s={13} c="rgba(255,255,255,.55)"/>
                </div>
              ))}
            </div>
          </div>
          {cols.map(col=>(
            <div key={col.t}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:14}}>{col.t}</div>
              {col.links.map(([label,pg])=>(
                <a key={label} className="ftl" href="#" onClick={e=>{e.preventDefault();go(pg);}}>{label}</a>
              ))}
            </div>
          ))}
          <div>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"rgba(255,255,255,.5)",marginBottom:14}}>Contact</div>
            <a href="tel:8135795597" style={{display:"block",fontSize:17,fontFamily:"Lora,serif",fontWeight:600,color:"white",marginBottom:6}}>(813) 579.5597</a>
            <a href="mailto:info@rentsolutions.com" className="ftl">info@rentsolutions.com</a>
            <p style={{fontSize:12,color:"rgba(255,255,255,.3)",lineHeight:1.7,marginTop:10,marginBottom:14}}>Tampa Bay, Florida<br/>Hillsborough · Pinellas · Pasco</p>
            <button className="btn btn-white btn-sm" onClick={()=>go("contact")}>Free Quote</button>
          </div>
        </div>
        <div style={{padding:"17px 0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <p style={{fontSize:11,color:"rgba(255,255,255,.25)"}}>© 2024 Rent Solutions Property Management &amp; Leasing. All rights reserved.</p>
          <div style={{display:"flex",gap:18}}>
            {["Privacy Policy","Terms of Service","Accessibility"].map(item=>(
              <a key={item} href="#" style={{fontSize:11,color:"rgba(255,255,255,.25)"}}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage({go}){
  const [selL,setSelL]=useState(null);
  const [bedsOpen,setBedsOpen]=useState(false);
  const [selBeds,setSelBeds]=useState(null);
  const [city,setCity]=useState("");
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      {/* ── HERO ── clean navy/blue gradient, no dark photo overlay */}
      <div style={{position:"relative",minHeight:560,display:"flex",flexDirection:"column",justifyContent:"center",background:"linear-gradient(135deg,#1B2B4B 0%,#1565C0 55%,#1976D2 80%,#0288D1 100%)"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 75% 40%,rgba(255,255,255,.07) 0%,transparent 55%),radial-gradient(circle at 20% 80%,rgba(46,125,50,.18) 0%,transparent 45%)"}}/>
        <div className="container" style={{position:"relative",zIndex:1,padding:"80px 32px 88px"}}>
          <div className="au" style={{maxWidth:640}}>
            <span style={{display:"inline-block",background:"rgba(255,255,255,.13)",border:"1px solid rgba(255,255,255,.28)",borderRadius:100,padding:"5px 16px",fontSize:11,fontWeight:700,color:"white",letterSpacing:".1em",textTransform:"uppercase",marginBottom:22}}>
              Tampa Bay&apos;s Premier Property Management
            </span>
            <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(32px,4.5vw,58px)",color:"white",marginBottom:16,lineHeight:1.08,textShadow:"0 2px 12px rgba(0,0,0,.18)"}}>
              Lease It. Manage It.<br/><span style={{fontStyle:"italic",color:"rgba(255,255,255,.88)"}}>Protect It. Guaranteed.</span>
            </h1>
            <p style={{fontSize:15.5,color:"rgba(255,255,255,.78)",lineHeight:1.8,marginBottom:36,maxWidth:520}}>
              Maximum returns for property owners. Outstanding experience for tenants. Serving Hillsborough, Pinellas &amp; Pasco counties since 2004.
            </p>
            {/* search card */}
            <div style={{background:"white",borderRadius:"var(--r2)",padding:"18px 18px 16px",boxShadow:"0 12px 40px rgba(0,0,0,.22)",maxWidth:580}}>
              <div style={{fontSize:10.5,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".1em",marginBottom:12}}>Search Available Properties</div>
              <div style={{display:"flex",gap:9}}>
                <input value={city} onChange={e=>setCity(e.target.value)} className="fi" placeholder="Enter city or zip code…" style={{flex:"1 1 180px"}}/>
                <div style={{position:"relative",flex:"0 0 140px"}}>
                  <button onClick={()=>setBedsOpen(!bedsOpen)} className="btn btn-ghost" style={{width:"100%",justifyContent:"space-between",fontSize:13}}>
                    {selBeds?`${selBeds}+ Beds`:"Bedrooms"}<Ic n="ar" s={11} c="var(--t3)"/>
                  </button>
                  {bedsOpen&&(
                    <div className="bddm">
                      <div style={{fontSize:10,fontWeight:700,color:"var(--t4)",textTransform:"uppercase",letterSpacing:".1em",padding:"3px 12px 7px"}}>Bedrooms Available</div>
                      <div className={`bddi${!selBeds?" sel":""}`} onClick={()=>{setSelBeds(null);setBedsOpen(false);}}>
                        <span>Any</span><span className="bcnt">{LISTINGS.length} homes</span>
                      </div>
                      {[1,2,3,4].map(n=>{
                        const cnt=LISTINGS.filter(l=>l.beds>=n).length;
                        return(
                          <div key={n} className={`bddi${selBeds===n?" sel":""}`} onClick={()=>{setSelBeds(n);setBedsOpen(false);}}>
                            <span>{n}+ Bed{n>1?"rooms":"room"}</span><span className="bcnt">{cnt} available</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <button className="btn btn-blue" style={{flex:"0 0 auto"}} onClick={()=>go("listings")}><Ic n="search" s={13} c="white"/>Search</button>
              </div>
            </div>
            {/* mini stats */}
            <div style={{display:"flex",gap:36,marginTop:28}}>
              {[["500+","Properties Managed"],["98%","Owner Retention"],["14 Days","Average to Rent"],["$0","Hidden Fees"]].map(([n,l])=>(
                <div key={l}>
                  <div style={{fontFamily:"Lora,serif",fontSize:26,fontWeight:600,color:"white",lineHeight:1,textShadow:"0 1px 6px rgba(0,0,0,.15)"}}>{n}</div>
                  <div style={{fontSize:10,color:"rgba(255,255,255,.52)",marginTop:4,textTransform:"uppercase",letterSpacing:".07em",fontWeight:600}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* bottom service cards row overlapping the hero */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,transform:"translateY(50%)",zIndex:2,padding:"0 32px"}}>
          <div className="container">
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
              {[
                {icon:"bld",t:"Property Management",d:"Full-service 24/7 management.",p:"owners"},
                {icon:"key",t:"Pro Power Leasing",d:"Average 14 days to fill vacancies.",p:"listings"},
                {icon:"chart",t:"Investor Solutions",d:"Market analysis & ROI reporting.",p:"investors"},
                {icon:"award",t:"INC 500 Recognized",d:"America's fastest growing companies.",p:"about"},
              ].map((c,i)=>(
                <div key={i} onClick={()=>go(c.p)} className="card" style={{padding:"16px 18px",display:"flex",gap:13,alignItems:"flex-start",cursor:"pointer",borderTop:"3px solid var(--blue)"}}
                  onMouseEnter={e=>e.currentTarget.style.boxShadow="0 8px 28px rgba(21,101,192,.15)"}
                  onMouseLeave={e=>e.currentTarget.style.boxShadow=""}>
                  <div style={{width:36,height:36,borderRadius:9,background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <Ic n={c.icon} s={17} c="var(--blue)"/>
                  </div>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:"var(--t1)",marginBottom:2}}>{c.t}</div>
                    <div style={{fontSize:12,color:"var(--t3)",lineHeight:1.5}}>{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* spacer for overlapping cards */}
      <div style={{height:110,background:"var(--off)"}}/>
      <div style={{background:"var(--off)",padding:"72px 0"}}>
        <div className="container">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:32}}>
            <div>
              <span className="eyebrow">Current Availability</span>
              <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3vw,36px)",color:"var(--t1)"}}>Featured Rental Properties</h2>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={()=>go("listings")} style={{display:"flex",alignItems:"center",gap:6}}>View All <Ic n="ar" s={13}/></button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:19}}>
            {LISTINGS.map(l=><PropCard key={l.id} l={l} onClick={()=>setSelL(l)}/>)}
          </div>
        </div>
      </div>
      <div style={{background:"var(--green)",overflow:"hidden",padding:"9px 0"}}>
        <div style={{display:"flex",animation:"marquee 28s linear infinite",gap:52,width:"max-content"}}>
          {["Property Management","Residential Leasing","Tenant Placement","24/7 Maintenance","Investment Analysis","Owner Portal","Hillsborough County","Pinellas County","Pasco County",
            "Property Management","Residential Leasing","Tenant Placement","24/7 Maintenance","Investment Analysis","Owner Portal","Hillsborough County","Pinellas County","Pasco County"
          ].map((t,i)=>(
            <span key={i} style={{fontSize:10.5,fontWeight:700,letterSpacing:".13em",textTransform:"uppercase",color:"rgba(255,255,255,.9)",whiteSpace:"nowrap"}}>
              {t}<span style={{margin:"0 26px",opacity:.5}}>|</span>
            </span>
          ))}
        </div>
      </div>
      <div style={{background:"white",padding:"72px 0"}}>
        <div className="container">
          <div style={{textAlign:"center",marginBottom:44}}>
            <span className="eyebrow">What We Do</span>
            <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(24px,3.5vw,38px)",color:"var(--t1)",marginBottom:9}}>Full-Service Property Solutions</h2>
            <p style={{fontSize:15,color:"var(--t3)",maxWidth:500,margin:"0 auto",lineHeight:1.75}}>Every aspect of property management handled by licensed Tampa Bay professionals.</p>
            <div className="rule"/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
            {[
              {svg:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,color:"#1565C0",bg:"#E3F2FD",lbl:"Property Management",body:"Leasing, maintenance, accounting, inspections, legal compliance, and 24/7 emergency coordination.",p:"owners"},
              {svg:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>,color:"#2E7D32",bg:"#E8F5E9",lbl:"Tenant Placement",body:"Pro Power Leasing: professional photography, MLS syndication, and rigorous tenant screening. Avg 14 days.",p:"listings"},
              {svg:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0277BD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><path d="M3 20h18"/></svg>,color:"#0277BD",bg:"#E1F5FE",lbl:"Investor Solutions",body:"Real-time portfolio data, market comparable surveys, ROI projections, and expert consultation.",p:"investors"},
              {svg:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,color:"#1565C0",bg:"#E3F2FD",lbl:"Owner Guarantees",body:"30-day rental guarantee, eviction protection, and zero hidden fees. Results-based compensation.",p:"owners"},
              {svg:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,color:"#2E7D32",bg:"#E8F5E9",lbl:"Realtor Partnerships",body:"Earn referral fees for owners and renters. Your clients always remain yours for future transactions.",p:"realtors"},
              {svg:<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0277BD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,color:"#0277BD",bg:"#E1F5FE",lbl:"Transparent Reporting",body:"Monthly statements, work orders, invoices, and all documents in your secure 24/7 owner portal.",p:"owners"},
            ].map((f,i)=>(
              <div key={i} onClick={()=>go(f.p)} className="card" style={{padding:"28px 24px",cursor:"pointer",borderTop:`3px solid ${f.color}`,transition:"all .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 28px rgba(21,101,192,.13)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=""}}>
                <div style={{width:52,height:52,borderRadius:14,background:f.bg,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                  {f.svg}
                </div>
                <div style={{fontSize:15,fontWeight:700,color:"var(--t1)",marginBottom:7}}>{f.lbl}</div>
                <p style={{fontSize:13,color:"var(--t3)",lineHeight:1.75,marginBottom:14}}>{f.body}</p>
                <span style={{fontSize:12.5,fontWeight:700,color:f.color,display:"flex",alignItems:"center",gap:4}}>Learn more <Ic n="ar" s={11} c={f.color}/></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"var(--blue)"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)"}}>
            {[["500+","Managed"],["98%","Retention"],["14 Days","To Rent"],["$0","Hidden Fees"],["24/7","Support"],["18+","Years"]].map(([n,l],i)=>(
              <div key={l} style={{textAlign:"center",padding:"28px 10px",borderRight:i<5?"1px solid rgba(255,255,255,.1)":"none"}}>
                <div style={{fontFamily:"Lora,serif",fontSize:28,fontWeight:600,color:"white",lineHeight:1}}>{n}</div>
                <div style={{fontSize:10,color:"rgba(255,255,255,.45)",marginTop:4,textTransform:"uppercase",letterSpacing:".08em",fontWeight:600}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"white",padding:"72px 0"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"}}>
            <div>
              <span className="eyebrow">Why Rent Solutions</span>
              <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,38px)",color:"var(--t1)",marginBottom:14}}>Results-Based.<br/><span style={{fontStyle:"italic",color:"var(--green)"}}>Always Transparent.</span></h2>
              <p style={{fontSize:14.5,color:"var(--t3)",lineHeight:1.8,marginBottom:22}}>Our compensation is always tied to your results and happiness. No hidden fees, no marked-up maintenance.</p>
              {["Compensation tied directly to your results","No hidden fees or marked-up maintenance","Single point of contact — always the most knowledgeable","Licensed professionals, not part-time managers","Exclusive Pro Power Leasing technology","30-day guarantee and eviction protection included"].map(item=>(
                <div key={item} className="ck">
                  <div className="cm"><Ic n="check" s={10} c="var(--blue)"/></div><span>{item}</span>
                </div>
              ))}
              <div style={{display:"flex",gap:11,marginTop:22}}>
                <button className="btn btn-blue" onClick={()=>go("contact")}>Get a Free Quote</button>
                <button className="btn btn-ghost" onClick={()=>go("about")}>Our Story</button>
              </div>
            </div>
            <div style={{position:"relative"}}>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80" alt="Team" style={{width:"100%",borderRadius:"var(--r3)",boxShadow:"var(--sh3)"}}/>
              <div style={{position:"absolute",bottom:22,left:-16,background:"white",borderRadius:"var(--r2)",padding:"13px 17px",boxShadow:"var(--sh3)",border:"1px solid var(--border)"}}>
                <div style={{fontFamily:"Lora,serif",fontSize:21,fontWeight:600,color:"var(--green)"}}>INC 500</div>
                <div style={{fontSize:11.5,color:"var(--t3)",marginTop:2}}>Fastest Growing Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{background:"var(--off)",padding:"72px 0"}}>
        <div className="container">
          <div style={{textAlign:"center",marginBottom:40}}>
            <span className="eyebrow">Client Testimonials</span>
            <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,36px)",color:"var(--t1)"}}>Trusted Across Tampa Bay</h2>
            <div className="rule"/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:19}}>
            {[
              {n:"Robert M.",r:"Property Owner, 4 Properties",t:"Rent Solutions managed my portfolio for 3 years with zero vacancies last year. Transparent reporting and they treat my investment like their own."},
              {n:"Sarah T.",r:"Tenant · Westchase",t:"The tenant portal makes everything simple — paying rent, submitting maintenance requests, accessing documents all in one clean interface."},
              {n:"James K.",r:"Real Estate Investor",t:"Their market analysis helped identify two undervalued properties. ROI projections were spot-on. True investment partners, not just a management firm."},
            ].map((t,i)=>(
              <div key={i} className="card pad">
                <div style={{display:"flex",gap:3,marginBottom:11}}>{[1,2,3,4,5].map(s=><Ic key={s} n="star" s={12} c="var(--b3)"/>)}</div>
                <p style={{fontSize:13.5,color:"var(--t2)",lineHeight:1.8,marginBottom:17}}>{t.t}</p>
                <div style={{display:"flex",alignItems:"center",gap:11,paddingTop:13,borderTop:"1px solid var(--off2)"}}>
                  <div style={{width:34,height:34,borderRadius:"50%",background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"white"}}>{t.n[0]}</div>
                  <div>
                    <div style={{fontSize:13.5,fontWeight:700,color:"var(--t1)"}}>{t.n}</div>
                    <div style={{fontSize:11.5,color:"var(--t3)"}}>{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"var(--blue)",padding:"56px 0"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr auto",gap:48,alignItems:"center"}}>
          <div>
            <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(20px,3vw,34px)",color:"white",marginBottom:9}}>Ready to Maximize Your Property&apos;s Potential?</h2>
            <p style={{fontSize:14.5,color:"rgba(255,255,255,.62)",lineHeight:1.75,maxWidth:520}}>Get a free, no-obligation analysis. Enter your property address to get your free quote.</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:9,minWidth:188}}>
            <button className="btn btn-white btn-lg" onClick={()=>go("contact")} style={{justifyContent:"center"}}>GET A FREE QUOTE &gt;&gt;</button>
            <a href="tel:8135795597" className="btn btn-gw btn-lg" style={{justifyContent:"center"}}><Ic n="phone" s={14} c="white"/>(813) 579.5597</a>
          </div>
        </div>
      </div>
      {selL&&<LModal l={selL} onClose={()=>setSelL(null)}/>}
    </div>
  );
}

function ListingsPage(){
  const [ft,setFt]=useState("All");
  const [beds,setBeds]=useState(null);
  const [maxRent,setMaxRent]=useState("");
  const [sel,setSel]=useState(null);
  const types=["All","Single Family","Condominium","Townhouse","Apartment"];
  const filtered=LISTINGS.filter(l=>{
    if(ft!=="All"&&l.type!==ft)return false;
    if(beds&&l.beds<beds)return false;
    if(maxRent&&l.rent>parseInt(maxRent))return false;
    return true;
  });
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"42px 0 50px"}}>
        <div className="container">
          <span className="eyebrow" style={{color:"rgba(255,255,255,.65)"}}>Browse Rentals</span>
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,46px)",color:"white",marginBottom:7}}>Tampa Homes for Rent</h1>
          <p style={{color:"rgba(255,255,255,.58)",fontSize:14}}>Hillsborough, Pinellas &amp; Pasco Counties · {LISTINGS.length} properties available</p>
        </div>
      </div>
      <div style={{background:"white",borderBottom:"1px solid var(--border)",padding:"13px 0",position:"sticky",top:"var(--nav-h)",zIndex:50}}>
        <div className="container">
          <div style={{display:"flex",gap:9,alignItems:"center",flexWrap:"wrap"}}>
            <Ic n="filter" s={14} c="var(--t3)"/>
            <span style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".08em",marginRight:4}}>Type</span>
            {types.map(t=><button key={t} className={`chip${ft===t?" on":""}`} onClick={()=>setFt(t)}>{t}</button>)}
            <div style={{height:20,width:1,background:"var(--border2)",margin:"0 4px"}}/>
            <BedsDD beds={beds} setBeds={setBeds}/>
            <div style={{marginLeft:"auto",display:"flex",gap:9,alignItems:"center"}}>
              <input type="number" className="fi" placeholder="Max rent $" value={maxRent} onChange={e=>setMaxRent(e.target.value)} style={{width:116,padding:"7px 12px",fontSize:13}}/>
              <span style={{fontSize:13,color:"var(--t3)",fontWeight:600}}>{filtered.length} result{filtered.length!==1?"s":""}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{background:"var(--off)",padding:"30px 0 72px"}}>
        <div className="container">
          {filtered.length===0?(
            <div style={{textAlign:"center",padding:"60px 0"}}>
              <Ic n="search" s={38} c="var(--t4)"/>
              <h3 style={{fontFamily:"Lora,serif",fontSize:22,color:"var(--t1)",marginTop:14,marginBottom:7}}>No matching properties</h3>
              <p style={{fontSize:14,color:"var(--t3)"}}>Try adjusting your filters.</p>
            </div>
          ):(
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:19}}>
              {filtered.map(l=><PropCard key={l.id} l={l} onClick={()=>setSel(l)}/>)}
            </div>
          )}
        </div>
      </div>
      {sel&&<LModal l={sel} onClose={()=>setSel(null)}/>}
    </div>
  );
}

function OwnersPage({go}){
  const [tab,setTab]=useState("management");
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"50px 0"}}>
        <div className="container">
          <span className="eyebrow" style={{color:"rgba(255,255,255,.65)"}}>For Property Owners</span>
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,46px)",color:"white",marginBottom:11}}>Maximize Your Investment Returns</h1>
          <p style={{color:"rgba(255,255,255,.62)",fontSize:15,maxWidth:500,lineHeight:1.75,marginBottom:26}}>Zero hidden fees, total transparency, results-based compensation.</p>
          <div style={{display:"flex",gap:11}}>
            <button className="btn btn-white" onClick={()=>go("contact")}>Get Free Quote</button>
            <a href="tel:8135795597" className="btn btn-gw"><Ic n="phone" s={14} c="white"/>(813) 579.5597</a>
          </div>
        </div>
      </div>
      <div style={{background:"white",borderBottom:"1px solid var(--border)"}}>
        <div className="container">
          <div className="tbar">
            {[["management","Management"],["leasing","Leasing"],["portal","Owner Portal"],["pricing","Pricing"],["guarantees","Our Guarantees"],["rescue","Landlord Rescue"]].map(([id,label])=>(
              <div key={id} className={`tab${tab===id?" act":""}`} onClick={()=>setTab(id)}>{label}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"white",padding:"64px 0"}}>
        <div className="container">
          {tab==="management"&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"}}>
              <div>
                <span className="eyebrow">Full Property Management</span>
                <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,36px)",color:"var(--t1)",marginBottom:14}}>We Handle Everything</h2>
                <p style={{fontSize:14.5,color:"var(--t3)",lineHeight:1.8,marginBottom:22}}>From the moment a tenant signs to move-out, our team manages every aspect 24/7.</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}}>
                  {["Tenant Screening & Placement","24/7 Rent Collection","Maintenance Coordination","Annual Inspections","Monthly Financial Reports","Lease Preparation & Renewal","Legal Compliance","Eviction Handling"].map(item=>(
                    <div key={item} className="ck">
                      <div className="cm"><Ic n="check" s={10} c="var(--blue)"/></div>
                      <span style={{fontSize:13.5}}>{item}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-blue" style={{marginTop:22}} onClick={()=>go("contact")}>Get Started Today</button>
              </div>
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80" alt="Team" style={{width:"100%",borderRadius:"var(--r3)",boxShadow:"var(--sh3)"}}/>
            </div>
          )}
          {tab==="pricing"&&(
            <div>
              <div style={{textAlign:"center",marginBottom:40}}>
                <span className="eyebrow">Transparent Pricing</span>
                <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,36px)",color:"var(--t1)"}}>No Hidden Fees. Ever.</h2>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
                {[
                  {name:"Leasing Only",price:"One Month's Rent",period:"one-time fee",features:["Professional Photography","MLS Syndication","Tenant Screening","Lease Preparation","Move-In Inspection","30-Day Guarantee"],featured:false},
                  {name:"Full Management",price:"8%",period:"of monthly rent",features:["All Leasing Services","24/7 Maintenance","Monthly Statements","Annual Inspections","Eviction Coverage","Legal Compliance","Owner Portal Access"],featured:true},
                  {name:"Portfolio Premium",price:"10%",period:"of monthly rent",features:["All Full Management","Dedicated Manager","Quarterly Reviews","Real-Time Analytics","Priority Maintenance","Tax Document Prep"],featured:false},
                ].map((plan,i)=>(
                  <div key={i} className={`pc${plan.featured?" feat":""}`}>
                    {plan.featured&&<div style={{background:"var(--blue)",color:"white",textAlign:"center",padding:"7px",fontSize:11,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase"}}>Most Popular</div>}
                    <div style={{padding:25}}>
                      <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--g3)",marginBottom:9}}>{plan.name}</div>
                      <div style={{fontFamily:"Lora,serif",fontSize:36,fontWeight:600,color:"var(--t1)",lineHeight:1}}>{plan.price}</div>
                      <div style={{fontSize:12,color:"var(--t3)",marginBottom:16,paddingBottom:16,borderBottom:"1px solid var(--border)"}}>{plan.period}</div>
                      {plan.features.map(f=>(
                        <div key={f} style={{display:"flex",gap:9,padding:"7px 0",fontSize:13.5,alignItems:"flex-start"}}>
                          <div className="cm" style={{flexShrink:0}}><Ic n="check" s={10} c="var(--blue)"/></div>
                          <span style={{color:"var(--t2)"}}>{f}</span>
                        </div>
                      ))}
                      <button className={`btn ${plan.featured?"btn-blue":"btn-ghost"}`} style={{width:"100%",marginTop:20,justifyContent:"center"}}>Get Started</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {(tab==="leasing"||tab==="portal"||tab==="guarantees"||tab==="rescue")&&(
            <div style={{textAlign:"center",padding:"44px 0",maxWidth:560,margin:"0 auto"}}>
              <div style={{width:54,height:54,borderRadius:13,background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"}}>
                <Ic n={tab==="leasing"?"key":tab==="portal"?"doc":tab==="guarantees"?"shield":"award"} s={25} c="var(--blue)"/>
              </div>
              <h3 style={{fontFamily:"Lora,serif",fontSize:26,color:"var(--t1)",marginBottom:11}}>
                {tab==="leasing"?"Pro Power Leasing System":tab==="portal"?"Owner Portal — 24/7 Access":tab==="guarantees"?"Our Iron-Clad Guarantees":"Landlord Rescue Program"}
              </h3>
              <p style={{fontSize:15,color:"var(--t3)",lineHeight:1.8}}>
                {tab==="leasing"?"Our exclusive leasing system fills vacancies in an average of 14 days — 2x faster than the Tampa Bay market average. Includes professional photography, MLS syndication, and rigorous tenant screening.":
                  tab==="portal"?"Access statements, work orders, invoices, and all documents 24/7 through our secure AppFolio-powered Owner Portal. Electronic contributions are always free.":
                    tab==="guarantees"?"30-day rental guarantee. Eviction protection up to $1,500. No hidden fee guarantee. Satisfaction guarantee with no exit penalties. Results-based compensation always.":
                      "Inherited a difficult tenant or troubled property? Our Landlord Rescue program stabilizes problem properties fast. We step in, assess the situation, and create a turnaround plan."}
              </p>
              <button className="btn btn-blue" style={{marginTop:22}} onClick={()=>go("contact")}>Learn More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InvestorsPage({go}){
  const [tab,setTab]=useState("analyze");
  const tabs=[["analyze","Inspect & Analyze"],["portfolio","Portfolio Managers"],["turnaround","Turnaround"],["rehab","Oversee Rehab"],["multifamily","Multi-family"],["section8","Section 8"],["turnover","Turnover"],["legal","Legal"]];
  const content={
    analyze:{title:"Inspect & Analyze",icon:"search",body:"We provide critical market intelligence: rental rates by area, which neighborhoods have high vacancy, which properties are under-rented, and who is purchasing investment properties across Tampa Bay.",bullets:["Type of housing renters are looking for","Market rates for specific rental units","Which properties are under-rented","Which neighborhoods have high vacancy rates","Investment properties and communities for sale","Who is purchasing investment properties"]},
    portfolio:{title:"Portfolio Managers",icon:"chart",body:"For investors with multiple properties, our dedicated portfolio management service provides a single point of contact, consolidated reporting, and strategic planning to maximize your portfolio's overall ROI.",bullets:["Single point of contact for all properties","Consolidated monthly statements","Cross-property performance analytics","Strategic vacancy management","Portfolio-wide expense optimization","Dedicated portfolio manager"]},
    turnaround:{title:"Property Turnaround",icon:"award",body:"Struggling with a difficult property? Our turnaround specialists assess, stabilize, and restore underperforming rental properties to profitability through targeted improvements and strategic tenant replacement.",bullets:["Rapid property assessment","Tenant replacement strategy","Cost-effective rehabilitation","Targeted marketing repositioning","Stabilization to full occupancy","Ongoing performance monitoring"]},
    rehab:{title:"Oversee Rehab Projects",icon:"bld",body:"We coordinate and oversee complete rehabilitation projects from structural repairs to cosmetic upgrades, leveraging our network of licensed contractors to deliver quality work on time and on budget.",bullets:["Licensed contractor network","Project timeline management","Budget oversight and reporting","Quality control inspections","Permit coordination","Post-rehab rental optimization"]},
    multifamily:{title:"Multi-Family Properties",icon:"bld",body:"Multi-family properties in Tampa Bay represent a compelling opportunity. We specialize in managing apartment communities, duplexes, and townhome complexes with institutional-quality processes.",bullets:["Full apartment community management","HOA coordination","Common area maintenance","Comprehensive tenant screening","Lease administration","Financial reporting by unit"]},
    section8:{title:"Section 8 / HCV Program",icon:"shield",body:"Section 8 vouchers provide guaranteed rent payments, qualified tenants, and long-term occupancy. We handle all HUD compliance, inspections, and HAP payment processing on your behalf.",bullets:["HUD inspection preparation","HAP payment processing","Full compliance management","Tenant qualification verification","Guaranteed payment processing","Lease renewal coordination"]},
    turnover:{title:"Turnover Management",icon:"key",body:"Minimize vacancy days with our efficient turnover process. We coordinate cleaning, repairs, photography, and re-listing to return properties to market-ready condition as fast as possible.",bullets:["Move-out inspection within 24 hours","Contractor coordination","Professional cleaning","Touch-up repairs","New professional photography","Listed within 7 days of vacancy"]},
    legal:{title:"Legal Services & Compliance",icon:"doc",body:"From lease preparation to eviction proceedings, we ensure all actions comply with Florida landlord-tenant law. We work with experienced real estate attorneys to protect your investment.",bullets:["Florida lease preparation","Eviction proceedings","Security deposit compliance","Fair Housing compliance","Code violation response","Legal notice preparation"]},
  };
  const cur=content[tab];
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"50px 0"}}>
        <div className="container">
          <span className="eyebrow" style={{color:"rgba(255,255,255,.65)"}}>For Investors</span>
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,46px)",color:"white",marginBottom:11}}>Inspect, Analyze &amp; Maximize Returns</h1>
          <p style={{color:"rgba(255,255,255,.62)",fontSize:15,maxWidth:500,lineHeight:1.75}}>Professional analysis, expert consultation on rental rates, vacancy rates, and market data.</p>
        </div>
      </div>
      <div style={{background:"white",borderBottom:"1px solid var(--border)"}}>
        <div className="container">
          <div className="tbar">
            {tabs.map(([id,label])=>(
              <div key={id} className={`tab${tab===id?" act":""}`} onClick={()=>setTab(id)}>{label}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"white",padding:"64px 0"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"start"}}>
            <div>
              <div style={{width:48,height:48,borderRadius:12,background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                <Ic n={cur.icon} s={22} c="var(--blue)"/>
              </div>
              <span className="eyebrow">Investor Services</span>
              <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,36px)",color:"var(--t1)",marginBottom:14}}>{cur.title}</h2>
              <p style={{fontSize:14.5,color:"var(--t3)",lineHeight:1.8,marginBottom:22}}>{cur.body}</p>
              {cur.bullets.map(item=>(
                <div key={item} className="ck">
                  <div className="cm"><Ic n="check" s={10} c="var(--blue)"/></div>
                  <span>{item}</span>
                </div>
              ))}
              <button className="btn btn-blue" style={{marginTop:24}} onClick={()=>go("contact")}>Request an Analysis</button>
            </div>
            <div style={{background:"var(--blue)",borderRadius:"var(--r3)",padding:28}}>
              <div style={{fontSize:10.5,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.45)",marginBottom:18}}>Tampa Bay Occupancy Rates</div>
              {[["South Tampa",95],["Westchase",92],["Hyde Park",88],["Riverview",85],["Carrollwood",82],["Wesley Chapel",78],["Brandon",80],["New Tampa",76]].map(([a,p])=>(
                <div key={a} style={{marginBottom:14}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                    <span style={{fontSize:13,color:"rgba(255,255,255,.75)",fontWeight:500}}>{a}</span>
                    <span style={{fontSize:13,color:"white",fontWeight:700}}>{p}%</span>
                  </div>
                  <div style={{background:"rgba(255,255,255,.12)",borderRadius:100,height:5,overflow:"hidden"}}>
                    <div style={{width:`${p}%`,height:"100%",background:"rgba(255,255,255,.5)",borderRadius:100}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealtorsPage({go}){
  const [tab,setTab]=useState("overview");
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"50px 0"}}>
        <div className="container">
          <span className="eyebrow" style={{color:"rgba(255,255,255,.65)"}}>For Realtors</span>
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,46px)",color:"white",marginBottom:11}}>Make Money With Us</h1>
          <p style={{color:"rgba(255,255,255,.62)",fontSize:15,maxWidth:500,lineHeight:1.75}}>Multiple referral programs for Buyers &amp; Sellers. Your clients always remain yours.</p>
        </div>
      </div>
      <div style={{background:"white",borderBottom:"2px solid var(--blue)"}}>
        <div className="container">
          <div style={{display:"flex",gap:0}}>
            {[["overview","OVERVIEW"],["owner","REFER A PROPERTY OWNER"],["renter","REFER A RENTER"],["partner","PARTNER WITH US"],["faq","REALTOR FAQ"]].map(([id,label])=>(
              <div key={id} onClick={()=>setTab(id)} style={{
                padding:"14px 20px",fontSize:11.5,fontWeight:700,letterSpacing:".05em",cursor:"pointer",transition:"all .2s",
                background:tab===id?"var(--blue)":"transparent",color:tab===id?"white":"var(--t3)",
                borderBottom:tab===id?"2px solid var(--blue)":"2px solid transparent",marginBottom:-2,
              }}>{label}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"white",padding:"64px 0"}}>
        <div className="container">
          {tab==="overview"&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}}>
              <div>
                <span className="eyebrow">Realtor Program</span>
                <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,38px)",color:"var(--t1)",marginBottom:14}}>Your Clients Stay Yours</h2>
                <p style={{fontSize:14.5,color:"var(--t3)",lineHeight:1.8,marginBottom:20}}>Every referral remains your client for future real estate transactions. We build your pipeline while you earn referral income today.</p>
                <div style={{background:"var(--blt)",border:"1px solid var(--gmd)",borderRadius:"var(--r2)",padding:18,marginBottom:22}}>
                  <div style={{fontFamily:"Lora,serif",fontSize:15,fontWeight:600,color:"var(--t1)",marginBottom:5}}>Your referrals always come back to you</div>
                  <p style={{fontSize:13.5,color:"var(--t3)"}}>When they are ready to buy or sell, we refer them back to you. Your client relationship is always protected.</p>
                </div>
                <div style={{display:"flex",gap:12}}>
                  <button className="btn btn-blue" onClick={()=>setTab("owner")}>Refer an Owner</button>
                  <button className="btn btn-ghost" onClick={()=>setTab("renter")}>Refer a Renter</button>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                {[
                  {icon:"bld",label:"Refer a Property Owner",body:"Earn a referral fee when we place their property under management.",c:"green"},
                  {icon:"home",label:"Refer a Renter",body:"Connect renters to quality homes and earn a referral commission.",c:"blue"},
                  {icon:"hand",label:"Partner with Us",body:"Access our Realtor Solution Center with tools to generate more leads.",c:"green"},
                ].map((item,i)=>(
                  <div key={i} className="card pad" style={{display:"flex",gap:14,cursor:"pointer"}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor="var(--blue)"}
                    onMouseLeave={e=>e.currentTarget.style.borderColor="var(--border)"}>
                    <div style={{width:40,height:40,borderRadius:10,background:item.c==="blue"?"var(--blt)":"var(--glt)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <Ic n={item.icon} s={19} c={item.c==="blue"?"var(--blue)":"var(--green)"}/>
                    </div>
                    <div>
                      <div style={{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:4}}>{item.label}</div>
                      <p style={{fontSize:13,color:"var(--t3)",lineHeight:1.65}}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab!=="overview"&&(
            <div style={{maxWidth:640,margin:"0 auto",textAlign:"center"}}>
              <div style={{width:56,height:56,borderRadius:14,background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}>
                <Ic n={tab==="owner"?"bld":tab==="renter"?"home":tab==="partner"?"award":"info"} s={26} c="var(--blue)"/>
              </div>
              <h3 style={{fontFamily:"Lora,serif",fontSize:28,color:"var(--t1)",marginBottom:12}}>
                {tab==="owner"?"Refer a Property Owner":tab==="renter"?"Refer a Renter":tab==="partner"?"Partner with Us":"Realtor FAQs"}
              </h3>
              <p style={{fontSize:15,color:"var(--t3)",lineHeight:1.8,marginBottom:24}}>
                {tab==="owner"?"When a property owner you know needs a reliable management company, refer them to Rent Solutions and earn a referral fee when we sign them.":tab==="renter"?"Refer renters looking for quality homes across Tampa Bay. We'll find them the right property and provide you with a referral commission.":tab==="partner"?"Join our Realtor Solution Center to access marketing materials, referral tracking, and exclusive tools to generate more business.":"Have questions about our referral program? Review our most common questions from real estate professionals."}
              </p>
              <button className="btn btn-blue" onClick={()=>go("contact")}>Get Started</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutPage({go}){
  const [tab,setTab]=useState("company");
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"50px 0"}}>
        <div className="container">
          <span className="eyebrow" style={{color:"rgba(255,255,255,.65)"}}>About Us</span>
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,46px)",color:"white",marginBottom:11}}>Built on 20 Years of Trust</h1>
          <p style={{color:"rgba(255,255,255,.62)",fontSize:15,maxWidth:500}}>Our mission: maximum returns for owners, outstanding experience for tenants — guaranteed.</p>
        </div>
      </div>
      <div style={{background:"white",borderBottom:"1px solid var(--border)"}}>
        <div className="container">
          <div className="tbar">
            {[["company","Our Company"],["team","Our Team"],["join","Join Our Team"]].map(([id,label])=>(
              <div key={id} className={`tab${tab===id?" act":""}`} onClick={()=>setTab(id)}>{label}</div>
            ))}
            <div className="tab" onClick={()=>go("contact")}>Contact Us</div>
          </div>
        </div>
      </div>
      <div style={{background:"white",padding:"64px 0"}}>
        <div className="container">
          {tab==="company"&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64}}>
              <div>
                <span className="eyebrow">Our Journey</span>
                <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,36px)",color:"var(--t1)",marginBottom:32}}>How We Got Here</h2>
                <div className="tl">
                  {[
                    {yr:"Early Career",t:"Real Estate Investing",b:"Founder Steve Oehlerking started his career purchasing, rehabbing, and renting small apartment buildings and single-family homes in Gainesville, Florida."},
                    {yr:"1988",t:"Creating Rental Services",b:"Steve founded Apartment Hunters across Gainesville, Orlando, and Tampa. In 1998 it earned the INC 500 distinction as one of the 500 fastest growing private companies."},
                    {yr:"2004",t:"Founding Rent Solutions",b:"Rent Solutions was established to provide comprehensive property management services for renters, owners, investors, and real estate professionals across Greater Tampa Bay."},
                    {yr:"Today",t:"Moving Forward",b:"Constantly improving processes and leveraging technology to deliver a predictable, professional level of service that is typically not found in most markets."},
                  ].map((item,i)=>(
                    <div key={i} className="tlitem">
                      <div className="tldot"/>
                      <div style={{fontSize:10.5,fontWeight:700,color:"var(--g3)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:4}}>{item.yr}</div>
                      <h3 style={{fontFamily:"Lora,serif",fontSize:18,color:"var(--t1)",marginBottom:7}}>{item.t}</h3>
                      <p style={{fontSize:13.5,color:"var(--t3)",lineHeight:1.75}}>{item.b}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{background:"var(--blue)",borderRadius:"var(--r3)",padding:28,marginBottom:18}}>
                  <div style={{fontFamily:"Lora,serif",fontSize:17,fontStyle:"italic",color:"rgba(255,255,255,.85)",lineHeight:1.7,marginBottom:18}}>
                    "We operate with a high degree of transparency — our goals and profitability are always aligned with those of our clients. No hidden fees. No marked-up maintenance."
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:12}}>
                    <div style={{width:38,height:38,borderRadius:"50%",background:"rgba(255,255,255,.18)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:"white"}}>SO</div>
                    <div>
                      <div style={{fontSize:13.5,fontWeight:700,color:"white"}}>Steve Oehlerking</div>
                      <div style={{fontSize:11.5,color:"rgba(255,255,255,.5)"}}>Founder &amp; CEO</div>
                    </div>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                  {[["18+","Years in Business"],["500+","Properties Managed"],["98%","Owner Retention"],["$0","Hidden Fees"]].map(([n,l])=>(
                    <div key={l} style={{background:"white",border:"1px solid var(--border)",borderRadius:"var(--r2)",padding:22}}>
                      <div style={{fontFamily:"Lora,serif",fontSize:34,fontWeight:600,color:"var(--blue)",lineHeight:1,marginBottom:4}}>{n}</div>
                      <div style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".07em"}}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {tab==="team"&&(
            <div>
              <div style={{textAlign:"center",marginBottom:44}}>
                <span className="eyebrow">Our People</span>
                <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,36px)",color:"var(--t1)"}}>Meet the Team</h2>
                <div className="rule"/>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
                {[
                  {name:"Steve Oehlerking",role:"Founder & CEO",bio:"20+ years in Tampa Bay real estate. INC 500 winner. Passionate about transparent, results-based property management."},
                  {name:"Lisa Martinez",role:"Director of Operations",bio:"Oversees all day-to-day operations, maintenance coordination, and tenant relations across the portfolio."},
                  {name:"David Chen",role:"Director of Leasing",bio:"Leads Pro Power Leasing operations. Expert in digital marketing, professional photography, and tenant placement."},
                  {name:"Amanda Johnson",role:"Accounting Manager",bio:"Manages owner disbursements, financial reporting, and ensures 100% transparency in all transactions."},
                  {name:"Carlos Rivera",role:"Maintenance Coordinator",bio:"24/7 maintenance response team lead. Manages licensed contractor network and emergency response protocols."},
                  {name:"Sarah Kim",role:"Leasing Specialist",bio:"Resident specialist for tenant relations, lease renewals, and the onboarding of new properties to management."},
                ].map((m,i)=>(
                  <div key={i} className="card pad" style={{textAlign:"center"}}>
                    <div style={{width:64,height:64,borderRadius:"50%",background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:700,color:"white",margin:"0 auto 14px"}}>
                      {m.name.split(" ").map(w=>w[0]).join("")}
                    </div>
                    <div style={{fontSize:15,fontWeight:700,color:"var(--t1)",marginBottom:3}}>{m.name}</div>
                    <div style={{fontSize:12,fontWeight:600,color:"var(--blue)",marginBottom:10}}>{m.role}</div>
                    <p style={{fontSize:13,color:"var(--t3)",lineHeight:1.7}}>{m.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab==="join"&&(
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"start"}}>
              <div>
                <span className="eyebrow">Careers</span>
                <h2 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,36px)",color:"var(--t1)",marginBottom:14}}>Join Our Team</h2>
                <p style={{fontSize:14.5,color:"var(--t3)",lineHeight:1.8,marginBottom:24}}>We are always looking for talented people who share our passion for excellent service and transparent business practices.</p>
                {[
                  {title:"Property Manager",type:"Full-Time",dept:"Operations"},
                  {title:"Leasing Specialist",type:"Full-Time",dept:"Leasing"},
                  {title:"Maintenance Coordinator",type:"Full-Time",dept:"Maintenance"},
                  {title:"Accounting Associate",type:"Part-Time",dept:"Finance"},
                ].map((job,i)=>(
                  <div key={i} className="card pad" style={{marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <div style={{fontSize:14.5,fontWeight:700,color:"var(--t1)"}}>{job.title}</div>
                      <div style={{fontSize:12.5,color:"var(--t3)"}}>{job.dept} · {job.type}</div>
                    </div>
                    <button className="btn btn-ghost btn-sm">Apply</button>
                  </div>
                ))}
              </div>
              <div style={{background:"var(--blt)",border:"1px solid var(--gmd)",borderRadius:"var(--r3)",padding:28}}>
                <h3 style={{fontFamily:"Lora,serif",fontSize:20,color:"var(--t1)",marginBottom:14}}>Why Work Here?</h3>
                {["Competitive compensation tied to results","Team culture built on transparency","Growth opportunities in a thriving market","Flexible schedules for qualified candidates","Modern tools and technology","Supportive, collaborative environment"].map(item=>(
                  <div key={item} className="ck"><div className="cm"><Ic n="check" s={10} c="var(--blue)"/></div><span>{item}</span></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BlogPage(){
  const [sel,setSel]=useState(null);
  const [cat,setCat]=useState("All");
  const cats=["All","Management","Renter Tips","Market Updates","Investors"];
  const filtered=cat==="All"?BLOG_POSTS:BLOG_POSTS.filter(p=>p.cat===cat);
  if(sel)return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"42px 0"}}>
        <div className="container">
          <button className="btn btn-gw btn-sm" onClick={()=>setSel(null)} style={{marginBottom:12}}><Ic n="al" s={13} c="white"/> Back to Blog</button>
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(22px,3.5vw,38px)",color:"white",marginBottom:7}}>{sel.title}</h1>
          <p style={{color:"rgba(255,255,255,.55)",fontSize:13}}>{sel.date} · <span className="badge bg-green" style={{background:"rgba(255,255,255,.15)",color:"white"}}>{sel.cat}</span></p>
        </div>
      </div>
      <div style={{background:"white",padding:"48px 0"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:48}}>
          <div>
            <img src={sel.img} alt={sel.title} style={{width:"100%",height:300,objectFit:"cover",borderRadius:"var(--r3)",marginBottom:28}}/>
            <p style={{fontSize:15,color:"var(--t2)",lineHeight:1.85}}>{sel.excerpt}</p>
            <p style={{fontSize:15,color:"var(--t2)",lineHeight:1.85,marginTop:16}}>
              Property management requires attention to detail, responsiveness to tenant needs, and a commitment to maintaining the value of the investment. Whether you are a first-time landlord or a seasoned investor with multiple properties, the principles remain the same: treat your property like a business, communicate clearly, and address issues proactively.
            </p>
            <p style={{fontSize:15,color:"var(--t2)",lineHeight:1.85,marginTop:16}}>
              At Rent Solutions, we handle every aspect of this process professionally so you do not have to. Our team is available 24/7 for maintenance emergencies, our accounting is fully transparent with no hidden fees, and our results speak for themselves: 98% owner retention and an average vacancy rate well below the Tampa Bay market.
            </p>
          </div>
          <div>
            <div className="card pad" style={{marginBottom:18}}>
              <div style={{fontSize:13,fontWeight:700,color:"var(--t1)",marginBottom:12}}>Recent Posts</div>
              {BLOG_POSTS.slice(0,4).map(p=>(
                <div key={p.id} onClick={()=>setSel(p)} style={{padding:"9px 0",borderBottom:"1px solid var(--off2)",cursor:"pointer"}}>
                  <div style={{fontSize:13,fontWeight:600,color:"var(--blue)",lineHeight:1.5}}>{p.title}</div>
                  <div style={{fontSize:11.5,color:"var(--t4)",marginTop:2}}>{p.date}</div>
                </div>
              ))}
            </div>
            <div className="card pad">
              <div style={{fontSize:13,fontWeight:700,color:"var(--t1)",marginBottom:12}}>Tags</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                {cats.filter(c=>c!=="All").map(c=><span key={c} className="badge bg-green" style={{cursor:"pointer"}} onClick={()=>{setSel(null);setCat(c);}}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"42px 0"}}>
        <div className="container">
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,44px)",color:"white",marginBottom:7}}>24/7 Property Management</h1>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:14,fontStyle:"italic"}}>Lease It, Manage It, Protect It...Guaranteed!</p>
        </div>
      </div>
      <div style={{background:"white",borderBottom:"1px solid var(--border)",padding:"13px 0"}}>
        <div className="container">
          <div style={{display:"flex",gap:9,alignItems:"center"}}>
            <span style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".08em"}}>Property Management Blog</span>
            <div style={{height:16,width:1,background:"var(--border2)",margin:"0 4px"}}/>
            {cats.map(c=><button key={c} className={`chip${cat===c?" on":""}`} onClick={()=>setCat(c)}>{c}</button>)}
          </div>
        </div>
      </div>
      <div style={{background:"var(--off)",padding:"32px 0 72px"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 280px",gap:36}}>
          <div>
            {filtered.map(p=>(
              <div key={p.id} style={{background:"white",border:"1px solid var(--border)",borderRadius:"var(--r2)",marginBottom:22,overflow:"hidden",boxShadow:"var(--sh)"}}>
                <div style={{padding:"20px 24px 8px"}}>
                  <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
                    <span className="badge bg-green">{p.cat}</span>
                    <span style={{fontSize:12,color:"var(--t4)"}}>{p.date}</span>
                  </div>
                  <h2 style={{fontSize:16.5,fontWeight:700,color:"var(--blue)",marginBottom:8,cursor:"pointer"}} onClick={()=>setSel(p)}>{p.title}</h2>
                  <p style={{fontSize:13.5,color:"var(--t2)",lineHeight:1.75}}>{p.excerpt.substring(0,200)}...</p>
                  <button className="btn-txt" style={{marginTop:10,fontSize:13}} onClick={()=>setSel(p)}>more...</button>
                </div>
                <hr style={{border:"none",borderTop:"1px solid var(--off2)",margin:"0 24px"}}/>
              </div>
            ))}
          </div>
          <div>
            <div className="card pad" style={{marginBottom:18}}>
              <div style={{fontSize:13,fontWeight:700,color:"var(--t1)",marginBottom:12}}>Recent Posts</div>
              {BLOG_POSTS.slice(0,4).map(p=>(
                <div key={p.id} onClick={()=>setSel(p)} style={{padding:"8px 0",borderBottom:"1px solid var(--off2)",cursor:"pointer"}}>
                  <div style={{fontSize:13,fontWeight:600,color:"var(--blue)",lineHeight:1.5}}>{p.title}</div>
                </div>
              ))}
            </div>
            <div className="card pad">
              <div style={{fontSize:13,fontWeight:700,color:"var(--t1)",marginBottom:12}}>Tags</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                {cats.filter(c=>c!=="All").map(c=><span key={c} className="badge bg-green" style={{cursor:"pointer"}} onClick={()=>setCat(c)}>{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage(){
  const [form,setForm]=useState({name:"",email:"",phone:"",type:"owner",msg:""});
  const [sent,setSent]=useState(false);
  const [loading,setLoading]=useState(false);
  const handle=()=>{
    if(!form.name||!form.email)return;
    setLoading(true);
    setTimeout(()=>{setLoading(false);setSent(true);},1100);
  };
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"52px 0 0"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64}}>
            <div style={{paddingBottom:52}}>
              <span className="eyebrow" style={{color:"rgba(255,255,255,.7)"}}>Get In Touch</span>
              <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,44px)",color:"white",marginBottom:12}}>Start a Conversation</h1>
              <p style={{color:"rgba(255,255,255,.6)",fontSize:14.5,lineHeight:1.8,marginBottom:36}}>Free, no-obligation quote. No spam.</p>
              {[
                {icon:"phone",label:"Phone",val:"(813) 579.5597",sub:"Call or text anytime"},
                {icon:"mail",label:"Email",val:"info@rentsolutions.com",sub:"Reply within 2 business hours"},
                {icon:"map",label:"Area",val:"Greater Tampa Bay, FL",sub:"Hillsborough · Pinellas · Pasco"},
              ].map(({icon,label,val,sub})=>(
                <div key={label} style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:20}}>
                  <div style={{width:38,height:38,borderRadius:9,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <Ic n={icon} s={17} c="rgba(255,255,255,.7)"/>
                  </div>
                  <div>
                    <div style={{fontSize:10.5,color:"rgba(255,255,255,.45)",fontWeight:700,textTransform:"uppercase",letterSpacing:".08em",marginBottom:2}}>{label}</div>
                    <div style={{fontSize:14.5,fontWeight:700,color:"white"}}>{val}</div>
                    <div style={{fontSize:12,color:"rgba(255,255,255,.45)"}}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:"white",borderRadius:"14px 14px 0 0",padding:"32px 28px",alignSelf:"flex-end"}}>
              {sent?(
                <div style={{textAlign:"center",padding:"36px 0"}}>
                  <div style={{width:52,height:52,borderRadius:"50%",background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}>
                    <Ic n="check" s={26} c="var(--blue)"/>
                  </div>
                  <h2 style={{fontFamily:"Lora,serif",fontSize:21,color:"var(--t1)",marginBottom:8}}>Message Sent!</h2>
                  <p style={{fontSize:13.5,color:"var(--t3)",lineHeight:1.75}}>A team member will contact you within 2 business hours.</p>
                </div>
              ):(
                <>
                  <h3 style={{fontFamily:"Lora,serif",fontSize:19,color:"var(--t1)",marginBottom:4}}>Get Your Free Quote</h3>
                  <p style={{fontSize:13,color:"var(--t3)",marginBottom:20}}>No obligation. No hidden fees.</p>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                    <div className="fg"><label className="fl">Full Name *</label><input className="fi" placeholder="John Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
                    <div className="fg"><label className="fl">Email *</label><input className="fi" type="email" placeholder="john@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                    <div className="fg"><label className="fl">Phone</label><input className="fi" placeholder="(813) 555-0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/></div>
                    <div className="fg"><label className="fl">I am a...</label>
                      <select className="fs" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
                        <option value="owner">Property Owner</option>
                        <option value="renter">Prospective Renter</option>
                        <option value="investor">Investor</option>
                        <option value="realtor">Realtor</option>
                      </select>
                    </div>
                  </div>
                  <div className="fg"><label className="fl">Message / Property Address</label><textarea className="fta" placeholder="Tell us about your property..." value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})}/></div>
                  <button className="btn btn-blue" style={{width:"100%",justifyContent:"center",padding:12}} onClick={handle} disabled={loading}>
                    {loading?<span style={{display:"inline-block",width:14,height:14,border:"2px solid rgba(255,255,255,.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>:"GET A FREE QUOTE >>"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RentalApp(){
  const [step,setStep]=useState(0);
  const [sent,setSent]=useState(false);
  const steps=["Personal Info","Rental History","Employment","Review & Submit"];
  return(
    <div style={{paddingTop:"var(--nav-h)",background:"var(--off)",minHeight:"100vh"}}>
      <div style={{background:"var(--blue)",padding:"38px 0"}}>
        <div className="container">
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(24px,4vw,40px)",color:"white",marginBottom:7}}>Rental Application</h1>
          <p style={{color:"rgba(255,255,255,.6)",fontSize:14}}>Apply online for any of our available properties.</p>
        </div>
      </div>
      <div className="container" style={{maxWidth:680,padding:"40px 32px"}}>
        <div style={{display:"flex",marginBottom:32}}>
          {steps.map((s,i)=>(
            <div key={s} style={{flex:1,textAlign:"center"}}>
              <div style={{display:"flex",alignItems:"center"}}>
                {i>0&&<div style={{flex:1,height:2,background:i<=step?"var(--blue)":"var(--border)"}}/>}
                <div style={{width:28,height:28,borderRadius:"50%",background:i<=step?"var(--blue)":"var(--border)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {i<step?<Ic n="check" s={13} c="white"/>:<span style={{fontSize:12,fontWeight:700,color:i<=step?"white":"var(--t4)"}}>{i+1}</span>}
                </div>
                {i<steps.length-1&&<div style={{flex:1,height:2,background:i<step?"var(--blue)":"var(--border)"}}/>}
              </div>
              <div style={{fontSize:11,fontWeight:600,color:i===step?"var(--blue)":"var(--t4)",marginTop:6}}>{s}</div>
            </div>
          ))}
        </div>
        {sent?(
          <div className="card pad" style={{textAlign:"center",padding:"48px"}}>
            <div style={{width:56,height:56,borderRadius:"50%",background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"}}>
              <Ic n="check" s={28} c="var(--blue)"/>
            </div>
            <h2 style={{fontFamily:"Lora,serif",fontSize:24,color:"var(--t1)",marginBottom:8}}>Application Submitted!</h2>
            <p style={{fontSize:14.5,color:"var(--t3)",lineHeight:1.75}}>Thank you for applying. Our leasing team will review your application and contact you within 1-2 business days.</p>
          </div>
        ):(
          <div className="card pad">
            {step===0&&(
              <>
                <h3 style={{fontFamily:"Lora,serif",fontSize:19,color:"var(--t1)",marginBottom:20}}>Personal Information</h3>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                  <div className="fg"><label className="fl">First Name *</label><input className="fi" placeholder="First"/></div>
                  <div className="fg"><label className="fl">Last Name *</label><input className="fi" placeholder="Last"/></div>
                  <div className="fg"><label className="fl">Email *</label><input className="fi" type="email" placeholder="email@example.com"/></div>
                  <div className="fg"><label className="fl">Phone *</label><input className="fi" placeholder="(813) 555-0000"/></div>
                  <div className="fg"><label className="fl">Date of Birth</label><input className="fi" type="date"/></div>
                  <div className="fg"><label className="fl">SSN (last 4)</label><input className="fi" placeholder="XXXX" maxLength={4}/></div>
                </div>
                <div className="fg"><label className="fl">Current Address</label><input className="fi" placeholder="Street address"/></div>
              </>
            )}
            {step===1&&(
              <>
                <h3 style={{fontFamily:"Lora,serif",fontSize:19,color:"var(--t1)",marginBottom:20}}>Rental History</h3>
                <div className="fg"><label className="fl">Current Landlord Name</label><input className="fi" placeholder="Landlord name"/></div>
                <div className="fg"><label className="fl">Landlord Phone</label><input className="fi" placeholder="(813) 555-0000"/></div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                  <div className="fg"><label className="fl">Monthly Rent Paid</label><input className="fi" type="number" placeholder="$0"/></div>
                  <div className="fg"><label className="fl">Length of Tenancy</label><input className="fi" placeholder="e.g. 2 years"/></div>
                </div>
                <div className="fg"><label className="fl">Reason for Leaving</label><textarea className="fta" placeholder="Reason for leaving..."/></div>
              </>
            )}
            {step===2&&(
              <>
                <h3 style={{fontFamily:"Lora,serif",fontSize:19,color:"var(--t1)",marginBottom:20}}>Employment &amp; Income</h3>
                <div className="fg"><label className="fl">Employer Name</label><input className="fi" placeholder="Company name"/></div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
                  <div className="fg"><label className="fl">Occupation/Title</label><input className="fi" placeholder="Your role"/></div>
                  <div className="fg"><label className="fl">Monthly Gross Income</label><input className="fi" type="number" placeholder="$0"/></div>
                </div>
                <div className="fg">
                  <label className="fl">Proof of Income</label>
                  <div className="uz"><Ic n="upload" s={20} c="var(--t4)"/><div style={{fontSize:13,color:"var(--t3)",marginTop:8}}>Upload pay stubs or bank statements</div></div>
                </div>
              </>
            )}
            {step===3&&(
              <>
                <h3 style={{fontFamily:"Lora,serif",fontSize:19,color:"var(--t1)",marginBottom:20}}>Review &amp; Submit</h3>
                <div style={{background:"var(--blt)",border:"1px solid var(--gmd)",borderRadius:"var(--r2)",padding:16,marginBottom:20}}>
                  <p style={{fontSize:13.5,color:"var(--t2)",lineHeight:1.75}}>By submitting this application, you authorize Rent Solutions to run a credit and background check. A $50 application fee will be charged.</p>
                </div>
                <label style={{display:"flex",gap:10,alignItems:"flex-start",cursor:"pointer",fontSize:13.5,color:"var(--t2)",marginBottom:16}}>
                  <input type="checkbox" style={{marginTop:3,accentColor:"var(--blue)"}}/>
                  I confirm all information provided is accurate and authorize the required checks.
                </label>
              </>
            )}
            <div style={{display:"flex",gap:10,justifyContent:"space-between",marginTop:20}}>
              {step>0&&<button className="btn btn-ghost" onClick={()=>setStep(step-1)}><Ic n="al" s={13}/> Back</button>}
              <div style={{marginLeft:"auto"}}>
                {step<3?(
                  <button className="btn btn-blue" onClick={()=>setStep(step+1)}>Continue <Ic n="ar" s={13} c="white"/></button>
                ):(
                  <button className="btn btn-blue" onClick={()=>setSent(true)}>Submit Application</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RentersPage({go}){
  return(
    <div style={{paddingTop:"var(--nav-h)",width:"100%",overflowX:"hidden"}}>
      <div style={{background:"var(--blue)",padding:"50px 0"}}>
        <div className="container">
          <span className="eyebrow" style={{color:"rgba(255,255,255,.65)"}}>For Renters</span>
          <h1 style={{fontFamily:"Lora,serif",fontSize:"clamp(26px,4vw,46px)",color:"white",marginBottom:11}}>Your Home Awaits</h1>
          <p style={{color:"rgba(255,255,255,.62)",fontSize:15,maxWidth:500,lineHeight:1.75}}>Simple, transparent, and stress-free rental experience across Greater Tampa Bay.</p>
        </div>
      </div>
      <div style={{background:"white",padding:"64px 0"}}>
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginBottom:48}}>
            {[
              {icon:"search",c:"green",label:"Search Our Listings",body:"Browse all available homes, condos, townhomes, and apartments across Tampa Bay filtered by beds, rent, and location.",cta:"Browse Listings",p:"listings"},
              {icon:"pay",c:"green",label:"Tenant Portal",body:"Pay rent online, submit maintenance requests, and manage your tenancy 24/7 through our secure resident portal.",cta:"Access Portal",p:"portal-login"},
              {icon:"doc",c:"blue",label:"Rental Application",body:"Apply online in minutes. Upload required documents, pay the application fee, and track your status all in one place.",cta:"Apply Now",p:"rental-app"},
            ].map((item,i)=>(
              <div key={i} className="card pad" style={{textAlign:"center"}}>
                <div style={{width:50,height:50,borderRadius:13,background:item.c==="blue"?"var(--blt)":"var(--glt)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}>
                  <Ic n={item.icon} s={23} c={item.c==="blue"?"var(--blue)":"var(--green)"}/>
                </div>
                <div style={{fontSize:15,fontWeight:700,color:"var(--t1)",marginBottom:8}}>{item.label}</div>
                <p style={{fontSize:13.5,color:"var(--t3)",lineHeight:1.75,marginBottom:18}}>{item.body}</p>
                <button className="btn btn-green btn-sm" style={{width:"100%",justifyContent:"center"}} onClick={()=>go(item.p)}>{item.cta}</button>
              </div>
            ))}
          </div>
          <div style={{background:"#FEF2F2",borderRadius:"var(--r2)",padding:"14px 20px",border:"1px solid rgba(220,38,38,.12)",display:"flex",gap:12,alignItems:"center"}}>
            <Ic n="phone" s={18} c="#DC2626"/>
            <div>
              <span style={{fontSize:13.5,fontWeight:700,color:"#DC2626"}}>Maintenance Emergency? </span>
              <span style={{fontSize:13.5,color:"var(--t2)"}}>For life-safety emergencies call <b>911</b>. For urgent maintenance: </span>
              <a href="tel:8135795597" style={{fontSize:13.5,fontWeight:700,color:"var(--blue)"}}>(813) 579.5597</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalLogin({go,initType="tenant"}){
  const [email,setEmail]=useState("");
  const [pw,setPw]=useState("");
  const [showPw,setShowPw]=useState(false);
  const [ptype,setPtype]=useState(initType);
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState("");
  const handle=()=>{
    if(!email||!pw){setErr("Please enter your username and password.");return;}
    if(email==="Admin"&&pw==="Lanterna"){
      setLoading(true);
      setTimeout(()=>{setLoading(false);go("admin-dashboard","Admin");},900);
      return;
    }
    setErr("");setLoading(true);
    setTimeout(()=>{setLoading(false);go("portal-dashboard",ptype==="owner"?"Owner":"Tenant");},1000);
  };
  return(
    <div style={{minHeight:"100vh",background:"var(--off)",display:"flex",alignItems:"center",justifyContent:"center",padding:24,paddingTop:90}}>
      <div style={{position:"fixed",top:0,left:0,right:0,height:66,background:"white",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",padding:"0 32px",zIndex:100}}>
        <div onClick={()=>go("home")}><Logo/></div>
        <div style={{marginLeft:"auto"}}><button className="btn btn-ghost btn-sm" onClick={()=>go("home")}>Back to Site</button></div>
      </div>
      <div style={{width:400}}>
        <div style={{textAlign:"center",marginBottom:20}}><Logo/></div>
        <div className="card" style={{padding:"32px 28px"}}>
          <div style={{textAlign:"center",marginBottom:22}}>
            <div style={{width:46,height:46,borderRadius:11,background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 13px"}}>
              <Ic n={ptype==="owner"?"bld":"home"} s={21} c="white"/>
            </div>
            <h2 style={{fontFamily:"Lora,serif",fontSize:20,color:"var(--t1)",marginBottom:4}}>
              {ptype==="tenant"?"Resident Center":"Owner Portal"}
            </h2>
            <p style={{fontSize:13,color:"var(--t3)"}}>Sign in to access your account</p>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:19}}>
            {[["tenant","Tenant Login"],["owner","Owner Login"]].map(([v,l])=>(
              <button key={v} onClick={()=>{setPtype(v);setErr("");}} style={{
                flex:1,padding:"9px",borderRadius:"var(--r)",
                border:`1.5px solid ${ptype===v?"var(--blue)":"var(--border)"}`,
                background:ptype===v?"var(--blue)":"transparent",
                color:ptype===v?"white":"var(--t3)",
                fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer",transition:"all .2s",
              }}>{l}</button>
            ))}
          </div>
          <div className="fg"><label className="fl">Username / Email</label>
            <input className="fi" placeholder="Email or username" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()}/>
          </div>
          <div className="fg" style={{position:"relative"}}>
            <label className="fl">Password</label>
            <input className="fi" type={showPw?"text":"password"} placeholder="..." value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()} style={{paddingRight:42}}/>
            <button onClick={()=>setShowPw(!showPw)} style={{position:"absolute",right:12,top:32,background:"none",border:"none",cursor:"pointer",color:"var(--t4)"}}>
              <Ic n={showPw?"eyeoff":"eye"} s={16}/>
            </button>
          </div>
          {err&&<div style={{fontSize:12.5,color:"#DC2626",marginBottom:10,padding:"8px 12px",background:"#FEF2F2",borderRadius:"var(--r)",border:"1px solid rgba(220,38,38,.15)"}}>{err}</div>}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:17}}>
            <label style={{display:"flex",alignItems:"center",gap:7,cursor:"pointer",fontSize:13,color:"var(--t2)"}}>
              <input type="checkbox" style={{width:14,height:14,accentColor:"var(--blue)"}}/> Remember me
            </label>
            <button className="btn-txt" style={{fontSize:13}}>Forgot password?</button>
          </div>
          <button className="btn btn-blue" style={{width:"100%",justifyContent:"center",padding:12}} onClick={handle} disabled={loading}>
            {loading?<span style={{display:"inline-block",width:14,height:14,border:"2px solid rgba(255,255,255,.3)",borderTopColor:"white",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>:"Sign In"}
          </button>
          <div style={{marginTop:14,padding:"12px",background:"var(--off)",borderRadius:"var(--r)",fontSize:12,color:"var(--t3)",textAlign:"center"}}>
            <span style={{fontWeight:700,color:"var(--t2)"}}>Admin Access:</span> Username <b>Admin</b> / Password <b>Lanterna</b>
          </div>
        </div>
      </div>
    </div>
  );
}


function OwnerPortal({go}){
  const [pt,setPt]=useState("overview");
  const [toast,setToast]=useState(null);
  const showToast=msg=>{setToast(msg);setTimeout(()=>setToast(null),2600);};
  const NAV=[
    {id:"overview",icon:"home",label:"Overview"},
    {id:"properties",icon:"bld",label:"My Properties"},
    {id:"financials",icon:"pay",label:"Financials"},
    {id:"maintenance",icon:"wrench",label:"Maintenance"},
    {id:"tenants",icon:"users",label:"Tenants"},
    {id:"statements",icon:"doc",label:"Statements"},
    {id:"settings",icon:"settings",label:"Settings"},
  ];
  const renderMain=()=>{
    if(pt==="overview")return(
      <div className="pcnt au">
        <div className="phdr">
          <div>
            <div style={{fontSize:20,fontWeight:800,color:"var(--t1)"}}>Owner Dashboard</div>
            <div style={{fontSize:13,color:"var(--t3)",marginTop:2}}>Welcome back · Portfolio Overview</div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={()=>go("home")}><Ic n="home" s={13}/>View Site</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:22}}>
          {[["3","Active Properties","bld","blue"],["2","Occupied","home","green"],["1","Vacant","key","amber"],["$5,550","Monthly Income","pay","blue"]].map(([v,l,icon,c])=>(
            <div key={l} style={{background:"white",border:"1px solid var(--border)",borderRadius:"var(--r2)",padding:20}}>
              <div style={{width:36,height:36,borderRadius:9,background:c==="green"?"var(--glt)":c==="amber"?"#FFF8E1":"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10}}>
                <Ic n={icon} s={17} c={c==="green"?"var(--green)":c==="amber"?"#E65100":"var(--blue)"}/>
              </div>
              <div style={{fontFamily:"Lora,serif",fontSize:28,fontWeight:600,color:"var(--t1)",lineHeight:1,marginBottom:3}}>{v}</div>
              <div style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".07em"}}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
          <div className="card" style={{overflow:"hidden"}}>
            <div style={{padding:"14px 18px",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontSize:14,fontWeight:700,color:"var(--t1)"}}>Recent Activity</span>
            </div>
            {[
              {icon:"pay",msg:"Rent payment received — Unit 4821 Cypress Chase",time:"2 hrs ago",c:"green"},
              {icon:"wrench",msg:"Maintenance request — 9203 River Glen Blvd",time:"Yesterday",c:"amber"},
              {icon:"doc",msg:"Owner statement ready — March 2024",time:"Apr 1, 2024",c:"blue"},
              {icon:"check",msg:"Lease renewed — 2716 Bayshore Blvd",time:"Mar 28, 2024",c:"green"},
            ].map((item,i)=>(
              <div key={i} style={{padding:"12px 18px",borderBottom:"1px solid var(--off2)",display:"flex",gap:12,alignItems:"center"}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:item.c==="green"?"var(--glt)":item.c==="blue"?"var(--blt)":"#FFF8E1",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Ic n={item.icon} s={14} c={item.c==="green"?"var(--green)":item.c==="blue"?"var(--blue)":"#E65100"}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:500,color:"var(--t1)"}}>{item.msg}</div>
                  <div style={{fontSize:11.5,color:"var(--t4)",marginTop:2}}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card pad">
            <div style={{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:16}}>Revenue Overview — March</div>
            {[["Monthly Rent Collected","$5,550","t1"],["Management Fees (8%)","−$444","red"],["Maintenance Work Orders","$185","amber"],["Net Owner Disbursement","$4,921","green"]].map(([l,v,c])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:"1px solid var(--off2)"}}>
                <span style={{fontSize:13.5,color:"var(--t2)"}}>{l}</span>
                <span style={{fontSize:14,fontWeight:700,color:c==="green"?"var(--green)":c==="red"?"#DC2626":c==="amber"?"#D97706":"var(--t1)"}}>{v}</span>
              </div>
            ))}
            <button className="btn btn-blue btn-sm" style={{marginTop:16,width:"100%",justifyContent:"center"}} onClick={()=>setPt("statements")}>View Full Statement</button>
          </div>
        </div>
      </div>
    );
    if(pt==="properties")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>My Properties</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr",gap:14}}>
          {[
            {addr:"4821 Cypress Chase Dr, Tampa FL 33624",type:"Single Family",beds:4,baths:2,rent:"$2,450",status:"Occupied",tenant:"Jordan Williams",nextDue:"May 1"},
            {addr:"9203 River Glen Blvd, Riverview FL 33578",type:"Single Family",beds:3,baths:2,rent:"$1,950",status:"Occupied",tenant:"Maria Gonzalez",nextDue:"May 1"},
            {addr:"2716 Bayshore Blvd #204, Tampa FL 33629",type:"Condominium",beds:2,baths:2,rent:"$1,795",status:"Vacant",tenant:"—",nextDue:"—"},
          ].map((p,i)=>(
            <div key={i} className="card pad">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
                <div>
                  <div style={{fontSize:15,fontWeight:700,color:"var(--t1)",marginBottom:3}}>{p.addr}</div>
                  <div style={{fontSize:12.5,color:"var(--t3)"}}>{p.type} · {p.beds} bed / {p.baths} bath</div>
                </div>
                <span className={`badge ${p.status==="Occupied"?"bg-blue":"bg-amber"}`}>{p.status}</span>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginTop:16,paddingTop:14,borderTop:"1px solid var(--off2)"}}>
                {[["Monthly Rent",p.rent],["Tenant",p.tenant],["Next Due",p.nextDue],["YTD Income",p.status==="Occupied"?"$7,350":"$0"]].map(([l,v])=>(
                  <div key={l}>
                    <div style={{fontSize:10.5,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".06em",marginBottom:4}}>{l}</div>
                    <div style={{fontSize:14,fontWeight:700,color:"var(--t1)"}}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    if(pt==="financials")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Financials</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:22}}>
          {[["YTD Revenue","$16,650"],["YTD Expenses","$1,820"],["Net Disbursed","$14,830"]].map(([l,v])=>(
            <div key={l} style={{background:"white",border:"1px solid var(--border)",borderRadius:"var(--r2)",padding:22}}>
              <div style={{fontFamily:"Lora,serif",fontSize:34,fontWeight:600,color:"var(--blue)",lineHeight:1,marginBottom:4}}>{v}</div>
              <div style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".07em"}}>{l}</div>
            </div>
          ))}
        </div>
        <div className="card" style={{overflow:"hidden"}}>
          <div style={{padding:"14px 18px",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:14,fontWeight:700}}>Transaction History</span></div>
          <table className="dt">
            <thead><tr><th>Date</th><th>Property</th><th>Description</th><th>Amount</th><th>Type</th></tr></thead>
            <tbody>
              {[
                ["Apr 1","4821 Cypress Chase","Rent Collection","$2,450","Income"],
                ["Apr 1","9203 River Glen","Rent Collection","$1,950","Income"],
                ["Mar 22","9203 River Glen","Plumbing Repair","−$185","Expense"],
                ["Mar 1","4821 Cypress Chase","Rent Collection","$2,450","Income"],
                ["Mar 1","9203 River Glen","Rent Collection","$1,950","Income"],
              ].map((r,i)=>(
                <tr key={i}>
                  <td>{r[0]}</td><td style={{color:"var(--t3)"}}>{r[1]}</td><td style={{fontWeight:500}}>{r[2]}</td>
                  <td style={{fontWeight:700,color:r[4]==="Income"?"var(--green)":"#DC2626"}}>{r[3]}</td>
                  <td><span className={`badge ${r[4]==="Income"?"bg-blue":"bg-red"}`}>{r[4]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    if(pt==="maintenance")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Maintenance</h1></div>
        <div className="card" style={{overflow:"hidden"}}>
          <div style={{padding:"14px 18px",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:14,fontWeight:700}}>Work Orders</span></div>
          <table className="dt">
            <thead><tr><th>Date</th><th>Property</th><th>Issue</th><th>Cost</th><th>Status</th></tr></thead>
            <tbody>
              {[
                ["Apr 8","9203 River Glen","HVAC Filter Replacement","$85","Complete"],
                ["Mar 22","9203 River Glen","Leaking Faucet — Kitchen","$185","Complete"],
                ["Mar 5","4821 Cypress Chase","Garage Door Tune-Up","$120","Complete"],
                ["Apr 12","2716 Bayshore","Unit Turnover Cleaning","$250","In Progress"],
              ].map((r,i)=>(
                <tr key={i}>
                  <td>{r[0]}</td><td style={{color:"var(--t3)",fontSize:12.5}}>{r[1]}</td>
                  <td style={{fontWeight:500}}>{r[2]}</td><td style={{fontWeight:700}}>{r[3]}</td>
                  <td><span className={`badge ${r[4]==="Complete"?"bg-blue":"bg-amber"}`}>{r[4]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    if(pt==="tenants")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Tenants</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {[
            {name:"Jordan Williams",addr:"4821 Cypress Chase Dr",rent:"$2,450",lease:"Jan 1 – Dec 31, 2024",status:"Current",phone:"(813) 555-0142"},
            {name:"Maria Gonzalez",addr:"9203 River Glen Blvd",rent:"$1,950",lease:"Mar 1 – Feb 28, 2025",status:"Current",phone:"(813) 555-0187"},
          ].map((t,i)=>(
            <div key={i} className="card pad">
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                <div style={{width:42,height:42,borderRadius:"50%",background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700,color:"white"}}>{t.name[0]}</div>
                <div>
                  <div style={{fontSize:14.5,fontWeight:700,color:"var(--t1)"}}>{t.name}</div>
                  <div style={{fontSize:12,color:"var(--t3)"}}>{t.addr}</div>
                </div>
                <span className="badge bg-blue" style={{marginLeft:"auto"}}>{t.status}</span>
              </div>
              <table style={{width:"100%",fontSize:13}}><tbody>
                {[["Monthly Rent",t.rent],["Lease Term",t.lease],["Phone",t.phone]].map(([k,v])=>(
                  <tr key={k} style={{borderBottom:"1px solid var(--off2)"}}>
                    <td style={{padding:"7px 0",color:"var(--t3)",paddingRight:12}}>{k}</td>
                    <td style={{padding:"7px 0",fontWeight:600,color:"var(--t1)"}}>{v}</td>
                  </tr>
                ))}
              </tbody></table>
            </div>
          ))}
        </div>
      </div>
    );
    if(pt==="statements")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Owner Statements</h1></div>
        <div className="card" style={{overflow:"hidden",maxWidth:680}}>
          {[
            {month:"March 2024",period:"Mar 1 – Mar 31, 2024",net:"$4,921"},
            {month:"February 2024",period:"Feb 1 – Feb 29, 2024",net:"$5,106"},
            {month:"January 2024",period:"Jan 1 – Jan 31, 2024",net:"$4,803"},
          ].map((s,i)=>(
            <div key={i} className="dr">
              <div style={{width:36,height:36,borderRadius:8,background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <Ic n="doc" s={17} c="var(--blue)"/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:13.5,fontWeight:600,color:"var(--t1)"}}>{s.month} Owner Statement</div>
                <div style={{fontSize:12,color:"var(--t3)"}}>{s.period} · Net: <b style={{color:"var(--green)"}}>{s.net}</b></div>
              </div>
              <button className="btn btn-ghost btn-sm" style={{display:"flex",gap:5}} onClick={()=>showToast("Downloading statement...")}><Ic n="download" s={12}/>Download</button>
            </div>
          ))}
        </div>
      </div>
    );
    if(pt==="settings")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Account Settings</h1></div>
        <div className="card pad" style={{maxWidth:520}}>
          <h3 style={{fontSize:15,fontWeight:700,marginBottom:16,color:"var(--t1)"}}>Contact Information</h3>
          {[["Full Name","Alex R. Martinez"],["Email","alex.martinez@email.com"],["Phone","(813) 555-0100"]].map(([l,v])=>(
            <div key={l} className="fg"><label className="fl">{l}</label><input className="fi" defaultValue={v}/></div>
          ))}
          <button className="btn btn-blue btn-sm" onClick={()=>showToast("Settings saved.")}>Save Changes</button>
        </div>
      </div>
    );
    return null;
  };
  return(
    <>
      <div style={{position:"fixed",top:0,left:0,right:0,height:66,background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:200}}>
        <div style={{padding:"0 20px",width:220,height:"100%",display:"flex",alignItems:"center"}}>
          <Logo white/>
        </div>
        <div style={{padding:"0 16px",fontSize:15,fontWeight:700,color:"white",letterSpacing:".02em"}}>Owner Portal</div>
        <div style={{display:"flex",alignItems:"center",gap:14,padding:"0 20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:9,cursor:"pointer"}}>
            <div style={{width:32,height:32,borderRadius:"50%",background:"rgba(255,255,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"white"}}>AM</div>
            <div style={{fontSize:12.5,fontWeight:700,color:"white"}}>Alex R. Martinez</div>
          </div>
          <button className="btn btn-gw btn-sm" onClick={()=>go("home")}><Ic n="logout" s={13} c="white"/>Sign Out</button>
        </div>
      </div>
      <div style={{display:"flex",minHeight:"100vh",paddingTop:66}}>
        <div style={{width:220,minWidth:220,background:"#0D2B5E",position:"sticky",top:66,height:"calc(100vh - 66px)",overflowY:"auto",padding:"14px 0"}}>
          {NAV.map(item=>(
            <div key={item.id} className={`adm-si${pt===item.id?" act":""}`} onClick={()=>setPt(item.id)}>
              <Ic n={item.icon} s={15} c={pt===item.id?"var(--bmd)":"rgba(255,255,255,.45)"}/>{item.label}
            </div>
          ))}
          <div style={{height:1,background:"rgba(255,255,255,.1)",margin:"10px 0"}}/>
          <div className="adm-si" onClick={()=>go("home")}><Ic n="eye" s={15} c="rgba(255,255,255,.4)"/>View Website</div>
        </div>
        <div style={{flex:1,background:"var(--off)",padding:28}}>{renderMain()}</div>
      </div>
      {toast&&(
        <div style={{position:"fixed",bottom:26,right:26,background:"var(--t1)",color:"white",padding:"12px 18px",borderRadius:"var(--r2)",boxShadow:"var(--sh3)",display:"flex",alignItems:"center",gap:10,fontSize:13,fontWeight:600,zIndex:3000,animation:"fadeUp .3s ease",borderLeft:"3px solid var(--b3)"}}>
          <Ic n="check" s={14} c="var(--b3)"/>{toast}
        </div>
      )}
    </>
  );
}

function PortalDashboard({go,userType}){
  if(userType==="Owner") return <OwnerPortal go={go}/>;  
  const [pt,setPt]=useState("home");
  const [payModal,setPayModal]=useState(false);
  const [paySent,setPaySent]=useState(false);
  const [payAmt,setPayAmt]=useState("1850");
  const [payMethod,setPayMethod]=useState("echeck");
  const [reqStep,setReqStep]=useState(0);
  const [reqForm,setReqForm]=useState({cat:"General",subj:"",desc:"",enter:"yes"});
  const [toast,setToast]=useState(null);
  const [calMo,setCalMo]=useState(new Date());
  const showToast=msg=>{setToast(msg);setTimeout(()=>setToast(null),2600);};
  const getDays=d=>{
    const yr=d.getFullYear(),mo=d.getMonth();
    const first=new Date(yr,mo,1).getDay(),total=new Date(yr,mo+1,0).getDate();
    const today=new Date();const cells=[];
    for(let i=0;i<first;i++)cells.push({day:new Date(yr,mo,-first+i+1).getDate(),other:true});
    for(let i=1;i<=total;i++)cells.push({day:i,isToday:today.getFullYear()===yr&&today.getMonth()===mo&&today.getDate()===i,event:i===15||i===22});
    return cells;
  };
  const NAV=[
    {id:"home",icon:"home",label:"Home"},
    {id:"payments",icon:"pay",label:"Payments"},
    {id:"requests",icon:"wrench",label:"Requests"},
    {id:"announcements",icon:"bell",label:"Announcements"},
    {id:"documents",icon:"doc",label:"Documents"},
    {id:"contacts",icon:"user",label:"Contacts"},
    {id:"calendar",icon:"cal",label:"Calendar"},
  ];
  const renderMain=()=>{
    if(pt==="home")return(
      <div className="pcnt au">
        <div className="phdr">
          <div>
            <div style={{fontSize:20,fontWeight:800,color:"var(--t1)"}}>Hello, Alex!</div>
            <div style={{fontSize:13,color:"var(--t3)",marginTop:2}}>Resident Center · 2215 Westbrook Ln, Tampa, FL 33612</div>
          </div>
          <div style={{fontSize:13,color:"var(--t3)"}}>Account #01112421</div>
        </div>
        <div style={{background:"var(--blue)",borderRadius:"var(--r2)",padding:"24px 26px",marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.5)",textTransform:"uppercase",letterSpacing:".08em",marginBottom:7}}>Current Balance</div>
            <div style={{fontFamily:"Lora,serif",fontSize:44,color:"white",fontWeight:600,lineHeight:1}}>$0.00</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.42)",marginTop:7}}>1 scheduled payment</div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:9,minWidth:172}}>
            <button className="btn btn-white btn-lg" style={{justifyContent:"center"}} onClick={()=>setPayModal(true)}>Make Payment</button>
            <button className="btn btn-gw" style={{justifyContent:"center"}}>Set Up Autopay</button>
          </div>
        </div>
        <div style={{background:"var(--bdk)",borderRadius:"var(--r2)",padding:"11px 16px",marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:13,color:"rgba(255,255,255,.7)"}}><b style={{color:"white"}}>Rent Reporting</b> — Build credit by reporting rent payments to credit bureaus.</span>
          <button className="btn btn-sm" style={{background:"rgba(255,255,255,.12)",color:"white",borderColor:"rgba(255,255,255,.22)",flexShrink:0}}>Get Started</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
          {[
            {title:"Open Requests",icon:"wrench",body:"No open requests",sub:"Your open requests will display here.",cta:"Create Request",ctaFn:()=>setPt("requests")},
            {title:"Announcements",icon:"bell",body:"You're all caught up!",sub:"New announcements will appear here.",cta:null},
            {title:"Upcoming Events",icon:"cal",body:"No upcoming events",sub:"Community events will display here.",cta:"Go to Calendar",ctaFn:()=>setPt("calendar")},
          ].map((w,i)=>(
            <div key={i} className="card pad">
              <div style={{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:13}}>{w.title}</div>
              <div style={{textAlign:"center",padding:"20px 0"}}>
                <Ic n={w.icon} s={26} c="var(--t4)"/>
                <div style={{fontSize:13.5,fontWeight:600,color:"var(--t2)",marginTop:9,marginBottom:3}}>{w.body}</div>
                <p style={{fontSize:12.5,color:"var(--t4)"}}>{w.sub}</p>
              </div>
              {w.cta&&<button className="btn btn-green btn-sm" style={{width:"100%",justifyContent:"center"}} onClick={w.ctaFn}>{w.cta}</button>}
            </div>
          ))}
          <div className="card pad">
            <div style={{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:13}}>Lease Information</div>
            <table style={{width:"100%",fontSize:13.5}}><tbody>
              {[["Account #","01112421"],["Address","2215 Westbrook Ln"],["City / ZIP","Tampa, FL 33612"],["Lease Start","Jan 1, 2024"],["Lease End","Dec 31, 2024"]].map(([k,v])=>(
                <tr key={k} style={{borderBottom:"1px solid var(--off2)"}}>
                  <td style={{padding:"7px 0 7px",color:"var(--t3)",paddingRight:12}}>{k}</td>
                  <td style={{padding:"7px 0",fontWeight:600,color:"var(--t1)"}}>{v}</td>
                </tr>
              ))}
            </tbody></table>
          </div>
        </div>
      </div>
    );
    if(pt==="payments")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Payments</h1><button className="btn btn-green btn-sm" onClick={()=>setPayModal(true)}>Make a Payment</button></div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:22}}>
          {[["Current Balance","$0.00"],["Next Payment Due","$1,850.00"],["Last Payment","$1,850.00"]].map(([l,v])=>(
            <div key={l} style={{background:"white",border:"1px solid var(--border)",borderRadius:"var(--r2)",padding:22}}>
              <div style={{fontFamily:"Lora,serif",fontSize:34,fontWeight:600,color:"var(--blue)",lineHeight:1,marginBottom:4}}>{v}</div>
              <div style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".07em"}}>{l}</div>
            </div>
          ))}
        </div>
        <div className="card" style={{overflow:"hidden"}}>
          <div style={{padding:"14px 18px",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:14,fontWeight:700,color:"var(--t1)"}}>Payment History</span></div>
          <table className="dt">
            <thead><tr><th>Date</th><th>Description</th><th>Method</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>
              {[["Mar 1, 2024","Monthly Rent","E-Check","$1,850.00"],["Feb 1, 2024","Monthly Rent","E-Check","$1,850.00"],["Jan 1, 2024","Rent + Deposit","E-Check","$3,700.00"]].map((r,i)=>(
                <tr key={i}><td>{r[0]}</td><td style={{fontWeight:500}}>{r[1]}</td><td style={{color:"var(--t3)"}}>{r[2]}</td>
                  <td style={{fontWeight:700}}>{r[3]}</td><td><span className="badge bg-green">Paid</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    if(pt==="requests")return(
      <div className="pcnt au">
        {reqStep===0&&(
          <>
            <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Create Request</h1></div>
            <div className="card pad" style={{maxWidth:640}}>
              <h3 style={{fontFamily:"Lora,serif",fontSize:18,color:"var(--t1)",marginBottom:18}}>How can we help you today?</h3>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:20}}>
                {[
                  {id:"maintenance",icon:"wrench",label:"Maintenance Request",desc:"Report issues like leaky faucets, cracked windows, or other repairs."},
                  {id:"inquiry",icon:"bell",label:"General Inquiry",desc:"Ask questions about your account, parking policy, and more."},
                ].map(opt=>(
                  <div key={opt.id} onClick={()=>setReqStep(1)} className="card pad" style={{cursor:"pointer",textAlign:"center"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--blue)";e.currentTarget.style.background="var(--glt)";}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.background="";}}>
                    <div style={{width:46,height:46,borderRadius:12,background:"var(--off2)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"}}>
                      <Ic n={opt.icon} s={22} c="var(--t3)"/>
                    </div>
                    <div style={{fontSize:14,fontWeight:700,color:"var(--t1)",marginBottom:5}}>{opt.label}</div>
                    <p style={{fontSize:12.5,color:"var(--t3)",lineHeight:1.6}}>{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {reqStep===1&&(
          <>
            <div className="phdr">
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <button className="btn-txt" style={{display:"flex",alignItems:"center",gap:4}} onClick={()=>setReqStep(0)}><Ic n="al" s={13}/>Back</button>
                <h1 style={{fontSize:20,fontWeight:700}}>Request Details</h1>
              </div>
            </div>
            <div className="card pad" style={{maxWidth:640}}>
              <div className="fg"><label className="fl">Category</label>
                <select className="fs" value={reqForm.cat} onChange={e=>setReqForm({...reqForm,cat:e.target.value})}>
                  {["General","Plumbing","Electrical","HVAC","Appliance","Pest Control","Exterior","Other"].map(c=><option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="fg"><label className="fl">Subject</label><input className="fi" placeholder="Brief description" value={reqForm.subj} onChange={e=>setReqForm({...reqForm,subj:e.target.value})}/></div>
              <div className="fg"><label className="fl">Description</label><textarea className="fta" placeholder="Please describe the issue in detail..." value={reqForm.desc} onChange={e=>setReqForm({...reqForm,desc:e.target.value})}/></div>
              <div style={{display:"flex",gap:10}}>
                <button className="btn btn-blue" style={{flex:1,justifyContent:"center"}} onClick={()=>{setReqStep(0);showToast("Request submitted successfully.");}}>Submit Request</button>
                <button className="btn btn-ghost" onClick={()=>setReqStep(0)}>Cancel</button>
              </div>
            </div>
          </>
        )}
      </div>
    );
    if(pt==="announcements")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Announcements</h1></div>
        <div style={{maxWidth:640}}>
          {[
            {date:"March 28, 2024",title:"Spring Landscaping Notice",body:"Our grounds crew will perform spring landscaping maintenance on April 3–5. Please move vehicles from the driveway by 8:00 AM those days.",tag:"Community"},
            {date:"February 15, 2024",title:"Rent Reporting Now Available",body:"Enroll in our Rent Reporting program to have on-time payments reported to credit bureaus at no cost to you.",tag:"Account"},
          ].map((a,i)=>(
            <div key={i} className="ann">
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <span className="badge bg-green">{a.tag}</span>
                <span style={{fontSize:12,color:"var(--t3)"}}>{a.date}</span>
              </div>
              <div style={{fontSize:14.5,fontWeight:700,color:"var(--t1)",marginBottom:7}}>{a.title}</div>
              <p style={{fontSize:13.5,color:"var(--t2)",lineHeight:1.75}}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
    if(pt==="documents")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Documents</h1></div>
        <div className="card" style={{overflow:"hidden",maxWidth:680}}>
          {[
            {name:"Lease Agreement — 2024.pdf",size:"1.2 MB",date:"Jan 1, 2024"},
            {name:"Move-In Inspection Report.pdf",size:"840 KB",date:"Jan 1, 2024"},
            {name:"Resident Handbook.pdf",size:"540 KB",date:"Jan 1, 2024"},
            {name:"2023 Year-End Summary.pdf",size:"210 KB",date:"Jan 15, 2024"},
          ].map((doc,i)=>(
            <div key={i} className="dr">
              <div style={{width:36,height:36,borderRadius:8,background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                <Ic n="doc" s={17} c="var(--blue)"/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:13.5,fontWeight:600,color:"var(--t1)"}}>{doc.name}</div>
                <div style={{fontSize:12,color:"var(--t3)"}}>{doc.size} · {doc.date}</div>
              </div>
              <button className="btn btn-ghost btn-sm" style={{display:"flex",gap:5}}><Ic n="download" s={12}/>Download</button>
            </div>
          ))}
        </div>
      </div>
    );
    if(pt==="contacts")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Contacts</h1></div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,maxWidth:680}}>
          {[
            {name:"Rent Solutions",role:"Property Management",phone:"(813) 579.5597",email:"info@rentsolutions.com",icon:"bld",c:"green"},
            {name:"Maintenance Line",role:"24/7 Emergency",phone:"(813) 579.5597",email:"maintenance@rentsolutions.com",icon:"wrench",c:"green"},
            {name:"Leasing Dept.",role:"Leasing & Applications",phone:"(813) 579.5598",email:"leasing@rentsolutions.com",icon:"key",c:"blue"},
            {name:"Accounting",role:"Payments & Billing",phone:"(813) 579.5599",email:"billing@rentsolutions.com",icon:"pay",c:"blue"},
          ].map((ct,i)=>(
            <div key={i} className="card pad">
              <div style={{display:"flex",alignItems:"center",gap:11,marginBottom:11}}>
                <div style={{width:38,height:38,borderRadius:9,background:ct.c==="blue"?"var(--blt)":"var(--glt)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Ic n={ct.icon} s={18} c={ct.c==="blue"?"var(--blue)":"var(--green)"}/>
                </div>
                <div>
                  <div style={{fontSize:14,fontWeight:700,color:"var(--t1)"}}>{ct.name}</div>
                  <div style={{fontSize:12,color:"var(--t3)"}}>{ct.role}</div>
                </div>
              </div>
              <a href={`tel:${ct.phone}`} style={{fontSize:13,color:"var(--t2)",display:"flex",alignItems:"center",gap:7,marginBottom:6}}><Ic n="phone" s={12} c="var(--t4)"/>{ct.phone}</a>
              <a href={`mailto:${ct.email}`} style={{fontSize:13,color:"var(--blue)",display:"flex",alignItems:"center",gap:7}}><Ic n="mail" s={12} c="var(--t4)"/>{ct.email}</a>
            </div>
          ))}
        </div>
      </div>
    );
    if(pt==="calendar"){
      const days=getDays(calMo);
      return(
        <div className="pcnt au">
          <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Calendar</h1></div>
          <div className="card pad" style={{maxWidth:480}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
              <button className="btn btn-ghost btn-sm" onClick={()=>setCalMo(new Date(calMo.getFullYear(),calMo.getMonth()-1,1))}><Ic n="al" s={14}/></button>
              <div style={{fontSize:15,fontWeight:700,color:"var(--t1)"}}>{calMo.toLocaleString("default",{month:"long",year:"numeric"})}</div>
              <button className="btn btn-ghost btn-sm" onClick={()=>setCalMo(new Date(calMo.getFullYear(),calMo.getMonth()+1,1))}><Ic n="ar" s={14}/></button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,marginBottom:6}}>
              {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d=>(
                <div key={d} style={{textAlign:"center",fontSize:10.5,fontWeight:700,color:"var(--t4)",padding:"3px 0"}}>{d}</div>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>
              {days.map((cell,i)=>(
                <div key={i} className={`cc${cell.isToday?" tod":""}${cell.event?" ev":""}${cell.other?" om":""}`}>{cell.day}</div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
  return(
    <>
      <div style={{position:"fixed",top:0,left:0,right:0,height:66,background:"white",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:200}}>
        <div style={{padding:"0 16px",width:214,borderRight:"1px solid var(--border)",height:"100%",display:"flex",alignItems:"center"}}>
          <Logo/>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:14,padding:"0 20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:9,padding:"6px 12px",borderRadius:"var(--r)",border:"1px solid var(--border)",background:"var(--off)",cursor:"pointer"}}>
            <div style={{width:27,height:27,borderRadius:"50%",background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"white"}}>RT</div>
            <div><div style={{fontSize:12.5,fontWeight:700,color:"var(--t1)"}}>Alex R. Martinez</div><div style={{fontSize:11,color:"var(--t4)"}}>Resident</div></div>
          </div>
          <button className="btn btn-ghost btn-sm" style={{display:"flex",gap:5}} onClick={()=>go("home")}><Ic n="logout" s={13}/>Sign Out</button>
        </div>
      </div>
      <div className="playout">
        <div className="psb">
          {NAV.map(item=>(
            <div key={item.id} className={`si${pt===item.id?" act":""}`} onClick={()=>setPt(item.id)}>
              <Ic n={item.icon} s={15} c={pt===item.id?"var(--blue)":"var(--t3)"}/>{item.label}
            </div>
          ))}
          <div style={{height:1,background:"var(--border)",margin:"10px 0"}}/>
          <div className="si" onClick={()=>showToast("Opening Renters Insurance portal...")}><Ic n="shield" s={15} c="var(--t3)"/>Renters Insurance</div>
          <div className="si" onClick={()=>showToast("Opening Rent Reporting portal...")}><Ic n="chart" s={15} c="var(--t3)"/>Rent Reporting</div>
        </div>
        <div className="pmain" style={{padding:28}}>{renderMain()}</div>
      </div>
      {payModal&&(
        <div className="mbg" onClick={()=>{setPayModal(false);setPaySent(false);}}>
          <div className="mb" style={{maxWidth:430}} onClick={e=>e.stopPropagation()}>
            <div className="mhd">
              <h3 style={{fontFamily:"Lora,serif",fontSize:18,color:"var(--t1)"}}>{paySent?"Payment Confirmed":"Make a Payment"}</h3>
              <button onClick={()=>{setPayModal(false);setPaySent(false);}} style={{background:"none",border:"none",cursor:"pointer",color:"var(--t4)"}}><Ic n="close" s={16}/></button>
            </div>
            {paySent?(
              <div className="mbd" style={{textAlign:"center",padding:"32px"}}>
                <div style={{width:52,height:52,borderRadius:"50%",background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 14px"}}>
                  <Ic n="check" s={26} c="var(--blue)"/>
                </div>
                <h3 style={{fontFamily:"Lora,serif",fontSize:20,color:"var(--t1)",marginBottom:8}}>Payment Submitted</h3>
                <p style={{fontSize:13.5,color:"var(--t3)"}}>Your payment of <b>${parseFloat(payAmt||0).toLocaleString()}</b> will be processed within 1-3 business days.</p>
              </div>
            ):(
              <div className="mbd">
                <div className="fg">
                  <label className="fl">Payment Amount</label>
                  <div style={{position:"relative"}}><span style={{position:"absolute",left:13,top:"50%",transform:"translateY(-50%)",color:"var(--t3)",fontSize:15}}>$</span>
                    <input className="fi" type="number" value={payAmt} onChange={e=>setPayAmt(e.target.value)} style={{paddingLeft:26}}/></div>
                </div>
                <div className="fg">
                  <label className="fl">Payment Method</label>
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {[["echeck","E-Check (Free)"],["card","Credit / Debit Card (+2.9% fee)"]].map(([v,l])=>(
                      <div key={v} className={`ro${payMethod===v?" sel":""}`} onClick={()=>setPayMethod(v)}><div className="rdot"/>{l}</div>
                    ))}
                  </div>
                </div>
                {payMethod==="echeck"&&(
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                    <div className="fg"><label className="fl">Routing Number</label><input className="fi" placeholder="123456789"/></div>
                    <div className="fg"><label className="fl">Account Number</label><input className="fi" placeholder="xxxx1234"/></div>
                  </div>
                )}
              </div>
            )}
            {!paySent&&(
              <div className="mft">
                <button className="btn btn-ghost btn-sm" onClick={()=>setPayModal(false)}>Cancel</button>
                <button className="btn btn-green btn-sm" onClick={()=>setPaySent(true)}>Submit ${parseFloat(payAmt||0).toLocaleString()}</button>
              </div>
            )}
          </div>
        </div>
      )}
      {toast&&(
        <div style={{position:"fixed",bottom:26,right:26,background:"var(--t1)",color:"white",padding:"12px 18px",borderRadius:"var(--r2)",boxShadow:"var(--sh3)",display:"flex",alignItems:"center",gap:10,fontSize:13,fontWeight:600,zIndex:3000,animation:"fadeUp .3s ease",borderLeft:"3px solid var(--g3)"}}>
          <Ic n="check" s={14} c="var(--b3)"/>{toast}
        </div>
      )}
    </>
  );
}

function AdminDashboard({go}){
  const [section,setSection]=useState("overview");
  const [listings,setListings]=useState(LISTINGS.map(l=>({...l,status:"Active",tenant:l.avail==="Available Now"?"Vacant":"Occupied"})));
  const [editListing,setEditListing]=useState(null);
  const [toast,setToast]=useState(null);
  const showToast=msg=>{setToast(msg);setTimeout(()=>setToast(null),2400);};
  const TENANTS=[
    {id:1,name:"Alex R. Martinez",unit:"2215 Westbrook Ln, Tampa",rent:"$1,850",status:"Current",balance:"$0.00"},
    {id:2,name:"Jennifer Collins",unit:"9203 River Glen Blvd, Riverview",rent:"$1,950",status:"Current",balance:"$0.00"},
    {id:3,name:"Marcus Webb",unit:"4821 Cypress Chase Dr, Tampa",rent:"$2,450",status:"Late",balance:"$2,450.00"},
    {id:4,name:"Diana Flores",unit:"3345 Carrollwood Village, Tampa",rent:"$2,250",status:"Current",balance:"$0.00"},
  ];
  const OWNERS=[
    {id:1,name:"Robert Mitchell",props:3,monthly:"$6,650",status:"Active"},
    {id:2,name:"Diana Chen",props:1,monthly:"$1,795",status:"Active"},
    {id:3,name:"James Patterson",props:2,monthly:"$4,400",status:"Active"},
  ];
  const NAVITEMS=[
    {id:"overview",icon:"bld",label:"Overview"},
    {id:"listings",icon:"key",label:"Manage Listings"},
    {id:"tenants",icon:"users",label:"Tenants"},
    {id:"owners",icon:"user",label:"Owners"},
    {id:"messages",icon:"msg",label:"Messages"},
    {id:"blog",icon:"pen",label:"Blog Posts"},
    {id:"settings",icon:"settings",label:"Settings"},
  ];
  const renderSection=()=>{
    if(section==="overview")return(
      <div className="pcnt au">
        <div className="phdr">
          <div>
            <div style={{fontSize:20,fontWeight:800,color:"var(--t1)"}}>Admin Dashboard</div>
            <div style={{fontSize:13,color:"var(--t3)",marginTop:1}}>Welcome back, Admin · Rent Solutions</div>
          </div>
          <div style={{display:"flex",gap:9}}>
            <button className="btn btn-ghost btn-sm" onClick={()=>go("home")}><Ic n="home" s={13}/>View Site</button>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginBottom:22}}>
          {[["Active Listings",listings.length,"bld"],["Total Tenants","24","users"],["Property Owners","8","user"],["Pending Requests","3","wrench"]].map(([label,val,icon])=>(
            <div key={label} style={{background:"white",border:"1px solid var(--border)",borderRadius:"var(--r2)",padding:20}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                <div style={{width:36,height:36,borderRadius:9,background:"var(--blt)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Ic n={icon} s={17} c="var(--blue)"/>
                </div>
                <span className="badge bg-green">+0%</span>
              </div>
              <div style={{fontFamily:"Lora,serif",fontSize:32,fontWeight:600,color:"var(--blue)",lineHeight:1,marginBottom:3}}>{val}</div>
              <div style={{fontSize:11,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:".07em"}}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18}}>
          <div className="card" style={{overflow:"hidden"}}>
            <div style={{padding:"14px 18px",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:14,fontWeight:700,color:"var(--t1)"}}>Recent Activity</span></div>
            {[
              {icon:"pay",msg:"Rent payment received — Alex R. Martinez",time:"2 hrs ago",c:"green"},
              {icon:"wrench",msg:"Maintenance request — Unit 204 Bayshore",time:"4 hrs ago",c:"amber"},
              {icon:"user",msg:"New application — 4821 Cypress Chase Dr",time:"Yesterday",c:"blue"},
              {icon:"check",msg:"Lease signed — 3345 Carrollwood Village",time:"2 days ago",c:"green"},
            ].map((item,i)=>(
              <div key={i} style={{padding:"12px 18px",borderBottom:"1px solid var(--off2)",display:"flex",gap:12,alignItems:"center"}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:item.c==="green"?"var(--glt)":item.c==="blue"?"var(--blt)":"#FFF8E1",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Ic n={item.icon} s={14} c={item.c==="green"?"var(--green)":item.c==="blue"?"var(--blue)":"#E65100"}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:500,color:"var(--t1)"}}>{item.msg}</div>
                  <div style={{fontSize:11.5,color:"var(--t4)"}}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{overflow:"hidden"}}>
            <div style={{padding:"14px 18px",borderBottom:"1px solid var(--border)"}}><span style={{fontSize:14,fontWeight:700,color:"var(--t1)"}}>Revenue Overview</span></div>
            <div style={{padding:18}}>
              {[["Monthly Rent Collected","$14,445","green"],["Management Fees (8%)","$1,155","blue"],["Maintenance Work Orders","3 open","amber"],["Avg Days to Rent","14 days","green"]].map(([l,v,c])=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid var(--off2)"}}>
                  <span style={{fontSize:13.5,color:"var(--t2)"}}>{l}</span>
                  <span className={`badge bg-${c}`}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
    if(section==="listings")return(
      <div className="pcnt au">
        <div className="phdr">
          <h1 style={{fontSize:20,fontWeight:700}}>Manage Listings</h1>
          <button className="btn btn-green btn-sm" onClick={()=>showToast("New listing form coming soon.")}>+ Add Listing</button>
        </div>
        <div className="card" style={{overflow:"hidden"}}>
          <table className="dt">
            <thead><tr><th>Property</th><th>City</th><th>Beds/Baths</th><th>Rent</th><th>Status</th><th>Availability</th><th>Actions</th></tr></thead>
            <tbody>
              {listings.map(l=>(
                <tr key={l.id}>
                  <td style={{fontWeight:600,color:"var(--t1)"}}>{l.addr}</td>
                  <td>{l.city}</td>
                  <td style={{fontWeight:700}}><span style={{color:"var(--blue)"}}>{l.beds}</span> bd / {l.baths} ba</td>
                  <td style={{fontWeight:700}}>${l.rent.toLocaleString()}/mo</td>
                  <td><span className={`badge ${l.tenant==="Vacant"?"bg-amber":"bg-blue"}`}>{l.tenant}</span></td>
                  <td><span className={`badge ${l.avail==="Available Now"?"bg-blue":"bg-blue"}`}>{l.avail}</span></td>
                  <td>
                    <div style={{display:"flex",gap:7}}>
                      <button className="btn btn-ghost btn-sm" onClick={()=>{setEditListing(l);setSection("editlisting");}} style={{display:"flex",gap:4}}><Ic n="pen" s={11}/>Edit</button>
                      <button className="btn btn-sm" style={{background:"#FEE2E2",border:"1px solid rgba(220,38,38,.2)",color:"#DC2626"}} onClick={()=>{setListings(listings.filter(x=>x.id!==l.id));showToast("Listing removed.");}}><Ic n="trash" s={11} c="#DC2626"/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    if(section==="editlisting"&&editListing)return(
      <div className="pcnt au">
        <div className="phdr">
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <button className="btn-txt" style={{display:"flex",alignItems:"center",gap:4}} onClick={()=>setSection("listings")}><Ic n="al" s={13}/>Back</button>
            <h1 style={{fontSize:20,fontWeight:700}}>Edit Listing</h1>
          </div>
        </div>
        <div className="card pad" style={{maxWidth:640}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:13}}>
            <div className="fg" style={{gridColumn:"1 / -1"}}><label className="fl">Address</label><input className="fi" defaultValue={editListing.addr}/></div>
            <div className="fg"><label className="fl">City</label><input className="fi" defaultValue={editListing.city}/></div>
            <div className="fg"><label className="fl">ZIP</label><input className="fi" defaultValue={editListing.zip}/></div>
            <div className="fg"><label className="fl">Bedrooms</label><input className="fi" type="number" defaultValue={editListing.beds}/></div>
            <div className="fg"><label className="fl">Bathrooms</label><input className="fi" type="number" defaultValue={editListing.baths}/></div>
            <div className="fg"><label className="fl">Sq Ft</label><input className="fi" type="number" defaultValue={editListing.sqft}/></div>
            <div className="fg"><label className="fl">Monthly Rent</label><input className="fi" type="number" defaultValue={editListing.rent}/></div>
            <div className="fg"><label className="fl">Availability</label>
              <select className="fs" defaultValue={editListing.avail}>
                <option>Available Now</option><option>Apr 15</option><option>May 1</option><option>June 1</option>
              </select>
            </div>
            <div className="fg"><label className="fl">Property Type</label>
              <select className="fs" defaultValue={editListing.type}>
                <option>Single Family</option><option>Condominium</option><option>Townhouse</option><option>Apartment</option>
              </select>
            </div>
          </div>
          <div style={{display:"flex",gap:10}}>
            <button className="btn btn-blue" onClick={()=>{setSection("listings");showToast("Listing updated successfully.");}}>Save Changes</button>
            <button className="btn btn-ghost" onClick={()=>setSection("listings")}>Cancel</button>
          </div>
        </div>
      </div>
    );
    if(section==="tenants")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Tenants</h1></div>
        <div className="card" style={{overflow:"hidden"}}>
          <table className="dt">
            <thead><tr><th>Name</th><th>Property</th><th>Rent</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {TENANTS.map(t=>(
                <tr key={t.id}>
                  <td style={{fontWeight:700,color:"var(--t1)"}}>{t.name}</td>
                  <td style={{fontSize:12.5}}>{t.unit}</td>
                  <td style={{fontWeight:700}}>{t.rent}</td>
                  <td style={{fontWeight:700,color:t.balance!=="$0.00"?"#DC2626":"var(--blue)"}}>{t.balance}</td>
                  <td><span className={`badge ${t.status==="Current"?"bg-blue":"bg-red"}`}>{t.status}</span></td>
                  <td><button className="btn btn-ghost btn-sm">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    if(section==="owners")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Property Owners</h1></div>
        <div className="card" style={{overflow:"hidden"}}>
          <table className="dt">
            <thead><tr><th>Owner</th><th>Properties</th><th>Monthly Revenue</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {OWNERS.map(o=>(
                <tr key={o.id}>
                  <td style={{fontWeight:700,color:"var(--t1)"}}>{o.name}</td>
                  <td>{o.props} properties</td>
                  <td style={{fontWeight:700,color:"var(--green)"}}>{o.monthly}</td>
                  <td><span className="badge bg-green">{o.status}</span></td>
                  <td><button className="btn btn-ghost btn-sm">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    if(section==="messages")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Messages</h1></div>
        <div className="card" style={{overflow:"hidden",maxWidth:720}}>
          {[
            {from:"Marcus Webb",subj:"Late Payment Notice",preview:"I will be paying my balance by Friday, March 29th. Sorry for the delay.",time:"2 hrs ago",unread:true},
            {from:"Robert Mitchell",subj:"New Property Inquiry",preview:"Hi, I have a property at 1234 Bay Blvd that I would like to discuss adding to management...",time:"Yesterday",unread:true},
            {from:"Jennifer Collins",subj:"Maintenance Follow-up",preview:"Just checking on the status of my HVAC maintenance request submitted last Tuesday.",time:"2 days ago",unread:false},
          ].map((m,i)=>(
            <div key={i} className="dr" style={{background:m.unread?"var(--glt)":"white"}}>
              <div style={{width:36,height:36,borderRadius:"50%",background:"var(--blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:"white",flexShrink:0}}>{m.from[0]}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div style={{fontSize:13.5,fontWeight:m.unread?700:500,color:"var(--t1)"}}>{m.from}</div>
                  <div style={{fontSize:11.5,color:"var(--t4)"}}>{m.time}</div>
                </div>
                <div style={{fontSize:13,fontWeight:m.unread?700:500,color:"var(--t2)"}}>{m.subj}</div>
                <div style={{fontSize:12.5,color:"var(--t4)"}}>{m.preview}</div>
              </div>
              {m.unread&&<div style={{width:8,height:8,borderRadius:"50%",background:"var(--blue)",flexShrink:0}}/>}
            </div>
          ))}
        </div>
      </div>
    );
    if(section==="blog")return(
      <div className="pcnt au">
        <div className="phdr">
          <h1 style={{fontSize:20,fontWeight:700}}>Blog Posts</h1>
          <button className="btn btn-green btn-sm" onClick={()=>showToast("New post editor coming soon.")}>+ New Post</button>
        </div>
        <div className="card" style={{overflow:"hidden"}}>
          <table className="dt">
            <thead><tr><th>Title</th><th>Category</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {BLOG_POSTS.map(p=>(
                <tr key={p.id}>
                  <td style={{fontWeight:600,color:"var(--t1)",maxWidth:300}}>{p.title}</td>
                  <td><span className="badge bg-green">{p.cat}</span></td>
                  <td style={{color:"var(--t3)"}}>{p.date}</td>
                  <td><span className="badge bg-green">Published</span></td>
                  <td>
                    <div style={{display:"flex",gap:7}}>
                      <button className="btn btn-ghost btn-sm" style={{display:"flex",gap:4}}><Ic n="pen" s={11}/>Edit</button>
                      <button className="btn btn-sm" style={{background:"#FEE2E2",border:"1px solid rgba(220,38,38,.2)",color:"#DC2626"}}><Ic n="trash" s={11} c="#DC2626"/></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    if(section==="settings")return(
      <div className="pcnt au">
        <div className="phdr"><h1 style={{fontSize:20,fontWeight:700}}>Settings</h1></div>
        <div className="card pad" style={{maxWidth:560}}>
          <h3 style={{fontFamily:"Lora,serif",fontSize:18,color:"var(--t1)",marginBottom:20}}>Admin Account</h3>
          <div className="fg"><label className="fl">Username</label><input className="fi" defaultValue="Admin"/></div>
          <div className="fg"><label className="fl">Display Name</label><input className="fi" defaultValue="Rent Solutions Admin"/></div>
          <div className="fg"><label className="fl">Email</label><input className="fi" type="email" defaultValue="admin@rentsolutions.com"/></div>
          <div style={{height:1,background:"var(--border)",margin:"18px 0"}}/>
          <h3 style={{fontFamily:"Lora,serif",fontSize:16,color:"var(--t1)",marginBottom:14}}>Change Password</h3>
          <div className="fg"><label className="fl">Current Password</label><input className="fi" type="password" placeholder="..."/></div>
          <div className="fg"><label className="fl">New Password</label><input className="fi" type="password" placeholder="..."/></div>
          <button className="btn btn-blue" onClick={()=>showToast("Settings saved.")}>Save Changes</button>
        </div>
      </div>
    );
    return null;
  };
  return(
    <>
      <div style={{position:"fixed",top:0,left:0,right:0,height:66,background:"var(--bdk)",display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:200}}>
        <div style={{padding:"0 16px",width:220,borderRight:"1px solid rgba(255,255,255,.12)",height:"100%",display:"flex",alignItems:"center"}}>
          <Logo white/>
        </div>
        <div style={{flex:1,padding:"0 24px",display:"flex",alignItems:"center"}}>
          <div style={{fontFamily:"Lora,serif",fontSize:14,fontWeight:600,color:"rgba(255,255,255,.7)",fontStyle:"italic"}}>Admin Dashboard</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:14,padding:"0 20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:9,padding:"5px 12px",borderRadius:"var(--r)",border:"1px solid rgba(255,255,255,.15)",background:"rgba(255,255,255,.08)"}}>
            <div style={{width:27,height:27,borderRadius:"50%",background:"var(--bmd)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"var(--gdk)"}}>A</div>
            <div><div style={{fontSize:12.5,fontWeight:700,color:"white"}}>Admin</div><div style={{fontSize:11,color:"rgba(255,255,255,.4)"}}>Administrator</div></div>
          </div>
          <button className="btn btn-sm" style={{background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",color:"white",display:"flex",gap:5}} onClick={()=>go("home")}>
            <Ic n="logout" s={13} c="white"/>Sign Out
          </button>
        </div>
      </div>
      <div className="playout">
        <div className="adm-sb">
          <div style={{padding:"14px 16px 10px",fontSize:10,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"rgba(255,255,255,.3)"}}>Main Menu</div>
          {NAVITEMS.map(item=>(
            <div key={item.id} className={`adm-si${section===item.id||(section==="editlisting"&&item.id==="listings")?" act":""}`} onClick={()=>setSection(item.id)}>
              <Ic n={item.icon} s={15} c={section===item.id?"var(--gmd)":"rgba(255,255,255,.4)"}/>{item.label}
            </div>
          ))}
          <div style={{height:1,background:"rgba(255,255,255,.1)",margin:"10px 0"}}/>
          <div className="adm-si" onClick={()=>go("listings")}><Ic n="eye" s={15} c="rgba(255,255,255,.4)"/>View Website</div>
        </div>
        <div className="pmain" style={{padding:28}}>{renderSection()}</div>
      </div>
      {toast&&(
        <div style={{position:"fixed",bottom:26,right:26,background:"var(--bdk)",color:"white",padding:"12px 18px",borderRadius:"var(--r2)",boxShadow:"var(--sh3)",display:"flex",alignItems:"center",gap:10,fontSize:13,fontWeight:600,zIndex:3000,animation:"fadeUp .3s ease",borderLeft:"3px solid var(--gmd)"}}>
          <Ic n="check" s={14} c="var(--gmd)"/>{toast}
        </div>
      )}
    </>
  );
}

export default function App(){
  const [page,setPage]=useState("home");
  const [loggedIn,setLoggedIn]=useState(null);
  const [loggedInAs,setLoggedInAs]=useState(null);
  const go=(pg,user=null)=>{
    if(user){setLoggedIn(user);setLoggedInAs(user);}
    if(pg==="home"){setLoggedIn(null);setLoggedInAs(null);}
    setPage(pg);
    window.scrollTo({top:0,behavior:"smooth"});
  };
  const isFullscreen=["portal-dashboard","admin-dashboard","portal-login"].includes(page);
  const PAGES={
    home:<HomePage go={go}/>,
    listings:<ListingsPage/>,
    owners:<OwnersPage go={go}/>,
    renters:<RentersPage go={go}/>,
    investors:<InvestorsPage go={go}/>,
    realtors:<RealtorsPage go={go}/>,
    about:<AboutPage go={go}/>,
    blog:<BlogPage/>,
    contact:<ContactPage/>,
    "rental-app":<RentalApp/>,
    "portal-login":<PortalLogin go={go}/>,
    "portal-dashboard":<PortalDashboard go={go} userType={loggedInAs}/>,
    "admin-dashboard":<AdminDashboard go={go}/>,
  };
  if(isFullscreen)return(<><Styles/>{PAGES[page]||PAGES.home}</>);
  return(
    <>
      <Styles/>
      <Nav page={page} go={go} loggedIn={loggedIn} loggedInAs={loggedInAs}/>
      <main>{PAGES[page]||PAGES.home}</main>
      <Footer go={go}/>
    </>
  );
}
