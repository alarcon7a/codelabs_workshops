(function () {
  // ---------------- CONFETTI ENGINE ----------------
  const Confetti = {
    particles: [],
    raf: null,
    burst(count = 95) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const canvas = document.getElementById("confetti-canvas");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ["#2563EB", "#6366F1", "#7C3AED", "#0D9488", "#10B981", "#E11D48", "#38BDF8"];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: canvas.width * (0.25 + Math.random() * 0.5),
          y: canvas.height * 0.48,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 1.15) * 14 - 2,
          size: 5 + Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rot: Math.random() * Math.PI * 2,
          vrot: (Math.random() - 0.5) * 0.25,
          life: 110 + Math.random() * 45
        });
      }
      if (!this.raf) {
        const tick = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          this.particles = this.particles.filter((p) => p.life > 0);
          for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.34;
            p.vx *= 0.99;
            p.rot += p.vrot;
            p.life -= 1;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = Math.min(1, p.life / 35);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
            ctx.restore();
          }
          if (this.particles.length > 0) {
            this.raf = requestAnimationFrame(tick);
          } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.raf = null;
          }
        };
        this.raf = requestAnimationFrame(tick);
      }
    }
  };
  window.CONFETTI = Confetti;

  // ---------------- HELPERS ----------------
  function escHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function slugifyKebab(str, fallback = "mi-playbook-comercial") {
    const cleaned = String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/^@+/, "")
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return cleaned || fallback;
  }

  function highlightPromptHtml(raw) {
    const safe = escHtml(raw);
    return safe
      .replace(/^---$/gm, '<span class="tok-yaml">---</span>')
      .replace(/^((?:name|description):)/gm, '<span class="tok-yaml">$1</span>')
      .replace(/\[([^\]]{1,48})\]/g, '<span class="tok-ph">[$1]</span>')
      .replace(/(^|\s)(@(?:Google Calendar|Google Drive|Google Docs|Google Sheets|Gmail|[a-zA-Z0-9_-]{2,32}))/g, '$1<span class="tok-at">$2</span>');
  }

  function countWords(raw) {
    const clean = String(raw || "").trim();
    if (!clean) return 0;
    return clean.split(/\s+/).length;
  }

  async function copyText(text, msg = "Prompt copiado al portapapeles ✓", btnEl = null) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("Fallback copy");
      }
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const copied = document.execCommand("copy");
      document.body.removeChild(ta);
      if (!copied) {
        window.APP?.toast("No se pudo copiar. Selecciona el texto y usa Copiar en tu navegador.");
        return false;
      }
    }
    if (btnEl) {
      const prev = btnEl.textContent;
      btnEl.textContent = "✓ ¡Copiado!";
      btnEl.classList.add("btn-copied");
      setTimeout(() => {
        btnEl.textContent = prev;
        btnEl.classList.remove("btn-copied");
      }, 1500);
    }
    window.APP?.toast(msg);
  }

  function downloadFile(filename, content, mimeType = "text/markdown;charset=utf-8") {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    window.APP?.toast(`Descargando ${filename} ✓`);
  }

  function playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.55);
    } catch {
      // Ignore if autoplay audio blocked
    }
  }

  function formatMMSS(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k === "text") node.textContent = v;
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of children) {
      if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  }

  function makeTerminalBox({ title, text, onCopyLabel = "Copiar prompt", showGeminiBtn = true, editable = true }) {
    let rawText = String(text || "");
    let isEditing = false;

    const box = el("div", { class: "terminal-box" });
    const head = el("div", { class: "terminal-head" });

    const titleWrap = el("div", { class: "terminal-title-wrap" }, [
      el("span", { class: "win-dots", html: "<i></i><i></i><i></i>" }),
      el("span", { text: title })
    ]);
    const wordChip = el("span", { class: "word-chip", text: `${countWords(rawText)} pal.` });
    titleWrap.appendChild(wordChip);

    const actions = el("div", { class: "terminal-actions" });
    const pre = el("pre", { class: "terminal-pre" });
    pre.innerHTML = highlightPromptHtml(rawText);

    const editor = el("textarea", { class: "terminal-editor", style: "display:none;" });
    editor.setAttribute("aria-label", `Editar ${title}`);
    editor.value = rawText;

    editor.addEventListener("input", () => {
      rawText = editor.value;
      wordChip.textContent = `${countWords(rawText)} pal.`;
    });

    if (editable) {
      const editBtn = el("button", { class: "btn btn-secondary btn-sm", type: "button", text: "Editar" });
      editBtn.addEventListener("click", () => {
        isEditing = !isEditing;
        if (isEditing) {
          editor.value = rawText;
          pre.style.display = "none";
          editor.style.display = "block";
          editBtn.textContent = "Vista previa";
          editor.focus();
        } else {
          rawText = editor.value;
          pre.innerHTML = highlightPromptHtml(rawText);
          wordChip.textContent = `${countWords(rawText)} pal.`;
          editor.style.display = "none";
          pre.style.display = "block";
          editBtn.textContent = "Editar";
        }
      });
      actions.appendChild(editBtn);
    }

    const copyBtn = el("button", { class: "btn btn-primary btn-sm", type: "button", text: onCopyLabel });
    copyBtn.addEventListener("click", () => copyText(rawText, "Prompt copiado al portapapeles ✓", copyBtn));
    actions.appendChild(copyBtn);

    if (showGeminiBtn) {
      const gemLink = el("a", {
        class: "btn btn-secondary btn-sm",
        href: window.WORKSHOP_DATA.meta.geminiUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        text: "Abrir Gemini ↗"
      });
      actions.appendChild(gemLink);
    }

    head.appendChild(titleWrap);
    head.appendChild(actions);
    box.appendChild(head);
    box.appendChild(pre);
    box.appendChild(editor);

    return {
      box,
      pre,
      setText(nextText) {
        rawText = String(nextText || "");
        pre.innerHTML = highlightPromptHtml(rawText);
        editor.value = rawText;
        wordChip.textContent = `${countWords(rawText)} pal.`;
      }
    };
  }

  // Registries
  const REFRESHERS = {};
  const TIMERS = {};
  const QUIZ_KEY_HANDLERS = {};

  function buildFullKitMarkdown() {
    if (window.LAB?.buildKit) return window.LAB.buildKit(window.APP, window.WORKSHOP_DATA);
    const biz = window.APP.getEffectiveBiz();
    return `# Kit Comercial — ${biz.name}\n`;
  }

  function buildAssistantInstructions(spec, biz) {
    if (window.LAB?.buildInstructions) return window.LAB.buildInstructions(spec, biz);
    return "";
  }

  function buildAssistantTestPrompt(spec, biz) {
    return `Usa el contexto de ${biz.name} (${biz.offer}) para resolver esta solicitud de ${biz.audience}.`;
  }

  // ---------------- WIDGET RENDERERS ----------------

  function renderDiagnosticPoll(slide, bodyEl) {
    const grid = el("div", { class: "poll-grid" });
    const feedback = el("div", { class: "callout-banner violet", style: "display:none;" });

    function draw() {
      grid.innerHTML = "";
      const selectedId = window.APP.STATE.pollChoice;
      slide.options.forEach((opt) => {
        const isSel = selectedId === opt.id;
        const card = el("button", {
          type: "button",
          class: `poll-card ${isSel ? "selected" : ""}`
        });
        card.innerHTML = `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
            <strong style="font-size:0.98rem;">${opt.icon} ${escHtml(opt.title)}</strong>
            <span style="font-family:var(--font-mono);font-size:0.8rem;font-weight:700;color:var(--primary);">${selectedId ? opt.pct + "%" : ""}</span>
          </div>
          <p style="font-size:0.86rem;color:var(--text-muted);">${escHtml(opt.desc)}</p>
          ${selectedId ? `<div class="poll-bar-wrap"><div class="poll-bar-fill" style="width:${opt.pct}%"></div></div>` : ""}
        `;
        card.addEventListener("click", () => {
          window.APP.STATE.pollChoice = opt.id;
          window.APP.saveState();
          draw();
          window.APP.toast("Diagnóstico guardado ✓");
        });
        grid.appendChild(card);
      });

      const activeOpt = slide.options.find((o) => o.id === selectedId);
      if (activeOpt) {
        feedback.style.display = "flex";
        feedback.style.justifyContent = "space-between";
        feedback.style.alignItems = "center";
        feedback.style.gap = "12px";
        feedback.style.flexWrap = "wrap";
        feedback.innerHTML = `<span><strong>Tu ruta recomendada:</strong> ${escHtml(activeOpt.tip)}</span>`;
        const jump = el("button", {
          type: "button",
          class: "btn btn-primary btn-sm",
          text: "Ir directo al ejercicio →"
        });
        jump.addEventListener("click", () => window.APP.goToId(activeOpt.targetId));
        feedback.appendChild(jump);
      } else {
        feedback.style.display = "none";
      }
    }

    draw();
    bodyEl.appendChild(grid);
    bodyEl.appendChild(feedback);
  }

  function renderBusinessProfile(slide, bodyEl) {
    const panel = el("div", { class: "panel" });
    const presetRow = el("div", { class: "preset-strip" });
    presetRow.appendChild(el("span", { style: "font-size:0.8rem;font-weight:700;color:var(--text-muted);", text: "Cargar ejemplo en 1 clic:" }));

    const form = el("form", { class: "biz-form" });
    form.innerHTML = `
      <div class="form-grid">
        <label class="field">
          <span>Nombre de tu negocio o marca *</span>
          <input type="text" id="s5-name" placeholder="Ej. Café Origen Andino" required>
        </label>
        <label class="field">
          <span>Tono de comunicación</span>
          <input type="text" id="s5-tone" placeholder="Ej. Cercano, claro y profesional (trato de 'tú')">
        </label>
        <label class="field span-2">
          <span>¿Qué vendes u ofreces? (producto o servicio principal) *</span>
          <input type="text" id="s5-offer" placeholder="Ej. Café de especialidad por suscripción y barras móviles para oficinas" required>
        </label>
        <label class="field">
          <span>¿Quién es tu cliente ideal? *</span>
          <input type="text" id="s5-audience" placeholder="Ej. Empresas de 20-150 empleados y amantes del café" required>
        </label>
        <label class="field">
          <span>Tu diferenciador clave</span>
          <input type="text" id="s5-diff" placeholder="Ej. Tueste fresco semanal y montaje en 30 minutos">
        </label>
        <label class="field span-2">
          <span>Tarea repetitiva que quieres resolver más rápido</span>
          <input type="text" id="s5-pain" placeholder="Ej. Cotizaciones rápidas y contenido semanal de redes">
        </label>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:14px;flex-wrap:wrap;">
        <span id="s5-status" style="font-size:0.84rem;color:var(--emerald);font-weight:600;"></span>
        <button type="submit" class="btn btn-aurora">Guardar ficha y personalizar →</button>
      </div>
    `;

    const previewBox = el("div", { class: "callout-banner emerald", style: "margin-top:12px;" });

    function syncInputsFromState() {
      const b = window.APP.STATE.biz;
      form.querySelector("#s5-name").value = b.name || "";
      form.querySelector("#s5-tone").value = b.tone || "";
      form.querySelector("#s5-offer").value = b.offer || "";
      form.querySelector("#s5-audience").value = b.audience || "";
      form.querySelector("#s5-diff").value = b.diff || "";
      form.querySelector("#s5-pain").value = b.painTask || "";
      const eff = window.APP.getEffectiveBiz();
      previewBox.innerHTML = "";
      previewBox.style.display = "flex";
      previewBox.style.justifyContent = "space-between";
      previewBox.style.alignItems = "center";
      previewBox.style.gap = "12px";
      previewBox.style.flexWrap = "wrap";
      const txt = el("span", {
        html: `<strong>Vista previa en vivo:</strong> Los prompts ahora usan <em>"${escHtml(eff.name)} (${escHtml(eff.offer)})"</em>. Llévalo a <strong>Ajustes → Información guardada</strong> en Gemini:`
      });
      const actWrap = el("div", { class: "action-row" });
      const copySaved = el("button", { type: "button", class: "btn btn-primary btn-sm", text: "Copiar para Información guardada" });
      copySaved.addEventListener("click", () => {
        const block = window.LAB?.buildSavedInfo ? window.LAB.buildSavedInfo(eff) : `${eff.name} · ${eff.offer}`;
        copyText(block, "Bloque de Información guardada copiado ✓", copySaved);
      });
      const openGem = el("a", {
        class: "btn btn-secondary btn-sm",
        href: window.WORKSHOP_DATA.meta.geminiUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        text: "Abrir Gemini ↗"
      });
      actWrap.append(copySaved, openGem);
      previewBox.append(txt, actWrap);
      form.querySelector("#s5-status").textContent = b.name ? "✓ Ficha activa en todo el taller" : "Completa tus datos o elige un ejemplo arriba";
    }

    window.WORKSHOP_DATA.presets.forEach((p) => {
      const chip = el("button", { type: "button", class: "preset-chip", text: p.label });
      chip.addEventListener("click", () => {
        window.APP.applyBizData({
          name: p.name,
          offer: p.offer,
          audience: p.audience,
          diff: p.diff,
          tone: p.tone,
          painTask: p.painTask
        });
        syncInputsFromState();
        Confetti.burst(45);
      });
      presetRow.appendChild(chip);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      window.APP.applyBizData({
        name: form.querySelector("#s5-name").value.trim(),
        tone: form.querySelector("#s5-tone").value.trim(),
        offer: form.querySelector("#s5-offer").value.trim(),
        audience: form.querySelector("#s5-audience").value.trim(),
        diff: form.querySelector("#s5-diff").value.trim(),
        painTask: form.querySelector("#s5-pain").value.trim()
      });
      syncInputsFromState();
      Confetti.burst(55);
    });

    panel.appendChild(presetRow);
    panel.appendChild(form);
    panel.appendChild(previewBox);
    bodyEl.appendChild(panel);
    window.LAB?.renderCafeAssetPack?.(bodyEl, { openDetails: false });
    syncInputsFromState();

    REFRESHERS[slide.id] = syncInputsFromState;
  }

  function renderTrafficLight(slide, bodyEl) {
    const grid = el("div", { class: "traffic-grid" });
    slide.lights.forEach((l) => {
      const card = el("div", { class: "traffic-card" });
      card.innerHTML = `
        <div class="sema-head">
          <span class="sema-dot ${l.color}"></span>
          <h3 style="font-size:1.02rem;">${escHtml(l.title)}</h3>
        </div>
        <ul class="clean-list">
          ${l.items.map((it) => `<li><span>•</span><span>${escHtml(it)}</span></li>`).join("")}
        </ul>
      `;
      grid.appendChild(card);
    });
    bodyEl.appendChild(grid);
    if (slide.callout) {
      bodyEl.appendChild(el("div", { class: `callout-banner ${slide.callout.color || ""}`, text: slide.callout.text }));
    }
  }

  function renderPromptDoctor(slide, bodyEl) {
    let activeScenarioIdx = 0;
    let activeKey = "all";

    const tabs = el("div", { class: "tab-strip" });
    const anatomyRow = el("div", { class: "anatomy-pills" });
    const split = el("div", { class: "split-grid" });

    function draw() {
      const sc = slide.scenarios[activeScenarioIdx];
      tabs.innerHTML = "";
      slide.scenarios.forEach((s, idx) => {
        const btn = el("button", {
          type: "button",
          class: `tab-btn ${idx === activeScenarioIdx ? "active" : ""}`,
          text: s.label
        });
        btn.addEventListener("click", () => {
          activeScenarioIdx = idx;
          activeKey = "all";
          draw();
        });
        tabs.appendChild(btn);
      });

      anatomyRow.innerHTML = "";
      const allBtn = el("button", {
        type: "button",
        class: `anatomy-pill ${activeKey === "all" ? "active" : ""}`,
        text: "Ver todas las piezas"
      });
      allBtn.addEventListener("click", () => { activeKey = "all"; draw(); });
      anatomyRow.appendChild(allBtn);

      sc.segments.forEach((seg) => {
        const pill = el("button", {
          type: "button",
          class: `anatomy-pill ${activeKey === seg.key ? "active" : ""}`,
          "data-color": seg.color,
          text: seg.label
        });
        pill.addEventListener("click", () => {
          activeKey = activeKey === seg.key ? "all" : seg.key;
          draw();
        });
        anatomyRow.appendChild(pill);
      });

      split.innerHTML = "";
      const leftCard = el("div", { class: "split-card accent-bad" });
      leftCard.innerHTML = `
        <h3 style="font-size:1rem;">🔴 Prompt Vago (1 línea)</h3>
        <div class="prompt-snippet">${escHtml(sc.badPrompt)}</div>
        <h4 style="font-size:0.86rem;color:var(--coral);margin-top:4px;">Resultado genérico de Gemini:</h4>
        <p style="font-size:0.86rem;color:var(--text-muted);background:var(--coral-soft);padding:12px;border-radius:10px;">${escHtml(sc.badResult)}</p>
      `;

      const rightCard = el("div", { class: "split-card accent-good" });
      const headRight = el("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;" });
      headRight.appendChild(el("h3", { style: "font-size:1rem;", text: "🟢 Prompt R-C-T-F (+ Límites)" }));

      const fullPromptText = sc.segments.map((sg) => window.APP.interpolateStr(sg.text)).join("");
      const cpBtn = el("button", { type: "button", class: "btn btn-primary btn-sm", text: "📋 Copiar este prompt" });
      cpBtn.addEventListener("click", () => copyText(fullPromptText, "Prompt R-C-T-F copiado ✓", cpBtn));
      headRight.appendChild(cpBtn);

      const segBox = el("div", { class: "terminal-box", style: "padding:13px 15px;font-family:var(--font-mono);font-size:0.79rem;line-height:1.62;" });
      sc.segments.forEach((sg) => {
        let cls = "prompt-seg";
        if (activeKey === "all") {
          cls += ` tint-${sg.color}`;
        } else if (activeKey === sg.key) {
          cls += ` hl-${sg.color}`;
        } else {
          cls += " dim";
        }
        const span = el("span", {
          class: cls,
          text: window.APP.interpolateStr(sg.text)
        });
        segBox.appendChild(span);
      });

      const goodOut = el("div", {
        style: "font-size:0.84rem;background:#ECFDF5;border:1px solid #6EE7B7;color:#065F46;padding:12px;border-radius:10px;white-space:pre-line;",
        text: window.APP.interpolateStr(sc.goodResult)
      });

      rightCard.appendChild(headRight);
      rightCard.appendChild(segBox);
      rightCard.appendChild(el("h4", { style: "font-size:0.86rem;color:var(--emerald);margin-top:4px;", text: "Resultado accionable listo para usar:" }));
      rightCard.appendChild(goodOut);

      split.appendChild(leftCard);
      split.appendChild(rightCard);
    }

    draw();
    bodyEl.appendChild(tabs);
    bodyEl.appendChild(anatomyRow);
    bodyEl.appendChild(split);
    REFRESHERS[slide.id] = draw;
  }

  function renderFlipCards(slide, bodyEl) {
    let allFlipped = false;
    const toolbar = el("div", { class: "flip-toolbar" });
    const flipAllBtn = el("button", { type: "button", class: "btn btn-secondary btn-sm", text: "↻ Girar todas las tarjetas" });
    toolbar.appendChild(flipAllBtn);

    const grid = el("div", { class: "flip-grid" });
    const cardNodes = [];

    slide.cards.forEach((c) => {
      const card = el("div", { class: "flip-card", role: "button", tabindex: "0" });
      card.innerHTML = `
        <div class="flip-inner">
          <div class="flip-face flip-front">
            <div>
              <div style="font-size:1.7rem;margin-bottom:8px;">${c.emoji}</div>
              <h3 style="font-size:1rem;margin-bottom:8px;">${escHtml(c.frontTitle)}</h3>
              <p style="font-size:0.86rem;color:var(--text-muted);">${escHtml(c.frontDesc)}</p>
            </div>
            <span class="flip-hint">↻ Clic para ver frase clave</span>
          </div>
          <div class="flip-face flip-back">
            <div>
              <h3 style="font-size:0.98rem;color:#93C5FD;margin-bottom:8px;">${escHtml(c.backTitle)}</h3>
              <p style="font-size:0.84rem;color:#E2E8F0;line-height:1.48;">${escHtml(c.backDesc)}</p>
            </div>
            <div class="flip-back-foot">
              <span class="flip-hint">↺ Volver</span>
              <button type="button" class="btn btn-primary btn-sm flip-copy-btn">📋 Copiar</button>
            </div>
          </div>
        </div>
      `;

      const copyBtn = card.querySelector(".flip-copy-btn");
      copyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        copyText(c.backDesc, "Frase clave copiada ✓", copyBtn);
      });

      const toggleCard = () => card.classList.toggle("flipped");
      card.addEventListener("click", toggleCard);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard();
        }
      });

      cardNodes.push(card);
      grid.appendChild(card);
    });

    flipAllBtn.addEventListener("click", () => {
      allFlipped = !allFlipped;
      cardNodes.forEach((n) => n.classList.toggle("flipped", allFlipped));
      flipAllBtn.textContent = allFlipped ? "↺ Mostrar frentes" : "↻ Girar todas las tarjetas";
    });

    bodyEl.appendChild(toolbar);
    bodyEl.appendChild(grid);
  }

  function renderPromptBuilder(slide, bodyEl) {
    const grid = el("div", { class: "builder-grid" });
    const left = el("div", { class: "panel", style: "display:flex;flex-direction:column;gap:12px;" });
    const values = {};

    const topRow = el("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;" });
    topRow.appendChild(el("strong", { style: "font-size:0.94rem;", text: "1. Datos de esta solicitud" }));
    const exBtn = el("button", { type: "button", class: "btn btn-secondary btn-sm", text: "Cargar ejemplo ficticio" });
    topRow.appendChild(exBtn);
    left.appendChild(topRow);

    const inputs = {};
    slide.fields.forEach((f) => {
      const wrap = el("label", { class: "field" });
      wrap.appendChild(el("span", { text: f.label }));
      const inp = el("input", { type: "text", placeholder: f.placeholder });
      inp.addEventListener("input", () => {
        values[f.key] = inp.value;
        updateOut();
      });
      inputs[f.key] = inp;
      wrap.appendChild(inp);
      left.appendChild(wrap);
    });

    const term = makeTerminalBox({
      title: "2. Prompt personalizado (se actualiza en vivo)",
      text: "",
      onCopyLabel: "Copiar prompt"
    });

    function updateOut() {
      const biz = window.APP.getEffectiveBiz();
      term.setText(window.LAB.buildProposal(values, biz));
    }

    exBtn.addEventListener("click", () => {
      Object.entries(slide.exampleValues || {}).forEach(([k, v]) => {
        values[k] = v;
        if (inputs[k]) inputs[k].value = v;
      });
      updateOut();
      window.APP.toast("Caso de ejemplo cargado ✓");
    });

    updateOut();
    grid.appendChild(left);
    grid.appendChild(term.box);
    bodyEl.appendChild(grid);
    REFRESHERS[slide.id] = updateOut;
  }

  function renderReto(slide, bodyEl) {
    const shell = el("div", { class: "reto-shell" });
    const left = el("div", { style: "display:flex;flex-direction:column;gap:13px;" });

    // Countdown Timer with SVG Ring
    const totalDefault = slide.durationSec || 180;
    let totalMax = totalDefault;
    let remaining = totalDefault;
    const radius = 16;
    const circumference = 2 * Math.PI * radius;

    const timerBox = el("div", { class: "timer-box" });
    const svgNS = "http://www.w3.org/2000/svg";
    const ringSvg = document.createElementNS(svgNS, "svg");
    ringSvg.setAttribute("class", "timer-ring");
    ringSvg.setAttribute("viewBox", "0 0 40 40");

    const bgCircle = document.createElementNS(svgNS, "circle");
    bgCircle.setAttribute("class", "timer-ring-bg");
    bgCircle.setAttribute("cx", "20");
    bgCircle.setAttribute("cy", "20");
    bgCircle.setAttribute("r", String(radius));

    const fgCircle = document.createElementNS(svgNS, "circle");
    fgCircle.setAttribute("class", "timer-ring-fg");
    fgCircle.setAttribute("cx", "20");
    fgCircle.setAttribute("cy", "20");
    fgCircle.setAttribute("r", String(radius));
    fgCircle.setAttribute("stroke-dasharray", String(circumference));
    fgCircle.setAttribute("stroke-dashoffset", "0");

    ringSvg.appendChild(bgCircle);
    ringSvg.appendChild(fgCircle);

    const digits = el("span", { class: "timer-digits", text: formatMMSS(remaining) });
    const readout = el("div", { class: "timer-readout" }, [ringSvg, digits]);

    const controls = el("div", { style: "display:flex;gap:6px;flex-wrap:wrap;" });
    const btnStart = el("button", { type: "button", class: "btn btn-emerald btn-sm", text: "▶ Iniciar" });
    const btnReset = el("button", { type: "button", class: "btn btn-secondary btn-sm", text: "↺ Reiniciar" });
    const btnAddMin = el("button", { type: "button", class: "btn btn-secondary btn-sm", text: "+1 min" });

    function paintTimer() {
      digits.textContent = formatMMSS(remaining);
      const isUrgent = remaining > 0 && remaining <= 30;
      digits.classList.toggle("urgent", isUrgent);
      timerBox.classList.toggle("urgent", isUrgent);
      const ratio = totalMax > 0 ? remaining / totalMax : 0;
      fgCircle.style.strokeDashoffset = String(circumference * (1 - ratio));
    }

    function stopTimer() {
      if (TIMERS[slide.id]) {
        clearInterval(TIMERS[slide.id]);
        TIMERS[slide.id] = null;
      }
      timerBox.classList.remove("running");
      btnStart.textContent = "▶ Iniciar";
    }

    btnStart.addEventListener("click", () => {
      if (TIMERS[slide.id]) {
        stopTimer();
        return;
      }
      timerBox.classList.add("running");
      btnStart.textContent = "⏸ Pausar";
      TIMERS[slide.id] = setInterval(() => {
        if (remaining > 0) {
          remaining -= 1;
          paintTimer();
          if (remaining === 0) {
            stopTimer();
            playChime();
            window.APP.toast(`⏰ ¡Tiempo cumplido en ${slide.id.toUpperCase()}!`);
          }
        }
      }, 1000);
    });

    btnReset.addEventListener("click", () => {
      stopTimer();
      totalMax = totalDefault;
      remaining = totalDefault;
      paintTimer();
    });

    btnAddMin.addEventListener("click", () => {
      remaining += 60;
      totalMax = Math.max(totalMax, remaining);
      paintTimer();
    });

    controls.appendChild(btnStart);
    controls.appendChild(btnReset);
    controls.appendChild(btnAddMin);
    timerBox.appendChild(readout);
    timerBox.appendChild(controls);
    left.appendChild(timerBox);

    // Instructions
    const instPanel = el("div", { class: "panel", style: "display:flex;flex-direction:column;gap:9px;" });
    instPanel.appendChild(el("h3", { style: "font-size:0.98rem;", text: "Paso a paso del reto" }));
    const ol = el("ol", { style: "margin:0;padding-left:20px;display:flex;flex-direction:column;gap:6px;font-size:0.88rem;color:var(--text-muted);" });
    slide.instructions.forEach((step) => ol.appendChild(el("li", { text: step })));
    instPanel.appendChild(ol);
    left.appendChild(instPanel);

    // Checklist with progress pill
    const checkPanel = el("div", { class: "panel", style: "display:flex;flex-direction:column;gap:10px;" });
    const checkHead = el("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:8px;" });
    checkHead.appendChild(el("h3", { style: "font-size:0.98rem;", text: "Criterios de logro" }));
    const progressPill = el("span", { class: "badge-pill subtle", text: `0 / ${slide.checklist.length}` });
    checkHead.appendChild(progressPill);
    checkPanel.appendChild(checkHead);

    const checklist = el("div", { class: "checklist" });

    if (!window.APP.STATE.challengesDone[slide.id]) {
      window.APP.STATE.challengesDone[slide.id] = { checks: {}, completed: false };
    }

    function drawChecklist() {
      checklist.innerHTML = "";
      const st = window.APP.STATE.challengesDone[slide.id];
      const doneCount = slide.checklist.filter((_, i) => !!st.checks[i]).length;
      progressPill.textContent = doneCount === slide.checklist.length ? "✓ ¡Reto superado!" : `${doneCount} / ${slide.checklist.length}`;
      progressPill.className = `badge-pill ${doneCount === slide.checklist.length ? "ok" : "subtle"}`;

      slide.checklist.forEach((lbl, idx) => {
        const checked = !!st.checks[idx];
        const row = el("label", { class: `check-row ${checked ? "done" : ""}` });
        const cb = el("input", { type: "checkbox" });
        cb.checked = checked;
        cb.addEventListener("change", () => {
          st.checks[idx] = cb.checked;
          const allDone = slide.checklist.every((_, i) => !!st.checks[i]);
          const wasDone = st.completed;
          st.completed = allDone;
          window.APP.saveState();
          window.APP.updateScoreBadge();
          window.APP.refreshCompletionUI?.();
          drawChecklist();
          if (allDone && !wasDone) {
            Confetti.burst(80);
            window.APP.toast("Revisión guardada. Puedes descargar el resultado desde Mi kit.");
          }
        });
        row.appendChild(cb);
        row.appendChild(el("span", { text: lbl }));
        checklist.appendChild(row);
      });
    }
    drawChecklist();
    checkPanel.appendChild(checklist);
    left.appendChild(checkPanel);

    // Right side
    const right = el("div", { style: "display:flex;flex-direction:column;gap:10px;" });
    let activeTab = 0;

    function drawRight() {
      right.innerHTML = "";
      if (slide.tabs && slide.tabs.length) {
        const tabStrip = el("div", { class: "tab-strip" });
        slide.tabs.forEach((t, i) => {
          const b = el("button", {
            type: "button",
            class: `tab-btn ${i === activeTab ? "active" : ""}`,
            text: t.label
          });
          b.addEventListener("click", () => { activeTab = i; drawRight(); });
          tabStrip.appendChild(b);
        });
        right.appendChild(tabStrip);
        const curTab = slide.tabs[activeTab];
        right.appendChild(el("p", { style: "font-size:0.84rem;color:var(--text-muted);", text: curTab.desc }));
        const { box } = makeTerminalBox({
          title: curTab.label,
          text: window.APP.interpolateStr(curTab.prompt)
        });
        right.appendChild(box);
      } else {
        const { box } = makeTerminalBox({
          title: "Prompt listo para tu negocio",
          text: window.APP.interpolateStr(slide.promptTemplate)
        });
        right.appendChild(box);
      }
    }

    drawRight();
    shell.appendChild(left);
    shell.appendChild(right);
    if (window.LAB) right.appendChild(window.LAB.createWorksheet(slide));
    bodyEl.appendChild(shell);
    REFRESHERS[slide.id] = () => {
      drawRight();
      if (window.LAB) right.appendChild(window.LAB.createWorksheet(slide));
    };
  }

  function renderQuiz(slide, bodyEl) {
    let qIdx = 0;
    const card = el("div", { class: "quiz-card" });

    if (!window.APP.STATE.quizzes[slide.id]) {
      window.APP.STATE.quizzes[slide.id] = { answers: {}, score: 0, completed: false };
    }

    function chooseOption(i) {
      const state = window.APP.STATE.quizzes[slide.id];
      const total = slide.questions.length;
      if (qIdx >= total || typeof state.answers[qIdx] === "number") return;
      const q = slide.questions[qIdx];
      state.answers[qIdx] = i;
      state.score = slide.questions.reduce(
        (acc, qq, idx) => acc + (state.answers[idx] === qq.correct ? 1 : 0),
        0
      );
      if (Object.keys(state.answers).length === total) {
        state.completed = true;
      }
      window.APP.saveState();
      window.APP.updateScoreBadge();
      window.APP.refreshCompletionUI?.();
      if (i === q.correct) Confetti.burst(35);
      draw();
    }

    function draw() {
      card.innerHTML = "";
      const state = window.APP.STATE.quizzes[slide.id];
      const total = slide.questions.length;
      const correctCount = slide.questions.reduce(
        (acc, q, i) => acc + (state.answers[i] === q.correct ? 1 : 0),
        0
      );

      if (qIdx >= total) {
        state.score = correctCount;
        const wasCompleted = state.completed;
        state.completed = true;
        window.APP.saveState();
        window.APP.updateScoreBadge();
        window.APP.refreshCompletionUI?.();
        if (!wasCompleted) Confetti.burst(90);

        card.innerHTML = `
          <div style="text-align:center;padding:18px 8px;display:flex;flex-direction:column;gap:12px;align-items:center;">
            <div style="font-size:2.4rem;">${correctCount === total ? "🏆" : "👏"}</div>
            <h3 style="font-size:1.45rem;">Resultado: ${correctCount} / ${total} respuestas correctas</h3>
            <p style="color:var(--text-muted);max-width:50ch;">${
              correctCount === total
                ? "¡Dominio perfecto de este bloque! Ya sumaste el puntaje máximo."
                : "Buen avance. Puedes repasar las preguntas o avanzar al siguiente bloque."
            }</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:6px;">
              <button type="button" class="btn btn-secondary" id="q-retry">↺ Repasar preguntas</button>
              <button type="button" class="btn btn-primary" id="q-next-slide">Continuar taller →</button>
            </div>
          </div>
        `;
        card.querySelector("#q-retry").addEventListener("click", () => {
          qIdx = 0;
          draw();
        });
        card.querySelector("#q-next-slide").addEventListener("click", () => window.APP.next());
        return;
      }

      const q = slide.questions[qIdx];
      const chosen = state.answers[qIdx];
      const hasAnswered = typeof chosen === "number";

      const stepper = el("div", { class: "quiz-stepper" });
      slide.questions.forEach((qq, i) => {
        const ans = state.answers[i];
        let sCls = "q-step-pill";
        if (i === qIdx) sCls += " current";
        else if (typeof ans === "number") sCls += ans === qq.correct ? " ok" : " bad";
        const pill = el("button", { type: "button", class: sCls, text: `P${i + 1}` });
        pill.addEventListener("click", () => { qIdx = i; draw(); });
        stepper.appendChild(pill);
      });

      const top = el("div", { class: "quiz-top" }, [
        stepper,
        el("span", { class: "badge-pill subtle", text: `Aciertos: ${correctCount} / ${total} · Atajos 1-4 / Enter` })
      ]);
      card.appendChild(top);
      card.appendChild(el("div", { class: "quiz-q", text: q.q }));

      const optsGrid = el("div", { class: "quiz-opts" });
      const letters = ["A", "B", "C", "D"];

      q.opts.forEach((optText, i) => {
        let cls = "quiz-opt";
        if (hasAnswered) {
          if (i === q.correct) cls += " correct";
          else if (i === chosen) cls += " wrong";
        }
        const btn = el("button", { type: "button", class: cls });
        btn.disabled = hasAnswered;
        btn.innerHTML = `<span class="quiz-opt-letter">${letters[i]}</span><span>${escHtml(optText)}</span>`;
        btn.addEventListener("click", () => chooseOption(i));
        optsGrid.appendChild(btn);
      });
      card.appendChild(optsGrid);

      if (hasAnswered) {
        const isOk = chosen === q.correct;
        const fb = el("div", {
          class: `quiz-feedback ${isOk ? "ok" : "bad"}`,
          text: `${isOk ? "✅ ¡Correcto! " : "💡 Ojo: "}${q.explain}`
        });
        card.appendChild(fb);

        const navRow = el("div", { style: "display:flex;justify-content:flex-end;gap:8px;" });
        const nextBtn = el("button", {
          type: "button",
          class: "btn btn-primary",
          text: qIdx + 1 < total ? "Siguiente pregunta →" : "Ver resultado del quiz →"
        });
        nextBtn.addEventListener("click", () => {
          qIdx += 1;
          draw();
        });
        navRow.appendChild(nextBtn);
        card.appendChild(navRow);
      }
    }

    QUIZ_KEY_HANDLERS[slide.id] = (key) => {
      const state = window.APP.STATE.quizzes[slide.id];
      const total = slide.questions.length;
      if (qIdx >= total) {
        if (key === "Enter") {
          window.APP.next();
          return true;
        }
        return false;
      }
      const map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
      const low = key.toLowerCase();
      if (low in map && typeof state.answers[qIdx] !== "number") {
        chooseOption(map[low]);
        return true;
      }
      if (key === "Enter" && typeof state.answers[qIdx] === "number") {
        qIdx += 1;
        draw();
        return true;
      }
      return false;
    };

    draw();
    bodyEl.appendChild(card);
  }

  function renderObjectionArena(slide, bodyEl) {
    let activeObj = 0;
    let choicePicked = {};
    let promptMode = "resp";

    const shell = el("div", { class: "arena-shell" });
    const leftList = el("div", { class: "obj-list" });
    const rightPanel = el("div", { class: "panel", style: "display:flex;flex-direction:column;gap:13px;" });

    function draw() {
      leftList.innerHTML = "";
      slide.objections.forEach((o, i) => {
        const done = typeof choicePicked[o.id] === "number";
        const b = el("button", {
          type: "button",
          class: `obj-btn ${i === activeObj ? "active" : ""}`
        });
        b.innerHTML = `<span>${escHtml(o.title)}</span>${done ? '<span class="obj-done-badge">✓</span>' : ""}`;
        b.addEventListener("click", () => {
          activeObj = i;
          draw();
        });
        leftList.appendChild(b);
      });

      const cur = slide.objections[activeObj];
      rightPanel.innerHTML = "";

      const quoteClean = cur.title.replace(/^[^\w'"“]+/, "").replace(/^'|'$/g, "");
      rightPanel.appendChild(el("div", { class: "wa-bubble" }, [
        el("div", { class: "wa-meta", html: `<span>💬 Prospecto (${escHtml(window.APP.getEffectiveBiz().audience)})</span><span>Hace 2 min</span>` }),
        el("strong", { style: "font-size:0.95rem;color:#065F46;", text: quoteClean }),
        el("span", { style: "font-size:0.82rem;color:#047857;", text: cur.context })
      ]));

      rightPanel.appendChild(el("strong", { style: "font-size:0.88rem;", text: `🎯 Decisión rápida: ${cur.question}` }));
      const choicesDiv = el("div", { class: "tactic-choices" });
      const pickedIdx = choicePicked[cur.id];

      cur.choices.forEach((ch, idx) => {
        let cls = "tactic-btn";
        if (typeof pickedIdx === "number") {
          if (ch.good) cls += " good";
          else if (idx === pickedIdx) cls += " bad";
        }
        const cb = el("button", { type: "button", class: cls, text: ch.text });
        cb.addEventListener("click", () => {
          choicePicked[cur.id] = idx;
          if (ch.good) Confetti.burst(30);
          draw();
        });
        choicesDiv.appendChild(cb);
      });
      rightPanel.appendChild(choicesDiv);

      if (typeof pickedIdx === "number") {
        const chosen = cur.choices[pickedIdx];
        rightPanel.appendChild(el("div", {
          class: `quiz-feedback ${chosen.good ? "ok" : "bad"}`,
          text: chosen.feedback
        }));
      }

      const modeTabs = el("div", { class: "tab-strip" });
      const bResp = el("button", {
        type: "button",
        class: `tab-btn ${promptMode === "resp" ? "active" : ""}`,
        text: "💬 Prompt de Respuesta"
      });
      const bRole = el("button", {
        type: "button",
        class: `tab-btn ${promptMode === "roleplay" ? "active" : ""}`,
        text: "🎭 Prompt de Roleplay (Entrenar)"
      });
      bResp.addEventListener("click", () => { promptMode = "resp"; draw(); });
      bRole.addEventListener("click", () => { promptMode = "roleplay"; draw(); });
      modeTabs.appendChild(bResp);
      modeTabs.appendChild(bRole);
      rightPanel.appendChild(modeTabs);

      const rawPrompt = promptMode === "resp" ? cur.prompt : cur.roleplay;
      const { box } = makeTerminalBox({
        title: promptMode === "resp" ? "Prompt adaptado a tu negocio" : "Simulador de cliente difícil en Gemini",
        text: window.APP.interpolateStr(rawPrompt)
      });
      rightPanel.appendChild(box);
    }

    draw();
    shell.appendChild(leftList);
    shell.appendChild(rightPanel);
    bodyEl.appendChild(shell);
    REFRESHERS[slide.id] = draw;
  }

  function renderSlotGenerator(slide, bodyEl) {
    const state = {
      picks: slide.columns.map(() => 0),
      locks: slide.columns.map(() => false)
    };

    const topBar = el("div", { style: "display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;" });
    const spinBtn = el("button", { type: "button", class: "btn btn-aurora", text: "🎲 Girar ruleta de ideas" });
    topBar.appendChild(el("span", { style: "font-size:0.86rem;color:var(--text-muted);font-weight:600;", text: "Fija (🔒) o ajusta con ‹ › cualquier bloque y gira el resto." }));
    topBar.appendChild(spinBtn);

    const grid = el("div", { class: "slots-grid" });
    const promptWrap = el("div");

    function buildMarketingSlotPrompt() {
      const biz = window.APP.getEffectiveBiz();
      const obj = slide.columns[0].options[state.picks[0]];
      const fmt = slide.columns[1].options[state.picks[1]];
      const hook = slide.columns[2].options[state.picks[2]];
      const cta = slide.columns[3].options[state.picks[3]];

      return `Actúa como estratega de contenidos para ${biz.name} (vendemos ${biz.offer} a ${biz.audience}; nuestro diferenciador: ${biz.diff}).

Crea una pieza de marketing con esta combinación exacta:
- Objetivo: ${obj}
- Formato: ${fmt}
- Idea de gancho inicial: "${hook}"
- Llamado a la acción (CTA): ${cta}

Reglas de voz: Tono ${biz.tone}. Sin frases cliché de IA ("mundo actual", "revolución", "lleva al siguiente nivel"). Hazlo práctico, cercano y listo para grabar o publicar.`;
    }

    function draw(spinningCols = []) {
      grid.innerHTML = "";
      slide.columns.forEach((col, i) => {
        const locked = state.locks[i];
        const card = el("div", { class: `slot-col ${locked ? "locked" : ""} ${spinningCols.includes(i) ? "spinning" : ""}` });
        card.innerHTML = `
          <div>
            <div class="slot-label">${escHtml(col.label)}</div>
            <div class="slot-value">${escHtml(col.options[state.picks[i]])}</div>
          </div>
        `;

        const foot = el("div", { class: "slot-foot" });
        const lockBtn = el("button", {
          type: "button",
          class: "lock-btn",
          text: locked ? "🔒 Fijado" : "🔓 Fijar"
        });
        lockBtn.addEventListener("click", () => {
          state.locks[i] = !state.locks[i];
          draw();
        });

        const steppers = el("div", { class: "slot-steppers" });
        const prevOpt = el("button", { type: "button", class: "slot-step", text: "‹", title: "Opción anterior" });
        const nextOpt = el("button", { type: "button", class: "slot-step", text: "›", title: "Siguiente opción" });
        const len = col.options.length;
        prevOpt.addEventListener("click", () => {
          state.picks[i] = (state.picks[i] - 1 + len) % len;
          draw();
        });
        nextOpt.addEventListener("click", () => {
          state.picks[i] = (state.picks[i] + 1) % len;
          draw();
        });
        steppers.appendChild(prevOpt);
        steppers.appendChild(nextOpt);

        foot.appendChild(lockBtn);
        foot.appendChild(steppers);
        card.appendChild(foot);
        grid.appendChild(card);
      });

      promptWrap.innerHTML = "";
      const { box } = makeTerminalBox({
        title: "Prompt generado con tu combinación actual",
        text: buildMarketingSlotPrompt()
      });
      promptWrap.appendChild(box);
    }

    spinBtn.addEventListener("click", () => {
      const unlocked = slide.columns.map((_, i) => i).filter((i) => !state.locks[i]);
      if (!unlocked.length) {
        window.APP.toast("Desbloquea al menos una columna para girar 🔓");
        return;
      }
      let ticks = 0;
      const stopTick = { 0: 4, 1: 6, 2: 8, 3: 10 };
      const iv = setInterval(() => {
        ticks += 1;
        const stillSpinning = [];
        unlocked.forEach((i) => {
          if (ticks <= (stopTick[i] || 8)) {
            state.picks[i] = Math.floor(Math.random() * slide.columns[i].options.length);
            stillSpinning.push(i);
          }
        });
        draw(stillSpinning);
        if (stillSpinning.length === 0) {
          clearInterval(iv);
          draw([]);
        }
      }, 55);
    });

    draw();
    bodyEl.appendChild(topBar);
    bodyEl.appendChild(grid);
    bodyEl.appendChild(promptWrap);
    REFRESHERS[slide.id] = () => draw([]);
  }

  function renderSortActivity(slide, bodyEl) {
    let order = [2, 0, 4, 1, 3];
    let verified = false;
    let dragFromPos = null;

    const actions = el("div", { style: "display:flex;gap:10px;flex-wrap:wrap;justify-content:space-between;align-items:center;" });
    const list = el("div", { class: "sort-list" });
    const fb = el("div");

    function shuffleOrder() {
      verified = false;
      order = [...order].sort(() => Math.random() - 0.5);
      if (order.every((v, i) => slide.items[v].correctIndex === i)) {
        [order[0], order[1]] = [order[1], order[0]];
      }
      draw();
    }

    function movePos(from, to) {
      if (from === to || from < 0 || to < 0 || from >= order.length || to >= order.length) return;
      verified = false;
      const [moved] = order.splice(from, 1);
      order.splice(to, 0, moved);
      draw();
    }

    function draw() {
      list.innerHTML = "";
      order.forEach((itemIdx, pos) => {
        const item = slide.items[itemIdx];
        const isOk = verified && item.correctIndex === pos;
        const isBad = verified && item.correctIndex !== pos;
        const row = el("div", {
          class: `sort-item ${isOk ? "ok" : ""} ${isBad ? "bad" : ""}`,
          draggable: "true"
        });

        row.addEventListener("dragstart", (e) => {
          dragFromPos = pos;
          row.classList.add("dragging");
          e.dataTransfer.effectAllowed = "move";
        });
        row.addEventListener("dragend", () => {
          dragFromPos = null;
          row.classList.remove("dragging");
        });
        row.addEventListener("dragover", (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
        });
        row.addEventListener("drop", (e) => {
          e.preventDefault();
          if (dragFromPos !== null) movePos(dragFromPos, pos);
        });

        row.appendChild(el("span", { class: "sort-handle", text: "⋮⋮", title: "Arrastrar para reordenar" }));
        row.appendChild(el("div", { class: "sort-pos", text: String(pos + 1) }));
        row.appendChild(el("div", { style: "font-size:0.92rem;font-weight:500;", text: item.text.replace(/^\d+\)\s*/, "") }));

        const ctrls = el("div", { class: "sort-controls" });
        const up = el("button", { type: "button", class: "sort-move", text: "↑", title: "Subir" });
        up.disabled = pos === 0;
        up.addEventListener("click", () => movePos(pos, pos - 1));
        const down = el("button", { type: "button", class: "sort-move", text: "↓", title: "Bajar" });
        down.disabled = pos === order.length - 1;
        down.addEventListener("click", () => movePos(pos, pos + 1));
        ctrls.appendChild(up);
        ctrls.appendChild(down);
        row.appendChild(ctrls);
        list.appendChild(row);
      });

      fb.innerHTML = "";
      if (verified) {
        const allCorrect = order.every((itemIdx, pos) => slide.items[itemIdx].correctIndex === pos);
        fb.className = `quiz-feedback ${allCorrect ? "ok" : "bad"}`;
        fb.textContent = allCorrect
          ? "✅ ¡Orden perfecto! Primero atrapas atención en 3s, conectas con el problema real, entregas valor, muestras tu prueba y cierras con 1 solo CTA."
          : "💡 Casi listo: revisa las tarjetas en rojo. Recuerda empezar por el Gancho en 3 segundos y terminar con un único llamado a la acción.";
      } else {
        fb.className = "";
      }
    }

    const btnShuffle = el("button", { type: "button", class: "btn btn-secondary btn-sm", text: "🔀 Barajar de nuevo" });
    btnShuffle.addEventListener("click", shuffleOrder);

    const btnCheck = el("button", { type: "button", class: "btn btn-aurora", text: "✅ Comprobar orden" });
    btnCheck.addEventListener("click", () => {
      verified = true;
      const allCorrect = order.every((itemIdx, pos) => slide.items[itemIdx].correctIndex === pos);
      draw();
      if (allCorrect) {
        if (!window.APP.STATE.challengesDone[slide.id]?.completed) {
          window.APP.STATE.challengesDone[slide.id] = { checks: { 0: true }, completed: true };
          window.APP.saveState();
          window.APP.updateScoreBadge();
          window.APP.refreshCompletionUI?.();
        }
        Confetti.burst(75);
      }
    });

    actions.appendChild(btnShuffle);
    actions.appendChild(btnCheck);
    draw();
    bodyEl.appendChild(list);
    bodyEl.appendChild(actions);
    bodyEl.appendChild(fb);
  }

  function renderWorkspaceSimulator(slide, bodyEl) {
    let activeMode = "sidepanel";
    let activeApp = "gmail";

    const modeTabs = el("div", { class: "tab-strip" });
    const modeInfo = el("div", { class: "callout-banner cyan" });
    const appTabs = el("div", { class: "tab-strip" });
    const mockup = el("div", { class: "ws-mockup" });

    function draw() {
      const mObj = slide.modes.find((m) => m.id === activeMode);
      const aObj = slide.apps.find((a) => a.id === activeApp);

      modeTabs.innerHTML = "";
      slide.modes.forEach((m) => {
        const b = el("button", {
          type: "button",
          class: `tab-btn ${m.id === activeMode ? "active" : ""}`,
          text: m.label
        });
        b.addEventListener("click", () => { activeMode = m.id; draw(); });
        modeTabs.appendChild(b);
      });

      modeInfo.innerHTML = `<strong>${escHtml(mObj.badge)}:</strong> ${escHtml(mObj.desc)}`;

      appTabs.innerHTML = "";
      slide.apps.forEach((a) => {
        const b = el("button", {
          type: "button",
          class: `tab-btn ${a.id === activeApp ? "active" : ""}`,
          text: `${a.icon} ${a.name}`
        });
        b.addEventListener("click", () => { activeApp = a.id; draw(); });
        appTabs.appendChild(b);
      });

      mockup.innerHTML = "";
      const leftPreview = el("div", { class: "ws-ui-preview" });
      const canvasHtml =
        activeMode === "sidepanel"
          ? `<div class="ws-split-mini">
               <div class="ws-doc-canvas"><strong>${escHtml(aObj.docTitle)}</strong>\n\n${escHtml(aObj.docBody)}</div>
               <div class="ws-sidepanel-sim">
                 <strong>✨ Gemini en ${escHtml(aObj.name)}</strong>
                 <span>Leyendo contexto abierto...</span>
                 <span style="background:#FFFFFF;padding:5px 7px;border-radius:6px;border:1px solid #DDD6FE;">Resumen + Borrador listos</span>
               </div>
             </div>`
          : `<div class="ws-doc-canvas"><strong>${escHtml(aObj.docTitle)}</strong>\n\n${escHtml(aObj.docBody)}</div>`;

      leftPreview.innerHTML = `
        <div class="ws-ui-bar">
          <span>${aObj.icon} ${escHtml(aObj.name)}</span>
          <span class="ws-gemini-chip">${escHtml(mObj.label)}</span>
        </div>
        ${canvasHtml}
        <div style="background:#EFF6FF;border-left:3px solid var(--primary);padding:10px 12px;border-radius:8px;font-size:0.84rem;">
          <strong>Cómo hacerlo en este modo:</strong><br>
          ${escHtml(aObj.how[activeMode])}
        </div>
      `;

      if (aObj.downloadUrl) {
        const dlWrap = el("div", { style: "display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding-top:2px;" });
        dlWrap.appendChild(el("span", { style: "font-size:0.78rem;color:var(--text-muted);font-weight:600;", text: "📊 Plantilla práctica lista para importar a Google Sheets:" }));
        dlWrap.appendChild(el("a", {
          class: "btn btn-aurora btn-sm",
          href: aObj.downloadUrl,
          download: "",
          text: aObj.downloadLabel || "⬇️ Descargar plantilla (.xlsx)"
        }));
        leftPreview.appendChild(dlWrap);
      }

      const { box } = makeTerminalBox({
        title: `Prompt recomendado para ${aObj.name}`,
        text: window.APP.interpolateStr(aObj.prompt)
      });

      mockup.appendChild(leftPreview);
      mockup.appendChild(box);
    }

    draw();
    bodyEl.appendChild(modeTabs);
    bodyEl.appendChild(modeInfo);
    bodyEl.appendChild(appTabs);
    bodyEl.appendChild(mockup);
    REFRESHERS[slide.id] = draw;
  }

  function renderConnectorHub(slide, bodyEl) {
    let activeMode = slide.modes[0]?.id || "mcp";
    let activeTool = slide.tools[0]?.id || "default";

    const modeTabs = el("div", { class: "tab-strip" });
    const modeInfo = el("div", { class: "callout-banner cyan" });
    const toolGrid = el("div", { class: "connector-grid" });
    const workspace = el("div", { class: "hub-workspace" });

    function draw() {
      const mObj = slide.modes.find((m) => m.id === activeMode) || slide.modes[0];
      const tObj = slide.tools.find((t) => t.id === activeTool) || slide.tools[0];

      modeTabs.innerHTML = "";
      slide.modes.forEach((m) => {
        const b = el("button", {
          type: "button",
          class: `tab-btn ${m.id === activeMode ? "active" : ""}`,
          text: m.label
        });
        b.addEventListener("click", () => {
          activeMode = m.id;
          draw();
        });
        modeTabs.appendChild(b);
      });

      modeInfo.innerHTML = `<strong>${escHtml(mObj.badge)}:</strong> ${escHtml(mObj.desc)}`;

      toolGrid.innerHTML = "";
      slide.tools.forEach((t) => {
        const c = el("button", {
          type: "button",
          class: `conn-card ${t.id === activeTool ? "active" : ""}`
        });
        c.innerHTML = `
          <div class="conn-card-top">
            <span class="conn-card-name">${t.icon} ${escHtml(t.name)}</span>
            <span class="conn-card-tag">${escHtml(t.tag)}</span>
          </div>
          <span class="conn-card-sub">${escHtml(t.sub)}</span>
        `;
        c.addEventListener("click", () => {
          activeTool = t.id;
          draw();
        });
        toolGrid.appendChild(c);
      });

      workspace.innerHTML = "";
      const leftPanel = el("div", { class: "panel", style: "display:flex;flex-direction:column;gap:12px;" });

      const head = el("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;" });
      head.appendChild(el("h3", { style: "font-size:1.05rem;", text: `${tObj.icon} ${tObj.name}` }));
      if (tObj.url) {
        head.appendChild(el("a", {
          class: "btn btn-secondary btn-sm",
          href: tObj.url,
          target: "_blank",
          rel: "noopener noreferrer",
          text: tObj.urlLabel || "Abrir sitio ↗"
        }));
      }
      leftPanel.appendChild(head);

      const pipe = el("div", { class: "arch-pipeline" });
      tObj.pipeline.forEach((step, idx) => {
        if (idx > 0) pipe.appendChild(el("span", { class: "arch-arrow", text: "→" }));
        pipe.appendChild(el("span", {
          class: "arch-node",
          text: window.APP.interpolateStr(step)
        }));
      });
      leftPanel.appendChild(pipe);

      const bullets = activeMode === "mcp" ? tObj.mcpBullets : tObj.webBullets;
      const ul = el("ul", { class: "clean-list" });
      bullets.forEach((bText) => {
        ul.innerHTML += `<li><span>✅</span><span>${escHtml(window.APP.interpolateStr(bText))}</span></li>`;
      });
      leftPanel.appendChild(ul);

      if (activeMode === "mcp" && tObj.mcpConfig) {
        const cfgBox = el("div", { class: "mcp-config-mini" });
        const cfgHead = el("div", { class: "mcp-config-head" });
        cfgHead.appendChild(el("span", { text: "~/.gemini/config/mcp_config.json" }));
        const cfgCopy = el("button", { type: "button", class: "btn btn-primary btn-sm", text: "📋 Copiar JSON" });
        cfgCopy.addEventListener("click", () => copyText(tObj.mcpConfig, "Configuración MCP copiada ✓", cfgCopy));
        cfgHead.appendChild(cfgCopy);
        cfgBox.appendChild(cfgHead);
        cfgBox.appendChild(el("pre", { class: "mcp-config-pre", text: tObj.mcpConfig }));
        leftPanel.appendChild(cfgBox);
      }

      const rawPrompt = activeMode === "mcp" ? tObj.mcpPrompt : tObj.webPrompt;
      const termTitle = activeMode === "mcp"
        ? `Prompt para Antigravity + ${tObj.name}`
        : `Prompt para Gemini Web + ${tObj.name}`;
      const { box } = makeTerminalBox({
        title: termTitle,
        text: window.APP.interpolateStr(rawPrompt),
        onCopyLabel: "Copiar prompt",
        showGeminiBtn: activeMode !== "mcp"
      });

      workspace.appendChild(leftPanel);
      workspace.appendChild(box);
    }

    draw();
    bodyEl.appendChild(modeTabs);
    bodyEl.appendChild(modeInfo);
    bodyEl.appendChild(toolGrid);
    bodyEl.appendChild(workspace);
    REFRESHERS[slide.id] = draw;
  }

  function renderComparison(slide, bodyEl) {
    let selected = slide.options?.[0]?.id || "default";
    const grid = el("div", { class: "compare-grid" });
    const detail = el("div", { class: "panel" });

    function draw() {
      const forgeId = window.APP.getSlideIdByType("assistantForge") || "s41";
      grid.innerHTML = "";
      slide.options.forEach((opt) => {
        const card = el("div", {
          class: `compare-card ${opt.id === selected ? "active" : ""}`,
          tabindex: "0",
          role: "button"
        });
        card.innerHTML = `
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:1.5rem;">${opt.icon}</span>
            <span class="badge-pill subtle">${escHtml(opt.tag)}</span>
          </div>
          <h3 style="font-size:1.08rem;">${escHtml(opt.name)}</h3>
          <p style="font-size:0.86rem;color:var(--text-muted);">${escHtml(opt.summary)}</p>
        `;
        const choose = () => {
          selected = opt.id;
          window.APP.STATE.assistantSpec.mode = opt.id;
          window.APP.saveState();
          draw();
          if (REFRESHERS[forgeId]) REFRESHERS[forgeId]();
        };
        card.addEventListener("click", choose);
        card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); } });
        grid.appendChild(card);
      });

      const cur = slide.options.find((o) => o.id === selected) || slide.options[0];
      selected = cur.id;
      detail.innerHTML = `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start;">
          <div>
            <span class="badge-pill" style="margin-bottom:8px;">Ventajas · ${escHtml(cur.name)}</span>
            <p style="font-size:0.86rem;color:var(--text-muted);margin-bottom:10px;">${escHtml(cur.when)}</p>
            <ul class="clean-list">
              ${cur.pros.map((p) => `<li><span>✅</span><span>${escHtml(p)}</span></li>`).join("")}
            </ul>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <span class="badge-pill subtle">Pasos para crearlo hoy</span>
            <ul class="clean-list">
              ${cur.howToCreate.map((s) => `<li><span>•</span><span>${escHtml(window.APP.interpolateStr(s))}</span></li>`).join("")}
            </ul>
            <button type="button" class="btn btn-aurora btn-sm" id="cmp-go-forge" style="align-self:flex-start;">Configurar como ${escHtml(cur.name)} (#${forgeId}) →</button>
          </div>
        </div>
      `;
      detail.querySelector("#cmp-go-forge").addEventListener("click", () => window.APP.goToId(forgeId));
    }

    draw();
    bodyEl.appendChild(grid);
    bodyEl.appendChild(detail);
    if (slide.callout) {
      bodyEl.appendChild(el("div", { class: `callout-banner ${slide.callout.color || ""}`, text: slide.callout.text }));
    }
    REFRESHERS[slide.id] = draw;
  }

  function renderAutomationStudio(slide, bodyEl) {
    let activeEngine = slide.engines?.[0]?.id || "scheduled";
    let activeRecipe = slide.recipes?.[0]?.id || "briefing";

    const engineTabs = el("div", { class: "tab-strip" });
    const engineInfo = el("div", { class: "callout-banner cyan" });
    const recipeGrid = el("div", { class: "auto-recipes-grid" });
    const workspace = el("div", { class: "hub-workspace" });

    function draw() {
      const engObj = slide.engines.find((e) => e.id === activeEngine) || slide.engines[0];
      const recObj = slide.recipes.find((r) => r.id === activeRecipe) || slide.recipes[0];

      engineTabs.innerHTML = "";
      slide.engines.forEach((e) => {
        const b = el("button", {
          type: "button",
          class: `tab-btn ${e.id === activeEngine ? "active" : ""}`,
          text: e.label
        });
        b.addEventListener("click", () => {
          activeEngine = e.id;
          draw();
        });
        engineTabs.appendChild(b);
      });

      engineInfo.innerHTML = `<strong>${escHtml(engObj.badge)}:</strong> ${escHtml(engObj.desc)}`;

      recipeGrid.innerHTML = "";
      slide.recipes.forEach((r) => {
        const card = el("button", {
          type: "button",
          class: `auto-recipe-card ${r.id === activeRecipe ? "active" : ""}`
        });
        card.innerHTML = `
          <div class="conn-card-top">
            <span class="conn-card-name">${r.icon} ${escHtml(r.title)}</span>
            <span class="conn-card-tag">${escHtml(r.tag)}</span>
          </div>
          <span class="conn-card-sub">${escHtml(r.summary)}</span>
        `;
        card.addEventListener("click", () => {
          activeRecipe = r.id;
          draw();
        });
        recipeGrid.appendChild(card);
      });

      workspace.innerHTML = "";
      const leftPanel = el("div", { class: "panel", style: "display:flex;flex-direction:column;gap:12px;" });
      leftPanel.appendChild(el("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;" }, [
        el("h3", { style: "font-size:1.02rem;", text: `${recObj.icon} ${recObj.title}` }),
        el("span", { class: "badge-pill", text: recObj.cadence })
      ]));

      const flowTrack = el("div", { class: "auto-flow-track" });
      recObj.flow.forEach((node, idx) => {
        if (idx > 0) flowTrack.appendChild(el("span", { class: "arch-arrow", text: "→" }));
        flowTrack.appendChild(el("span", { class: "auto-flow-node", text: window.APP.interpolateStr(node) }));
      });
      leftPanel.appendChild(flowTrack);

      const stepsTitle = el("strong", { style: "font-size:0.84rem;color:var(--text-main);", text: `Cómo activarla en ${engObj.label}:` });
      leftPanel.appendChild(stepsTitle);

      const stepList = el("ul", { class: "clean-list" });
      const stepsForEngine = recObj.steps[activeEngine] || [];
      stepsForEngine.forEach((st) => {
        stepList.innerHTML += `<li><span>✅</span><span>${escHtml(window.APP.interpolateStr(st))}</span></li>`;
      });
      leftPanel.appendChild(stepList);

      const isDone = !!window.APP.STATE.challengesDone[slide.id]?.completed;
      const doneRow = el("div", { style: "display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;padding-top:6px;border-top:1px solid var(--border);" });
      const markBtn = el("button", {
        type: "button",
        class: `btn ${isDone ? "btn-emerald" : "btn-aurora"} btn-sm`,
        text: isDone ? "✅ Automatización elegida (+150 pts)" : "✅ Elegir y guardar rutina (+150 pts)"
      });
      markBtn.addEventListener("click", () => {
        window.APP.STATE.challengesDone[slide.id] = { checks: { 0: true }, completed: true };
        window.APP.STATE.assistantSpec.automationRule = `${engObj.label}: ${recObj.title} (${recObj.cadence})`;
        window.APP.saveState();
        window.APP.updateScoreBadge();
        window.APP.refreshCompletionUI?.();
        const forgeId = window.APP.getSlideIdByType("assistantForge") || "s42";
        if (REFRESHERS[forgeId]) REFRESHERS[forgeId]();
        Confetti.burst(75);
        draw();
        window.APP.toast(`Rutina '${recObj.title}' vinculada a tu Playbook ✓`);
      });

      const forgeId = window.APP.getSlideIdByType("assistantLab") || "s42";
      const goForgeBtn = el("button", {
        type: "button",
        class: "btn btn-secondary btn-sm",
        text: `Ir a Mi Playbook (#${forgeId}) →`
      });
      goForgeBtn.addEventListener("click", () => window.APP.goToId(forgeId));

      doneRow.appendChild(markBtn);
      doneRow.appendChild(goForgeBtn);
      leftPanel.appendChild(doneRow);

      const rawPrompt = recObj.prompts[activeEngine] || "";
      const { box } = makeTerminalBox({
        title: `Instrucción automatizada · ${recObj.title}`,
        text: window.APP.interpolateStr(rawPrompt),
        onCopyLabel: "📋 Copiar automatización",
        showGeminiBtn: activeEngine !== "agentic"
      });

      workspace.appendChild(leftPanel);
      workspace.appendChild(box);
    }

    draw();
    bodyEl.appendChild(engineTabs);
    bodyEl.appendChild(engineInfo);
    bodyEl.appendChild(recipeGrid);
    bodyEl.appendChild(workspace);
    REFRESHERS[slide.id] = draw;
  }

  function renderAssistantForge(slide, bodyEl) {
    if (window.LAB?.renderAssistant) {
      window.LAB.renderAssistant(slide, bodyEl);
    }
  }

  function renderSummaryDashboard(slide, bodyEl) {
    if (window.LAB?.renderPortfolio) {
      window.LAB.renderPortfolio(slide, bodyEl);
    }
  }

  window.ACTIVITIES = {
    makeTerminalBox,
    renderDiagnosticPoll,
    renderBusinessProfile,
    renderTrafficLight,
    renderPromptDoctor,
    renderFlipCards,
    renderPromptBuilder,
    renderReto,
    renderQuiz,
    renderObjectionArena,
    renderSlotGenerator,
    renderSortActivity,
    renderWorkspaceSimulator,
    renderConnectorHub,
    renderComparison,
    renderAutomationStudio,
    renderAssistantForge,
    renderSummaryDashboard,
    buildAssistantInstructions,
    buildFullKitMarkdown,
    copyText,
    downloadFile,
    handleQuizKey(slideId, key) {
      if (QUIZ_KEY_HANDLERS[slideId]) return QUIZ_KEY_HANDLERS[slideId](key);
      return false;
    },
    refreshSlide(id) {
      if (REFRESHERS[id]) REFRESHERS[id]();
    },
    refreshAll() {
      Object.values(REFRESHERS).forEach((fn) => fn());
    }
  };
})();
