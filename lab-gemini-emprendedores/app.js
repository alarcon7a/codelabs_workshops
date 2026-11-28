(function () {
  const STORAGE_KEY = "gemini_emprendedores_v1";

  const DEFAULT_STATE = {
    biz: {
      name: "",
      offer: "",
      audience: "",
      diff: "",
      tone: "Cercano, claro y profesional (trato de 'tú')",
      painTask: ""
    },
    pollChoice: null,
    quizzes: {},
    challengesDone: {},
    drafts: {},
    assistantLab: {},
    activeSkillId: "custom",
    skillDrafts: {},
    creativeBrief: {},
    metrics: {},
    assistantSpec: {
      taskType: "ventas",
      assistantName: "cotizador-comercial",
      role: "",
      rules: "",
      outputFormat: "",
      driveDocs: "",
      automationRule: "",
      triggerStep: "",
      reviewStep: ""
    }
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
      const parsed = JSON.parse(raw);
      const spec = { ...DEFAULT_STATE.assistantSpec, ...(parsed.assistantSpec || {}) };
      const savedDrafts = parsed.skillDrafts && typeof parsed.skillDrafts === "object"
        ? parsed.skillDrafts
        : (parsed.playbookDrafts && typeof parsed.playbookDrafts === "object" ? parsed.playbookDrafts : {});
      return {
        biz: { ...DEFAULT_STATE.biz, ...(parsed.biz || {}) },
        pollChoice: parsed.pollChoice ?? null,
        quizzes: parsed.quizzes || {},
        challengesDone: parsed.challengesDone || {},
        drafts: parsed.drafts && typeof parsed.drafts === "object" ? parsed.drafts : {},
        assistantLab: parsed.assistantLab && typeof parsed.assistantLab === "object" ? parsed.assistantLab : {},
        activeSkillId: typeof parsed.activeSkillId === "string" ? parsed.activeSkillId : "custom",
        skillDrafts: savedDrafts,
        creativeBrief: parsed.creativeBrief && typeof parsed.creativeBrief === "object" ? parsed.creativeBrief : {},
        metrics: parsed.metrics && typeof parsed.metrics === "object" ? parsed.metrics : {},
        assistantSpec: spec
      };
    } catch {
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }

  function escHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const APP = {
    STATE: loadState(),
    flat: [],
    vaultItems: [],
    idx: 0,
    lastScore: 0,
    menuFilter: "all",
    menuSearch: "",
    toastTimer: null,
    wheelLockUntil: 0,
    programmaticScrollUntil: 0,
    ignoreHashOnce: false,

    saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.STATE));
        return true;
      } catch {
        this.toast("No se pudo guardar en este navegador. Descarga tu kit antes de cerrar.");
        return false;
      }
    },

    getEffectiveBiz() {
      const b = this.STATE.biz;
      return {
        name: b.name || "[Tu Negocio]",
        offer: b.offer || "[tu producto o servicio principal]",
        audience: b.audience || "[tu cliente ideal]",
        diff: b.diff || "[tu diferenciador clave]",
        tone: b.tone || "Cercano, claro y profesional",
        pain: b.painTask || "[tu tarea repetitiva principal]"
      };
    },

    interpolateStr(str) {
      if (!str) return "";
      const biz = this.getEffectiveBiz();
      return String(str)
        .replace(/\{\{negocio\}\}/g, biz.name)
        .replace(/\{\{oferta\}\}/g, biz.offer)
        .replace(/\{\{cliente\}\}/g, biz.audience)
        .replace(/\{\{diferenciador\}\}/g, biz.diff)
        .replace(/\{\{tono\}\}/g, biz.tone)
        .replace(/\{\{tarea\}\}/g, biz.pain);
    },

    getSlideIdByType(type) {
      return this.flat.find((s) => s.type === type)?.id || null;
    },

    isSlideCompleted(slide) {
      if (!slide) return false;
      if (slide.id === "s5") return !!this.STATE.biz.name;
      if (slide.type === "quiz") return !!this.STATE.quizzes[slide.id]?.completed;
      return !!this.STATE.challengesDone[slide.id]?.completed;
    },

    calculateScore() {
      let total = 0;
      if (this.STATE.biz.name) total += 50;
      for (const q of Object.values(this.STATE.quizzes)) {
        total += (q.score || 0) * 25;
      }
      for (const [id, st] of Object.entries(this.STATE.challengesDone)) {
        if (st && st.completed) {
          const sl = this.flat.find((s) => s.id === id);
          const pts = sl?.type === "assistantForge" ? 250 : sl?.type === "sortActivity" || id === "s12" ? 100 : 150;
          total += pts;
        }
      }
      return total;
    },

    updateScoreBadge(animate = true) {
      const nextScore = this.calculateScore();
      const valEl = document.getElementById("score-val");
      const pill = document.getElementById("score-pill");
      const deltaEl = document.getElementById("score-delta");
      if (valEl) valEl.textContent = String(nextScore);

      if (animate && nextScore > this.lastScore && pill && deltaEl) {
        const diff = nextScore - this.lastScore;
        deltaEl.textContent = `+${diff} pts`;
        deltaEl.classList.remove("pop");
        pill.classList.remove("bump");
        void deltaEl.offsetWidth;
        deltaEl.classList.add("pop");
        pill.classList.add("bump");
        setTimeout(() => pill.classList.remove("bump"), 450);
      }
      this.lastScore = nextScore;
    },

    updateBizPill() {
      const btn = document.getElementById("btn-biz");
      const lbl = document.getElementById("biz-pill-label");
      const hasBiz = !!this.STATE.biz.name;
      if (btn && lbl) {
        if (hasBiz) {
          lbl.textContent = this.STATE.biz.name;
          btn.classList.add("has-biz");
        } else {
          lbl.textContent = "Mi Negocio";
          btn.classList.remove("has-biz");
        }
      }

      const coverStatus = document.getElementById("cover-biz-status");
      if (coverStatus) {
        coverStatus.innerHTML = hasBiz
          ? `<span>✓ Personalizado para: <strong>${escHtml(this.STATE.biz.name)}</strong></span><span>Editar ✎</span>`
          : `<span>Personaliza los prompts con tu negocio</span><span>Configurar →</span>`;
      }
    },

    applyBizData(data) {
      this.STATE.biz = { ...this.STATE.biz, ...data };
      this.saveState();
      this.updateBizPill();
      this.updateScoreBadge();
      this.refreshCompletionUI();
      this.refreshDynamicPrompts();
      this.toast(`Taller personalizado para ${this.getEffectiveBiz().name} ✓`);
    },

    refreshDynamicPrompts() {
      document.querySelectorAll("[data-biz-template]").forEach((node) => {
        const raw = node.getAttribute("data-biz-template");
        node.textContent = this.interpolateStr(raw);
      });
      window.ACTIVITIES?.refreshAll();
      window.LAB?.refreshAssistant?.();
      window.FOUNDER?.refreshAll();
      if (this.menuFilter === "vault") this.renderVault();
    },

    refreshCompletionUI() {
      // Update dot-rail completion indicators
      document.querySelectorAll("#dot-rail .dot").forEach((dot, i) => {
        const slide = this.flat[i];
        if (!slide) return;
        dot.classList.toggle("is-done", this.isSlideCompleted(slide));
      });

      // Update menu tags
      document.querySelectorAll(".menu-slide-btn").forEach((btn) => {
        const idx = Number(btn.dataset.idx);
        const slide = this.flat[idx];
        const tag = btn.querySelector(".menu-tag");
        if (!slide || !tag) return;
        const done = this.isSlideCompleted(slide);
        tag.classList.toggle("done", done);
        const base = tag.dataset.baseLabel || tag.textContent;
        tag.textContent = done ? `✓ ${base}` : base;
      });

      // Update overall progress inside menu
      const progressBox = document.getElementById("menu-progress");
      if (progressBox) {
        const milestones = this.flat.filter((s) => s.id === "s5" || ["quiz", "reto", "assistantLab"].includes(s.type));
        const completedCount = milestones.filter((sl) => this.isSlideCompleted(sl)).length;
        const pct = milestones.length ? Math.round((completedCount / milestones.length) * 100) : 0;
        progressBox.innerHTML = `
          <span>Avance práctico: ${completedCount}/${milestones.length} (${pct}%)</span>
          <div class="menu-progress-track"><div class="menu-progress-fill" style="width:${pct}%"></div></div>
        `;
      }
    },

    buildPromptVault() {
      const items = [];
      this.flat.forEach((slide) => {
        const blockTag = `${slide.block.code} · ${slide.block.title}`;
        if (slide.promptTemplate) {
          items.push({
            id: `${slide.id}-main`,
            slideId: slide.id,
            block: blockTag,
            title: slide.title,
            tag: slide.badge || "Reto",
            getText: () => this.interpolateStr(slide.promptTemplate)
          });
        }
        if (Array.isArray(slide.tabs)) {
          slide.tabs.forEach((t, idx) => {
            if (t.prompt) {
              items.push({
                id: `${slide.id}-tab-${idx}`,
                slideId: slide.id,
                block: blockTag,
                title: `${slide.title} · ${t.label}`,
                tag: "Prompt práctico",
                getText: () => this.interpolateStr(t.prompt)
              });
            }
          });
        }
        if (slide.type === "promptDoctor" && Array.isArray(slide.scenarios)) {
          slide.scenarios.forEach((sc) => {
            items.push({
              id: `${slide.id}-${sc.id}`,
              slideId: slide.id,
              block: blockTag,
              title: `Fórmula R-C-T-F · ${sc.label}`,
              tag: "Estructura",
              getText: () => sc.segments.map((sg) => this.interpolateStr(sg.text)).join("")
            });
          });
        }
        if (slide.type === "objectionArena" && Array.isArray(slide.objections)) {
          slide.objections.forEach((o) => {
            items.push({
              id: `${slide.id}-${o.id}`,
              slideId: slide.id,
              block: blockTag,
              title: `Objeción LAER: ${o.title}`,
              tag: "Ventas LAER",
              getText: () => `${this.interpolateStr(o.prompt)}\n\n--- ROLEPLAY EVALUADO 1–10 ---\n${this.interpolateStr(o.roleplay)}`
            });
          });
        }
        if (Array.isArray(slide.cards)) {
          slide.cards.forEach((c, idx) => {
            if (c.snippet) {
              items.push({
                id: `${slide.id}-c-${idx}`,
                slideId: slide.id,
                block: blockTag,
                title: c.title,
                tag: "Ejemplo práctico",
                getText: () => this.interpolateStr(c.snippet)
              });
            }
          });
        }
        if (slide.type === "workspaceSimulator" && Array.isArray(slide.apps)) {
          slide.apps.forEach((a) => {
            items.push({
              id: `${slide.id}-${a.id}`,
              slideId: slide.id,
              block: blockTag,
              title: `Workspace ${a.icon} ${a.name}`,
              tag: a.name,
              getText: () => this.interpolateStr(a.prompt)
            });
          });
        }
        if (slide.type === "connectorHub" && Array.isArray(slide.tools)) {
          slide.tools.forEach((t) => {
            items.push({
              id: `${slide.id}-${t.id}-web`,
              slideId: slide.id,
              block: blockTag,
              title: `${t.icon} ${t.name} (Web / Deep Research)`,
              tag: "Prospección",
              getText: () => this.interpolateStr(t.webPrompt)
            });
            items.push({
              id: `${slide.id}-${t.id}-mcp`,
              slideId: slide.id,
              block: blockTag,
              title: `${t.icon} ${t.name} (Antigravity MCP)`,
              tag: "MCP",
              getText: () => `${t.mcpConfig ? `// mcp_config.json\n${t.mcpConfig}\n\n` : ""}${this.interpolateStr(t.mcpPrompt)}`
            });
          });
        }
        if (slide.type === "automationStudio" && Array.isArray(slide.recipes)) {
          slide.recipes.forEach((r) => {
            items.push({
              id: `${slide.id}-${r.id}`,
              slideId: slide.id,
              block: blockTag,
              title: `${r.icon} ${r.title} (Acción Programada)`,
              tag: "Automatización",
              getText: () => this.interpolateStr(r.prompts.scheduled)
            });
          });
        }
        if (slide.type === "assistantLab") {
          items.push({
            id: `${slide.id}-saved-info`,
            slideId: "s5",
            block: "01 · El sistema del founder",
            title: "Bloque para Información guardada en Gemini",
            tag: "Info guardada",
            getText: () =>
              window.LAB?.buildSavedInfo
                ? window.LAB.buildSavedInfo(this.getEffectiveBiz())
                : ""
          });
          items.push({
            id: `${slide.id}-live-skill`,
            slideId: slide.id,
            block: blockTag,
            title: "Tu Skill actual (SKILL.md)",
            tag: "SKILL.md",
            getText: () => {
              const biz = this.getEffectiveBiz();
              return window.LAB?.buildInstructions
                ? window.LAB.buildInstructions(window.LAB.getSpec(), biz)
                : "";
            }
          });
        }
      });
      (window.WORKSHOP_DATA.skillTemplates || []).forEach(template => items.push({
        id: `library-${template.id}`, slideId: "s42", block: "Biblioteca de Skills", title: `/${template.name} · ${template.label}`, tag: "SKILL.md",
        getText: () => window.LAB.buildInstructions((this.STATE.skillDrafts || {})[template.id] || template, this.getEffectiveBiz())
      }));
      (window.WORKSHOP_DATA.workspaceApps || []).forEach(app => items.push({
        id: `workspace-${app.id}`, slideId: "sWorkspaceLab", block: "Workspace", title: `Gemini en ${app.label}`, tag: app.label,
        getText: () => this.interpolateStr(app.prompt)
      }));
      if (window.FOUNDER) {
        items.push({id:"prospecting-search",slideId:"sTreg",block:"Prospección",title:"Investigar cuentas y señales (Deep Research / web)",tag:"Prospección",getText:()=>window.FOUNDER.buildProspectingPrompt(this.getEffectiveBiz())});
        items.push({id:"treg-demo",slideId:"sTreg",block:"Bonus Demo",title:"Demo Treg.to en Antigravity (MCP)",tag:"Demo Bonus",getText:()=>window.FOUNDER.buildTregAntigravityPrompt(this.getEffectiveBiz())});
        ["image", "video"].forEach(mode=>items.push({id:`creative-${mode}`,slideId:"sCreativeStudio",block:"Creatividad",title:mode==="image"?"Prompt de imagen":"Prompt de clip y audio",tag:mode==="image"?"Imagen":"Video",getText:()=>window.FOUNDER.buildCreativePrompt(mode,this.STATE.creativeBrief,this.getEffectiveBiz())}));
      }
      this.vaultItems = items;
    },

    renderVault() {
      const vaultGrid = document.getElementById("vault-grid");
      if (!vaultGrid) return;
      const q = (this.menuSearch || "").trim().toLowerCase();
      const filtered = this.vaultItems.filter((it) => {
        if (!q) return true;
        const hay = `${it.block} ${it.title} ${it.tag} ${it.slideId} ${it.getText()}`.toLowerCase();
        return hay.includes(q);
      });

      vaultGrid.innerHTML = "";
      if (!filtered.length) {
        vaultGrid.innerHTML = `<div class="vault-empty">No encontramos resultados para «<strong>${escHtml(q)}</strong>». Prueba con propuesta, contenido, seguimiento o asistente.</div>`;
        return;
      }

      filtered.forEach((it) => {
        const text = it.getText();
        const card = document.createElement("div");
        card.className = "vault-card";
        card.innerHTML = `
          <div class="vault-card-head">
            <span class="vault-block-tag">${escHtml(it.block)}</span>
            <span class="menu-tag">${escHtml(it.tag)}</span>
          </div>
          <h4>${escHtml(it.title)}</h4>
          <pre class="vault-preview">${escHtml(text)}</pre>
          <div class="vault-card-actions">
            <button type="button" class="btn btn-primary btn-sm vault-copy-btn">📋 Copiar</button>
            <button type="button" class="btn btn-secondary btn-sm vault-go-btn">Ver en #${escHtml(it.slideId)} →</button>
          </div>
        `;
        const cpBtn = card.querySelector(".vault-copy-btn");
        cpBtn.addEventListener("click", () => window.ACTIVITIES.copyText(text, "Prompt copiado desde Bóveda ✓", cpBtn));
        card.querySelector(".vault-go-btn").addEventListener("click", () => {
          this.toggleMenu(false);
          this.goToId(it.slideId);
        });
        vaultGrid.appendChild(card);
      });
    },

    applyMenuFilter(filterKey) {
      this.menuFilter = filterKey;
      const menuGrid = document.getElementById("menu-grid");
      const vaultGrid = document.getElementById("vault-grid");

      document.querySelectorAll("#menu-filters .filter-pill").forEach((p) => {
        p.classList.toggle("active", p.dataset.filter === filterKey);
      });

      if (filterKey === "vault") {
        document.getElementById("menu-empty").hidden = true;
        if (menuGrid) menuGrid.style.display = "none";
        if (vaultGrid) vaultGrid.style.display = "grid";
        this.renderVault();
        return;
      }

      if (menuGrid) menuGrid.style.display = "grid";
      if (vaultGrid) vaultGrid.style.display = "none";

      const q = (this.menuSearch || "").trim().toLowerCase();
      document.querySelectorAll("#menu-grid .menu-block").forEach((blockEl) => {
        let visibleInBlock = 0;
        blockEl.querySelectorAll(".menu-slide-btn").forEach((btn) => {
          const cat = btn.dataset.category;
          const idx = Number(btn.dataset.idx);
          const slide = this.flat[idx];
          const hay = slide ? `${slide.id} ${slide.title} ${slide.subtitle || ""} ${slide.badge || ""} ${slide.block.title}`.toLowerCase() : "";
          const matchCat = filterKey === "all" || cat === filterKey;
          const matchSearch = !q || hay.includes(q);
          const show = matchCat && matchSearch;
          btn.classList.toggle("filtered-out", !show);
          if (show) visibleInBlock += 1;
        });
        blockEl.classList.toggle("empty-filtered", visibleInBlock === 0);
      });
      document.getElementById("menu-empty").hidden = !!document.querySelector("#menu-grid .menu-block:not(.empty-filtered)");
    },

    toast(msg) {
      const t = document.getElementById("toast");
      if (!t) return;
      t.textContent = msg;
      t.classList.add("show");
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
    },

    buildDeck() {
      const deck = document.getElementById("deck");
      const dotRail = document.getElementById("dot-rail");
      const menuGrid = document.getElementById("menu-grid");
      const menuFilters = document.getElementById("menu-filters");
      const tooltip = document.getElementById("dot-tooltip");
      deck.innerHTML = "";
      dotRail.innerHTML = "";
      menuGrid.innerHTML = "";
      this.flat = [];

      const data = window.WORKSHOP_DATA;
      const totalSlidesCount = data.bloques.reduce((sum, b) => sum + b.slides.length, 0);
      let globalIdx = 0;

      const shortTitles = Object.fromEntries(data.bloques.map(b => [b.id, b.shortTitle || b.title]));

      const menuEyebrow = document.getElementById("menu-eyebrow");
      if (menuEyebrow) {
        menuEyebrow.textContent = `Mapa del Taller · 90 Minutos · ${totalSlidesCount} Diapositivas`;
      }
      const forgeId = "s44";
      const jumpBtn = document.getElementById("btn-jump-deliverable");
      if (jumpBtn) {
        jumpBtn.textContent = "Ver mi kit →";
      }

      const counts = { all: 0, reto: 0, quiz: 0, sim: 0 };

      data.bloques.forEach((bloque, bIdx) => {
        if (bIdx > 0) {
          const sep = document.createElement("span");
          sep.className = "dot-sep";
          sep.setAttribute("aria-hidden", "true");
          dotRail.appendChild(sep);
        }

        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "block-chip";
        chip.dataset.blockId = bloque.id;
        chip.dataset.code = bloque.code;
        chip.dataset.shortLabel = `${bloque.code} · ${shortTitles[bloque.id] || bloque.title}`;
        chip.textContent = bloque.code;
        chip.title = `${bloque.code} · ${bloque.title} (${bloque.timeRange})`;
        chip.addEventListener("click", () => {
          const firstSlideId = bloque.slides[0]?.id;
          if (firstSlideId) this.goToId(firstSlideId);
        });
        dotRail.appendChild(chip);

        const mBlock = document.createElement("div");
        mBlock.className = "menu-block";
        mBlock.innerHTML = `
          <div class="menu-block-head">
            <h3>${bloque.code} · ${escHtml(bloque.title)}</h3>
            <span>${escHtml(bloque.timeRange)}</span>
          </div>
        `;

        bloque.slides.forEach((slide, localIdx) => {
          const idx = globalIdx++;
          this.flat.push({ ...slide, idx, block: bloque });

          const slideEl = this.createSlideElement(slide, bloque, idx);
          deck.appendChild(slideEl);

          const isInteractive = ["quiz", "reto", "promptBuilder", "objectionArena", "slotGenerator", "assistantLab", "businessProfile", "prospectingLab", "workspaceLab", "creativeLab"].includes(slide.type);
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = `dot ${localIdx === 0 ? "block-start" : ""} ${isInteractive ? "is-interactive" : ""}`;
          dot.setAttribute("aria-label", `Ir a diapositiva ${idx + 1}: ${slide.title}`);
          dot.addEventListener("click", () => this.goTo(idx));

          const showTip = () => {
            if (!tooltip) return;
            const rect = dot.getBoundingClientRect();
            tooltip.textContent = `${String(idx + 1).padStart(2, "0")} / ${totalSlidesCount} · ${slide.title} (${slide.mins} min)`;
            const clampedX = Math.max(140, Math.min(window.innerWidth - 140, rect.left + rect.width / 2));
            tooltip.style.left = `${clampedX}px`;
            tooltip.classList.add("show");
            tooltip.setAttribute("aria-hidden", "false");
          };
          const hideTip = () => {
            if (!tooltip) return;
            tooltip.classList.remove("show");
            tooltip.setAttribute("aria-hidden", "true");
          };
          dot.addEventListener("mouseenter", showTip);
          dot.addEventListener("focus", showTip);
          dot.addEventListener("mouseleave", hideTip);
          dot.addEventListener("blur", hideTip);

          dotRail.appendChild(dot);

          // Category for menu filters
          let category = "content";
          if (slide.type === "reto" || slide.type === "assistantLab") category = "reto";
          else if (slide.type === "quiz") category = "quiz";
          else if (["promptDoctor", "promptBuilder", "objectionArena", "slotGenerator", "workspaceSimulator", "connectorHub", "automationStudio", "assistantForge", "businessProfile", "diagnosticPoll", "prospectingLab", "workspaceLab", "creativeLab"].includes(slide.type)) {
            category = "sim";
          }

          counts.all += 1;
          if (category === "reto") counts.reto += 1;
          if (category === "quiz") counts.quiz += 1;
          if (category === "sim") counts.sim += 1;

          const mBtn = document.createElement("button");
          mBtn.type = "button";
          mBtn.className = "menu-slide-btn";
          mBtn.dataset.idx = String(idx);
          mBtn.dataset.category = category;
          const tagMap = {
            quiz: "Quiz",
            reto: "Reto",
            promptBuilder: "Builder",
            objectionArena: "Simulador",
            slotGenerator: "Ruleta",
            sortActivity: "Ordenar",
            workspaceSimulator: "Workspace",
            connectorHub: "Conectores",
            automationStudio: "Flujos IA",
            assistantLab: "Skills",
            prospectingLab: "Prospección",
            workspaceLab: "Workspace",
            creativeLab: "Creatividad",
            workflowMap: "Flujo",
            portfolio: "Tu kit",
            businessProfile: "Perfil",
            promptDoctor: "Comparador",
            section: "Bloque"
          };
          const tagLabel = tagMap[slide.type] || `${slide.mins}m`;
          mBtn.innerHTML = `
            <span class="menu-num">${String(idx + 1).padStart(2, "0")}</span>
            <span>${escHtml(slide.title)}</span>
            <span class="menu-tag" data-base-label="${escHtml(tagLabel)}">${escHtml(tagLabel)}</span>
          `;
          mBtn.addEventListener("click", () => {
            this.toggleMenu(false);
            this.goTo(idx);
          });
          mBlock.appendChild(mBtn);
        });

        menuGrid.appendChild(mBlock);
      });

      this.buildPromptVault();

      if (menuFilters) {
        menuFilters.innerHTML = "";
        [
          { key: "all", label: `Todos (${counts.all})` },
          { key: "reto", label: `Prácticas (${counts.reto})` },
          { key: "quiz", label: `Quiz (${counts.quiz})` },
          { key: "sim", label: `Herramientas (${counts.sim})` },
          { key: "vault", label: `Prompts (${this.vaultItems.length})` }
        ].filter(f => f.key !== "quiz" || counts.quiz > 0).forEach((f) => {
          const fp = document.createElement("button");
          fp.type = "button";
          fp.className = `filter-pill ${f.key === this.menuFilter ? "active" : ""}`;
          fp.dataset.filter = f.key;
          fp.textContent = f.label;
          fp.addEventListener("click", () => this.applyMenuFilter(f.key));
          menuFilters.appendChild(fp);
        });
      }

      this.refreshCompletionUI();
    },

    createSlideElement(slide, bloque, idx) {
      const section = document.createElement("section");
      section.id = slide.id;
      section.className = `slide ${slide.theme === "dark" ? "slide-dark" : "slide-light"}`;
      section.dataset.idx = String(idx);
      section.dataset.type = slide.type;
      section.inert = true;
      section.setAttribute("aria-hidden", "true");
      section.setAttribute("aria-roledescription", "diapositiva");
      section.setAttribute("aria-label", `${idx + 1}. ${slide.title}`);
      section.style.setProperty("--block-accent", bloque.color || "#2563EB");

      const scroll = document.createElement("div");
      scroll.className = "slide-scroll";
      const body = document.createElement("div");
      body.className = "slide-body";

      if (slide.type === "cover") {
        this.renderCover(slide, body);
      } else if (slide.type === "section") {
        this.renderSection(slide, body);
      } else {
        const head = document.createElement("div");
        head.className = "slide-head";
        head.innerHTML = `
          <h2 class="slide-title">${escHtml(slide.title)}</h2>
          ${slide.subtitle ? `<p class="slide-subtitle">${escHtml(slide.subtitle)}</p>` : ""}
          <div class="slide-context"><span>${escHtml(bloque.title)}</span><span>${slide.mins} min${slide.type === "reto" || slide.type === "assistantLab" ? ` · Práctica en ${escHtml(slide.surface || "Gemini")}` : ""}</span></div>
        `;
        body.appendChild(head);
        if (slide.pipelineLab) window.FOUNDER.renderPipelineResources(body);

        const rendererMap = {
          agenda: () => this.renderAgenda(slide, body),
          split: () => this.renderSplit(slide, body),
          cards: () => this.renderCards(slide, body),
          steps: () => this.renderSteps(slide, body),
          closing: () => this.renderClosing(slide, body),
          diagnosticPoll: () => window.ACTIVITIES.renderDiagnosticPoll(slide, body),
          businessProfile: () => window.ACTIVITIES.renderBusinessProfile(slide, body),
          trafficLight: () => window.ACTIVITIES.renderTrafficLight(slide, body),
          promptDoctor: () => window.ACTIVITIES.renderPromptDoctor(slide, body),
          flipCards: () => window.ACTIVITIES.renderFlipCards(slide, body),
          promptBuilder: () => window.ACTIVITIES.renderPromptBuilder(slide, body),
          reto: () => window.ACTIVITIES.renderReto(slide, body),
          quiz: () => window.ACTIVITIES.renderQuiz(slide, body),
          objectionArena: () => window.ACTIVITIES.renderObjectionArena(slide, body),
          slotGenerator: () => window.ACTIVITIES.renderSlotGenerator(slide, body),
          sortActivity: () => window.ACTIVITIES.renderSortActivity(slide, body),
          workspaceSimulator: () => window.ACTIVITIES.renderWorkspaceSimulator(slide, body),
          connectorHub: () => window.ACTIVITIES.renderConnectorHub(slide, body),
          comparison: () => window.ACTIVITIES.renderComparison(slide, body),
          automationStudio: () => window.ACTIVITIES.renderAutomationStudio(slide, body),
          assistantForge: () => window.ACTIVITIES.renderAssistantForge(slide, body),
          summaryDashboard: () => window.ACTIVITIES.renderSummaryDashboard(slide, body),
          assistantLab: () => window.LAB.renderAssistant(slide, body),
          portfolio: () => window.LAB.renderPortfolio(slide, body),
          nextSteps: () => window.LAB.renderNextSteps(slide, body),
          prospectingLab: () => window.FOUNDER.renderProspecting(slide, body),
          workspaceLab: () => window.FOUNDER.renderWorkspace(slide, body),
          workflowMap: () => window.FOUNDER.renderWorkflow(slide, body),
          creativeLab: () => window.FOUNDER.renderCreative(slide, body)
        };

        if (rendererMap[slide.type]) {
          rendererMap[slide.type]();
        }
      }

      if (slide.sources?.length) {
        const sources = document.createElement("div");
        sources.className = "slide-sources";
        sources.innerHTML = slide.sources.map(s => `<a href="${escHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escHtml(s.title)} ↗</a>`).join("");
        body.appendChild(sources);
      }

      scroll.appendChild(body);
      section.appendChild(scroll);
      return section;
    },

    // ---------------- CORE RENDERERS ----------------
    renderCover(slide, body) {
      body.classList.add("cover-body");
      const grid = document.createElement("div");
      grid.className = "cover-grid";
      grid.innerHTML = `
        <div class="cover-intro">
          <h1 class="cover-title">Gemini para<br>founders.<br><span>Tu negocio.<br>Con más alcance.</span></h1>
          <p class="cover-lead">${escHtml(slide.subtitle)}</p>
          <p class="cover-facts">90 minutos <span>·</span> Skills + Google Workspace <span>·</span> Práctica guiada</p>
          <div class="cover-cta-row">
            <button class="btn btn-primary" id="cover-start" type="button">Empezar el taller <span aria-hidden="true">→</span></button>
            <button class="cover-secondary" id="cover-example" type="button">Usar un negocio de ejemplo</button>
          </div>
          <p class="cover-footnote">Para founders y emprendedores. Prepara tu cuenta de Workspace y sigue el mismo caso en todo el lab.</p>
        </div>
        <div class="cover-workbook">
          <div class="workbook-top"><span>Tu negocio, en práctica</span><span>90 min</span></div>
          <div class="workbook-conversation"><span class="message-label">El reto de tu negocio</span><p>“Encontrar clientes, operar<br>y crear sin hacerlo todo de cero.”</p></div>
          <div class="workbook-answer"><span class="message-label">Un sistema para repetir</span><h2>De tu oferta<br>a nuevas oportunidades.</h2></div>
          <div class="workbook-outcomes"></div>
          <button id="cover-biz-status" class="biz-status-banner" type="button"></button>
        </div>`;
      grid.querySelector("#cover-start").addEventListener("click", () => this.goToId("s2"));
      grid.querySelector("#cover-example").addEventListener("click", () => this.openBizModal());
      grid.querySelector("#cover-biz-status").addEventListener("click", () => this.openBizModal());
      slide.pillars.forEach((p, i) => {
        const button = document.createElement("button");button.type="button";button.className="outcome-row";
        button.innerHTML=`<span class="outcome-number">${String(i+1).padStart(2,"0")}</span><span><strong>${escHtml(p.title)}</strong><small>${escHtml(p.desc)}</small></span><span aria-hidden="true">↗</span>`;
        button.addEventListener("click",()=>this.goToId(p.targetId));
        grid.querySelector(".workbook-outcomes").appendChild(button);
      });
      body.appendChild(grid);
    },

    renderSection(slide, body) {
      const box = document.createElement("div");
      box.className = "section-center";
      box.innerHTML = `
        <div class="section-num">${escHtml(slide.num)}</div>
        <h2 class="section-title">${escHtml(slide.title)}</h2>
        <p class="section-lead">${escHtml(slide.subtitle)}</p>
        <div class="section-bullets">
          ${slide.bullets.map((b) => `<span class="dark-pill">${escHtml(b)}</span>`).join("")}
        </div>
      `;
      const goBtn = document.createElement("button");
      goBtn.type = "button";
      goBtn.className = "btn btn-aurora";
      goBtn.style.marginTop = "24px";
      goBtn.textContent = "Entrar al bloque →";
      goBtn.addEventListener("click", () => this.next());
      box.appendChild(goBtn);
      body.appendChild(box);
    },

    renderAgenda(slide, body) {
      const list = document.createElement("div");
      list.className = "agenda-list";
      slide.items.forEach((it) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "agenda-item";
        item.innerHTML = `
          <span class="agenda-time">${escHtml(it.time)}</span>
          <div>
            <h4>${escHtml(it.title)}</h4>
            <p>${escHtml(it.desc)}</p>
          </div>
          <span style="color:var(--primary);font-weight:700;">→</span>
        `;
        item.addEventListener("click", () => this.goToId(it.targetId));
        list.appendChild(item);
      });
      body.appendChild(list);
    },

    renderSplit(slide, body) {
      const grid = document.createElement("div");
      grid.className = "split-grid";

      [slide.left, slide.right].forEach((side) => {
        const card = document.createElement("div");
        card.className = `split-card accent-${side.accent || "primary"}`;
        card.innerHTML = `<h3 style="font-size:1.08rem;">${escHtml(side.title)}</h3>`;
        const ul = document.createElement("ul");
        ul.className = "clean-list";
        side.items.forEach((raw) => {
          const li = document.createElement("li");
          const span = document.createElement("span");
          span.setAttribute("data-biz-template", raw);
          span.textContent = this.interpolateStr(raw);
          li.appendChild(span);
          ul.appendChild(li);
        });
        card.appendChild(ul);
        grid.appendChild(card);
      });
      body.appendChild(grid);

      if (slide.callout) {
        const cb = document.createElement("div");
        cb.className = `callout-banner ${slide.callout.color || ""}`;
        cb.setAttribute("data-biz-template", slide.callout.text);
        cb.textContent = this.interpolateStr(slide.callout.text);
        body.appendChild(cb);
      }
    },

    renderCards(slide, body) {
      const grid = document.createElement("div");
      grid.className = `cards-grid ${slide.cols === 2 ? "cols-2" : slide.cols === 3 ? "cols-3" : ""}`;
      slide.cards.forEach((c) => {
        const card = document.createElement("div");
        card.className = "info-card";
        card.innerHTML = `
          <div class="card-top">
            <div class="card-glyph ${c.color || "primary"}">${escHtml(c.glyph)}</div>
            <h3>${escHtml(c.title)}</h3>
          </div>
          <p>${escHtml(c.desc)}</p>
        `;
        if (c.snippet) {
          const snip = document.createElement("div");
          snip.className = "prompt-snippet";
          snip.setAttribute("data-biz-template", c.snippet);
          snip.textContent = this.interpolateStr(c.snippet);
          card.appendChild(snip);

          const cp = document.createElement("button");
          cp.type = "button";
          cp.className = "btn btn-secondary btn-sm";
          cp.textContent = "📋 Copiar ejemplo";
          cp.addEventListener("click", () => window.ACTIVITIES.copyText(snip.textContent, "Ejemplo copiado ✓", cp));
          card.appendChild(cp);
        }
        grid.appendChild(card);
      });
      body.appendChild(grid);
    },

    renderSteps(slide, body) {
      const grid = document.createElement("div");
      grid.className = "steps-grid";
      slide.steps.forEach((st) => {
        const card = document.createElement("div");
        card.className = "step-card";
        const descSpan = document.createElement("p");
        descSpan.setAttribute("data-biz-template", st.desc);
        descSpan.textContent = this.interpolateStr(st.desc);

        card.innerHTML = `
          <div class="step-num">${escHtml(st.num)}</div>
          <h4>${escHtml(st.title)}</h4>
        `;
        card.appendChild(descSpan);

        if (st.example) {
          const ex = document.createElement("div");
          ex.className = "prompt-snippet";
          ex.setAttribute("data-biz-template", st.example);
          ex.textContent = this.interpolateStr(st.example);
          card.appendChild(ex);
        }
        grid.appendChild(card);
      });
      body.appendChild(grid);
    },

    renderClosing(slide, body) {
      const xlsxUrl = window.WORKSHOP_DATA.meta.pipelineFileUrl;
      if (xlsxUrl) {
        const xlsxBanner = document.createElement("div");
        xlsxBanner.className = "panel";
        xlsxBanner.style.display = "flex";
        xlsxBanner.style.justifyContent = "space-between";
        xlsxBanner.style.alignItems = "center";
        xlsxBanner.style.gap = "14px";
        xlsxBanner.style.flexWrap = "wrap";
        xlsxBanner.innerHTML = `
          <div>
            <strong style="font-size:1rem;color:#5EEAD4;display:block;margin-bottom:3px;">📊 Plantilla Excel: Pipeline de Ventas + Matriz Lead Scoring (.xlsx)</strong>
            <span style="font-size:0.86rem;color:#CBD5E1;">4 pestañas listas para subir a Google Sheets: Pipeline Comercial (10 ejemplos LATAM), Matriz 1–100, Rutina Semanal IA y 7 Prompts listos.</span>
          </div>
          <a class="btn btn-aurora btn-sm" href="${escHtml(xlsxUrl)}" download>⬇️ Descargar Pipeline (.xlsx)</a>
        `;
        body.appendChild(xlsxBanner);
      }

      const grid = document.createElement("div");
      grid.className = "cards-grid cols-2";

      window.WORKSHOP_DATA.downloadableTemplates.forEach((tpl) => {
        const card = document.createElement("div");
        card.className = "panel";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "10px";
        card.innerHTML = `
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:1.45rem;">${tpl.icon}</span>
            <h3 style="font-size:1.02rem;color:#F8FAFC;">${escHtml(tpl.title)}</h3>
          </div>
          <p style="font-size:0.86rem;color:#CBD5E1;">${escHtml(tpl.desc)}</p>
        `;
        const dl = document.createElement("button");
        dl.type = "button";
        dl.className = "btn btn-secondary btn-sm";
        dl.style.alignSelf = "flex-start";
        dl.title = tpl.filename;
        dl.textContent = "⬇️ Descargar guía (.md)";
        dl.addEventListener("click", () => window.ACTIVITIES.downloadFile(tpl.filename, tpl.content));
        card.appendChild(dl);
        grid.appendChild(card);
      });
      body.appendChild(grid);

      const planPanel = document.createElement("div");
      planPanel.className = "panel";
      planPanel.innerHTML = `<h3 style="font-size:1rem;color:#93C5FD;margin-bottom:10px;">📅 Plan sugerido para tus próximos 7 días</h3>`;
      const row = document.createElement("div");
      row.className = "cards-grid cols-3";
      slide.plan7Days.forEach((d) => {
        const item = document.createElement("div");
        item.style.background = "rgba(255,255,255,0.04)";
        item.style.border = "1px solid rgba(255,255,255,0.12)";
        item.style.borderRadius = "12px";
        item.style.padding = "12px";
        item.innerHTML = `
          <strong style="display:block;color:#5EEAD4;font-size:0.86rem;margin-bottom:4px;">${escHtml(d.day)}</strong>
          <p style="font-size:0.84rem;color:#E2E8F0;">${escHtml(d.task)}</p>
        `;
        row.appendChild(item);
      });
      planPanel.appendChild(row);
      body.appendChild(planPanel);

      const bottomBtns = document.createElement("div");
      bottomBtns.style.display = "flex";
      bottomBtns.style.gap = "10px";
      bottomBtns.style.flexWrap = "wrap";

      const dashId = this.getSlideIdByType("summaryDashboard") || "s44";
      const backDash = document.createElement("button");
      backDash.type = "button";
      backDash.className = "btn btn-aurora";
      backDash.textContent = `Volver a Mi Kit y Playbooks (#${dashId})`;
      backDash.addEventListener("click", () => this.goToId(dashId));

      const restart = document.createElement("button");
      restart.type = "button";
      restart.className = "btn btn-secondary";
      restart.textContent = "↺ Volver al inicio (#s1)";
      restart.addEventListener("click", () => this.goTo(0));

      bottomBtns.appendChild(backDash);
      bottomBtns.appendChild(restart);
      body.appendChild(bottomBtns);
    },

    // ---------------- NAVIGATION & CHROME ----------------
    goTo(targetIdx, instant = false) {
      const clamped = Math.max(0, Math.min(this.flat.length - 1, targetIdx));
      const prevIdx = this.idx;
      this.idx = clamped;
      const slide = this.flat[clamped];

      const deck = document.getElementById("deck");
      const slideEl = deck.children[clamped];
      const targetLeft = slideEl ? slideEl.offsetLeft : clamped * (deck.clientWidth || window.innerWidth);
      const useInstant = instant || Math.abs(clamped - prevIdx) > 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      this.programmaticScrollUntil = Date.now() + (useInstant ? 140 : 620);

      if (useInstant) {
        deck.style.scrollSnapType = "none";
        deck.scrollLeft = targetLeft;
        requestAnimationFrame(() => {
          deck.style.scrollSnapType = "";
        });
      } else {
        deck.scrollTo({
          left: targetLeft,
          behavior: "smooth"
        });
      }

      const newHash = `#${slide.id}`;
      if (window.location.hash !== newHash) {
        this.ignoreHashOnce = true;
        window.history.replaceState(null, "", newHash);
        setTimeout(() => { this.ignoreHashOnce = false; }, 50);
      }

      const previousFocus = document.activeElement;
      this.syncChrome();
      if (prevIdx !== clamped) {
        slideEl?.querySelector(".slide-scroll")?.scrollTo({top: 0, behavior: "instant"});
        const focus = previousFocus;
        if (focus?.closest(".slide") && focus.closest(".slide") !== slideEl) document.getElementById("deck").focus({preventScroll: true});
      }
    },

    goToId(slideId) {
      const found = this.flat.find((s) => s.id === slideId);
      if (found) this.goTo(found.idx);
    },

    next() {
      if (this.idx < this.flat.length - 1) this.goTo(this.idx + 1);
    },

    prev() {
      if (this.idx > 0) this.goTo(this.idx - 1);
    },

    syncChrome() {
      const slide = this.flat[this.idx];
      if (!slide) return;
      const total = this.flat.length;

      // Active slide choreography & block accent
      document.documentElement.style.setProperty("--block-accent", slide.block.color || "#2563EB");
      document.querySelectorAll(".slide").forEach((sEl, sIdx) => {
        sEl.classList.toggle("is-active", sIdx === this.idx);
      });

      // Body dark/light theme
      document.body.classList.toggle("on-dark", slide.theme === "dark");
      document.body.classList.toggle("on-light", slide.theme !== "dark");

      // Topbar breadcrumb (con avance en bloque)
      const crumbText = document.getElementById("crumb-text");
      if (crumbText) {
        const localIdx = slide.block.slides.findIndex((s) => s.id === slide.id);
        const blockTotal = slide.block.slides.length;
        crumbText.textContent = `${slide.block.code} · ${slide.block.title} (${localIdx + 1}/${blockTotal}) · ${slide.block.timeRange}`;
      }

      // Bottom counter & progress
      const counter = document.getElementById("slide-counter");
      const dur = document.getElementById("slide-duration");
      if (counter) counter.textContent = `${String(this.idx + 1).padStart(2, "0")} / ${total}`;
      if (dur) dur.textContent = `· ${slide.mins} min`;

      const pct = ((this.idx + 1) / total) * 100;
      const fill = document.getElementById("progress-fill");
      const spark = document.getElementById("progress-spark");
      if (fill) fill.style.width = `${pct}%`;
      if (spark) spark.style.left = `calc(${pct}% - 2px)`;

      // Nav arrows
      const prevBtn = document.getElementById("nav-prev");
      const nextBtn = document.getElementById("nav-next");
      if (prevBtn) prevBtn.disabled = this.idx === 0;
      if (nextBtn) nextBtn.disabled = this.idx === total - 1;

      // Dots & Block chapter chips
      const dotRail = document.getElementById("dot-rail");
      document.querySelectorAll("#dot-rail .block-chip").forEach((chip) => {
        const isCur = chip.dataset.blockId === slide.block.id;
        chip.classList.toggle("active", isCur);
        chip.textContent = chip.dataset.shortLabel;
      });
      document.querySelectorAll("#dot-rail .dot").forEach((d, i) => {
        d.classList.toggle("active", i === this.idx);
      });
      const activeDot = dotRail?.querySelector(".block-chip.active");
      if (dotRail && activeDot && dotRail.scrollWidth > dotRail.clientWidth) {
        const targetScrollLeft = Math.max(0, activeDot.offsetLeft - dotRail.clientWidth / 2 + activeDot.offsetWidth / 2);
        dotRail.scrollTo({ left: targetScrollLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }

      // Menu current
      document.querySelectorAll(".menu-slide-btn").forEach((b) => {
        b.classList.toggle("current", Number(b.dataset.idx) === this.idx);
      });

      if (slide.type === "summaryDashboard") {
        window.ACTIVITIES?.refreshSlide(slide.id);
      }
      window.LAB?.syncChrome();
    },

    // ---------------- DRAWERS & MODALS ----------------
    toggleMenu(force, initialFilter = null, focusSearch = false) {
      const menu = document.getElementById("menu");
      const open = typeof force === "boolean" ? force : !menu.classList.contains("open");
      menu.classList.toggle("open", open);
      menu.setAttribute("aria-hidden", String(!open));
      if (open) {
        this.refreshCompletionUI();
        if (initialFilter) {
          this.applyMenuFilter(initialFilter);
        } else {
          this.applyMenuFilter(this.menuFilter);
        }
        if (focusSearch) {
          requestAnimationFrame(() => document.getElementById("menu-search")?.focus());
        }
      } else {
        const searchEl = document.getElementById("menu-search");
        if (searchEl && document.activeElement === searchEl) {
          searchEl.blur();
        }
      }
    },

    toggleShortcuts(force) {
      const pop = document.getElementById("shortcuts-popover");
      if (!pop) return;
      const open = typeof force === "boolean" ? force : !pop.classList.contains("open");
      pop.classList.toggle("open", open);
      pop.setAttribute("aria-hidden", String(!open));
    },

    openBizModal() {
      const modal = document.getElementById("biz-modal");
      const b = this.STATE.biz;
      document.getElementById("m-biz-name").value = b.name || "";
      document.getElementById("m-biz-tone").value = b.tone || "";
      document.getElementById("m-biz-offer").value = b.offer || "";
      document.getElementById("m-biz-audience").value = b.audience || "";
      document.getElementById("m-biz-diff").value = b.diff || "";
      document.getElementById("m-biz-pain").value = b.painTask || "";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    },

    closeBizModal() {
      const modal = document.getElementById("biz-modal");
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    },

    toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    },

    wireControls() {
      document.getElementById("brand-home").addEventListener("click", () => this.goTo(0));
      document.getElementById("crumb").addEventListener("click", () => this.toggleMenu(undefined, "all", false));
      document.getElementById("nav-prev").addEventListener("click", () => this.prev());
      document.getElementById("nav-next").addEventListener("click", () => this.next());
      document.getElementById("btn-vault")?.addEventListener("click", () => {
        const menuOpen = document.getElementById("menu").classList.contains("open");
        if (menuOpen && this.menuFilter === "vault") this.toggleMenu(false);
        else this.toggleMenu(true, "vault", true);
      });
      document.getElementById("btn-menu").addEventListener("click", () => this.toggleMenu(undefined, "all", false));
      document.getElementById("btn-close-menu").addEventListener("click", () => this.toggleMenu(false));
      document.getElementById("btn-jump-deliverable").addEventListener("click", () => {
        this.toggleMenu(false);
        this.goToId("s44");
      });
      document.getElementById("menu-search")?.addEventListener("input", (e) => {
        this.menuSearch = e.target.value || "";
        this.applyMenuFilter(this.menuFilter);
      });

      document.getElementById("btn-shortcuts").addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleShortcuts();
      });
      document.getElementById("btn-close-shortcuts").addEventListener("click", () => this.toggleShortcuts(false));
      document.addEventListener("click", (e) => {
        const pop = document.getElementById("shortcuts-popover");
        if (pop && pop.classList.contains("open") && !e.target.closest("#shortcuts-popover") && !e.target.closest("#btn-shortcuts")) {
          this.toggleShortcuts(false);
        }
      });

      document.getElementById("btn-biz").addEventListener("click", () => this.openBizModal());
      document.getElementById("btn-close-biz").addEventListener("click", () => this.closeBizModal());
      document.getElementById("btn-cancel-biz").addEventListener("click", () => this.closeBizModal());
      document.getElementById("biz-modal").addEventListener("click", (e) => {
        if (e.target.id === "biz-modal") this.closeBizModal();
      });

      document.getElementById("btn-fullscreen").addEventListener("click", () => this.toggleFullscreen());

      // Presets inside modal
      const mPresets = document.getElementById("modal-presets");
      mPresets.innerHTML = `<span style="font-size:0.78rem;font-weight:700;color:var(--text-muted);">Ejemplos rápidos:</span>`;
      window.WORKSHOP_DATA.presets.forEach((p) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "preset-chip";
        chip.textContent = p.label;
        chip.addEventListener("click", () => {
          document.getElementById("m-biz-name").value = p.name;
          document.getElementById("m-biz-tone").value = p.tone;
          document.getElementById("m-biz-offer").value = p.offer;
          document.getElementById("m-biz-audience").value = p.audience;
          document.getElementById("m-biz-diff").value = p.diff;
          document.getElementById("m-biz-pain").value = p.painTask;
        });
        mPresets.appendChild(chip);
      });

      document.getElementById("btn-reset-biz").addEventListener("click", () => {
        this.STATE.biz = { ...DEFAULT_STATE.biz };
        this.saveState();
        this.updateBizPill();
        this.updateScoreBadge(false);
        this.refreshCompletionUI();
        this.refreshDynamicPrompts();
        this.openBizModal();
        this.toast("Datos del negocio limpiados");
      });

      document.getElementById("modal-biz-form").addEventListener("submit", (e) => {
        e.preventDefault();
        this.applyBizData({
          name: document.getElementById("m-biz-name").value.trim(),
          tone: document.getElementById("m-biz-tone").value.trim(),
          offer: document.getElementById("m-biz-offer").value.trim(),
          audience: document.getElementById("m-biz-audience").value.trim(),
          diff: document.getElementById("m-biz-diff").value.trim(),
          painTask: document.getElementById("m-biz-pain").value.trim()
        });
        this.closeBizModal();
        window.CONFETTI.burst(55);
      });

      // Keyboard navigation (skip when typing inside inputs/textareas)
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.toggleMenu(false);
          this.toggleShortcuts(false);
          this.closeBizModal();
          return;
        }
        if (e.target && e.target.closest('input, textarea, select, [contenteditable="true"]')) {
          return;
        }
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        if (document.getElementById("biz-modal").classList.contains("open") || document.getElementById("menu").classList.contains("open") || document.getElementById("shortcuts-popover").classList.contains("open")) {
          return;
        }
        if (e.target?.closest('button, a, summary') && (e.key === " " || e.key === "Enter")) return;

        const activeSlide = this.flat[this.idx];
        if (activeSlide && activeSlide.type === "quiz" && !document.getElementById("menu").classList.contains("open")) {
          if (window.ACTIVITIES?.handleQuizKey(activeSlide.id, e.key)) {
            e.preventDefault();
            return;
          }
        }

        if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
          e.preventDefault();
          this.next();
        } else if (e.key === "ArrowLeft" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
          e.preventDefault();
          this.prev();
        } else if (e.key === "Home") {
          e.preventDefault();
          this.goTo(0);
        } else if (e.key === "End") {
          e.preventDefault();
          this.goTo(this.flat.length - 1);
        } else if (e.key === "m" || e.key === "M") {
          e.preventDefault();
          this.toggleMenu();
        } else if (e.key === "k" || e.key === "K") {
          e.preventDefault();
          this.toggleMenu(true, "vault", true);
        } else if (e.key === "/") {
          e.preventDefault();
          this.toggleMenu(true, this.menuFilter || "all", true);
        } else if (e.key === "b" || e.key === "B") {
          e.preventDefault();
          this.openBizModal();
        } else if (e.key === "f" || e.key === "F") {
          e.preventDefault();
          this.toggleFullscreen();
        } else if (e.key === "?") {
          e.preventDefault();
          this.toggleShortcuts();
        }
      });

      // Trackpad horizontal swipe + touch swipe + scroll sync
      const deck = document.getElementById("deck");
      deck.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 40) {
          e.preventDefault();
          const now = Date.now();
          if (now < this.wheelLockUntil) return;
          this.wheelLockUntil = now + 520;
          if (e.deltaX > 0) this.next();
          else this.prev();
        }
      }, { passive: false });

      let touchStartX = 0;
      let touchStartY = 0;
      deck.addEventListener("touchstart", (e) => {
        if (!e.touches.length || e.target.closest("#dot-rail, .terminal-pre, input, textarea")) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });
      deck.addEventListener("touchend", (e) => {
        if (!touchStartX || !e.changedTouches.length) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        touchStartX = 0;
        touchStartY = 0;
        if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.25) {
          if (dx < 0) this.next();
          else this.prev();
        }
      }, { passive: true });

      let scrollDebounce = null;
      deck.addEventListener("scroll", () => {
        if (Date.now() < this.programmaticScrollUntil) return;
        clearTimeout(scrollDebounce);
        scrollDebounce = setTimeout(() => {
          if (Date.now() < this.programmaticScrollUntil) return;
          const slideW = deck.clientWidth || window.innerWidth;
          const snapped = Math.round(deck.scrollLeft / slideW);
          if (snapped !== this.idx && snapped >= 0 && snapped < this.flat.length) {
            this.idx = snapped;
            const slide = this.flat[snapped];
            window.history.replaceState(null, "", `#${slide.id}`);
            this.syncChrome();
          }
        }, 90);
      });

      window.addEventListener("resize", () => {
        this.goTo(this.idx, true);
      });

      window.addEventListener("hashchange", () => {
        if (this.ignoreHashOnce) return;
        const hashId = window.location.hash.replace("#", "");
        if (hashId) this.goToId(hashId);
      });

      // Live clock
      const updateClock = () => {
        const el = document.getElementById("live-clock");
        if (el) {
          el.textContent = new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit"
          });
        }
      };
      updateClock();
      setInterval(updateClock, 15000);
    },

    init() {
      this.buildDeck();
      this.lastScore = this.calculateScore();
      this.wireControls();
      this.updateBizPill();
      this.updateScoreBadge(false);
      this.refreshCompletionUI();

      const hashId = window.location.hash.replace("#", "");
      const startSlide = this.flat.find((s) => s.id === hashId);
      this.goTo(startSlide ? startSlide.idx : 0, true);
      window.LAB?.init();
    }
  };

  window.APP = APP;
  document.addEventListener("DOMContentLoaded", () => APP.init());
})();
