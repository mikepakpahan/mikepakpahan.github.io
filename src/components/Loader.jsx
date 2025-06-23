import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span> {/* Ini asumsinya adalah spinner atau indikator visual lain */}
      <p
        style={{
          fontSize: "14px",
          // ➡️ PERUBAHAN UTAMA: Warna teks dari #f1f1f1 (putih) ke warna gelap (textDark atau secondaryLight)
          color: "#1A1A1A", // Menggunakan textDark
          fontWeight: "800",
          marginTop: "40",
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
