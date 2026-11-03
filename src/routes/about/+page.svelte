<script>
  import PageHead from '#lib/components/PageHead.svelte';
  import avatar from '#lib/assets/avatar.svg';
</script>

<PageHead
  title="About"
  description="Education, experience, projects, and skills of Wenjun Cai, software engineer and Northeastern University computer science master’s student."
  path="about/"
/>

<div class="container">
  <header class="page-intro profile">
    <img class="profile-avatar" src={avatar} alt="Pixel-art portrait of Wenjun Cai with curly brown hair and a black T-shirt" width="160" height="160" />
    <div>
      <p class="eyebrow">Player profile</p>
      <h1>About me</h1>
      <p class="lead">I’m Wenjun Cai, a software engineer finishing a Master of Science in Computer Science at Northeastern University in Seattle.</p>
    </div>
  </header>

  <nav class="jump-nav" aria-label="On this page">
    <ul class="tag-list">
      <li><a class="tag jump-link" href="#experience-heading">Experience</a></li>
      <li><a class="tag jump-link" href="#education-heading">Education</a></li>
      <li><a class="tag jump-link" href="#projects-heading">Projects</a></li>
      <li><a class="tag jump-link" href="#skills-heading">Skills</a></li>
    </ul>
  </nav>

  <section class="section" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>

    <article class="entry">
      <header class="entry-header">
        <h3>Amazon Web Services (AWS)</h3>
        <p class="entry-meta">Seattle, WA</p>
      </header>
      <h4>Software Development Engineer Intern <span class="entry-date"><time datetime="2026-06">June 2026</time> – <time datetime="2026-08">August 2026</time></span></h4>
      <h5>Certificate console rebuild</h5>
      <div class="workstreams">
        <section class="workstream">
          <h6>Frontend</h6>
          <ul>
            <li>Rebuilt 7 customer-facing pages of Amazon’s internal certificate console from JavaServer Pages into React and TypeScript, serving 3,000+ engineers.</li>
            <li>Reproduced legacy issuance logic in a 150+ rule engine that drives inline guidance, telling each user exactly which option fits their case.</li>
          </ul>
        </section>
        <section class="workstream">
          <h6>Backend for frontend</h6>
          <ul>
            <li>Owned the Node.js and Express layer behind the console, designing 9 REST endpoint groups that cover the full certificate lifecycle.</li>
            <li>Cached aggregated result ranges across pagination requests, cutting page-turn latency by 90%, from 4.9 seconds to under 1 second.</li>
            <li>Removed a 1,000-record ceiling and a 50-group listing cap with time-bounded, 8-way owner-group discovery, validated against 100,000+ profiles.</li>
            <li>Made certificate creation duplicate-safe by pinning writes to a single non-retried attempt.</li>
          </ul>
        </section>
        <section class="workstream">
          <h6>Testing</h6>
          <ul>
            <li>Built a frontend suite of 1,000+ tests across the 7 rebuilt pages, reaching 99% statement coverage on the certificate creation rule engine.</li>
            <li>Removed two flaky failure sources, including a 500 ms timer that survived test teardown, taking the suite’s false-failure rate from 50% to 0%.</li>
          </ul>
        </section>
      </div>
    </article>

    <article class="entry">
      <header class="entry-header">
        <h3>Chasing Financial Holdings</h3>
        <p class="entry-meta">Changsha, China</p>
      </header>
      <h4>Software Engineer Intern <span class="entry-date"><time datetime="2025-03">March 2025</time> – <time datetime="2025-06">June 2025</time></span></h4>
      <ul>
        <li>Shipped a role-based AI chat platform in Python on the Dify framework, serving 5,000+ users with scoped, permission-aware access controls.</li>
        <li>Designed the service backend on Spring Boot, MyBatis, and PostgreSQL behind the categorization pipeline and reporting dashboard.</li>
        <li>Built unified API interfaces around standardized DTOs so the frontend could render charts from one consistent response shape.</li>
        <li>Sped up dashboard queries by 50% by pre-aggregating the report views users opened most during peak hours.</li>
      </ul>
    </article>

    <article class="entry">
      <header class="entry-header">
        <h3>Zoomlion</h3>
        <p class="entry-meta">Changsha, China</p>
      </header>
      <h4>Software Engineer Intern <span class="entry-date"><time datetime="2022-06">June 2022</time> – <time datetime="2022-10">October 2022</time></span></h4>
      <ul>
        <li>Built an internal task scheduling platform on Apache DolphinScheduler and Spring Boot, orchestrating 500+ tasks every day.</li>
        <li>Built RESTful APIs for ERP integration backed by MySQL, keeping every scheduling endpoint under 200 ms.</li>
        <li>Cut manual scheduling effort by 60% through automated resource allocation and real-time task tracking.</li>
      </ul>
    </article>
  </section>

  <section class="section" aria-labelledby="education-heading">
    <h2 id="education-heading">Education</h2>
    <ul class="education-list plain-list">
      <li class="card">
        <h3>Northeastern University</h3>
        <p>Master of Science in Computer Science</p>
        <p class="entry-meta">Seattle, WA · <time datetime="2025-09">September 2025</time> – <time datetime="2027-05">May 2027</time></p>
      </li>
      <li class="card">
        <h3>Changsha University of Science and Technology</h3>
        <p>Bachelor of Engineering in Computer Science and Technology</p>
        <p class="entry-meta">Changsha, China · <time datetime="2020-09">September 2020</time> – <time datetime="2024-06">June 2024</time></p>
      </li>
    </ul>
  </section>

  <section class="section" aria-labelledby="projects-heading">
    <h2 id="projects-heading">Projects</h2>
    <ul class="project-list plain-list">
      <li>
        <article class="card project">
          <h3>Distributed E-Commerce Platform on AWS</h3>
          <ul class="tag-list" aria-label="Tech stack">
            <li class="tag">Java</li>
            <li class="tag">Spring Boot</li>
            <li class="tag">ECS Fargate</li>
            <li class="tag">RabbitMQ</li>
            <li class="tag">Redis</li>
            <li class="tag">Terraform</li>
          </ul>
          <ul>
            <li>Four Spring Boot microservices behind a path-routed load balancer, with the whole AWS stack codified in Terraform.</li>
            <li>Handled 117 requests per second from 400 concurrent users with autoscaling services on ECS Fargate.</li>
            <li>Reserve, authorize, and commit checkout with compare-and-set inventory in Redis, so items never oversell under load.</li>
          </ul>
        </article>
      </li>
      <li>
        <article class="card project">
          <h3>Replicated Key-Value Store with Tunable Consistency</h3>
          <ul class="tag-list" aria-label="Tech stack">
            <li class="tag">Java</li>
            <li class="tag">Spring Boot</li>
            <li class="tag">Kubernetes</li>
            <li class="tag">Docker</li>
            <li class="tag">Terraform</li>
          </ul>
          <ul>
            <li>In-memory store with leader-follower replication and configurable write and read quorums (5/1, 1/5, and 3/3).</li>
            <li>Leaderless any-node writes alongside the quorum modes, so each workload can pick its own consistency.</li>
            <li>Deployed 5-node clusters with Docker Compose and on Kubernetes, measuring a 1-second inconsistency window.</li>
          </ul>
        </article>
      </li>
      <li>
        <article class="card project">
          <h3>TBNet: Image Dehazing Network</h3>
          <ul class="tag-list" aria-label="Tech stack">
            <li class="tag">Python</li>
            <li class="tag">PyTorch</li>
            <li class="tag">TensorFlow</li>
            <li class="tag">OpenCV</li>
          </ul>
          <ul>
            <li>U-Net-based network with residual attention and multi-branch feature fusion for restoring images in bad weather.</li>
            <li>Beat existing dehazing methods by 15% on Foggy Cityscapes, with the biggest gains in low-light scenes.</li>
            <li>Reached a PSNR above 28 dB on standard dehazing benchmarks.</li>
          </ul>
        </article>
      </li>
    </ul>
  </section>

  <section class="section" aria-labelledby="skills-heading">
    <h2 id="skills-heading">Skills</h2>
    <div class="skill-groups">
      <section>
        <h3>Languages</h3>
        <ul class="tag-list">
          <li class="tag">Java</li>
          <li class="tag">TypeScript</li>
          <li class="tag">JavaScript</li>
          <li class="tag">Python</li>
          <li class="tag">SQL</li>
          <li class="tag">C++</li>
          <li class="tag">C</li>
          <li class="tag">C#</li>
        </ul>
      </section>
      <section>
        <h3>Backend and distributed systems</h3>
        <ul class="tag-list">
          <li class="tag">Spring Boot</li>
          <li class="tag">Spring Cloud</li>
          <li class="tag">Node.js</li>
          <li class="tag">Express</li>
          <li class="tag">REST APIs</li>
          <li class="tag">Microservices</li>
          <li class="tag">Kafka</li>
          <li class="tag">RabbitMQ</li>
          <li class="tag">Redis</li>
          <li class="tag">MySQL</li>
          <li class="tag">PostgreSQL</li>
          <li class="tag">MyBatis</li>
          <li class="tag">JUnit</li>
          <li class="tag">Swagger</li>
        </ul>
      </section>
      <section>
        <h3>Frontend</h3>
        <ul class="tag-list">
          <li class="tag">React</li>
          <li class="tag">Vue.js</li>
          <li class="tag">HTML</li>
          <li class="tag">CSS</li>
          <li class="tag">Vite</li>
          <li class="tag">Vitest</li>
          <li class="tag">React Testing Library</li>
          <li class="tag">Cloudscape Design System</li>
        </ul>
      </section>
      <section>
        <h3>Cloud and DevOps</h3>
        <ul class="tag-list">
          <li class="tag">AWS</li>
          <li class="tag">Docker</li>
          <li class="tag">Kubernetes</li>
          <li class="tag">Terraform</li>
          <li class="tag">AWS CDK</li>
          <li class="tag">CI/CD</li>
          <li class="tag">Linux</li>
          <li class="tag">Git</li>
        </ul>
      </section>
      <section>
        <h3>Machine learning and LLMs</h3>
        <ul class="tag-list">
          <li class="tag">PyTorch</li>
          <li class="tag">TensorFlow</li>
          <li class="tag">scikit-learn</li>
          <li class="tag">NumPy</li>
          <li class="tag">Pandas</li>
          <li class="tag">OpenCV</li>
          <li class="tag">Deep Learning</li>
          <li class="tag">Computer Vision</li>
          <li class="tag">Dify</li>
          <li class="tag">LLM Integration</li>
        </ul>
      </section>
    </div>
  </section>
