export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 py-12 text-center">
      <div className="mb-6 h-px w-full bg-border-subtle"></div>
      <p className="mb-4 text-xs text-text-muted">
        Certifications: GitHub Foundations · Microsoft AI · IBM Cloud Essentials
      </p>
      <small className="block text-xs text-text-muted">
        &copy; {new Date().getFullYear()} Shanmukeshwar
      </small>
    </footer>
  );
}
