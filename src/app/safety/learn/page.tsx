import Header from "@/components/Header";

const bg = "color-mix(in srgb, #b99887 10%, #0c0c20)";
const accent = "#b99887";

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: accent,
  opacity: 0.4,
  marginBottom: "20px",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-dela), sans-serif",
  fontSize: "clamp(16px, 2vw, 20px)",
  color: accent,
  fontWeight: 400,
  marginBottom: "20px",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-jakarta), sans-serif",
  fontSize: "14px",
  color: accent,
  opacity: 0.65,
  lineHeight: 1.85,
};

const pillars = [
  { title: "Data Minimization", desc: "We only collect what is strictly necessary to provide the service." },
  { title: "Transparency", desc: "You should never have to guess how your data is being used." },
  { title: "User Control", desc: "Tools to export, delete, or restrict your data are built-in, not buried." },
  { title: "Security Excellence", desc: "Using industry-leading encryption and threat detection." },
];

const tableData = [
  { category: "Identity Data", examples: "Email, Username, IP Address", purpose: "Account security and session management.", retention: "Duration of account life." },
  { category: "Interaction Data", examples: "Prompts, Feedback, Settings", purpose: "Improving model accuracy and personalization.", retention: "18–24 months (de-identified)." },
  { category: "Technical Data", examples: "Browser type, Latency logs", purpose: "Troubleshooting and system optimization.", retention: "30–90 days." },
  { category: "Sensitive Data", examples: "Financial info, Health (if provided)", purpose: "Specifically encrypted; never used for training.", retention: "Immediate encryption / Short-term." },
];

const checklist = [
  "End-to-End Encryption (Transit)",
  "SOC2 Type II Compliance",
  "Multi-Factor Authentication (MFA) Support",
  "Regular Independent Security Audits",
];

const thirdParty = [
  { label: "Legal Compliance", desc: "When served with a valid legal warrant or subpoena." },
  { label: "Service Providers", desc: "Infrastructure partners (like cloud hosting) who are contractually bound to the same privacy standards." },
  { label: "Safety Emergency", desc: "To prevent imminent physical harm or threats to public safety." },
];

