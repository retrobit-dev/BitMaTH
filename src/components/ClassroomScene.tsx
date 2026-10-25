/**
 * Panggung kelas — digambar sebagai blok piksel SVG (bukan gambar raster)
 * supaya tajam di semua ukuran dan warnanya bisa dikendalikan dari CSS.
 * Sudut isometrik ringan, tanpa gradien, semua tepi siku.
 */
export function ClassroomScene() {
  return (
    <svg
      className="stage"
      viewBox="0 0 320 220"
      preserveAspectRatio="xMidYMax slice"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* dinding */}
      <rect x="0" y="0" width="320" height="150" fill="#2b2620" />
      <rect x="0" y="0" width="320" height="22" fill="#242019" />
      <rect x="0" y="140" width="320" height="10" fill="#211d17" />

      {/* papan tulis */}
      <rect x="22" y="32" width="158" height="84" fill="#5d4526" />
      <rect x="25" y="35" width="152" height="78" fill="#25332a" />
      <rect x="25" y="35" width="152" height="2" fill="#1b261f" />
      <text
        x="34"
        y="56"
        fill="#c6cfc2"
        fontFamily="Silkscreen, monospace"
        fontSize="9"
        letterSpacing="0.5"
      >
        a² + b² = c²
      </text>
      <text
        x="34"
        y="70"
        fill="#a9b4a7"
        fontFamily="Silkscreen, monospace"
        fontSize="7"
        letterSpacing="0.5"
      >
        y = mx + c
      </text>
      <rect x="34" y="78" width="52" height="2" fill="#8d9a8b" />
      <rect x="34" y="86" width="38" height="2" fill="#7b887b" />
      <rect x="34" y="94" width="60" height="2" fill="#6f7c70" />
      <rect x="150" y="80" width="18" height="14" fill="#8d9a8b" opacity="0.5" />
      <rect x="148" y="104" width="24" height="3" fill="#c6cfc2" opacity="0.7" />

      {/* jendela malam */}
      <rect x="204" y="34" width="92" height="70" fill="#4a3f30" />
      <rect x="208" y="38" width="84" height="62" fill="#1b2331" />
      <rect x="208" y="38" width="84" height="10" fill="#232d3d" />
      <rect x="270" y="46" width="10" height="10" fill="#e6e0c8" />
      <rect x="272" y="48" width="6" height="6" fill="#cdd6d2" />
      <rect x="216" y="70" width="10" height="24" fill="#151b26" />
      <rect x="230" y="62" width="8" height="32" fill="#151b26" />
      <rect x="244" y="74" width="12" height="20" fill="#151b26" />
      <rect x="208" y="66" width="84" height="2" fill="#4a3f30" />
      <rect x="248" y="38" width="2" height="62" fill="#4a3f30" />
      <rect x="204" y="104" width="92" height="4" fill="#5d5142" />

      {/* jam dinding */}
      <rect x="188" y="52" width="12" height="12" fill="#3f372c" />
      <rect x="190" y="54" width="8" height="8" fill="#d9d2bd" />
      <rect x="193" y="55" width="1" height="4" fill="#2b2620" />
      <rect x="194" y="58" width="3" height="1" fill="#2b2620" />

      {/* lampu gantung */}
      <rect x="158" y="0" width="2" height="14" fill="#1a1611" />
      <rect x="150" y="12" width="18" height="6" fill="#3f372c" />
      <rect x="152" y="18" width="14" height="3" fill="#e2a92b" />

      {/* lantai */}
      <rect x="0" y="150" width="320" height="70" fill="#3a3129" />
      <rect x="0" y="150" width="320" height="3" fill="#463b30" />
      <rect x="0" y="168" width="320" height="1" fill="#332a23" />
      <rect x="0" y="188" width="320" height="1" fill="#332a23" />
      <rect x="0" y="206" width="320" height="1" fill="#332a23" />
      <rect x="60" y="150" width="1" height="70" fill="#332a23" />
      <rect x="140" y="150" width="1" height="70" fill="#332a23" />
      <rect x="230" y="150" width="1" height="70" fill="#332a23" />
      <rect x="300" y="150" width="1" height="70" fill="#332a23" />

      {/* meja murid (siluet) */}
      <rect x="238" y="150" width="62" height="6" fill="#54452f" />
      <rect x="240" y="156" width="58" height="20" fill="#3f3325" />
      <rect x="240" y="176" width="6" height="16" fill="#2e2519" />
      <rect x="292" y="176" width="6" height="16" fill="#2e2519" />
      <rect x="246" y="146" width="16" height="4" fill="#5d5142" />

      <rect x="8" y="162" width="54" height="5" fill="#54452f" />
      <rect x="10" y="167" width="50" height="18" fill="#3f3325" />
      <rect x="10" y="185" width="5" height="14" fill="#2e2519" />
      <rect x="55" y="185" width="5" height="14" fill="#2e2519" />

      {/* bayangan karakter */}
      <ellipse cx="196" cy="152" rx="13" ry="3" fill="#241d16" />

      {/* karakter guru */}
      <image
        href="/sprites/guru-pdh.png"
        x="184"
        y="88"
        width="24"
        height="64"
        preserveAspectRatio="xMidYMax meet"
      />
    </svg>
  )
}
