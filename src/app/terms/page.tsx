"use client";

import Header from "@/components/Header";
import AmbientGradientBackground from "@/components/AmbientGradientBackground";
import Footer from "@/components/Footer";
import Link from "next/link";

const accent = "#b99887";

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "11px",
  fontWeight: 800,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#68c586",
  marginBottom: "12px",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "clamp(20px, 2.4vw, 24px)",
  color: accent,
  fontWeight: 800,
  marginBottom: "16px",
  letterSpacing: "-0.02em",
};

const paragraphStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "15px",
  color: "rgba(245, 230, 222, 0.82)",
  lineHeight: 1.75,
  margin: "0 0 16px 0",
};

const listStyle: React.CSSProperties = {
  fontFamily: "var(--font-karla), 'Karla', sans-serif",
  fontSize: "14.5px",
  color: "rgba(245, 230, 222, 0.78)",
  lineHeight: 1.75,
  paddingLeft: "20px",
  margin: "0 0 18px 0",
};

const termsSections = [
  {
    id: "01",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p style={paragraphStyle}>
          Welcome to Reelms. By creating an account, accessing, or using our websites, desktop applications, or web services (&ldquo;Service&rdquo; or &ldquo;Reelms&rdquo;), you enter into a binding legal agreement governed by these Terms of Use (&ldquo;Terms&rdquo;).
        </p>
        <p style={paragraphStyle}>
          If you do not agree with any part of these Terms, you may not register for or use the Service. We encourage you to review our dedicated <Link href="/safety/privacy" style={{ color: "#68c586", textDecoration: "underline" }}>Privacy Policy</Link> to understand our uncompromising data minimization principles.
        </p>
      </>
    ),
  },
  {
    id: "02",
    title: "2. Account Registration & Privacy-First Data",
    content: (
      <>
        <p style={paragraphStyle}>
          To access the platform, you must create a Reelms account. We strictly adhere to a <strong>zero-surveillance</strong> model:
        </p>
        <ul style={listStyle}>
          <li><strong>Minimal Data Collection:</strong> We only require and store the bare minimum information necessary to authenticate you (such as your chosen username, email address or handle, and cryptographically hashed password).</li>
          <li><strong>No Invasive Data:</strong> We do not ask for, collect, or process sensitive personal data, financial records, health data, or biometric data.</li>
          <li><strong>No Shadow Profiling:</strong> We do not track you across third-party websites or harvest your behavioral telemetry for advertisers.</li>
          <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
        </ul>
      </>
    ),
  },
  {
    id: "03",
    title: "3. User Conduct & Community Safety",
    content: (
      <>
        <p style={paragraphStyle}>
          Reelms is designed as a serene, respectful sanctuary for communities, squads, and creators. When using Reelms, you agree not to:
        </p>
        <ul style={listStyle}>
          <li>Engage in harassment, hate speech, bullying, doxxing, or threatening violence against individuals or groups.</li>
          <li>Distribute illegal content, malware, spyware, unauthorized exploits, or mass unsolicited spam.</li>
          <li>Attempt to reverse engineer, disrupt, overload, or compromise our server infrastructure or security measures.</li>
          <li>Impersonate Reelms staff, moderators, or other users with fraudulent intent.</li>
        </ul>
        <p style={paragraphStyle}>
          Community owners and moderators have the autonomy to establish additional room-specific guidelines within their Reelms, provided they comply with applicable laws and these Terms.
        </p>
      </>
    ),
  },
  {
    id: "04",
    title: "4. User Content & Intellectual Property",
    content: (
      <>
        <p style={paragraphStyle}>
          <strong>You retain 100% ownership of your content.</strong> Any messages, voice recordings, artwork, media files, or materials you publish or transmit on Reelms remain your intellectual property.
        </p>
        <p style={paragraphStyle}>
          You grant Reelms only the strictly limited, non-exclusive license necessary to host, store, and transmit your content to you and your intended recipients within your communities. We <strong>never</strong> use your private communications, files, or media to train machine learning or artificial intelligence models.
        </p>
      </>
    ),
  },
  {
    id: "05",
    title: "5. Reelms Ignite & Subscriptions",
    content: (
      <>
        <p style={paragraphStyle}>
          We offer optional premium tiers (such as <em>Reelms Ignite</em> and <em>Ignite All</em>) that provide enhanced streaming fidelity, expanded upload quotas, custom cosmetic badges, and community boosts.
        </p>
        <ul style={listStyle}>
          <li><strong>Transparent Pricing:</strong> All fees are clearly displayed prior to purchase without hidden surcharges or deceptive billing loops.</li>
          <li><strong>Cancellation & Refunds:</strong> You may cancel recurring perks at any time through your account settings. Subscriptions remain active until the end of the billing period.</li>
        </ul>
      </>
    ),
  },
  {
    id: "06",
    title: "6. Account Deletion & The Kill Switch",
    content: (
      <>
        <p style={paragraphStyle}>
          Your data is yours. If you decide to leave Reelms, you can initiate account deletion at any time directly from the settings panel.
        </p>
        <p style={paragraphStyle}>
          Upon account deletion, all personal identification records, credentials, and associated user states are permanently purged and hard-wiped from our active database systems within 24 hours.
        </p>
      </>
    ),
  },
  {
    id: "07",
    title: "7. Beta Platform & Disclaimers",
    content: (
      <>
        <p style={paragraphStyle}>
          Reelms is continuously evolving. The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. While we engineer our systems for high availability, low-latency performance, and rigorous data protection, we do not guarantee uninterrupted or error-free operation at all times.
        </p>
      </>
    ),
  },
  {
    id: "08",
    title: "8. Contact & Legal Inquiries",
    content: (
      <>
        <p style={paragraphStyle}>
          If you have questions, feedback, or legal notices concerning these Terms of Use, please reach out to us:
        </p>
        <p style={paragraphStyle}>
          <strong>Email:</strong> <a href="mailto:legal@reelms.io" style={{ color: "#68c586", textDecoration: "underline" }}>legal@reelms.io</a><br />
          <strong>Safety &amp; Vulnerability Reports:</strong> <Link href="/safety/report" style={{ color: "#68c586", textDecoration: "underline" }}>reelms.io/safety/report</Link>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden", backgroundColor: "#161314" }}>
      <AmbientGradientBackground />

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <Header />

        <main style={{ flex: 1, maxWidth: "860px", width: "100%", margin: "0 auto", padding: "48px 24px 80px" }}>
          {/* Page header */}
          <p style={sectionLabel}>Legal &amp; Policy</p>
          <h1
            style={{
              fontFamily: "var(--font-karla), 'Karla', sans-serif",
              fontSize: "clamp(28px, 5vw, 44px)",
              color: accent,
              fontWeight: 800,
              marginBottom: "12px",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Terms of Use
          </h1>
          <p
            style={{
              fontFamily: "var(--font-karla), 'Karla', sans-serif",
              fontSize: "14px",
              color: "rgba(185, 152, 135, 0.75)",
              marginBottom: "44px",
            }}
          >
            Last Updated: September 2026 • Official Terms of Service for Reelms
          </p>

          {/* Quick summary box */}
          <div
            style={{
              background: "rgba(185, 152, 135, 0.06)",
              border: "1px solid rgba(185, 152, 135, 0.2)",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "48px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ color: "#68c586", fontSize: "16px", fontWeight: 800 }}>✦</span>
              <span style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif", fontSize: "15px", fontWeight: 800, color: "#f5e6de" }}>
                Summary for Humans
              </span>
            </div>
            <p style={{ ...paragraphStyle, fontSize: "14px", margin: 0, color: "rgba(245, 230, 222, 0.75)" }}>
              We believe legal terms should be straightforward. We do not sell your personal data, we do not track you across the web, and we do not use your private conversations to train AI models. You own your content, and you can permanently delete your account at any time.
            </p>
          </div>

          {/* Sections List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {termsSections.map(section => (
              <section
                key={section.id}
                style={{
                  background: "rgba(24, 20, 22, 0.6)",
                  border: "1px solid rgba(185, 152, 135, 0.12)",
                  borderRadius: "18px",
                  padding: "clamp(20px, 3.5vw, 32px)",
                }}
              >
                <h2 style={sectionTitle}>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