</div>

<style>
  .profile {
    display: grid;
    gap: var(--space-5);
    align-items: center;
  }

  .profile p:last-child {
    margin-bottom: 0;
  }

  .profile-avatar {
    width: 8rem;
    height: 8rem;
    border: var(--border-width) solid var(--color-accent);
    border-radius: var(--radius);
    box-shadow: var(--pixel-offset) var(--pixel-offset) 0 var(--color-border);
    image-rendering: pixelated;
  }

  .jump-nav {
    padding-bottom: var(--space-2);
  }

  .jump-link {
    display: inline-flex;
    align-items: center;
    min-height: var(--tap-target);
    padding-inline: var(--space-4);
    color: var(--color-text);
    font-weight: 700;
    text-decoration: none;
    transition:
      border-color var(--duration-fast) var(--ease-out),
      color var(--duration-fast) var(--ease-out);
  }

  .jump-link:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .entry {
    position: relative;
    padding-left: var(--space-5);
    border-left: var(--border-width) solid var(--color-border);
  }

  .entry + .entry {
    margin-top: var(--space-7);
  }

  .entry::before {
    content: "";
    position: absolute;
    top: 0.3em;
    left: calc(-1 * var(--space-2) - var(--border-width) / 2);
    width: var(--space-4);
    height: var(--space-4);
    background-color: var(--color-accent);
  }

  .entry-header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--space-1) var(--space-4);
  }

  .entry-header h3 {
    margin-bottom: 0;
  }

  .entry-meta {
    margin: 0;
    color: var(--color-text-muted);
    font-size: var(--text-sm);
  }

  .entry h4 {
    margin-top: var(--space-3);
  }

  .entry-date {
    display: block;
    margin-top: var(--space-1);
    color: var(--color-text-muted);
    font-size: var(--text-sm);
    font-weight: 400;
  }

  .entry h5 {
    margin-top: var(--space-5);
    color: var(--color-accent);
  }

  .entry ul {
    max-width: var(--measure);
  }

  .workstreams {
    display: grid;
    gap: var(--space-4);
  }

  .workstream h6 {
    margin-bottom: var(--space-2);
  }

  .workstream ul {
    margin-bottom: 0;
  }

  .education-list,
  .project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
    gap: var(--space-5);
  }

  .education-list .card p {
    margin-bottom: var(--space-2);
  }

  .education-list .card p:last-child,
  .project ul:last-child {
    margin-bottom: 0;
  }

  .project {
    height: 100%;
  }

  .project .tag-list {
    margin-bottom: var(--space-4);
  }

  .skill-groups {
    display: grid;
    gap: var(--space-5);
  }

  .skill-groups h3 {
    font-size: var(--text-base);
    color: var(--color-text-muted);
  }

  @media (min-width: 40rem) {
    .profile {
      grid-template-columns: auto 1fr;
      gap: var(--space-6);
    }

    .profile-avatar {
      width: 10rem;
      height: 10rem;
    }
  }
</style>
