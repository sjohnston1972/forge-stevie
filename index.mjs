export default {
  async fetch(request) {
    return new Response(HTML, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Steven Johnston — Technical Lead</title>
<style>
  :root{
    --bg:#0a0e16;
    --bg2:#0e1420;
    --card:#121a28;
    --card2:#16202f;
    --line:#1e2c40;
    --txt:#e6edf6;
    --mut:#8aa0bd;
    --accent:#38e1c2;
    --accent2:#4f8cff;
    --glow:rgba(56,225,194,.18);
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    background:var(--bg);color:var(--txt);line-height:1.6;overflow-x:hidden;
  }
  a{color:inherit;text-decoration:none}
  .wrap{max-width:1100px;margin:0 auto;padding:0 24px}
  .accent{color:var(--accent)}

  /* animated bg grid */
  .bggrid{
    position:fixed;inset:0;z-index:0;pointer-events:none;
    background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);
    background-size:46px 46px;opacity:.25;
    mask-image:radial-gradient(circle at 50% 30%,#000 0%,transparent 75%);
    -webkit-mask-image:radial-gradient(circle at 50% 30%,#000 0%,transparent 75%);
  }
  .orb{position:fixed;border-radius:50%;filter:blur(90px);z-index:0;opacity:.4;pointer-events:none}
  .orb1{width:480px;height:480px;background:var(--accent);top:-180px;right:-120px;opacity:.16}
  .orb2{width:420px;height:420px;background:var(--accent2);bottom:-160px;left:-140px;opacity:.16}

  /* nav */
  nav{
    position:sticky;top:0;z-index:50;backdrop-filter:blur(14px);
    background:rgba(10,14,22,.7);border-bottom:1px solid var(--line);
  }
  nav .wrap{display:flex;align-items:center;justify-content:space-between;height:64px}
  .brand{font-weight:700;letter-spacing:.5px;font-size:15px}
  .brand span{color:var(--accent)}
  .navlinks{display:flex;gap:28px;font-size:14px;color:var(--mut)}
  .navlinks a{transition:color .2s}
  .navlinks a:hover{color:var(--accent)}
  @media(max-width:640px){.navlinks{display:none}}

  /* hero */
  header{position:relative;z-index:1;padding:90px 0 70px;text-align:center}
  .clear{
    display:inline-flex;align-items:center;gap:8px;font-size:12px;letter-spacing:1.5px;
    text-transform:uppercase;color:var(--accent);border:1px solid var(--line);
    background:var(--card);padding:7px 16px;border-radius:100px;margin-bottom:26px;
  }
  .clear .dot{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}
  header h1{
    font-size:clamp(40px,8vw,76px);line-height:1.02;font-weight:800;letter-spacing:-1.5px;
    background:linear-gradient(180deg,#fff,#9fb4d1);-webkit-background-clip:text;background-clip:text;color:transparent;
  }
  .role{
    margin-top:14px;font-size:clamp(15px,2.4vw,20px);letter-spacing:6px;text-transform:uppercase;
    color:var(--accent);font-weight:600;
  }
  .meta{
    margin-top:30px;display:flex;flex-wrap:wrap;gap:10px 14px;justify-content:center;font-size:14px;color:var(--mut);
  }
  .meta a,.meta span{
    display:inline-flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);
    padding:8px 15px;border-radius:10px;transition:.2s;
  }
  .meta a:hover{border-color:var(--accent);color:var(--txt);transform:translateY(-2px)}
  .badges{margin-top:24px;display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
  .badge{
    font-size:12px;letter-spacing:1px;font-weight:600;text-transform:uppercase;
    padding:7px 14px;border-radius:8px;border:1px solid var(--accent);color:var(--accent);
    background:var(--glow);
  }

  /* section */
  section{position:relative;z-index:1;padding:64px 0}
  .label{
    display:flex;align-items:center;gap:14px;margin-bottom:34px;
  }
  .label h2{font-size:13px;letter-spacing:5px;text-transform:uppercase;color:var(--mut);font-weight:700;white-space:nowrap}
  .label .ln{height:1px;background:var(--line);flex:1}

  /* profile */
  .profile{
    font-size:clamp(17px,2.4vw,21px);line-height:1.8;color:#c4d2e6;max-width:920px;
  }
  .profile b{color:var(--accent);font-weight:600}

  /* expertise */
  .exgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px}
  .excard{
    background:linear-gradient(160deg,var(--card),var(--card2));border:1px solid var(--line);
    border-radius:16px;padding:24px;transition:.25s;position:relative;overflow:hidden;
  }
  .excard:hover{transform:translateY(-4px);border-color:var(--accent);box-shadow:0 16px 40px -20px var(--glow)}
  .excard h3{font-size:14px;letter-spacing:2px;text-transform:uppercase;color:var(--accent);margin-bottom:16px;display:flex;align-items:center;gap:10px}
  .excard h3 i{width:8px;height:8px;background:var(--accent);border-radius:2px;display:inline-block;transform:rotate(45deg)}
  .tags{display:flex;flex-wrap:wrap;gap:8px}
  .tag{font-size:13px;background:rgba(255,255,255,.04);border:1px solid var(--line);padding:6px 12px;border-radius:8px;color:#cdd9ea;transition:.2s}
  .excard:hover .tag{border-color:rgba(56,225,194,.3)}

  /* credentials */
  .creds{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}
  .cred{
    display:flex;gap:16px;align-items:center;background:var(--card);border:1px solid var(--line);
    border-radius:14px;padding:20px 22px;transition:.25s;
  }
  .cred:hover{border-color:var(--accent2);transform:translatey(-3px)}
  .cred .ic{
    flex:none;width:52px;height:52px;border-radius:12px;display:grid;place-items:center;font-weight:800;font-size:13px;
    background:linear-gradient(145deg,var(--accent2),#2d5cff);color:#fff;letter-spacing:.5px;
  }
  .cred.iso .ic{background:linear-gradient(145deg,var(--accent),#13a98d);color:#04120f}
  .cred h4{font-size:15px;font-weight:700}
  .cred p{font-size:13px;color:var(--mut)}

  /* timeline */
  .tl{position:relative;margin-left:8px}
  .tl::before{content:"";position:absolute;left:7px;top:6px;bottom:6px;width:2px;background:linear-gradient(var(--accent),var(--accent2),transparent)}
  .job{position:relative;padding:0 0 40px 38px}
  .job:last-child{padding-bottom:0}
  .job .node{position:absolute;left:0;top:6px;width:16px;height:16px;border-radius:50%;background:var(--bg);border:2px solid var(--accent);box-shadow:0 0 0 4px rgba(56,225,194,.12)}
  .job .yr{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--accent);font-weight:700}
  .job h3{font-size:20px;font-weight:700;margin-top:4px}
  .job .co{font-size:14px;color:var(--mut);margin-bottom:14px}
  .job ul{list-style:none;display:flex;flex-direction:column;gap:9px}
  .job li{position:relative;padding-left:20px;font-size:14.5px;color:#c0cee2;line-height:1.65}
  .job li::before{content:"";position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:2px;background:var(--accent2);transform:rotate(45deg)}

  /* contact / footer */
  .cta{
    z-index:1;position:relative;margin:30px 0 0;text-align:center;
    background:linear-gradient(160deg,var(--card),var(--card2));border:1px solid var(--line);
    border-radius:22px;padding:54px 24px;
  }
  .cta h2{font-size:clamp(26px,4vw,40px);font-weight:800;letter-spacing:-1px;background:linear-gradient(180deg,#fff,#9fb4d1);-webkit-background-clip:text;background-clip:text;color:transparent}
  .cta p{color:var(--mut);margin:14px auto 26px;max-width:520px}
  .btn{
    display:inline-flex;align-items:center;gap:10px;background:linear-gradient(145deg,var(--accent),#16b89b);
    color:#04120f;font-weight:700;padding:14px 26px;border-radius:12px;transition:.2s;font-size:15px;
  }
  .btn:hover{transform:translateY(-3px);box-shadow:0 14px 34px -12px var(--glow)}
  .btn.alt{background:transparent;border:1px solid var(--line);color:var(--txt)}
  .btn.alt:hover{border-color:var(--accent)}
  .btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
  footer{text-align:center;padding:40px 0 50px;color:var(--mut);font-size:13px;position:relative;z-index:1}

  .reveal{opacity:0;transform:translateY(26px);transition:.7s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}
</style>
</head>
<body>
<div class="bggrid"></div>
<div class="orb orb1"></div>
<div class="orb orb2"></div>

<nav>
  <div class="wrap">
    <div class="brand">S<span>.</span>JOHNSTON</div>
    <div class="navlinks">
      <a href="#profile">Profile</a>
      <a href="#expertise">Expertise</a>
      <a href="#credentials">Credentials</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<header>
  <div class="wrap">
    <div class="clear"><span class="dot"></span> SC Cleared · Lead Architect</div>
    <h1>Steven Johnston</h1>
    <div class="role">Technical Lead</div>
    <div class="meta">
      <a href="mailto:Stevie.Johnston@gmail.com">✉ Stevie.Johnston@gmail.com</a>
      <a href="https://linkedin.com/in/steven-johnston-474a5333" target="_blank">in LinkedIn</a>
      <a href="https://steven.clydeford.net" target="_blank">⬡ steven.clydeford.net</a>
      <span>📍 Glasgow, Scotland</span>
    </div>
    <div class="badges">
      <div class="badge">SC Cleared</div>
      <div class="badge">CCNP Enterprise</div>
      <div class="badge">CCNP Collaboration</div>
    </div>
  </div>
</header>

<section id="profile">
  <div class="wrap">
    <div class="label reveal"><h2>Profile</h2><div class="ln"></div></div>
    <p class="profile reveal">
      Owning end-to-end technical design, setting standards across concurrent delivery programmes,
      and leading complex multi-vendor deployments for enterprise and public sector clients. I'm
      designing <b>multi-region cloud architectures</b>, building <b>AI agents that automate network operations</b>,
      and leading teams of engineers through some of the most complex infrastructure programmes in Scotland.
      SC cleared and operating at <b>Lead Architect level</b>, I bring technical expertise across networking,
      security, cloud, and AI-driven automation, alongside the leadership capability to drive programmes from
      initial concept through to production. My work spans global enterprise and public sector environments,
      including critical national infrastructure and key clients such as the <b>Scottish Courts and Tribunals
      Service</b>, <b>Scottish Prisons Service</b> and the <b>Crown Office</b>.
    </p>
  </div>
</section>

<section id="expertise">
  <div class="wrap">
    <div class="label reveal"><h2>Expertise</h2><div class="ln"></div></div>
    <div class="exgrid">
      <div class="excard reveal"><h3><i></i>Infrastructure</h3><div class="tags">
        <span class="tag">Network Architecture</span><span class="tag">SD-WAN</span><span class="tag">BGP &amp; OSPF</span><span class="tag">LAN / WAN Design</span>
      </div></div>
      <div class="excard reveal"><h3><i></i>Automation &amp; Dev</h3><div class="tags">
        <span class="tag">Python Network Automation</span><span class="tag">Docker</span><span class="tag">AI Workflows</span><span class="tag">DevOps</span>
      </div></div>
      <div class="excard reveal"><h3><i></i>Cloud &amp; Hybrid</h3><div class="tags">
        <span class="tag">Azure Networking</span><span class="tag">Transit HUBs</span><span class="tag">Secure Access</span><span class="tag">Hybrid Cloud</span>
      </div></div>
      <div class="excard reveal"><h3><i></i>Security</h3><div class="tags">
        <span class="tag">Cisco Firewall</span><span class="tag">Palo Alto</span><span class="tag">Fortinet</span><span class="tag">Cisco ISE</span><span class="tag">Zero Trust</span><span class="tag">VPN</span><span class="tag">Umbrella &amp; DUO</span>
      </div></div>
      <div class="excard reveal"><h3><i></i>Datacentre</h3><div class="tags">
        <span class="tag">Cisco UCS</span><span class="tag">VMware</span><span class="tag">Cisco Nexus</span><span class="tag">DC Design</span><span class="tag">Nutanix</span>
      </div></div>
      <div class="excard reveal"><h3><i></i>Collaboration</h3><div class="tags">
        <span class="tag">Cisco Webex</span><span class="tag">MS Teams</span><span class="tag">SIP &amp; CUBE</span><span class="tag">CUCM</span>
      </div></div>
    </div>
  </div>
</section>

<section id="credentials">
  <div class="wrap">
    <div class="label reveal"><h2>Credentials</h2><div class="ln"></div></div>
    <div class="creds">
      <div class="cred iso reveal"><div class="ic">SC</div><div><h4>SC Cleared</h4><p>Security Check clearance</p></div></div>
      <div class="cred reveal"><div class="ic">CCNP</div><div><h4>CCNP Enterprise</h4><p>Routing &amp; Switching · 2027</p></div></div>
      <div class="cred reveal"><div class="ic">CCNP</div><div><h4>CCNP Collaboration</h4><p>Unified Comms · 2027</p></div></div>
    </div>
  </div>
</section>

<section id="experience">
  <div class="wrap">
    <div class="label reveal"><h2>Experience</h2><div class="ln"></div></div>
    <div class="tl">

      <div class="job reveal"><div class="node"></div>
        <div class="yr">2024 — Present</div>
        <h3>Technical Lead</h3>
        <div class="co">Sword Group (formerly Ping Network Solutions)</div>
        <ul>
          <li>Designed and delivered a resilient, multi-region Cisco ISE, Palo Alto Firewall &amp; Cisco SD-WAN deployment in Azure, establishing zero-trust network access for a critical national infrastructure client.</li>
          <li>Architected a secure cloud-based (Azure) AI platform to automate network operations workflows, integrating LLM-based tooling with enterprise infrastructure to reduce manual effort and accelerate incident response.</li>
          <li>Manage and mentor a team of 7 consultants, owning resource planning, technical direction, and professional development across concurrent delivery programmes.</li>
          <li>Define solution architecture and set technical standards across projects, ensuring consistency, quality, and alignment with client outcomes.</li>
        </ul>
      </div>

      <div class="job reveal"><div class="node"></div>
        <div class="yr">2019 — 2024</div>
        <h3>Consultant Engineer</h3>
        <div class="co">Ping Network Solutions</div>
        <ul>
          <li>Directed a multi-datacentre &amp; offshore transformation programme incorporating SD-WAN, Cisco Nexus datacentre switching, and Palo Alto Networks edge security — delivered on time and within budget.</li>
          <li>Delivered campus-wide firewall and LAN refresh programmes across multiple Scottish public sector clients including colleges, universities, and government bodies, driving security uplift and operational resilience.</li>
          <li>Championed DevOps practices — CI/CD pipelines, infrastructure-as-code, and automated testing to accelerate delivery.</li>
          <li>Designed and implemented end-to-end solutions spanning networking, security, and collaboration technologies.</li>
          <li>Led a multi-site migration from legacy BGP/IPsec VPN to a modern Cisco SD-WAN architecture.</li>
          <li>Architected Cisco SD-WAN with an active/active Palo Alto Networks transit hub in Azure, enabling resilient hybrid connectivity.</li>
          <li>Managed the migration of 2,000 users from Cisco CUCM to Microsoft Teams for a major Scottish university.</li>
          <li>Designed and built a bespoke hosted management platform across dual datacentres for an energy sector client.</li>
        </ul>
      </div>

      <div class="job reveal"><div class="node"></div>
        <div class="yr">2015 — 2019</div>
        <h3>Principal Engineer</h3>
        <div class="co">Virgin Media Business</div>
        <ul>
          <li>Provided technical leadership and consultation for large public sector accounts.</li>
          <li>Delivered a comprehensive LAN/WAN and datacentre redesign using Cisco Nexus 9K for the Scottish Courts Service.</li>
          <li>Led a datacentre refresh incorporating clustered Cisco UCS 5508 compute nodes for the Scottish Prisons Service.</li>
          <li>Designed and implemented a secure video conferencing system for the Scottish Prisons Service, connecting inmates, solicitors, police, and court personnel.</li>
          <li>Delivered multiple large infrastructure projects including LAN refreshes, firewall migrations, and SIP integrations.</li>
        </ul>
      </div>

      <div class="job reveal"><div class="node"></div>
        <div class="yr">2007 — 2015</div>
        <h3>Senior Network Engineer</h3>
        <div class="co">Jabil</div>
        <ul>
          <li>Led a European-wide LAN, WAN, and Cisco telephony refresh across 112 manufacturing sites.</li>
          <li>Delivered two $3M datacentre builds in London and Budapest.</li>
          <li>Served as technical lead for the acquisition integration of a competitor facility in the Netherlands.</li>
          <li>Managed converged data and voice network installations across the European region.</li>
        </ul>
      </div>

      <div class="job reveal"><div class="node"></div>
        <div class="yr">2003 — 2007</div>
        <h3>Network Engineer</h3>
        <div class="co">Jabil</div>
        <ul>
          <li>Designed routing and traffic engineering solutions using BGP and OSPF.</li>
          <li>Delivered VPN, telephony, and wireless solutions across multiple European sites.</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section id="contact" style="padding-bottom:20px">
  <div class="wrap">
    <div class="cta reveal">
      <h2>Let's build resilient networks.</h2>
      <p>Available for lead architecture, consultancy and complex multi-vendor delivery programmes across enterprise and public sector.</p>
      <div class="btns">
        <a class="btn" href="mailto:Stevie.Johnston@gmail.com">✉ Get in touch</a>
        <a class="btn alt" href="https://linkedin.com/in/steven-johnston-474a5333" target="_blank">Connect on LinkedIn</a>
      </div>
    </div>
  </div>
</section>

<footer>© 2025 Steven Johnston · Technical Lead · Glasgow, Scotland · SC Cleared</footer>

<script>
  const io=new IntersectionObserver((es)=>{
    es.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('in'), (e.target.dataset.d||0)); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,i)=>{ el.dataset.d=(i%6)*60; io.observe(el); });
</script>
</body>
</html>`;
