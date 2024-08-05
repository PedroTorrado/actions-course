import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <header>
        <h1 style={{ fontSize: "2.5em", color: "#333" }}>
          Welcome to Tech Insights
        </h1>
        <h2 style={{ fontSize: "1.5em", color: "#555" }}>Hello World</h2>
      </header>
      <nav style={{ margin: "20px 0" }}>
        <Link
          href="/about"
          style={{
            margin: "0 15px",
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          style={{
            margin: "0 15px",
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          Contact
        </Link>
        <Link
          href="/blog"
          style={{
            margin: "0 15px",
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          Blog
        </Link>
      </nav>
      <section style={{ margin: "20px 0" }}>
        <input
          placeholder="Search"
          aria-label="Search"
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "400px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </section>
    </main>
  );
}
