const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
function data(){const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'bloques.js'),'utf8'),ctx);return ctx.window.WORKSHOP_DATA;}

test('la ruta de founders tiene 28 diapositivas, siete bloques y 90 minutos reales',()=>{
 const d=data();assert.equal(d.bloques.length,7);assert.equal(d.bloques.flatMap(b=>b.slides).length,28);
 let cursor=0;for(const b of d.bloques){const duration=b.slides.reduce((n,s)=>n+s.mins,0);assert.equal(b.timeRange,`${String(cursor).padStart(2,'0')}–${String(cursor+duration).padStart(2,'0')} min`);cursor+=duration;}
 assert.equal(cursor,90);
});

test('ningún salto del contenido termina en una diapositiva eliminada',()=>{
 const d=data(),slides=d.bloques.flatMap(b=>b.slides),ids=slides.map(s=>s.id);assert.equal(new Set(ids).size,ids.length);
 function walk(o){if(!o||typeof o!=='object')return;for(const[k,v]of Object.entries(o)){if(k==='targetId')assert.ok(ids.includes(v),`Referencia inválida: ${v}`);else walk(v);}}walk(d);
});

test('los retos incluyen una salida guardable, tiempo coherente y criterios de revisión',()=>{
 const retos=data().bloques.flatMap(b=>b.slides).filter(s=>s.type==='reto');assert.ok(retos.length>=4);
 for(const s of retos){assert.equal(s.durationSec,s.mins*60,`Temporizador ${s.id}`);assert.ok(s.deliverable,`Entregable ${s.id}`);assert.ok(s.checklist.length>=3);assert.ok(s.promptTemplate);}
});

test('no se usan Gems y Treg queda acotado a una única diapositiva bonus',()=>{
 for(const f of ['index.html','bloques.js','activities.js','lab.js','founder.js','app.js']){
  const text=fs.readFileSync(path.join(root,f),'utf8');
  const hits=text.match(/\bgems?\b/gi)||[];
  assert.deepEqual(hits,[],`Se encontraron menciones a Gems en ${f}: ${hits.join(', ')}`);
 }
 const slides=data().bloques.flatMap(b=>b.slides);
 const tregSlides=slides.filter(s=>/\btreg\b/i.test(JSON.stringify(s))).map(s=>s.id);
 assert.ok(tregSlides.includes('sTreg'));
 assert.deepEqual(Array.from(tregSlides.filter(id=>id!=='s2')),['sTreg']);
});

test('las instrucciones en formato SKILL.md e Información guardada contienen negocio, frontmatter y límites',()=>{
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'lab.js'),'utf8'),ctx);
 const spec={name:'Mi Skill: Café',goal:'Crear propuestas',rules:'No ofrecer descuentos.',format:'Tabla y WhatsApp'};
 const biz={name:'Café "Origen"',offer:'Café local',audience:'Oficinas',diff:'Tueste semanal',tone:'Cercano'};
 const text=ctx.window.LAB.buildInstructions(spec,biz);
 const saved=ctx.window.LAB.buildSavedInfo(biz);
 assert.match(text,/name: mi-skill-cafe/);assert.match(text,/description: "/);assert.match(text,/Café "Origen"/);assert.match(text,/Café local/);assert.match(text,/No ofrecer descuentos/);assert.match(text,/No inventes/);
 assert.match(saved,/Café "Origen"/);assert.match(saved,/POR CONFIRMAR/);
});

test('el constructor acepta la solicitud sin inventar condiciones comerciales',()=>{
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'lab.js'),'utf8'),ctx);
 const prompt=ctx.window.LAB.buildProposal({solicitud:'Café para 40',opciones:'COP 350.000'}, {name:'Café Origen',offer:'Barra de café',audience:'Oficinas',diff:'Tueste fresco',tone:'Cercano'});
 assert.match(prompt,/Café para 40/);assert.match(prompt,/COP 350.000/);assert.match(prompt,/POR CONFIRMAR/);assert.match(prompt,/No inventes/);assert.match(prompt,/Canvas/);
});

test('el kit incluye los resultados guardados, Información guardada y biblioteca de Skills',()=>{
 const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'lab.js'),'utf8'),ctx);
 const app={STATE:{drafts:{s17:'Propuesta revisada de prueba'},metrics:{task:'Cotizar',before:'35',after:'15'}},getEffectiveBiz:()=>({name:'Café Origen',offer:'Café',audience:'Oficinas',diff:'Tueste fresco',tone:'Cercano'}),interpolateStr:s=>s};
 ctx.window.APP=app;
 const kit=ctx.window.LAB.buildKit(app,data());
 assert.match(kit,/Propuesta revisada de prueba/);assert.match(kit,/Sin resultado guardado todavía/);assert.match(kit,/Información guardada/);assert.match(kit,/Biblioteca de Skills/);assert.match(kit,/Minutos antes de usar Gemini: 35/);assert.match(kit,/support.google.com/);
});

test('la ruta cubre Skills, Workspace, Treg opcional e imagen y video con ejercicios completos',()=>{
 const d=data(),slides=d.bloques.flatMap(b=>b.slides);
 for(const type of ['assistantLab','prospectingLab','workspaceLab','creativeLab'])assert.ok(slides.some(s=>s.type===type),`Falta ${type}`);
 for(const id of ['s17','sWorkspaceReto','sImageReto','sVideoReto'])assert.ok(slides.find(s=>s.id===id)?.promptTemplate,`Falta práctica ${id}`);
 assert.ok(d.skillTemplates.length>=5);
 for(const appId of ['gmail','calendar','drive','docs','sheets','meet','notebooklm'])assert.ok(d.workspaceApps.some(a=>a.id===appId),`Falta app ${appId}`);
 assert.ok(d.sources.some(s=>s.url==='https://treg.to/llms.txt'));
});

