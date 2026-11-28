(function () {
  'use strict';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const slug = value => String(value || 'asistente-comercial').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'asistente-comercial';
  const defaults = {name:'copywriter-de-ventas',goal:'Preparar propuestas en tres opciones para Gemini Canvas y mensajes de seguimiento',rules:'Pregunta por la necesidad, la fecha y el presupuesto. Usa solo mi catálogo y precios confirmados.',format:'Resumen breve, tabla de opciones y WhatsApp de máximo 60 palabras'};
  const LAB = {
    buildSavedInfo(biz = {}) {
      return `Mi negocio es ${biz.name || '[Mi negocio]'}.\n- Oferta principal: ${biz.offer || '[Producto o servicio]'}\n- Cliente ideal: ${biz.audience || '[Cliente ideal]'}\n- Diferencia confirmada: ${biz.diff || '[Diferenciador confirmado]'}\n- Tono de marca: ${biz.tone || 'Claro, práctico y cercano'}\n\nReglas permanentes para responderme:\n- No inventes precios, descuentos, stock, testimonios ni garantías; marca cualquier dato pendiente como [POR CONFIRMAR].\n- Evita frases cliché y lenguaje genérico.\n- Si falta un dato indispensable antes de redactar un borrador final, hazme hasta tres preguntas breves.\n- Entrega borradores listos para revisión humana; nunca afirmes que enviaste un correo o modificaste mi agenda.`;
    },
    buildProposal(values, biz) {
      return `Usa /copywriter-de-ventas y /voz-de-marca (o pega estas instrucciones) como asesor comercial de ${biz.name}.\n[Sugerencia: activa el modo Canvas en Gemini para editar secciones y exportar a Google Docs en un clic]\n\nOferta: ${biz.offer}.\nCliente ideal: ${biz.audience}.\nDiferencia confirmada: ${biz.diff}.\nTono: ${biz.tone}.\n\nSolicitud: ${values.solicitud || '[POR CONFIRMAR]'}\nResultado esperado: ${values.resultado || '[POR CONFIRMAR]'}\nOpciones y precios confirmados: ${values.opciones || '[POR CONFIRMAR]'}\nPlazos y condiciones: ${values.plazo || '[POR CONFIRMAR]'}\n\nAntes de redactar, pregunta por los datos indispensables que falten. Después entrega un resumen de la necesidad, una tabla de opciones con alcances distintos y un mensaje de WhatsApp de hasta 60 palabras con un siguiente paso. Respeta las opciones reales del negocio. No inventes precios, descuentos, stock, garantías ni condiciones. Marca los datos pendientes como [POR CONFIRMAR]. Lista lo que debo revisar antes de enviar.`;
    },
    buildInstructions(spec = {}, biz = {}) {
      const s = {...defaults,...spec};
      return `---\nname: ${slug(s.name)}\ndescription: ${JSON.stringify(`Usar para ${s.goal || defaults.goal}`)}\n---\n\n# Función\nEres el especialista comercial de ${biz.name || '[Mi negocio]'}.\nTu tarea: ${s.goal || defaults.goal}.\n\n# Contexto\n- Oferta: ${biz.offer || '[Producto o servicio]'}\n- Cliente ideal: ${biz.audience || '[Cliente ideal]'}\n- Diferenciador: ${biz.diff || '[Diferenciador confirmado]'}\n- Tono: ${biz.tone || 'Claro y cercano'}\n\n# Reglas\n${s.rules || defaults.rules}\n- No inventes precios, descuentos, testimonios, disponibilidad ni garantías.\n- Si falta un dato, pregunta o escribe [POR CONFIRMAR].\n- Distingue datos confirmados, supuestos y recomendaciones.\n- No envíes mensajes ni afirmes que modificaste un correo, una agenda o un CRM.\n- Entrega un borrador para revisión humana.\n\n# Formato de salida\n${s.format || defaults.format}\n\n# Revisión antes de entregar\nComprueba que el resultado sea cierto, específico, coherente con la voz del negocio y tenga un siguiente paso claro.\n`;
    },
    getSpec() {return {...defaults,...window.APP.STATE.assistantLab};},
    buildSkillLibrary(biz=window.APP.getEffectiveBiz(),data=window.WORKSHOP_DATA,drafts=window.APP.STATE.skillDrafts || {}) {
      const templates = data.skillTemplates || [];
      return `# Biblioteca de Skills (SKILL.md) · ${biz.name}\n\nCada bloque corresponde a un archivo \`SKILL.md\` independiente: créalo en Gemini (Personalizar → Skills) para invocarlo con \`/nombre-del-skill\` en cualquier chat, o descárgalo individualmente desde el laboratorio.\n\n## Capa 1 · Bloque para "Información guardada" en Gemini\n\n\`\`\`text\n${this.buildSavedInfo(biz)}\n\`\`\`\n\n## Capa 3 · Tus 5 Skills reutilizables\n\n`+templates.map(template=>`### ${template.label} (\`/${slug((drafts[template.id] || template).name)}\`)\n\n\`\`\`markdown\n${this.buildInstructions(drafts[template.id] || template,biz)}\`\`\`\n`).join('\n');
    },
    createWorksheet(slide) {
      const wrap=document.createElement('div');wrap.className='worksheet';
      const key=`result-${slide.id}`;
      wrap.innerHTML=`<div class="worksheet-heading"><label for="${key}">${escape(slide.deliverable || 'Tu resultado')}</label><span class="save-state" role="status">Solo en este navegador</span></div><p>Pega la respuesta que revisaste o escribe tus notas. Se incluirá en tu kit.</p><textarea id="${key}" rows="6" placeholder="Aquí va tu versión revisada, después de probar el Skill en Gemini…"></textarea>`;
      const input=wrap.querySelector('textarea');input.value=window.APP.STATE.drafts[slide.id] || '';
      input.addEventListener('input',()=>{
        window.APP.STATE.drafts[slide.id]=input.value;
        const saved=window.APP.saveState();
        wrap.querySelector('.save-state').textContent=saved?'Guardado en este navegador':'No se pudo guardar: descarga tu kit';
      });
      return wrap;
    },
    renderAssistant(slide,body) {
      const grid=document.createElement('div');grid.className='assistant-lab';
      const form=document.createElement('form');form.className='assistant-form';
      const spec=this.getSpec();
      form.innerHTML=`<p class="practice-brief">Elige uno de los 5 Skills comerciales, ajústalo a tu negocio y descárgalo en formato <code>SKILL.md</code> (o copia sus instrucciones en Gemini → Personalizar → Skills para invocarlo con <code>/</code>).</p>`;
      const chooser=document.createElement('label');chooser.className='field playbook-chooser';
      chooser.innerHTML='<span id="skill-template-label">Biblioteca de Skills (SKILL.md)</span><select id="skill-template" aria-labelledby="skill-template-label"><option value="custom">Mi Skill personalizado</option></select>';
      const select=chooser.querySelector('select');
      (window.WORKSHOP_DATA.skillTemplates || []).forEach(template=>{const option=document.createElement('option');option.value=template.id;option.textContent=`/${template.name} · ${template.label}`;select.appendChild(option);});
      select.value=window.APP.STATE.activeSkillId || 'custom';form.appendChild(chooser);
      const fieldInputs={};
      const fields=[['name','Nombre del Skill (se invocará con /nombre)','input'],['goal','¿Qué tarea repetirá? (description)','textarea'],['rules','Reglas de tu negocio','textarea'],['format','Formato de la respuesta','textarea']];
      fields.forEach(([key,label,tag])=>{
        const field=document.createElement('label');field.className='field';
        field.innerHTML=`<span>${label}</span><${tag} id="assistant-${key}" ${tag==='input'?'type="text"':'rows="3"'} maxlength="${key==='name'?80:2500}"></${tag}>`;
        const input=field.querySelector(tag);input.value=spec[key];
        fieldInputs[key]=input;
        input.addEventListener('input',()=>{
          window.APP.STATE.assistantLab={...this.getSpec(),[key]:input.value};
          if(!window.APP.STATE.skillDrafts) window.APP.STATE.skillDrafts={};
          window.APP.STATE.skillDrafts[window.APP.STATE.activeSkillId || 'custom']={...window.APP.STATE.assistantLab};
          window.APP.saveState();update();
        });
        form.appendChild(field);
      });
      form.addEventListener('submit',e=>e.preventDefault());
      const output=document.createElement('div');output.className='assistant-output';
      output.innerHTML=`<div class="assistant-preview-head"><h3>Archivo listo en formato Skill</h3><span class="format-label">SKILL.md</span></div><pre class="assistant-preview" tabindex="0" aria-label="Vista previa del archivo SKILL.md"></pre><div class="action-row"><button class="btn btn-primary" type="button" data-action="copy">Copiar SKILL.md</button><button class="btn btn-secondary" type="button" data-action="download">Descargar SKILL.md ↓</button><button class="btn btn-secondary" type="button" data-action="savedinfo">Copiar Info guardada</button><a class="btn btn-secondary" href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer">Probar en Gemini ↗</a></div><p class="helper-text">En Gemini Apps ve a Personalizar → Skills, crea el Skill con estas instrucciones e invócalo con <code>/${escape(slug(spec.name))}</code> en cualquier chat. Si tu cuenta Workspace aún no muestra Skills, guárdalo en un Google Doc de Drive.</p>`;
      const update=()=>{
        const curSpec = this.getSpec();
        output.querySelector('pre').textContent=this.buildInstructions(curSpec,window.APP.getEffectiveBiz());
        const helperCode = output.querySelector('.helper-text code');
        if (helperCode) helperCode.textContent = `/${slug(curSpec.name)}`;
      };update();
      select.addEventListener('change',()=>{
        const state=window.APP.STATE;
        if(!state.skillDrafts) state.skillDrafts={};
        state.skillDrafts[state.activeSkillId || 'custom']={...this.getSpec()};
        state.activeSkillId=select.value;
        const template=(window.WORKSHOP_DATA.skillTemplates || []).find(t=>t.id===select.value);
        state.assistantLab={...(state.skillDrafts[select.value] || template || defaults)};
        Object.entries(fieldInputs).forEach(([key,input])=>{input.value=this.getSpec()[key];});
        state.skillDrafts[select.value]={...state.assistantLab};window.APP.saveState();update();
      });
      output.querySelector('[data-action="copy"]').addEventListener('click',e=>window.ACTIVITIES.copyText(output.querySelector('pre').textContent,'SKILL.md copiado ✓',e.currentTarget));
      output.querySelector('[data-action="savedinfo"]').addEventListener('click',e=>window.ACTIVITIES.copyText(this.buildSavedInfo(window.APP.getEffectiveBiz()),'Bloque de Información guardada copiado ✓',e.currentTarget));
      output.querySelector('[data-action="download"]').addEventListener('click',()=>window.ACTIVITIES.downloadFile(`${slug(this.getSpec().name)}-SKILL.md`,output.querySelector('pre').textContent));
      const libraryButton=document.createElement('button');libraryButton.type='button';libraryButton.className='btn btn-secondary';libraryButton.textContent='Descargar biblioteca de Skills (.md) ↓';
      libraryButton.addEventListener('click',()=>window.ACTIVITIES.downloadFile('biblioteca-skills-founder.md',this.buildSkillLibrary()));output.querySelector('.action-row').appendChild(libraryButton);
      const pack=window.WORKSHOP_DATA.cafeAssetKit;
      const cafeSkillsZip=pack?.items?.find(i=>i.id==='skills-zip');
      if(cafeSkillsZip){
        const zipLink=document.createElement('a');zipLink.className='btn btn-secondary';zipLink.href=cafeSkillsZip.url;zipLink.download='';zipLink.textContent='5 SKILL.md Café Origen Andino (.zip) ↓';
        output.querySelector('.action-row').appendChild(zipLink);
      }
      output.appendChild(this.createWorksheet({id:slide.id,deliverable:'Tu Skill probado y lo que ajustaste'}));
      const checks=document.createElement('label');checks.className='assistant-complete check-row';
      checks.innerHTML='<input type="checkbox"><span>Configuré mi Información guardada (o NotebookLM), probé un Skill en Gemini y descargué mi SKILL.md.</span>';
      checks.querySelector('input').checked=!!window.APP.STATE.challengesDone[slide.id]?.completed;
      checks.querySelector('input').addEventListener('change',e=>{window.APP.STATE.challengesDone[slide.id]={completed:e.target.checked};window.APP.saveState();window.APP.refreshCompletionUI();});
      output.appendChild(checks);grid.append(form,output);body.appendChild(grid);
      this.refreshAssistant=update;
    },
    buildKit(app=window.APP,data=window.WORKSHOP_DATA) {
      const biz=app.getEffectiveBiz();
      const blocks=data.bloques.flatMap(b=>b.slides);
      const results=blocks.filter(s=>s.type==='reto'||s.type==='assistantLab').map(s=>`## ${s.deliverable || 'Prueba de Skill'}\n\n${app.STATE.drafts[s.id] || '_Sin resultado guardado todavía._'}\n\n${s.promptTemplate?`### Prompt de trabajo\n\n${app.interpolateStr(s.promptTemplate)}\n`:''}`).join('\n');
      const metrics=app.STATE.metrics || {};
      const creative=app.STATE.creativeBrief || {};
      const campaign=`## Mi brief de campaña\n\n- Objetivo: ${creative.goal || '[Por definir]'}\n- Producto/escena: ${creative.subject || '[Por definir]'}\n- Estilo: ${creative.style || '[Por definir]'}\n- Formato: ${creative.format || '[Por definir]'}\n- Mensaje/CTA: ${creative.message || '[Por definir]'}\n`;
      const library=this.buildSkillLibrary(biz,data,app.STATE.skillDrafts || {});
      return `# Mi kit de Gemini y Workspace · ${biz.name}\n\nTaller de founders de 90 minutos. Contenido revisado: ${data.meta.reviewedOn}.\n\n## Mi negocio\n\n- Oferta: ${biz.offer}\n- Cliente: ${biz.audience}\n- Diferencia: ${biz.diff}\n- Tono: ${biz.tone}\n\n${results}\n${campaign}\n## Mi Skill activo (SKILL.md)\n\n\`\`\`markdown\n${this.buildInstructions(this.getSpec(),biz)}\`\`\`\n\n${library}\n## Mi experimento de siete días\n\n- Tarea que repetiré: ${metrics.task || '[Por definir]'}\n- Minutos antes de usar Gemini: ${metrics.before || '[Por medir]'}\n- Minutos después, incluida la revisión: ${metrics.after || '[Por medir]'}\n- Señal comercial que observaré: ${metrics.signal || '[Conversaciones, propuestas o seguimientos]'}\n\nCompara tareas similares. El ahorro de tiempo no demuestra por sí solo un aumento de ventas.\n\n## Fuentes y referencias\n\n${data.sources.map(s=>`- [${s.title}](${s.url})`).join('\n')}\n\n## Para profundizar después\n\n${data.optionalTopics.map(s=>`- ${s.title}: ${s.desc}`).join('\n')}\n`;
    },
    exportKit() {
      window.ACTIVITIES.downloadFile(`mi-kit-gemini-${slug(window.APP.getEffectiveBiz().name)}.md`,this.buildKit());
    },
    renderCafeAssetPack(container,{openDetails=false}={}) {
      const pack=window.WORKSHOP_DATA.cafeAssetKit;
      if(!pack) return;
      const box=document.createElement('div');box.className='asset-kit-box';
      box.innerHTML=`<div class="asset-kit-head"><div><h3>${escape(pack.title)}</h3><p>${escape(pack.subtitle)}</p></div><a class="btn btn-primary btn-sm" href="${escape(pack.zipUrl)}" download>${escape(pack.zipLabel)}</a></div>`;
      const details=document.createElement('details');details.className='pipeline-solution';if(openDetails)details.open=true;
      details.innerHTML=`<summary>Descargar archivos individuales (${pack.items.length} assets: Skills SKILL.md, PDFs, fotos y guías)</summary><ul class="asset-kit-list">${pack.items.map(it=>`<li><a href="${escape(it.url)}" download><strong>${escape(it.label)}</strong><span>${escape(it.use)}</span></a></li>`).join('')}</ul>`;
      box.appendChild(details);container.appendChild(box);
    },
    renderPortfolio(slide,body) {
      const area=document.createElement('div');area.className='portfolio';
      const list=document.createElement('div');list.className='deliverable-list';
      const draw=()=>{
        list.innerHTML='';
        const slides=window.WORKSHOP_DATA.bloques.flatMap(b=>b.slides).filter(s=>s.type==='reto'||s.type==='assistantLab');
        slides.forEach(s=>{
          const hasText=!!window.APP.STATE.drafts[s.id]?.trim();
          const done=!!window.APP.STATE.challengesDone[s.id]?.completed;
          const row=document.createElement('button');row.type='button';row.className='deliverable-row';
          row.innerHTML=`<span class="deliverable-state ${done?'done':''}" aria-hidden="true">${done?'✓':'○'}</span><span><strong>${escape(s.deliverable||'Tu Skill comercial')}</strong><small>${done?'Revisión marcada':hasText?'Borrador guardado · pendiente de revisar':'Pendiente · abre el ejercicio para empezar'}</small></span><span aria-hidden="true">↗</span>`;
          row.addEventListener('click',()=>window.APP.goToId(s.id));list.appendChild(row);
        });
      };draw();this.refreshPortfolio=draw;
      const aside=document.createElement('div');aside.className='kit-download';
      aside.innerHTML='<h3>Tu sistema de trabajo.</h3><p>Información guardada, biblioteca de Skills (SKILL.md), propuesta en Canvas, análisis en Sheets y campaña visual en un solo archivo.</p><button type="button" class="btn btn-primary" id="download-workbook">Descargar mi kit (.md)</button><button type="button" class="btn btn-secondary" id="download-saved-info">Descargar Información guardada (.txt)</button><a class="btn btn-secondary" href="'+escape(window.WORKSHOP_DATA.meta.pipelineFileUrl)+'" download>Caso de pipeline para Sheets (.xlsx) ↓</a><p class="helper-text">Guarda enlaces a imágenes, videos y documentos en cada práctica. El kit conserva texto y referencias; no incorpora los archivos multimedia.</p>';
      aside.querySelector('#download-workbook').addEventListener('click',()=>this.exportKit());
      aside.querySelector('#download-saved-info').addEventListener('click',()=>window.ACTIVITIES.downloadFile('informacion-guardada-gemini.txt',this.buildSavedInfo(window.APP.getEffectiveBiz()),'text/plain;charset=utf-8'));
      area.append(list,aside);body.appendChild(area);
      this.renderCafeAssetPack(body,{openDetails:true});
    },
    renderNextSteps(slide,body) {
      const steps=document.createElement('div');steps.className='next-plan';
      slide.plan7Days.forEach(item=>{const row=document.createElement('div');row.innerHTML=`<h3>${escape(item.day)}</h3><p>${escape(item.task)}</p>`;steps.appendChild(row);});body.appendChild(steps);
      const metrics=document.createElement('div');metrics.className='metrics-form';
      metrics.innerHTML='<h3>Haz una prueba pequeña esta semana.</h3>';
      [['task','Tarea que repetiré','Ej. Preparar una propuesta en Canvas con /copywriter-de-ventas'],['before','Minutos antes','Ej. 35'],['after','Minutos con Gemini y revisión','Por medir'],['signal','Señal comercial que observaré','Ej. Conversaciones iniciadas']].forEach(([key,label,placeholder])=>{
        const field=document.createElement('label');field.className='field';field.innerHTML=`<span>${label}</span><input id="metric-${key}" type="${['before','after'].includes(key)?'number':'text'}" ${['before','after'].includes(key)?'min="0" step="1"':''} placeholder="${placeholder}">`;
        const input=field.querySelector('input');input.value=window.APP.STATE.metrics[key] || '';
        input.addEventListener('input',()=>{window.APP.STATE.metrics[key]=input.value;window.APP.saveState();});metrics.appendChild(field);
      });body.appendChild(metrics);
      const actions=document.createElement('div');actions.className='action-row';actions.innerHTML='<button class="btn btn-primary" type="button">Descargar mi kit</button><a class="btn btn-secondary" href="GUIA-FACILITACION.md" target="_blank" rel="noopener">Guía del facilitador ↗</a>';
      actions.querySelector('button').addEventListener('click',()=>this.exportKit());body.appendChild(actions);
      const details=document.createElement('details');details.className='resource-details';
      details.innerHTML=`<summary>Para profundizar y consultar las fuentes</summary><div class="optional-topics">${window.WORKSHOP_DATA.optionalTopics.map(s=>`<div><h4>${escape(s.title)}</h4><p>${escape(s.desc)}</p></div>`).join('')}</div><p>Información revisada el 20 de noviembre de 2026. Las funciones y los límites dependen de la cuenta.</p><ul>${window.WORKSHOP_DATA.sources.map(s=>`<li><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)} ↗</a></li>`).join('')}</ul>`;
      body.appendChild(details);
    },
    syncChrome() {
      const app=window.APP;
      document.querySelectorAll('#deck > .slide').forEach((s,i)=>{s.inert=i!==app.idx;s.setAttribute('aria-hidden',String(i!==app.idx));});
      document.querySelectorAll('.block-chip').forEach(chip=>{chip.textContent=chip.dataset.shortLabel;chip.setAttribute('aria-current',chip.classList.contains('active')?'step':'false');});
      const status=document.getElementById('slide-status');if(status)status.textContent=`Diapositiva ${app.idx+1} de ${app.flat.length}. ${app.flat[app.idx]?.title || ''}`;
      const phase=document.getElementById('phase-time');if(phase)phase.textContent=app.flat[app.idx]?.block.timeRange || '';
      if(app.flat[app.idx]?.type==='portfolio')this.refreshPortfolio?.();
    },
    syncDialogs() {
      const dialogs=[...document.querySelectorAll('#menu,#biz-modal,#shortcuts-popover')];
      const open=dialogs.filter(d=>d.classList.contains('open'));
      const active=open[open.length-1];
      const previousFocus=document.activeElement;
      document.getElementById('deck').inert=!!active;
      document.getElementById('topbar').inert=!!active;
      document.getElementById('bottombar').inert=!!active;
      dialogs.forEach(d=>{d.inert=d!==active;});
      const wasOpen=!!this.activeDialog;
      if(active!==this.activeDialog){
        if(active){if(!wasOpen)this.returnFocus=previousFocus;active.querySelector('input,button,[tabindex="0"]')?.focus();}
        else if(wasOpen){const target=this.returnFocus;requestAnimationFrame(()=>{if(target?.isConnected&&!target.closest('[inert]'))target.focus();else document.getElementById('btn-menu').focus();});}
        this.activeDialog=active;
      }
      document.getElementById('btn-menu').setAttribute('aria-expanded',String(document.getElementById('menu').classList.contains('open')));
      document.getElementById('btn-biz').setAttribute('aria-expanded',String(document.getElementById('biz-modal').classList.contains('open')));
    },
    init() {
      document.getElementById('btn-kit').addEventListener('click',()=>window.APP.goToId('s44'));
      const mode=document.getElementById('btn-view');
      mode.addEventListener('click',()=>{
        const on=document.body.classList.toggle('presentation-mode');mode.setAttribute('aria-pressed',String(on));
        mode.textContent=on?'Vista: Presentación':'Vista: Taller';window.APP.goTo(window.APP.idx,true);
      });
      const observer=new MutationObserver(()=>this.syncDialogs());
      document.querySelectorAll('#menu,#biz-modal,#shortcuts-popover').forEach(d=>observer.observe(d,{attributes:true,attributeFilter:['class']}));this.syncDialogs();
      document.addEventListener('keydown',e=>{
        const dialog=this.activeDialog;if(e.key!=='Tab'||!dialog)return;
        const focusable=[...dialog.querySelectorAll('button,input,textarea,select,a[href],[tabindex="0"]')].filter(n=>!n.disabled&&n.getClientRects().length);
        const first=focusable[0],last=focusable[focusable.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
      });
      this.syncChrome();
    }
  };
  window.LAB=LAB;
})();
