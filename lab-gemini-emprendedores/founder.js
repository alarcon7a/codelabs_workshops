(function () {
  'use strict';
  const refreshers=[];
  const escape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const node=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
  const link=(label,url)=>{const a=node('a','btn btn-secondary',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;};
  function tabs(items,onChange,label){
    const list=node('div','founder-tabs');list.setAttribute('role','tablist');list.setAttribute('aria-label',label);
    const buttons=items.map((item,i)=>{const b=node('button','founder-tab',item.label);b.type='button';b.id=`${label}-${item.id}`;b.setAttribute('role','tab');b.setAttribute('aria-controls',`${label}-content`);b.setAttribute('aria-selected',String(i===0));b.tabIndex=i===0?0:-1;
      b.addEventListener('click',()=>select(i));b.addEventListener('keydown',e=>{let index=i;if(e.key==='ArrowRight')index=(i+1)%items.length;else if(e.key==='ArrowLeft')index=(i-1+items.length)%items.length;else if(e.key==='Home')index=0;else if(e.key==='End')index=items.length-1;else return;e.preventDefault();e.stopPropagation();select(index);buttons[index].focus();});list.appendChild(b);return b;});
    function select(index){buttons.forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});onChange(items[index]);}
    return {list,select};
  }
  function promptBox(title,text,showGeminiBtn=true){return window.ACTIVITIES.makeTerminalBox({title,text,showGeminiBtn});}
  const FOUNDER={
    buildProspectingPrompt(biz){
      return `Investiga cuentas para ${biz.name}. Oferta: ${biz.offer}. ICP: ${biz.audience}. Diferenciador: ${biz.diff}.\n\nBusca hasta cinco empresas con una señal pública reciente relacionada con la oferta. Si el negocio vende B2C, investiga canales o aliados comerciales en lugar de recolectar datos de personas privadas. Usa las fuentes que te proporciono o la búsqueda disponible en tu herramienta (Deep Research o Treg vía MCP). Prioriza fuentes originales y registra URL, fecha de publicación y fecha de consulta. Si no tienes acceso a búsqueda, solicita fuentes o usa el dataset ficticio de entrenamiento conservando su etiqueta; no simules consultas.\n\nDevuelve tabla: empresa, dominio, señal, URL original, fecha, encaje con el ICP, dato desconocido, siguiente acción. Separa hechos de hipótesis y explica los descartes. No inventes ingresos, cargos ni contactos. Un email encontrado debe verificarse antes de usarse; no envíes mensajes. Al final reporta las fuentes y herramientas usadas. Si hay una herramienta de pago, revisa el precio y acuerda un presupuesto total antes de ejecutarla; lleva el costo acumulado y detente al alcanzar el límite.`;
    },
    buildTregAntigravityPrompt(biz){
      return `Usa el servidor MCP de Treg conectado en Antigravity para una demo breve de prospección para ${biz.name} (${biz.offer}).\nICP: ${biz.audience} | Diferenciador: ${biz.diff}.\n\nPaso 1: Usa catalog_search y catalog_get para proponer la herramienta más adecuada y mostrarme su costo antes de ejecutarla.\nPaso 2: Con mi aprobación y respetando el presupuesto máximo, busca 3 empresas reales con 1 señal pública reciente (URL y fecha).\nPaso 3: Devuelve tabla (Empresa | Dominio | Señal | URL | Encaje | Dato pendiente) + un borrador de mensaje inicial de máximo 65 palabras en tono ${biz.tone}. No envíes mensajes ni compres enriquecimiento extra sin confirmar.`;
    },
    demoDataset(){return 'empresa,dominio,señal,url,fecha,estado\n"Cuenta A · ficticia","sin dominio real","Apertura de sede: supuesto de entrenamiento","sin fuente real","por verificar","simulado"\n"Cuenta B · ficticia","sin dominio real","Evaluación de proveedores: supuesto de entrenamiento","sin fuente real","por verificar","simulado"\n"Cuenta C · ficticia","sin dominio real","Solicitó no recibir mensajes: supuesto de entrenamiento","sin fuente real","por verificar","no contactar · simulado"';},
    buildCreativePrompt(mode,brief={},biz={}){
      const context=`Campaña para ${biz.name || '[Mi negocio]'}. Oferta: ${biz.offer || '[Oferta]'}. Audiencia: ${biz.audience || '[Cliente ideal]'}. Diferencia confirmada: ${biz.diff || '[Diferencia]'}. Tono: ${biz.tone || 'Claro y cercano'}.\nObjetivo: ${brief.goal || 'Iniciar una conversación comercial'}.\nSujeto/producto: ${brief.subject || biz.offer || '[Producto]'}\nEstilo: ${brief.style || 'Fotografía editorial con luz natural'}.\nFormato solicitado: ${brief.format || '4:5 vertical'}.\nMensaje/CTA que agregaré en edición: ${brief.message || 'Conoce las opciones para tu negocio'}.`;
      const common='Usa la imagen de referencia autorizada si la adjunto. Conserva identidad, proporciones, colores y empaque del producto. Si falta referencia, no afirmes fidelidad exacta. No inventes sellos, precios, testimonios ni atributos. Usa solo rostros y voces autorizados. Revisa el resultado antes de publicarlo.';
      if(mode==='video')return `Genera un clip corto para esta campaña, con la duración y relación de aspecto que admita la herramienta. Si el formato solicitado no está disponible, indícalo antes de generar.\n\n${context}\n\nEscena única: muestra el producto o servicio en uso, con una sola acción clara y un movimiento de cámara suave. Luz consistente con la imagen de campaña. Audio: ambiente natural discreto, sin locución ni música que compitan con la demostración. Prepararé el video final de tres escenas y la voz en Vids o mi editor. Deja espacio para texto y CTA.\n\n${common}`;
      return `Genera una imagen promocional para esta campaña.\n\n${context}\n\nComposición: un sujeto principal reconocible, contexto de uso relacionado con la audiencia y fondo limpio. Luz natural y detalle del producto. Deja espacio para titular y CTA; agregaré el texto editable en Slides.\n\n${common}\n\nDespués generaré una iteración: cambia solo fondo o encuadre, conservando la identidad del producto.`;
    },
    renderProspecting(slide,body){
      const shell=node('div','founder-tool');const panel=node('div','founder-panel');panel.id='treg-panel-content';panel.setAttribute('role','tabpanel');
      const options=[{id:'connect',label:'Demo Treg en Antigravity'},{id:'search',label:'Buscar señales (sin Treg)'},{id:'sample',label:'Datos de práctica (.csv)'}];
      let current=options[0];
      const draw=item=>{current=item;panel.innerHTML='';panel.setAttribute('aria-labelledby',`treg-panel-${item.id}`);
        if(item.id==='connect'){
          const intro=node('div','founder-instructions');intro.innerHTML='<h3>Demo opcional en vivo: Treg.to desde Antigravity.</h3><p>No necesitas esto para operar hoy con Gemini y Workspace. Úsalo como prueba del facilitador o cuando escales tu prospección B2B.</p><ol><li>En <strong>Antigravity</strong> (u otro cliente MCP compatible), agrega el servidor <code>https://treg.to/mcp/</code> y completa el acceso con OAuth verificando equipo y saldo.</li><li>Secuencia segura: <code>catalog_search</code> (elegir herramienta) → <code>catalog_get</code> (revisar parámetros y precio) → <code>call</code> (consulta pequeña de 3 cuentas).</li><li>Lleva las cuentas verificadas a tu hoja de <strong>Google Sheets</strong> para seguimiento comercial.</li></ol><p class="helper-text">Control de costo: acuerda presupuesto total antes de correr la demo. <code>X-Treg-Route-Max-Cost</code> limita cada llamada; no compres enriquecimiento para rellenar datos desconocidos.</p><p class="helper-text">Las apps MCP personalizadas directas en Gemini tienen restricciones de cuenta y región; por eso la prueba se realiza desde Antigravity y los resultados pasan a Sheets.</p>';
          const actions=node('div','action-row');actions.append(link('Abrir Treg ↗','https://treg.to/'),link('Guía oficial ↗','https://treg.to/llms.txt'),link('Requisitos MCP en Gemini ↗','https://support.google.com/gemini/answer/17209137'));
          const out=promptBox('Prompt de demo en vivo · Antigravity + Treg MCP',this.buildTregAntigravityPrompt(window.APP.getEffectiveBiz()),false);
          intro.appendChild(actions);panel.append(intro,out.box);
        } else if(item.id==='search'){
          const intro=node('div','founder-instructions');intro.innerHTML='<h3>Alternativa 100% Google (Deep Research + fuentes públicas).</h3><ol><li>Define segmento y señal verificable con la ficha de tu negocio.</li><li>Ejecuta Deep Research en Gemini o pega fuentes públicas (web, noticias, reseñas de Google Maps).</li><li>Comprueba dos fuentes originales y pasa solo las cuentas válidas a Google Sheets.</li></ol><p class="helper-text">Este sitio es estático y no ejecuta búsquedas ni cobros; copia el prompt y ejecútalo en Gemini.</p>';
          const out=promptBox('Encargo de prospección con evidencia',this.buildProspectingPrompt(window.APP.getEffectiveBiz()),true);panel.append(intro,out.box);
        } else {
          const intro=node('div','founder-instructions');intro.innerHTML='<h3>Caso ficticio para practicar sin conexión.</h3><p>Estas filas no son leads reales. Úsalas para ensayar clasificación y seguimiento; una señal simulada no sirve como evidencia para escribir a una empresa real.</p>';
          const out=promptBox('Dataset de entrenamiento · copiar con su etiqueta',this.demoDataset(),false);
          const download=node('button','btn btn-secondary','Descargar caso ficticio (.csv)');download.type='button';download.addEventListener('click',()=>window.ACTIVITIES.downloadFile('cuentas-ficticias-prospeccion.csv',this.demoDataset(),'text/csv;charset=utf-8'));panel.append(intro,out.box,download);
        }
      };
      const control=tabs(options,draw,'treg-panel');shell.append(control.list,panel);body.appendChild(shell);draw(current);refreshers.push(()=>draw(current));
    },
    renderWorkspace(slide,body){
      const shell=node('div','founder-tool');const panel=node('div','workspace-detail');panel.id='workspace-panel-content';panel.setAttribute('role','tabpanel');const apps=window.WORKSHOP_DATA.workspaceApps;let active=apps[0];
      const draw=app=>{active=app;panel.innerHTML='';panel.setAttribute('aria-labelledby',`workspace-panel-${app.id}`);
        const instructions=node('div','founder-instructions');instructions.innerHTML=`<h3>${escape(app.label)}: un resultado concreto.</h3><p class="surface-location">${escape(app.surface)}</p><ol>${app.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol><p class="playbook-reference">Skill sugerido: ${escape(app.skill || app.playbook)}</p><div class="expected-output"><strong>Resultado esperado</strong><p>${escape(app.output)}</p><small>${escape(app.example)}</small></div>`;
        if(app.id==='sheets')this.renderPipelineResources(instructions);
        else this.renderContextualDownloads(instructions,app.id);
        instructions.appendChild(link(`Abrir ${app.label} ↗`,app.url));
        const out=promptBox(`Prompt para ${app.label}`,window.APP.interpolateStr(app.prompt),false);
        panel.append(instructions,out.box);
      };
      const control=tabs(apps,draw,'workspace-panel');shell.append(control.list,panel);body.appendChild(shell);draw(active);refreshers.push(()=>draw(active));
    },
    renderContextualDownloads(body,appId){
      const pack=window.WORKSHOP_DATA.cafeAssetKit;if(!pack)return;
      const map={
        gmail:['demo-gmail-meet','catalogo-2026'],
        meet:['demo-gmail-meet'],
        drive:['catalogo-2026','tarifario-2025'],
        docs:['catalogo-2026','guia-marca'],
        notebooklm:['catalogo-2026','faq-politicas','guia-marca']
      };
      const ids=map[appId];if(!ids)return;
      const items=ids.map(id=>pack.items.find(it=>it.id===id)).filter(Boolean);if(!items.length)return;
      const row=node('div','action-row');row.style.margin='12px 0';
      items.forEach(it=>{const a=node('a','btn btn-secondary btn-sm',`${it.label} ↓`);a.href=it.url;a.download='';row.appendChild(a);});
      body.appendChild(row);
    },
    renderPipelineResources(body){
      const lab=window.WORKSHOP_DATA.pipelineLab;
      const box=node('div','pipeline-resources');box.append(node('h3','','Tu caso de trabajo'),node('p','',`${lab.recordCount} deals en USD · corte ${lab.cutoff}. Empresas con alias y sin datos de contacto.`));
      const download=node('a','btn btn-primary','Descargar caso de pipeline (.xlsx) ↓');download.href=lab.fileUrl;download.download='';box.appendChild(download);
      const details=node('details','pipeline-solution');details.appendChild(node('summary','','Comprobar mi análisis'));
      details.appendChild(node('p','','Compara después de intentar el ejercicio. Revisa el total, los días sin contacto, el top 3 y el gráfico editable.'));
      const solution=node('a','btn btn-secondary','Descargar solución con fórmulas y gráfico (.xlsx) ↓');solution.href=lab.solutionUrl;solution.download='';details.appendChild(solution);box.appendChild(details);body.appendChild(box);
    },
    renderWorkflow(slide,body){
      const flow=[['Skills + NotebookLM','Instrucciones /skill y fuentes verificadas','s42'],['Docs + Canvas + Gmail','Propuesta y conversación','sWorkspaceLab'],['Sheets','Pipeline, riesgo y siguiente paso','sWorkspaceLab'],['Calendar + Meet','Reunión y acuerdos confirmados','sWorkspaceLab'],['Imagen + Slides + Vids','Campaña y pieza audiovisual','sCreative'],['Deep Research / Treg','Nuevas cuentas con evidencia','sDeepResearch']];
      const list=node('ol','founder-flow');flow.forEach(([title,desc,target],i)=>{const li=node('li');const b=node('button');b.type='button';b.innerHTML=`<span class="flow-position">${i+1}</span><span><strong>${escape(title)}</strong><small>${escape(desc)}</small></span><span aria-hidden="true">→</span>`;b.addEventListener('click',()=>window.APP.goToId(target));li.appendChild(b);list.appendChild(li);});body.appendChild(list);
      const note=node('div','workspace-bridge');note.innerHTML='<h3>Elige tu cuello de botella.</h3><p>En la práctica ejecuta una transición real: correo a propuesta en Canvas/Docs, datos a pipeline en Sheets o disponibilidad a próximo paso. El resto queda como playbook para repetir después.</p><p class="helper-text">Gemini Apps usa aplicaciones conectadas (@Gmail, @Google Calendar, @Google Drive); los paneles de Gemini viven dentro de cada app de Workspace; Workspace Studio y Acciones Programadas automatizan rutinas sin código.</p>';body.appendChild(note);
    },
    renderCreative(slide,body){
      const defaults={goal:'Iniciar una conversación comercial',subject:'',style:'Fotografía editorial con luz natural',format:'4:5 vertical',message:'Conoce las opciones para tu negocio'};
      const state={...defaults,...window.APP.STATE.creativeBrief};let mode='image';
      const shell=node('div','creative-studio');const form=node('form','creative-brief');form.addEventListener('submit',e=>e.preventDefault());
      const fields=[['goal','Objetivo comercial','input'],['subject','Producto o escena','textarea'],['style','Dirección visual','input'],['format','Formato solicitado','select'],['message','Mensaje o CTA para la edición','input']];
      let output;const update=()=>output?.setText(this.buildCreativePrompt(mode,state,window.APP.getEffectiveBiz()));
      fields.forEach(([key,label,tag])=>{const field=node('label','field');field.appendChild(node('span','',label));const input=document.createElement(tag);input.id=`creative-${key}`;
        if(tag==='select')for(const value of ['4:5 vertical','9:16 vertical','16:9 horizontal','1:1 cuadrado']){const option=node('option','',value);option.value=value;input.appendChild(option);}
        else {input.maxLength=1500;if(tag==='textarea')input.rows=3;else input.type='text';}
        input.value=state[key];if(key==='subject')input.placeholder='Ej. Mi producto en el escritorio de un cliente';
        input.addEventListener('input',()=>{state[key]=input.value;window.APP.STATE.creativeBrief={...state};window.APP.saveState();update();});field.appendChild(input);form.appendChild(field);
      });
      const preview=node('div','creative-output');output=promptBox('Prompt de generación · copia a la herramienta elegida',this.buildCreativePrompt(mode,state,window.APP.getEffectiveBiz()),false);
      output.box.id='creative-panel-content';output.box.setAttribute('role','tabpanel');output.box.setAttribute('aria-labelledby','creative-panel-image');
      const control=tabs([{id:'image',label:'Imagen'},{id:'video',label:'Clip con audio'}],item=>{mode=item.id;output.box.setAttribute('aria-labelledby',`creative-panel-${mode}`);update();},'creative-panel');
      const actions=node('div','action-row');actions.append(link('Abrir Gemini ↗','https://gemini.google.com/app'),link('Abrir Slides ↗','https://slides.google.com/'),link('Abrir Vids ↗','https://vids.google.com/'));
      const pack=window.WORKSHOP_DATA.cafeAssetKit;
      const refRow=node('div','action-row');
      if(pack){
        ['foto-bolsa','foto-barra','guia-marca'].map(id=>pack.items.find(it=>it.id===id)).filter(Boolean).forEach(it=>{
          const a=node('a','btn btn-secondary btn-sm',`${it.label} ↓`);a.href=it.url;a.download='';refRow.appendChild(a);
        });
      }
      preview.append(control.list,output.box,actions,refRow,node('p','helper-text','Tu brief de dirección creativa prepara consistencia visual. Descarga las fotos de referencia y la guía de marca de Café Origen Andino para probar en Gemini, Slides o Vids.'));
      shell.append(form,preview);body.appendChild(shell);refreshers.push(update);
    },
    refreshAll(){refreshers.forEach(fn=>fn());}
  };
  window.FOUNDER=FOUNDER;
})();