test('el estudio creativo produce prompts distintos para imagen y video sin inventar un activo generado',()=>{
 const c={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'founder.js'),'utf8'),c);
 const biz={name:'Café Origen',offer:'Café local',audience:'Oficinas',diff:'Tueste semanal',tone:'Cercano'};
 const brief={goal:'Solicitar una cotización',subject:'Bolsa de café',style:'Fotografía editorial',format:'4:5 vertical',message:'Café para tu equipo'};
 const image=c.window.FOUNDER.buildCreativePrompt('image',brief,biz),video=c.window.FOUNDER.buildCreativePrompt('video',brief,biz);
 assert.match(image,/4:5 vertical/);assert.match(image,/Café Origen/);assert.match(image,/referencia/);
 assert.match(video,/escena/i);assert.match(video,/audio/i);assert.notEqual(image,video);
});

test('los cinco Skills se exportan en formato SKILL.md válido',()=>{
 const c={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'lab.js'),'utf8'),c);
 const biz={name:'Nexo',offer:'Software de inventario',audience:'Pymes',diff:'Fácil de usar',tone:'Directo'};
 for(const template of data().skillTemplates){const text=c.window.LAB.buildInstructions(template,biz);assert.match(text,/name: [a-z0-9-]+/);assert.match(text,/description: "/);assert.match(text,/Software de inventario/);assert.match(text,/No inventes/);}
});

test('el kit conserva el brief creativo y las modificaciones de la biblioteca de Skills',()=>{
 const c={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'lab.js'),'utf8'),c);
 const d=data(),custom={...d.skillTemplates[0],rules:'Usa frases cortas. Regla personalizada de prueba.'};
 const app={STATE:{drafts:{},metrics:{},creativeBrief:{goal:'Reservar una demo',subject:'Mi producto',format:'16:9 horizontal',message:'Agenda una demo'},skillDrafts:{'voz-de-marca':custom}},getEffectiveBiz:()=>({name:'Nexo',offer:'Software',audience:'Pymes',diff:'Simple',tone:'Claro'}),interpolateStr:s=>s};
 c.window.APP=app;const kit=c.window.LAB.buildKit(app,d);
 assert.match(kit,/Agenda una demo/);assert.match(kit,/16:9 horizontal/);assert.match(kit,/Regla personalizada de prueba/);assert.match(kit,/Analista de cuentas/);assert.match(kit,/Director creativo/);
});

test('el caso de Sheets mantiene fecha, archivos y preguntas coherentes',()=>{
 const d=data(),lab=d.pipelineLab,sheets=d.workspaceApps.find(a=>a.id==='sheets');
 assert.equal(lab.cutoff,'13/03/2025');assert.equal(lab.recordCount,10);
 for(const file of [lab.fileUrl,lab.solutionUrl])assert.equal(fs.readFileSync(path.join(root,file)).subarray(0,2).toString(),'PK');
 assert.equal(d.meta.pipelineFileUrl,lab.fileUrl);
 assert.match(sheets.prompt,/más de 10 días/);assert.match(sheets.prompt,/13\/03\/2025/);assert.match(sheets.prompt,/3 deals/);assert.match(sheets.prompt,/gráfico de barras/);
 const reto=d.bloques.flatMap(b=>b.slides).find(s=>s.id==='sWorkspaceReto');assert.equal(reto.promptTemplate,sheets.prompt);assert.equal(reto.durationSec,360);
});

test('el análisis de referencia excluye cerrados y el límite exacto de diez días',()=>{
 const source=JSON.parse(fs.readFileSync(path.join(root,'data/pipeline-sheets.json'),'utf8'));
 const answers=JSON.parse(fs.readFileSync(path.join(root,'data/pipeline-sheets-respuestas.json'),'utf8'));
 const days=r=>(Date.parse(source.cutoff)-Date.parse(r.ultimoContacto))/86400000;
 const urgent=source.rows.filter(r=>r.prioridad==='Alta'&&days(r)>10&&!r.etapa.startsWith('Cerrado')).sort((a,b)=>b.valor-a.valor||a.id.localeCompare(b.id));
 assert.deepEqual(urgent.map(r=>r.id),answers.urgent.map(r=>r.id));assert.deepEqual(urgent.slice(0,3).map(r=>r.id),answers.top3);
 assert.equal(days(source.rows.find(r=>r.id==='D-006')),10);assert.ok(!urgent.some(r=>r.id==='D-006'));
 assert.equal(source.rows.reduce((sum,r)=>sum+r.valor,0),answers.total);assert.equal(answers.total,627000);assert.equal(answers.active,572000);
});

test('el kit descargable de Café Origen Andino existe completo en disco (ZIP, 5 SKILL.md y assets)',()=>{
 const pack=data().cafeAssetKit;
 assert.ok(pack && pack.zipUrl && pack.items.length>=9);
 assert.equal(fs.readFileSync(path.join(root,pack.zipUrl)).subarray(0,2).toString(),'PK');
 for(const item of pack.items){
  const full=path.join(root,item.url);
  assert.ok(fs.existsSync(full),`Falta asset descargable: ${item.url}`);
  assert.ok(fs.statSync(full).size>0,`Asset vacío: ${item.url}`);
 }
 for(const name of ['voz-de-marca','analista-de-cuentas','coach-de-objeciones','copywriter-de-ventas','director-creativo']){
  const sk=fs.readFileSync(path.join(root,`assets-cafe-origen-andino/skills/${name}/SKILL.md`),'utf8');
  assert.match(sk,new RegExp(`name: ${name}`));
  assert.match(sk,/description: "/);
 }
});
