const icons = {
  dashboard:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 13h8V3H3v10Z"/><path d="M13 21h8V11h-8v10Z"/><path d="M13 3v6h8V3h-8Z"/><path d="M3 21h8v-6H3v6Z"/></svg>',
  board:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/><path d="M15 4v16"/></svg>',
  timeline:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16"/><path d="M4 12h10"/><path d="M4 18h16"/><circle cx="18" cy="12" r="2"/></svg>',
  team:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  moon:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
};

const views = [
  {
    id: "dashboard",
    label: "Command",
    icon: icons.dashboard,
    kicker: "Executive workspace",
    title: "Release command center",
    summary: "Track work, blockers, capacity, and delivery confidence from one focused interface.",
  },
  {
    id: "board",
    label: "Kanban",
    icon: icons.board,
    kicker: "Delivery board",
    title: "Plan, move, and unblock sprint work",
    summary: "Drag cards across the board, filter priority work, and inspect ownership without leaving the page.",
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: icons.timeline,
    kicker: "Roadmap control",
    title: "Milestones mapped to release pressure",
    summary: "See the next delivery moments, progress, risks, and where leadership attention is needed.",
  },
  {
    id: "team",
    label: "Team",
    icon: icons.team,
    kicker: "Capacity view",
    title: "Team workload and risk radar",
    summary: "Balance ownership, discover over-capacity lanes, and keep high-risk areas visible.",
  },
];

const statuses = [
  { id: "backlog", label: "Backlog" },
  { id: "progress", label: "In progress" },
  { id: "review", label: "Review" },
  { id: "done", label: "Done" },
];

const people = [
  { name: "Mira Chen", role: "Product design", capacity: 82, color: "#0f8b8d" },
  { name: "Arjun Mehta", role: "Frontend engineer", capacity: 74, color: "#e15d43" },
  { name: "Lena Ortiz", role: "Data analyst", capacity: 66, color: "#7656d6" },
  { name: "Noah Singh", role: "QA automation", capacity: 58, color: "#d99a26" },
  { name: "Ivy Carter", role: "Growth ops", capacity: 71, color: "#21a67a" },
];

let tasks = [
  {
    id: "OPS-118",
    title: "Design executive KPI drill-down for revenue ops",
    owner: "Mira Chen",
    status: "progress",
    priority: "Critical",
    points: 8,
    due: "May 03",
    tags: ["Design", "Analytics"],
    blocked: false,
    notes: "Needs polished hover states, dense chart labels, and export-ready summary cards.",
  },
  {
    id: "OPS-124",
    title: "Build responsive kanban drag-and-drop states",
    owner: "Arjun Mehta",
    status: "review",
    priority: "High",
    points: 5,
    due: "May 05",
    tags: ["Frontend", "UX"],
    blocked: false,
    notes: "Keyboard and pointer flows should feel predictable on desktop and mobile.",
  },
  {
    id: "OPS-130",
    title: "Model churn-risk segments for account review",
    owner: "Lena Ortiz",
    status: "backlog",
    priority: "High",
    points: 8,
    due: "May 08",
    tags: ["Data", "Risk"],
    blocked: true,
    notes: "Waiting on final customer health event mapping from the integrations team.",
  },
  {
    id: "OPS-132",
    title: "Create launch QA checklist and incident flow",
    owner: "Noah Singh",
    status: "progress",
    priority: "Medium",
    points: 3,
    due: "May 09",
    tags: ["QA", "Release"],
    blocked: false,
    notes: "Cover smoke tests, billing flows, notifications, and analytics dashboards.",
  },
  {
    id: "OPS-139",
    title: "Refine lifecycle campaign workspace",
    owner: "Ivy Carter",
    status: "done",
    priority: "Low",
    points: 2,
    due: "Apr 29",
    tags: ["Growth", "CRM"],
    blocked: false,
    notes: "Final UI copy and message grouping were approved by growth ops.",
  },
  {
    id: "OPS-142",
    title: "Ship compact mobile navigation for field teams",
    owner: "Arjun Mehta",
    status: "backlog",
    priority: "Medium",
    points: 5,
    due: "May 11",
    tags: ["Mobile", "UI"],
    blocked: false,
    notes: "Needs a dense layout that keeps search and filters visible without clutter.",
  },
  {
    id: "OPS-149",
    title: "Validate data freshness warnings in account pages",
    owner: "Noah Singh",
    status: "review",
    priority: "Critical",
    points: 3,
    due: "May 06",
    tags: ["QA", "Data"],
    blocked: true,
    notes: "The empty states are ready, but delayed sync copy needs final review.",
  },
  {
    id: "OPS-151",
    title: "Prototype stakeholder update generator",
    owner: "Mira Chen",
    status: "done",
    priority: "High",
    points: 5,
    due: "Apr 27",
    tags: ["AI", "Workflow"],
    blocked: false,
    notes: "Creates polished release notes from selected sprint activity.",
  },
];