export default function LearnPage() {
  return (
    <div style={{ background: bg, minHeight: "100vh" }}>
      <Header />

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px 100px" }}>

        {/* Page title */}
        <p style={{ ...sectionLabel, marginBottom: "12px" }}>Safety &amp; Privacy</p>
        <h1 style={{
          fontFamily: "var(--font-dela), sans-serif",
          fontSize: "clamp(24px, 4vw, 38px)",
          color: accent,
          fontWeight: 400,
          marginBottom: "64px",
          lineHeight: 1.25,
        }}>
          Deep Dive: Safety, Privacy<br />&amp; Data{" "}
          <span style={{
            background: "linear-gradient(90deg, #b99887, #68c586)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Governance</span>
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>

          {/* 1. Core Pillars */}
          <section>
            <p style={sectionLabel}>01 — Core Pillars of Privacy</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {pillars.map(({ title, desc }) => (
                <div key={title} style={{
                  background: "rgba(185, 152, 135, 0.05)",
                  border: "1px solid rgba(185, 152, 135, 0.12)",
                  borderRadius: "16px",
                  padding: "20px 22px",
                }}>
                  <p style={{
                    fontFamily: "var(--font-dela), sans-serif",
                    fontSize: "14px",
                    color: accent,
                    marginBottom: "8px",
                  }}>{title}</p>
                  <p style={{ ...body, fontSize: "13px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Data Collection Table */}
          <section>
            <p style={sectionLabel}>02 — Data Collection &amp; Usage Logic</p>
            <p style={{ ...body, marginBottom: "24px" }}>
              Understanding what happens behind the scenes is crucial. The table below categorizes the types of data we interact with.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Data Category", "Examples", "Purpose", "Retention Period"].map(h => (
                      <th key={h} style={{
                        fontFamily: "var(--font-jakarta), sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: accent,
                        opacity: 0.4,
                        textAlign: "left",
                        padding: "10px 14px",
                        borderBottom: "1px solid rgba(185, 152, 135, 0.15)",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(185, 152, 135, 0.08)" }}>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px", opacity: 1, fontWeight: 600 }}>{row.category}</td>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.examples}</td>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.purpose}</td>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Encryption */}
          <section>
            <p style={sectionLabel}>03 — How We Protect Your Conversations</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={sectionTitle}>Encryption Standards</p>
                <p style={body}>
                  <strong style={{ opacity: 1 }}>In Transit:</strong> All data is encrypted using TLS 1.2+ (Transport Layer Security) to prevent man-in-the-middle attacks.
                </p>
                <p style={{ ...body, marginTop: "8px" }}>
                  <strong style={{ opacity: 1 }}>At Rest:</strong> Data stored on our servers uses AES-256 encryption, the same standard used by banks and government agencies.
                </p>
              </div>
              <div>
                <p style={sectionTitle}>The Anonymization Pipeline</p>
                <p style={body}>
                  Before any data is used to improve our systems, it undergoes a scrubbing process. Personal identifiers are detected and redacted before data reaches the research database.
                </p>
                <div style={{
                  background: "rgba(185, 152, 135, 0.05)",
                  border: "1px solid rgba(185, 152, 135, 0.12)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  marginTop: "16px",
                }}>
                  <p style={{ ...body, fontSize: "13px", fontStyle: "italic" }}>
                    Example: If a user types, &ldquo;My name is John Doe and I live in New York, help me with my taxes,&rdquo; our safety filters identify and redact &ldquo;John Doe&rdquo; and &ldquo;New York&rdquo; before the data reaches the research database.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Advanced Safety */}
          <section>
            <p style={sectionLabel}>04 — Advanced Safety Measures</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={sectionTitle}>Automated Classifiers</p>
                <p style={body}>These scan for Prohibited Content — hate speech, self-harm, or illegal acts — before any data is processed or stored.</p>
              </div>
              <div>
                <p style={sectionTitle}>Differential Privacy</p>
                <p style={body}>
                  A mathematical technique that adds &ldquo;noise&rdquo; to datasets. This allows us to learn patterns from a crowd without being able to identify a single individual.
                </p>
                <div style={{
                  background: "rgba(185, 152, 135, 0.05)",
                  border: "1px solid rgba(185, 152, 135, 0.12)",
                  borderRadius: "12px",
                  padding: "18px 24px",
                  marginTop: "16px",
                  textAlign: "center",
                }}>
                  <p style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "17px",
                    color: accent,
                    letterSpacing: "0.02em",
                    fontStyle: "italic",
                  }}>
                    P(M(D₁) ∈ O) ≤ e<sup>ε</sup> · P(M(D₂) ∈ O)
                  </p>
                  <p style={{ ...body, fontSize: "12px", marginTop: "10px" }}>
                    The probability of an outcome O is nearly identical whether or not a specific individual&rsquo;s data is included.
                  </p>
                </div>
              </div>
              <div>
                <p style={sectionTitle}>Red Teaming</p>
                <p style={body}>We hire ethical hackers to try and &ldquo;break&rdquo; our privacy protocols to find vulnerabilities before bad actors do.</p>
              </div>
            </div>
          </section>

          {/* 5. Rights */}
          <section>
            <p style={sectionLabel}>05 — Your Rights &amp; Controls</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={sectionTitle}>Data Portability</p>
                <p style={body}>You can request a full export of your interaction history at any time. We provide this in standard <code style={{ fontFamily: "monospace", opacity: 0.9 }}>.json</code> or <code style={{ fontFamily: "monospace", opacity: 0.9 }}>.csv</code> formats.</p>
              </div>
              <div>
                <p style={sectionTitle}>The &ldquo;Forget Me&rdquo; Option</p>
                <p style={body}>Under GDPR and CCPA regulations, you have the Right to Erasure.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "14px" }}>
                  {[
                    { label: "Individual Deletion", desc: "Delete specific chats." },
                    { label: "Account Deletion", desc: "Permanently wipe all associated data from our active production databases within 30 days." },
                  ].map(({ label, desc }) => (
                    <div key={label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: accent, opacity: 0.4, marginTop: "1px", flexShrink: 0 }}>—</span>
                      <p style={{ ...body, fontSize: "13px" }}>
                        <strong style={{ opacity: 1 }}>{label}:</strong> {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 6. Third-Party */}
          <section>
            <p style={sectionLabel}>06 — Third-Party Sharing Policies</p>
            <p style={{ ...body, marginBottom: "20px" }}>We do not sell your personal information to data brokers. Sharing only occurs in these specific scenarios:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {thirdParty.map(({ label, desc }) => (
                <div key={label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: accent, opacity: 0.4, marginTop: "1px", flexShrink: 0 }}>—</span>
                  <p style={{ ...body, fontSize: "13px" }}>
                    <strong style={{ opacity: 1 }}>{label}:</strong> {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Enterprise */}
          <section>
            <p style={sectionLabel}>07 — Enterprise &amp; Corporate Data Governance</p>
            <p style={{ ...body, marginBottom: "24px" }}>
              For professional environments, the &ldquo;Safety&rdquo; definition shifts from general privacy to Intellectual Property (IP) Protection and Compliance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={sectionTitle}>The Enterprise &ldquo;Zero-Retention&rdquo; Policy</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "No Training on Corporate Data", desc: "Unlike consumer versions, prompts and outputs from Enterprise accounts are never used to train the underlying models." },
                    { label: "Workspace Isolation", desc: 'Your data is siloed within your organization\'s instance. Information from "Company A" can never leak into the responses of "Company B."' },
                  ].map(({ label, desc }) => (
                    <div key={label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: accent, opacity: 0.4, marginTop: "1px", flexShrink: 0 }}>—</span>
                      <p style={{ ...body, fontSize: "13px" }}><strong style={{ opacity: 1 }}>{label}:</strong> {desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={sectionTitle}>Compliance &amp; Certifications</p>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        {["Standard", "Description", "Relevance"].map(h => (
                          <th key={h} style={{
                            fontFamily: "var(--font-jakarta), sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: accent,
                            opacity: 0.4,
                            textAlign: "left",
                            padding: "10px 14px",
                            borderBottom: "1px solid rgba(185, 152, 135, 0.15)",
                          }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { std: "ISO/IEC 27001", desc: "Information Security Management", rel: "Ensures systematic risk management." },
                        { std: "SOC 2 Type II", desc: "Trust Services Criteria", rel: "Independent audit of security and confidentiality." },
                        { std: "GDPR", desc: "General Data Protection Regulation", rel: "Protects the rights of EU-based employees and clients." },
                        { std: "HIPAA", desc: "Health Insurance Portability", rel: "(Optional) Compliance for medical/healthcare professionals." },
                      ].map((row, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid rgba(185, 152, 135, 0.08)" }}>
                          <td style={{ ...body, fontSize: "13px", padding: "14px 14px", opacity: 1, fontWeight: 600 }}>{row.std}</td>
                          <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.desc}</td>
                          <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.rel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Educational Safety */}
          <section>
            <p style={sectionLabel}>08 — Educational Safety &amp; Student Privacy</p>
            <p style={{ ...body, marginBottom: "24px" }}>
              When tools are used in a classroom setting (K–12 or Higher Ed), we apply a specialized safety layer designed for minors and academic integrity.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={sectionTitle}>Student Privacy Protections (COPPA &amp; FERPA)</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "COPPA Compliance", desc: "We do not collect personal information from children under 13 without verifiable parental/school consent." },
                    { label: "FERPA Alignment", desc: "Data is handled in accordance with the Family Educational Rights and Privacy Act, ensuring student records remain confidential and are only used for educational purposes." },
                  ].map(({ label, desc }) => (
                    <div key={label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: accent, opacity: 0.4, marginTop: "1px", flexShrink: 0 }}>—</span>
                      <p style={{ ...body, fontSize: "13px" }}><strong style={{ opacity: 1 }}>{label}:</strong> {desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={sectionTitle}>Academic Integrity &amp; Content Filtering</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Strict Age-Appropriate Filtering", desc: 'Our "Safety Classifiers" are tuned to a higher sensitivity for educational licenses, blocking adult content, extremist views, and age-inappropriate language.' },
                    { label: "Anti-Plagiarism Guardrails", desc: "While we assist in learning, we provide tools for educators to understand how AI is used in the writing process to maintain academic honesty." },
                    { label: "Proactive Mentorship Tone", desc: "The AI is programmed to act as a tutor, not a shortcut, encouraging critical thinking by providing explanations rather than just final answers." },
                  ].map(({ label, desc }) => (
                    <div key={label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ color: accent, opacity: 0.4, marginTop: "1px", flexShrink: 0 }}>—</span>
                      <p style={{ ...body, fontSize: "13px" }}><strong style={{ opacity: 1 }}>{label}:</strong> {desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 9. Comparative Framework */}
          <section>
            <p style={sectionLabel}>09 — Comparative Security Framework</p>
            <p style={{ ...body, marginBottom: "24px" }}>
              How your data is treated based on the environment.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Feature", "Individual (Free/Pro)", "Corporate (Enterprise)", "Educational (School)"].map(h => (
                      <th key={h} style={{
                        fontFamily: "var(--font-jakarta), sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: accent,
                        opacity: 0.4,
                        textAlign: "left",
                        padding: "10px 14px",
                        borderBottom: "1px solid rgba(185, 152, 135, 0.15)",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Model Training", ind: "Optional (Opt-out available)", corp: "Strictly Prohibited", edu: "Strictly Prohibited" },
                    { feature: "Admin Controls", ind: "Self-managed", corp: "Centralized IT Dashboard", edu: "School/District Admin" },
                    { feature: "Data Ownership", ind: "Shared/User", corp: "100% Client Owned", edu: "Managed via FERPA" },
                    { feature: "Safety Filters", ind: "Standard", corp: "Custom Professional", edu: "Maximum/Age-Strict" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(185, 152, 135, 0.08)" }}>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px", opacity: 1, fontWeight: 600 }}>{row.feature}</td>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.ind}</td>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.corp}</td>
                      <td style={{ ...body, fontSize: "13px", padding: "14px 14px" }}>{row.edu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Checklist + Pro Tip */}
          <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", alignItems: "start" }}>
            <div style={{
              background: "rgba(185, 152, 135, 0.05)",
              border: "1px solid rgba(185, 152, 135, 0.12)",
              borderRadius: "16px",
              padding: "24px",
            }}>
              <p style={{ ...sectionLabel, marginBottom: "16px" }}>Security Summary</p>
              {checklist.map(item => (
                <div key={item} style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ color: "#68c586", fontSize: "14px" }}>✓</span>
                  <p style={{ ...body, fontSize: "13px" }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{
              background: "rgba(185, 152, 135, 0.05)",
              border: "1px solid rgba(185, 152, 135, 0.12)",
              borderRadius: "16px",
              padding: "24px",
            }}>
              <p style={{ ...sectionLabel, marginBottom: "16px" }}>Pro Tip</p>
              <p style={{ ...body, fontSize: "13px" }}>
                For maximum privacy, avoid sharing sensitive Personally Identifiable Information (PII) like Social Security Numbers or credit card details directly in chat interfaces, even with high-level encryption.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