const state = {
  activeView: "dashboard",
  filter: "all",
  query: "",
  editingTaskId: null,
};

const elements = {
  navList: document.querySelector("#navList"),
  filterGroup: document.querySelector("#filterGroup"),
  globalSearch: document.querySelector("#globalSearch"),
  metricGrid: document.querySelector("#metricGrid"),
  appView: document.querySelector("#appView"),
  viewKicker: document.querySelector("#viewKicker"),
  viewTitle: document.querySelector("#viewTitle"),
  viewSummary: document.querySelector("#viewSummary"),
  themeToggle: document.querySelector("#themeToggle"),
  newTaskButton: document.querySelector("#newTaskButton"),
  taskDialog: document.querySelector("#taskDialog"),
  taskForm: document.querySelector("#taskForm"),
  dialogClose: document.querySelector("#dialogClose"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogKicker: document.querySelector("#dialogKicker"),
  taskTitle: document.querySelector("#taskTitle"),
  taskOwner: document.querySelector("#taskOwner"),
  taskStatus: document.querySelector("#taskStatus"),
  taskPriority: document.querySelector("#taskPriority"),
  taskPoints: document.querySelector("#taskPoints"),
  taskNotes: document.querySelector("#taskNotes"),
  resolveButton: document.querySelector("#resolveButton"),
  toast: document.querySelector("#toast"),
};

const savedTheme = localStorage.getItem("orbitops-theme");
document.body.dataset.theme = savedTheme || "light";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ownerFor(name) {
  return people.find((person) => person.name === name) || people[0];
}

function filteredTasks() {
  const query = state.query.trim().toLowerCase();

  return tasks.filter((task) => {
    const matchesQuery =
      !query ||
      [task.title, task.owner, task.priority, task.id, task.tags.join(" "), task.notes]
        .join(" ")
        .toLowerCase()
        .includes(query);
    const matchesFilter =
      state.filter === "all" ||
      (state.filter === "priority" && ["Critical", "High"].includes(task.priority)) ||
      (state.filter === "blocked" && task.blocked);

    return matchesQuery && matchesFilter;
  });
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

function setIconButtons() {
  elements.themeToggle.innerHTML = document.body.dataset.theme === "dark" ? icons.sun : icons.moon;
  elements.dialogClose.innerHTML = icons.close;
}

function renderNavigation() {
  elements.navList.innerHTML = views
    .map(
      (view) => `
        <button class="nav-button ${state.activeView === view.id ? "active" : ""}" data-view="${view.id}" type="button">
          ${view.icon}
          <span>${view.label}</span>
        </button>
      `,
    )
    .join("");
}

function renderFilters() {
  const filters = [
    { id: "all", label: "All" },
    { id: "priority", label: "Priority" },
    { id: "blocked", label: "Blocked" },
  ];

  elements.filterGroup.innerHTML = filters
    .map(
      (filter) => `
        <button class="${state.filter === filter.id ? "active" : ""}" data-filter="${filter.id}" type="button">
          ${filter.label}
        </button>
      `,
    )
    .join("");
}

function renderHeading() {
  const active = views.find((view) => view.id === state.activeView);
  elements.viewKicker.textContent = active.kicker;
  elements.viewTitle.textContent = active.title;
  elements.viewSummary.textContent = active.summary;
}

function renderMetrics() {
  const visibleTasks = filteredTasks();
  const donePoints = tasks.filter((task) => task.status === "done").reduce((sum, task) => sum + task.points, 0);
  const totalPoints = tasks.reduce((sum, task) => sum + task.points, 0);
  const blocked = visibleTasks.filter((task) => task.blocked).length;
  const priority = visibleTasks.filter((task) => ["Critical", "High"].includes(task.priority)).length;
  const confidence = Math.max(64, Math.round(92 - blocked * 7 + donePoints / Math.max(totalPoints, 1) * 9));

  const metrics = [
    { label: "Visible tasks", value: visibleTasks.length, chip: `${tasks.length} total` },
    { label: "Launch confidence", value: `${confidence}%`, chip: blocked ? `${blocked} blocked` : "clear" },
    { label: "Priority work", value: priority, chip: "next 7 days" },
    { label: "Velocity points", value: donePoints, chip: `${totalPoints} scoped` },
  ];

  elements.metricGrid.innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <div>
            <span>${metric.label}</span>
            <strong>${metric.value}</strong>
          </div>
          <div class="metric-chip">${metric.chip}</div>
        </article>
      `,
    )
    .join("");
}

function taskCard(task) {
  const owner = ownerFor(task.owner);
  const color = owner.color;
  const blocker = task.blocked ? '<span class="blocked-label">Blocked</span>' : "";

  return `
    <article class="task-card" draggable="true" data-task-id="${task.id}" style="border-left-color: ${color}">
      <div class="task-meta">
        <span class="priority ${task.priority.toLowerCase()}">${task.priority}</span>
        ${blocker}
      </div>
      <button class="task-open" data-open-task="${task.id}" type="button" aria-label="Open ${task.id}">
        <h4>${task.title}</h4>
      </button>
      <div class="tag-list">
        ${task.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="owner-row">
        <div class="task-meta">
          <span class="owner-avatar" style="background: ${color}">${initials(task.owner)}</span>
          <span>${task.id}</span>
        </div>
        <span>${task.due} · ${task.points} pts</span>
      </div>
    </article>
  `;
}

function emptyState(message) {
  return `<div class="empty-state">${message}</div>`;
}

function renderKanban(tasksToRender = filteredTasks()) {
  const columns = statuses
    .map((status) => {
      const columnTasks = tasksToRender.filter((task) => task.status === status.id);
      return `
        <section class="kanban-column" data-status="${status.id}">
          <div class="kanban-header">
            <h3>${status.label}</h3>
            <span class="kanban-count">${columnTasks.length}</span>
          </div>
          <div class="task-list">
            ${columnTasks.length ? columnTasks.map(taskCard).join("") : emptyState("No matching work in this lane.")}
          </div>
        </section>
      `;
    })
    .join("");

  return `<div class="kanban">${columns}</div>`;
}

function renderDashboard() {
  const velocity = [18, 23, 21, 29, 31, 28, 36, 34];
  const maxVelocity = Math.max(...velocity);
  const visibleTasks = filteredTasks();
  const blockers = visibleTasks.filter((task) => task.blocked);

  elements.appView.innerHTML = `
    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h3>Sprint velocity</h3>
            <p>Story points completed across the last eight delivery cycles.</p>
          </div>
          <span class="status-pill tag">+18% trend</span>
        </div>
        <div class="panel-body chart-grid">
          <div class="velocity-chart">
            ${velocity
              .map(
                (value, index) => `
                  <div class="bar-wrap">
                    <div class="bar" style="height: ${Math.round((value / maxVelocity) * 210)}px"></div>
                    <span>S${index + 1}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="insight-stack">
            <div class="insight">
              <strong>Best release lane</strong>
              <p>Frontend workflow has the highest completion ratio after removing two review bottlenecks.</p>
            </div>
            <div class="insight">
              <strong>Attention needed</strong>
              <p>${blockers.length || "No"} blocker${blockers.length === 1 ? "" : "s"} visible under the current filter.</p>
            </div>
            <div class="insight">
              <strong>Scope signal</strong>
              <p>High-priority tasks are concentrated in analytics, QA, and mobile navigation.</p>
            </div>
          </div>
        </div>
      </section>

      <aside class="side-stack">
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3>Release pulse</h3>
              <p>Upcoming work that changes launch confidence.</p>
            </div>
          </div>
          <div class="panel-body release-list">
            <div class="release-row">
              <span class="release-dot"></span>
              <div>
                <strong>UX acceptance review</strong>
                <small>May 03 · Product and frontend</small>
              </div>
            </div>
            <div class="release-row">
              <span class="release-dot"></span>
              <div>
                <strong>Data freshness sign-off</strong>
                <small>May 06 · Analytics and QA</small>
              </div>
            </div>
            <div class="release-row">
              <span class="release-dot"></span>
              <div>
                <strong>Launch incident simulation</strong>
                <small>May 10 · Whole team</small>
              </div>
            </div>
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">
            <div>
              <h3>Risk radar</h3>
              <p>Highest scoring issues by delivery impact.</p>
            </div>
          </div>
          <div class="panel-body risk-list">
            ${riskItems()}
          </div>
        </section>
      </aside>
    </div>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>Board preview</h3>
          <p>Drag cards to update delivery state.</p>
        </div>
      </div>
      <div class="panel-body">
        ${renderKanban(visibleTasks)}
      </div>
    </section>
  `;
}

function riskItems() {
  const risks = [
    { score: 91, title: "Freshness copy blocked", detail: "QA needs final delayed-sync copy before release." },
    { score: 78, title: "Analytics scope density", detail: "Two high-point tasks share the same data dependency." },
    { score: 63, title: "Mobile navigation review", detail: "Responsive patterns need one more stakeholder pass." },
  ];

  return risks
    .map(
      (risk) => `
        <div class="risk-item">
          <div>
            <strong>${risk.title}</strong>
            <small>${risk.detail}</small>
          </div>
          <span class="risk-score">${risk.score}</span>
        </div>
      `,
    )
    .join("");
}

function renderBoard() {
  elements.appView.innerHTML = renderKanban();
}

function renderTimeline() {
  const milestones = [
    { date: "May 03", title: "Design and KPI review", detail: "Leadership signs off on executive dashboard flows.", progress: 76 },
    { date: "May 06", title: "Data quality acceptance", detail: "Freshness warnings and risk segments pass QA review.", progress: 52 },
    { date: "May 09", title: "Incident rehearsal", detail: "Launch checklist is tested across support and product.", progress: 43 },
    { date: "May 13", title: "Public release candidate", detail: "Critical work closed, mobile workflow verified, handoff complete.", progress: 29 },
  ];

  elements.appView.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>Release timeline</h3>
          <p>Milestones are ranked by urgency and current completion.</p>
        </div>
      </div>
      <div class="panel-body timeline">
        ${milestones
          .map(
            (item) => `
              <article class="timeline-item">
                <span class="timeline-date">${item.date}</span>
                <div>
                  <strong>${item.title}</strong>
                  <small>${item.detail}</small>
                </div>
                <div class="timeline-progress" aria-label="${item.progress}% complete">
                  <span style="width: ${item.progress}%"></span>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="panel">
      <div class="panel-header">
        <div>
          <h3>Timeline-linked work</h3>
          <p>Filtered tasks that directly affect roadmap progress.</p>
        </div>
      </div>
      <div class="panel-body">
        ${renderKanban(filteredTasks().filter((task) => task.status !== "done"))}
      </div>
    </section>
  `;
}

function renderTeam() {
  const workload = people
    .map((person) => {
      const ownedTasks = filteredTasks().filter((task) => task.owner === person.name);
      const points = ownedTasks.reduce((sum, task) => sum + task.points, 0);
      return { ...person, ownedTasks, points };
    })
    .sort((a, b) => b.points - a.points);

  elements.appView.innerHTML = `
    <div class="team-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h3>Team ownership</h3>
            <p>Filtered workload by contributor, role, and task pressure.</p>
          </div>
        </div>
        <div class="panel-body">
          ${workload
            .map(
              (person) => `
                <article class="person">
                  <div class="person-info">
                    <span class="owner-avatar" style="background: ${person.color}">${initials(person.name)}</span>
                    <div>
                      <strong>${person.name}</strong>
                      <small>${person.role}</small>
                    </div>
                  </div>
                  <span class="metric-chip">${person.points} pts</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <aside class="side-stack">
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3>Capacity bands</h3>
              <p>Current planned load against healthy capacity.</p>
            </div>
          </div>
          <div class="panel-body workload-list">
            ${workload
              .map(
                (person) => `
                  <div class="workload-item">
                    <div>
                      <strong>${person.name.split(" ")[0]}</strong>
                      <small>${person.capacity}% planned capacity</small>
                    </div>
                    <div class="workload-bar" aria-label="${person.capacity}% capacity">
                      <span style="width: ${person.capacity}%; background: ${person.color}"></span>
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header">
            <div>
              <h3>Team risk radar</h3>
              <p>Signals that need product or engineering attention.</p>
            </div>
          </div>
          <div class="panel-body risk-list">
            ${riskItems()}
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderApp() {
  renderNavigation();
  renderFilters();
  renderHeading();
  renderMetrics();
  setIconButtons();

  if (state.activeView === "dashboard") renderDashboard();
  if (state.activeView === "board") renderBoard();
  if (state.activeView === "timeline") renderTimeline();
  if (state.activeView === "team") renderTeam();

  bindDynamicEvents();
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeView = button.dataset.view;
      renderApp();
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderApp();
    });
  });

  document.querySelectorAll("[data-open-task]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openTaskDialog(button.dataset.openTask);
    });
  });

  document.querySelectorAll(".task-card").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      card.classList.add("dragging");
      event.dataTransfer.setData("text/plain", card.dataset.taskId);
    });

    card.addEventListener("dragend", () => card.classList.remove("dragging"));
  });

  document.querySelectorAll(".kanban-column").forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", () => column.classList.remove("drag-over"));

    column.addEventListener("drop", (event) => {
      event.preventDefault();
      column.classList.remove("drag-over");
      const taskId = event.dataTransfer.getData("text/plain");
      const task = tasks.find((item) => item.id === taskId);

      if (task && task.status !== column.dataset.status) {
        task.status = column.dataset.status;
        renderApp();
        showToast(`${task.id} moved to ${statuses.find((status) => status.id === task.status).label}.`);
      }
    });
  });
}

function populateDialogOptions() {
  elements.taskOwner.innerHTML = people.map((person) => `<option>${person.name}</option>`).join("");
  elements.taskStatus.innerHTML = statuses
    .map((status) => `<option value="${status.id}">${status.label}</option>`)
    .join("");
}

function openTaskDialog(taskId = null) {
  populateDialogOptions();
  state.editingTaskId = taskId;
  const task = tasks.find((item) => item.id === taskId);

  elements.dialogKicker.textContent = task ? task.id : "New portfolio task";
  elements.dialogTitle.textContent = task ? "Edit task" : "Create task";
  elements.resolveButton.style.visibility = task ? "visible" : "hidden";
  elements.taskTitle.value = task?.title || "";
  elements.taskOwner.value = task?.owner || people[0].name;
  elements.taskStatus.value = task?.status || "backlog";
  elements.taskPriority.value = task?.priority || "High";
  elements.taskPoints.value = task?.points || 5;
  elements.taskNotes.value = task?.notes || "";

  elements.taskDialog.showModal();
  elements.taskTitle.focus();
}

function saveTask(event) {
  event.preventDefault();

  const payload = {
    title: elements.taskTitle.value.trim(),
    owner: elements.taskOwner.value,
    status: elements.taskStatus.value,
    priority: elements.taskPriority.value,
    points: Number(elements.taskPoints.value),
    tags: ["Custom", elements.taskPriority.value],
    notes: elements.taskNotes.value.trim() || "No notes yet.",
  };

  if (state.editingTaskId) {
    tasks = tasks.map((task) =>
      task.id === state.editingTaskId
        ? {
            ...task,
            ...payload,
          }
        : task,
    );
    showToast(`${state.editingTaskId} updated.`);
  } else {
    const nextNumber = Math.max(...tasks.map((task) => Number(task.id.replace("OPS-", "")))) + 1;
    tasks.unshift({
      id: `OPS-${nextNumber}`,
      due: "May 15",
      blocked: false,
      ...payload,
    });
    showToast("New task created.");
  }

  elements.taskDialog.close();
  renderApp();
}

elements.globalSearch.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderApp();
});

elements.themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  localStorage.setItem("orbitops-theme", nextTheme);
  setIconButtons();
});

elements.newTaskButton.addEventListener("click", () => openTaskDialog());
elements.dialogClose.addEventListener("click", () => elements.taskDialog.close());
elements.taskForm.addEventListener("submit", saveTask);

elements.resolveButton.addEventListener("click", () => {
  const task = tasks.find((item) => item.id === state.editingTaskId);
  if (!task) return;
  task.blocked = !task.blocked;
  showToast(`${task.id} blocker ${task.blocked ? "added" : "cleared"}.`);
  elements.taskDialog.close();
  renderApp();
});

renderApp();
